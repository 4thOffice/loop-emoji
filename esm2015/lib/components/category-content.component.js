/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { EMOJIS } from '../misc/emojis.data';
export class NgxEmojCategoryContentComponent {
    /**
     * @param {?} rd
     */
    constructor(rd) {
        this.rd = rd;
        this.onpickemoji = new EventEmitter;
        this.oncontentscroll = new EventEmitter;
        this.oncontentSwipe = new EventEmitter;
        this.searchSet = [];
        this.recentEmosForSearch = [];
        this.initialEmoj = false;
        this.notFound = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.activeIndex === 0) {
            this.focusSearch();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    search(e) {
        if (!this.initialEmoj) {
            // save the recent emojs
            this.recentEmosForSearch = this.categoryEmojiSet;
            /** @type {?} */
            let searchSet = [];
            for (let i = 2; i < EMOJIS.length; i++) {
                searchSet = searchSet.concat(EMOJIS[i].emojis);
            }
            this.searchSet = searchSet;
            this.initialEmoj = true;
        }
        /** @type {?} */
        const query = e.target.value.toLowerCase();
        if (query && query.trim() !== '') {
            this.categoryEmojiSet = this.searchSet.filter((/**
             * @param {?} item
             * @return {?}
             */
            item => {
                if (item[1].toLowerCase().indexOf(query) > -1) {
                    return item;
                }
            }));
        }
        else {
            this.categoryEmojiSet = this.recentEmosForSearch;
        }
        if (this.categoryEmojiSet.length === 0) {
            this.notFound = true;
        }
        else {
            this.notFound = false;
        }
    }
    /**
     * @param {?} emoji
     * @return {?}
     */
    pickEmoji(emoji) {
        this.onpickemoji.emit({
            emoji: emoji
        });
    }
    /**
     * @private
     * @return {?}
     */
    focusSearch() {
        /** @type {?} */
        const element = this.rd.selectRootElement('.ngx-emoji-search');
        this.searchInput.nativeElement.value = '';
        this.initialEmoj = false;
        this.notFound = false;
        setTimeout((/**
         * @return {?}
         */
        () => {
            element.focus();
        }), 0);
    }
}
NgxEmojCategoryContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-emoj-category-content',
                template: `
    <input [hidden]="activeIndex !== 0"  type="text" (keyup)="search($event)" placeholder="{{ searchEmojiPlaceholderText }}"
        class="ngx-emoji-search" [ngStyle]="{'color': searchBoxStyle.FGcolor,
        'background': searchBoxStyle.BGcolor,
        'border-radius': searchBoxStyle.borderRadius,
        'border-color': searchBoxStyle.borderColor}"
        #searchInput/>
    <div class="ngx-emoji-not-found" *ngIf="activeIndex === 0 && notFound == true"
    [ngStyle]="{
    'color': martEmojiNotFoundFG
    }">
    {{ emojiNotFoundText }}
    </div>
  <div class="ngx-emoji-category-content"
       *ngIf="!notFound"
       [ngStyle]="{'padding': '0px 5px 5px ' + martEmojiContentPaddingLeft, 'height': activeIndex === 0? '70%':'85%'}"
       #emojiContainer>

      <div class="emoji-btn-container"
        *ngFor="let emo of categoryEmojiSet" [ngStyle]="{'height': emojiBtnPadding.y,
                                                         'width': emojiBtnPadding.x   }">
          <button (click)="pickEmoji(emo)" class="ngx-emoji-emoj-btn"
          [ngStyle]="{'font-size': emojiFontSize}">
      {{ emo[0] }}
    </button>
      </div>
  </div>
  `,
                styles: [`
  .ngx-emoji-not-found
  {
    display: table;
    margin: 60px auto;
    font-size: 15px;
    font-family: sans-serif;
  }

  .ngx-emoji-search
  {
    width: 87%;
    display: table;
    border: 1px solid;
    padding: 5px 10px;
    height: 30px;
    font-family: sans-serif;
    margin: 15px auto 10px auto;
    outline: none;
  }

  .ngx-emoji-category-content
  {
    overflow-y: scroll;
    width: 100% !important;
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    align-content: flex-start;
    justify-content: flex-start;
  }

  .emoji-btn-container
  {
    display: flex;
    overflow: hidden;
  }
  .ngx-emoji-emoj-btn
  {
    background: transparent;
    margin: auto;
    border: none;
    outline: none;
    cursor: pointer;
  }
  `]
            }] }
];
/** @nocollapse */
NgxEmojCategoryContentComponent.ctorParameters = () => [
    { type: Renderer2 }
];
NgxEmojCategoryContentComponent.propDecorators = {
    categoryName: [{ type: Input }],
    categoryEmojiSet: [{ type: Input }],
    activeIndex: [{ type: Input }],
    emojiBtnPadding: [{ type: Input }],
    emojiFontSize: [{ type: Input }],
    searchEmojiPlaceholderText: [{ type: Input }],
    searchBoxStyle: [{ type: Input }],
    emojiNotFoundText: [{ type: Input }],
    martEmojiNotFoundFG: [{ type: Input }],
    martEmojiContentPaddingLeft: [{ type: Input }],
    onpickemoji: [{ type: Output }],
    oncontentscroll: [{ type: Output }],
    oncontentSwipe: [{ type: Output }],
    emojiContainer: [{ type: ViewChild, args: ['emojiContainer',] }],
    searchInput: [{ type: ViewChild, args: ['searchInput',] }]
};
if (false) {
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.categoryName;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.categoryEmojiSet;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.activeIndex;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.emojiBtnPadding;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.emojiFontSize;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.searchEmojiPlaceholderText;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.searchBoxStyle;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.emojiNotFoundText;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.martEmojiNotFoundFG;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.martEmojiContentPaddingLeft;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.onpickemoji;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.oncontentscroll;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.oncontentSwipe;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.notFound;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.initialEmoj;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.searchValue;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.emojiContainer;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.searchInput;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.searchSet;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.recentEmosForSearch;
    /**
     * @type {?}
     * @private
     */
    NgxEmojCategoryContentComponent.prototype.rd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb29wLWVtb2ppLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsRUFFVCxTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNILE1BQU0sRUFDVCxNQUFNLHFCQUFxQixDQUFDO0FBK0U3QixNQUFNLE9BQU8sK0JBQStCOzs7O0lBMkJ4QyxZQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQWR2QixnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQy9CLG9CQUFlLEdBQVEsSUFBSSxZQUFZLENBQUM7UUFDeEMsbUJBQWMsR0FBUSxJQUFJLFlBQVksQ0FBQztRQVNqRCxjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUcxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLHdCQUF3QjtZQUN4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDOztnQkFDN0MsU0FBUyxHQUFHLEVBQUU7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FB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NkNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgSW5wdXQsXG4gICAgT3V0cHV0LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBFbGVtZW50UmVmLFxuICAgIFZpZXdDaGlsZCxcbiAgICBPbkNoYW5nZXMsXG4gICAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgICBFTU9KSVNcbn0gZnJvbSAnLi4vbWlzYy9lbW9qaXMuZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWVtb2otY2F0ZWdvcnktY29udGVudCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8aW5wdXQgW2hpZGRlbl09XCJhY3RpdmVJbmRleCAhPT0gMFwiICB0eXBlPVwidGV4dFwiIChrZXl1cCk9XCJzZWFyY2goJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwie3sgc2VhcmNoRW1vamlQbGFjZWhvbGRlclRleHQgfX1cIlxuICAgICAgICBjbGFzcz1cIm5neC1lbW9qaS1zZWFyY2hcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogc2VhcmNoQm94U3R5bGUuRkdjb2xvcixcbiAgICAgICAgJ2JhY2tncm91bmQnOiBzZWFyY2hCb3hTdHlsZS5CR2NvbG9yLFxuICAgICAgICAnYm9yZGVyLXJhZGl1cyc6IHNlYXJjaEJveFN0eWxlLmJvcmRlclJhZGl1cyxcbiAgICAgICAgJ2JvcmRlci1jb2xvcic6IHNlYXJjaEJveFN0eWxlLmJvcmRlckNvbG9yfVwiXG4gICAgICAgICNzZWFyY2hJbnB1dC8+XG4gICAgPGRpdiBjbGFzcz1cIm5neC1lbW9qaS1ub3QtZm91bmRcIiAqbmdJZj1cImFjdGl2ZUluZGV4ID09PSAwICYmIG5vdEZvdW5kID09IHRydWVcIlxuICAgIFtuZ1N0eWxlXT1cIntcbiAgICAnY29sb3InOiBtYXJ0RW1vamlOb3RGb3VuZEZHXG4gICAgfVwiPlxuICAgIHt7IGVtb2ppTm90Rm91bmRUZXh0IH19XG4gICAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJuZ3gtZW1vamktY2F0ZWdvcnktY29udGVudFwiXG4gICAgICAgKm5nSWY9XCIhbm90Rm91bmRcIlxuICAgICAgIFtuZ1N0eWxlXT1cInsncGFkZGluZyc6ICcwcHggNXB4IDVweCAnICsgbWFydEVtb2ppQ29udGVudFBhZGRpbmdMZWZ0LCAnaGVpZ2h0JzogYWN0aXZlSW5kZXggPT09IDA/ICc3MCUnOic4NSUnfVwiXG4gICAgICAgI2Vtb2ppQ29udGFpbmVyPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktYnRuLWNvbnRhaW5lclwiXG4gICAgICAgICpuZ0Zvcj1cImxldCBlbW8gb2YgY2F0ZWdvcnlFbW9qaVNldFwiIFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogZW1vamlCdG5QYWRkaW5nLnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBlbW9qaUJ0blBhZGRpbmcueCAgIH1cIj5cbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwaWNrRW1vamkoZW1vKVwiIGNsYXNzPVwibmd4LWVtb2ppLWVtb2otYnRuXCJcbiAgICAgICAgICBbbmdTdHlsZV09XCJ7J2ZvbnQtc2l6ZSc6IGVtb2ppRm9udFNpemV9XCI+XG4gICAgICB7eyBlbW9bMF0gfX1cbiAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYCxcbiAgICBzdHlsZXM6IFtgXG4gIC5uZ3gtZW1vamktbm90LWZvdW5kXG4gIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW46IDYwcHggYXV0bztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIH1cblxuICAubmd4LWVtb2ppLXNlYXJjaFxuICB7XG4gICAgd2lkdGg6IDg3JTtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOiAxNXB4IGF1dG8gMTBweCBhdXRvO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAubmd4LWVtb2ppLWNhdGVnb3J5LWNvbnRlbnRcbiAge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIH1cblxuICAuZW1vamktYnRuLWNvbnRhaW5lclxuICB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5uZ3gtZW1vamktZW1vai1idG5cbiAge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RW1vakNhdGVnb3J5Q29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKSBjYXRlZ29yeU5hbWU6IHN0cmluZztcbiAgICBASW5wdXQoKSBjYXRlZ29yeUVtb2ppU2V0OiBhbnk7XG4gICAgQElucHV0KCkgYWN0aXZlSW5kZXg6IG51bWJlcjtcbiAgICBASW5wdXQoKSBlbW9qaUJ0blBhZGRpbmc6IGFueTtcbiAgICBASW5wdXQoKSBlbW9qaUZvbnRTaXplOiBzdHJpbmc7XG4gICAgQElucHV0KCkgc2VhcmNoRW1vamlQbGFjZWhvbGRlclRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBzZWFyY2hCb3hTdHlsZTogYW55O1xuICAgIEBJbnB1dCgpIGVtb2ppTm90Rm91bmRUZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgbWFydEVtb2ppTm90Rm91bmRGRzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG1hcnRFbW9qaUNvbnRlbnRQYWRkaW5nTGVmdDogc3RyaW5nO1xuXG4gICAgQE91dHB1dCgpIG9ucGlja2Vtb2ppID0gbmV3IEV2ZW50RW1pdHRlcjtcbiAgICBAT3V0cHV0KCkgb25jb250ZW50c2Nyb2xsOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyO1xuICAgIEBPdXRwdXQoKSBvbmNvbnRlbnRTd2lwZTogYW55ID0gbmV3IEV2ZW50RW1pdHRlcjtcblxuICAgIG5vdEZvdW5kOiBib29sZWFuO1xuICAgIGluaXRpYWxFbW9qOiBib29sZWFuO1xuICAgIHNlYXJjaFZhbHVlOiBzdHJpbmc7XG5cbiAgICBAVmlld0NoaWxkKCdlbW9qaUNvbnRhaW5lcicpIGVtb2ppQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3NlYXJjaElucHV0Jykgc2VhcmNoSW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgICBzZWFyY2hTZXQ6IGFueSA9IFtdO1xuICAgIHJlY2VudEVtb3NGb3JTZWFyY2g6IGFueSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZDogUmVuZGVyZXIyKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbEVtb2ogPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICBpZiAodGhpcy5hY3RpdmVJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5mb2N1c1NlYXJjaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VhcmNoKGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxFbW9qKSB7XG4gICAgICAgICAgICAvLyBzYXZlIHRoZSByZWNlbnQgZW1vanNcbiAgICAgICAgICAgIHRoaXMucmVjZW50RW1vc0ZvclNlYXJjaCA9IHRoaXMuY2F0ZWdvcnlFbW9qaVNldDtcbiAgICAgICAgICAgIGxldCBzZWFyY2hTZXQgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgRU1PSklTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoU2V0ID0gc2VhcmNoU2V0LmNvbmNhdChFTU9KSVNbaV0uZW1vamlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2V0ID0gc2VhcmNoU2V0O1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsRW1vaiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcXVlcnkgPSBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChxdWVyeSAmJiBxdWVyeS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5RW1vamlTZXQgPSB0aGlzLnNlYXJjaFNldC5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1bMV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5KSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5RW1vamlTZXQgPSB0aGlzLnJlY2VudEVtb3NGb3JTZWFyY2g7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcnlFbW9qaVNldC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMubm90Rm91bmQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGlja0Vtb2ppKGVtb2ppKSB7XG4gICAgICAgIHRoaXMub25waWNrZW1vamkuZW1pdCh7XG4gICAgICAgICAgICBlbW9qaTogZW1vamlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmb2N1c1NlYXJjaCgpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucmQuc2VsZWN0Um9vdEVsZW1lbnQoJy5uZ3gtZW1vamktc2VhcmNoJyk7XG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLmluaXRpYWxFbW9qID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm90Rm91bmQgPSBmYWxzZTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxufVxuIl19