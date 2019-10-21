/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, } from '@angular/core';
import { EMOJIS } from '../misc/emojis.data';
export class NgxEmojCategoryContentComponent {
    constructor() {
        this.onpickemoji = new EventEmitter;
        this.oncontentscroll = new EventEmitter;
        this.oncontentSwipe = new EventEmitter;
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
NgxEmojCategoryContentComponent.ctorParameters = () => [];
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
    NgxEmojCategoryContentComponent.prototype.emojiContainer;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.searchSet;
    /** @type {?} */
    NgxEmojCategoryContentComponent.prototype.recentEmosForSearch;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb29wLWVtb2ppLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0gsTUFBTSxFQUNULE1BQU0scUJBQXFCLENBQUM7QUE4RTdCLE1BQU0sT0FBTywrQkFBK0I7SUF5QnhDO1FBWlUsZ0JBQVcsR0FBRyxJQUFJLFlBQVksQ0FBQztRQUMvQixvQkFBZSxHQUFRLElBQUksWUFBWSxDQUFDO1FBQ3hDLG1CQUFjLEdBQVEsSUFBSSxZQUFZLENBQUM7UUFPakQsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQix3QkFBbUIsR0FBUSxFQUFFLENBQUM7UUFHMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLHdCQUF3QjtZQUN4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDOztnQkFDN0MsU0FBUyxHQUFHLEVBQUU7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3BDLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsRDtZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQzNCOztjQUNLLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7UUFFMUMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pELElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDM0MsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7WUFDTCxDQUFDLEVBQUMsQ0FBQztTQUVOO2FBQU07WUFDSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDekI7SUFDTCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxLQUFLO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDbEIsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUM7SUFDUCxDQUFDOzs7WUE1SUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQlg7eUJBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZDVjthQUNGOzs7OzsyQkFHSSxLQUFLOytCQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzRCQUNMLEtBQUs7eUNBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7a0NBQ0wsS0FBSzswQ0FDTCxLQUFLOzBCQUVMLE1BQU07OEJBQ04sTUFBTTs2QkFDTixNQUFNOzZCQUtOLFNBQVMsU0FBQyxnQkFBZ0I7Ozs7SUFsQjNCLHVEQUE4Qjs7SUFDOUIsMkRBQStCOztJQUMvQixzREFBNkI7O0lBQzdCLDBEQUE4Qjs7SUFDOUIsd0RBQStCOztJQUMvQixxRUFBNEM7O0lBQzVDLHlEQUE2Qjs7SUFDN0IsNERBQW1DOztJQUNuQyw4REFBcUM7O0lBQ3JDLHNFQUE2Qzs7SUFFN0Msc0RBQXlDOztJQUN6QywwREFBa0Q7O0lBQ2xELHlEQUFpRDs7SUFFakQsbURBQWtCOztJQUNsQixzREFBcUI7O0lBRXJCLHlEQUF3RDs7SUFFeEQsb0RBQW9COztJQUNwQiw4REFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gICAgRU1PSklTXHJcbn0gZnJvbSAnLi4vbWlzYy9lbW9qaXMuZGF0YSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWVtb2otY2F0ZWdvcnktY29udGVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGlucHV0IFtoaWRkZW5dPVwiYWN0aXZlSW5kZXggIT09IDBcIiAgdHlwZT1cInRleHRcIiAoa2V5dXApPVwic2VhcmNoKCRldmVudClcIiBwbGFjZWhvbGRlcj1cInt7IHNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0IH19XCJcclxuICAgICAgICBjbGFzcz1cIm5neC1lbW9qaS1zZWFyY2hcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogc2VhcmNoQm94U3R5bGUuRkdjb2xvcixcclxuICAgICAgICAnYmFja2dyb3VuZCc6IHNlYXJjaEJveFN0eWxlLkJHY29sb3IsXHJcbiAgICAgICAgJ2JvcmRlci1yYWRpdXMnOiBzZWFyY2hCb3hTdHlsZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgJ2JvcmRlci1jb2xvcic6IHNlYXJjaEJveFN0eWxlLmJvcmRlckNvbG9yfVwiLz5cclxuICAgIDxkaXYgY2xhc3M9XCJuZ3gtZW1vamktbm90LWZvdW5kXCIgKm5nSWY9XCJhY3RpdmVJbmRleCA9PT0gMCAmJiBub3RGb3VuZCA9PSB0cnVlXCJcclxuICAgIFtuZ1N0eWxlXT1cIntcclxuICAgICdjb2xvcic6IG1hcnRFbW9qaU5vdEZvdW5kRkdcclxuICAgIH1cIj5cclxuICAgIHt7IGVtb2ppTm90Rm91bmRUZXh0IH19XHJcbiAgICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibmd4LWVtb2ppLWNhdGVnb3J5LWNvbnRlbnRcIlxyXG4gICAgICAgKm5nSWY9XCIhbm90Rm91bmRcIlxyXG4gICAgICAgW25nU3R5bGVdPVwieydwYWRkaW5nJzogJzBweCA1cHggNXB4ICcgKyBtYXJ0RW1vamlDb250ZW50UGFkZGluZ0xlZnQsICdoZWlnaHQnOiBhY3RpdmVJbmRleCA9PT0gMD8gJzcwJSc6Jzg1JSd9XCJcclxuICAgICAgICNlbW9qaUNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1idG4tY29udGFpbmVyXCJcclxuICAgICAgICAqbmdGb3I9XCJsZXQgZW1vIG9mIGNhdGVnb3J5RW1vamlTZXRcIiBbbmdTdHlsZV09XCJ7J2hlaWdodCc6IGVtb2ppQnRuUGFkZGluZy55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBlbW9qaUJ0blBhZGRpbmcueCAgIH1cIj5cclxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInBpY2tFbW9qaShlbW8pXCIgY2xhc3M9XCJuZ3gtZW1vamktZW1vai1idG5cIlxyXG4gICAgICAgICAgW25nU3R5bGVdPVwieydmb250LXNpemUnOiBlbW9qaUZvbnRTaXplfVwiPlxyXG4gICAgICB7eyBlbW9bMF0gfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gIC5uZ3gtZW1vamktbm90LWZvdW5kXHJcbiAge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBtYXJnaW46IDYwcHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLm5neC1lbW9qaS1zZWFyY2hcclxuICB7XHJcbiAgICB3aWR0aDogODclO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0byAxMHB4IGF1dG87XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5neC1lbW9qaS1jYXRlZ29yeS1jb250ZW50XHJcbiAge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5lbW9qaS1idG4tY29udGFpbmVyXHJcbiAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5uZ3gtZW1vamktZW1vai1idG5cclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hFbW9qQ2F0ZWdvcnlDb250ZW50Q29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBjYXRlZ29yeU5hbWU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGNhdGVnb3J5RW1vamlTZXQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGFjdGl2ZUluZGV4OiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBlbW9qaUJ0blBhZGRpbmc6IGFueTtcclxuICAgIEBJbnB1dCgpIGVtb2ppRm9udFNpemU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzZWFyY2hCb3hTdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgZW1vamlOb3RGb3VuZFRleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIG1hcnRFbW9qaU5vdEZvdW5kRkc6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIG1hcnRFbW9qaUNvbnRlbnRQYWRkaW5nTGVmdDogc3RyaW5nO1xyXG5cclxuICAgIEBPdXRwdXQoKSBvbnBpY2tlbW9qaSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcbiAgICBAT3V0cHV0KCkgb25jb250ZW50c2Nyb2xsOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gICAgQE91dHB1dCgpIG9uY29udGVudFN3aXBlOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuICAgIG5vdEZvdW5kOiBib29sZWFuO1xyXG4gICAgaW5pdGlhbEVtb2o6IGJvb2xlYW47XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnZW1vamlDb250YWluZXInKSBlbW9qaUNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgICBzZWFyY2hTZXQ6IGFueSA9IFtdO1xyXG4gICAgcmVjZW50RW1vc0ZvclNlYXJjaDogYW55ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsRW1vaiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm90Rm91bmQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2goZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbml0aWFsRW1vaikge1xyXG4gICAgICAgICAgICAvLyBzYXZlIHRoZSByZWNlbnQgZW1vanNcclxuICAgICAgICAgICAgdGhpcy5yZWNlbnRFbW9zRm9yU2VhcmNoID0gdGhpcy5jYXRlZ29yeUVtb2ppU2V0O1xyXG4gICAgICAgICAgICBsZXQgc2VhcmNoU2V0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgRU1PSklTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hTZXQgPSBzZWFyY2hTZXQuY29uY2F0KEVNT0pJU1tpXS5lbW9qaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2V0ID0gc2VhcmNoU2V0O1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxFbW9qID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAocXVlcnkgJiYgcXVlcnkudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5RW1vamlTZXQgPSB0aGlzLnNlYXJjaFNldC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVsxXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlFbW9qaVNldCA9IHRoaXMucmVjZW50RW1vc0ZvclNlYXJjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcnlFbW9qaVNldC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwaWNrRW1vamkoZW1vamkpIHtcclxuICAgICAgICB0aGlzLm9ucGlja2Vtb2ppLmVtaXQoe1xyXG4gICAgICAgICAgICBlbW9qaTogZW1vamlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iXX0=