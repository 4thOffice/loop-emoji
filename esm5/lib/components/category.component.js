/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var NgxEmojCategoryComponent = /** @class */ (function () {
    function NgxEmojCategoryComponent(sanitizer, cdRef) {
        this.sanitizer = sanitizer;
        this.cdRef = cdRef;
        this.onselect = new EventEmitter;
    }
    /**
     * @return {?}
     */
    NgxEmojCategoryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setInnerHtml();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxEmojCategoryComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.active.previousValue !== changes.active.currentValue) {
            this.setInnerHtml();
            this.cdRef.markForCheck();
        }
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NgxEmojCategoryComponent.prototype.selectCategory = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        $event.stopPropagation();
        this.onselect.emit({ name: this.categoryName, icon: this.categoryIcon });
    };
    /**
     * @private
     * @return {?}
     */
    NgxEmojCategoryComponent.prototype.setInnerHtml = /**
     * @private
     * @return {?}
     */
    function () {
        this.safeSvgComponent = this.sanitizer.bypassSecurityTrustHtml(this.categoryIcon(((this.active) ? this.martCategoryColorActive : this.martCategoryColor), this.martCategoryFontSize, this.martCategoryFontSize));
    };
    NgxEmojCategoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-emoj-category',
                    template: "\n    <button (click)=\"selectCategory($event)\" class=\"ngx-emoji-category-btn\"\n    [ngStyle]=\"{'color': categoryIconColor,\n                'border-width': activeIndicatorHeight,\n                'border-color': (active) ? activeIndicatorColor : 'transparent'}\"\n                [innerHTML]=safeSvgComponent>\n    </button>\n  ",
                    styles: ["\n  .ngx-emoji-category-btn\n  {\n    background: transparent;\n    padding: 15px 10% 10px 10%;\n    border: none;\n    outline: none;\n    border-bottom: 2px solid transparent;\n  }\n  "]
                }] }
    ];
    /** @nocollapse */
    NgxEmojCategoryComponent.ctorParameters = function () { return [
        { type: DomSanitizer },
        { type: ChangeDetectorRef }
    ]; };
    NgxEmojCategoryComponent.propDecorators = {
        categoryIcon: [{ type: Input }],
        categoryName: [{ type: Input }],
        categoryIconColor: [{ type: Input }],
        activeIndicatorColor: [{ type: Input }],
        activeIndicatorHeight: [{ type: Input }],
        martCategoryFontSize: [{ type: Input }],
        martCategoryColor: [{ type: Input }],
        martCategoryColorActive: [{ type: Input }],
        active: [{ type: Input }],
        onselect: [{ type: Output }]
    };
    return NgxEmojCategoryComponent;
}());
export { NgxEmojCategoryComponent };
if (false) {
    /** @type {?} */
    NgxEmojCategoryComponent.prototype.categoryIcon;
    /** @type {?} */
    NgxEmojCategoryComponent.prototype.categoryName;
    /** @type {?} */
    NgxEmojCategoryComponent.prototype.categoryIconColor;
    /** @type {?} */
    NgxEmojCategoryComponent.prototype.activeIndicatorColor;
    /** @type {?} */
    NgxEmojCategoryComponent.prototype.activeIndicatorHeight;
    /** @type {?} */
    NgxEmojCategoryComponent.prototype.martCategoryFontSize;
    /** @type {?} */
    NgxEmojCategoryComponent.prototype.martCategoryColor;
    /** @type {?} */
    NgxEmojCategoryComponent.prototype.martCategoryColorActive;
    /** @type {?} */
    NgxEmojCategoryComponent.prototype.active;
    /** @type {?} */
    NgxEmojCategoryComponent.prototype.onselect;
    /** @type {?} */
    NgxEmojCategoryComponent.prototype.safeSvgComponent;
    /** @type {?} */
    NgxEmojCategoryComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    NgxEmojCategoryComponent.prototype.cdRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9vcC1lbW9qaS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhdGVnb3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNkMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckksT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FO0lBcUNFLGtDQUNXLFNBQXVCLEVBQ3RCLEtBQXdCO1FBRHpCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFOMUIsYUFBUSxHQUFHLElBQUksWUFBWSxDQUFDO0lBT3RDLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCw4Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM5RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7O0lBRUQsaURBQWM7Ozs7SUFBZCxVQUFlLE1BQU07UUFDbkIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7O0lBRU8sK0NBQVk7Ozs7SUFBcEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FDMUQsSUFBSSxDQUFDLFlBQVksQ0FDYixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUN2RSxJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBaEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsK1VBT1Q7NkJBQ1EsNExBU1I7aUJBQ0Y7Ozs7Z0JBckJRLFlBQVk7Z0JBRHVFLGlCQUFpQjs7OytCQXlCMUcsS0FBSzsrQkFDTCxLQUFLO29DQUNMLEtBQUs7dUNBQ0wsS0FBSzt3Q0FDTCxLQUFLO3VDQUNMLEtBQUs7b0NBQ0wsS0FBSzswQ0FDTCxLQUFLO3lCQUNMLEtBQUs7MkJBRUwsTUFBTTs7SUFnQ1QsK0JBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQTVDWSx3QkFBd0I7OztJQUVuQyxnREFBMkI7O0lBQzNCLGdEQUE4Qjs7SUFDOUIscURBQW1DOztJQUNuQyx3REFBc0M7O0lBQ3RDLHlEQUF1Qzs7SUFDdkMsd0RBQXNDOztJQUN0QyxxREFBbUM7O0lBQ25DLDJEQUF5Qzs7SUFDekMsMENBQXlCOztJQUV6Qiw0Q0FBc0M7O0lBRXRDLG9EQUEyQjs7SUFHdkIsNkNBQThCOzs7OztJQUM5Qix5Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkNoYW5nZXMsIERvQ2hlY2ssIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZW1vai1jYXRlZ29yeScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwic2VsZWN0Q2F0ZWdvcnkoJGV2ZW50KVwiIGNsYXNzPVwibmd4LWVtb2ppLWNhdGVnb3J5LWJ0blwiXG4gICAgW25nU3R5bGVdPVwieydjb2xvcic6IGNhdGVnb3J5SWNvbkNvbG9yLFxuICAgICAgICAgICAgICAgICdib3JkZXItd2lkdGgnOiBhY3RpdmVJbmRpY2F0b3JIZWlnaHQsXG4gICAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcic6IChhY3RpdmUpID8gYWN0aXZlSW5kaWNhdG9yQ29sb3IgOiAndHJhbnNwYXJlbnQnfVwiXG4gICAgICAgICAgICAgICAgW2lubmVySFRNTF09c2FmZVN2Z0NvbXBvbmVudD5cbiAgICA8L2J1dHRvbj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAubmd4LWVtb2ppLWNhdGVnb3J5LWJ0blxuICB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMTVweCAxMCUgMTBweCAxMCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEVtb2pDYXRlZ29yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBjYXRlZ29yeUljb246IGFueTtcbiAgQElucHV0KCkgY2F0ZWdvcnlOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhdGVnb3J5SWNvbkNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFjdGl2ZUluZGljYXRvckNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGFjdGl2ZUluZGljYXRvckhlaWdodDogc3RyaW5nO1xuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlGb250U2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZTogc3RyaW5nO1xuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XG5cbiAgQE91dHB1dCgpIG9uc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjtcblxuICBzYWZlU3ZnQ29tcG9uZW50OiBTYWZlSHRtbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldElubmVySHRtbCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzLmFjdGl2ZS5wcmV2aW91c1ZhbHVlICE9PSBjaGFuZ2VzLmFjdGl2ZS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRJbm5lckh0bWwoKTtcbiAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RDYXRlZ29yeSgkZXZlbnQpIHtcbiAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5vbnNlbGVjdC5lbWl0KHtuYW1lOiB0aGlzLmNhdGVnb3J5TmFtZSwgaWNvbjogdGhpcy5jYXRlZ29yeUljb259KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SW5uZXJIdG1sKCkge1xuICAgIHRoaXMuc2FmZVN2Z0NvbXBvbmVudCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFxuICAgICAgICB0aGlzLmNhdGVnb3J5SWNvbihcbiAgICAgICAgICAgICgodGhpcy5hY3RpdmUpID8gdGhpcy5tYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZSA6IHRoaXMubWFydENhdGVnb3J5Q29sb3IpLFxuICAgICAgICAgICAgdGhpcy5tYXJ0Q2F0ZWdvcnlGb250U2l6ZSxcbiAgICAgICAgICAgIHRoaXMubWFydENhdGVnb3J5Rm9udFNpemUpKTtcbiAgfVxufVxuIl19