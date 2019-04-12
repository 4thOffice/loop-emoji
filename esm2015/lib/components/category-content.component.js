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
    /**
     * @type {?}
     * @private
     */
    NgxEmojCategoryContentComponent.prototype.rd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb29wLWVtb2ppLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsRUFDVCxTQUFTLEVBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE1BQU0sRUFDUCxNQUFNLHFCQUFxQixDQUFDO0FBNkU3QixNQUFNLE9BQU8sK0JBQStCOzs7O0lBeUIxQyxZQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQVp2QixnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQy9CLG9CQUFlLEdBQVEsSUFBSSxZQUFZLENBQUM7UUFDeEMsbUJBQWMsR0FBUSxJQUFJLFlBQVksQ0FBQztRQU9qRCxjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUc1QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLHdCQUF3QjtZQUN4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDOztnQkFDN0MsU0FBUyxHQUFHLEVBQUU7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FB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c0RBQXlDOztJQUN6QywwREFBa0Q7O0lBQ2xELHlEQUFpRDs7SUFFakQsbURBQWtCOztJQUNsQixzREFBcUI7O0lBRXJCLHlEQUF3RDs7SUFFeEQsb0RBQW9COztJQUNwQiw4REFBOEI7Ozs7O0lBRWxCLDZDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgRWxlbWVudFJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgT25DaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgRU1PSklTXHJcbn0gZnJvbSAnLi4vbWlzYy9lbW9qaXMuZGF0YSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1lbW9qLWNhdGVnb3J5LWNvbnRlbnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGlucHV0IFtoaWRkZW5dPVwiYWN0aXZlSW5kZXggIT09IDBcIiAgdHlwZT1cInRleHRcIiAoa2V5dXApPVwic2VhcmNoKCRldmVudClcIiBwbGFjZWhvbGRlcj1cInt7IHNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0IH19XCJcclxuICBjbGFzcz1cIm5neC1lbW9qaS1zZWFyY2hcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogc2VhcmNoQm94U3R5bGUuRkdjb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQnOiBzZWFyY2hCb3hTdHlsZS5CR2NvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYm9yZGVyLXJhZGl1cyc6IHNlYXJjaEJveFN0eWxlLmJvcmRlclJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcic6IHNlYXJjaEJveFN0eWxlLmJvcmRlckNvbG9yfVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5neC1lbW9qaS1ub3QtZm91bmRcIiAqbmdJZj1cImFjdGl2ZUluZGV4ID09PSAwICYmIG5vdEZvdW5kID09IHRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiBtYXJ0RW1vamlOb3RGb3VuZEZHXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlbW9qaU5vdEZvdW5kVGV4dCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibmd4LWVtb2ppLWNhdGVnb3J5LWNvbnRlbnRcIlxyXG4gICAgICAgW25nU3R5bGVdPVwieydwYWRkaW5nJzogJzBweCA1cHggNXB4ICcgKyBtYXJ0RW1vamlDb250ZW50UGFkZGluZ0xlZnQsICdoZWlnaHQnOiBhY3RpdmVJbmRleCA9PT0gMD8gJzcwJSc6Jzg1JSd9XCJcclxuICAgICAgICNlbW9qaUNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1idG4tY29udGFpbmVyXCJcclxuICAgICAgICAqbmdGb3I9XCJsZXQgZW1vIG9mIGNhdGVnb3J5RW1vamlTZXRcIiBbbmdTdHlsZV09XCJ7J2hlaWdodCc6IGVtb2ppQnRuUGFkZGluZy55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBlbW9qaUJ0blBhZGRpbmcueCAgIH1cIj5cclxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInBpY2tFbW9qaShlbW8pXCIgY2xhc3M9XCJuZ3gtZW1vamktZW1vai1idG5cIlxyXG4gICAgICAgICAgW25nU3R5bGVdPVwieydmb250LXNpemUnOiBlbW9qaUZvbnRTaXplfVwiPlxyXG4gICAgICB7eyBlbW9bMF0gfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAubmd4LWVtb2ppLW5vdC1mb3VuZFxyXG4gIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5uZ3gtZW1vamktc2VhcmNoXHJcbiAge1xyXG4gICAgd2lkdGg6IDg3JTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG8gMTBweCBhdXRvO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5uZ3gtZW1vamktY2F0ZWdvcnktY29udGVudFxyXG4gIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuZW1vamktYnRuLWNvbnRhaW5lclxyXG4gIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAubmd4LWVtb2ppLWVtb2otYnRuXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RW1vakNhdGVnb3J5Q29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNhdGVnb3J5RW1vamlTZXQ6IGFueTtcclxuICBASW5wdXQoKSBhY3RpdmVJbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGVtb2ppQnRuUGFkZGluZzogYW55O1xyXG4gIEBJbnB1dCgpIGVtb2ppRm9udFNpemU6IHN0cmluZztcclxuICBASW5wdXQoKSBzZWFyY2hFbW9qaVBsYWNlaG9sZGVyVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlYXJjaEJveFN0eWxlOiBhbnk7XHJcbiAgQElucHV0KCkgZW1vamlOb3RGb3VuZFRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBtYXJ0RW1vamlOb3RGb3VuZEZHOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWFydEVtb2ppQ29udGVudFBhZGRpbmdMZWZ0OiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBvbnBpY2tlbW9qaSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcbiAgQE91dHB1dCgpIG9uY29udGVudHNjcm9sbDogYW55ID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICBAT3V0cHV0KCkgb25jb250ZW50U3dpcGU6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblxyXG4gIG5vdEZvdW5kOiBib29sZWFuO1xyXG4gIGluaXRpYWxFbW9qOiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKCdlbW9qaUNvbnRhaW5lcicpIGVtb2ppQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBzZWFyY2hTZXQ6IGFueSA9IFtdO1xyXG4gIHJlY2VudEVtb3NGb3JTZWFyY2g6IGFueSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJkOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMuaW5pdGlhbEVtb2ogPSBmYWxzZTtcclxuICAgIHRoaXMubm90Rm91bmQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggPT09IDApIHtcclxuICAgICAgICB0aGlzLmZvY3VzU2VhcmNoKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWFyY2goZSkge1xyXG4gICAgaWYgKCF0aGlzLmluaXRpYWxFbW9qKSB7XHJcbiAgICAgIC8vIHNhdmUgdGhlIHJlY2VudCBlbW9qc1xyXG4gICAgICB0aGlzLnJlY2VudEVtb3NGb3JTZWFyY2ggPSB0aGlzLmNhdGVnb3J5RW1vamlTZXQ7XHJcbiAgICAgIGxldCBzZWFyY2hTZXQgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCBFTU9KSVMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzZWFyY2hTZXQgPSBzZWFyY2hTZXQuY29uY2F0KEVNT0pJU1tpXS5lbW9qaXMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VhcmNoU2V0ID0gc2VhcmNoU2V0O1xyXG4gICAgICB0aGlzLmluaXRpYWxFbW9qID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHF1ZXJ5ID0gZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBpZiAocXVlcnkgJiYgcXVlcnkudHJpbSgpICE9PSAnJykge1xyXG4gICAgICB0aGlzLmNhdGVnb3J5RW1vamlTZXQgPSB0aGlzLnNlYXJjaFNldC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW1bMV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5KSA+IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcnlFbW9qaVNldCA9IHRoaXMucmVjZW50RW1vc0ZvclNlYXJjaDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNhdGVnb3J5RW1vamlTZXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMubm90Rm91bmQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLy8gbGlzdGVuIGZvciBzY3JvbGwgZXZlbnRcclxuICAgIHRoaXMucmQubGlzdGVuKHRoaXMuZW1vamlDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3Njcm9sbCcsIChlKSA9PiB7XHJcbiAgICAgIHRoaXMub25jb250ZW50c2Nyb2xsLmVtaXQoe1xyXG4gICAgICAgIHNjcm9sbFRvcDogdGhpcy5lbW9qaUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCxcclxuICAgICAgICBzY3JvbGxIZWlnaHQ6IHRoaXMuZW1vamlDb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHRcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHBpY2tFbW9qaShlbW9qaSkge1xyXG4gICAgdGhpcy5vbnBpY2tlbW9qaS5lbWl0KHtcclxuICAgICAgZW1vamk6IGVtb2ppXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9jdXNTZWFyY2goKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5yZC5zZWxlY3RSb290RWxlbWVudCgnLm5neC1lbW9qaS1zZWFyY2gnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gZWxlbWVudC5mb2N1cygpLCAwKTtcclxuICB9XHJcbn1cclxuIl19