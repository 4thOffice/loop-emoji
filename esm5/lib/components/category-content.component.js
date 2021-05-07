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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sb29wLWVtb2ppLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2F0ZWdvcnktY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsRUFFVCxTQUFTLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNILE1BQU0sRUFDVCxNQUFNLHFCQUFxQixDQUFDO0FBRTdCO0lBd0dJLHlDQUFvQixFQUFhO1FBQWIsT0FBRSxHQUFGLEVBQUUsQ0FBVztRQWR2QixnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFDO1FBQy9CLG9CQUFlLEdBQVEsSUFBSSxZQUFZLENBQUM7UUFDeEMsbUJBQWMsR0FBUSxJQUFJLFlBQVksQ0FBQztRQVNqRCxjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUcxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQscURBQVc7OztJQUFYO1FBQ0ksSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDOzs7OztJQUVELGdEQUFNOzs7O0lBQU4sVUFBTyxDQUFDO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbkIsd0JBQXdCO1lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7O2dCQUM3QyxTQUFTLEdBQUcsRUFBRTtZQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdB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dCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgVmlld0NoaWxkLFxuICAgIE9uQ2hhbmdlcyxcbiAgICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICAgIEVNT0pJU1xufSBmcm9tICcuLi9taXNjL2Vtb2ppcy5kYXRhJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtZW1vai1jYXRlZ29yeS1jb250ZW50JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxpbnB1dCBbaGlkZGVuXT1cImFjdGl2ZUluZGV4ICE9PSAwXCIgIHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cInNlYXJjaCgkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJ7eyBzZWFyY2hFbW9qaVBsYWNlaG9sZGVyVGV4dCB9fVwiXG4gICAgICAgIGNsYXNzPVwibmd4LWVtb2ppLXNlYXJjaFwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiBzZWFyY2hCb3hTdHlsZS5GR2NvbG9yLFxuICAgICAgICAnYmFja2dyb3VuZCc6IHNlYXJjaEJveFN0eWxlLkJHY29sb3IsXG4gICAgICAgICdib3JkZXItcmFkaXVzJzogc2VhcmNoQm94U3R5bGUuYm9yZGVyUmFkaXVzLFxuICAgICAgICAnYm9yZGVyLWNvbG9yJzogc2VhcmNoQm94U3R5bGUuYm9yZGVyQ29sb3J9XCJcbiAgICAgICAgI3NlYXJjaElucHV0Lz5cbiAgICA8ZGl2IGNsYXNzPVwibmd4LWVtb2ppLW5vdC1mb3VuZFwiICpuZ0lmPVwiYWN0aXZlSW5kZXggPT09IDAgJiYgbm90Rm91bmQgPT0gdHJ1ZVwiXG4gICAgW25nU3R5bGVdPVwie1xuICAgICdjb2xvcic6IG1hcnRFbW9qaU5vdEZvdW5kRkdcbiAgICB9XCI+XG4gICAge3sgZW1vamlOb3RGb3VuZFRleHQgfX1cbiAgICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm5neC1lbW9qaS1jYXRlZ29yeS1jb250ZW50XCJcbiAgICAgICAqbmdJZj1cIiFub3RGb3VuZFwiXG4gICAgICAgW25nU3R5bGVdPVwieydwYWRkaW5nJzogJzBweCA1cHggNXB4ICcgKyBtYXJ0RW1vamlDb250ZW50UGFkZGluZ0xlZnQsICdoZWlnaHQnOiBhY3RpdmVJbmRleCA9PT0gMD8gJzcwJSc6Jzg1JSd9XCJcbiAgICAgICAjZW1vamlDb250YWluZXI+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJlbW9qaS1idG4tY29udGFpbmVyXCJcbiAgICAgICAgKm5nRm9yPVwibGV0IGVtbyBvZiBjYXRlZ29yeUVtb2ppU2V0XCIgW25nU3R5bGVdPVwieydoZWlnaHQnOiBlbW9qaUJ0blBhZGRpbmcueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IGVtb2ppQnRuUGFkZGluZy54ICAgfVwiPlxuICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cInBpY2tFbW9qaShlbW8pXCIgY2xhc3M9XCJuZ3gtZW1vamktZW1vai1idG5cIlxuICAgICAgICAgIFtuZ1N0eWxlXT1cInsnZm9udC1zaXplJzogZW1vamlGb250U2l6ZX1cIj5cbiAgICAgIHt7IGVtb1swXSB9fVxuICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuICBgLFxuICAgIHN0eWxlczogW2BcbiAgLm5neC1lbW9qaS1ub3QtZm91bmRcbiAge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIG1hcmdpbjogNjBweCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC5uZ3gtZW1vamktc2VhcmNoXG4gIHtcbiAgICB3aWR0aDogODclO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDE1cHggYXV0byAxMHB4IGF1dG87XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIC5uZ3gtZW1vamktY2F0ZWdvcnktY29udGVudFxuICB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgfVxuXG4gIC5lbW9qaS1idG4tY29udGFpbmVyXG4gIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLm5neC1lbW9qaS1lbW9qLWJ0blxuICB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hFbW9qQ2F0ZWdvcnlDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGNhdGVnb3J5RW1vamlTZXQ6IGFueTtcbiAgICBASW5wdXQoKSBhY3RpdmVJbmRleDogbnVtYmVyO1xuICAgIEBJbnB1dCgpIGVtb2ppQnRuUGFkZGluZzogYW55O1xuICAgIEBJbnB1dCgpIGVtb2ppRm9udFNpemU6IHN0cmluZztcbiAgICBASW5wdXQoKSBzZWFyY2hFbW9qaVBsYWNlaG9sZGVyVGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHNlYXJjaEJveFN0eWxlOiBhbnk7XG4gICAgQElucHV0KCkgZW1vamlOb3RGb3VuZFRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBtYXJ0RW1vamlOb3RGb3VuZEZHOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbWFydEVtb2ppQ29udGVudFBhZGRpbmdMZWZ0OiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KCkgb25waWNrZW1vamkgPSBuZXcgRXZlbnRFbWl0dGVyO1xuICAgIEBPdXRwdXQoKSBvbmNvbnRlbnRzY3JvbGw6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXI7XG4gICAgQE91dHB1dCgpIG9uY29udGVudFN3aXBlOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyO1xuXG4gICAgbm90Rm91bmQ6IGJvb2xlYW47XG4gICAgaW5pdGlhbEVtb2o6IGJvb2xlYW47XG4gICAgc2VhcmNoVmFsdWU6IHN0cmluZztcblxuICAgIEBWaWV3Q2hpbGQoJ2Vtb2ppQ29udGFpbmVyJykgZW1vamlDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZCgnc2VhcmNoSW5wdXQnKSBzZWFyY2hJbnB1dDogRWxlbWVudFJlZjtcblxuICAgIHNlYXJjaFNldDogYW55ID0gW107XG4gICAgcmVjZW50RW1vc0ZvclNlYXJjaDogYW55ID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJkOiBSZW5kZXJlcjIpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsRW1vaiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vdEZvdW5kID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzU2VhcmNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWFyY2goZSkge1xuICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbEVtb2opIHtcbiAgICAgICAgICAgIC8vIHNhdmUgdGhlIHJlY2VudCBlbW9qc1xuICAgICAgICAgICAgdGhpcy5yZWNlbnRFbW9zRm9yU2VhcmNoID0gdGhpcy5jYXRlZ29yeUVtb2ppU2V0O1xuICAgICAgICAgICAgbGV0IHNlYXJjaFNldCA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPCBFTU9KSVMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hTZXQgPSBzZWFyY2hTZXQuY29uY2F0KEVNT0pJU1tpXS5lbW9qaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWFyY2hTZXQgPSBzZWFyY2hTZXQ7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxFbW9qID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBxdWVyeSA9IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKHF1ZXJ5ICYmIHF1ZXJ5LnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlFbW9qaVNldCA9IHRoaXMuc2VhcmNoU2V0LmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbVsxXS50b0xvd2VyQ2FzZSgpLmluZGV4T2YocXVlcnkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlFbW9qaVNldCA9IHRoaXMucmVjZW50RW1vc0ZvclNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jYXRlZ29yeUVtb2ppU2V0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5ub3RGb3VuZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vdEZvdW5kID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwaWNrRW1vamkoZW1vamkpIHtcbiAgICAgICAgdGhpcy5vbnBpY2tlbW9qaS5lbWl0KHtcbiAgICAgICAgICAgIGVtb2ppOiBlbW9qaVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZvY3VzU2VhcmNoKCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5yZC5zZWxlY3RSb290RWxlbWVudCgnLm5neC1lbW9qaS1zZWFyY2gnKTtcbiAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuaW5pdGlhbEVtb2ogPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub3RGb3VuZCA9IGZhbHNlO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG59XG4iXX0=