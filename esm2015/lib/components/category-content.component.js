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
        // @ViewChild('swipePane') swipePane: ElementRef;
        this.searchSet = [];
        this.recentEmosForSearch = [];
        this.initialEmoj = false;
        this.notFound = false;
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
}
NgxEmojCategoryContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-emoj-category-content',
                template: `
  <input *ngIf="activeIndex === 0"  type="text" (keyup)="search($event)" placeholder="{{ searchEmojiPlaceholderText }}"
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
  <div class="ngx-emoji-category-content" [ngStyle]="{'padding': '5px'}"
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
    height: 80%;
    width: 105% !important;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb29wLWVtb2ppLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsRUFDVCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE1BQU0sRUFDUCxNQUFNLHFCQUFxQixDQUFDO0FBK0U3QixNQUFNLE9BQU8sK0JBQStCOzs7O0lBeUIxQyxZQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQWJ2QixnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQy9CLG9CQUFlLEdBQVEsSUFBSSxZQUFZLENBQUM7UUFDeEMsbUJBQWMsR0FBUSxJQUFJLFlBQVksQ0FBQzs7UUFRakQsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQix3QkFBbUIsR0FBUSxFQUFFLENBQUM7UUFHNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFHRCxNQUFNLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLHdCQUF3QjtZQUN4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDOztnQkFDN0MsU0FBUyxHQUFHLEVBQUU7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RDLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoRDtZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3pCOztjQUNLLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7UUFFMUMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ25ELElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDN0MsT0FBTyxJQUFJLENBQUM7aUJBQ2I7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUVKO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1NBQ2xEO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7O0lBR0QsZUFBZTtRQUNiLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxRQUFROzs7O1FBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNoRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztnQkFDeEIsU0FBUyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVM7Z0JBQ3RELFlBQVksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxZQUFZO2FBQzdELENBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBSztRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ3BCLEtBQUssRUFBRSxLQUFLO1NBQ2IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBekpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCVDt5QkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0RSO2FBQ0Y7Ozs7WUFuRkMsU0FBUzs7OzJCQXNGUixLQUFLOytCQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7eUNBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7a0NBQ0wsS0FBSzswQkFFTCxNQUFNOzhCQUNOLE1BQU07NkJBQ04sTUFBTTs2QkFLTixTQUFTLFNBQUMsZ0JBQWdCOzs7O0lBakIzQix1REFBOEI7O0lBQzlCLDJEQUErQjs7SUFDL0Isc0RBQTZCOztJQUM3QiwwREFBOEI7O0lBQzlCLHdEQUErQjs7SUFDL0IscUVBQTRDOztJQUM1Qyx5REFBNkI7O0lBQzdCLDREQUFtQzs7SUFDbkMsOERBQXFDOztJQUVyQyxzREFBeUM7O0lBQ3pDLDBEQUFrRDs7SUFDbEQseURBQWlEOztJQUVqRCxtREFBa0I7O0lBQ2xCLHNEQUFxQjs7SUFFckIseURBQXdEOztJQUd4RCxvREFBb0I7O0lBQ3BCLDhEQUE4Qjs7Ozs7SUFFbEIsNkNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBFbGVtZW50UmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBSZW5kZXJlcjIsXHJcbiAgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEVNT0pJU1xyXG59IGZyb20gJy4uL21pc2MvZW1vamlzLmRhdGEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZW1vai1jYXRlZ29yeS1jb250ZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxpbnB1dCAqbmdJZj1cImFjdGl2ZUluZGV4ID09PSAwXCIgIHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cInNlYXJjaCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJ7eyBzZWFyY2hFbW9qaVBsYWNlaG9sZGVyVGV4dCB9fVwiXHJcbiAgY2xhc3M9XCJuZ3gtZW1vamktc2VhcmNoXCIgW25nU3R5bGVdPVwieydjb2xvcic6IHNlYXJjaEJveFN0eWxlLkZHY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kJzogc2VhcmNoQm94U3R5bGUuQkdjb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1yYWRpdXMnOiBzZWFyY2hCb3hTdHlsZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdib3JkZXItY29sb3InOiBzZWFyY2hCb3hTdHlsZS5ib3JkZXJDb2xvcn1cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZ3gtZW1vamktbm90LWZvdW5kXCIgKm5nSWY9XCJhY3RpdmVJbmRleCA9PT0gMCAmJiBub3RGb3VuZCA9PSB0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogbWFydEVtb2ppTm90Rm91bmRGR1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZW1vamlOb3RGb3VuZFRleHQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm5neC1lbW9qaS1jYXRlZ29yeS1jb250ZW50XCIgW25nU3R5bGVdPVwieydwYWRkaW5nJzogJzVweCd9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNlbW9qaUNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1idG4tY29udGFpbmVyXCJcclxuICAgICAgICAqbmdGb3I9XCJsZXQgZW1vIG9mIGNhdGVnb3J5RW1vamlTZXRcIiBbbmdTdHlsZV09XCJ7J2hlaWdodCc6IGVtb2ppQnRuUGFkZGluZy55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBlbW9qaUJ0blBhZGRpbmcueCAgIH1cIj5cclxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInBpY2tFbW9qaShlbW8pXCIgY2xhc3M9XCJuZ3gtZW1vamktZW1vai1idG5cIlxyXG4gICAgICAgICAgW25nU3R5bGVdPVwieydmb250LXNpemUnOiBlbW9qaUZvbnRTaXplfVwiPlxyXG4gICAgICB7eyBlbW9bMF0gfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuXHJcblxyXG4gIC5uZ3gtZW1vamktbm90LWZvdW5kXHJcbiAge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBtYXJnaW46IDYwcHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLm5neC1lbW9qaS1zZWFyY2hcclxuICB7XHJcbiAgICB3aWR0aDogODclO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0byAxMHB4IGF1dG87XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5neC1lbW9qaS1jYXRlZ29yeS1jb250ZW50XHJcbiAge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgICB3aWR0aDogMTA1JSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLmVtb2ppLWJ0bi1jb250YWluZXJcclxuICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLm5neC1lbW9qaS1lbW9qLWJ0blxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEVtb2pDYXRlZ29yeUNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCkgY2F0ZWdvcnlOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2F0ZWdvcnlFbW9qaVNldDogYW55O1xyXG4gIEBJbnB1dCgpIGFjdGl2ZUluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgZW1vamlCdG5QYWRkaW5nOiBhbnk7XHJcbiAgQElucHV0KCkgZW1vamlGb250U2l6ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VhcmNoQm94U3R5bGU6IGFueTtcclxuICBASW5wdXQoKSBlbW9qaU5vdEZvdW5kVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1hcnRFbW9qaU5vdEZvdW5kRkc6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIG9ucGlja2Vtb2ppID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICBAT3V0cHV0KCkgb25jb250ZW50c2Nyb2xsOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gIEBPdXRwdXQoKSBvbmNvbnRlbnRTd2lwZTogYW55ID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuXHJcbiAgbm90Rm91bmQ6IGJvb2xlYW47XHJcbiAgaW5pdGlhbEVtb2o6IGJvb2xlYW47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2Vtb2ppQ29udGFpbmVyJykgZW1vamlDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgLy8gQFZpZXdDaGlsZCgnc3dpcGVQYW5lJykgc3dpcGVQYW5lOiBFbGVtZW50UmVmO1xyXG5cclxuICBzZWFyY2hTZXQ6IGFueSA9IFtdO1xyXG4gIHJlY2VudEVtb3NGb3JTZWFyY2g6IGFueSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJkOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMuaW5pdGlhbEVtb2ogPSBmYWxzZTtcclxuICAgIHRoaXMubm90Rm91bmQgPSBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBzZWFyY2goZSkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxFbW9qKSB7XHJcbiAgICAgIC8vIHNhdmUgdGhlIHJlY2VudCBlbW9qc1xyXG4gICAgICB0aGlzLnJlY2VudEVtb3NGb3JTZWFyY2ggPSB0aGlzLmNhdGVnb3J5RW1vamlTZXQ7XHJcbiAgICAgIGxldCBzZWFyY2hTZXQgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCBFTU9KSVMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzZWFyY2hTZXQgPSBzZWFyY2hTZXQuY29uY2F0KEVNT0pJU1tpXS5lbW9qaXMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VhcmNoU2V0ID0gc2VhcmNoU2V0O1xyXG4gICAgICB0aGlzLmluaXRpYWxFbW9qID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHF1ZXJ5ID0gZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBpZiAocXVlcnkgJiYgcXVlcnkudHJpbSgpICE9PSAnJykge1xyXG4gICAgICB0aGlzLmNhdGVnb3J5RW1vamlTZXQgPSB0aGlzLnNlYXJjaFNldC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW1bMV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5KSA+IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcnlFbW9qaVNldCA9IHRoaXMucmVjZW50RW1vc0ZvclNlYXJjaDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNhdGVnb3J5RW1vamlTZXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMubm90Rm91bmQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vIGxpc3RlbiBmb3Igc2Nyb2xsIGV2ZW50XHJcbiAgICB0aGlzLnJkLmxpc3Rlbih0aGlzLmVtb2ppQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLm9uY29udGVudHNjcm9sbC5lbWl0KHtcclxuICAgICAgICBzY3JvbGxUb3A6IHRoaXMuZW1vamlDb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AsXHJcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiB0aGlzLmVtb2ppQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwaWNrRW1vamkoZW1vamkpIHtcclxuICAgIHRoaXMub25waWNrZW1vamkuZW1pdCh7XHJcbiAgICAgIGVtb2ppOiBlbW9qaVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==