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
     * @return {?}
     */
    ngAfterViewInit() {
        // listen for scroll event
        this.rd.listen(this.emojiContainer.nativeElement, 'scroll', (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.oncontentscroll.emit({
                scrollTop: this.emojiContainer.nativeElement.scrollTop,
                scrollHeight: this.emojiContainer.nativeElement.scrollHeight
            });
        }));
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
        setTimeout((/**
         * @return {?}
         */
        () => element.focus()), 0);
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
                                       'border-color': searchBoxStyle.borderColor}"/>
                                       <div class="ngx-emoji-not-found" *ngIf="activeIndex === 0 && notFound == true"
                                       [ngStyle]="{
                                        'color': martEmojiNotFoundFG
                                        }">
                                        {{ emojiNotFoundText }}
                                       </div>
  <div class="ngx-emoji-category-content"
       [ngStyle]="{'padding': '0px 5px 5px 5%', 'height': activeIndex === 0? '70%':'85%'}"
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
    onpickemoji: [{ type: Output }],
    oncontentscroll: [{ type: Output }],
    oncontentSwipe: [{ type: Output }],
    emojiContainer: [{ type: ViewChild, args: ['emojiContainer',] }]
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
    NgxEmojCategoryContentComponent.prototype.emojiContainer;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb29wLWVtb2ppLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsRUFDVCxTQUFTLEVBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE1BQU0sRUFDUCxNQUFNLHFCQUFxQixDQUFDO0FBNkU3QixNQUFNLE9BQU8sK0JBQStCOzs7O0lBd0IxQyxZQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQVp2QixnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQy9CLG9CQUFlLEdBQVEsSUFBSSxZQUFZLENBQUM7UUFDeEMsbUJBQWMsR0FBUSxJQUFJLFlBQVksQ0FBQztRQU9qRCxjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUc1QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLHdCQUF3QjtZQUN4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDOztnQkFDN0MsU0FBUyxHQUFHLEVBQUU7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FB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bEQseURBQWlEOztJQUVqRCxtREFBa0I7O0lBQ2xCLHNEQUFxQjs7SUFFckIseURBQXdEOztJQUV4RCxvREFBb0I7O0lBQ3BCLDhEQUE4Qjs7Ozs7SUFFbEIsNkNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBFbGVtZW50UmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBSZW5kZXJlcjIsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBPbkNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBFTU9KSVNcclxufSBmcm9tICcuLi9taXNjL2Vtb2ppcy5kYXRhJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWVtb2otY2F0ZWdvcnktY29udGVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8aW5wdXQgW2hpZGRlbl09XCJhY3RpdmVJbmRleCAhPT0gMFwiICB0eXBlPVwidGV4dFwiIChrZXl1cCk9XCJzZWFyY2goJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwie3sgc2VhcmNoRW1vamlQbGFjZWhvbGRlclRleHQgfX1cIlxyXG4gIGNsYXNzPVwibmd4LWVtb2ppLXNlYXJjaFwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiBzZWFyY2hCb3hTdHlsZS5GR2NvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZCc6IHNlYXJjaEJveFN0eWxlLkJHY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdib3JkZXItcmFkaXVzJzogc2VhcmNoQm94U3R5bGUuYm9yZGVyUmFkaXVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogc2VhcmNoQm94U3R5bGUuYm9yZGVyQ29sb3J9XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmd4LWVtb2ppLW5vdC1mb3VuZFwiICpuZ0lmPVwiYWN0aXZlSW5kZXggPT09IDAgJiYgbm90Rm91bmQgPT0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb2xvcic6IG1hcnRFbW9qaU5vdEZvdW5kRkdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVtb2ppTm90Rm91bmRUZXh0IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJuZ3gtZW1vamktY2F0ZWdvcnktY29udGVudFwiXHJcbiAgICAgICBbbmdTdHlsZV09XCJ7J3BhZGRpbmcnOiAnMHB4IDVweCA1cHggNSUnLCAnaGVpZ2h0JzogYWN0aXZlSW5kZXggPT09IDA/ICc3MCUnOic4NSUnfVwiXHJcbiAgICAgICAjZW1vamlDb250YWluZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktYnRuLWNvbnRhaW5lclwiXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IGVtbyBvZiBjYXRlZ29yeUVtb2ppU2V0XCIgW25nU3R5bGVdPVwieydoZWlnaHQnOiBlbW9qaUJ0blBhZGRpbmcueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZW1vamlCdG5QYWRkaW5nLnggICB9XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwaWNrRW1vamkoZW1vKVwiIGNsYXNzPVwibmd4LWVtb2ppLWVtb2otYnRuXCJcclxuICAgICAgICAgIFtuZ1N0eWxlXT1cInsnZm9udC1zaXplJzogZW1vamlGb250U2l6ZX1cIj5cclxuICAgICAge3sgZW1vWzBdIH19XHJcbiAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgLm5neC1lbW9qaS1ub3QtZm91bmRcclxuICB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAubmd4LWVtb2ppLXNlYXJjaFxyXG4gIHtcclxuICAgIHdpZHRoOiA4NyU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvIDEwcHggYXV0bztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubmd4LWVtb2ppLWNhdGVnb3J5LWNvbnRlbnRcclxuICB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLmVtb2ppLWJ0bi1jb250YWluZXJcclxuICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLm5neC1lbW9qaS1lbW9qLWJ0blxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEVtb2pDYXRlZ29yeUNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBjYXRlZ29yeU5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBjYXRlZ29yeUVtb2ppU2V0OiBhbnk7XHJcbiAgQElucHV0KCkgYWN0aXZlSW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBlbW9qaUJ0blBhZGRpbmc6IGFueTtcclxuICBASW5wdXQoKSBlbW9qaUZvbnRTaXplOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VhcmNoRW1vamlQbGFjZWhvbGRlclRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBzZWFyY2hCb3hTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIGVtb2ppTm90Rm91bmRUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWFydEVtb2ppTm90Rm91bmRGRzogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgb25waWNrZW1vamkgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gIEBPdXRwdXQoKSBvbmNvbnRlbnRzY3JvbGw6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcbiAgQE91dHB1dCgpIG9uY29udGVudFN3aXBlOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuICBub3RGb3VuZDogYm9vbGVhbjtcclxuICBpbml0aWFsRW1vajogYm9vbGVhbjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZW1vamlDb250YWluZXInKSBlbW9qaUNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgc2VhcmNoU2V0OiBhbnkgPSBbXTtcclxuICByZWNlbnRFbW9zRm9yU2VhcmNoOiBhbnkgPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZDogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLmluaXRpYWxFbW9qID0gZmFsc2U7XHJcbiAgICB0aGlzLm5vdEZvdW5kID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c1NlYXJjaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VhcmNoKGUpIHtcclxuICAgIGlmICghdGhpcy5pbml0aWFsRW1vaikge1xyXG4gICAgICAvLyBzYXZlIHRoZSByZWNlbnQgZW1vanNcclxuICAgICAgdGhpcy5yZWNlbnRFbW9zRm9yU2VhcmNoID0gdGhpcy5jYXRlZ29yeUVtb2ppU2V0O1xyXG4gICAgICBsZXQgc2VhcmNoU2V0ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgRU1PSklTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc2VhcmNoU2V0ID0gc2VhcmNoU2V0LmNvbmNhdChFTU9KSVNbaV0uZW1vamlzKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlYXJjaFNldCA9IHNlYXJjaFNldDtcclxuICAgICAgdGhpcy5pbml0aWFsRW1vaiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBxdWVyeSA9IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yeUVtb2ppU2V0ID0gdGhpcy5zZWFyY2hTZXQuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtWzFdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeSkgPiAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNhdGVnb3J5RW1vamlTZXQgPSB0aGlzLnJlY2VudEVtb3NGb3JTZWFyY2g7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jYXRlZ29yeUVtb2ppU2V0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLm5vdEZvdW5kID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubm90Rm91bmQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vIGxpc3RlbiBmb3Igc2Nyb2xsIGV2ZW50XHJcbiAgICB0aGlzLnJkLmxpc3Rlbih0aGlzLmVtb2ppQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLm9uY29udGVudHNjcm9sbC5lbWl0KHtcclxuICAgICAgICBzY3JvbGxUb3A6IHRoaXMuZW1vamlDb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AsXHJcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiB0aGlzLmVtb2ppQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwaWNrRW1vamkoZW1vamkpIHtcclxuICAgIHRoaXMub25waWNrZW1vamkuZW1pdCh7XHJcbiAgICAgIGVtb2ppOiBlbW9qaVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvY3VzU2VhcmNoKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMucmQuc2VsZWN0Um9vdEVsZW1lbnQoJy5uZ3gtZW1vamktc2VhcmNoJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IGVsZW1lbnQuZm9jdXMoKSwgMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==