/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var NgxEmojCategoryComponent = /** @class */ (function () {
    function NgxEmojCategoryComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.onselect = new EventEmitter;
    }
    /**
     * @return {?}
     */
    NgxEmojCategoryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.safeSvgComponent = this.sanitizer.bypassSecurityTrustHtml(this.categoryIcon(((this.active) ? this.martCategoryColorActive : this.martCategoryColor), this.martCategoryFontSize, this.martCategoryFontSize));
    };
    /**
     * @return {?}
     */
    NgxEmojCategoryComponent.prototype.selectCategory = /**
     * @return {?}
     */
    function () {
        this.onselect.emit({ name: this.categoryName, icon: this.categoryIcon });
    };
    NgxEmojCategoryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-emoj-category',
                    template: "\n    <button (click)=\"selectCategory()\" class=\"ngx-emoji-category-btn\"\n    [ngStyle]=\"{'color': categoryIconColor,\n                'border-width': activeIndicatorHeight,\n                'border-color': (active) ? activeIndicatorColor : 'transparent'}\"\n                [innerHTML]=safeSvgComponent>\n    </button>\n  ",
                    styles: ["\n  .ngx-emoji-category-btn\n  {\n    background: transparent;\n    padding: 15px 10% 10px 10%;\n    border: none;\n    outline: none;\n    border-bottom: 2px solid transparent;\n  }\n  "]
                }] }
    ];
    /** @nocollapse */
    NgxEmojCategoryComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9vcC1lbW9qaS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhdGVnb3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkU7SUFxQ0Usa0NBQW1CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFKaEMsYUFBUSxHQUFHLElBQUksWUFBWSxDQUFDO0lBS3RDLENBQUM7Ozs7SUFFRCwyQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FDMUQsSUFBSSxDQUFDLFlBQVksQ0FDYixDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUN2RSxJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELGlEQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7O2dCQWxERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsUUFBUSxFQUFFLHlVQU9UOzZCQUNRLDRMQVNSO2lCQUNGOzs7O2dCQXJCUSxZQUFZOzs7K0JBd0JsQixLQUFLOytCQUNMLEtBQUs7b0NBQ0wsS0FBSzt5QkFDTCxLQUFLO3VDQUNMLEtBQUs7d0NBQ0wsS0FBSzt1Q0FDTCxLQUFLO29DQUNMLEtBQUs7MENBQ0wsS0FBSzsyQkFFTCxNQUFNOztJQWtCVCwrQkFBQztDQUFBLEFBbkRELElBbURDO1NBOUJZLHdCQUF3Qjs7O0lBRW5DLGdEQUEyQjs7SUFDM0IsZ0RBQThCOztJQUM5QixxREFBbUM7O0lBQ25DLDBDQUF5Qjs7SUFDekIsd0RBQXNDOztJQUN0Qyx5REFBdUM7O0lBQ3ZDLHdEQUFzQzs7SUFDdEMscURBQW1DOztJQUNuQywyREFBeUM7O0lBRXpDLDRDQUFzQzs7SUFFdEMsb0RBQTJCOztJQUVmLDZDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1lbW9qLWNhdGVnb3J5JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwic2VsZWN0Q2F0ZWdvcnkoKVwiIGNsYXNzPVwibmd4LWVtb2ppLWNhdGVnb3J5LWJ0blwiXHJcbiAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogY2F0ZWdvcnlJY29uQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogYWN0aXZlSW5kaWNhdG9ySGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcic6IChhY3RpdmUpID8gYWN0aXZlSW5kaWNhdG9yQ29sb3IgOiAndHJhbnNwYXJlbnQnfVwiXHJcbiAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1zYWZlU3ZnQ29tcG9uZW50PlxyXG4gICAgPC9idXR0b24+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgLm5neC1lbW9qaS1jYXRlZ29yeS1idG5cclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmc6IDE1cHggMTAlIDEwcHggMTAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neEVtb2pDYXRlZ29yeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgQElucHV0KCkgY2F0ZWdvcnlJY29uOiBhbnk7XHJcbiAgQElucHV0KCkgY2F0ZWdvcnlOYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgY2F0ZWdvcnlJY29uQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgYWN0aXZlSW5kaWNhdG9yQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBhY3RpdmVJbmRpY2F0b3JIZWlnaHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlGb250U2l6ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1hcnRDYXRlZ29yeUNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWFydENhdGVnb3J5Q29sb3JBY3RpdmU6IHN0cmluZztcclxuXHJcbiAgQE91dHB1dCgpIG9uc2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjtcclxuXHJcbiAgc2FmZVN2Z0NvbXBvbmVudDogU2FmZUh0bWw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNhZmVTdmdDb21wb25lbnQgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChcclxuICAgICAgICB0aGlzLmNhdGVnb3J5SWNvbihcclxuICAgICAgICAgICAgKCh0aGlzLmFjdGl2ZSkgPyB0aGlzLm1hcnRDYXRlZ29yeUNvbG9yQWN0aXZlIDogdGhpcy5tYXJ0Q2F0ZWdvcnlDb2xvciksXHJcbiAgICAgICAgICAgIHRoaXMubWFydENhdGVnb3J5Rm9udFNpemUsXHJcbiAgICAgICAgICAgIHRoaXMubWFydENhdGVnb3J5Rm9udFNpemUpKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdENhdGVnb3J5KCkge1xyXG4gICAgdGhpcy5vbnNlbGVjdC5lbWl0KHtuYW1lOiB0aGlzLmNhdGVnb3J5TmFtZSwgaWNvbjogdGhpcy5jYXRlZ29yeUljb259KTtcclxuICB9XHJcbn1cclxuIl19