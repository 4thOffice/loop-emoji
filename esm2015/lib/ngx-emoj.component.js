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
        this.emojiCategories = EMOJIS.map((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            return { name: value.name, icon: value.icon };
        }));
        // filter to set defaults
        this.activeEmojiSet = EMOJIS.filter((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVtb2ouY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9vcC1lbW9qaS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZW1vai5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxRQUFRLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWdGeEMsTUFBTSxPQUFPLGdCQUFnQjtJQWdDM0I7UUE5QlMsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUluQixnQkFBVyxHQUFRLElBQUksWUFBWSxDQUFDO1FBQ3BDLGlCQUFZLEdBQVEsSUFBSSxZQUFZLENBQUM7O1FBSXRDLFVBQUssR0FBVSxFQUFFLENBQUM7UUFFM0Isb0JBQWUsR0FBVSxFQUFFLENBQUM7O1FBRzVCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFLbEIsZUFBVSxHQUFZLEtBQUssQ0FBQztJQVk1QixDQUFDOzs7O0lBRUQsUUFBUTtRQUVOLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxRQUFRLENBQUMsbUJBQW1CLENBQUM7UUFDNUUsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxzREFBc0Q7WUFDdEQsSUFBSSxDQUFD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UyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwRFQ7eUJBQ1E7Ozs7Ozs7Ozs7O0dBV1I7YUFDRjs7Ozs7b0JBT0UsS0FBSztxQkFDTCxLQUFLOzBCQUNMLE1BQU07MkJBQ04sTUFBTTtvQkFJTixLQUFLOzZCQWFMLEtBQUs7a0NBQ0wsS0FBSzt5Q0FDTCxLQUFLO2dDQUNMLEtBQUs7Ozs7SUF6Qk4sb0NBQTZCOztJQUU3QixpQ0FBdUI7O0lBQ3ZCLGtDQUF3Qjs7SUFDeEIsdUNBQThDOztJQUM5Qyx3Q0FBK0M7O0lBSS9DLGlDQUEyQjs7SUFFM0IsMkNBQTRCOztJQUc1QixnQ0FBa0I7O0lBQ2xCLDBDQUF1Qjs7SUFDdkIscUNBQWtCOztJQUNsQix1Q0FBb0I7O0lBQ3BCLDBDQUFzQjs7SUFDdEIsc0NBQTRCOztJQUc1QiwwQ0FBZ0M7O0lBQ2hDLCtDQUFxQzs7SUFDckMsc0RBQTRDOztJQUM1Qyw2Q0FBbUM7O0lBRW5DLG1DQUFhOztJQUNiLHNDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCBUaGVtZSBmcm9tICcuL2ludGVyZmFjZXMvVGhlbWUnO1xyXG5pbXBvcnQgREVGQVVMVFMgZnJvbSAnLi9taXNjL2RlZmF1bHRzJztcclxuaW1wb3J0IHsgRU1PSklTIH0gZnJvbSAnLi9taXNjL2Vtb2ppcy5kYXRhJztcclxuaW1wb3J0IHsgRU1PUyB9IGZyb20gJy4vbWlzYy9lbW9zLmRhdGEnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1lbW9qJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cIm5neC1lbW9qaS1tYXJ0XCJcclxuICAgICAgW25nU3R5bGVdPVwiXHJcbiAgICAgIHsnYmFja2dyb3VuZC1jb2xvcic6ICh0aGVtZS5tYXJ0QkcgfHwgREVGQVVMVFMubWFydEJHKSxcclxuICAgICAgICd3aWR0aCc6ICh3aWR0aCB8fCBERUZBVUxUUy5tYXJ0V2lkdGgpLFxyXG4gICAgICAgJ2hlaWdodCc6IChoZWlnaHQgfHwgREVGQVVMVFMubWFydEhlaWdodCksXHJcbiAgICAgICAnZm9udC1mYW1pbHknOiAodGhlbWUubWFydEZvbnRGYW1pbHkgfHwgREVGQVVMVFMubWFydEZvbnRGYW1pbHkpLFxyXG4gICAgICAgJ2JvcmRlci1yYWRpdXMnOiAodGhlbWUubWFydEJvcmRlclJhZGl1cyB8fCBERUZBVUxUUy5tYXJ0Qm9yZGVyUmFkaXVzKX1cIj5cclxuICAgICAgPG5neC1lbW9qLWhlYWRlclxyXG4gICAgICAgICpuZ0lmPVwidGhlbWUubWFydFNob3dIZWFkZXJcIlxyXG4gICAgICAgIFtoZWFkZXJCR109XCIodGhlbWUubWFydEhlYWRlckJHIHx8IERFRkFVTFRTLm1hcnRIZWFkZXJCRylcIlxyXG4gICAgICAgIFtoZWFkZXJGR109XCIodGhlbWUubWFydEhlYWRlckZHIHx8IERFRkFVTFRTLm1hcnRIZWFkZXJGRylcIlxyXG4gICAgICAgIFtoZWFkZXJGb250U2l6ZV09XCIodGhlbWUubWFydEhlYWRlckZvbnRTaXplIHx8IERFRkFVTFRTLm1hcnRIZWFkZXJGb250U2l6ZSlcIlxyXG4gICAgICAgIFtoZWFkZXJQYWRkaW5nXT1cIih0aGVtZS5tYXJ0SGVhZGVyUGFkZGluZyB8fCBERUZBVUxUUy5tYXJ0SGVhZGVyUGFkZGluZylcIlxyXG4gICAgICAgIFtkZWZhdWx0QWN0aXZlQ2F0ZWdvcnldPVwiJ1Blb3BsZSdcIlxyXG4gICAgICAgIFthY3RpdmVDYXRlZ29yeV09XCJhY3RpdmVDYXRlZ29yeVwiXHJcbiAgICAgICAgKG9uY2F0ZWdvcnljaGFuZ2UpPVwiaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgW21hcnRDYXRlZ29yeUZvbnRTaXplXT1cIih0aGVtZS5tYXJ0Q2F0ZWdvcnlGb250U2l6ZSB8fCBERUZBVUxUUy5tYXJ0Q2F0ZWdvcnlGb250U2l6ZSlcIlxyXG4gICAgICAgIFttYXJ0Q2F0ZWdvcnlDb2xvcl09XCIodGhlbWUubWFydENhdGVnb3J5Q29sb3IgfHwgREVGQVVMVFMubWFydENhdGVnb3J5Q29sb3IpXCJcclxuICAgICAgICBbbWFydENhdGVnb3J5Q29sb3JBY3RpdmVdPVwiKHRoZW1lLm1hcnRDYXRlZ29yeUNvbG9yQWN0aXZlIHx8IERFRkFVTFRTLm1hcnRDYXRlZ29yeUNvbG9yQWN0aXZlKVwiXHJcbiAgICAgICAgW2FjdGl2ZUluZGljYXRvckNvbG9yXT1cIih0aGVtZS5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JDb2xvciB8fCBERUZBVUxUUy5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JDb2xvcilcIlxyXG4gICAgICAgIFthY3RpdmVJbmRpY2F0b3JIZWlnaHRdPVwiKHRoZW1lLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckhlaWdodCB8fCBERUZBVUxUUy5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JIZWlnaHQpXCJcclxuICAgICAgICBbZW1vamlDYXRlZ29yaWVzXT1cImVtb2ppQ2F0ZWdvcmllc1wiPlxyXG4gICAgICA8L25neC1lbW9qLWhlYWRlcj5cclxuXHJcbiAgICAgIDxuZ3gtZW1vai1jYXRlZ29yeS1jb250ZW50XHJcbiAgICAgIFtjYXRlZ29yeU5hbWVdPVwiYWN0aXZlQ2F0ZWdvcnlcIlxyXG4gICAgICBbY2F0ZWdvcnlFbW9qaVNldF09XCJhY3RpdmVFbW9qaVNldFwiXHJcbiAgICAgIFthY3RpdmVJbmRleF09XCJhY3RpdmVJbmRleFwiXHJcbiAgICAgIFttYXJ0RW1vamlOb3RGb3VuZEZHXT1cIih0aGVtZS5tYXJ0RW1vamlOb3RGb3VuZEZHIHx8IERFRkFVTFRTLm1hcnRFbW9qaU5vdEZvdW5kRkcpXCJcclxuICAgICAgW2Vtb2ppTm90Rm91bmRUZXh0XT1cIihlbW9qaU5vdEZvdW5kVGV4dCB8fCBERUZBVUxUUy5lbW9qaU5vdEZvdW5kVGV4dClcIlxyXG4gICAgICBbc2VhcmNoQm94U3R5bGVdPVwiKHRoZW1lLm1hcnRTZWFyY2hCb3hTdHlsZSB8fCBERUZBVUxUUy5tYXJ0U2VhcmNoQm94U3R5bGUpXCJcclxuICAgICAgW3NlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0XT1cIihzZWFyY2hFbW9qaVBsYWNlaG9sZGVyVGV4dCB8fCBERUZBVUxUUy5zZWFyY2hFbW9qaVBsYWNlaG9sZGVyVGV4dClcIlxyXG4gICAgICBbZW1vamlCdG5QYWRkaW5nXT1cIih0aGVtZS5tYXJ0RW1vamlQYWRkaW5nIHx8IERFRkFVTFRTLm1hcnRFbW9qaVBhZGRpbmcpXCJcclxuICAgICAgW2Vtb2ppRm9udFNpemVdPVwiKHRoZW1lLm1hcnRFbW9qaUZvbnRTaXplIHx8IERFRkFVTFRTLm1hcnRFbW9qaUZvbnRTaXplKVwiXHJcbiAgICAgIChvbnBpY2tlbW9qaSk9XCJoYW5kbGVFbW9qaVBpY2soJGV2ZW50KVwiXHJcbiAgICAgIChvbmNvbnRlbnRTd2lwZSk9XCJoYW5kbGVDb250ZW50U3dpcGUoJGV2ZW50KVwiXHJcbiAgICAgIChvbmNvbnRlbnRzY3JvbGwpPVwiaGFuZGxlQ29udGVudFNjcm9sbCgkZXZlbnQpXCI+XHJcbiAgICAgIDwvbmd4LWVtb2otY2F0ZWdvcnktY29udGVudD5cclxuICAgICAgPG5neC1lbW9qLWZvb3RlclxyXG4gICAgICAqbmdJZj1cInRoZW1lLm1hcnRTaG93Rm9vdGVyXCJcclxuICAgICAgW2Zvb3RlckJHXT1cIih0aGVtZS5tYXJ0Rm9vdGVyQkcgfHwgREVGQVVMVFMubWFydEZvb3RlckJHKVwiXHJcbiAgICAgIFtmb290ZXJGR109XCIodGhlbWUubWFydEZvb3RlckZHIHx8IERFRkFVTFRTLm1hcnRGb290ZXJGRylcIlxyXG4gICAgICBbZm9vdGVyRm9udFNpemVdPVwiKHRoZW1lLm1hcnRGb290ZXJGb250U2l6ZSB8fCBERUZBVUxUUy5tYXJ0Rm9vdGVyRm9udFNpemUpXCJcclxuICAgICAgW2Zvb3RlclBhZGRpbmddPVwiKHRoZW1lLm1hcnRGb290ZXJQYWRkaW5nIHx8IERFRkFVTFRTLm1hcnRGb290ZXJQYWRkaW5nKVwiXHJcbiAgICAgIFtkZWZhdWx0QWN0aXZlRW1vXT1cIidFbW9qaSdcIlxyXG4gICAgICAob25jaGFyZGVsZXRlKT1cImhhbmRsZUNoYXJEZWxldGUoJGV2ZW50KVwiXHJcbiAgICAgIChvbmVtb2NoYW5nZSk9XCJoYW5kbGVFbW9DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIFttYXJ0Q2F0ZWdvcnlGb250U2l6ZV09XCIodGhlbWUubWFydENhdGVnb3J5Rm9udFNpemUgfHwgREVGQVVMVFMubWFydENhdGVnb3J5Rm9udFNpemUpXCJcclxuICAgICAgW21hcnRDYXRlZ29yeUNvbG9yXT1cIih0aGVtZS5tYXJ0Q2F0ZWdvcnlDb2xvciB8fCBERUZBVUxUUy5tYXJ0Q2F0ZWdvcnlDb2xvcilcIlxyXG4gICAgICBbbWFydENhdGVnb3J5Q29sb3JBY3RpdmVdPVwiKHRoZW1lLm1hcnRDYXRlZ29yeUNvbG9yQWN0aXZlIHx8IERFRkFVTFRTLm1hcnRDYXRlZ29yeUNvbG9yQWN0aXZlKVwiXHJcbiAgICAgIFthY3RpdmVJbmRpY2F0b3JDb2xvcl09XCIodGhlbWUubWFydEFjdGl2ZUNhdGVnb3J5SW5kaWNhdG9yQ29sb3IgfHwgREVGQVVMVFMubWFydEFjdGl2ZUNhdGVnb3J5SW5kaWNhdG9yQ29sb3IpXCJcclxuICAgICAgW2FjdGl2ZUluZGljYXRvckhlaWdodF09XCIodGhlbWUubWFydEFjdGl2ZUNhdGVnb3J5SW5kaWNhdG9ySGVpZ2h0IHx8IERFRkFVTFRTLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckhlaWdodClcIlxyXG4gICAgICBbZW1vc109XCJlbW9zXCJcclxuICAgICAgW2hpZGVGb290ZXJdPVwiaGlkZUZvb3RlclwiPlxyXG4gICAgPC9uZ3gtZW1vai1mb290ZXI+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcblxyXG4gICAgLm5neC1lbW9qaS1tYXJ0XHJcbiAgICB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgYF1cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTmd4RW1vakNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIHJlYWRvbmx5IERFRkFVTFRTID0gREVGQVVMVFM7XHJcblxyXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIG9uZW1vamlwaWNrOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gIEBPdXRwdXQoKSBvbmNoYXJkZWxldGU6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblxyXG5cclxuICAvLyBJbml0aWFsbHkgIGFwcGx5IGRlZmF1bHQgY29uZmlnLi4uXHJcbiAgQElucHV0KCkgdGhlbWU6IFRoZW1lID0ge307XHJcblxyXG4gIGVtb2ppQ2F0ZWdvcmllczogYW55W10gPSBbXTtcclxuXHJcbiAgLy8gbGlzdCBvZiBlbW9zIHR5cGUsIGUuZyBlbW9qaSwgZ2lmcywgc3RpY2tlcnMuLi5cclxuICBlbW9zOiBhbnkgW10gPSBbXTtcclxuICBhY3RpdmVDYXRlZ29yeTogc3RyaW5nO1xyXG4gIGFjdGl2ZUVtbzogc3RyaW5nO1xyXG4gIGFjdGl2ZUluZGV4OiBudW1iZXI7XHJcbiAgYWN0aXZlRW1vamlTZXQ6IGFueVtdO1xyXG4gIGhpZGVGb290ZXI6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIEBJbnB1dCgpIG1heFJlY2VudEVtb2ppOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcmVjZW50RW1vamlTdG9yZUtleTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZW1vamlOb3RGb3VuZFRleHQ6IHN0cmluZztcclxuXHJcbiAgZW1vamlEQjogYW55O1xyXG4gIGVtb2ppREJLZXk6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAvLyBTZXQgcmVjZW50IGVtb2ppIHN0b3JlIGtleS4uLlxyXG4gICAgdGhpcy5lbW9qaURCS2V5ICA9IHRoaXMucmVjZW50RW1vamlTdG9yZUtleSB8fCBERUZBVUxUUy5yZWNlbnRFbW9qaVN0b3JlS2V5O1xyXG4gICAgLy8gR2V0IHJlY2VudCBlbW9qaXMuLlxyXG4gICAgdGhpcy5lbW9qaURCID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuZW1vamlEQktleSk7XHJcbiAgICBpZiAodGhpcy5lbW9qaURCKSB7XHJcbiAgICB0aGlzLmVtb2ppREIgPSAgSlNPTi5wYXJzZSh0aGlzLmVtb2ppREIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gbm8gc3RvcmVkIHJlY2VudCBlbW9qaSwgc2F2ZSBpbiB0aGUgc3RvcmUgYXJyYXkgLi4uXHJcbiAgICAgIHRoaXMuZW1vamlEQiA9IFtdO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5lbW9qaURCS2V5LCBKU09OLnN0cmluZ2lmeSh0aGlzLmVtb2ppREIpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gJ1Blb3BsZSc7XHJcbiAgICAvLyBnZXQgdGhlIGVtb2ppIGNhdGVnb3JpZXNcclxuICAgIHRoaXMuZW1vamlDYXRlZ29yaWVzID0gRU1PSklTLm1hcCgodmFsdWUpID0+IHtcclxuICAgICAgcmV0dXJuIHtuYW1lOiB2YWx1ZS5uYW1lLCBpY29uOiB2YWx1ZS5pY29ufTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGZpbHRlciB0byBzZXQgZGVmYXVsdHNcclxuICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSBFTU9KSVMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xyXG4gICAgICBpZiAoY2F0ZWdvcnkubmFtZSA9PT0gdGhpcy5hY3RpdmVDYXRlZ29yeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYWN0aXZlSW5kZXggPSB0aGlzLmFjdGl2ZUVtb2ppU2V0WzBdLmlkO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ0luaXRpYWwgRW1vIEluZGV4OicsIHRoaXMuYWN0aXZlSW5kZXgpO1xyXG4gICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuYWN0aXZlRW1vamlTZXRbMF0uZW1vamlzO1xyXG5cclxuXHJcbiAgICB0aGlzLmFjdGl2ZUVtbyA9ICdFbW9qaSc7XHJcbiAgICAvLyBjb2xsYXRlIHRoZSBlbW9zIHR5cGVcclxuICAgIHRoaXMuZW1vcyA9IEVNT1MubWFwKCh2YWx1ZSkgPT4ge1xyXG4gICAgICByZXR1cm4ge25hbWU6IHZhbHVlLm5hbWUsIGljb246IHZhbHVlLmljb259O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDYXRlZ29yeUNoYW5nZShlKSB7XHJcbiAgICAvLyBzZXQgYWN0aXZlIGNhdGVnb3J5IG5hbWUuLi5cclxuICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBlLm5hbWU7XHJcblxyXG4gICAgaWYgKGUubmFtZSA9PT0gJ1JlY2VudCcpIHtcclxuICAgICAgICAvLyBJZiByZWNlbnQgY2F0ZWdvcnksIHNldCBlbW9qaSB0byBlbW9qaXMgaW4gdGhlIHJlY2VudCBzdG9yZS4uLlxyXG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBFTU9KSVNbMV0uaWQ7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuZW1vamlEQjtcclxuICAgICAgfSBlbHNlIGlmIChlLm5hbWUgPT09ICdTZWFyY2gnKSB7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gRU1PSklTWzBdLmlkO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuZW1vamlEQi5jb25jYXQoRU1PSklTWzJdLmVtb2ppcyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIC8vIGZpbHRlciB0byBzZXQgY3VycmVudCBlbW9qaSBzZXQuLi5cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IEVNT0pJUy5maWx0ZXIoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkubmFtZSA9PT0gdGhpcy5hY3RpdmVDYXRlZ29yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGluZGV4IG9uIG1hbnVhbCBjaGFuZ2UuLi5cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHRoaXMuYWN0aXZlRW1vamlTZXRbMF0uaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSB0aGlzLmFjdGl2ZUVtb2ppU2V0WzBdLmVtb2ppcztcclxuXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUVtb0NoYW5nZShlKSB7XHJcbiAgICB0aGlzLmFjdGl2ZUVtbyA9IGUubmFtZTtcclxuICAgIC8vIGNvbGxhdGUgdGhlIGVtb3MgdHlwZVxyXG4gIC8vICAgdGhpcy5lbW9zID0gRU1PUy5tYXAoKHZhbHVlKSA9PiB7XHJcbiAgLy8gICAgcmV0dXJuIHtuYW1lOiB2YWx1ZS5uYW1lLCBpY29uOiB2YWx1ZS5pY29ufTtcclxuICAvLyAgfSk7XHJcbiB9XHJcblxyXG4gY2hlY2tJZkVtb2ppRXhpc3RzSW5FbW9qaURCKG5hbWUpIHtcclxuICBsZXQgZW1vX2V4aXN0cyA9IGZhbHNlO1xyXG4gIC8vIGNoZWNrcyBpZiBlbW9qaSBpcyBhbHJlYWR5IGluIHJlY2VudCBlbW9qaSBkYiBzdG9yZS4uLlxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbW9qaURCLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZiAodGhpcy5lbW9qaURCW2ldWzFdID09PSBuYW1lKSB7XHJcbiAgICAgIGVtb19leGlzdHMgPSB0cnVlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBlbW9fZXhpc3RzO1xyXG5cclxuIH1cclxuICBhZGRFbW9qaVRvUmVjZW50RW1vamlEQihlbW9qaTogc3RyaW5nW10pIHtcclxuICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIG5vIGR1cGxpY2F0ZVxyXG4gICAgaWYgKCF0aGlzLmNoZWNrSWZFbW9qaUV4aXN0c0luRW1vamlEQihlbW9qaVsxXSkpIHtcclxuICAgICAgICAvLyByZWNlbnQgZW1vamkgZ3JlYXRlciB0aGFuIHRoZSBudW1iZXIgb2YgbWF4LCByZW1vdmUgdGhlIGZpcnN0IGVtb2ppIGFuZCBhZGQgbmV3IG9uZVxyXG4gICAgICAgIC8vIHRvIHRoZSBiYWNrLi4uXHJcbiAgICAgICAgaWYgKHRoaXMuZW1vamlEQi5sZW5ndGggPCAodGhpcy5tYXhSZWNlbnRFbW9qaSB8fCBERUZBVUxUUy5tYXhSZWNlbnRFbW9qaSkpIHtcclxuICAgICAgICAgIHRoaXMuZW1vamlEQi5wdXNoKGVtb2ppKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmVtb2ppREJLZXksIEpTT04uc3RyaW5naWZ5KHRoaXMuZW1vamlEQikpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZW1vamlEQi5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgdGhpcy5lbW9qaURCLnB1c2goZW1vamkpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmVtb2ppREJLZXksIEpTT04uc3RyaW5naWZ5KHRoaXMuZW1vamlEQikpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgaGFuZGxlRW1vamlQaWNrKGUpIHtcclxuXHJcbiAgICAvLyBzYXZlIHRoZSBwaWNrZWQgZW1vamkgaW5zaWRlIHJlY2VudCBlbW9qaSBEQlxyXG4gICAgdGhpcy5hZGRFbW9qaVRvUmVjZW50RW1vamlEQihlLmVtb2ppKTtcclxuXHJcbiAgICB0aGlzLm9uZW1vamlwaWNrLmVtaXQoe2NoYXI6IGUuZW1vamlbMF0sIG5hbWU6IGUuZW1vamlbMV19KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYXJEZWxldGUoZSkge1xyXG4gICAgdGhpcy5vbmNoYXJkZWxldGUuZW1pdCh7ZGVsZXRlQ2hhcjogdHJ1ZX0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ29udGVudFNjcm9sbChlKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZygnZW1pdHRlZCcsIGUuc2Nyb2xsVG9wLCBlLnNjcm9sbEhlaWdodCk7XHJcblxyXG4gICAgaWYgKChlLnNjcm9sbEhlaWdodCAtIGUuc2Nyb2xsVG9wKSA8PSA0MDApIHtcclxuXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdhbG1vc3QgYXQgdGhlIGVuZCcpO1xyXG4gICAgICB0aGlzLmhpZGVGb290ZXIgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ3Rvb3BpbmcgdGhlIHNjcm9sbCcpO1xyXG4gICAgICB0aGlzLmhpZGVGb290ZXIgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNvbnRlbnRTd2lwZShlKSB7XHJcbiAgICBjb25zdCBjdXJyZW50SW5kZXggPSB0aGlzLmFjdGl2ZUluZGV4O1xyXG4gICAgY29uc3QgZGlyZWN0aW9uID0gZS5kaXJlY3Rpb247XHJcbiAgICAvLyBMb2cgdGhlIG5lY2Vzc2FyeSBkZXRhaWxzLi4uXHJcbiAgICBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcclxuICAgICAgY29uc3QgcHJldjogbnVtYmVyID0gY3VycmVudEluZGV4IC0gMTtcclxuICAgICAgaWYgKHByZXYgPj0gMCkge1xyXG5cclxuICAgICAgICBpZiAocHJldiA9PT0gMCkge1xyXG4gICAgICAgICAgLy8gc2VhcmNoXHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gRU1PSklTWzBdLmlkO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IEVNT0pJU1swXS5uYW1lO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuZW1vamlEQi5jb25jYXQoRU1PSklTWzJdLmVtb2ppcyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwcmV2ID09PSAxICkge1xyXG4gICAgICAgICAgLy8gcmVjZW50XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gRU1PSklTWzFdLmlkO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IEVNT0pJU1sxXS5uYW1lO1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuZW1vamlEQjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcHJldkNhdGVnb3J5RGF0YSA9IEVNT0pJUy5maWx0ZXIoKGNhdGVnb3J5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkuaWQgPT09IHByZXYpIHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gc2V0IHRoZSB2YWx1ZXMuLi5cclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IHByZXY7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBwcmV2Q2F0ZWdvcnlEYXRhWzBdLm5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSBwcmV2Q2F0ZWdvcnlEYXRhWzBdLmVtb2ppcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dCA9IGN1cnJlbnRJbmRleCArIDE7XHJcbiAgICAgICAgaWYgKG5leHQgPT09IDApIHtcclxuICAgICAgICAgIC8vIHNlYXJjaFxyXG4gICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IEVNT0pJU1swXS5pZDtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBFTU9KSVNbMF0ubmFtZTtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSB0aGlzLmVtb2ppREIuY29uY2F0KEVNT0pJU1syXS5lbW9qaXMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV4dCA9PT0gMSApIHtcclxuICAgICAgICAgIC8vIHJlY2VudFxyXG4gICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IEVNT0pJU1sxXS5pZDtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSB0aGlzLmVtb2ppREI7XHJcbiAgICAgICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gRU1PSklTWzFdLm5hbWU7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAobmV4dCA8PSAoRU1PSklTLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcmV2Q2F0ZWdvcnlEYXRhID0gRU1PSklTLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGNhdGVnb3J5LmlkID09PSBuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgLy8gc2V0IHRoZSB2YWx1ZXMuLi5cclxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gbmV4dDtcclxuICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gcHJldkNhdGVnb3J5RGF0YVswXS5uYW1lO1xyXG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSBwcmV2Q2F0ZWdvcnlEYXRhWzBdLmVtb2ppcztcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbiJdfQ==