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
        this.activeCategory = this.theme.martDefaultActiveCategory || DEFAULTS.martDefaultActiveCategory;
        if (this.theme.martDefaultActiveCategory === 'Recent' && this.emojiDB.length < 5) {
            this.activeCategory = DEFAULTS.martDefaultActiveCategory;
        }
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
        this.updateEmojiSet();
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
        this.updateEmojiSet();
    }
    /**
     * @return {?}
     */
    updateEmojiSet() {
        if (this.activeCategory === 'Recent') {
            // If recent category, set emoji to emojis in the recent store...
            this.activeIndex = EMOJIS[1].id;
            this.activeEmojiSet = this.emojiDB;
        }
        else if (this.activeCategory === 'Search') {
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
        [defaultActiveCategory]="(theme.martDefaultActiveCategory || DEFAULTS.martDefaultActiveCategory)"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVtb2ouY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9vcC1lbW9qaS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZW1vai5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHL0UsT0FBTyxRQUFRLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWlGeEMsTUFBTSxPQUFPLGdCQUFnQjtJQWdDM0I7UUE5QlMsYUFBUSxHQUFHLFFBQVEsQ0FBQztRQUluQixnQkFBVyxHQUFRLElBQUksWUFBWSxDQUFDO1FBQ3BDLGlCQUFZLEdBQVEsSUFBSSxZQUFZLENBQUM7O1FBSXRDLFVBQUssR0FBVSxFQUFFLENBQUM7UUFFM0Isb0JBQWUsR0FBVSxFQUFFLENBQUM7O1FBRzVCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFLbEIsZUFBVSxHQUFZLEtBQUssQ0FBQztJQVk1QixDQUFDOzs7O0lBRUQsUUFBUTtRQUVOLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFJLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxRQUFRLENBQUMsbUJBQW1CLENBQUM7UUFDNUUsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNsQixJQUFJLENBQUMsT0FBTyxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxzREFBc0Q7WUFDdEQsSUFBSSxDQUFD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QUMsQ0FBQyxJQUFJLENBQUM7b0JBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO2lCQUNwRDthQUNKO1NBQ0Y7SUFDSCxDQUFDOzs7WUE5U0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkRUO3lCQUNROzs7Ozs7Ozs7OztHQVdSO2FBQ0Y7Ozs7O29CQU9FLEtBQUs7cUJBQ0wsS0FBSzswQkFDTCxNQUFNOzJCQUNOLE1BQU07b0JBSU4sS0FBSzs2QkFhTCxLQUFLO2tDQUNMLEtBQUs7eUNBQ0wsS0FBSztnQ0FDTCxLQUFLOzs7O0lBekJOLG9DQUE2Qjs7SUFFN0IsaUNBQXVCOztJQUN2QixrQ0FBd0I7O0lBQ3hCLHVDQUE4Qzs7SUFDOUMsd0NBQStDOztJQUkvQyxpQ0FBMkI7O0lBRTNCLDJDQUE0Qjs7SUFHNUIsZ0NBQWtCOztJQUNsQiwwQ0FBdUI7O0lBQ3ZCLHFDQUFrQjs7SUFDbEIsdUNBQW9COztJQUNwQiwwQ0FBc0I7O0lBQ3RCLHNDQUE0Qjs7SUFHNUIsMENBQWdDOztJQUNoQywrQ0FBcUM7O0lBQ3JDLHNEQUE0Qzs7SUFDNUMsNkNBQW1DOztJQUVuQyxtQ0FBYTs7SUFDYixzQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBUaGVtZSBmcm9tICcuL2ludGVyZmFjZXMvVGhlbWUnO1xuaW1wb3J0IERFRkFVTFRTIGZyb20gJy4vbWlzYy9kZWZhdWx0cyc7XG5pbXBvcnQgeyBFTU9KSVMgfSBmcm9tICcuL21pc2MvZW1vamlzLmRhdGEnO1xuaW1wb3J0IHsgRU1PUyB9IGZyb20gJy4vbWlzYy9lbW9zLmRhdGEnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWVtb2onLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJuZ3gtZW1vamktbWFydFwiXG4gICAgICBbbmdTdHlsZV09XCJcbiAgICAgIHsnYmFja2dyb3VuZC1jb2xvcic6ICh0aGVtZS5tYXJ0QkcgfHwgREVGQVVMVFMubWFydEJHKSxcbiAgICAgICAnd2lkdGgnOiAod2lkdGggfHwgREVGQVVMVFMubWFydFdpZHRoKSxcbiAgICAgICAnaGVpZ2h0JzogKGhlaWdodCB8fCBERUZBVUxUUy5tYXJ0SGVpZ2h0KSxcbiAgICAgICAnZm9udC1mYW1pbHknOiAodGhlbWUubWFydEZvbnRGYW1pbHkgfHwgREVGQVVMVFMubWFydEZvbnRGYW1pbHkpLFxuICAgICAgICdib3JkZXItcmFkaXVzJzogKHRoZW1lLm1hcnRCb3JkZXJSYWRpdXMgfHwgREVGQVVMVFMubWFydEJvcmRlclJhZGl1cyl9XCI+XG4gICAgICA8bmd4LWVtb2otaGVhZGVyXG4gICAgICAgICpuZ0lmPVwidGhlbWUubWFydFNob3dIZWFkZXJcIlxuICAgICAgICBbaGVhZGVyQkddPVwiKHRoZW1lLm1hcnRIZWFkZXJCRyB8fCBERUZBVUxUUy5tYXJ0SGVhZGVyQkcpXCJcbiAgICAgICAgW2hlYWRlckZHXT1cIih0aGVtZS5tYXJ0SGVhZGVyRkcgfHwgREVGQVVMVFMubWFydEhlYWRlckZHKVwiXG4gICAgICAgIFtoZWFkZXJGb250U2l6ZV09XCIodGhlbWUubWFydEhlYWRlckZvbnRTaXplIHx8IERFRkFVTFRTLm1hcnRIZWFkZXJGb250U2l6ZSlcIlxuICAgICAgICBbaGVhZGVyUGFkZGluZ109XCIodGhlbWUubWFydEhlYWRlclBhZGRpbmcgfHwgREVGQVVMVFMubWFydEhlYWRlclBhZGRpbmcpXCJcbiAgICAgICAgW2RlZmF1bHRBY3RpdmVDYXRlZ29yeV09XCIodGhlbWUubWFydERlZmF1bHRBY3RpdmVDYXRlZ29yeSB8fCBERUZBVUxUUy5tYXJ0RGVmYXVsdEFjdGl2ZUNhdGVnb3J5KVwiXG4gICAgICAgIFthY3RpdmVDYXRlZ29yeV09XCJhY3RpdmVDYXRlZ29yeVwiXG4gICAgICAgIChvbmNhdGVnb3J5Y2hhbmdlKT1cImhhbmRsZUNhdGVnb3J5Q2hhbmdlKCRldmVudClcIlxuICAgICAgICBbbWFydENhdGVnb3J5Rm9udFNpemVdPVwiKHRoZW1lLm1hcnRDYXRlZ29yeUZvbnRTaXplIHx8IERFRkFVTFRTLm1hcnRDYXRlZ29yeUZvbnRTaXplKVwiXG4gICAgICAgIFttYXJ0Q2F0ZWdvcnlDb2xvcl09XCIodGhlbWUubWFydENhdGVnb3J5Q29sb3IgfHwgREVGQVVMVFMubWFydENhdGVnb3J5Q29sb3IpXCJcbiAgICAgICAgW21hcnRDYXRlZ29yeUNvbG9yQWN0aXZlXT1cIih0aGVtZS5tYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZSB8fCBERUZBVUxUUy5tYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZSlcIlxuICAgICAgICBbYWN0aXZlSW5kaWNhdG9yQ29sb3JdPVwiKHRoZW1lLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckNvbG9yIHx8IERFRkFVTFRTLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckNvbG9yKVwiXG4gICAgICAgIFthY3RpdmVJbmRpY2F0b3JIZWlnaHRdPVwiKHRoZW1lLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckhlaWdodCB8fCBERUZBVUxUUy5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JIZWlnaHQpXCJcbiAgICAgICAgW2Vtb2ppQ2F0ZWdvcmllc109XCJlbW9qaUNhdGVnb3JpZXNcIj5cbiAgICAgIDwvbmd4LWVtb2otaGVhZGVyPlxuXG4gICAgICA8bmd4LWVtb2otY2F0ZWdvcnktY29udGVudFxuICAgICAgW2NhdGVnb3J5TmFtZV09XCJhY3RpdmVDYXRlZ29yeVwiXG4gICAgICBbY2F0ZWdvcnlFbW9qaVNldF09XCJhY3RpdmVFbW9qaVNldFwiXG4gICAgICBbYWN0aXZlSW5kZXhdPVwiYWN0aXZlSW5kZXhcIlxuICAgICAgW21hcnRFbW9qaU5vdEZvdW5kRkddPVwiKHRoZW1lLm1hcnRFbW9qaU5vdEZvdW5kRkcgfHwgREVGQVVMVFMubWFydEVtb2ppTm90Rm91bmRGRylcIlxuICAgICAgW2Vtb2ppTm90Rm91bmRUZXh0XT1cIihlbW9qaU5vdEZvdW5kVGV4dCB8fCBERUZBVUxUUy5lbW9qaU5vdEZvdW5kVGV4dClcIlxuICAgICAgW3NlYXJjaEJveFN0eWxlXT1cIih0aGVtZS5tYXJ0U2VhcmNoQm94U3R5bGUgfHwgREVGQVVMVFMubWFydFNlYXJjaEJveFN0eWxlKVwiXG4gICAgICBbc2VhcmNoRW1vamlQbGFjZWhvbGRlclRleHRdPVwiKHNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0IHx8IERFRkFVTFRTLnNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0KVwiXG4gICAgICBbZW1vamlCdG5QYWRkaW5nXT1cIih0aGVtZS5tYXJ0RW1vamlQYWRkaW5nIHx8IERFRkFVTFRTLm1hcnRFbW9qaVBhZGRpbmcpXCJcbiAgICAgIFtlbW9qaUZvbnRTaXplXT1cIih0aGVtZS5tYXJ0RW1vamlGb250U2l6ZSB8fCBERUZBVUxUUy5tYXJ0RW1vamlGb250U2l6ZSlcIlxuICAgICAgW21hcnRFbW9qaUNvbnRlbnRQYWRkaW5nTGVmdF09XCIodGhlbWUubWFydEVtb2ppQ29udGVudFBhZGRpbmdMZWZ0IHx8IERFRkFVTFRTLm1hcnRFbW9qaUNvbnRlbnRQYWRkaW5nTGVmdClcIlxuICAgICAgKG9ucGlja2Vtb2ppKT1cImhhbmRsZUVtb2ppUGljaygkZXZlbnQpXCJcbiAgICAgIChvbmNvbnRlbnRTd2lwZSk9XCJoYW5kbGVDb250ZW50U3dpcGUoJGV2ZW50KVwiXG4gICAgICAob25jb250ZW50c2Nyb2xsKT1cImhhbmRsZUNvbnRlbnRTY3JvbGwoJGV2ZW50KVwiPlxuICAgICAgPC9uZ3gtZW1vai1jYXRlZ29yeS1jb250ZW50PlxuICAgICAgPG5neC1lbW9qLWZvb3RlclxuICAgICAgKm5nSWY9XCJ0aGVtZS5tYXJ0U2hvd0Zvb3RlclwiXG4gICAgICBbZm9vdGVyQkddPVwiKHRoZW1lLm1hcnRGb290ZXJCRyB8fCBERUZBVUxUUy5tYXJ0Rm9vdGVyQkcpXCJcbiAgICAgIFtmb290ZXJGR109XCIodGhlbWUubWFydEZvb3RlckZHIHx8IERFRkFVTFRTLm1hcnRGb290ZXJGRylcIlxuICAgICAgW2Zvb3RlckZvbnRTaXplXT1cIih0aGVtZS5tYXJ0Rm9vdGVyRm9udFNpemUgfHwgREVGQVVMVFMubWFydEZvb3RlckZvbnRTaXplKVwiXG4gICAgICBbZm9vdGVyUGFkZGluZ109XCIodGhlbWUubWFydEZvb3RlclBhZGRpbmcgfHwgREVGQVVMVFMubWFydEZvb3RlclBhZGRpbmcpXCJcbiAgICAgIFtkZWZhdWx0QWN0aXZlRW1vXT1cIidFbW9qaSdcIlxuICAgICAgKG9uY2hhcmRlbGV0ZSk9XCJoYW5kbGVDaGFyRGVsZXRlKCRldmVudClcIlxuICAgICAgKG9uZW1vY2hhbmdlKT1cImhhbmRsZUVtb0NoYW5nZSgkZXZlbnQpXCJcbiAgICAgIFttYXJ0Q2F0ZWdvcnlGb250U2l6ZV09XCIodGhlbWUubWFydENhdGVnb3J5Rm9udFNpemUgfHwgREVGQVVMVFMubWFydENhdGVnb3J5Rm9udFNpemUpXCJcbiAgICAgIFttYXJ0Q2F0ZWdvcnlDb2xvcl09XCIodGhlbWUubWFydENhdGVnb3J5Q29sb3IgfHwgREVGQVVMVFMubWFydENhdGVnb3J5Q29sb3IpXCJcbiAgICAgIFttYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZV09XCIodGhlbWUubWFydENhdGVnb3J5Q29sb3JBY3RpdmUgfHwgREVGQVVMVFMubWFydENhdGVnb3J5Q29sb3JBY3RpdmUpXCJcbiAgICAgIFthY3RpdmVJbmRpY2F0b3JDb2xvcl09XCIodGhlbWUubWFydEFjdGl2ZUNhdGVnb3J5SW5kaWNhdG9yQ29sb3IgfHwgREVGQVVMVFMubWFydEFjdGl2ZUNhdGVnb3J5SW5kaWNhdG9yQ29sb3IpXCJcbiAgICAgIFthY3RpdmVJbmRpY2F0b3JIZWlnaHRdPVwiKHRoZW1lLm1hcnRBY3RpdmVDYXRlZ29yeUluZGljYXRvckhlaWdodCB8fCBERUZBVUxUUy5tYXJ0QWN0aXZlQ2F0ZWdvcnlJbmRpY2F0b3JIZWlnaHQpXCJcbiAgICAgIFtlbW9zXT1cImVtb3NcIlxuICAgICAgW2hpZGVGb290ZXJdPVwiaGlkZUZvb3RlclwiPlxuICAgIDwvbmd4LWVtb2otZm9vdGVyPlxuXG4gICAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW2BcblxuICAgIC5uZ3gtZW1vamktbWFydFxuICAgIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gIGBdXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBOZ3hFbW9qQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICByZWFkb25seSBERUZBVUxUUyA9IERFRkFVTFRTO1xuXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nO1xuICBAT3V0cHV0KCkgb25lbW9qaXBpY2s6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXI7XG4gIEBPdXRwdXQoKSBvbmNoYXJkZWxldGU6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXI7XG5cblxuICAvLyBJbml0aWFsbHkgIGFwcGx5IGRlZmF1bHQgY29uZmlnLi4uXG4gIEBJbnB1dCgpIHRoZW1lOiBUaGVtZSA9IHt9O1xuXG4gIGVtb2ppQ2F0ZWdvcmllczogYW55W10gPSBbXTtcblxuICAvLyBsaXN0IG9mIGVtb3MgdHlwZSwgZS5nIGVtb2ppLCBnaWZzLCBzdGlja2Vycy4uLlxuICBlbW9zOiBhbnkgW10gPSBbXTtcbiAgYWN0aXZlQ2F0ZWdvcnk6IHN0cmluZztcbiAgYWN0aXZlRW1vOiBzdHJpbmc7XG4gIGFjdGl2ZUluZGV4OiBudW1iZXI7XG4gIGFjdGl2ZUVtb2ppU2V0OiBhbnlbXTtcbiAgaGlkZUZvb3RlcjogQm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgQElucHV0KCkgbWF4UmVjZW50RW1vamk6IHN0cmluZztcbiAgQElucHV0KCkgcmVjZW50RW1vamlTdG9yZUtleTogc3RyaW5nO1xuICBASW5wdXQoKSBzZWFyY2hFbW9qaVBsYWNlaG9sZGVyVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBlbW9qaU5vdEZvdW5kVGV4dDogc3RyaW5nO1xuXG4gIGVtb2ppREI6IGFueTtcbiAgZW1vamlEQktleTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvLyBTZXQgcmVjZW50IGVtb2ppIHN0b3JlIGtleS4uLlxuICAgIHRoaXMuZW1vamlEQktleSAgPSB0aGlzLnJlY2VudEVtb2ppU3RvcmVLZXkgfHwgREVGQVVMVFMucmVjZW50RW1vamlTdG9yZUtleTtcbiAgICAvLyBHZXQgcmVjZW50IGVtb2ppcy4uXG4gICAgdGhpcy5lbW9qaURCID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuZW1vamlEQktleSk7XG4gICAgaWYgKHRoaXMuZW1vamlEQikge1xuICAgIHRoaXMuZW1vamlEQiA9ICBKU09OLnBhcnNlKHRoaXMuZW1vamlEQik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG5vIHN0b3JlZCByZWNlbnQgZW1vamksIHNhdmUgaW4gdGhlIHN0b3JlIGFycmF5IC4uLlxuICAgICAgdGhpcy5lbW9qaURCID0gW107XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5lbW9qaURCS2V5LCBKU09OLnN0cmluZ2lmeSh0aGlzLmVtb2ppREIpKTtcbiAgICB9XG5cbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gdGhpcy50aGVtZS5tYXJ0RGVmYXVsdEFjdGl2ZUNhdGVnb3J5IHx8IERFRkFVTFRTLm1hcnREZWZhdWx0QWN0aXZlQ2F0ZWdvcnk7XG5cbiAgICBpZiAodGhpcy50aGVtZS5tYXJ0RGVmYXVsdEFjdGl2ZUNhdGVnb3J5ID09PSAnUmVjZW50JyAmJiB0aGlzLmVtb2ppREIubGVuZ3RoIDwgNSkge1xuICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IERFRkFVTFRTLm1hcnREZWZhdWx0QWN0aXZlQ2F0ZWdvcnk7XG4gICAgfVxuXG4gICAgLy8gZ2V0IHRoZSBlbW9qaSBjYXRlZ29yaWVzXG4gICAgdGhpcy5lbW9qaUNhdGVnb3JpZXMgPSBFTU9KSVMubWFwKCh2YWx1ZSkgPT4ge1xuICAgICAgcmV0dXJuIHtuYW1lOiB2YWx1ZS5uYW1lLCBpY29uOiB2YWx1ZS5pY29ufTtcbiAgICB9KTtcblxuICAgIC8vIGZpbHRlciB0byBzZXQgZGVmYXVsdHNcbiAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gRU1PSklTLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcbiAgICAgIGlmIChjYXRlZ29yeS5uYW1lID09PSB0aGlzLmFjdGl2ZUNhdGVnb3J5KSB7XG4gICAgICAgICAgICByZXR1cm4gY2F0ZWdvcnk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnVwZGF0ZUVtb2ppU2V0KCk7XG5cbiAgICB0aGlzLmFjdGl2ZUVtbyA9ICdFbW9qaSc7XG4gICAgLy8gY29sbGF0ZSB0aGUgZW1vcyB0eXBlXG4gICAgdGhpcy5lbW9zID0gRU1PUy5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICByZXR1cm4ge25hbWU6IHZhbHVlLm5hbWUsIGljb246IHZhbHVlLmljb259O1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2F0ZWdvcnlDaGFuZ2UoZSkge1xuICAgIC8vIHNldCBhY3RpdmUgY2F0ZWdvcnkgbmFtZS4uLlxuICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBlLm5hbWU7XG5cbiAgICB0aGlzLnVwZGF0ZUVtb2ppU2V0KCk7XG4gIH1cblxuICB1cGRhdGVFbW9qaVNldCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmVDYXRlZ29yeSA9PT0gJ1JlY2VudCcpIHtcbiAgICAgICAgLy8gSWYgcmVjZW50IGNhdGVnb3J5LCBzZXQgZW1vamkgdG8gZW1vamlzIGluIHRoZSByZWNlbnQgc3RvcmUuLi5cbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IEVNT0pJU1sxXS5pZDtcbiAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuZW1vamlEQjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVDYXRlZ29yeSA9PT0gJ1NlYXJjaCcpIHtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gRU1PSklTWzBdLmlkO1xuICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSB0aGlzLmVtb2ppREIuY29uY2F0KEVNT0pJU1syXS5lbW9qaXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIC8vIGZpbHRlciB0byBzZXQgY3VycmVudCBlbW9qaSBzZXQuLi5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSBFTU9KSVMuZmlsdGVyKChjYXRlZ29yeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjYXRlZ29yeS5uYW1lID09PSB0aGlzLmFjdGl2ZUNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGluZGV4IG9uIG1hbnVhbCBjaGFuZ2UuLi5cbiAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSB0aGlzLmFjdGl2ZUVtb2ppU2V0WzBdLmlkO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuYWN0aXZlRW1vamlTZXRbMF0uZW1vamlzO1xuXG4gICAgICB9XG4gIH1cblxuICBoYW5kbGVFbW9DaGFuZ2UoZSkge1xuICAgIHRoaXMuYWN0aXZlRW1vID0gZS5uYW1lO1xuICAgIC8vIGNvbGxhdGUgdGhlIGVtb3MgdHlwZVxuICAvLyAgIHRoaXMuZW1vcyA9IEVNT1MubWFwKCh2YWx1ZSkgPT4ge1xuICAvLyAgICByZXR1cm4ge25hbWU6IHZhbHVlLm5hbWUsIGljb246IHZhbHVlLmljb259O1xuICAvLyAgfSk7XG4gfVxuXG4gY2hlY2tJZkVtb2ppRXhpc3RzSW5FbW9qaURCKG5hbWUpIHtcbiAgbGV0IGVtb19leGlzdHMgPSBmYWxzZTtcbiAgLy8gY2hlY2tzIGlmIGVtb2ppIGlzIGFscmVhZHkgaW4gcmVjZW50IGVtb2ppIGRiIHN0b3JlLi4uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbW9qaURCLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRoaXMuZW1vamlEQltpXVsxXSA9PT0gbmFtZSkge1xuICAgICAgZW1vX2V4aXN0cyA9IHRydWU7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW1vX2V4aXN0cztcblxuIH1cbiAgYWRkRW1vamlUb1JlY2VudEVtb2ppREIoZW1vamk6IHN0cmluZ1tdKSB7XG4gICAgLy8gY2hlY2sgaWYgdGhlcmUgaXMgbm8gZHVwbGljYXRlXG4gICAgaWYgKCF0aGlzLmNoZWNrSWZFbW9qaUV4aXN0c0luRW1vamlEQihlbW9qaVsxXSkpIHtcbiAgICAgICAgLy8gcmVjZW50IGVtb2ppIGdyZWF0ZXIgdGhhbiB0aGUgbnVtYmVyIG9mIG1heCwgcmVtb3ZlIHRoZSBmaXJzdCBlbW9qaSBhbmQgYWRkIG5ldyBvbmVcbiAgICAgICAgLy8gdG8gdGhlIGJhY2suLi5cbiAgICAgICAgaWYgKHRoaXMuZW1vamlEQi5sZW5ndGggPCAodGhpcy5tYXhSZWNlbnRFbW9qaSB8fCBERUZBVUxUUy5tYXhSZWNlbnRFbW9qaSkpIHtcbiAgICAgICAgICB0aGlzLmVtb2ppREIucHVzaChlbW9qaSk7XG4gICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZW1vamlEQktleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5lbW9qaURCKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVtb2ppREIuc3BsaWNlKDAsIDEpO1xuICAgICAgICB0aGlzLmVtb2ppREIucHVzaChlbW9qaSk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmVtb2ppREJLZXksIEpTT04uc3RyaW5naWZ5KHRoaXMuZW1vamlEQikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgaGFuZGxlRW1vamlQaWNrKGUpIHtcblxuICAgIC8vIHNhdmUgdGhlIHBpY2tlZCBlbW9qaSBpbnNpZGUgcmVjZW50IGVtb2ppIERCXG4gICAgdGhpcy5hZGRFbW9qaVRvUmVjZW50RW1vamlEQihlLmVtb2ppKTtcblxuICAgIHRoaXMub25lbW9qaXBpY2suZW1pdCh7Y2hhcjogZS5lbW9qaVswXSwgbmFtZTogZS5lbW9qaVsxXX0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhckRlbGV0ZShlKSB7XG4gICAgdGhpcy5vbmNoYXJkZWxldGUuZW1pdCh7ZGVsZXRlQ2hhcjogdHJ1ZX0pO1xuICB9XG5cbiAgaGFuZGxlQ29udGVudFNjcm9sbChlKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2VtaXR0ZWQnLCBlLnNjcm9sbFRvcCwgZS5zY3JvbGxIZWlnaHQpO1xuXG4gICAgaWYgKChlLnNjcm9sbEhlaWdodCAtIGUuc2Nyb2xsVG9wKSA8PSA0MDApIHtcblxuICAgICAgLy8gY29uc29sZS5sb2coJ2FsbW9zdCBhdCB0aGUgZW5kJyk7XG4gICAgICB0aGlzLmhpZGVGb290ZXIgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygndG9vcGluZyB0aGUgc2Nyb2xsJyk7XG4gICAgICB0aGlzLmhpZGVGb290ZXIgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDb250ZW50U3dpcGUoZSkge1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHRoaXMuYWN0aXZlSW5kZXg7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gZS5kaXJlY3Rpb247XG4gICAgLy8gTG9nIHRoZSBuZWNlc3NhcnkgZGV0YWlscy4uLlxuICAgIGlmIChkaXJlY3Rpb24gPT09ICdsZWZ0Jykge1xuICAgICAgY29uc3QgcHJldjogbnVtYmVyID0gY3VycmVudEluZGV4IC0gMTtcbiAgICAgIGlmIChwcmV2ID49IDApIHtcblxuICAgICAgICBpZiAocHJldiA9PT0gMCkge1xuICAgICAgICAgIC8vIHNlYXJjaFxuICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBFTU9KSVNbMF0uaWQ7XG4gICAgICAgICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IEVNT0pJU1swXS5uYW1lO1xuICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSB0aGlzLmVtb2ppREIuY29uY2F0KEVNT0pJU1syXS5lbW9qaXMpO1xuICAgICAgICB9IGVsc2UgaWYgKHByZXYgPT09IDEgKSB7XG4gICAgICAgICAgLy8gcmVjZW50XG4gICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IEVNT0pJU1sxXS5pZDtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gRU1PSklTWzFdLm5hbWU7XG4gICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuZW1vamlEQjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBwcmV2Q2F0ZWdvcnlEYXRhID0gRU1PSklTLmZpbHRlcigoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkuaWQgPT09IHByZXYpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIHNldCB0aGUgdmFsdWVzLi4uXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gcHJldjtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBwcmV2Q2F0ZWdvcnlEYXRhWzBdLm5hbWU7XG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gcHJldkNhdGVnb3J5RGF0YVswXS5lbW9qaXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICBjb25zdCBuZXh0ID0gY3VycmVudEluZGV4ICsgMTtcbiAgICAgICAgaWYgKG5leHQgPT09IDApIHtcbiAgICAgICAgICAvLyBzZWFyY2hcbiAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gRU1PSklTWzBdLmlkO1xuICAgICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBFTU9KSVNbMF0ubmFtZTtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUVtb2ppU2V0ID0gdGhpcy5lbW9qaURCLmNvbmNhdChFTU9KSVNbMl0uZW1vamlzKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0ID09PSAxICkge1xuICAgICAgICAgIC8vIHJlY2VudFxuICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBFTU9KSVNbMV0uaWQ7XG4gICAgICAgICAgdGhpcy5hY3RpdmVFbW9qaVNldCA9IHRoaXMuZW1vamlEQjtcbiAgICAgICAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gRU1PSklTWzFdLm5hbWU7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobmV4dCA8PSAoRU1PSklTLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldkNhdGVnb3J5RGF0YSA9IEVNT0pJUy5maWx0ZXIoKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoY2F0ZWdvcnkuaWQgPT09IG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgLy8gc2V0IHRoZSB2YWx1ZXMuLi5cbiAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IG5leHQ7XG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSBwcmV2Q2F0ZWdvcnlEYXRhWzBdLm5hbWU7XG4gICAgICAgICAgICAgIHRoaXMuYWN0aXZlRW1vamlTZXQgPSBwcmV2Q2F0ZWdvcnlEYXRhWzBdLmVtb2ppcztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuIl19