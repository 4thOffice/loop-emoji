/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { EMOJIS } from '../misc/emojis.data';
var NgxEmojCategoryContentComponent = /** @class */ (function () {
    function NgxEmojCategoryContentComponent(rd) {
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
     * @return {?}
     */
    NgxEmojCategoryContentComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // listen for scroll event
        this.rd.listen(this.emojiContainer.nativeElement, 'scroll', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.oncontentscroll.emit({
                scrollTop: _this.emojiContainer.nativeElement.scrollTop,
                scrollHeight: _this.emojiContainer.nativeElement.scrollHeight
            });
        }));
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
                    template: "\n  <input *ngIf=\"activeIndex === 0\"  type=\"text\" (keyup)=\"search($event)\" placeholder=\"{{ searchEmojiPlaceholderText }}\"\n  class=\"ngx-emoji-search\" [ngStyle]=\"{'color': searchBoxStyle.FGcolor,\n                                       'background': searchBoxStyle.BGcolor,\n                                       'border-radius': searchBoxStyle.borderRadius,\n                                       'border-color': searchBoxStyle.borderColor}\"/>\n                                       <div class=\"ngx-emoji-not-found\" *ngIf=\"activeIndex === 0 && notFound == true\"\n                                       [ngStyle]=\"{\n                                        'color': martEmojiNotFoundFG\n                                        }\">\n                                        {{ emojiNotFoundText }}\n                                       </div>\n  <div class=\"ngx-emoji-category-content\" [ngStyle]=\"{'padding': '0px 5px 5px 15px'}\"\n                                           #emojiContainer>\n\n      <div class=\"emoji-btn-container\"\n        *ngFor=\"let emo of categoryEmojiSet\" [ngStyle]=\"{'height': emojiBtnPadding.y,\n                                                         'width': emojiBtnPadding.x   }\">\n          <button (click)=\"pickEmoji(emo)\" class=\"ngx-emoji-emoj-btn\"\n          [ngStyle]=\"{'font-size': emojiFontSize}\">\n      {{ emo[0] }}\n    </button>\n      </div>\n  </div>\n  ",
                    styles: ["\n\n\n  .ngx-emoji-not-found\n  {\n    display: table;\n    margin: 60px auto;\n    font-size: 15px;\n    font-family: sans-serif;\n  }\n\n  .ngx-emoji-search\n  {\n    width: 87%;\n    display: table;\n    border: 1px solid;\n    padding: 5px 10px;\n    height: 30px;\n    font-family: sans-serif;\n    margin: 15px auto 10px auto;\n    outline: none;\n  }\n\n  .ngx-emoji-category-content\n  {\n    overflow-y: scroll;\n    height: 80%;\n    width: 105% !important;\n    display: flex;\n    flex-wrap: wrap;\n    text-align: left;\n    align-content: flex-start;\n    justify-content: flex-start;\n  }\n\n  .emoji-btn-container\n  {\n    display: flex;\n    overflow: hidden;\n  }\n  .ngx-emoji-emoj-btn\n  {\n    background: transparent;\n    margin: auto;\n    border: none;\n    outline: none;\n    cursor: pointer;\n  }\n  "]
                }] }
    ];
    /** @nocollapse */
    NgxEmojCategoryContentComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb29wLWVtb2ppLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsRUFDVCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE1BQU0sRUFDUCxNQUFNLHFCQUFxQixDQUFDO0FBRTdCO0lBc0dFLHlDQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQWJ2QixnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQy9CLG9CQUFlLEdBQVEsSUFBSSxZQUFZLENBQUM7UUFDeEMsbUJBQWMsR0FBUSxJQUFJLFlBQVksQ0FBQzs7UUFRakQsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQix3QkFBbUIsR0FBUSxFQUFFLENBQUM7UUFHNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFHRCxnREFBTTs7OztJQUFOLFVBQU8sQ0FBQztRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLHdCQUF3QjtZQUN4QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDOztnQkFDN0MsU0FBUyxHQUFHLEVBQUU7WUFDbEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3RDLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoRDtZQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3pCOztZQUNLLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUU7UUFFMUMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUNoRCxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQzdDLE9BQU8sSUFBSSxDQUFDO2lCQUNiO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FFSjthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztTQUNsRDtRQUNELElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7OztJQUdELHlEQUFlOzs7SUFBZjtRQUFBLGlCQVFDO1FBUEMsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLFFBQVE7Ozs7UUFBRSxVQUFDLENBQUM7WUFDNUQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCLFNBQVMsRUFBRSxLQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTO2dCQUN0RCxZQUFZLEVBQUUsS0FBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsWUFBWTthQUM3RCxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsbURBQVM7Ozs7SUFBVCxVQUFVLEtBQUs7UUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQXpKRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFLDI1Q0F3QlQ7NkJBQ1EsK3pCQWdEUjtpQkFDRjs7OztnQkFuRkMsU0FBUzs7OytCQXNGUixLQUFLO21DQUNMLEtBQUs7OEJBQ0wsS0FBSztrQ0FDTCxLQUFLO2dDQUNMLEtBQUs7NkNBQ0wsS0FBSztpQ0FDTCxLQUFLO29DQUNMLEtBQUs7c0NBQ0wsS0FBSzs4QkFFTCxNQUFNO2tDQUNOLE1BQU07aUNBQ04sTUFBTTtpQ0FLTixTQUFTLFNBQUMsZ0JBQWdCOztJQTBEN0Isc0NBQUM7Q0FBQSxBQTFKRCxJQTBKQztTQTdFWSwrQkFBK0I7OztJQUUxQyx1REFBOEI7O0lBQzlCLDJEQUErQjs7SUFDL0Isc0RBQTZCOztJQUM3QiwwREFBOEI7O0lBQzlCLHdEQUErQjs7SUFDL0IscUVBQTRDOztJQUM1Qyx5REFBNkI7O0lBQzdCLDREQUFtQzs7SUFDbkMsOERBQXFDOztJQUVyQyxzREFBeUM7O0lBQ3pDLDBEQUFrRDs7SUFDbEQseURBQWlEOztJQUVqRCxtREFBa0I7O0lBQ2xCLHNEQUFxQjs7SUFFckIseURBQXdEOztJQUd4RCxvREFBb0I7O0lBQ3BCLDhEQUE4Qjs7Ozs7SUFFbEIsNkNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBFbGVtZW50UmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBSZW5kZXJlcjIsXHJcbiAgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEVNT0pJU1xyXG59IGZyb20gJy4uL21pc2MvZW1vamlzLmRhdGEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZW1vai1jYXRlZ29yeS1jb250ZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxpbnB1dCAqbmdJZj1cImFjdGl2ZUluZGV4ID09PSAwXCIgIHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cInNlYXJjaCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJ7eyBzZWFyY2hFbW9qaVBsYWNlaG9sZGVyVGV4dCB9fVwiXHJcbiAgY2xhc3M9XCJuZ3gtZW1vamktc2VhcmNoXCIgW25nU3R5bGVdPVwieydjb2xvcic6IHNlYXJjaEJveFN0eWxlLkZHY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kJzogc2VhcmNoQm94U3R5bGUuQkdjb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1yYWRpdXMnOiBzZWFyY2hCb3hTdHlsZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdib3JkZXItY29sb3InOiBzZWFyY2hCb3hTdHlsZS5ib3JkZXJDb2xvcn1cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZ3gtZW1vamktbm90LWZvdW5kXCIgKm5nSWY9XCJhY3RpdmVJbmRleCA9PT0gMCAmJiBub3RGb3VuZCA9PSB0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogbWFydEVtb2ppTm90Rm91bmRGR1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZW1vamlOb3RGb3VuZFRleHQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm5neC1lbW9qaS1jYXRlZ29yeS1jb250ZW50XCIgW25nU3R5bGVdPVwieydwYWRkaW5nJzogJzBweCA1cHggNXB4IDE1cHgnfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZW1vamlDb250YWluZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktYnRuLWNvbnRhaW5lclwiXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IGVtbyBvZiBjYXRlZ29yeUVtb2ppU2V0XCIgW25nU3R5bGVdPVwieydoZWlnaHQnOiBlbW9qaUJ0blBhZGRpbmcueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZW1vamlCdG5QYWRkaW5nLnggICB9XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwaWNrRW1vamkoZW1vKVwiIGNsYXNzPVwibmd4LWVtb2ppLWVtb2otYnRuXCJcclxuICAgICAgICAgIFtuZ1N0eWxlXT1cInsnZm9udC1zaXplJzogZW1vamlGb250U2l6ZX1cIj5cclxuICAgICAge3sgZW1vWzBdIH19XHJcbiAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcblxyXG5cclxuICAubmd4LWVtb2ppLW5vdC1mb3VuZFxyXG4gIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5uZ3gtZW1vamktc2VhcmNoXHJcbiAge1xyXG4gICAgd2lkdGg6IDg3JTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAxNXB4IGF1dG8gMTBweCBhdXRvO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5uZ3gtZW1vamktY2F0ZWdvcnktY29udGVudFxyXG4gIHtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDEwNSUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5lbW9qaS1idG4tY29udGFpbmVyXHJcbiAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5uZ3gtZW1vamktZW1vai1idG5cclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hFbW9qQ2F0ZWdvcnlDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNhdGVnb3J5RW1vamlTZXQ6IGFueTtcclxuICBASW5wdXQoKSBhY3RpdmVJbmRleDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGVtb2ppQnRuUGFkZGluZzogYW55O1xyXG4gIEBJbnB1dCgpIGVtb2ppRm9udFNpemU6IHN0cmluZztcclxuICBASW5wdXQoKSBzZWFyY2hFbW9qaVBsYWNlaG9sZGVyVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlYXJjaEJveFN0eWxlOiBhbnk7XHJcbiAgQElucHV0KCkgZW1vamlOb3RGb3VuZFRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBtYXJ0RW1vamlOb3RGb3VuZEZHOiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSBvbnBpY2tlbW9qaSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcbiAgQE91dHB1dCgpIG9uY29udGVudHNjcm9sbDogYW55ID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICBAT3V0cHV0KCkgb25jb250ZW50U3dpcGU6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblxyXG4gIG5vdEZvdW5kOiBib29sZWFuO1xyXG4gIGluaXRpYWxFbW9qOiBib29sZWFuO1xyXG5cclxuICBAVmlld0NoaWxkKCdlbW9qaUNvbnRhaW5lcicpIGVtb2ppQ29udGFpbmVyOiBFbGVtZW50UmVmO1xyXG4gIC8vIEBWaWV3Q2hpbGQoJ3N3aXBlUGFuZScpIHN3aXBlUGFuZTogRWxlbWVudFJlZjtcclxuXHJcbiAgc2VhcmNoU2V0OiBhbnkgPSBbXTtcclxuICByZWNlbnRFbW9zRm9yU2VhcmNoOiBhbnkgPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZDogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLmluaXRpYWxFbW9qID0gZmFsc2U7XHJcbiAgICB0aGlzLm5vdEZvdW5kID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgc2VhcmNoKGUpIHtcclxuICAgIGlmICghdGhpcy5pbml0aWFsRW1vaikge1xyXG4gICAgICAvLyBzYXZlIHRoZSByZWNlbnQgZW1vanNcclxuICAgICAgdGhpcy5yZWNlbnRFbW9zRm9yU2VhcmNoID0gdGhpcy5jYXRlZ29yeUVtb2ppU2V0O1xyXG4gICAgICBsZXQgc2VhcmNoU2V0ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgRU1PSklTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc2VhcmNoU2V0ID0gc2VhcmNoU2V0LmNvbmNhdChFTU9KSVNbaV0uZW1vamlzKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlYXJjaFNldCA9IHNlYXJjaFNldDtcclxuICAgICAgdGhpcy5pbml0aWFsRW1vaiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBxdWVyeSA9IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yeUVtb2ppU2V0ID0gdGhpcy5zZWFyY2hTZXQuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtWzFdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeSkgPiAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNhdGVnb3J5RW1vamlTZXQgPSB0aGlzLnJlY2VudEVtb3NGb3JTZWFyY2g7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jYXRlZ29yeUVtb2ppU2V0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLm5vdEZvdW5kID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubm90Rm91bmQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAvLyBsaXN0ZW4gZm9yIHNjcm9sbCBldmVudFxyXG4gICAgdGhpcy5yZC5saXN0ZW4odGhpcy5lbW9qaUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJywgKGUpID0+IHtcclxuICAgICAgdGhpcy5vbmNvbnRlbnRzY3JvbGwuZW1pdCh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLmVtb2ppQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wLFxyXG4gICAgICAgIHNjcm9sbEhlaWdodDogdGhpcy5lbW9qaUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGlja0Vtb2ppKGVtb2ppKSB7XHJcbiAgICB0aGlzLm9ucGlja2Vtb2ppLmVtaXQoe1xyXG4gICAgICBlbW9qaTogZW1vamlcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=