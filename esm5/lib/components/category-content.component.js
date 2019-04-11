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
                    template: "\n  <input [hidden]=\"activeIndex !== 0\"  type=\"text\" (keyup)=\"search($event)\" placeholder=\"{{ searchEmojiPlaceholderText }}\"\n  class=\"ngx-emoji-search\" [ngStyle]=\"{'color': searchBoxStyle.FGcolor,\n                                       'background': searchBoxStyle.BGcolor,\n                                       'border-radius': searchBoxStyle.borderRadius,\n                                       'border-color': searchBoxStyle.borderColor}\"/>\n                                       <div class=\"ngx-emoji-not-found\" *ngIf=\"activeIndex === 0 && notFound == true\"\n                                       [ngStyle]=\"{\n                                        'color': martEmojiNotFoundFG\n                                        }\">\n                                        {{ emojiNotFoundText }}\n                                       </div>\n  <div class=\"ngx-emoji-category-content\"\n       [ngStyle]=\"{'padding': '0px 5px 5px 5%', 'height': activeIndex === 0? '70%':'85%'}\"\n       #emojiContainer>\n\n      <div class=\"emoji-btn-container\"\n        *ngFor=\"let emo of categoryEmojiSet\" [ngStyle]=\"{'height': emojiBtnPadding.y,\n                                                         'width': emojiBtnPadding.x   }\">\n          <button (click)=\"pickEmoji(emo)\" class=\"ngx-emoji-emoj-btn\"\n          [ngStyle]=\"{'font-size': emojiFontSize}\">\n      {{ emo[0] }}\n    </button>\n      </div>\n  </div>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb29wLWVtb2ppLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsRUFDVCxTQUFTLEVBR1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE1BQU0sRUFDUCxNQUFNLHFCQUFxQixDQUFDO0FBRTdCO0lBbUdFLHlDQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQVp2QixnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQy9CLG9CQUFlLEdBQVEsSUFBSSxZQUFZLENBQUM7UUFDeEMsbUJBQWMsR0FBUSxJQUFJLFlBQVksQ0FBQztRQU9qRCxjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUc1QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQscURBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7OztJQUVELGdEQUFNOzs7O0lBQU4sVUFBTyxDQUFDO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsd0JBQXdCO1lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7O2dCQUM3QyxTQUFTLEdBQUcsRUFBRTtZQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdB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O0lBQ2xELHlEQUFpRDs7SUFFakQsbURBQWtCOztJQUNsQixzREFBcUI7O0lBRXJCLHlEQUF3RDs7SUFFeEQsb0RBQW9COztJQUNwQiw4REFBOEI7Ozs7O0lBRWxCLDZDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgRWxlbWVudFJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgT25DaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgRU1PSklTXHJcbn0gZnJvbSAnLi4vbWlzYy9lbW9qaXMuZGF0YSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1lbW9qLWNhdGVnb3J5LWNvbnRlbnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGlucHV0IFtoaWRkZW5dPVwiYWN0aXZlSW5kZXggIT09IDBcIiAgdHlwZT1cInRleHRcIiAoa2V5dXApPVwic2VhcmNoKCRldmVudClcIiBwbGFjZWhvbGRlcj1cInt7IHNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0IH19XCJcclxuICBjbGFzcz1cIm5neC1lbW9qaS1zZWFyY2hcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogc2VhcmNoQm94U3R5bGUuRkdjb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQnOiBzZWFyY2hCb3hTdHlsZS5CR2NvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYm9yZGVyLXJhZGl1cyc6IHNlYXJjaEJveFN0eWxlLmJvcmRlclJhZGl1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcic6IHNlYXJjaEJveFN0eWxlLmJvcmRlckNvbG9yfVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5neC1lbW9qaS1ub3QtZm91bmRcIiAqbmdJZj1cImFjdGl2ZUluZGV4ID09PSAwICYmIG5vdEZvdW5kID09IHRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiBtYXJ0RW1vamlOb3RGb3VuZEZHXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlbW9qaU5vdEZvdW5kVGV4dCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwibmd4LWVtb2ppLWNhdGVnb3J5LWNvbnRlbnRcIlxyXG4gICAgICAgW25nU3R5bGVdPVwieydwYWRkaW5nJzogJzBweCA1cHggNXB4IDUlJywgJ2hlaWdodCc6IGFjdGl2ZUluZGV4ID09PSAwPyAnNzAlJzonODUlJ31cIlxyXG4gICAgICAgI2Vtb2ppQ29udGFpbmVyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImVtb2ppLWJ0bi1jb250YWluZXJcIlxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBlbW8gb2YgY2F0ZWdvcnlFbW9qaVNldFwiIFtuZ1N0eWxlXT1cInsnaGVpZ2h0JzogZW1vamlCdG5QYWRkaW5nLnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IGVtb2ppQnRuUGFkZGluZy54ICAgfVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicGlja0Vtb2ppKGVtbylcIiBjbGFzcz1cIm5neC1lbW9qaS1lbW9qLWJ0blwiXHJcbiAgICAgICAgICBbbmdTdHlsZV09XCJ7J2ZvbnQtc2l6ZSc6IGVtb2ppRm9udFNpemV9XCI+XHJcbiAgICAgIHt7IGVtb1swXSB9fVxyXG4gICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIC5uZ3gtZW1vamktbm90LWZvdW5kXHJcbiAge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBtYXJnaW46IDYwcHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgLm5neC1lbW9qaS1zZWFyY2hcclxuICB7XHJcbiAgICB3aWR0aDogODclO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDE1cHggYXV0byAxMHB4IGF1dG87XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5neC1lbW9qaS1jYXRlZ29yeS1jb250ZW50XHJcbiAge1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB9XHJcblxyXG4gIC5lbW9qaS1idG4tY29udGFpbmVyXHJcbiAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5uZ3gtZW1vamktZW1vai1idG5cclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hFbW9qQ2F0ZWdvcnlDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCkgY2F0ZWdvcnlOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2F0ZWdvcnlFbW9qaVNldDogYW55O1xyXG4gIEBJbnB1dCgpIGFjdGl2ZUluZGV4OiBudW1iZXI7XHJcbiAgQElucHV0KCkgZW1vamlCdG5QYWRkaW5nOiBhbnk7XHJcbiAgQElucHV0KCkgZW1vamlGb250U2l6ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNlYXJjaEVtb2ppUGxhY2Vob2xkZXJUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2VhcmNoQm94U3R5bGU6IGFueTtcclxuICBASW5wdXQoKSBlbW9qaU5vdEZvdW5kVGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1hcnRFbW9qaU5vdEZvdW5kRkc6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIG9ucGlja2Vtb2ppID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuICBAT3V0cHV0KCkgb25jb250ZW50c2Nyb2xsOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG4gIEBPdXRwdXQoKSBvbmNvbnRlbnRTd2lwZTogYW55ID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuXHJcbiAgbm90Rm91bmQ6IGJvb2xlYW47XHJcbiAgaW5pdGlhbEVtb2o6IGJvb2xlYW47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2Vtb2ppQ29udGFpbmVyJykgZW1vamlDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHNlYXJjaFNldDogYW55ID0gW107XHJcbiAgcmVjZW50RW1vc0ZvclNlYXJjaDogYW55ID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmQ6IFJlbmRlcmVyMikge1xyXG4gICAgdGhpcy5pbml0aWFsRW1vaiA9IGZhbHNlO1xyXG4gICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAodGhpcy5hY3RpdmVJbmRleCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuZm9jdXNTZWFyY2goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaChlKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5pdGlhbEVtb2opIHtcclxuICAgICAgLy8gc2F2ZSB0aGUgcmVjZW50IGVtb2pzXHJcbiAgICAgIHRoaXMucmVjZW50RW1vc0ZvclNlYXJjaCA9IHRoaXMuY2F0ZWdvcnlFbW9qaVNldDtcclxuICAgICAgbGV0IHNlYXJjaFNldCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMjsgaSA8IEVNT0pJUy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNlYXJjaFNldCA9IHNlYXJjaFNldC5jb25jYXQoRU1PSklTW2ldLmVtb2ppcyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWFyY2hTZXQgPSBzZWFyY2hTZXQ7XHJcbiAgICAgIHRoaXMuaW5pdGlhbEVtb2ogPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcXVlcnkgPSBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIGlmIChxdWVyeSAmJiBxdWVyeS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcnlFbW9qaVNldCA9IHRoaXMuc2VhcmNoU2V0LmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICBpZiAoaXRlbVsxXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkpID4gLTEpIHtcclxuICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jYXRlZ29yeUVtb2ppU2V0ID0gdGhpcy5yZWNlbnRFbW9zRm9yU2VhcmNoO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY2F0ZWdvcnlFbW9qaVNldC5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5ub3RGb3VuZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm5vdEZvdW5kID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAvLyBsaXN0ZW4gZm9yIHNjcm9sbCBldmVudFxyXG4gICAgdGhpcy5yZC5saXN0ZW4odGhpcy5lbW9qaUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJywgKGUpID0+IHtcclxuICAgICAgdGhpcy5vbmNvbnRlbnRzY3JvbGwuZW1pdCh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiB0aGlzLmVtb2ppQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG9wLFxyXG4gICAgICAgIHNjcm9sbEhlaWdodDogdGhpcy5lbW9qaUNvbnRhaW5lci5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcGlja0Vtb2ppKGVtb2ppKSB7XHJcbiAgICB0aGlzLm9ucGlja2Vtb2ppLmVtaXQoe1xyXG4gICAgICBlbW9qaTogZW1vamlcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb2N1c1NlYXJjaCgpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnJkLnNlbGVjdFJvb3RFbGVtZW50KCcubmd4LWVtb2ppLXNlYXJjaCcpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBlbGVtZW50LmZvY3VzKCksIDApO1xyXG4gIH1cclxufVxyXG4iXX0=