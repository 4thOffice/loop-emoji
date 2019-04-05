/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class NgxEmojCategoryComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.onselect = new EventEmitter;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.safeSvgComponent = this.sanitizer.bypassSecurityTrustHtml(this.categoryIcon(((this.active) ? this.martCategoryColorActive : this.martCategoryColor), this.martCategoryFontSize, this.martCategoryFontSize));
    }
    /**
     * @return {?}
     */
    selectCategory() {
        this.onselect.emit({ name: this.categoryName, icon: this.categoryIcon });
    }
}
NgxEmojCategoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-emoj-category',
                template: `
    <button (click)="selectCategory()" class="ngx-emoji-category-btn"
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
    { type: DomSanitizer }
];
NgxEmojCategoryComponent.propDecorators = {
    categoryIcon: [{ type: Input }],
    categoryName: [{ type: Input }],
    categoryIconColor: [{ type: Input }],
    active: [{ type: Input }],
    activeIndicatorColor: [{ type: Input }],
    activeIndicatorHeight: [{ type: Input }],
    martCategoryFontSize: [{ type: Input }],
    martCategoryColor: [{ type: Input }],
    martCategoryColorActive: [{ type: Input }],
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
    NgxEmojCategoryComponent.prototype.active;
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
    NgxEmojCategoryComponent.prototype.onselect;
    /** @type {?} */
    NgxEmojCategoryComponent.prototype.safeSvgComponent;
    /** @type {?} */
    NgxEmojCategoryComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9vcC1lbW9qaS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhdGVnb3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFzQm5FLE1BQU0sT0FBTyx3QkFBd0I7Ozs7SUFnQm5DLFlBQW1CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFKaEMsYUFBUSxHQUFHLElBQUksWUFBWSxDQUFDO0lBS3RDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQzFELElBQUksQ0FBQyxZQUFZLENBQ2IsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFDdkUsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7O1lBbERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUU7Ozs7Ozs7R0FPVDt5QkFDUTs7Ozs7Ozs7O0dBU1I7YUFDRjs7OztZQXJCUSxZQUFZOzs7MkJBd0JsQixLQUFLOzJCQUNMLEtBQUs7Z0NBQ0wsS0FBSztxQkFDTCxLQUFLO21DQUNMLEtBQUs7b0NBQ0wsS0FBSzttQ0FDTCxLQUFLO2dDQUNMLEtBQUs7c0NBQ0wsS0FBSzt1QkFFTCxNQUFNOzs7O0lBVlAsZ0RBQTJCOztJQUMzQixnREFBOEI7O0lBQzlCLHFEQUFtQzs7SUFDbkMsMENBQXlCOztJQUN6Qix3REFBc0M7O0lBQ3RDLHlEQUF1Qzs7SUFDdkMsd0RBQXNDOztJQUN0QyxxREFBbUM7O0lBQ25DLDJEQUF5Qzs7SUFFekMsNENBQXNDOztJQUV0QyxvREFBMkI7O0lBRWYsNkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWVtb2otY2F0ZWdvcnknLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJzZWxlY3RDYXRlZ29yeSgpXCIgY2xhc3M9XCJuZ3gtZW1vamktY2F0ZWdvcnktYnRuXCJcclxuICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBjYXRlZ29yeUljb25Db2xvcixcclxuICAgICAgICAgICAgICAgICdib3JkZXItd2lkdGgnOiBhY3RpdmVJbmRpY2F0b3JIZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogKGFjdGl2ZSkgPyBhY3RpdmVJbmRpY2F0b3JDb2xvciA6ICd0cmFuc3BhcmVudCd9XCJcclxuICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPXNhZmVTdmdDb21wb25lbnQ+XHJcbiAgICA8L2J1dHRvbj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAubmd4LWVtb2ppLWNhdGVnb3J5LWJ0blxyXG4gIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMTVweCAxMCUgMTBweCAxMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4RW1vakNhdGVnb3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICBASW5wdXQoKSBjYXRlZ29yeUljb246IGFueTtcclxuICBASW5wdXQoKSBjYXRlZ29yeU5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBjYXRlZ29yeUljb25Db2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFjdGl2ZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBhY3RpdmVJbmRpY2F0b3JDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFjdGl2ZUluZGljYXRvckhlaWdodDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1hcnRDYXRlZ29yeUZvbnRTaXplOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWFydENhdGVnb3J5Q29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZTogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgb25zZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyO1xyXG5cclxuICBzYWZlU3ZnQ29tcG9uZW50OiBTYWZlSHRtbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2FmZVN2Z0NvbXBvbmVudCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFxyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlJY29uKFxyXG4gICAgICAgICAgICAoKHRoaXMuYWN0aXZlKSA/IHRoaXMubWFydENhdGVnb3J5Q29sb3JBY3RpdmUgOiB0aGlzLm1hcnRDYXRlZ29yeUNvbG9yKSxcclxuICAgICAgICAgICAgdGhpcy5tYXJ0Q2F0ZWdvcnlGb250U2l6ZSxcclxuICAgICAgICAgICAgdGhpcy5tYXJ0Q2F0ZWdvcnlGb250U2l6ZSkpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0Q2F0ZWdvcnkoKSB7XHJcbiAgICB0aGlzLm9uc2VsZWN0LmVtaXQoe25hbWU6IHRoaXMuY2F0ZWdvcnlOYW1lLCBpY29uOiB0aGlzLmNhdGVnb3J5SWNvbn0pO1xyXG4gIH1cclxufVxyXG4iXX0=