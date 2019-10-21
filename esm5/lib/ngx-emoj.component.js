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
        this.emojiCategories = EMOJIS.map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            return { name: value.name, icon: value.icon };
        }));
        // filter to set defaults
        this.activeEmojiSet = EMOJIS.filter((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVtb2ouY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9vcC1lbW9qaS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZW1vai5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxRQUFRLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUl4QztJQTZHRTtRQTlCUyxhQUFRLEdBQUcsUUFBUSxDQUFDO1FBSW5CLGdCQUFXLEdBQVEsSUFBSSxZQUFZLENBQUM7UUFDcEMsaUJBQVksR0FBUSxJQUFJLFlBQVksQ0FBQzs7UUFJdEMsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUUzQixvQkFBZSxHQUFVLEVBQUUsQ0FBQzs7UUFHNUIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUtsQixlQUFVLEdBQVksS0FBSyxDQUFDO0lBWTVCLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFBQSxpQkFxQ0M7UUFuQ0MsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztRQUM1RSxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLHNEQUFzRDtZQUN0RCxJQUFJLENB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Q3BEO2FBQ0o7U0FDRjtJQUNILENBQUM7O2dCQXhTRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSxpbEhBMkRUOzZCQUNRLGlNQVdSO2lCQUNGOzs7Ozt3QkFPRSxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsTUFBTTsrQkFDTixNQUFNO3dCQUlOLEtBQUs7aUNBYUwsS0FBSztzQ0FDTCxLQUFLOzZDQUNMLEtBQUs7b0NBQ0wsS0FBSzs7SUFrTVIsdUJBQUM7Q0FBQSxBQTFTRCxJQTBTQztTQTdOWSxnQkFBZ0I7OztJQUUzQixvQ0FBNkI7O0lBRTdCLGlDQUF1Qjs7SUFDdkIsa0NBQXdCOztJQUN4Qix1Q0FBOEM7O0lBQzlDLHdDQUErQzs7SUFJL0MsaUNBQTJCOztJQUUzQiwyQ0FBNEI7O0lBRzVCLGdDQUFrQjs7SUFDbEIsMENBQXVCOztJQUN2QixxQ0FBa0I7O0lBQ2xCLHVDQUFvQjs7SUFDcEIsMENBQXNCOztJQUN0QixzQ0FBNEI7O0lBRzVCLDBDQUFnQzs7SUFDaEMsK0NBQXFDOztJQUNyQyxzREFBNEM7O0lBQzVDLDZDQUFtQzs7SUFFbkMsbUNBQWE7O0lBQ2Isc0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IFRoZW1lIGZyb20gJy4vaW50ZXJmYWNlcy9UaGVtZSc7XHJcbmltcG9ydCBERUZBVUxUUyBmcm9tICcuL21pc2MvZGVmYXVsdHMnO1xyXG5pbXBvcnQgeyBFTU9KSVMgfSBmcm9tICcuL21pc2MvZW1vamlzLmRhdGEnO1xyXG5pbXBvcnQgeyBFTU9TIH0gZnJvbSAnLi9taXNjL2Vtb3MuZGF0YSc7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWVtb2onLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibmd4LWVtb2ppLW1hcnRcIlxyXG4gICAgICBbbmdTdHlsZV09XCJcclxuICAgICAgeydiYWNrZ3JvdW5kLWNvbG9yJzogKHRoZW1lLm1hcnRCRyB8fCBERUZBVUxUUy5tYXJ0QkcpLFxyXG4gICAgICAgJ3dpZHRoJzogKHdpZHRoIHx8IERFRkFVTFRTLm1hcnRXaWR0aCksXHJcbiAgICAgICAnaGVpZ2h0JzogKGhlaWdodCB8fCBERUZBVUxUUy5tYXJ0SGVpZ2h0KSxcclxuICAgICAgICdmb250LWZhbWlseSc6ICh0aGVtZS5tYXJ0Rm9udEZhbWlseSB8fCBERUZBVUxUUy5tYXJ0Rm9udEZhbWlseSksXHJcbiAgICAgICAnYm9yZGVyLXJhZGl1cyc6ICh0aGVtZS5tYXJ0Qm9yZGVyUmFkaXVzIHx8IERFRkFVTFRTLm1hcnRCb3JkZXJSYWRpdXMpfVwiPlxyXG4gICAgICA8bmd4LWVtb2otaGVhZGVyXHJcbiAgICAgICAgKm5nSWY9XCJ0aGVtZS5tYXJ0U2hvd0hlYWRlclwiXHJcbiAgICAgICAgW2hlYWRlckJHXT1cIih0aGVtZS5tYXJ0SGVhZGVyQkcgfHwgREVGQVVMVFMubWFydEhlYWRlckJHKVwiXHJcbiAgICAgICAgW2hlYWRlckZHXT1cIih0aGVtZS5tYXJ0SGVhZGVyRkcgfHwgREVGQVVMVFMubWFydEhlYWRlckZHKVwiXHJcbiAgICAgICAgW2hlYWRlckZvbnRTaXplXT1cIih0aGVtZS5tYXJ0SGVhZGVyRm9udFNpemUgfHwgREVGQVVMVFMubWFydEhlYWRlckZvbnRTaXplKVwiXHJcbiAgICAgICAgW2hlYWRlclBhZGRpbmddPVwiKHRoZW1lLm1hcnRIZWFkZXJQYWRkaW5nIHx8IERFRkFVTFRTLm1hcnRIZWFkZXJQYWRkaW5nKVwiXHJcbiAgICAgICAgW2RlZmF1bHRBY3RpdmVDYXRlZ29yeV09XCInUGVvcGxlJ1wiXHJcbiAgICAgICAgW2FjdGl2ZUNhdGVnb3J5XT1cImFjdGl2ZUNhdGVnb3J5XCJcclxuICAgICAgICAob25jYXRlZ29yeWNoYW5nZSk9XCJoYW5kbGVDYXRlZ29yeUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbbWFydENhdGVnb3J5Rm9udFNpemVdPVwiKHRoZW1lLm1hcnRDYXRlZ29yeUZvbnRTaXplIHx8IERFRkFVTFRTLm1hcnRDYXRlZ29yeUZvbnRTaXplKVwiXHJcbiAgICAgICAgW21hcnRDYXRlZ29yeUNvbG9yXT1cIih0aGVtZS5tYXJ0Q2F0ZWdvcnlDb2xvciB8fCBERUZBVUxUUy5tYXJ0Q2F0ZWdvcnlDb2xvcilcIlxyXG4gICAgICAgIFttYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZV09XCIodGhlbWUubWFydENhdGVnb3J5Q29sb3JBY3RpdmUgfHwgREVGQVVMVFMubWFydENhdGVnb3J5Q29sb3JBY3RpdmUpXCJcclxuICAgICAgICBbYWN0aXZlSW5kaWNhdG9yQ29sb3JdPVwiKHRoZW1lLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckNvbG9yIHx8IERFRkFVTFRTLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckNvbG9yKVwiXHJcbiAgICAgICAgW2FjdGl2ZUluZGljYXRvckhlaWdodF09XCIodGhlbWUubWFydEFjdGl2ZUNhdGVnb3J5SW5kaWNhdG9ySGVpZ2h0IHx8IERFRkFVTFRTLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckhlaWdodClcIlxyXG4gICAgICAgIFtlbW9qaUNhdGVnb3JpZXNdPVwiZW1vamlDYXRlZ29yaWVzXCI+XHJcbiAgICAgIDwvbmd4LWVtb2otaGVhZGVyPlxyXG5cclxuICAgICAgPG5neC1lbW9qLWNhdGVnb3J5LWNvbnRlbnRcclxuICAgICAgW2NhdGVnb3J5TmFtZV09XCJhY3RpdmVDYXRlZ29yeVwiXHJcbiAgICAgIFtjYXRlZ29yeUVtb2ppU2V0XT1cImFjdGl2ZUVtb2ppU2V0XCJcclxuICAgICAgW2FjdGl2ZUluZGV4XT1cImFjdGl2ZUluZGV4XCJcclxuICAgICAgW21hcnRFbW9qaU5vdEZvdW5kRkddPVwiKHRoZW1lLm1hcnRFbW9qaU5vdEZvdW5kRkcgfHwgREVGQVVMVFMubWFydEVtb2ppTm90Rm91bmRGRylcIlxyXG4gICAgICBbZW1vamlOb3RGb3VuZFRleHRdPVwiKGVtb2ppTm90Rm91bmRUZXh0IHx8IERFRkFVTFRTLmVtb2ppTm90Rm91bmRUZXh0KVwiXHJcbiAgICAgIFtzZWFyY2hCb3hTdHlsZV09XCIodGhlbWUubWFydFNlYXJjaEJveFN0eWxlIHx8IERFRkFVTFRTLm1hcnRTZWFyY2hCb3hTdHlsZSlcIlxyXG4gICAgICBbc2VhcmNoRW1vamlQbGFjZWhvbGRlclRleHRdPVwiKHNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0IHx8IERFRkFVTFRTLnNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0KVwiXHJcbiAgICAgIFtlbW9qaUJ0blBhZGRpbmddPVwiKHRoZW1lLm1hcnRFbW9qaVBhZGRpbmcgfHwgREVGQVVMVFMubWFydEVtb2ppUGFkZGluZylcIlxyXG4gICAgICBbZW1vamlGb250U2l6ZV09XCIodGhlbWUubWFydEVtb2ppRm9udFNpemUgfHwgREVGQVVMVFMubWFydEVtb2ppRm9udFNpemUpXCJcclxuICAgICAgW21hcnRFbW9qaUNvbnRlbnRQYWRkaW5nTGVmdF09XCIodGhlbWUubWFydEVtb2ppQ29udGVudFBhZGRpbmdMZWZ0IHx8IERFRkFVTFRTLm1hcnRFbW9qaUNvbnRlbnRQYWRkaW5nTGVmdClcIlxyXG4gICAgICAob25waWNrZW1vamkpPVwiaGFuZGxlRW1vamlQaWNrKCRldmVudClcIlxyXG4gICAgICAob25jb250ZW50U3dpcGUpPVwiaGFuZGxlQ29udGVudFN3aXBlKCRldmVudClcIlxyXG4gICAgICAob25jb250ZW50c2Nyb2xsKT1cImhhbmRsZUNvbnRlbnRTY3JvbGwoJGV2ZW50KVwiPlxyXG4gICAgICA8L25neC1lbW9qLWNhdGVnb3J5LWNvbnRlbnQ+XHJcbiAgICAgIDxuZ3gtZW1vai1mb290ZXJcclxuICAgICAgKm5nSWY9XCJ0aGVtZS5tYXJ0U2hvd0Zvb3RlclwiXHJcbiAgICAgIFtmb290ZXJCR109XCIodGhlbWUubWFydEZvb3RlckJHIHx8IERFRkFVTFRTLm1hcnRGb290ZXJCRylcIlxyXG4gICAgICBbZm9vdGVyRkddPVwiKHRoZW1lLm1hcnRGb290ZXJGRyB8fCBERUZBVUxUUy5tYXJ0Rm9vdGVyRkcpXCJcclxuICAgICAgW2Zvb3RlckZvbnRTaXplXT1cIih0aGVtZS5tYXJ0Rm9vdGVyRm9udFNpemUgfHwgREVGQVVMVFMubWFydEZvb3RlckZvbnRTaXplKVwiXHJcbiAgICAgIFtmb290ZXJQYWRkaW5nXT1cIih0aGVtZS5tYXJ0Rm9vdGVyUGFkZGluZyB8fCBERUZBVUxUUy5tYXJ0Rm9vdGVyUGFkZGluZylcIlxyXG4gICAgICBbZGVmYXVsdEFjdGl2ZUVtb109XCInRW1vamknXCJcclxuICAgICAgKG9uY2hhcmRlbGV0ZSk9XCJoYW5kbGVDaGFyRGVsZXRlKCRldmVudClcIlxyXG4gICAgICAob25lbW9jaGFuZ2UpPVwiaGFuZGxlRW1vQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICBbbWFydENhdGVnb3J5Rm9udFNpemVdPVwiKHRoZW1lLm1hcnRDYXRlZ29yeUZvbnRTaXplIHx8IERFRkFVTFRTLm1hcnRDYXRlZ29yeUZvbnRTaXplKVwiXHJcbiAgICAgIFttYXJ0Q2F0ZWdvcnlDb2xvcl09XCIodGhlbWUubWFydENhdGVnb3J5Q29sb3IgfHwgREVGQVVMVFMubWFydENhdGVnb3J5Q29sb3IpXCJcclxuICAgICAgW21hcnRDYXRlZ29yeUNvbG9yQWN0aXZlXT1cIih0aGVtZS5tYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZSB8fCBERUZBVUxUUy5tYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZSlcIlxyXG4gICAgICBbYWN0aXZlSW5kaWNhdG9yQ29sb3JdPVwiKHRoZW1lLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckNvbG9yIHx8IERFRkFVTFRTLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckNvbG9yKVwiXHJcbiAgICAgIFthY3RpdmVJbmRpY2F0b3JIZWlnaHRdPVwiKHRoZW1lLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckhlaWdodCB8fCBERUZBVUxUUy5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JIZWlnaHQpXCJcclxuICAgICAgW2Vtb3NdPVwiZW1vc1wiXHJcbiAgICAgIFtoaWRlRm9vdGVyXT1cImhpZGVGb290ZXJcIj5cclxuICAgIDwvbmd4LWVtb2otZm9vdGVyPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG5cclxuICAgIC5uZ3gtZW1vamktbWFydFxyXG4gICAge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gIGBdXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE5neEVtb2pDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICByZWFkb25seSBERUZBVUxUUyA9IERFRkFVTFRTO1xyXG5cclxuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBvbmVtb2ppcGljazogYW55ID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICBAT3V0cHV0KCkgb25jaGFyZGVsZXRlOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuXHJcbiAgLy8gSW5pdGlhbGx5ICBhcHBseSBkZWZhdWx0IGNvbmZpZy4uLlxyXG4gIEBJbnB1dCgpIHRoZW1lOiBUaGVtZSA9IHt9O1xyXG5cclxuICBlbW9qaUNhdGVnb3JpZXM6IGFueVtdID0gW107XHJcblxyXG4gIC8vIGxpc3Qgb2YgZW1vcyB0eXBlLCBlLmcgZW1vamksIGdpZnMsIHN0aWNrZXJzLi4uXHJcbiAgZW1vczogYW55IFtdID0gW107XHJcbiAgYWN0aXZlQ2F0ZWdvcnk6IHN0cmluZztcclxuICBhY3RpdmVFbW86IHN0cmluZztcclxuICBhY3RpdmVJbmRleDogbnVtYmVyO1xyXG4gIGFjdGl2ZUVtb2ppU2V0OiBhbnlbXTtcclxuICBoaWRlRm9vdGVyOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICBASW5wdXQoKSBtYXhSZWNlbnRFbW9qaTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJlY2VudEVtb2ppU3RvcmVLZXk6IHN0cmluZztcclxuICBASW5wdXQoKSBzZWFyY2hFbW9qaVBsYWNlaG9sZGVyVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGVtb2ppTm90Rm91bmRUZXh0OiBzdHJpbmc7XHJcblxyXG4gIGVtb2ppREI6IGFueTtcclxuICBlbW9qaURCS2V5OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgLy8gU2V0IHJlY2VudCBlbW9qaSBzdG9yZSBrZXkuLi5cclxuICAgIHRoaXMuZW1vamlEQktleSAgPSB0aGlzLnJlY2VudEVtb2ppU3RvcmVLZXkgfHwgREVGQVVMVFMucmVjZW50RW1vamlTdG9yZUtleTtcclxuICAgIC8vIEdldCByZWNlbnQgZW1vamlzLi5cclxuICAgIHRoaXMuZW1vamlEQiA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmVtb2ppREJLZXkpO1xyXG4gICAgaWYgKHRoaXMuZW1vamlEQikge1xyXG4gICAgdGhpcy5lbW9qaURCID0gIEpTT04ucGFyc2UodGhpcy5lbW9qaURCKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIG5vIHN0b3JlZCByZWNlbnQgZW1vamksIHNhdmUgaW4gdGhlIHN0b3JlIGFycmF5IC4uLlxyXG4gICAgICB0aGlzLmVtb2ppREIgPSBbXTtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZW1vamlEQktleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5lbW9qaURCKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9ICdQZW9wbGUnO1xyXG4gICAgLy8gZ2V0IHRoZSBlbW9qaSBjYXRlZ29yaWVzXHJcbiAgICB0aGlzLmVtb2ppQ2F0ZWdvcmllcyA9IEVNT0pJUy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHJldHVybiB7bmFtZTogdmFsdWUubmFtZSwgaWNvbjogdmFsdWUuaWNvbn07XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBmaWx0ZXIgdG8gc2V0IGRlZmF1bHRzXHJcbiAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gRU1PSklTLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgaWYgKGNhdGVnb3J5Lm5hbWUgPT09IHRoaXMuYWN0aXZlQ2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gdGhpcy5hY3RpdmVFbW9qaVNldFswXS5pZDtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdJbml0aWFsIEVtbyBJbmRleDonLCB0aGlzLmFjdGl2ZUluZGV4KTtcclxuICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSB0aGlzLmFjdGl2ZUVtb2ppU2V0WzBdLmVtb2ppcztcclxuXHJcblxyXG4gICAgdGhpcy5hY3RpdmVFbW8gPSAnRW1vamknO1xyXG4gICAgLy8gY29sbGF0ZSB0aGUgZW1vcyB0eXBlXHJcbiAgICB0aGlzLmVtb3MgPSBFTU9TLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgcmV0dXJuIHtuYW1lOiB2YWx1ZS5uYW1lLCBpY29uOiB2YWx1ZS5pY29ufTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UoZSkge1xyXG4gICAgLy8gc2V0IGFjdGl2ZSBjYXRlZ29yeSBuYW1lLi4uXHJcbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gZS5uYW1lO1xyXG5cclxuICAgIGlmIChlLm5hbWUgPT09ICdSZWNlbnQnKSB7XHJcbiAgICAgICAgLy8gSWYgcmVjZW50IGNhdGVnb3J5LCBzZXQgZW1vamkgdG8gZW1vamlzIGluIHRoZSByZWNlbnQgc3RvcmUuLi5cclxuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gRU1PSklTWzFdLmlkO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSB0aGlzLmVtb2ppREI7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5uYW1lID09PSAnU2VhcmNoJykge1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IEVNT0pJU1swXS5pZDtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSB0aGlzLmVtb2ppREIuY29uY2F0KEVNT0pJU1syXS5lbW9qaXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAvLyBmaWx0ZXIgdG8gc2V0IGN1cnJlbnQgZW1vamkgc2V0Li4uXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSBFTU9KSVMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5Lm5hbWUgPT09IHRoaXMuYWN0aXZlQ2F0ZWdvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgLy8gdXBkYXRlIHRoZSBpbmRleCBvbiBtYW51YWwgY2hhbmdlLi4uXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSB0aGlzLmFjdGl2ZUVtb2ppU2V0WzBdLmlkO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gdGhpcy5hY3RpdmVFbW9qaVNldFswXS5lbW9qaXM7XHJcblxyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVFbW9DaGFuZ2UoZSkge1xyXG4gICAgdGhpcy5hY3RpdmVFbW8gPSBlLm5hbWU7XHJcbiAgICAvLyBjb2xsYXRlIHRoZSBlbW9zIHR5cGVcclxuICAvLyAgIHRoaXMuZW1vcyA9IEVNT1MubWFwKCh2YWx1ZSkgPT4ge1xyXG4gIC8vICAgIHJldHVybiB7bmFtZTogdmFsdWUubmFtZSwgaWNvbjogdmFsdWUuaWNvbn07XHJcbiAgLy8gIH0pO1xyXG4gfVxyXG5cclxuIGNoZWNrSWZFbW9qaUV4aXN0c0luRW1vamlEQihuYW1lKSB7XHJcbiAgbGV0IGVtb19leGlzdHMgPSBmYWxzZTtcclxuICAvLyBjaGVja3MgaWYgZW1vamkgaXMgYWxyZWFkeSBpbiByZWNlbnQgZW1vamkgZGIgc3RvcmUuLi5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW1vamlEQi5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHRoaXMuZW1vamlEQltpXVsxXSA9PT0gbmFtZSkge1xyXG4gICAgICBlbW9fZXhpc3RzID0gdHJ1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZW1vX2V4aXN0cztcclxuXHJcbiB9XHJcbiAgYWRkRW1vamlUb1JlY2VudEVtb2ppREIoZW1vamk6IHN0cmluZ1tdKSB7XHJcbiAgICAvLyBjaGVjayBpZiB0aGVyZSBpcyBubyBkdXBsaWNhdGVcclxuICAgIGlmICghdGhpcy5jaGVja0lmRW1vamlFeGlzdHNJbkVtb2ppREIoZW1vamlbMV0pKSB7XHJcbiAgICAgICAgLy8gcmVjZW50IGVtb2ppIGdyZWF0ZXIgdGhhbiB0aGUgbnVtYmVyIG9mIG1heCwgcmVtb3ZlIHRoZSBmaXJzdCBlbW9qaSBhbmQgYWRkIG5ldyBvbmVcclxuICAgICAgICAvLyB0byB0aGUgYmFjay4uLlxyXG4gICAgICAgIGlmICh0aGlzLmVtb2ppREIubGVuZ3RoIDwgKHRoaXMubWF4UmVjZW50RW1vamkgfHwgREVGQVVMVFMubWF4UmVjZW50RW1vamkpKSB7XHJcbiAgICAgICAgICB0aGlzLmVtb2ppREIucHVzaChlbW9qaSk7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5lbW9qaURCS2V5LCBKU09OLnN0cmluZ2lmeSh0aGlzLmVtb2ppREIpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVtb2ppREIuc3BsaWNlKDAsIDEpO1xyXG4gICAgICAgIHRoaXMuZW1vamlEQi5wdXNoKGVtb2ppKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5lbW9qaURCS2V5LCBKU09OLnN0cmluZ2lmeSh0aGlzLmVtb2ppREIpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGhhbmRsZUVtb2ppUGljayhlKSB7XHJcblxyXG4gICAgLy8gc2F2ZSB0aGUgcGlja2VkIGVtb2ppIGluc2lkZSByZWNlbnQgZW1vamkgREJcclxuICAgIHRoaXMuYWRkRW1vamlUb1JlY2VudEVtb2ppREIoZS5lbW9qaSk7XHJcblxyXG4gICAgdGhpcy5vbmVtb2ppcGljay5lbWl0KHtjaGFyOiBlLmVtb2ppWzBdLCBuYW1lOiBlLmVtb2ppWzFdfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFyRGVsZXRlKGUpIHtcclxuICAgIHRoaXMub25jaGFyZGVsZXRlLmVtaXQoe2RlbGV0ZUNoYXI6IHRydWV9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNvbnRlbnRTY3JvbGwoZSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2VtaXR0ZWQnLCBlLnNjcm9sbFRvcCwgZS5zY3JvbGxIZWlnaHQpO1xyXG5cclxuICAgIGlmICgoZS5zY3JvbGxIZWlnaHQgLSBlLnNjcm9sbFRvcCkgPD0gNDAwKSB7XHJcblxyXG4gICAgICAvLyBjb25zb2xlLmxvZygnYWxtb3N0IGF0IHRoZSBlbmQnKTtcclxuICAgICAgdGhpcy5oaWRlRm9vdGVyID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0b29waW5nIHRoZSBzY3JvbGwnKTtcclxuICAgICAgdGhpcy5oaWRlRm9vdGVyID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDb250ZW50U3dpcGUoZSkge1xyXG4gICAgY29uc3QgY3VycmVudEluZGV4ID0gdGhpcy5hY3RpdmVJbmRleDtcclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IGUuZGlyZWN0aW9uO1xyXG4gICAgLy8gTG9nIHRoZSBuZWNlc3NhcnkgZGV0YWlscy4uLlxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICAgIGNvbnN0IHByZXY6IG51bWJlciA9IGN1cnJlbnRJbmRleCAtIDE7XHJcbiAgICAgIGlmIChwcmV2ID49IDApIHtcclxuXHJcbiAgICAgICAgaWYgKHByZXYgPT09IDApIHtcclxuICAgICAgICAgIC8vIHNlYXJjaFxyXG4gICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IEVNT0pJU1swXS5pZDtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBFTU9KSVNbMF0ubmFtZTtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSB0aGlzLmVtb2ppREIuY29uY2F0KEVNT0pJU1syXS5lbW9qaXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJldiA9PT0gMSApIHtcclxuICAgICAgICAgIC8vIHJlY2VudFxyXG4gICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IEVNT0pJU1sxXS5pZDtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBFTU9KSVNbMV0ubmFtZTtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSB0aGlzLmVtb2ppREI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHByZXZDYXRlZ29yeURhdGEgPSBFTU9KSVMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5LmlkID09PSBwcmV2KSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIHNldCB0aGUgdmFsdWVzLi4uXHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBwcmV2O1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gcHJldkNhdGVnb3J5RGF0YVswXS5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gcHJldkNhdGVnb3J5RGF0YVswXS5lbW9qaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgICAgIGNvbnN0IG5leHQgPSBjdXJyZW50SW5kZXggKyAxO1xyXG4gICAgICAgIGlmIChuZXh0ID09PSAwKSB7XHJcbiAgICAgICAgICAvLyBzZWFyY2hcclxuICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBFTU9KSVNbMF0uaWQ7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gRU1PSklTWzBdLm5hbWU7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gdGhpcy5lbW9qaURCLmNvbmNhdChFTU9KSVNbMl0uZW1vamlzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5leHQgPT09IDEgKSB7XHJcbiAgICAgICAgICAvLyByZWNlbnRcclxuICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBFTU9KSVNbMV0uaWQ7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gdGhpcy5lbW9qaURCO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IEVNT0pJU1sxXS5uYW1lO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG5leHQgPD0gKEVNT0pJUy5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkNhdGVnb3J5RGF0YSA9IEVNT0pJUy5maWx0ZXIoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5pZCA9PT0gbmV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIC8vIHNldCB0aGUgdmFsdWVzLi4uXHJcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IG5leHQ7XHJcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IHByZXZDYXRlZ29yeURhdGFbMF0ubmFtZTtcclxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gcHJldkNhdGVnb3J5RGF0YVswXS5lbW9qaXM7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=