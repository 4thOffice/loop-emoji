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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9vcC1lbW9qaS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhdGVnb3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNkMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckksT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FO0lBcUNFLGtDQUNXLFNBQXVCLEVBQ3RCLEtBQXdCO1FBRHpCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFDdEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFOMUIsYUFBUSxHQUFHLElBQUksWUFBWSxDQUFDO0lBT3RDLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCw4Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM5RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7O0lBRUQsaURBQWM7Ozs7SUFBZCxVQUFlLE1BQU07UUFDbkIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Ozs7O0lBRU8sK0NBQVk7Ozs7SUFBcEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FDMUQsSUFBSSxDQUFDLFlBQVksQ0FDYixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUN2RSxJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Z0JBaEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixRQUFRLEVBQUUsK1VBT1Q7NkJBQ1EsNExBU1I7aUJBQ0Y7Ozs7Z0JBckJRLFlBQVk7Z0JBRHVFLGlCQUFpQjs7OytCQXlCMUcsS0FBSzsrQkFDTCxLQUFLO29DQUNMLEtBQUs7dUNBQ0wsS0FBSzt3Q0FDTCxLQUFLO3VDQUNMLEtBQUs7b0NBQ0wsS0FBSzswQ0FDTCxLQUFLO3lCQUNMLEtBQUs7MkJBRUwsTUFBTTs7SUFnQ1QsK0JBQUM7Q0FBQSxBQWpFRCxJQWlFQztTQTVDWSx3QkFBd0I7OztJQUVuQyxnREFBMkI7O0lBQzNCLGdEQUE4Qjs7SUFDOUIscURBQW1DOztJQUNuQyx3REFBc0M7O0lBQ3RDLHlEQUF1Qzs7SUFDdkMsd0RBQXNDOztJQUN0QyxxREFBbUM7O0lBQ25DLDJEQUF5Qzs7SUFDekMsMENBQXlCOztJQUV6Qiw0Q0FBc0M7O0lBRXRDLG9EQUEyQjs7SUFHdkIsNkNBQThCOzs7OztJQUM5Qix5Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkNoYW5nZXMsIERvQ2hlY2ssIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZW1vai1jYXRlZ29yeScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxidXR0b24gKGNsaWNrKT1cInNlbGVjdENhdGVnb3J5KCRldmVudClcIiBjbGFzcz1cIm5neC1lbW9qaS1jYXRlZ29yeS1idG5cIlxyXG4gICAgW25nU3R5bGVdPVwieydjb2xvcic6IGNhdGVnb3J5SWNvbkNvbG9yLFxyXG4gICAgICAgICAgICAgICAgJ2JvcmRlci13aWR0aCc6IGFjdGl2ZUluZGljYXRvckhlaWdodCxcclxuICAgICAgICAgICAgICAgICdib3JkZXItY29sb3InOiAoYWN0aXZlKSA/IGFjdGl2ZUluZGljYXRvckNvbG9yIDogJ3RyYW5zcGFyZW50J31cIlxyXG4gICAgICAgICAgICAgICAgW2lubmVySFRNTF09c2FmZVN2Z0NvbXBvbmVudD5cclxuICAgIDwvYnV0dG9uPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gIC5uZ3gtZW1vamktY2F0ZWdvcnktYnRuXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwJSAxMHB4IDEwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hFbW9qQ2F0ZWdvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIGNhdGVnb3J5SWNvbjogYW55O1xyXG4gIEBJbnB1dCgpIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNhdGVnb3J5SWNvbkNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWN0aXZlSW5kaWNhdG9yQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBhY3RpdmVJbmRpY2F0b3JIZWlnaHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlGb250U2l6ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1hcnRDYXRlZ29yeUNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWFydENhdGVnb3J5Q29sb3JBY3RpdmU6IHN0cmluZztcclxuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XHJcblxyXG4gIEBPdXRwdXQoKSBvbnNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI7XHJcblxyXG4gIHNhZmVTdmdDb21wb25lbnQ6IFNhZmVIdG1sO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNldElubmVySHRtbCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMuYWN0aXZlLnByZXZpb3VzVmFsdWUgIT09IGNoYW5nZXMuYWN0aXZlLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2V0SW5uZXJIdG1sKCk7XHJcbiAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlbGVjdENhdGVnb3J5KCRldmVudCkge1xyXG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5vbnNlbGVjdC5lbWl0KHtuYW1lOiB0aGlzLmNhdGVnb3J5TmFtZSwgaWNvbjogdGhpcy5jYXRlZ29yeUljb259KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0SW5uZXJIdG1sKCkge1xyXG4gICAgdGhpcy5zYWZlU3ZnQ29tcG9uZW50ID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoXHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeUljb24oXHJcbiAgICAgICAgICAgICgodGhpcy5hY3RpdmUpID8gdGhpcy5tYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZSA6IHRoaXMubWFydENhdGVnb3J5Q29sb3IpLFxyXG4gICAgICAgICAgICB0aGlzLm1hcnRDYXRlZ29yeUZvbnRTaXplLFxyXG4gICAgICAgICAgICB0aGlzLm1hcnRDYXRlZ29yeUZvbnRTaXplKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==