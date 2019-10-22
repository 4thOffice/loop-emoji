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
        this.searchInput.nativeElement.value = '';
        this.initialEmoj = false;
        this.notFound = false;
        setTimeout((/**
         * @return {?}
         */
        function () {
            element.focus();
        }), 0);
    };
    NgxEmojCategoryContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-emoj-category-content',
                    template: "\n    <input [hidden]=\"activeIndex !== 0\"  type=\"text\" (keyup)=\"search($event)\" placeholder=\"{{ searchEmojiPlaceholderText }}\"\n        class=\"ngx-emoji-search\" [ngStyle]=\"{'color': searchBoxStyle.FGcolor,\n        'background': searchBoxStyle.BGcolor,\n        'border-radius': searchBoxStyle.borderRadius,\n        'border-color': searchBoxStyle.borderColor}\"\n        #searchInput/>\n    <div class=\"ngx-emoji-not-found\" *ngIf=\"activeIndex === 0 && notFound == true\"\n    [ngStyle]=\"{\n    'color': martEmojiNotFoundFG\n    }\">\n    {{ emojiNotFoundText }}\n    </div>\n  <div class=\"ngx-emoji-category-content\"\n       *ngIf=\"!notFound\"\n       [ngStyle]=\"{'padding': '0px 5px 5px ' + martEmojiContentPaddingLeft, 'height': activeIndex === 0? '70%':'85%'}\"\n       #emojiContainer>\n\n      <div class=\"emoji-btn-container\"\n        *ngFor=\"let emo of categoryEmojiSet\" [ngStyle]=\"{'height': emojiBtnPadding.y,\n                                                         'width': emojiBtnPadding.x   }\">\n          <button (click)=\"pickEmoji(emo)\" class=\"ngx-emoji-emoj-btn\"\n          [ngStyle]=\"{'font-size': emojiFontSize}\">\n      {{ emo[0] }}\n    </button>\n      </div>\n  </div>\n  ",
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
        emojiContainer: [{ type: ViewChild, args: ['emojiContainer',] }],
        searchInput: [{ type: ViewChild, args: ['searchInput',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb29wLWVtb2ppLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsRUFFVCxTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNILE1BQU0sRUFDVCxNQUFNLHFCQUFxQixDQUFDO0FBRTdCO0lBd0dJLHlDQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQWR2QixnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQy9CLG9CQUFlLEdBQVEsSUFBSSxZQUFZLENBQUM7UUFDeEMsbUJBQWMsR0FBUSxJQUFJLFlBQVksQ0FBQztRQVNqRCxjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUcxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQscURBQVc7OztJQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDOzs7OztJQUVELGdEQUFNOzs7O0lBQU4sVUFBTyxDQUFDO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsd0JBQXdCO1lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7O2dCQUM3QyxTQUFTLEdBQUcsRUFBRTtZQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdB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dCI6WyJpbXBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgSW5wdXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgICBFTU9KSVNcclxufSBmcm9tICcuLi9taXNjL2Vtb2ppcy5kYXRhJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICduZ3gtZW1vai1jYXRlZ29yeS1jb250ZW50JyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8aW5wdXQgW2hpZGRlbl09XCJhY3RpdmVJbmRleCAhPT0gMFwiICB0eXBlPVwidGV4dFwiIChrZXl1cCk9XCJzZWFyY2goJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwie3sgc2VhcmNoRW1vamlQbGFjZWhvbGRlclRleHQgfX1cIlxyXG4gICAgICAgIGNsYXNzPVwibmd4LWVtb2ppLXNlYXJjaFwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiBzZWFyY2hCb3hTdHlsZS5GR2NvbG9yLFxyXG4gICAgICAgICdiYWNrZ3JvdW5kJzogc2VhcmNoQm94U3R5bGUuQkdjb2xvcixcclxuICAgICAgICAnYm9yZGVyLXJhZGl1cyc6IHNlYXJjaEJveFN0eWxlLmJvcmRlclJhZGl1cyxcclxuICAgICAgICAnYm9yZGVyLWNvbG9yJzogc2VhcmNoQm94U3R5bGUuYm9yZGVyQ29sb3J9XCJcclxuICAgICAgICAjc2VhcmNoSW5wdXQvPlxyXG4gICAgPGRpdiBjbGFzcz1cIm5neC1lbW9qaS1ub3QtZm91bmRcIiAqbmdJZj1cImFjdGl2ZUluZGV4ID09PSAwICYmIG5vdEZvdW5kID09IHRydWVcIlxyXG4gICAgW25nU3R5bGVdPVwie1xyXG4gICAgJ2NvbG9yJzogbWFydEVtb2ppTm90Rm91bmRGR1xyXG4gICAgfVwiPlxyXG4gICAge3sgZW1vamlOb3RGb3VuZFRleHQgfX1cclxuICAgIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJuZ3gtZW1vamktY2F0ZWdvcnktY29udGVudFwiXHJcbiAgICAgICAqbmdJZj1cIiFub3RGb3VuZFwiXHJcbiAgICAgICBbbmdTdHlsZV09XCJ7J3BhZGRpbmcnOiAnMHB4IDVweCA1cHggJyArIG1hcnRFbW9qaUNvbnRlbnRQYWRkaW5nTGVmdCwgJ2hlaWdodCc6IGFjdGl2ZUluZGV4ID09PSAwPyAnNzAlJzonODUlJ31cIlxyXG4gICAgICAgI2Vtb2ppQ29udGFpbmVyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLWJ0bi1jb250YWluZXJcIlxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBlbW8gb2YgY2F0ZWdvcnlFbW9qaVNldFwiIFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogZW1vamlCdG5QYWRkaW5nLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IGVtb2ppQnRuUGFkZGluZy54ICAgfVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicGlja0Vtb2ppKGVtbylcIiBjbGFzcz1cIm5neC1lbW9qaS1lbW9qLWJ0blwiXHJcbiAgICAgICAgICBbbmdTdHlsZV09XCJ7J2ZvbnQtc2l6ZSc6IGVtb2ppRm9udFNpemV9XCI+XHJcbiAgICAgIHt7IGVtb1swXSB9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgLm5neC1lbW9qaS1ub3QtZm91bmRcclxuICB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5cclxuICAubmd4LWVtb2ppLXNlYXJjaFxyXG4gIHtcclxuICAgIHdpZHRoOiA4NyU7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogMTVweCBhdXRvIDEwcHggYXV0bztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubmd4LWVtb2ppLWNhdGVnb3J5LWNvbnRlbnRcclxuICB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLmVtb2ppLWJ0bi1jb250YWluZXJcclxuICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgLm5neC1lbW9qaS1lbW9qLWJ0blxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEVtb2pDYXRlZ29yeUNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG5cclxuICAgIEBJbnB1dCgpIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgY2F0ZWdvcnlFbW9qaVNldDogYW55O1xyXG4gICAgQElucHV0KCkgYWN0aXZlSW5kZXg6IG51bWJlcjtcclxuICAgIEBJbnB1dCgpIGVtb2ppQnRuUGFkZGluZzogYW55O1xyXG4gICAgQElucHV0KCkgZW1vamlGb250U2l6ZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgc2VhcmNoRW1vamlQbGFjZWhvbGRlclRleHQ6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHNlYXJjaEJveFN0eWxlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBlbW9qaU5vdEZvdW5kVGV4dDogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbWFydEVtb2ppTm90Rm91bmRGRzogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgbWFydEVtb2ppQ29udGVudFBhZGRpbmdMZWZ0OiBzdHJpbmc7XHJcblxyXG4gICAgQE91dHB1dCgpIG9ucGlja2Vtb2ppID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICAgIEBPdXRwdXQoKSBvbmNvbnRlbnRzY3JvbGw6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcbiAgICBAT3V0cHV0KCkgb25jb250ZW50U3dpcGU6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblxyXG4gICAgbm90Rm91bmQ6IGJvb2xlYW47XHJcbiAgICBpbml0aWFsRW1vajogYm9vbGVhbjtcclxuICAgIHNlYXJjaFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnZW1vamlDb250YWluZXInKSBlbW9qaUNvbnRhaW5lcjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ3NlYXJjaElucHV0Jykgc2VhcmNoSW5wdXQ6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgc2VhcmNoU2V0OiBhbnkgPSBbXTtcclxuICAgIHJlY2VudEVtb3NGb3JTZWFyY2g6IGFueSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmQ6IFJlbmRlcmVyMikge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbEVtb2ogPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vdEZvdW5kID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlSW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5mb2N1c1NlYXJjaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2goZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbml0aWFsRW1vaikge1xyXG4gICAgICAgICAgICAvLyBzYXZlIHRoZSByZWNlbnQgZW1vanNcclxuICAgICAgICAgICAgdGhpcy5yZWNlbnRFbW9zRm9yU2VhcmNoID0gdGhpcy5jYXRlZ29yeUVtb2ppU2V0O1xyXG4gICAgICAgICAgICBsZXQgc2VhcmNoU2V0ID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDwgRU1PSklTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hTZXQgPSBzZWFyY2hTZXQuY29uY2F0KEVNT0pJU1tpXS5lbW9qaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoU2V0ID0gc2VhcmNoU2V0O1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxFbW9qID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAocXVlcnkgJiYgcXVlcnkudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5RW1vamlTZXQgPSB0aGlzLnNlYXJjaFNldC5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVsxXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlFbW9qaVNldCA9IHRoaXMucmVjZW50RW1vc0ZvclNlYXJjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2F0ZWdvcnlFbW9qaVNldC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwaWNrRW1vamkoZW1vamkpIHtcclxuICAgICAgICB0aGlzLm9ucGlja2Vtb2ppLmVtaXQoe1xyXG4gICAgICAgICAgICBlbW9qaTogZW1vamlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvY3VzU2VhcmNoKCkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnJkLnNlbGVjdFJvb3RFbGVtZW50KCcubmd4LWVtb2ppLXNlYXJjaCcpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbEVtb2ogPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vdEZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcbn1cclxuIl19