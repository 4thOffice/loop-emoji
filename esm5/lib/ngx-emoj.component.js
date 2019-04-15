/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import DEFAULTS from './misc/defaults';
import { EMOJIS } from './misc/emojis.data';
import { EMOS } from './misc/emos.data';
var NgxEmojComponent = /** @class */ (function () {
    function NgxEmojComponent() {
        this.DEFAULTS = DEFAULTS;
        this.onemojipick = new EventEmitter;
        this.onchardelete = new EventEmitter;
        // Initially  apply default config...
        this.theme = {};
        this.emojiCategories = [];
        // list of emos type, e.g emoji, gifs, stickers...
        this.emos = [];
        this.hideFooter = false;
    }
    /**
     * @return {?}
     */
    NgxEmojComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Set recent emoji store key...
        this.emojiDBKey = this.recentEmojiStoreKey || DEFAULTS.recentEmojiStoreKey;
        // Get recent emojis..
        this.emojiDB = window.localStorage.getItem(this.emojiDBKey);
        if (this.emojiDB) {
            this.emojiDB = JSON.parse(this.emojiDB);
        }
        else {
            // no stored recent emoji, save in the store array ...
            this.emojiDB = [];
            window.localStorage.setItem(this.emojiDBKey, JSON.stringify(this.emojiDB));
        }
        this.activeCategory = 'People';
        // get the emoji categories
        this.emojiCategories = EMOJIS.slice(1).map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return { name: value.name, icon: value.icon };
        }));
        // filter to set defaults
        this.activeEmojiSet = EMOJIS.slice(1).filter((/**
         * @param {?} category
         * @return {?}
         */
        function (category) {
            if (category.name === _this.activeCategory) {
                return category;
            }
        }));
        this.activeIndex = this.activeEmojiSet[0].id;
        // console.log('Initial Emo Index:', this.activeIndex);
        this.activeEmojiSet = this.activeEmojiSet[0].emojis;
        this.activeEmo = 'Emoji';
        // collate the emos type
        this.emos = EMOS.map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return { name: value.name, icon: value.icon };
        }));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojComponent.prototype.handleCategoryChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        // set active category name...
        this.activeCategory = e.name;
        if (e.name === 'Recent') {
            // If recent category, set emoji to emojis in the recent store...
            this.activeIndex = EMOJIS[1].id;
            this.activeEmojiSet = this.emojiDB;
        }
        else if (e.name === 'Search') {
            this.activeIndex = EMOJIS[0].id;
            this.activeEmojiSet = this.emojiDB.concat(EMOJIS[2].emojis);
        }
        else {
            // filter to set current emoji set...
            this.activeEmojiSet = EMOJIS.filter((/**
             * @param {?} category
             * @return {?}
             */
            function (category) {
                if (category.name === _this.activeCategory) {
                    return category;
                }
            }));
            // update the index on manual change...
            this.activeIndex = this.activeEmojiSet[0].id;
            this.activeEmojiSet = this.activeEmojiSet[0].emojis;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojComponent.prototype.handleEmoChange = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.activeEmo = e.name;
        // collate the emos type
        //   this.emos = EMOS.map((value) => {
        //    return {name: value.name, icon: value.icon};
        //  });
    };
    /**
     * @param {?} name
     * @return {?}
     */
    NgxEmojComponent.prototype.checkIfEmojiExistsInEmojiDB = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        /** @type {?} */
        var emo_exists = false;
        // checks if emoji is already in recent emoji db store...
        for (var i = 0; i < this.emojiDB.length; i++) {
            if (this.emojiDB[i][1] === name) {
                emo_exists = true;
                break;
            }
        }
        return emo_exists;
    };
    /**
     * @param {?} emoji
     * @return {?}
     */
    NgxEmojComponent.prototype.addEmojiToRecentEmojiDB = /**
     * @param {?} emoji
     * @return {?}
     */
    function (emoji) {
        // check if there is no duplicate
        if (!this.checkIfEmojiExistsInEmojiDB(emoji[1])) {
            // recent emoji greater than the number of max, remove the first emoji and add new one
            // to the back...
            if (this.emojiDB.length < (this.maxRecentEmoji || DEFAULTS.maxRecentEmoji)) {
                this.emojiDB.push(emoji);
                window.localStorage.setItem(this.emojiDBKey, JSON.stringify(this.emojiDB));
            }
            else {
                this.emojiDB.splice(0, 1);
                this.emojiDB.push(emoji);
                window.localStorage.setItem(this.emojiDBKey, JSON.stringify(this.emojiDB));
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojComponent.prototype.handleEmojiPick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // save the picked emoji inside recent emoji DB
        this.addEmojiToRecentEmojiDB(e.emoji);
        this.onemojipick.emit({ char: e.emoji[0], name: e.emoji[1] });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojComponent.prototype.handleCharDelete = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onchardelete.emit({ deleteChar: true });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojComponent.prototype.handleContentScroll = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // console.log('emitted', e.scrollTop, e.scrollHeight);
        if ((e.scrollHeight - e.scrollTop) <= 400) {
            // console.log('almost at the end');
            this.hideFooter = true;
        }
        else {
            // console.log('tooping the scroll');
            this.hideFooter = false;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojComponent.prototype.handleContentSwipe = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var currentIndex = this.activeIndex;
        /** @type {?} */
        var direction = e.direction;
        // Log the necessary details...
        if (direction === 'left') {
            /** @type {?} */
            var prev_1 = currentIndex - 1;
            if (prev_1 >= 0) {
                if (prev_1 === 0) {
                    // search
                    this.activeIndex = EMOJIS[0].id;
                    this.activeCategory = EMOJIS[0].name;
                    this.activeEmojiSet = this.emojiDB.concat(EMOJIS[2].emojis);
                }
                else if (prev_1 === 1) {
                    // recent
                    this.activeIndex = EMOJIS[1].id;
                    this.activeCategory = EMOJIS[1].name;
                    this.activeEmojiSet = this.emojiDB;
                }
                else {
                    /** @type {?} */
                    var prevCategoryData = EMOJIS.filter((/**
                     * @param {?} category
                     * @return {?}
                     */
                    function (category) {
                        if (category.id === prev_1) {
                            return category;
                        }
                    }));
                    // set the values...
                    this.activeIndex = prev_1;
                    this.activeCategory = prevCategoryData[0].name;
                    this.activeEmojiSet = prevCategoryData[0].emojis;
                }
            }
        }
        else if (direction === 'right') {
            /** @type {?} */
            var next_1 = currentIndex + 1;
            if (next_1 === 0) {
                // search
                this.activeIndex = EMOJIS[0].id;
                this.activeCategory = EMOJIS[0].name;
                this.activeEmojiSet = this.emojiDB.concat(EMOJIS[2].emojis);
            }
            else if (next_1 === 1) {
                // recent
                this.activeIndex = EMOJIS[1].id;
                this.activeEmojiSet = this.emojiDB;
                this.activeCategory = EMOJIS[1].name;
            }
            else {
                if (next_1 <= (EMOJIS.length - 1)) {
                    /** @type {?} */
                    var prevCategoryData = EMOJIS.filter((/**
                     * @param {?} category
                     * @return {?}
                     */
                    function (category) {
                        if (category.id === next_1) {
                            return category;
                        }
                    }));
                    // set the values...
                    this.activeIndex = next_1;
                    this.activeCategory = prevCategoryData[0].name;
                    this.activeEmojiSet = prevCategoryData[0].emojis;
                }
            }
        }
    };
    NgxEmojComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-emoj',
                    template: "\n    <div class=\"ngx-emoji-mart\"\n      [ngStyle]=\"\n      {'background-color': (theme.martBG || DEFAULTS.martBG),\n       'width': (width || DEFAULTS.martWidth),\n       'height': (height || DEFAULTS.martHeight),\n       'font-family': (theme.martFontFamily || DEFAULTS.martFontFamily),\n       'border-radius': (theme.martBorderRadius || DEFAULTS.martBorderRadius)}\">\n      <ngx-emoj-header\n        *ngIf=\"theme.martShowHeader\"\n        [headerBG]=\"(theme.martHeaderBG || DEFAULTS.martHeaderBG)\"\n        [headerFG]=\"(theme.martHeaderFG || DEFAULTS.martHeaderFG)\"\n        [headerFontSize]=\"(theme.martHeaderFontSize || DEFAULTS.martHeaderFontSize)\"\n        [headerPadding]=\"(theme.martHeaderPadding || DEFAULTS.martHeaderPadding)\"\n        [defaultActiveCategory]=\"'People'\"\n        [activeCategory]=\"activeCategory\"\n        (oncategorychange)=\"handleCategoryChange($event)\"\n        [martCategoryFontSize]=\"(theme.martCategoryFontSize || DEFAULTS.martCategoryFontSize)\"\n        [martCategoryColor]=\"(theme.martCategoryColor || DEFAULTS.martCategoryColor)\"\n        [martCategoryColorActive]=\"(theme.martCategoryColorActive || DEFAULTS.martCategoryColorActive)\"\n        [activeIndicatorColor]=\"(theme.martActiveCategoryIndicatorColor || DEFAULTS.martActiveCategoryIndicatorColor)\"\n        [activeIndicatorHeight]=\"(theme.martActiveCategoryIndicatorHeight || DEFAULTS.martActiveCategoryIndicatorHeight)\"\n        [emojiCategories]=\"emojiCategories\">\n      </ngx-emoj-header>\n\n      <ngx-emoj-category-content\n      [categoryName]=\"activeCategory\"\n      [categoryEmojiSet]=\"activeEmojiSet\"\n      [activeIndex]=\"activeIndex\"\n      [martEmojiNotFoundFG]=\"(theme.martEmojiNotFoundFG || DEFAULTS.martEmojiNotFoundFG)\"\n      [emojiNotFoundText]=\"(emojiNotFoundText || DEFAULTS.emojiNotFoundText)\"\n      [searchBoxStyle]=\"(theme.martSearchBoxStyle || DEFAULTS.martSearchBoxStyle)\"\n      [searchEmojiPlaceholderText]=\"(searchEmojiPlaceholderText || DEFAULTS.searchEmojiPlaceholderText)\"\n      [emojiBtnPadding]=\"(theme.martEmojiPadding || DEFAULTS.martEmojiPadding)\"\n      [emojiFontSize]=\"(theme.martEmojiFontSize || DEFAULTS.martEmojiFontSize)\"\n      [martEmojiContentPaddingLeft]=\"(theme.martEmojiContentPaddingLeft || DEFAULTS.martEmojiContentPaddingLeft)\"\n      (onpickemoji)=\"handleEmojiPick($event)\"\n      (oncontentSwipe)=\"handleContentSwipe($event)\"\n      (oncontentscroll)=\"handleContentScroll($event)\">\n      </ngx-emoj-category-content>\n      <ngx-emoj-footer\n      *ngIf=\"theme.martShowFooter\"\n      [footerBG]=\"(theme.martFooterBG || DEFAULTS.martFooterBG)\"\n      [footerFG]=\"(theme.martFooterFG || DEFAULTS.martFooterFG)\"\n      [footerFontSize]=\"(theme.martFooterFontSize || DEFAULTS.martFooterFontSize)\"\n      [footerPadding]=\"(theme.martFooterPadding || DEFAULTS.martFooterPadding)\"\n      [defaultActiveEmo]=\"'Emoji'\"\n      (onchardelete)=\"handleCharDelete($event)\"\n      (onemochange)=\"handleEmoChange($event)\"\n      [martCategoryFontSize]=\"(theme.martCategoryFontSize || DEFAULTS.martCategoryFontSize)\"\n      [martCategoryColor]=\"(theme.martCategoryColor || DEFAULTS.martCategoryColor)\"\n      [martCategoryColorActive]=\"(theme.martCategoryColorActive || DEFAULTS.martCategoryColorActive)\"\n      [activeIndicatorColor]=\"(theme.martActiveCategoryIndicatorColor || DEFAULTS.martActiveCategoryIndicatorColor)\"\n      [activeIndicatorHeight]=\"(theme.martActiveCategoryIndicatorHeight || DEFAULTS.martActiveCategoryIndicatorHeight)\"\n      [emos]=\"emos\"\n      [hideFooter]=\"hideFooter\">\n    </ngx-emoj-footer>\n\n    </div>\n  ",
                    styles: ["\n\n    .ngx-emoji-mart\n    {\n      position: relative;\n      margin: 0;\n      margin-bottom: 10px;\n      padding: 0px;\n      box-sizing: border-box;\n      overflow: hidden;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NgxEmojComponent.ctorParameters = function () { return []; };
    NgxEmojComponent.propDecorators = {
        width: [{ type: Input }],
        height: [{ type: Input }],
        onemojipick: [{ type: Output }],
        onchardelete: [{ type: Output }],
        theme: [{ type: Input }],
        maxRecentEmoji: [{ type: Input }],
        recentEmojiStoreKey: [{ type: Input }],
        searchEmojiPlaceholderText: [{ type: Input }],
        emojiNotFoundText: [{ type: Input }]
    };
    return NgxEmojComponent;
}());
export { NgxEmojComponent };
if (false) {
    /** @type {?} */
    NgxEmojComponent.prototype.DEFAULTS;
    /** @type {?} */
    NgxEmojComponent.prototype.width;
    /** @type {?} */
    NgxEmojComponent.prototype.height;
    /** @type {?} */
    NgxEmojComponent.prototype.onemojipick;
    /** @type {?} */
    NgxEmojComponent.prototype.onchardelete;
    /** @type {?} */
    NgxEmojComponent.prototype.theme;
    /** @type {?} */
    NgxEmojComponent.prototype.emojiCategories;
    /** @type {?} */
    NgxEmojComponent.prototype.emos;
    /** @type {?} */
    NgxEmojComponent.prototype.activeCategory;
    /** @type {?} */
    NgxEmojComponent.prototype.activeEmo;
    /** @type {?} */
    NgxEmojComponent.prototype.activeIndex;
    /** @type {?} */
    NgxEmojComponent.prototype.activeEmojiSet;
    /** @type {?} */
    NgxEmojComponent.prototype.hideFooter;
    /** @type {?} */
    NgxEmojComponent.prototype.maxRecentEmoji;
    /** @type {?} */
    NgxEmojComponent.prototype.recentEmojiStoreKey;
    /** @type {?} */
    NgxEmojComponent.prototype.searchEmojiPlaceholderText;
    /** @type {?} */
    NgxEmojComponent.prototype.emojiNotFoundText;
    /** @type {?} */
    NgxEmojComponent.prototype.emojiDB;
    /** @type {?} */
    NgxEmojComponent.prototype.emojiDBKey;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVtb2ouY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9vcC1lbW9qaS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZW1vai5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxRQUFRLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUl4QztJQTZHRTtRQTlCUyxhQUFRLEdBQUcsUUFBUSxDQUFDO1FBSW5CLGdCQUFXLEdBQVEsSUFBSSxZQUFZLENBQUM7UUFDcEMsaUJBQVksR0FBUSxJQUFJLFlBQVksQ0FBQzs7UUFJdEMsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUUzQixvQkFBZSxHQUFVLEVBQUUsQ0FBQzs7UUFHNUIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUtsQixlQUFVLEdBQVksS0FBSyxDQUFDO0lBWTVCLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFBQSxpQkFxQ0M7UUFuQ0MsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztRQUM1RSxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLHNEQUFzRDtZQUN0RCxJQUFJLENB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Y0FBYyxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztpQkFDcEQ7YUFDSjtTQUNGO0lBQ0gsQ0FBQzs7Z0JBeFNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLGlsSEEyRFQ7NkJBQ1EsaU1BV1I7aUJBQ0Y7Ozs7O3dCQU9FLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxNQUFNOytCQUNOLE1BQU07d0JBSU4sS0FBSztpQ0FhTCxLQUFLO3NDQUNMLEtBQUs7NkNBQ0wsS0FBSztvQ0FDTCxLQUFLOztJQWtNUix1QkFBQztDQUFBLEFBMVNELElBMFNDO1NBN05ZLGdCQUFnQjs7O0lBRTNCLG9DQUE2Qjs7SUFFN0IsaUNBQXVCOztJQUN2QixrQ0FBd0I7O0lBQ3hCLHVDQUE4Qzs7SUFDOUMsd0NBQStDOztJQUkvQyxpQ0FBMkI7O0lBRTNCLDJDQUE0Qjs7SUFHNUIsZ0NBQWtCOztJQUNsQiwwQ0FBdUI7O0lBQ3ZCLHFDQUFrQjs7SUFDbEIsdUNBQW9COztJQUNwQiwwQ0FBc0I7O0lBQ3RCLHNDQUE0Qjs7SUFHNUIsMENBQWdDOztJQUNoQywrQ0FBcUM7O0lBQ3JDLHNEQUE0Qzs7SUFDNUMsNkNBQW1DOztJQUVuQyxtQ0FBYTs7SUFDYixzQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi9pbnRlcmZhY2VzL1RoZW1lJztcclxuaW1wb3J0IERFRkFVTFRTIGZyb20gJy4vbWlzYy9kZWZhdWx0cyc7XHJcbmltcG9ydCB7IEVNT0pJUyB9IGZyb20gJy4vbWlzYy9lbW9qaXMuZGF0YSc7XHJcbmltcG9ydCB7IEVNT1MgfSBmcm9tICcuL21pc2MvZW1vcy5kYXRhJztcclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZW1vaicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJuZ3gtZW1vamktbWFydFwiXHJcbiAgICAgIFtuZ1N0eWxlXT1cIlxyXG4gICAgICB7J2JhY2tncm91bmQtY29sb3InOiAodGhlbWUubWFydEJHIHx8IERFRkFVTFRTLm1hcnRCRyksXHJcbiAgICAgICAnd2lkdGgnOiAod2lkdGggfHwgREVGQVVMVFMubWFydFdpZHRoKSxcclxuICAgICAgICdoZWlnaHQnOiAoaGVpZ2h0IHx8IERFRkFVTFRTLm1hcnRIZWlnaHQpLFxyXG4gICAgICAgJ2ZvbnQtZmFtaWx5JzogKHRoZW1lLm1hcnRGb250RmFtaWx5IHx8IERFRkFVTFRTLm1hcnRGb250RmFtaWx5KSxcclxuICAgICAgICdib3JkZXItcmFkaXVzJzogKHRoZW1lLm1hcnRCb3JkZXJSYWRpdXMgfHwgREVGQVVMVFMubWFydEJvcmRlclJhZGl1cyl9XCI+XHJcbiAgICAgIDxuZ3gtZW1vai1oZWFkZXJcclxuICAgICAgICAqbmdJZj1cInRoZW1lLm1hcnRTaG93SGVhZGVyXCJcclxuICAgICAgICBbaGVhZGVyQkddPVwiKHRoZW1lLm1hcnRIZWFkZXJCRyB8fCBERUZBVUxUUy5tYXJ0SGVhZGVyQkcpXCJcclxuICAgICAgICBbaGVhZGVyRkddPVwiKHRoZW1lLm1hcnRIZWFkZXJGRyB8fCBERUZBVUxUUy5tYXJ0SGVhZGVyRkcpXCJcclxuICAgICAgICBbaGVhZGVyRm9udFNpemVdPVwiKHRoZW1lLm1hcnRIZWFkZXJGb250U2l6ZSB8fCBERUZBVUxUUy5tYXJ0SGVhZGVyRm9udFNpemUpXCJcclxuICAgICAgICBbaGVhZGVyUGFkZGluZ109XCIodGhlbWUubWFydEhlYWRlclBhZGRpbmcgfHwgREVGQVVMVFMubWFydEhlYWRlclBhZGRpbmcpXCJcclxuICAgICAgICBbZGVmYXVsdEFjdGl2ZUNhdGVnb3J5XT1cIidQZW9wbGUnXCJcclxuICAgICAgICBbYWN0aXZlQ2F0ZWdvcnldPVwiYWN0aXZlQ2F0ZWdvcnlcIlxyXG4gICAgICAgIChvbmNhdGVnb3J5Y2hhbmdlKT1cImhhbmRsZUNhdGVnb3J5Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFttYXJ0Q2F0ZWdvcnlGb250U2l6ZV09XCIodGhlbWUubWFydENhdGVnb3J5Rm9udFNpemUgfHwgREVGQVVMVFMubWFydENhdGVnb3J5Rm9udFNpemUpXCJcclxuICAgICAgICBbbWFydENhdGVnb3J5Q29sb3JdPVwiKHRoZW1lLm1hcnRDYXRlZ29yeUNvbG9yIHx8IERFRkFVTFRTLm1hcnRDYXRlZ29yeUNvbG9yKVwiXHJcbiAgICAgICAgW21hcnRDYXRlZ29yeUNvbG9yQWN0aXZlXT1cIih0aGVtZS5tYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZSB8fCBERUZBVUxUUy5tYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZSlcIlxyXG4gICAgICAgIFthY3RpdmVJbmRpY2F0b3JDb2xvcl09XCIodGhlbWUubWFydEFjdGl2ZUNhdGVnb3J5SW5kaWNhdG9yQ29sb3IgfHwgREVGQVVMVFMubWFydEFjdGl2ZUNhdGVnb3J5SW5kaWNhdG9yQ29sb3IpXCJcclxuICAgICAgICBbYWN0aXZlSW5kaWNhdG9ySGVpZ2h0XT1cIih0aGVtZS5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JIZWlnaHQgfHwgREVGQVVMVFMubWFydEFjdGl2ZUNhdGVnb3J5SW5kaWNhdG9ySGVpZ2h0KVwiXHJcbiAgICAgICAgW2Vtb2ppQ2F0ZWdvcmllc109XCJlbW9qaUNhdGVnb3JpZXNcIj5cclxuICAgICAgPC9uZ3gtZW1vai1oZWFkZXI+XHJcblxyXG4gICAgICA8bmd4LWVtb2otY2F0ZWdvcnktY29udGVudFxyXG4gICAgICBbY2F0ZWdvcnlOYW1lXT1cImFjdGl2ZUNhdGVnb3J5XCJcclxuICAgICAgW2NhdGVnb3J5RW1vamlTZXRdPVwiYWN0aXZlRW1vamlTZXRcIlxyXG4gICAgICBbYWN0aXZlSW5kZXhdPVwiYWN0aXZlSW5kZXhcIlxyXG4gICAgICBbbWFydEVtb2ppTm90Rm91bmRGR109XCIodGhlbWUubWFydEVtb2ppTm90Rm91bmRGRyB8fCBERUZBVUxUUy5tYXJ0RW1vamlOb3RGb3VuZEZHKVwiXHJcbiAgICAgIFtlbW9qaU5vdEZvdW5kVGV4dF09XCIoZW1vamlOb3RGb3VuZFRleHQgfHwgREVGQVVMVFMuZW1vamlOb3RGb3VuZFRleHQpXCJcclxuICAgICAgW3NlYXJjaEJveFN0eWxlXT1cIih0aGVtZS5tYXJ0U2VhcmNoQm94U3R5bGUgfHwgREVGQVVMVFMubWFydFNlYXJjaEJveFN0eWxlKVwiXHJcbiAgICAgIFtzZWFyY2hFbW9qaVBsYWNlaG9sZGVyVGV4dF09XCIoc2VhcmNoRW1vamlQbGFjZWhvbGRlclRleHQgfHwgREVGQVVMVFMuc2VhcmNoRW1vamlQbGFjZWhvbGRlclRleHQpXCJcclxuICAgICAgW2Vtb2ppQnRuUGFkZGluZ109XCIodGhlbWUubWFydEVtb2ppUGFkZGluZyB8fCBERUZBVUxUUy5tYXJ0RW1vamlQYWRkaW5nKVwiXHJcbiAgICAgIFtlbW9qaUZvbnRTaXplXT1cIih0aGVtZS5tYXJ0RW1vamlGb250U2l6ZSB8fCBERUZBVUxUUy5tYXJ0RW1vamlGb250U2l6ZSlcIlxyXG4gICAgICBbbWFydEVtb2ppQ29udGVudFBhZGRpbmdMZWZ0XT1cIih0aGVtZS5tYXJ0RW1vamlDb250ZW50UGFkZGluZ0xlZnQgfHwgREVGQVVMVFMubWFydEVtb2ppQ29udGVudFBhZGRpbmdMZWZ0KVwiXHJcbiAgICAgIChvbnBpY2tlbW9qaSk9XCJoYW5kbGVFbW9qaVBpY2soJGV2ZW50KVwiXHJcbiAgICAgIChvbmNvbnRlbnRTd2lwZSk9XCJoYW5kbGVDb250ZW50U3dpcGUoJGV2ZW50KVwiXHJcbiAgICAgIChvbmNvbnRlbnRzY3JvbGwpPVwiaGFuZGxlQ29udGVudFNjcm9sbCgkZXZlbnQpXCI+XHJcbiAgICAgIDwvbmd4LWVtb2otY2F0ZWdvcnktY29udGVudD5cclxuICAgICAgPG5neC1lbW9qLWZvb3RlclxyXG4gICAgICAqbmdJZj1cInRoZW1lLm1hcnRTaG93Rm9vdGVyXCJcclxuICAgICAgW2Zvb3RlckJHXT1cIih0aGVtZS5tYXJ0Rm9vdGVyQkcgfHwgREVGQVVMVFMubWFydEZvb3RlckJHKVwiXHJcbiAgICAgIFtmb290ZXJGR109XCIodGhlbWUubWFydEZvb3RlckZHIHx8IERFRkFVTFRTLm1hcnRGb290ZXJGRylcIlxyXG4gICAgICBbZm9vdGVyRm9udFNpemVdPVwiKHRoZW1lLm1hcnRGb290ZXJGb250U2l6ZSB8fCBERUZBVUxUUy5tYXJ0Rm9vdGVyRm9udFNpemUpXCJcclxuICAgICAgW2Zvb3RlclBhZGRpbmddPVwiKHRoZW1lLm1hcnRGb290ZXJQYWRkaW5nIHx8IERFRkFVTFRTLm1hcnRGb290ZXJQYWRkaW5nKVwiXHJcbiAgICAgIFtkZWZhdWx0QWN0aXZlRW1vXT1cIidFbW9qaSdcIlxyXG4gICAgICAob25jaGFyZGVsZXRlKT1cImhhbmRsZUNoYXJEZWxldGUoJGV2ZW50KVwiXHJcbiAgICAgIChvbmVtb2NoYW5nZSk9XCJoYW5kbGVFbW9DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIFttYXJ0Q2F0ZWdvcnlGb250U2l6ZV09XCIodGhlbWUubWFydENhdGVnb3J5Rm9udFNpemUgfHwgREVGQVVMVFMubWFydENhdGVnb3J5Rm9udFNpemUpXCJcclxuICAgICAgW21hcnRDYXRlZ29yeUNvbG9yXT1cIih0aGVtZS5tYXJ0Q2F0ZWdvcnlDb2xvciB8fCBERUZBVUxUUy5tYXJ0Q2F0ZWdvcnlDb2xvcilcIlxyXG4gICAgICBbbWFydENhdGVnb3J5Q29sb3JBY3RpdmVdPVwiKHRoZW1lLm1hcnRDYXRlZ29yeUNvbG9yQWN0aXZlIHx8IERFRkFVTFRTLm1hcnRDYXRlZ29yeUNvbG9yQWN0aXZlKVwiXHJcbiAgICAgIFthY3RpdmVJbmRpY2F0b3JDb2xvcl09XCIodGhlbWUubWFydEFjdGl2ZUNhdGVnb3J5SW5kaWNhdG9yQ29sb3IgfHwgREVGQVVMVFMubWFydEFjdGl2ZUNhdGVnb3J5SW5kaWNhdG9yQ29sb3IpXCJcclxuICAgICAgW2FjdGl2ZUluZGljYXRvckhlaWdodF09XCIodGhlbWUubWFydEFjdGl2ZUNhdGVnb3J5SW5kaWNhdG9ySGVpZ2h0IHx8IERFRkFVTFRTLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckhlaWdodClcIlxyXG4gICAgICBbZW1vc109XCJlbW9zXCJcclxuICAgICAgW2hpZGVGb290ZXJdPVwiaGlkZUZvb3RlclwiPlxyXG4gICAgPC9uZ3gtZW1vai1mb290ZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcblxyXG4gICAgLm5neC1lbW9qaS1tYXJ0XHJcbiAgICB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgYF1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTmd4RW1vakNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHJlYWRvbmx5IERFRkFVTFRTID0gREVGQVVMVFM7XHJcblxyXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIG9uZW1vamlwaWNrOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gIEBPdXRwdXQoKSBvbmNoYXJkZWxldGU6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblxyXG5cclxuICAvLyBJbml0aWFsbHkgIGFwcGx5IGRlZmF1bHQgY29uZmlnLi4uXHJcbiAgQElucHV0KCkgdGhlbWU6IFRoZW1lID0ge307XHJcblxyXG4gIGVtb2ppQ2F0ZWdvcmllczogYW55W10gPSBbXTtcclxuXHJcbiAgLy8gbGlzdCBvZiBlbW9zIHR5cGUsIGUuZyBlbW9qaSwgZ2lmcywgc3RpY2tlcnMuLi5cclxuICBlbW9zOiBhbnkgW10gPSBbXTtcclxuICBhY3RpdmVDYXRlZ29yeTogc3RyaW5nO1xyXG4gIGFjdGl2ZUVtbzogc3RyaW5nO1xyXG4gIGFjdGl2ZUluZGV4OiBudW1iZXI7XHJcbiAgYWN0aXZlRW1vamlTZXQ6IGFueVtdO1xyXG4gIGhpZGVGb290ZXI6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIEBJbnB1dCgpIG1heFJlY2VudEVtb2ppOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmVjZW50RW1vamlTdG9yZUtleTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZW1vamlOb3RGb3VuZFRleHQ6IHN0cmluZztcclxuXHJcbiAgZW1vamlEQjogYW55O1xyXG4gIGVtb2ppREJLZXk6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAvLyBTZXQgcmVjZW50IGVtb2ppIHN0b3JlIGtleS4uLlxyXG4gICAgdGhpcy5lbW9qaURCS2V5ICA9IHRoaXMucmVjZW50RW1vamlTdG9yZUtleSB8fCBERUZBVUxUUy5yZWNlbnRFbW9qaVN0b3JlS2V5O1xyXG4gICAgLy8gR2V0IHJlY2VudCBlbW9qaXMuLlxyXG4gICAgdGhpcy5lbW9qaURCID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuZW1vamlEQktleSk7XHJcbiAgICBpZiAodGhpcy5lbW9qaURCKSB7XHJcbiAgICB0aGlzLmVtb2ppREIgPSAgSlNPTi5wYXJzZSh0aGlzLmVtb2ppREIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gbm8gc3RvcmVkIHJlY2VudCBlbW9qaSwgc2F2ZSBpbiB0aGUgc3RvcmUgYXJyYXkgLi4uXHJcbiAgICAgIHRoaXMuZW1vamlEQiA9IFtdO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5lbW9qaURCS2V5LCBKU09OLnN0cmluZ2lmeSh0aGlzLmVtb2ppREIpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gJ1Blb3BsZSc7XHJcbiAgICAvLyBnZXQgdGhlIGVtb2ppIGNhdGVnb3JpZXNcclxuICAgIHRoaXMuZW1vamlDYXRlZ29yaWVzID0gRU1PSklTLnNsaWNlKDEpLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgcmV0dXJuIHtuYW1lOiB2YWx1ZS5uYW1lLCBpY29uOiB2YWx1ZS5pY29ufTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGZpbHRlciB0byBzZXQgZGVmYXVsdHNcclxuICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSBFTU9KSVMuc2xpY2UoMSkuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoY2F0ZWdvcnkubmFtZSA9PT0gdGhpcy5hY3RpdmVDYXRlZ29yeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWN0aXZlSW5kZXggPSB0aGlzLmFjdGl2ZUVtb2ppU2V0WzBdLmlkO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0luaXRpYWwgRW1vIEluZGV4OicsIHRoaXMuYWN0aXZlSW5kZXgpO1xyXG4gICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuYWN0aXZlRW1vamlTZXRbMF0uZW1vamlzO1xyXG5cclxuXHJcbiAgICB0aGlzLmFjdGl2ZUVtbyA9ICdFbW9qaSc7XHJcbiAgICAvLyBjb2xsYXRlIHRoZSBlbW9zIHR5cGVcclxuICAgIHRoaXMuZW1vcyA9IEVNT1MubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICByZXR1cm4ge25hbWU6IHZhbHVlLm5hbWUsIGljb246IHZhbHVlLmljb259O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDYXRlZ29yeUNoYW5nZShlKSB7XHJcbiAgICAvLyBzZXQgYWN0aXZlIGNhdGVnb3J5IG5hbWUuLi5cclxuICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBlLm5hbWU7XHJcblxyXG4gICAgaWYgKGUubmFtZSA9PT0gJ1JlY2VudCcpIHtcclxuICAgICAgICAvLyBJZiByZWNlbnQgY2F0ZWdvcnksIHNldCBlbW9qaSB0byBlbW9qaXMgaW4gdGhlIHJlY2VudCBzdG9yZS4uLlxyXG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBFTU9KSVNbMV0uaWQ7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuZW1vamlEQjtcclxuICAgICAgfSBlbHNlIGlmIChlLm5hbWUgPT09ICdTZWFyY2gnKSB7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gRU1PSklTWzBdLmlkO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuZW1vamlEQi5jb25jYXQoRU1PSklTWzJdLmVtb2ppcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIC8vIGZpbHRlciB0byBzZXQgY3VycmVudCBlbW9qaSBzZXQuLi5cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IEVNT0pJUy5maWx0ZXIoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkubmFtZSA9PT0gdGhpcy5hY3RpdmVDYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGluZGV4IG9uIG1hbnVhbCBjaGFuZ2UuLi5cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHRoaXMuYWN0aXZlRW1vamlTZXRbMF0uaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSB0aGlzLmFjdGl2ZUVtb2ppU2V0WzBdLmVtb2ppcztcclxuXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUVtb0NoYW5nZShlKSB7XHJcbiAgICB0aGlzLmFjdGl2ZUVtbyA9IGUubmFtZTtcclxuICAgIC8vIGNvbGxhdGUgdGhlIGVtb3MgdHlwZVxyXG4gIC8vICAgdGhpcy5lbW9zID0gRU1PUy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgLy8gICAgcmV0dXJuIHtuYW1lOiB2YWx1ZS5uYW1lLCBpY29uOiB2YWx1ZS5pY29ufTtcclxuICAvLyAgfSk7XHJcbiB9XHJcblxyXG4gY2hlY2tJZkVtb2ppRXhpc3RzSW5FbW9qaURCKG5hbWUpIHtcclxuICBsZXQgZW1vX2V4aXN0cyA9IGZhbHNlO1xyXG4gIC8vIGNoZWNrcyBpZiBlbW9qaSBpcyBhbHJlYWR5IGluIHJlY2VudCBlbW9qaSBkYiBzdG9yZS4uLlxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbW9qaURCLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAodGhpcy5lbW9qaURCW2ldWzFdID09PSBuYW1lKSB7XHJcbiAgICAgIGVtb19leGlzdHMgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBlbW9fZXhpc3RzO1xyXG5cclxuIH1cclxuICBhZGRFbW9qaVRvUmVjZW50RW1vamlEQihlbW9qaTogc3RyaW5nW10pIHtcclxuICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIG5vIGR1cGxpY2F0ZVxyXG4gICAgaWYgKCF0aGlzLmNoZWNrSWZFbW9qaUV4aXN0c0luRW1vamlEQihlbW9qaVsxXSkpIHtcclxuICAgICAgICAvLyByZWNlbnQgZW1vamkgZ3JlYXRlciB0aGFuIHRoZSBudW1iZXIgb2YgbWF4LCByZW1vdmUgdGhlIGZpcnN0IGVtb2ppIGFuZCBhZGQgbmV3IG9uZVxyXG4gICAgICAgIC8vIHRvIHRoZSBiYWNrLi4uXHJcbiAgICAgICAgaWYgKHRoaXMuZW1vamlEQi5sZW5ndGggPCAodGhpcy5tYXhSZWNlbnRFbW9qaSB8fCBERUZBVUxUUy5tYXhSZWNlbnRFbW9qaSkpIHtcclxuICAgICAgICAgIHRoaXMuZW1vamlEQi5wdXNoKGVtb2ppKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmVtb2ppREJLZXksIEpTT04uc3RyaW5naWZ5KHRoaXMuZW1vamlEQikpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZW1vamlEQi5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgdGhpcy5lbW9qaURCLnB1c2goZW1vamkpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmVtb2ppREJLZXksIEpTT04uc3RyaW5naWZ5KHRoaXMuZW1vamlEQikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgaGFuZGxlRW1vamlQaWNrKGUpIHtcclxuXHJcbiAgICAvLyBzYXZlIHRoZSBwaWNrZWQgZW1vamkgaW5zaWRlIHJlY2VudCBlbW9qaSBEQlxyXG4gICAgdGhpcy5hZGRFbW9qaVRvUmVjZW50RW1vamlEQihlLmVtb2ppKTtcclxuXHJcbiAgICB0aGlzLm9uZW1vamlwaWNrLmVtaXQoe2NoYXI6IGUuZW1vamlbMF0sIG5hbWU6IGUuZW1vamlbMV19KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYXJEZWxldGUoZSkge1xyXG4gICAgdGhpcy5vbmNoYXJkZWxldGUuZW1pdCh7ZGVsZXRlQ2hhcjogdHJ1ZX0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ29udGVudFNjcm9sbChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZW1pdHRlZCcsIGUuc2Nyb2xsVG9wLCBlLnNjcm9sbEhlaWdodCk7XHJcblxyXG4gICAgaWYgKChlLnNjcm9sbEhlaWdodCAtIGUuc2Nyb2xsVG9wKSA8PSA0MDApIHtcclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdhbG1vc3QgYXQgdGhlIGVuZCcpO1xyXG4gICAgICB0aGlzLmhpZGVGb290ZXIgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3Rvb3BpbmcgdGhlIHNjcm9sbCcpO1xyXG4gICAgICB0aGlzLmhpZGVGb290ZXIgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNvbnRlbnRTd2lwZShlKSB7XHJcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmFjdGl2ZUluZGV4O1xyXG4gICAgY29uc3QgZGlyZWN0aW9uID0gZS5kaXJlY3Rpb247XHJcbiAgICAvLyBMb2cgdGhlIG5lY2Vzc2FyeSBkZXRhaWxzLi4uXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcclxuICAgICAgY29uc3QgcHJldjogbnVtYmVyID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgaWYgKHByZXYgPj0gMCkge1xyXG5cclxuICAgICAgICBpZiAocHJldiA9PT0gMCkge1xyXG4gICAgICAgICAgLy8gc2VhcmNoXHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gRU1PSklTWzBdLmlkO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IEVNT0pJU1swXS5uYW1lO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuZW1vamlEQi5jb25jYXQoRU1PSklTWzJdLmVtb2ppcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2ID09PSAxICkge1xyXG4gICAgICAgICAgLy8gcmVjZW50XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gRU1PSklTWzFdLmlkO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IEVNT0pJU1sxXS5uYW1lO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuZW1vamlEQjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcHJldkNhdGVnb3J5RGF0YSA9IEVNT0pJUy5maWx0ZXIoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkuaWQgPT09IHByZXYpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gc2V0IHRoZSB2YWx1ZXMuLi5cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHByZXY7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBwcmV2Q2F0ZWdvcnlEYXRhWzBdLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSBwcmV2Q2F0ZWdvcnlEYXRhWzBdLmVtb2ppcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgaWYgKG5leHQgPT09IDApIHtcclxuICAgICAgICAgIC8vIHNlYXJjaFxyXG4gICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IEVNT0pJU1swXS5pZDtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBFTU9KSVNbMF0ubmFtZTtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSB0aGlzLmVtb2ppREIuY29uY2F0KEVNT0pJU1syXS5lbW9qaXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV4dCA9PT0gMSApIHtcclxuICAgICAgICAgIC8vIHJlY2VudFxyXG4gICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IEVNT0pJU1sxXS5pZDtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSB0aGlzLmVtb2ppREI7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gRU1PSklTWzFdLm5hbWU7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAobmV4dCA8PSAoRU1PSklTLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2Q2F0ZWdvcnlEYXRhID0gRU1PSklTLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5LmlkID09PSBuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgLy8gc2V0IHRoZSB2YWx1ZXMuLi5cclxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gbmV4dDtcclxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gcHJldkNhdGVnb3J5RGF0YVswXS5uYW1lO1xyXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSBwcmV2Q2F0ZWdvcnlEYXRhWzBdLmVtb2ppcztcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==