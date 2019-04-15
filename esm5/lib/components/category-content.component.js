/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, } from '@angular/core';
import { EMOJIS } from '../misc/emojis.data';
var NgxEmojCategoryContentComponent = /** @class */ (function () {
    function NgxEmojCategoryContentComponent() {
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
    NgxEmojCategoryContentComponent.prototype.search = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.initialEmoj) {
            // save the recent emojs
            this.recentEmosForSearch = this.categoryEmojiSet;
            /** @type {?} */
            var searchSet = [];
            for (var i = 2; i < EMOJIS.length; i++) {
                searchSet = searchSet.concat(EMOJIS[i].emojis);
            }
            this.searchSet = searchSet;
            this.initialEmoj = true;
        }
        /** @type {?} */
        var query = e.target.value.toLowerCase();
        if (query && query.trim() !== '') {
            this.categoryEmojiSet = this.searchSet.filter((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
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
    };
    /**
     * @param {?} emoji
     * @return {?}
     */
    NgxEmojCategoryContentComponent.prototype.pickEmoji = /**
     * @param {?} emoji
     * @return {?}
     */
    function (emoji) {
        this.onpickemoji.emit({
            emoji: emoji
        });
    };
    NgxEmojCategoryContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-emoj-category-content',
                    template: "\n    <div class=\"ngx-emoji-not-found\" *ngIf=\"activeIndex === 0 && notFound == true\"\n    [ngStyle]=\"{\n    'color': martEmojiNotFoundFG\n    }\">\n    {{ emojiNotFoundText }}\n    </div>\n  <div class=\"ngx-emoji-category-content\"\n       [ngStyle]=\"{'padding': '0px 5px 5px ' + martEmojiContentPaddingLeft, 'height': activeIndex === 0? '70%':'85%'}\"\n       #emojiContainer>\n\n      <div class=\"emoji-btn-container\"\n        *ngFor=\"let emo of categoryEmojiSet\" [ngStyle]=\"{'height': emojiBtnPadding.y,\n                                                         'width': emojiBtnPadding.x   }\">\n          <button (click)=\"pickEmoji(emo)\" class=\"ngx-emoji-emoj-btn\"\n          [ngStyle]=\"{'font-size': emojiFontSize}\">\n      {{ emo[0] }}\n    </button>\n      </div>\n  </div>\n  ",
                    styles: ["\n  .ngx-emoji-not-found\n  {\n    display: table;\n    margin: 60px auto;\n    font-size: 15px;\n    font-family: sans-serif;\n  }\n\n  .ngx-emoji-search\n  {\n    width: 87%;\n    display: table;\n    border: 1px solid;\n    padding: 5px 10px;\n    height: 30px;\n    font-family: sans-serif;\n    margin: 15px auto 10px auto;\n    outline: none;\n  }\n\n  .ngx-emoji-category-content\n  {\n    overflow-y: scroll;\n    width: 100% !important;\n    display: flex;\n    flex-wrap: wrap;\n    text-align: left;\n    align-content: flex-start;\n    justify-content: flex-start;\n  }\n\n  .emoji-btn-container\n  {\n    display: flex;\n    overflow: hidden;\n  }\n  .ngx-emoji-emoj-btn\n  {\n    background: transparent;\n    margin: auto;\n    border: none;\n    outline: none;\n    cursor: pointer;\n  }\n  "]
                }] }
    ];
    /** @nocollapse */
    NgxEmojCategoryContentComponent.ctorParameters = function () { return []; };
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
    return NgxEmojCategoryContentComponent;
}());
export { NgxEmojCategoryContentComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb29wLWVtb2ppLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0gsTUFBTSxFQUNULE1BQU0scUJBQXFCLENBQUM7QUFFN0I7SUErRkk7UUFaVSxnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQy9CLG9CQUFlLEdBQVEsSUFBSSxZQUFZLENBQUM7UUFDeEMsbUJBQWMsR0FBUSxJQUFJLFlBQVksQ0FBQztRQU9qRCxjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUcxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELGdEQUFNOzs7O0lBQU4sVUFBTyxDQUFDO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsd0JBQXdCO1lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7O2dCQUM3QyxTQUFTLEdBQUcsRUFBRTtZQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDM0I7O1lBQ0ssS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtRQUUxQyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU07Ozs7WUFBQyxVQUFBLElBQUk7Z0JBQzlDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDM0MsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7WUFDTCxDQUFDLEVBQUMsQ0FBQztTQUVOO2FBQU07WUFDSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDekI7SUFDTCxDQUFDOzs7OztJQUVELG1EQUFTOzs7O0lBQVQsVUFBVSxLQUFLO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDbEIsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUM7SUFDUCxDQUFDOztnQkF0SUosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFFBQVEsRUFBRSxxeUJBb0JYOzZCQUNVLHl5QkE2Q1Y7aUJBQ0Y7Ozs7OytCQUdJLEtBQUs7bUNBQ0wsS0FBSzs4QkFDTCxLQUFLO2tDQUNMLEtBQUs7Z0NBQ0wsS0FBSzs2Q0FDTCxLQUFLO2lDQUNMLEtBQUs7b0NBQ0wsS0FBSztzQ0FDTCxLQUFLOzhDQUNMLEtBQUs7OEJBRUwsTUFBTTtrQ0FDTixNQUFNO2lDQUNOLE1BQU07aUNBS04sU0FBUyxTQUFDLGdCQUFnQjs7SUE2Qy9CLHNDQUFDO0NBQUEsQUF2SUQsSUF1SUM7U0FqRVksK0JBQStCOzs7SUFFeEMsdURBQThCOztJQUM5QiwyREFBK0I7O0lBQy9CLHNEQUE2Qjs7SUFDN0IsMERBQThCOztJQUM5Qix3REFBK0I7O0lBQy9CLHFFQUE0Qzs7SUFDNUMseURBQTZCOztJQUM3Qiw0REFBbUM7O0lBQ25DLDhEQUFxQzs7SUFDckMsc0VBQTZDOztJQUU3QyxzREFBeUM7O0lBQ3pDLDBEQUFrRDs7SUFDbEQseURBQWlEOztJQUVqRCxtREFBa0I7O0lBQ2xCLHNEQUFxQjs7SUFFckIseURBQXdEOztJQUV4RCxvREFBb0I7O0lBQ3BCLDhEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBJbnB1dCxcclxuICAgIE91dHB1dCxcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgICBFTU9KSVNcclxufSBmcm9tICcuLi9taXNjL2Vtb2ppcy5kYXRhJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZ3gtZW1vai1jYXRlZ29yeS1jb250ZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwibmd4LWVtb2ppLW5vdC1mb3VuZFwiICpuZ0lmPVwiYWN0aXZlSW5kZXggPT09IDAgJiYgbm90Rm91bmQgPT0gdHJ1ZVwiXHJcbiAgICBbbmdTdHlsZV09XCJ7XHJcbiAgICAnY29sb3InOiBtYXJ0RW1vamlOb3RGb3VuZEZHXHJcbiAgICB9XCI+XHJcbiAgICB7eyBlbW9qaU5vdEZvdW5kVGV4dCB9fVxyXG4gICAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm5neC1lbW9qaS1jYXRlZ29yeS1jb250ZW50XCJcclxuICAgICAgIFtuZ1N0eWxlXT1cInsncGFkZGluZyc6ICcwcHggNXB4IDVweCAnICsgbWFydEVtb2ppQ29udGVudFBhZGRpbmdMZWZ0LCAnaGVpZ2h0JzogYWN0aXZlSW5kZXggPT09IDA/ICc3MCUnOic4NSUnfVwiXHJcbiAgICAgICAjZW1vamlDb250YWluZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktYnRuLWNvbnRhaW5lclwiXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IGVtbyBvZiBjYXRlZ29yeUVtb2ppU2V0XCIgW25nU3R5bGVdPVwieydoZWlnaHQnOiBlbW9qaUJ0blBhZGRpbmcueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZW1vamlCdG5QYWRkaW5nLnggICB9XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwaWNrRW1vamkoZW1vKVwiIGNsYXNzPVwibmd4LWVtb2ppLWVtb2otYnRuXCJcclxuICAgICAgICAgIFtuZ1N0eWxlXT1cInsnZm9udC1zaXplJzogZW1vamlGb250U2l6ZX1cIj5cclxuICAgICAge3sgZW1vWzBdIH19XHJcbiAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICAgIHN0eWxlczogW2BcclxuICAubmd4LWVtb2ppLW5vdC1mb3VuZFxyXG4gIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5uZ3gtZW1vamktc2VhcmNoXHJcbiAge1xyXG4gICAgd2lkdGg6IDg3JTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG8gMTBweCBhdXRvO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5uZ3gtZW1vamktY2F0ZWdvcnktY29udGVudFxyXG4gIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuZW1vamktYnRuLWNvbnRhaW5lclxyXG4gIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAubmd4LWVtb2ppLWVtb2otYnRuXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RW1vakNhdGVnb3J5Q29udGVudENvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgY2F0ZWdvcnlOYW1lOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBjYXRlZ29yeUVtb2ppU2V0OiBhbnk7XHJcbiAgICBASW5wdXQoKSBhY3RpdmVJbmRleDogbnVtYmVyO1xyXG4gICAgQElucHV0KCkgZW1vamlCdG5QYWRkaW5nOiBhbnk7XHJcbiAgICBASW5wdXQoKSBlbW9qaUZvbnRTaXplOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBzZWFyY2hFbW9qaVBsYWNlaG9sZGVyVGV4dDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc2VhcmNoQm94U3R5bGU6IGFueTtcclxuICAgIEBJbnB1dCgpIGVtb2ppTm90Rm91bmRUZXh0OiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBtYXJ0RW1vamlOb3RGb3VuZEZHOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBtYXJ0RW1vamlDb250ZW50UGFkZGluZ0xlZnQ6IHN0cmluZztcclxuXHJcbiAgICBAT3V0cHV0KCkgb25waWNrZW1vamkgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gICAgQE91dHB1dCgpIG9uY29udGVudHNjcm9sbDogYW55ID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICAgIEBPdXRwdXQoKSBvbmNvbnRlbnRTd2lwZTogYW55ID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuXHJcbiAgICBub3RGb3VuZDogYm9vbGVhbjtcclxuICAgIGluaXRpYWxFbW9qOiBib29sZWFuO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2Vtb2ppQ29udGFpbmVyJykgZW1vamlDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgc2VhcmNoU2V0OiBhbnkgPSBbXTtcclxuICAgIHJlY2VudEVtb3NGb3JTZWFyY2g6IGFueSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbEVtb2ogPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vdEZvdW5kID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoKGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbEVtb2opIHtcclxuICAgICAgICAgICAgLy8gc2F2ZSB0aGUgcmVjZW50IGVtb2pzXHJcbiAgICAgICAgICAgIHRoaXMucmVjZW50RW1vc0ZvclNlYXJjaCA9IHRoaXMuY2F0ZWdvcnlFbW9qaVNldDtcclxuICAgICAgICAgICAgbGV0IHNlYXJjaFNldCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8IEVNT0pJUy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgc2VhcmNoU2V0ID0gc2VhcmNoU2V0LmNvbmNhdChFTU9KSVNbaV0uZW1vamlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFNldCA9IHNlYXJjaFNldDtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsRW1vaiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeUVtb2ppU2V0ID0gdGhpcy5zZWFyY2hTZXQuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1bMV0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5KSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5RW1vamlTZXQgPSB0aGlzLnJlY2VudEVtb3NGb3JTZWFyY2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNhdGVnb3J5RW1vamlTZXQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90Rm91bmQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90Rm91bmQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGlja0Vtb2ppKGVtb2ppKSB7XHJcbiAgICAgICAgdGhpcy5vbnBpY2tlbW9qaS5lbWl0KHtcclxuICAgICAgICAgICAgZW1vamk6IGVtb2ppXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19