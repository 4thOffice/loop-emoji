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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9vcC1lbW9qaS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NhdGVnb3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBNkMsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckksT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBc0JuRSxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQWdCbkMsWUFDVyxTQUF1QixFQUN0QixLQUF3QjtRQUR6QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBTjFCLGFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBQztJQU90QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxLQUFLLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQzlELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsTUFBTTtRQUNuQixNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7SUFFTyxZQUFZO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUMxRCxJQUFJLENBQUMsWUFBWSxDQUNiLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQ3ZFLElBQUksQ0FBQyxvQkFBb0IsRUFDekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUFoRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRTs7Ozs7OztHQU9UO3lCQUNROzs7Ozs7Ozs7R0FTUjthQUNGOzs7O1lBckJRLFlBQVk7WUFEdUUsaUJBQWlCOzs7MkJBeUIxRyxLQUFLOzJCQUNMLEtBQUs7Z0NBQ0wsS0FBSzttQ0FDTCxLQUFLO29DQUNMLEtBQUs7bUNBQ0wsS0FBSztnQ0FDTCxLQUFLO3NDQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFFTCxNQUFNOzs7O0lBVlAsZ0RBQTJCOztJQUMzQixnREFBOEI7O0lBQzlCLHFEQUFtQzs7SUFDbkMsd0RBQXNDOztJQUN0Qyx5REFBdUM7O0lBQ3ZDLHdEQUFzQzs7SUFDdEMscURBQW1DOztJQUNuQywyREFBeUM7O0lBQ3pDLDBDQUF5Qjs7SUFFekIsNENBQXNDOztJQUV0QyxvREFBMkI7O0lBR3ZCLDZDQUE4Qjs7Ozs7SUFDOUIseUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT25DaGFuZ2VzLCBEb0NoZWNrLCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWVtb2otY2F0ZWdvcnknLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxidXR0b24gKGNsaWNrKT1cInNlbGVjdENhdGVnb3J5KCRldmVudClcIiBjbGFzcz1cIm5neC1lbW9qaS1jYXRlZ29yeS1idG5cIlxuICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBjYXRlZ29yeUljb25Db2xvcixcbiAgICAgICAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogYWN0aXZlSW5kaWNhdG9ySGVpZ2h0LFxuICAgICAgICAgICAgICAgICdib3JkZXItY29sb3InOiAoYWN0aXZlKSA/IGFjdGl2ZUluZGljYXRvckNvbG9yIDogJ3RyYW5zcGFyZW50J31cIlxuICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPXNhZmVTdmdDb21wb25lbnQ+XG4gICAgPC9idXR0b24+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgLm5neC1lbW9qaS1jYXRlZ29yeS1idG5cbiAge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDE1cHggMTAlIDEwcHggMTAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hFbW9qQ2F0ZWdvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgY2F0ZWdvcnlJY29uOiBhbnk7XG4gIEBJbnB1dCgpIGNhdGVnb3J5TmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBjYXRlZ29yeUljb25Db2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBhY3RpdmVJbmRpY2F0b3JDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBhY3RpdmVJbmRpY2F0b3JIZWlnaHQ6IHN0cmluZztcbiAgQElucHV0KCkgbWFydENhdGVnb3J5Rm9udFNpemU6IHN0cmluZztcbiAgQElucHV0KCkgbWFydENhdGVnb3J5Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgbWFydENhdGVnb3J5Q29sb3JBY3RpdmU6IHN0cmluZztcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBvbnNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI7XG5cbiAgc2FmZVN2Z0NvbXBvbmVudDogU2FmZUh0bWw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRJbm5lckh0bWwoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5hY3RpdmUucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlcy5hY3RpdmUuY3VycmVudFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2V0SW5uZXJIdG1sKCk7XG4gICAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0Q2F0ZWdvcnkoJGV2ZW50KSB7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMub25zZWxlY3QuZW1pdCh7bmFtZTogdGhpcy5jYXRlZ29yeU5hbWUsIGljb246IHRoaXMuY2F0ZWdvcnlJY29ufSk7XG4gIH1cblxuICBwcml2YXRlIHNldElubmVySHRtbCgpIHtcbiAgICB0aGlzLnNhZmVTdmdDb21wb25lbnQgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChcbiAgICAgICAgdGhpcy5jYXRlZ29yeUljb24oXG4gICAgICAgICAgICAoKHRoaXMuYWN0aXZlKSA/IHRoaXMubWFydENhdGVnb3J5Q29sb3JBY3RpdmUgOiB0aGlzLm1hcnRDYXRlZ29yeUNvbG9yKSxcbiAgICAgICAgICAgIHRoaXMubWFydENhdGVnb3J5Rm9udFNpemUsXG4gICAgICAgICAgICB0aGlzLm1hcnRDYXRlZ29yeUZvbnRTaXplKSk7XG4gIH1cbn1cbiJdfQ==