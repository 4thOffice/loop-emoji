/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import DEFAULTS from './misc/defaults';
import { EMOJIS } from './misc/emojis.data';
import { EMOS } from './misc/emos.data';
export class NgxEmojComponent {
    constructor() {
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
    ngOnInit() {
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
        (value) => {
            return { name: value.name, icon: value.icon };
        }));
        // filter to set defaults
        this.activeEmojiSet = EMOJIS.slice(1).filter((/**
         * @param {?} category
         * @return {?}
         */
        (category) => {
            if (category.name === this.activeCategory) {
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
        (value) => {
            return { name: value.name, icon: value.icon };
        }));
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleCategoryChange(e) {
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
            (category) => {
                if (category.name === this.activeCategory) {
                    return category;
                }
            }));
            // update the index on manual change...
            this.activeIndex = this.activeEmojiSet[0].id;
            this.activeEmojiSet = this.activeEmojiSet[0].emojis;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleEmoChange(e) {
        this.activeEmo = e.name;
        // collate the emos type
        //   this.emos = EMOS.map((value) => {
        //    return {name: value.name, icon: value.icon};
        //  });
    }
    /**
     * @param {?} name
     * @return {?}
     */
    checkIfEmojiExistsInEmojiDB(name) {
        /** @type {?} */
        let emo_exists = false;
        // checks if emoji is already in recent emoji db store...
        for (let i = 0; i < this.emojiDB.length; i++) {
            if (this.emojiDB[i][1] === name) {
                emo_exists = true;
                break;
            }
        }
        return emo_exists;
    }
    /**
     * @param {?} emoji
     * @return {?}
     */
    addEmojiToRecentEmojiDB(emoji) {
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
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleEmojiPick(e) {
        // save the picked emoji inside recent emoji DB
        this.addEmojiToRecentEmojiDB(e.emoji);
        this.onemojipick.emit({ char: e.emoji[0], name: e.emoji[1] });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleCharDelete(e) {
        this.onchardelete.emit({ deleteChar: true });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleContentScroll(e) {
        // console.log('emitted', e.scrollTop, e.scrollHeight);
        if ((e.scrollHeight - e.scrollTop) <= 400) {
            // console.log('almost at the end');
            this.hideFooter = true;
        }
        else {
            // console.log('tooping the scroll');
            this.hideFooter = false;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleContentSwipe(e) {
        /** @type {?} */
        const currentIndex = this.activeIndex;
        /** @type {?} */
        const direction = e.direction;
        // Log the necessary details...
        if (direction === 'left') {
            /** @type {?} */
            const prev = currentIndex - 1;
            if (prev >= 0) {
                if (prev === 0) {
                    // search
                    this.activeIndex = EMOJIS[0].id;
                    this.activeCategory = EMOJIS[0].name;
                    this.activeEmojiSet = this.emojiDB.concat(EMOJIS[2].emojis);
                }
                else if (prev === 1) {
                    // recent
                    this.activeIndex = EMOJIS[1].id;
                    this.activeCategory = EMOJIS[1].name;
                    this.activeEmojiSet = this.emojiDB;
                }
                else {
                    /** @type {?} */
                    const prevCategoryData = EMOJIS.filter((/**
                     * @param {?} category
                     * @return {?}
                     */
                    (category) => {
                        if (category.id === prev) {
                            return category;
                        }
                    }));
                    // set the values...
                    this.activeIndex = prev;
                    this.activeCategory = prevCategoryData[0].name;
                    this.activeEmojiSet = prevCategoryData[0].emojis;
                }
            }
        }
        else if (direction === 'right') {
            /** @type {?} */
            const next = currentIndex + 1;
            if (next === 0) {
                // search
                this.activeIndex = EMOJIS[0].id;
                this.activeCategory = EMOJIS[0].name;
                this.activeEmojiSet = this.emojiDB.concat(EMOJIS[2].emojis);
            }
            else if (next === 1) {
                // recent
                this.activeIndex = EMOJIS[1].id;
                this.activeEmojiSet = this.emojiDB;
                this.activeCategory = EMOJIS[1].name;
            }
            else {
                if (next <= (EMOJIS.length - 1)) {
                    /** @type {?} */
                    const prevCategoryData = EMOJIS.filter((/**
                     * @param {?} category
                     * @return {?}
                     */
                    (category) => {
                        if (category.id === next) {
                            return category;
                        }
                    }));
                    // set the values...
                    this.activeIndex = next;
                    this.activeCategory = prevCategoryData[0].name;
                    this.activeEmojiSet = prevCategoryData[0].emojis;
                }
            }
        }
    }
}
NgxEmojComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-emoj',
                template: `
    <div class="ngx-emoji-mart"
      [ngStyle]="
      {'background-color': (theme.martBG || DEFAULTS.martBG),
       'width': (width || DEFAULTS.martWidth),
       'height': (height || DEFAULTS.martHeight),
       'font-family': (theme.martFontFamily || DEFAULTS.martFontFamily),
       'border-radius': (theme.martBorderRadius || DEFAULTS.martBorderRadius)}">
      <ngx-emoj-header
        *ngIf="theme.martShowHeader"
        [headerBG]="(theme.martHeaderBG || DEFAULTS.martHeaderBG)"
        [headerFG]="(theme.martHeaderFG || DEFAULTS.martHeaderFG)"
        [headerFontSize]="(theme.martHeaderFontSize || DEFAULTS.martHeaderFontSize)"
        [headerPadding]="(theme.martHeaderPadding || DEFAULTS.martHeaderPadding)"
        [defaultActiveCategory]="'People'"
        [activeCategory]="activeCategory"
        (oncategorychange)="handleCategoryChange($event)"
        [martCategoryFontSize]="(theme.martCategoryFontSize || DEFAULTS.martCategoryFontSize)"
        [martCategoryColor]="(theme.martCategoryColor || DEFAULTS.martCategoryColor)"
        [martCategoryColorActive]="(theme.martCategoryColorActive || DEFAULTS.martCategoryColorActive)"
        [activeIndicatorColor]="(theme.martActiveCategoryIndicatorColor || DEFAULTS.martActiveCategoryIndicatorColor)"
        [activeIndicatorHeight]="(theme.martActiveCategoryIndicatorHeight || DEFAULTS.martActiveCategoryIndicatorHeight)"
        [emojiCategories]="emojiCategories">
      </ngx-emoj-header>

      <ngx-emoj-category-content
      [categoryName]="activeCategory"
      [categoryEmojiSet]="activeEmojiSet"
      [activeIndex]="activeIndex"
      [martEmojiNotFoundFG]="(theme.martEmojiNotFoundFG || DEFAULTS.martEmojiNotFoundFG)"
      [emojiNotFoundText]="(emojiNotFoundText || DEFAULTS.emojiNotFoundText)"
      [searchBoxStyle]="(theme.martSearchBoxStyle || DEFAULTS.martSearchBoxStyle)"
      [searchEmojiPlaceholderText]="(searchEmojiPlaceholderText || DEFAULTS.searchEmojiPlaceholderText)"
      [emojiBtnPadding]="(theme.martEmojiPadding || DEFAULTS.martEmojiPadding)"
      [emojiFontSize]="(theme.martEmojiFontSize || DEFAULTS.martEmojiFontSize)"
      [martEmojiContentPaddingLeft]="(theme.martEmojiContentPaddingLeft || DEFAULTS.martEmojiContentPaddingLeft)"
      (onpickemoji)="handleEmojiPick($event)"
      (oncontentSwipe)="handleContentSwipe($event)"
      (oncontentscroll)="handleContentScroll($event)">
      </ngx-emoj-category-content>
      <ngx-emoj-footer
      *ngIf="theme.martShowFooter"
      [footerBG]="(theme.martFooterBG || DEFAULTS.martFooterBG)"
      [footerFG]="(theme.martFooterFG || DEFAULTS.martFooterFG)"
      [footerFontSize]="(theme.martFooterFontSize || DEFAULTS.martFooterFontSize)"
      [footerPadding]="(theme.martFooterPadding || DEFAULTS.martFooterPadding)"
      [defaultActiveEmo]="'Emoji'"
      (onchardelete)="handleCharDelete($event)"
      (onemochange)="handleEmoChange($event)"
      [martCategoryFontSize]="(theme.martCategoryFontSize || DEFAULTS.martCategoryFontSize)"
      [martCategoryColor]="(theme.martCategoryColor || DEFAULTS.martCategoryColor)"
      [martCategoryColorActive]="(theme.martCategoryColorActive || DEFAULTS.martCategoryColorActive)"
      [activeIndicatorColor]="(theme.martActiveCategoryIndicatorColor || DEFAULTS.martActiveCategoryIndicatorColor)"
      [activeIndicatorHeight]="(theme.martActiveCategoryIndicatorHeight || DEFAULTS.martActiveCategoryIndicatorHeight)"
      [emos]="emos"
      [hideFooter]="hideFooter">
    </ngx-emoj-footer>

    </div>
  `,
                styles: [`

    .ngx-emoji-mart
    {
      position: relative;
      margin: 0;
      margin-bottom: 10px;
      padding: 0px;
      box-sizing: border-box;
      overflow: hidden;
    }
  `]
            }] }
];
/** @nocollapse */
NgxEmojComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVtb2ouY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9vcC1lbW9qaS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZW1vai5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxRQUFRLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWlGeEMsTUFBTSxPQUFPLGdCQUFnQjtJQWdDM0I7UUE5QlMsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUluQixnQkFBVyxHQUFRLElBQUksWUFBWSxDQUFDO1FBQ3BDLGlCQUFZLEdBQVEsSUFBSSxZQUFZLENBQUM7O1FBSXRDLFVBQUssR0FBVSxFQUFFLENBQUM7UUFFM0Isb0JBQWUsR0FBVSxFQUFFLENBQUM7O1FBRzVCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFLbEIsZUFBVSxHQUFZLEtBQUssQ0FBQztJQVk1QixDQUFDOzs7O0lBRUQsUUFBUTtRQUVOLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxRQUFRLENBQUMsbUJBQW1CLENBQUM7UUFDNUUsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxzREFBc0Q7WUFDdEQsSUFBSSxDQUFD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QyxNQUFNLENBQUM7aUJBQ3BEO2FBQ0o7U0FDRjtJQUNILENBQUM7OztZQXhTRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyRFQ7eUJBQ1E7Ozs7Ozs7Ozs7O0dBV1I7YUFDRjs7Ozs7b0JBT0UsS0FBSztxQkFDTCxLQUFLOzBCQUNMLE1BQU07MkJBQ04sTUFBTTtvQkFJTixLQUFLOzZCQWFMLEtBQUs7a0NBQ0wsS0FBSzt5Q0FDTCxLQUFLO2dDQUNMLEtBQUs7Ozs7SUF6Qk4sb0NBQTZCOztJQUU3QixpQ0FBdUI7O0lBQ3ZCLGtDQUF3Qjs7SUFDeEIsdUNBQThDOztJQUM5Qyx3Q0FBK0M7O0lBSS9DLGlDQUEyQjs7SUFFM0IsMkNBQTRCOztJQUc1QixnQ0FBa0I7O0lBQ2xCLDBDQUF1Qjs7SUFDdkIscUNBQWtCOztJQUNsQix1Q0FBb0I7O0lBQ3BCLDBDQUFzQjs7SUFDdEIsc0NBQTRCOztJQUc1QiwwQ0FBZ0M7O0lBQ2hDLCtDQUFxQzs7SUFDckMsc0RBQTRDOztJQUM1Qyw2Q0FBbUM7O0lBRW5DLG1DQUFhOztJQUNiLHNDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCBUaGVtZSBmcm9tICcuL2ludGVyZmFjZXMvVGhlbWUnO1xyXG5pbXBvcnQgREVGQVVMVFMgZnJvbSAnLi9taXNjL2RlZmF1bHRzJztcclxuaW1wb3J0IHsgRU1PSklTIH0gZnJvbSAnLi9taXNjL2Vtb2ppcy5kYXRhJztcclxuaW1wb3J0IHsgRU1PUyB9IGZyb20gJy4vbWlzYy9lbW9zLmRhdGEnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1lbW9qJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cIm5neC1lbW9qaS1tYXJ0XCJcclxuICAgICAgW25nU3R5bGVdPVwiXHJcbiAgICAgIHsnYmFja2dyb3VuZC1jb2xvcic6ICh0aGVtZS5tYXJ0QkcgfHwgREVGQVVMVFMubWFydEJHKSxcclxuICAgICAgICd3aWR0aCc6ICh3aWR0aCB8fCBERUZBVUxUUy5tYXJ0V2lkdGgpLFxyXG4gICAgICAgJ2hlaWdodCc6IChoZWlnaHQgfHwgREVGQVVMVFMubWFydEhlaWdodCksXHJcbiAgICAgICAnZm9udC1mYW1pbHknOiAodGhlbWUubWFydEZvbnRGYW1pbHkgfHwgREVGQVVMVFMubWFydEZvbnRGYW1pbHkpLFxyXG4gICAgICAgJ2JvcmRlci1yYWRpdXMnOiAodGhlbWUubWFydEJvcmRlclJhZGl1cyB8fCBERUZBVUxUUy5tYXJ0Qm9yZGVyUmFkaXVzKX1cIj5cclxuICAgICAgPG5neC1lbW9qLWhlYWRlclxyXG4gICAgICAgICpuZ0lmPVwidGhlbWUubWFydFNob3dIZWFkZXJcIlxyXG4gICAgICAgIFtoZWFkZXJCR109XCIodGhlbWUubWFydEhlYWRlckJHIHx8IERFRkFVTFRTLm1hcnRIZWFkZXJCRylcIlxyXG4gICAgICAgIFtoZWFkZXJGR109XCIodGhlbWUubWFydEhlYWRlckZHIHx8IERFRkFVTFRTLm1hcnRIZWFkZXJGRylcIlxyXG4gICAgICAgIFtoZWFkZXJGb250U2l6ZV09XCIodGhlbWUubWFydEhlYWRlckZvbnRTaXplIHx8IERFRkFVTFRTLm1hcnRIZWFkZXJGb250U2l6ZSlcIlxyXG4gICAgICAgIFtoZWFkZXJQYWRkaW5nXT1cIih0aGVtZS5tYXJ0SGVhZGVyUGFkZGluZyB8fCBERUZBVUxUUy5tYXJ0SGVhZGVyUGFkZGluZylcIlxyXG4gICAgICAgIFtkZWZhdWx0QWN0aXZlQ2F0ZWdvcnldPVwiJ1Blb3BsZSdcIlxyXG4gICAgICAgIFthY3RpdmVDYXRlZ29yeV09XCJhY3RpdmVDYXRlZ29yeVwiXHJcbiAgICAgICAgKG9uY2F0ZWdvcnljaGFuZ2UpPVwiaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW21hcnRDYXRlZ29yeUZvbnRTaXplXT1cIih0aGVtZS5tYXJ0Q2F0ZWdvcnlGb250U2l6ZSB8fCBERUZBVUxUUy5tYXJ0Q2F0ZWdvcnlGb250U2l6ZSlcIlxyXG4gICAgICAgIFttYXJ0Q2F0ZWdvcnlDb2xvcl09XCIodGhlbWUubWFydENhdGVnb3J5Q29sb3IgfHwgREVGQVVMVFMubWFydENhdGVnb3J5Q29sb3IpXCJcclxuICAgICAgICBbbWFydENhdGVnb3J5Q29sb3JBY3RpdmVdPVwiKHRoZW1lLm1hcnRDYXRlZ29yeUNvbG9yQWN0aXZlIHx8IERFRkFVTFRTLm1hcnRDYXRlZ29yeUNvbG9yQWN0aXZlKVwiXHJcbiAgICAgICAgW2FjdGl2ZUluZGljYXRvckNvbG9yXT1cIih0aGVtZS5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JDb2xvciB8fCBERUZBVUxUUy5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JDb2xvcilcIlxyXG4gICAgICAgIFthY3RpdmVJbmRpY2F0b3JIZWlnaHRdPVwiKHRoZW1lLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckhlaWdodCB8fCBERUZBVUxUUy5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JIZWlnaHQpXCJcclxuICAgICAgICBbZW1vamlDYXRlZ29yaWVzXT1cImVtb2ppQ2F0ZWdvcmllc1wiPlxyXG4gICAgICA8L25neC1lbW9qLWhlYWRlcj5cclxuXHJcbiAgICAgIDxuZ3gtZW1vai1jYXRlZ29yeS1jb250ZW50XHJcbiAgICAgIFtjYXRlZ29yeU5hbWVdPVwiYWN0aXZlQ2F0ZWdvcnlcIlxyXG4gICAgICBbY2F0ZWdvcnlFbW9qaVNldF09XCJhY3RpdmVFbW9qaVNldFwiXHJcbiAgICAgIFthY3RpdmVJbmRleF09XCJhY3RpdmVJbmRleFwiXHJcbiAgICAgIFttYXJ0RW1vamlOb3RGb3VuZEZHXT1cIih0aGVtZS5tYXJ0RW1vamlOb3RGb3VuZEZHIHx8IERFRkFVTFRTLm1hcnRFbW9qaU5vdEZvdW5kRkcpXCJcclxuICAgICAgW2Vtb2ppTm90Rm91bmRUZXh0XT1cIihlbW9qaU5vdEZvdW5kVGV4dCB8fCBERUZBVUxUUy5lbW9qaU5vdEZvdW5kVGV4dClcIlxyXG4gICAgICBbc2VhcmNoQm94U3R5bGVdPVwiKHRoZW1lLm1hcnRTZWFyY2hCb3hTdHlsZSB8fCBERUZBVUxUUy5tYXJ0U2VhcmNoQm94U3R5bGUpXCJcclxuICAgICAgW3NlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0XT1cIihzZWFyY2hFbW9qaVBsYWNlaG9sZGVyVGV4dCB8fCBERUZBVUxUUy5zZWFyY2hFbW9qaVBsYWNlaG9sZGVyVGV4dClcIlxyXG4gICAgICBbZW1vamlCdG5QYWRkaW5nXT1cIih0aGVtZS5tYXJ0RW1vamlQYWRkaW5nIHx8IERFRkFVTFRTLm1hcnRFbW9qaVBhZGRpbmcpXCJcclxuICAgICAgW2Vtb2ppRm9udFNpemVdPVwiKHRoZW1lLm1hcnRFbW9qaUZvbnRTaXplIHx8IERFRkFVTFRTLm1hcnRFbW9qaUZvbnRTaXplKVwiXHJcbiAgICAgIFttYXJ0RW1vamlDb250ZW50UGFkZGluZ0xlZnRdPVwiKHRoZW1lLm1hcnRFbW9qaUNvbnRlbnRQYWRkaW5nTGVmdCB8fCBERUZBVUxUUy5tYXJ0RW1vamlDb250ZW50UGFkZGluZ0xlZnQpXCJcclxuICAgICAgKG9ucGlja2Vtb2ppKT1cImhhbmRsZUVtb2ppUGljaygkZXZlbnQpXCJcclxuICAgICAgKG9uY29udGVudFN3aXBlKT1cImhhbmRsZUNvbnRlbnRTd2lwZSgkZXZlbnQpXCJcclxuICAgICAgKG9uY29udGVudHNjcm9sbCk9XCJoYW5kbGVDb250ZW50U2Nyb2xsKCRldmVudClcIj5cclxuICAgICAgPC9uZ3gtZW1vai1jYXRlZ29yeS1jb250ZW50PlxyXG4gICAgICA8bmd4LWVtb2otZm9vdGVyXHJcbiAgICAgICpuZ0lmPVwidGhlbWUubWFydFNob3dGb290ZXJcIlxyXG4gICAgICBbZm9vdGVyQkddPVwiKHRoZW1lLm1hcnRGb290ZXJCRyB8fCBERUZBVUxUUy5tYXJ0Rm9vdGVyQkcpXCJcclxuICAgICAgW2Zvb3RlckZHXT1cIih0aGVtZS5tYXJ0Rm9vdGVyRkcgfHwgREVGQVVMVFMubWFydEZvb3RlckZHKVwiXHJcbiAgICAgIFtmb290ZXJGb250U2l6ZV09XCIodGhlbWUubWFydEZvb3RlckZvbnRTaXplIHx8IERFRkFVTFRTLm1hcnRGb290ZXJGb250U2l6ZSlcIlxyXG4gICAgICBbZm9vdGVyUGFkZGluZ109XCIodGhlbWUubWFydEZvb3RlclBhZGRpbmcgfHwgREVGQVVMVFMubWFydEZvb3RlclBhZGRpbmcpXCJcclxuICAgICAgW2RlZmF1bHRBY3RpdmVFbW9dPVwiJ0Vtb2ppJ1wiXHJcbiAgICAgIChvbmNoYXJkZWxldGUpPVwiaGFuZGxlQ2hhckRlbGV0ZSgkZXZlbnQpXCJcclxuICAgICAgKG9uZW1vY2hhbmdlKT1cImhhbmRsZUVtb0NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgW21hcnRDYXRlZ29yeUZvbnRTaXplXT1cIih0aGVtZS5tYXJ0Q2F0ZWdvcnlGb250U2l6ZSB8fCBERUZBVUxUUy5tYXJ0Q2F0ZWdvcnlGb250U2l6ZSlcIlxyXG4gICAgICBbbWFydENhdGVnb3J5Q29sb3JdPVwiKHRoZW1lLm1hcnRDYXRlZ29yeUNvbG9yIHx8IERFRkFVTFRTLm1hcnRDYXRlZ29yeUNvbG9yKVwiXHJcbiAgICAgIFttYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZV09XCIodGhlbWUubWFydENhdGVnb3J5Q29sb3JBY3RpdmUgfHwgREVGQVVMVFMubWFydENhdGVnb3J5Q29sb3JBY3RpdmUpXCJcclxuICAgICAgW2FjdGl2ZUluZGljYXRvckNvbG9yXT1cIih0aGVtZS5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JDb2xvciB8fCBERUZBVUxUUy5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JDb2xvcilcIlxyXG4gICAgICBbYWN0aXZlSW5kaWNhdG9ySGVpZ2h0XT1cIih0aGVtZS5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JIZWlnaHQgfHwgREVGQVVMVFMubWFydEFjdGl2ZUNhdGVnb3J5SW5kaWNhdG9ySGVpZ2h0KVwiXHJcbiAgICAgIFtlbW9zXT1cImVtb3NcIlxyXG4gICAgICBbaGlkZUZvb3Rlcl09XCJoaWRlRm9vdGVyXCI+XHJcbiAgICA8L25neC1lbW9qLWZvb3Rlcj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuXHJcbiAgICAubmd4LWVtb2ppLW1hcnRcclxuICAgIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICBgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hFbW9qQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgcmVhZG9ubHkgREVGQVVMVFMgPSBERUZBVUxUUztcclxuXHJcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZztcclxuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZztcclxuICBAT3V0cHV0KCkgb25lbW9qaXBpY2s6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcbiAgQE91dHB1dCgpIG9uY2hhcmRlbGV0ZTogYW55ID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuXHJcblxyXG4gIC8vIEluaXRpYWxseSAgYXBwbHkgZGVmYXVsdCBjb25maWcuLi5cclxuICBASW5wdXQoKSB0aGVtZTogVGhlbWUgPSB7fTtcclxuXHJcbiAgZW1vamlDYXRlZ29yaWVzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAvLyBsaXN0IG9mIGVtb3MgdHlwZSwgZS5nIGVtb2ppLCBnaWZzLCBzdGlja2Vycy4uLlxyXG4gIGVtb3M6IGFueSBbXSA9IFtdO1xyXG4gIGFjdGl2ZUNhdGVnb3J5OiBzdHJpbmc7XHJcbiAgYWN0aXZlRW1vOiBzdHJpbmc7XHJcbiAgYWN0aXZlSW5kZXg6IG51bWJlcjtcclxuICBhY3RpdmVFbW9qaVNldDogYW55W107XHJcbiAgaGlkZUZvb3RlcjogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgQElucHV0KCkgbWF4UmVjZW50RW1vamk6IHN0cmluZztcclxuICBASW5wdXQoKSByZWNlbnRFbW9qaVN0b3JlS2V5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VhcmNoRW1vamlQbGFjZWhvbGRlclRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBlbW9qaU5vdEZvdW5kVGV4dDogc3RyaW5nO1xyXG5cclxuICBlbW9qaURCOiBhbnk7XHJcbiAgZW1vamlEQktleTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIC8vIFNldCByZWNlbnQgZW1vamkgc3RvcmUga2V5Li4uXHJcbiAgICB0aGlzLmVtb2ppREJLZXkgID0gdGhpcy5yZWNlbnRFbW9qaVN0b3JlS2V5IHx8IERFRkFVTFRTLnJlY2VudEVtb2ppU3RvcmVLZXk7XHJcbiAgICAvLyBHZXQgcmVjZW50IGVtb2ppcy4uXHJcbiAgICB0aGlzLmVtb2ppREIgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5lbW9qaURCS2V5KTtcclxuICAgIGlmICh0aGlzLmVtb2ppREIpIHtcclxuICAgIHRoaXMuZW1vamlEQiA9ICBKU09OLnBhcnNlKHRoaXMuZW1vamlEQik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBubyBzdG9yZWQgcmVjZW50IGVtb2ppLCBzYXZlIGluIHRoZSBzdG9yZSBhcnJheSAuLi5cclxuICAgICAgdGhpcy5lbW9qaURCID0gW107XHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmVtb2ppREJLZXksIEpTT04uc3RyaW5naWZ5KHRoaXMuZW1vamlEQikpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSAnUGVvcGxlJztcclxuICAgIC8vIGdldCB0aGUgZW1vamkgY2F0ZWdvcmllc1xyXG4gICAgdGhpcy5lbW9qaUNhdGVnb3JpZXMgPSBFTU9KSVMuc2xpY2UoMSkubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICByZXR1cm4ge25hbWU6IHZhbHVlLm5hbWUsIGljb246IHZhbHVlLmljb259O1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gZmlsdGVyIHRvIHNldCBkZWZhdWx0c1xyXG4gICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IEVNT0pJUy5zbGljZSgxKS5maWx0ZXIoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgIGlmIChjYXRlZ29yeS5uYW1lID09PSB0aGlzLmFjdGl2ZUNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IHRoaXMuYWN0aXZlRW1vamlTZXRbMF0uaWQ7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnSW5pdGlhbCBFbW8gSW5kZXg6JywgdGhpcy5hY3RpdmVJbmRleCk7XHJcbiAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gdGhpcy5hY3RpdmVFbW9qaVNldFswXS5lbW9qaXM7XHJcblxyXG5cclxuICAgIHRoaXMuYWN0aXZlRW1vID0gJ0Vtb2ppJztcclxuICAgIC8vIGNvbGxhdGUgdGhlIGVtb3MgdHlwZVxyXG4gICAgdGhpcy5lbW9zID0gRU1PUy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgICAgIHJldHVybiB7bmFtZTogdmFsdWUubmFtZSwgaWNvbjogdmFsdWUuaWNvbn07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNhdGVnb3J5Q2hhbmdlKGUpIHtcclxuICAgIC8vIHNldCBhY3RpdmUgY2F0ZWdvcnkgbmFtZS4uLlxyXG4gICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IGUubmFtZTtcclxuXHJcbiAgICBpZiAoZS5uYW1lID09PSAnUmVjZW50Jykge1xyXG4gICAgICAgIC8vIElmIHJlY2VudCBjYXRlZ29yeSwgc2V0IGVtb2ppIHRvIGVtb2ppcyBpbiB0aGUgcmVjZW50IHN0b3JlLi4uXHJcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IEVNT0pJU1sxXS5pZDtcclxuICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gdGhpcy5lbW9qaURCO1xyXG4gICAgICB9IGVsc2UgaWYgKGUubmFtZSA9PT0gJ1NlYXJjaCcpIHtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBFTU9KSVNbMF0uaWQ7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gdGhpcy5lbW9qaURCLmNvbmNhdChFTU9KSVNbMl0uZW1vamlzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgLy8gZmlsdGVyIHRvIHNldCBjdXJyZW50IGVtb2ppIHNldC4uLlxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gRU1PSklTLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5uYW1lID09PSB0aGlzLmFjdGl2ZUNhdGVnb3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgaW5kZXggb24gbWFudWFsIGNoYW5nZS4uLlxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gdGhpcy5hY3RpdmVFbW9qaVNldFswXS5pZDtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuYWN0aXZlRW1vamlTZXRbMF0uZW1vamlzO1xyXG5cclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlRW1vQ2hhbmdlKGUpIHtcclxuICAgIHRoaXMuYWN0aXZlRW1vID0gZS5uYW1lO1xyXG4gICAgLy8gY29sbGF0ZSB0aGUgZW1vcyB0eXBlXHJcbiAgLy8gICB0aGlzLmVtb3MgPSBFTU9TLm1hcCgodmFsdWUpID0+IHtcclxuICAvLyAgICByZXR1cm4ge25hbWU6IHZhbHVlLm5hbWUsIGljb246IHZhbHVlLmljb259O1xyXG4gIC8vICB9KTtcclxuIH1cclxuXHJcbiBjaGVja0lmRW1vamlFeGlzdHNJbkVtb2ppREIobmFtZSkge1xyXG4gIGxldCBlbW9fZXhpc3RzID0gZmFsc2U7XHJcbiAgLy8gY2hlY2tzIGlmIGVtb2ppIGlzIGFscmVhZHkgaW4gcmVjZW50IGVtb2ppIGRiIHN0b3JlLi4uXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVtb2ppREIubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICh0aGlzLmVtb2ppREJbaV1bMV0gPT09IG5hbWUpIHtcclxuICAgICAgZW1vX2V4aXN0cyA9IHRydWU7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVtb19leGlzdHM7XHJcblxyXG4gfVxyXG4gIGFkZEVtb2ppVG9SZWNlbnRFbW9qaURCKGVtb2ppOiBzdHJpbmdbXSkge1xyXG4gICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgbm8gZHVwbGljYXRlXHJcbiAgICBpZiAoIXRoaXMuY2hlY2tJZkVtb2ppRXhpc3RzSW5FbW9qaURCKGVtb2ppWzFdKSkge1xyXG4gICAgICAgIC8vIHJlY2VudCBlbW9qaSBncmVhdGVyIHRoYW4gdGhlIG51bWJlciBvZiBtYXgsIHJlbW92ZSB0aGUgZmlyc3QgZW1vamkgYW5kIGFkZCBuZXcgb25lXHJcbiAgICAgICAgLy8gdG8gdGhlIGJhY2suLi5cclxuICAgICAgICBpZiAodGhpcy5lbW9qaURCLmxlbmd0aCA8ICh0aGlzLm1heFJlY2VudEVtb2ppIHx8IERFRkFVTFRTLm1heFJlY2VudEVtb2ppKSkge1xyXG4gICAgICAgICAgdGhpcy5lbW9qaURCLnB1c2goZW1vamkpO1xyXG4gICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZW1vamlEQktleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5lbW9qaURCKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbW9qaURCLnNwbGljZSgwLCAxKTtcclxuICAgICAgICB0aGlzLmVtb2ppREIucHVzaChlbW9qaSk7XHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZW1vamlEQktleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5lbW9qaURCKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBoYW5kbGVFbW9qaVBpY2soZSkge1xyXG5cclxuICAgIC8vIHNhdmUgdGhlIHBpY2tlZCBlbW9qaSBpbnNpZGUgcmVjZW50IGVtb2ppIERCXHJcbiAgICB0aGlzLmFkZEVtb2ppVG9SZWNlbnRFbW9qaURCKGUuZW1vamkpO1xyXG5cclxuICAgIHRoaXMub25lbW9qaXBpY2suZW1pdCh7Y2hhcjogZS5lbW9qaVswXSwgbmFtZTogZS5lbW9qaVsxXX0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhckRlbGV0ZShlKSB7XHJcbiAgICB0aGlzLm9uY2hhcmRlbGV0ZS5lbWl0KHtkZWxldGVDaGFyOiB0cnVlfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDb250ZW50U2Nyb2xsKGUpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdlbWl0dGVkJywgZS5zY3JvbGxUb3AsIGUuc2Nyb2xsSGVpZ2h0KTtcclxuXHJcbiAgICBpZiAoKGUuc2Nyb2xsSGVpZ2h0IC0gZS5zY3JvbGxUb3ApIDw9IDQwMCkge1xyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2coJ2FsbW9zdCBhdCB0aGUgZW5kJyk7XHJcbiAgICAgIHRoaXMuaGlkZUZvb3RlciA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygndG9vcGluZyB0aGUgc2Nyb2xsJyk7XHJcbiAgICAgIHRoaXMuaGlkZUZvb3RlciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ29udGVudFN3aXBlKGUpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuYWN0aXZlSW5kZXg7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBlLmRpcmVjdGlvbjtcclxuICAgIC8vIExvZyB0aGUgbmVjZXNzYXJ5IGRldGFpbHMuLi5cclxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xyXG4gICAgICBjb25zdCBwcmV2OiBudW1iZXIgPSBjdXJyZW50SW5kZXggLSAxO1xyXG4gICAgICBpZiAocHJldiA+PSAwKSB7XHJcblxyXG4gICAgICAgIGlmIChwcmV2ID09PSAwKSB7XHJcbiAgICAgICAgICAvLyBzZWFyY2hcclxuICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBFTU9KSVNbMF0uaWQ7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gRU1PSklTWzBdLm5hbWU7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gdGhpcy5lbW9qaURCLmNvbmNhdChFTU9KSVNbMl0uZW1vamlzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHByZXYgPT09IDEgKSB7XHJcbiAgICAgICAgICAvLyByZWNlbnRcclxuICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBFTU9KSVNbMV0uaWQ7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gRU1PSklTWzFdLm5hbWU7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gdGhpcy5lbW9qaURCO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCBwcmV2Q2F0ZWdvcnlEYXRhID0gRU1PSklTLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5pZCA9PT0gcHJldikge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBzZXQgdGhlIHZhbHVlcy4uLlxyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gcHJldjtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IHByZXZDYXRlZ29yeURhdGFbMF0ubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHByZXZDYXRlZ29yeURhdGFbMF0uZW1vamlzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdyaWdodCcpIHtcclxuICAgICAgICBjb25zdCBuZXh0ID0gY3VycmVudEluZGV4ICsgMTtcclxuICAgICAgICBpZiAobmV4dCA9PT0gMCkge1xyXG4gICAgICAgICAgLy8gc2VhcmNoXHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gRU1PSklTWzBdLmlkO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IEVNT0pJU1swXS5uYW1lO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuZW1vamlEQi5jb25jYXQoRU1PSklTWzJdLmVtb2ppcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0ID09PSAxICkge1xyXG4gICAgICAgICAgLy8gcmVjZW50XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gRU1PSklTWzFdLmlkO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuZW1vamlEQjtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBFTU9KSVNbMV0ubmFtZTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChuZXh0IDw9IChFTU9KSVMubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZDYXRlZ29yeURhdGEgPSBFTU9KSVMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkuaWQgPT09IG5leHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAvLyBzZXQgdGhlIHZhbHVlcy4uLlxyXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBuZXh0O1xyXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBwcmV2Q2F0ZWdvcnlEYXRhWzBdLm5hbWU7XHJcbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHByZXZDYXRlZ29yeURhdGFbMF0uZW1vamlzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19