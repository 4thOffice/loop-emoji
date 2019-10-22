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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb29wLWVtb2ppLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsRUFFVCxTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNILE1BQU0sRUFDVCxNQUFNLHFCQUFxQixDQUFDO0FBK0U3QixNQUFNLE9BQU8sK0JBQStCOzs7O0lBMkJ4QyxZQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQWR2QixnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQy9CLG9CQUFlLEdBQVEsSUFBSSxZQUFZLENBQUM7UUFDeEMsbUJBQWMsR0FBUSxJQUFJLFlBQVksQ0FBQztRQVNqRCxjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUcxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25CLHdCQUF3QjtZQUN4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDOztnQkFDN0MsU0FBUyxHQUFHLEVBQUU7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FB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NkNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIElucHV0LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIFZpZXdDaGlsZCxcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gICAgRU1PSklTXHJcbn0gZnJvbSAnLi4vbWlzYy9lbW9qaXMuZGF0YSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmd4LWVtb2otY2F0ZWdvcnktY29udGVudCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGlucHV0IFtoaWRkZW5dPVwiYWN0aXZlSW5kZXggIT09IDBcIiAgdHlwZT1cInRleHRcIiAoa2V5dXApPVwic2VhcmNoKCRldmVudClcIiBwbGFjZWhvbGRlcj1cInt7IHNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0IH19XCJcclxuICAgICAgICBjbGFzcz1cIm5neC1lbW9qaS1zZWFyY2hcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogc2VhcmNoQm94U3R5bGUuRkdjb2xvcixcclxuICAgICAgICAnYmFja2dyb3VuZCc6IHNlYXJjaEJveFN0eWxlLkJHY29sb3IsXHJcbiAgICAgICAgJ2JvcmRlci1yYWRpdXMnOiBzZWFyY2hCb3hTdHlsZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgJ2JvcmRlci1jb2xvcic6IHNlYXJjaEJveFN0eWxlLmJvcmRlckNvbG9yfVwiXHJcbiAgICAgICAgI3NlYXJjaElucHV0Lz5cclxuICAgIDxkaXYgY2xhc3M9XCJuZ3gtZW1vamktbm90LWZvdW5kXCIgKm5nSWY9XCJhY3RpdmVJbmRleCA9PT0gMCAmJiBub3RGb3VuZCA9PSB0cnVlXCJcclxuICAgIFtuZ1N0eWxlXT1cIntcclxuICAgICdjb2xvcic6IG1hcnRFbW9qaU5vdEZvdW5kRkdcclxuICAgIH1cIj5cclxuICAgIHt7IGVtb2ppTm90Rm91bmRUZXh0IH19XHJcbiAgICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibmd4LWVtb2ppLWNhdGVnb3J5LWNvbnRlbnRcIlxyXG4gICAgICAgKm5nSWY9XCIhbm90Rm91bmRcIlxyXG4gICAgICAgW25nU3R5bGVdPVwieydwYWRkaW5nJzogJzBweCA1cHggNXB4ICcgKyBtYXJ0RW1vamlDb250ZW50UGFkZGluZ0xlZnQsICdoZWlnaHQnOiBhY3RpdmVJbmRleCA9PT0gMD8gJzcwJSc6Jzg1JSd9XCJcclxuICAgICAgICNlbW9qaUNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1idG4tY29udGFpbmVyXCJcclxuICAgICAgICAqbmdGb3I9XCJsZXQgZW1vIG9mIGNhdGVnb3J5RW1vamlTZXRcIiBbbmdTdHlsZV09XCJ7J2hlaWdodCc6IGVtb2ppQnRuUGFkZGluZy55LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBlbW9qaUJ0blBhZGRpbmcueCAgIH1cIj5cclxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInBpY2tFbW9qaShlbW8pXCIgY2xhc3M9XCJuZ3gtZW1vamktZW1vai1idG5cIlxyXG4gICAgICAgICAgW25nU3R5bGVdPVwieydmb250LXNpemUnOiBlbW9qaUZvbnRTaXplfVwiPlxyXG4gICAgICB7eyBlbW9bMF0gfX1cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gICAgc3R5bGVzOiBbYFxyXG4gIC5uZ3gtZW1vamktbm90LWZvdW5kXHJcbiAge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBtYXJnaW46IDYwcHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLm5neC1lbW9qaS1zZWFyY2hcclxuICB7XHJcbiAgICB3aWR0aDogODclO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0byAxMHB4IGF1dG87XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5neC1lbW9qaS1jYXRlZ29yeS1jb250ZW50XHJcbiAge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5lbW9qaS1idG4tY29udGFpbmVyXHJcbiAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5uZ3gtZW1vamktZW1vai1idG5cclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hFbW9qQ2F0ZWdvcnlDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuXHJcbiAgICBASW5wdXQoKSBjYXRlZ29yeU5hbWU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIGNhdGVnb3J5RW1vamlTZXQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGFjdGl2ZUluZGV4OiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBlbW9qaUJ0blBhZGRpbmc6IGFueTtcclxuICAgIEBJbnB1dCgpIGVtb2ppRm9udFNpemU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzZWFyY2hCb3hTdHlsZTogYW55O1xyXG4gICAgQElucHV0KCkgZW1vamlOb3RGb3VuZFRleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIG1hcnRFbW9qaU5vdEZvdW5kRkc6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIG1hcnRFbW9qaUNvbnRlbnRQYWRkaW5nTGVmdDogc3RyaW5nO1xyXG5cclxuICAgIEBPdXRwdXQoKSBvbnBpY2tlbW9qaSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcbiAgICBAT3V0cHV0KCkgb25jb250ZW50c2Nyb2xsOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gICAgQE91dHB1dCgpIG9uY29udGVudFN3aXBlOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuICAgIG5vdEZvdW5kOiBib29sZWFuO1xyXG4gICAgaW5pdGlhbEVtb2o6IGJvb2xlYW47XHJcbiAgICBzZWFyY2hWYWx1ZTogc3RyaW5nO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2Vtb2ppQ29udGFpbmVyJykgZW1vamlDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdzZWFyY2hJbnB1dCcpIHNlYXJjaElucHV0OiBFbGVtZW50UmVmO1xyXG5cclxuICAgIHNlYXJjaFNldDogYW55ID0gW107XHJcbiAgICByZWNlbnRFbW9zRm9yU2VhcmNoOiBhbnkgPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJkOiBSZW5kZXJlcjIpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxFbW9qID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9jdXNTZWFyY2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoKGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbEVtb2opIHtcclxuICAgICAgICAgICAgLy8gc2F2ZSB0aGUgcmVjZW50IGVtb2pzXHJcbiAgICAgICAgICAgIHRoaXMucmVjZW50RW1vc0ZvclNlYXJjaCA9IHRoaXMuY2F0ZWdvcnlFbW9qaVNldDtcclxuICAgICAgICAgICAgbGV0IHNlYXJjaFNldCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8IEVNT0pJUy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoU2V0ID0gc2VhcmNoU2V0LmNvbmNhdChFTU9KSVNbaV0uZW1vamlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNldCA9IHNlYXJjaFNldDtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsRW1vaiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeUVtb2ppU2V0ID0gdGhpcy5zZWFyY2hTZXQuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1bMV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5KSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5RW1vamlTZXQgPSB0aGlzLnJlY2VudEVtb3NGb3JTZWFyY2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3J5RW1vamlTZXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90Rm91bmQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90Rm91bmQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGlja0Vtb2ppKGVtb2ppKSB7XHJcbiAgICAgICAgdGhpcy5vbnBpY2tlbW9qaS5lbWl0KHtcclxuICAgICAgICAgICAgZW1vamk6IGVtb2ppXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb2N1c1NlYXJjaCgpIHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5yZC5zZWxlY3RSb290RWxlbWVudCgnLm5neC1lbW9qaS1zZWFyY2gnKTtcclxuICAgICAgICB0aGlzLnNlYXJjaElucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLmluaXRpYWxFbW9qID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==