/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class NgxEmojCategoryComponent {
    /**
     * @param {?} sanitizer
     * @param {?} cdRef
     */
    constructor(sanitizer, cdRef) {
        this.sanitizer = sanitizer;
        this.cdRef = cdRef;
        this.onselect = new EventEmitter;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setInnerHtml();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.active.previousValue !== changes.active.currentValue) {
            this.setInnerHtml();
            this.cdRef.markForCheck();
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    selectCategory($event) {
        $event.stopPropagation();
        this.onselect.emit({ name: this.categoryName, icon: this.categoryIcon });
    }
    /**
     * @private
     * @return {?}
     */
    setInnerHtml() {
        this.safeSvgComponent = this.sanitizer.bypassSecurityTrustHtml(this.categoryIcon(((this.active) ? this.martCategoryColorActive : this.martCategoryColor), this.martCategoryFontSize, this.martCategoryFontSize));
    }
}
NgxEmojCategoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-emoj-category',
                template: `
    <button (click)="selectCategory($event)" class="ngx-emoji-category-btn"
    [ngStyle]="{'color': categoryIconColor,
                'border-width': activeIndicatorHeight,
                'border-color': (active) ? activeIndicatorColor : 'transparent'}"
                [innerHTML]=safeSvgComponent>
    </button>
  `,
                styles: [`
  .ngx-emoji-category-btn
  {
    background: transparent;
    padding: 15px 10% 10px 10%;
    border: none;
    outline: none;
    border-bottom: 2px solid transparent;
  }
  `]
            }] }
];
/** @nocollapse */
NgxEmojCategoryComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9vcC1lbW9qaS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhdGVnb3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNkMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckksT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBc0JuRSxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQWdCbkMsWUFDVyxTQUF1QixFQUN0QixLQUF3QjtRQUR6QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBTjFCLGFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQztJQU90QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxLQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQzlELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsTUFBTTtRQUNuQixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUMxRCxJQUFJLENBQUMsWUFBWSxDQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQ3ZFLElBQUksQ0FBQyxvQkFBb0IsRUFDekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFoRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7OztHQU9UO3lCQUNROzs7Ozs7Ozs7R0FTUjthQUNGOzs7O1lBckJRLFlBQVk7WUFEdUUsaUJBQWlCOzs7MkJBeUIxRyxLQUFLOzJCQUNMLEtBQUs7Z0NBQ0wsS0FBSzttQ0FDTCxLQUFLO29DQUNMLEtBQUs7bUNBQ0wsS0FBSztnQ0FDTCxLQUFLO3NDQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFFTCxNQUFNOzs7O0lBVlAsZ0RBQTJCOztJQUMzQixnREFBOEI7O0lBQzlCLHFEQUFtQzs7SUFDbkMsd0RBQXNDOztJQUN0Qyx5REFBdUM7O0lBQ3ZDLHdEQUFzQzs7SUFDdEMscURBQW1DOztJQUNuQywyREFBeUM7O0lBQ3pDLDBDQUF5Qjs7SUFFekIsNENBQXNDOztJQUV0QyxvREFBMkI7O0lBR3ZCLDZDQUE4Qjs7Ozs7SUFDOUIseUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT25DaGFuZ2VzLCBEb0NoZWNrLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWVtb2otY2F0ZWdvcnknLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJzZWxlY3RDYXRlZ29yeSgkZXZlbnQpXCIgY2xhc3M9XCJuZ3gtZW1vamktY2F0ZWdvcnktYnRuXCJcclxuICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBjYXRlZ29yeUljb25Db2xvcixcclxuICAgICAgICAgICAgICAgICdib3JkZXItd2lkdGgnOiBhY3RpdmVJbmRpY2F0b3JIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogKGFjdGl2ZSkgPyBhY3RpdmVJbmRpY2F0b3JDb2xvciA6ICd0cmFuc3BhcmVudCd9XCJcclxuICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPXNhZmVTdmdDb21wb25lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAubmd4LWVtb2ppLWNhdGVnb3J5LWJ0blxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMTVweCAxMCUgMTBweCAxMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RW1vakNhdGVnb3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBjYXRlZ29yeUljb246IGFueTtcclxuICBASW5wdXQoKSBjYXRlZ29yeU5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBjYXRlZ29yeUljb25Db2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFjdGl2ZUluZGljYXRvckNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWN0aXZlSW5kaWNhdG9ySGVpZ2h0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWFydENhdGVnb3J5Rm9udFNpemU6IHN0cmluZztcclxuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1hcnRDYXRlZ29yeUNvbG9yQWN0aXZlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgb25zZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuICBzYWZlU3ZnQ29tcG9uZW50OiBTYWZlSHRtbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zZXRJbm5lckh0bWwoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmFjdGl2ZS5wcmV2aW91c1ZhbHVlICE9PSBjaGFuZ2VzLmFjdGl2ZS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldElubmVySHRtbCgpO1xyXG4gICAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RDYXRlZ29yeSgkZXZlbnQpIHtcclxuICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMub25zZWxlY3QuZW1pdCh7bmFtZTogdGhpcy5jYXRlZ29yeU5hbWUsIGljb246IHRoaXMuY2F0ZWdvcnlJY29ufSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldElubmVySHRtbCgpIHtcclxuICAgIHRoaXMuc2FmZVN2Z0NvbXBvbmVudCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFxyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlJY29uKFxyXG4gICAgICAgICAgICAoKHRoaXMuYWN0aXZlKSA/IHRoaXMubWFydENhdGVnb3J5Q29sb3JBY3RpdmUgOiB0aGlzLm1hcnRDYXRlZ29yeUNvbG9yKSxcclxuICAgICAgICAgICAgdGhpcy5tYXJ0Q2F0ZWdvcnlGb250U2l6ZSxcclxuICAgICAgICAgICAgdGhpcy5tYXJ0Q2F0ZWdvcnlGb250U2l6ZSkpO1xyXG4gIH1cclxufVxyXG4iXX0=