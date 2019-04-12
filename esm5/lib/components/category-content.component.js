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
        this.searchSet = [];
        this.recentEmosForSearch = [];
        this.initialEmoj = false;
        this.notFound = false;
    }
    /**
     * @return {?}
     */
    NgxEmojCategoryContentComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.activeIndex === 0) {
            this.focusSearch();
        }
    };
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
    /**
     * @private
     * @return {?}
     */
    NgxEmojCategoryContentComponent.prototype.focusSearch = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.rd.selectRootElement('.ngx-emoji-search');
        setTimeout((/**
         * @return {?}
         */
        function () { return element.focus(); }), 0);
    };
    NgxEmojCategoryContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-emoj-category-content',
                    template: "\n  <input [hidden]=\"activeIndex !== 0\"  type=\"text\" (keyup)=\"search($event)\" placeholder=\"{{ searchEmojiPlaceholderText }}\"\n  class=\"ngx-emoji-search\" [ngStyle]=\"{'color': searchBoxStyle.FGcolor,\n                                       'background': searchBoxStyle.BGcolor,\n                                       'border-radius': searchBoxStyle.borderRadius,\n                                       'border-color': searchBoxStyle.borderColor}\"/>\n                                       <div class=\"ngx-emoji-not-found\" *ngIf=\"activeIndex === 0 && notFound == true\"\n                                       [ngStyle]=\"{\n                                        'color': martEmojiNotFoundFG\n                                        }\">\n                                        {{ emojiNotFoundText }}\n                                       </div>\n  <div class=\"ngx-emoji-category-content\"\n       [ngStyle]=\"{'padding': '0px 5px 5px ' + martEmojiContentPaddingLeft, 'height': activeIndex === 0? '70%':'85%'}\"\n       #emojiContainer>\n\n      <div class=\"emoji-btn-container\"\n        *ngFor=\"let emo of categoryEmojiSet\" [ngStyle]=\"{'height': emojiBtnPadding.y,\n                                                         'width': emojiBtnPadding.x   }\">\n          <button (click)=\"pickEmoji(emo)\" class=\"ngx-emoji-emoj-btn\"\n          [ngStyle]=\"{'font-size': emojiFontSize}\">\n      {{ emo[0] }}\n    </button>\n      </div>\n  </div>\n  ",
                    styles: ["\n  .ngx-emoji-not-found\n  {\n    display: table;\n    margin: 60px auto;\n    font-size: 15px;\n    font-family: sans-serif;\n  }\n\n  .ngx-emoji-search\n  {\n    width: 87%;\n    display: table;\n    border: 1px solid;\n    padding: 5px 10px;\n    height: 30px;\n    font-family: sans-serif;\n    margin: 15px auto 10px auto;\n    outline: none;\n  }\n\n  .ngx-emoji-category-content\n  {\n    overflow-y: scroll;\n    width: 100% !important;\n    display: flex;\n    flex-wrap: wrap;\n    text-align: left;\n    align-content: flex-start;\n    justify-content: flex-start;\n  }\n\n  .emoji-btn-container\n  {\n    display: flex;\n    overflow: hidden;\n  }\n  .ngx-emoji-emoj-btn\n  {\n    background: transparent;\n    margin: auto;\n    border: none;\n    outline: none;\n    cursor: pointer;\n  }\n  "]
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
    /**
     * @type {?}
     * @private
     */
    NgxEmojCategoryContentComponent.prototype.rd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb29wLWVtb2ppLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsRUFDVCxTQUFTLEVBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE1BQU0sRUFDUCxNQUFNLHFCQUFxQixDQUFDO0FBRTdCO0lBb0dFLHlDQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQVp2QixnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQy9CLG9CQUFlLEdBQVEsSUFBSSxZQUFZLENBQUM7UUFDeEMsbUJBQWMsR0FBUSxJQUFJLFlBQVksQ0FBQztRQU9qRCxjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUc1QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQscURBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7OztJQUVELGdEQUFNOzs7O0lBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsd0JBQXdCO1lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7O2dCQUM3QyxTQUFTLEdBQUcsRUFBRTtZQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdB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RTdDLHNEQUF5Qzs7SUFDekMsMERBQWtEOztJQUNsRCx5REFBaUQ7O0lBRWpELG1EQUFrQjs7SUFDbEIsc0RBQXFCOztJQUVyQix5REFBd0Q7O0lBRXhELG9EQUFvQjs7SUFDcEIsOERBQThCOzs7OztJQUVsQiw2Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFJlbmRlcmVyMixcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIE9uQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEVNT0pJU1xyXG59IGZyb20gJy4uL21pc2MvZW1vamlzLmRhdGEnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZW1vai1jYXRlZ29yeS1jb250ZW50JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxpbnB1dCBbaGlkZGVuXT1cImFjdGl2ZUluZGV4ICE9PSAwXCIgIHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cInNlYXJjaCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJ7eyBzZWFyY2hFbW9qaVBsYWNlaG9sZGVyVGV4dCB9fVwiXHJcbiAgY2xhc3M9XCJuZ3gtZW1vamktc2VhcmNoXCIgW25nU3R5bGVdPVwieydjb2xvcic6IHNlYXJjaEJveFN0eWxlLkZHY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kJzogc2VhcmNoQm94U3R5bGUuQkdjb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1yYWRpdXMnOiBzZWFyY2hCb3hTdHlsZS5ib3JkZXJSYWRpdXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdib3JkZXItY29sb3InOiBzZWFyY2hCb3hTdHlsZS5ib3JkZXJDb2xvcn1cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuZ3gtZW1vamktbm90LWZvdW5kXCIgKm5nSWY9XCJhY3RpdmVJbmRleCA9PT0gMCAmJiBub3RGb3VuZCA9PSB0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogbWFydEVtb2ppTm90Rm91bmRGR1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZW1vamlOb3RGb3VuZFRleHQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cIm5neC1lbW9qaS1jYXRlZ29yeS1jb250ZW50XCJcclxuICAgICAgIFtuZ1N0eWxlXT1cInsncGFkZGluZyc6ICcwcHggNXB4IDVweCAnICsgbWFydEVtb2ppQ29udGVudFBhZGRpbmdMZWZ0LCAnaGVpZ2h0JzogYWN0aXZlSW5kZXggPT09IDA/ICc3MCUnOic4NSUnfVwiXHJcbiAgICAgICAjZW1vamlDb250YWluZXI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZW1vamktYnRuLWNvbnRhaW5lclwiXHJcbiAgICAgICAgKm5nRm9yPVwibGV0IGVtbyBvZiBjYXRlZ29yeUVtb2ppU2V0XCIgW25nU3R5bGVdPVwieydoZWlnaHQnOiBlbW9qaUJ0blBhZGRpbmcueSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZW1vamlCdG5QYWRkaW5nLnggICB9XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJwaWNrRW1vamkoZW1vKVwiIGNsYXNzPVwibmd4LWVtb2ppLWVtb2otYnRuXCJcclxuICAgICAgICAgIFtuZ1N0eWxlXT1cInsnZm9udC1zaXplJzogZW1vamlGb250U2l6ZX1cIj5cclxuICAgICAge3sgZW1vWzBdIH19XHJcbiAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgLm5neC1lbW9qaS1ub3QtZm91bmRcclxuICB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAubmd4LWVtb2ppLXNlYXJjaFxyXG4gIHtcclxuICAgIHdpZHRoOiA4NyU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvIDEwcHggYXV0bztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubmd4LWVtb2ppLWNhdGVnb3J5LWNvbnRlbnRcclxuICB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLmVtb2ppLWJ0bi1jb250YWluZXJcclxuICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLm5neC1lbW9qaS1lbW9qLWJ0blxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEVtb2pDYXRlZ29yeUNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBjYXRlZ29yeU5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBjYXRlZ29yeUVtb2ppU2V0OiBhbnk7XHJcbiAgQElucHV0KCkgYWN0aXZlSW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBlbW9qaUJ0blBhZGRpbmc6IGFueTtcclxuICBASW5wdXQoKSBlbW9qaUZvbnRTaXplOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VhcmNoRW1vamlQbGFjZWhvbGRlclRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBzZWFyY2hCb3hTdHlsZTogYW55O1xyXG4gIEBJbnB1dCgpIGVtb2ppTm90Rm91bmRUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWFydEVtb2ppTm90Rm91bmRGRzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1hcnRFbW9qaUNvbnRlbnRQYWRkaW5nTGVmdDogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgb25waWNrZW1vamkgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gIEBPdXRwdXQoKSBvbmNvbnRlbnRzY3JvbGw6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcbiAgQE91dHB1dCgpIG9uY29udGVudFN3aXBlOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuICBub3RGb3VuZDogYm9vbGVhbjtcclxuICBpbml0aWFsRW1vajogYm9vbGVhbjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnZW1vamlDb250YWluZXInKSBlbW9qaUNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuXHJcbiAgc2VhcmNoU2V0OiBhbnkgPSBbXTtcclxuICByZWNlbnRFbW9zRm9yU2VhcmNoOiBhbnkgPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZDogUmVuZGVyZXIyKSB7XHJcbiAgICB0aGlzLmluaXRpYWxFbW9qID0gZmFsc2U7XHJcbiAgICB0aGlzLm5vdEZvdW5kID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c1NlYXJjaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VhcmNoKGUpIHtcclxuICAgIGlmICghdGhpcy5pbml0aWFsRW1vaikge1xyXG4gICAgICAvLyBzYXZlIHRoZSByZWNlbnQgZW1vanNcclxuICAgICAgdGhpcy5yZWNlbnRFbW9zRm9yU2VhcmNoID0gdGhpcy5jYXRlZ29yeUVtb2ppU2V0O1xyXG4gICAgICBsZXQgc2VhcmNoU2V0ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgRU1PSklTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc2VhcmNoU2V0ID0gc2VhcmNoU2V0LmNvbmNhdChFTU9KSVNbaV0uZW1vamlzKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlYXJjaFNldCA9IHNlYXJjaFNldDtcclxuICAgICAgdGhpcy5pbml0aWFsRW1vaiA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBxdWVyeSA9IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yeUVtb2ppU2V0ID0gdGhpcy5zZWFyY2hTZXQuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChpdGVtWzFdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeSkgPiAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmNhdGVnb3J5RW1vamlTZXQgPSB0aGlzLnJlY2VudEVtb3NGb3JTZWFyY2g7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jYXRlZ29yeUVtb2ppU2V0Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLm5vdEZvdW5kID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubm90Rm91bmQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vIGxpc3RlbiBmb3Igc2Nyb2xsIGV2ZW50XHJcbiAgICB0aGlzLnJkLmxpc3Rlbih0aGlzLmVtb2ppQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQsICdzY3JvbGwnLCAoZSkgPT4ge1xyXG4gICAgICB0aGlzLm9uY29udGVudHNjcm9sbC5lbWl0KHtcclxuICAgICAgICBzY3JvbGxUb3A6IHRoaXMuZW1vamlDb250YWluZXIubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AsXHJcbiAgICAgICAgc2Nyb2xsSGVpZ2h0OiB0aGlzLmVtb2ppQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwaWNrRW1vamkoZW1vamkpIHtcclxuICAgIHRoaXMub25waWNrZW1vamkuZW1pdCh7XHJcbiAgICAgIGVtb2ppOiBlbW9qaVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvY3VzU2VhcmNoKCkge1xyXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMucmQuc2VsZWN0Um9vdEVsZW1lbnQoJy5uZ3gtZW1vamktc2VhcmNoJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IGVsZW1lbnQuZm9jdXMoKSwgMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==