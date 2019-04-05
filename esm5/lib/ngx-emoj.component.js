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
                    template: "\n    <div class=\"ngx-emoji-mart\"\n      [ngStyle]=\"\n      {'background-color': (theme.martBG || DEFAULTS.martBG),\n       'width': (width || DEFAULTS.martWidth),\n       'height': (height || DEFAULTS.martHeight),\n       'font-family': (theme.martFontFamily || DEFAULTS.martFontFamily),\n       'border-radius': (theme.martBorderRadius || DEFAULTS.martBorderRadius)}\">\n      <ngx-emoj-header\n        *ngIf=\"theme.martShowHeader\"\n        [headerBG]=\"(theme.martHeaderBG || DEFAULTS.martHeaderBG)\"\n        [headerFG]=\"(theme.martHeaderFG || DEFAULTS.martHeaderFG)\"\n        [headerFontSize]=\"(theme.martHeaderFontSize || DEFAULTS.martHeaderFontSize)\"\n        [headerPadding]=\"(theme.martHeaderPadding || DEFAULTS.martHeaderPadding)\"\n        [defaultActiveCategory]=\"'People'\"\n        [activeCategory]=\"activeCategory\"\n        (oncategorychange)=\"handleCategoryChange($event)\"\n        [martCategoryFontSize]=\"(theme.martCategoryFontSize || DEFAULTS.martCategoryFontSize)\"\n        [martCategoryColor]=\"(theme.martCategoryColor || DEFAULTS.martCategoryColor)\"\n        [martCategoryColorActive]=\"(theme.martCategoryColorActive || DEFAULTS.martCategoryColorActive)\"\n        [activeIndicatorColor]=\"(theme.martActiveCategoryIndicatorColor || DEFAULTS.martActiveCategoryIndicatorColor)\"\n        [activeIndicatorHeight]=\"(theme.martActiveCategoryIndicatorHeight || DEFAULTS.martActiveCategoryIndicatorHeight)\"\n        [emojiCategories]=\"emojiCategories\">\n      </ngx-emoj-header>\n\n      <ngx-emoj-category-content\n      [categoryName]=\"activeCategory\"\n      [categoryEmojiSet]=\"activeEmojiSet\"\n      [activeIndex]=\"activeIndex\"\n      [martEmojiNotFoundFG]=\"(theme.martEmojiNotFoundFG || DEFAULTS.martEmojiNotFoundFG)\"\n      [emojiNotFoundText]=\"(emojiNotFoundText || DEFAULTS.emojiNotFoundText)\"\n      [searchBoxStyle]=\"(theme.martSearchBoxStyle || DEFAULTS.martSearchBoxStyle)\"\n      [searchEmojiPlaceholderText]=\"(searchEmojiPlaceholderText || DEFAULTS.searchEmojiPlaceholderText)\"\n      [emojiBtnPadding]=\"(theme.martEmojiPadding || DEFAULTS.martEmojiPadding)\"\n      [emojiFontSize]=\"(theme.martEmojiFontSize || DEFAULTS.martEmojiFontSize)\"\n      (onpickemoji)=\"handleEmojiPick($event)\"\n      (oncontentSwipe)=\"handleContentSwipe($event)\"\n      (oncontentscroll)=\"handleContentScroll($event)\">\n      </ngx-emoj-category-content>\n      <ngx-emoj-footer\n      *ngIf=\"theme.martShowFooter\"\n      [footerBG]=\"(theme.martFooterBG || DEFAULTS.martFooterBG)\"\n      [footerFG]=\"(theme.martFooterFG || DEFAULTS.martFooterFG)\"\n      [footerFontSize]=\"(theme.martFooterFontSize || DEFAULTS.martFooterFontSize)\"\n      [footerPadding]=\"(theme.martFooterPadding || DEFAULTS.martFooterPadding)\"\n      [defaultActiveEmo]=\"'Emoji'\"\n      (onchardelete)=\"handleCharDelete($event)\"\n      (onemochange)=\"handleEmoChange($event)\"\n      [martCategoryFontSize]=\"(theme.martCategoryFontSize || DEFAULTS.martCategoryFontSize)\"\n      [martCategoryColor]=\"(theme.martCategoryColor || DEFAULTS.martCategoryColor)\"\n      [martCategoryColorActive]=\"(theme.martCategoryColorActive || DEFAULTS.martCategoryColorActive)\"\n      [activeIndicatorColor]=\"(theme.martActiveCategoryIndicatorColor || DEFAULTS.martActiveCategoryIndicatorColor)\"\n      [activeIndicatorHeight]=\"(theme.martActiveCategoryIndicatorHeight || DEFAULTS.martActiveCategoryIndicatorHeight)\"\n      [emos]=\"emos\"\n      [hideFooter]=\"hideFooter\">\n    </ngx-emoj-footer>\n\n    </div>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVtb2ouY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9vcC1lbW9qaS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZW1vai5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxRQUFRLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUl4QztJQTRHRTtRQTlCUyxhQUFRLEdBQUcsUUFBUSxDQUFDO1FBSW5CLGdCQUFXLEdBQVEsSUFBSSxZQUFZLENBQUM7UUFDcEMsaUJBQVksR0FBUSxJQUFJLFlBQVksQ0FBQzs7UUFJdEMsVUFBSyxHQUFVLEVBQUUsQ0FBQztRQUUzQixvQkFBZSxHQUFVLEVBQUUsQ0FBQzs7UUFHNUIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUtsQixlQUFVLEdBQVksS0FBSyxDQUFDO0lBWTVCLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFBQSxpQkFxQ0M7UUFuQ0MsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUksSUFBSSxDQUFDLG1CQUFtQixJQUFJLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztRQUM1RSxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLHNEQUFzRDtZQUN0RCxJQUFJLENB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Q3BEO2FBQ0o7U0FDRjtJQUNILENBQUM7O2dCQXZTRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSw0OUdBMERUOzZCQUNRLGlNQVdSO2lCQUNGOzs7Ozt3QkFPRSxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsTUFBTTsrQkFDTixNQUFNO3dCQUlOLEtBQUs7aUNBYUwsS0FBSztzQ0FDTCxLQUFLOzZDQUNMLEtBQUs7b0NBQ0wsS0FBSzs7SUFrTVIsdUJBQUM7Q0FBQSxBQXpTRCxJQXlTQztTQTdOWSxnQkFBZ0I7OztJQUUzQixvQ0FBNkI7O0lBRTdCLGlDQUF1Qjs7SUFDdkIsa0NBQXdCOztJQUN4Qix1Q0FBOEM7O0lBQzlDLHdDQUErQzs7SUFJL0MsaUNBQTJCOztJQUUzQiwyQ0FBNEI7O0lBRzVCLGdDQUFrQjs7SUFDbEIsMENBQXVCOztJQUN2QixxQ0FBa0I7O0lBQ2xCLHVDQUFvQjs7SUFDcEIsMENBQXNCOztJQUN0QixzQ0FBNEI7O0lBRzVCLDBDQUFnQzs7SUFDaEMsK0NBQXFDOztJQUNyQyxzREFBNEM7O0lBQzVDLDZDQUFtQzs7SUFFbkMsbUNBQWE7O0lBQ2Isc0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IFRoZW1lIGZyb20gJy4vaW50ZXJmYWNlcy9UaGVtZSc7XHJcbmltcG9ydCBERUZBVUxUUyBmcm9tICcuL21pc2MvZGVmYXVsdHMnO1xyXG5pbXBvcnQgeyBFTU9KSVMgfSBmcm9tICcuL21pc2MvZW1vamlzLmRhdGEnO1xyXG5pbXBvcnQgeyBFTU9TIH0gZnJvbSAnLi9taXNjL2Vtb3MuZGF0YSc7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWVtb2onLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibmd4LWVtb2ppLW1hcnRcIlxyXG4gICAgICBbbmdTdHlsZV09XCJcclxuICAgICAgeydiYWNrZ3JvdW5kLWNvbG9yJzogKHRoZW1lLm1hcnRCRyB8fCBERUZBVUxUUy5tYXJ0QkcpLFxyXG4gICAgICAgJ3dpZHRoJzogKHdpZHRoIHx8IERFRkFVTFRTLm1hcnRXaWR0aCksXHJcbiAgICAgICAnaGVpZ2h0JzogKGhlaWdodCB8fCBERUZBVUxUUy5tYXJ0SGVpZ2h0KSxcclxuICAgICAgICdmb250LWZhbWlseSc6ICh0aGVtZS5tYXJ0Rm9udEZhbWlseSB8fCBERUZBVUxUUy5tYXJ0Rm9udEZhbWlseSksXHJcbiAgICAgICAnYm9yZGVyLXJhZGl1cyc6ICh0aGVtZS5tYXJ0Qm9yZGVyUmFkaXVzIHx8IERFRkFVTFRTLm1hcnRCb3JkZXJSYWRpdXMpfVwiPlxyXG4gICAgICA8bmd4LWVtb2otaGVhZGVyXHJcbiAgICAgICAgKm5nSWY9XCJ0aGVtZS5tYXJ0U2hvd0hlYWRlclwiXHJcbiAgICAgICAgW2hlYWRlckJHXT1cIih0aGVtZS5tYXJ0SGVhZGVyQkcgfHwgREVGQVVMVFMubWFydEhlYWRlckJHKVwiXHJcbiAgICAgICAgW2hlYWRlckZHXT1cIih0aGVtZS5tYXJ0SGVhZGVyRkcgfHwgREVGQVVMVFMubWFydEhlYWRlckZHKVwiXHJcbiAgICAgICAgW2hlYWRlckZvbnRTaXplXT1cIih0aGVtZS5tYXJ0SGVhZGVyRm9udFNpemUgfHwgREVGQVVMVFMubWFydEhlYWRlckZvbnRTaXplKVwiXHJcbiAgICAgICAgW2hlYWRlclBhZGRpbmddPVwiKHRoZW1lLm1hcnRIZWFkZXJQYWRkaW5nIHx8IERFRkFVTFRTLm1hcnRIZWFkZXJQYWRkaW5nKVwiXHJcbiAgICAgICAgW2RlZmF1bHRBY3RpdmVDYXRlZ29yeV09XCInUGVvcGxlJ1wiXHJcbiAgICAgICAgW2FjdGl2ZUNhdGVnb3J5XT1cImFjdGl2ZUNhdGVnb3J5XCJcclxuICAgICAgICAob25jYXRlZ29yeWNoYW5nZSk9XCJoYW5kbGVDYXRlZ29yeUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbbWFydENhdGVnb3J5Rm9udFNpemVdPVwiKHRoZW1lLm1hcnRDYXRlZ29yeUZvbnRTaXplIHx8IERFRkFVTFRTLm1hcnRDYXRlZ29yeUZvbnRTaXplKVwiXHJcbiAgICAgICAgW21hcnRDYXRlZ29yeUNvbG9yXT1cIih0aGVtZS5tYXJ0Q2F0ZWdvcnlDb2xvciB8fCBERUZBVUxUUy5tYXJ0Q2F0ZWdvcnlDb2xvcilcIlxyXG4gICAgICAgIFttYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZV09XCIodGhlbWUubWFydENhdGVnb3J5Q29sb3JBY3RpdmUgfHwgREVGQVVMVFMubWFydENhdGVnb3J5Q29sb3JBY3RpdmUpXCJcclxuICAgICAgICBbYWN0aXZlSW5kaWNhdG9yQ29sb3JdPVwiKHRoZW1lLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckNvbG9yIHx8IERFRkFVTFRTLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckNvbG9yKVwiXHJcbiAgICAgICAgW2FjdGl2ZUluZGljYXRvckhlaWdodF09XCIodGhlbWUubWFydEFjdGl2ZUNhdGVnb3J5SW5kaWNhdG9ySGVpZ2h0IHx8IERFRkFVTFRTLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckhlaWdodClcIlxyXG4gICAgICAgIFtlbW9qaUNhdGVnb3JpZXNdPVwiZW1vamlDYXRlZ29yaWVzXCI+XHJcbiAgICAgIDwvbmd4LWVtb2otaGVhZGVyPlxyXG5cclxuICAgICAgPG5neC1lbW9qLWNhdGVnb3J5LWNvbnRlbnRcclxuICAgICAgW2NhdGVnb3J5TmFtZV09XCJhY3RpdmVDYXRlZ29yeVwiXHJcbiAgICAgIFtjYXRlZ29yeUVtb2ppU2V0XT1cImFjdGl2ZUVtb2ppU2V0XCJcclxuICAgICAgW2FjdGl2ZUluZGV4XT1cImFjdGl2ZUluZGV4XCJcclxuICAgICAgW21hcnRFbW9qaU5vdEZvdW5kRkddPVwiKHRoZW1lLm1hcnRFbW9qaU5vdEZvdW5kRkcgfHwgREVGQVVMVFMubWFydEVtb2ppTm90Rm91bmRGRylcIlxyXG4gICAgICBbZW1vamlOb3RGb3VuZFRleHRdPVwiKGVtb2ppTm90Rm91bmRUZXh0IHx8IERFRkFVTFRTLmVtb2ppTm90Rm91bmRUZXh0KVwiXHJcbiAgICAgIFtzZWFyY2hCb3hTdHlsZV09XCIodGhlbWUubWFydFNlYXJjaEJveFN0eWxlIHx8IERFRkFVTFRTLm1hcnRTZWFyY2hCb3hTdHlsZSlcIlxyXG4gICAgICBbc2VhcmNoRW1vamlQbGFjZWhvbGRlclRleHRdPVwiKHNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0IHx8IERFRkFVTFRTLnNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0KVwiXHJcbiAgICAgIFtlbW9qaUJ0blBhZGRpbmddPVwiKHRoZW1lLm1hcnRFbW9qaVBhZGRpbmcgfHwgREVGQVVMVFMubWFydEVtb2ppUGFkZGluZylcIlxyXG4gICAgICBbZW1vamlGb250U2l6ZV09XCIodGhlbWUubWFydEVtb2ppRm9udFNpemUgfHwgREVGQVVMVFMubWFydEVtb2ppRm9udFNpemUpXCJcclxuICAgICAgKG9ucGlja2Vtb2ppKT1cImhhbmRsZUVtb2ppUGljaygkZXZlbnQpXCJcclxuICAgICAgKG9uY29udGVudFN3aXBlKT1cImhhbmRsZUNvbnRlbnRTd2lwZSgkZXZlbnQpXCJcclxuICAgICAgKG9uY29udGVudHNjcm9sbCk9XCJoYW5kbGVDb250ZW50U2Nyb2xsKCRldmVudClcIj5cclxuICAgICAgPC9uZ3gtZW1vai1jYXRlZ29yeS1jb250ZW50PlxyXG4gICAgICA8bmd4LWVtb2otZm9vdGVyXHJcbiAgICAgICpuZ0lmPVwidGhlbWUubWFydFNob3dGb290ZXJcIlxyXG4gICAgICBbZm9vdGVyQkddPVwiKHRoZW1lLm1hcnRGb290ZXJCRyB8fCBERUZBVUxUUy5tYXJ0Rm9vdGVyQkcpXCJcclxuICAgICAgW2Zvb3RlckZHXT1cIih0aGVtZS5tYXJ0Rm9vdGVyRkcgfHwgREVGQVVMVFMubWFydEZvb3RlckZHKVwiXHJcbiAgICAgIFtmb290ZXJGb250U2l6ZV09XCIodGhlbWUubWFydEZvb3RlckZvbnRTaXplIHx8IERFRkFVTFRTLm1hcnRGb290ZXJGb250U2l6ZSlcIlxyXG4gICAgICBbZm9vdGVyUGFkZGluZ109XCIodGhlbWUubWFydEZvb3RlclBhZGRpbmcgfHwgREVGQVVMVFMubWFydEZvb3RlclBhZGRpbmcpXCJcclxuICAgICAgW2RlZmF1bHRBY3RpdmVFbW9dPVwiJ0Vtb2ppJ1wiXHJcbiAgICAgIChvbmNoYXJkZWxldGUpPVwiaGFuZGxlQ2hhckRlbGV0ZSgkZXZlbnQpXCJcclxuICAgICAgKG9uZW1vY2hhbmdlKT1cImhhbmRsZUVtb0NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgW21hcnRDYXRlZ29yeUZvbnRTaXplXT1cIih0aGVtZS5tYXJ0Q2F0ZWdvcnlGb250U2l6ZSB8fCBERUZBVUxUUy5tYXJ0Q2F0ZWdvcnlGb250U2l6ZSlcIlxyXG4gICAgICBbbWFydENhdGVnb3J5Q29sb3JdPVwiKHRoZW1lLm1hcnRDYXRlZ29yeUNvbG9yIHx8IERFRkFVTFRTLm1hcnRDYXRlZ29yeUNvbG9yKVwiXHJcbiAgICAgIFttYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZV09XCIodGhlbWUubWFydENhdGVnb3J5Q29sb3JBY3RpdmUgfHwgREVGQVVMVFMubWFydENhdGVnb3J5Q29sb3JBY3RpdmUpXCJcclxuICAgICAgW2FjdGl2ZUluZGljYXRvckNvbG9yXT1cIih0aGVtZS5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JDb2xvciB8fCBERUZBVUxUUy5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JDb2xvcilcIlxyXG4gICAgICBbYWN0aXZlSW5kaWNhdG9ySGVpZ2h0XT1cIih0aGVtZS5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JIZWlnaHQgfHwgREVGQVVMVFMubWFydEFjdGl2ZUNhdGVnb3J5SW5kaWNhdG9ySGVpZ2h0KVwiXHJcbiAgICAgIFtlbW9zXT1cImVtb3NcIlxyXG4gICAgICBbaGlkZUZvb3Rlcl09XCJoaWRlRm9vdGVyXCI+XHJcbiAgICA8L25neC1lbW9qLWZvb3Rlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuXHJcbiAgICAubmd4LWVtb2ppLW1hcnRcclxuICAgIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICBgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hFbW9qQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcmVhZG9ubHkgREVGQVVMVFMgPSBERUZBVUxUUztcclxuXHJcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZztcclxuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZztcclxuICBAT3V0cHV0KCkgb25lbW9qaXBpY2s6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcbiAgQE91dHB1dCgpIG9uY2hhcmRlbGV0ZTogYW55ID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuXHJcblxyXG4gIC8vIEluaXRpYWxseSAgYXBwbHkgZGVmYXVsdCBjb25maWcuLi5cclxuICBASW5wdXQoKSB0aGVtZTogVGhlbWUgPSB7fTtcclxuXHJcbiAgZW1vamlDYXRlZ29yaWVzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAvLyBsaXN0IG9mIGVtb3MgdHlwZSwgZS5nIGVtb2ppLCBnaWZzLCBzdGlja2Vycy4uLlxyXG4gIGVtb3M6IGFueSBbXSA9IFtdO1xyXG4gIGFjdGl2ZUNhdGVnb3J5OiBzdHJpbmc7XHJcbiAgYWN0aXZlRW1vOiBzdHJpbmc7XHJcbiAgYWN0aXZlSW5kZXg6IG51bWJlcjtcclxuICBhY3RpdmVFbW9qaVNldDogYW55W107XHJcbiAgaGlkZUZvb3RlcjogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgQElucHV0KCkgbWF4UmVjZW50RW1vamk6IHN0cmluZztcclxuICBASW5wdXQoKSByZWNlbnRFbW9qaVN0b3JlS2V5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VhcmNoRW1vamlQbGFjZWhvbGRlclRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBlbW9qaU5vdEZvdW5kVGV4dDogc3RyaW5nO1xyXG5cclxuICBlbW9qaURCOiBhbnk7XHJcbiAgZW1vamlEQktleTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIC8vIFNldCByZWNlbnQgZW1vamkgc3RvcmUga2V5Li4uXHJcbiAgICB0aGlzLmVtb2ppREJLZXkgID0gdGhpcy5yZWNlbnRFbW9qaVN0b3JlS2V5IHx8IERFRkFVTFRTLnJlY2VudEVtb2ppU3RvcmVLZXk7XHJcbiAgICAvLyBHZXQgcmVjZW50IGVtb2ppcy4uXHJcbiAgICB0aGlzLmVtb2ppREIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5lbW9qaURCS2V5KTtcclxuICAgIGlmICh0aGlzLmVtb2ppREIpIHtcclxuICAgIHRoaXMuZW1vamlEQiA9ICBKU09OLnBhcnNlKHRoaXMuZW1vamlEQik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBubyBzdG9yZWQgcmVjZW50IGVtb2ppLCBzYXZlIGluIHRoZSBzdG9yZSBhcnJheSAuLi5cclxuICAgICAgdGhpcy5lbW9qaURCID0gW107XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmVtb2ppREJLZXksIEpTT04uc3RyaW5naWZ5KHRoaXMuZW1vamlEQikpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSAnUGVvcGxlJztcclxuICAgIC8vIGdldCB0aGUgZW1vamkgY2F0ZWdvcmllc1xyXG4gICAgdGhpcy5lbW9qaUNhdGVnb3JpZXMgPSBFTU9KSVMubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICByZXR1cm4ge25hbWU6IHZhbHVlLm5hbWUsIGljb246IHZhbHVlLmljb259O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZmlsdGVyIHRvIHNldCBkZWZhdWx0c1xyXG4gICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IEVNT0pJUy5maWx0ZXIoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmIChjYXRlZ29yeS5uYW1lID09PSB0aGlzLmFjdGl2ZUNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IHRoaXMuYWN0aXZlRW1vamlTZXRbMF0uaWQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnSW5pdGlhbCBFbW8gSW5kZXg6JywgdGhpcy5hY3RpdmVJbmRleCk7XHJcbiAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gdGhpcy5hY3RpdmVFbW9qaVNldFswXS5lbW9qaXM7XHJcblxyXG5cclxuICAgIHRoaXMuYWN0aXZlRW1vID0gJ0Vtb2ppJztcclxuICAgIC8vIGNvbGxhdGUgdGhlIGVtb3MgdHlwZVxyXG4gICAgdGhpcy5lbW9zID0gRU1PUy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHJldHVybiB7bmFtZTogdmFsdWUubmFtZSwgaWNvbjogdmFsdWUuaWNvbn07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNhdGVnb3J5Q2hhbmdlKGUpIHtcclxuICAgIC8vIHNldCBhY3RpdmUgY2F0ZWdvcnkgbmFtZS4uLlxyXG4gICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IGUubmFtZTtcclxuXHJcbiAgICBpZiAoZS5uYW1lID09PSAnUmVjZW50Jykge1xyXG4gICAgICAgIC8vIElmIHJlY2VudCBjYXRlZ29yeSwgc2V0IGVtb2ppIHRvIGVtb2ppcyBpbiB0aGUgcmVjZW50IHN0b3JlLi4uXHJcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IEVNT0pJU1sxXS5pZDtcclxuICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gdGhpcy5lbW9qaURCO1xyXG4gICAgICB9IGVsc2UgaWYgKGUubmFtZSA9PT0gJ1NlYXJjaCcpIHtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBFTU9KSVNbMF0uaWQ7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gdGhpcy5lbW9qaURCLmNvbmNhdChFTU9KSVNbMl0uZW1vamlzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgLy8gZmlsdGVyIHRvIHNldCBjdXJyZW50IGVtb2ppIHNldC4uLlxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gRU1PSklTLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5uYW1lID09PSB0aGlzLmFjdGl2ZUNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgaW5kZXggb24gbWFudWFsIGNoYW5nZS4uLlxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gdGhpcy5hY3RpdmVFbW9qaVNldFswXS5pZDtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuYWN0aXZlRW1vamlTZXRbMF0uZW1vamlzO1xyXG5cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRW1vQ2hhbmdlKGUpIHtcclxuICAgIHRoaXMuYWN0aXZlRW1vID0gZS5uYW1lO1xyXG4gICAgLy8gY29sbGF0ZSB0aGUgZW1vcyB0eXBlXHJcbiAgLy8gICB0aGlzLmVtb3MgPSBFTU9TLm1hcCgodmFsdWUpID0+IHtcclxuICAvLyAgICByZXR1cm4ge25hbWU6IHZhbHVlLm5hbWUsIGljb246IHZhbHVlLmljb259O1xyXG4gIC8vICB9KTtcclxuIH1cclxuXHJcbiBjaGVja0lmRW1vamlFeGlzdHNJbkVtb2ppREIobmFtZSkge1xyXG4gIGxldCBlbW9fZXhpc3RzID0gZmFsc2U7XHJcbiAgLy8gY2hlY2tzIGlmIGVtb2ppIGlzIGFscmVhZHkgaW4gcmVjZW50IGVtb2ppIGRiIHN0b3JlLi4uXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVtb2ppREIubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICh0aGlzLmVtb2ppREJbaV1bMV0gPT09IG5hbWUpIHtcclxuICAgICAgZW1vX2V4aXN0cyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVtb19leGlzdHM7XHJcblxyXG4gfVxyXG4gIGFkZEVtb2ppVG9SZWNlbnRFbW9qaURCKGVtb2ppOiBzdHJpbmdbXSkge1xyXG4gICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgbm8gZHVwbGljYXRlXHJcbiAgICBpZiAoIXRoaXMuY2hlY2tJZkVtb2ppRXhpc3RzSW5FbW9qaURCKGVtb2ppWzFdKSkge1xyXG4gICAgICAgIC8vIHJlY2VudCBlbW9qaSBncmVhdGVyIHRoYW4gdGhlIG51bWJlciBvZiBtYXgsIHJlbW92ZSB0aGUgZmlyc3QgZW1vamkgYW5kIGFkZCBuZXcgb25lXHJcbiAgICAgICAgLy8gdG8gdGhlIGJhY2suLi5cclxuICAgICAgICBpZiAodGhpcy5lbW9qaURCLmxlbmd0aCA8ICh0aGlzLm1heFJlY2VudEVtb2ppIHx8IERFRkFVTFRTLm1heFJlY2VudEVtb2ppKSkge1xyXG4gICAgICAgICAgdGhpcy5lbW9qaURCLnB1c2goZW1vamkpO1xyXG4gICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZW1vamlEQktleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5lbW9qaURCKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbW9qaURCLnNwbGljZSgwLCAxKTtcclxuICAgICAgICB0aGlzLmVtb2ppREIucHVzaChlbW9qaSk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZW1vamlEQktleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5lbW9qaURCKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBoYW5kbGVFbW9qaVBpY2soZSkge1xyXG5cclxuICAgIC8vIHNhdmUgdGhlIHBpY2tlZCBlbW9qaSBpbnNpZGUgcmVjZW50IGVtb2ppIERCXHJcbiAgICB0aGlzLmFkZEVtb2ppVG9SZWNlbnRFbW9qaURCKGUuZW1vamkpO1xyXG5cclxuICAgIHRoaXMub25lbW9qaXBpY2suZW1pdCh7Y2hhcjogZS5lbW9qaVswXSwgbmFtZTogZS5lbW9qaVsxXX0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhckRlbGV0ZShlKSB7XHJcbiAgICB0aGlzLm9uY2hhcmRlbGV0ZS5lbWl0KHtkZWxldGVDaGFyOiB0cnVlfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDb250ZW50U2Nyb2xsKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdlbWl0dGVkJywgZS5zY3JvbGxUb3AsIGUuc2Nyb2xsSGVpZ2h0KTtcclxuXHJcbiAgICBpZiAoKGUuc2Nyb2xsSGVpZ2h0IC0gZS5zY3JvbGxUb3ApIDw9IDQwMCkge1xyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coJ2FsbW9zdCBhdCB0aGUgZW5kJyk7XHJcbiAgICAgIHRoaXMuaGlkZUZvb3RlciA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygndG9vcGluZyB0aGUgc2Nyb2xsJyk7XHJcbiAgICAgIHRoaXMuaGlkZUZvb3RlciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ29udGVudFN3aXBlKGUpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuYWN0aXZlSW5kZXg7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBlLmRpcmVjdGlvbjtcclxuICAgIC8vIExvZyB0aGUgbmVjZXNzYXJ5IGRldGFpbHMuLi5cclxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICBjb25zdCBwcmV2OiBudW1iZXIgPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICBpZiAocHJldiA+PSAwKSB7XHJcblxyXG4gICAgICAgIGlmIChwcmV2ID09PSAwKSB7XHJcbiAgICAgICAgICAvLyBzZWFyY2hcclxuICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBFTU9KSVNbMF0uaWQ7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gRU1PSklTWzBdLm5hbWU7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gdGhpcy5lbW9qaURCLmNvbmNhdChFTU9KSVNbMl0uZW1vamlzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByZXYgPT09IDEgKSB7XHJcbiAgICAgICAgICAvLyByZWNlbnRcclxuICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBFTU9KSVNbMV0uaWQ7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gRU1PSklTWzFdLm5hbWU7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gdGhpcy5lbW9qaURCO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2Q2F0ZWdvcnlEYXRhID0gRU1PSklTLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5pZCA9PT0gcHJldikge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBzZXQgdGhlIHZhbHVlcy4uLlxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gcHJldjtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IHByZXZDYXRlZ29yeURhdGFbMF0ubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHByZXZDYXRlZ29yeURhdGFbMF0uZW1vamlzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcclxuICAgICAgICBjb25zdCBuZXh0ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICBpZiAobmV4dCA9PT0gMCkge1xyXG4gICAgICAgICAgLy8gc2VhcmNoXHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gRU1PSklTWzBdLmlkO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IEVNT0pJU1swXS5uYW1lO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuZW1vamlEQi5jb25jYXQoRU1PSklTWzJdLmVtb2ppcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0ID09PSAxICkge1xyXG4gICAgICAgICAgLy8gcmVjZW50XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gRU1PSklTWzFdLmlkO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuZW1vamlEQjtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBFTU9KSVNbMV0ubmFtZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChuZXh0IDw9IChFTU9KSVMubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZDYXRlZ29yeURhdGEgPSBFTU9KSVMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkuaWQgPT09IG5leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAvLyBzZXQgdGhlIHZhbHVlcy4uLlxyXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBuZXh0O1xyXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBwcmV2Q2F0ZWdvcnlEYXRhWzBdLm5hbWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHByZXZDYXRlZ29yeURhdGFbMF0uZW1vamlzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19