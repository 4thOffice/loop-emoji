/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class NgxEmojHeaderComponent {
    constructor() {
        this.oncategorychange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.activeCategory) {
            this.activeCategory = this.defaultActiveCategory;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onCategorySelect(e) {
        this.activeCategory = e.name;
        this.oncategorychange.emit({ name: e.name });
    }
}
NgxEmojHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-emoj-header',
                template: `
    <div
      class="ngx-emoj-header"
      [ngStyle]="{'background-color': headerBG,
                  'color': headerFG,
                  'font-size': headerFontSize,
                  'padding': headerPadding.y+' '+headerPadding.x}">

                  <ngx-emoj-category *ngFor="let c of emojiCategories"
                   [categoryIcon]="c.icon[0]"
                   [categoryIconColor]="'white'"
                   [categoryName]="c.name"
                   [martCategoryFontSize]="martCategoryFontSize"
                   [martCategoryColor]="martCategoryColor"
                   [martCategoryColorActive]="martCategoryColorActive"
                   [activeIndicatorColor]="activeIndicatorColor"
                   [activeIndicatorHeight]="activeIndicatorHeight"
                   [active]="activeCategory === c.name"
                   (onselect)="onCategorySelect($event)"
                   [ngStyle]="{'width': '26.22px'}">
                  </ngx-emoj-category>
    </div>
  `,
                styles: [`

  .ngx-emoj-header
  {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
  }
  `]
            }] }
];
/** @nocollapse */
NgxEmojHeaderComponent.ctorParameters = () => [];
NgxEmojHeaderComponent.propDecorators = {
    headerBG: [{ type: Input }],
    headerFG: [{ type: Input }],
    headerFontSize: [{ type: Input }],
    headerPadding: [{ type: Input }],
    emojiCategories: [{ type: Input }],
    activeIndicatorColor: [{ type: Input }],
    activeIndicatorHeight: [{ type: Input }],
    defaultActiveCategory: [{ type: Input }],
    martCategoryFontSize: [{ type: Input }],
    martCategoryColor: [{ type: Input }],
    martCategoryColorActive: [{ type: Input }],
    activeCategory: [{ type: Input }],
    oncategorychange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgxEmojHeaderComponent.prototype.headerBG;
    /** @type {?} */
    NgxEmojHeaderComponent.prototype.headerFG;
    /** @type {?} */
    NgxEmojHeaderComponent.prototype.headerFontSize;
    /** @type {?} */
    NgxEmojHeaderComponent.prototype.headerPadding;
    /** @type {?} */
    NgxEmojHeaderComponent.prototype.emojiCategories;
    /** @type {?} */
    NgxEmojHeaderComponent.prototype.activeIndicatorColor;
    /** @type {?} */
    NgxEmojHeaderComponent.prototype.activeIndicatorHeight;
    /** @type {?} */
    NgxEmojHeaderComponent.prototype.defaultActiveCategory;
    /** @type {?} */
    NgxEmojHeaderComponent.prototype.martCategoryFontSize;
    /** @type {?} */
    NgxEmojHeaderComponent.prototype.martCategoryColor;
    /** @type {?} */
    NgxEmojHeaderComponent.prototype.martCategoryColorActive;
    /** @type {?} */
    NgxEmojHeaderComponent.prototype.activeCategory;
    /** @type {?} */
    NgxEmojHeaderComponent.prototype.oncategorychange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvb3AtZW1vamkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBeUMvRSxNQUFNLE9BQU8sc0JBQXNCO0lBaUJqQztRQUZVLHFCQUFnQixHQUFRLElBQUksWUFBWSxFQUFFLENBQUM7SUFHckQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztTQUNsRDtJQUNILENBQUM7Ozs7O0lBQ0QsZ0JBQWdCLENBQUMsQ0FBQztRQUVoQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUFwRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDt5QkFDUTs7Ozs7Ozs7Ozs7R0FXUjthQUNGOzs7Ozt1QkFJRSxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7bUNBQ0wsS0FBSztvQ0FDTCxLQUFLO29DQUNMLEtBQUs7bUNBQ0wsS0FBSztnQ0FDTCxLQUFLO3NDQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFFTCxNQUFNOzs7O0lBYlAsMENBQTBCOztJQUMxQiwwQ0FBMEI7O0lBQzFCLGdEQUFnQzs7SUFDaEMsK0NBQXVCOztJQUN2QixpREFBeUI7O0lBQ3pCLHNEQUFzQzs7SUFDdEMsdURBQXVDOztJQUN2Qyx1REFBdUM7O0lBQ3ZDLHNEQUFzQzs7SUFDdEMsbURBQW1DOztJQUNuQyx5REFBeUM7O0lBQ3pDLGdEQUFnQzs7SUFFaEMsa0RBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtZW1vai1oZWFkZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwibmd4LWVtb2otaGVhZGVyXCJcclxuICAgICAgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogaGVhZGVyQkcsXHJcbiAgICAgICAgICAgICAgICAgICdjb2xvcic6IGhlYWRlckZHLFxyXG4gICAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogaGVhZGVyRm9udFNpemUsXHJcbiAgICAgICAgICAgICAgICAgICdwYWRkaW5nJzogaGVhZGVyUGFkZGluZy55KycgJytoZWFkZXJQYWRkaW5nLnh9XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8bmd4LWVtb2otY2F0ZWdvcnkgKm5nRm9yPVwibGV0IGMgb2YgZW1vamlDYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgICAgIFtjYXRlZ29yeUljb25dPVwiYy5pY29uWzBdXCJcclxuICAgICAgICAgICAgICAgICAgIFtjYXRlZ29yeUljb25Db2xvcl09XCInd2hpdGUnXCJcclxuICAgICAgICAgICAgICAgICAgIFtjYXRlZ29yeU5hbWVdPVwiYy5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgIFttYXJ0Q2F0ZWdvcnlGb250U2l6ZV09XCJtYXJ0Q2F0ZWdvcnlGb250U2l6ZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbbWFydENhdGVnb3J5Q29sb3JdPVwibWFydENhdGVnb3J5Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgW21hcnRDYXRlZ29yeUNvbG9yQWN0aXZlXT1cIm1hcnRDYXRlZ29yeUNvbG9yQWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgIFthY3RpdmVJbmRpY2F0b3JDb2xvcl09XCJhY3RpdmVJbmRpY2F0b3JDb2xvclwiXHJcbiAgICAgICAgICAgICAgICAgICBbYWN0aXZlSW5kaWNhdG9ySGVpZ2h0XT1cImFjdGl2ZUluZGljYXRvckhlaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICBbYWN0aXZlXT1cImFjdGl2ZUNhdGVnb3J5ID09PSBjLm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgKG9uc2VsZWN0KT1cIm9uQ2F0ZWdvcnlTZWxlY3QoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J3dpZHRoJzogJzI2LjIycHgnfVwiPlxyXG4gICAgICAgICAgICAgICAgICA8L25neC1lbW9qLWNhdGVnb3J5PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcblxyXG4gIC5uZ3gtZW1vai1oZWFkZXJcclxuICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5neEVtb2pIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgIHtcclxuXHJcbiAgQElucHV0KCkgaGVhZGVyQkc6IHN0cmluZztcclxuICBASW5wdXQoKSBoZWFkZXJGRzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhlYWRlckZvbnRTaXplOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaGVhZGVyUGFkZGluZztcclxuICBASW5wdXQoKSBlbW9qaUNhdGVnb3JpZXM7XHJcbiAgQElucHV0KCkgYWN0aXZlSW5kaWNhdG9yQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBhY3RpdmVJbmRpY2F0b3JIZWlnaHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBkZWZhdWx0QWN0aXZlQ2F0ZWdvcnk6IHN0cmluZztcclxuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlGb250U2l6ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1hcnRDYXRlZ29yeUNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWFydENhdGVnb3J5Q29sb3JBY3RpdmU6IHN0cmluZztcclxuICBASW5wdXQoKSBhY3RpdmVDYXRlZ29yeTogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgb25jYXRlZ29yeWNoYW5nZTogYW55ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmFjdGl2ZUNhdGVnb3J5KSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmRlZmF1bHRBY3RpdmVDYXRlZ29yeTtcclxuICAgIH1cclxuICB9XHJcbiAgb25DYXRlZ29yeVNlbGVjdChlKSB7XHJcblxyXG4gICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IGUubmFtZTtcclxuICAgIHRoaXMub25jYXRlZ29yeWNoYW5nZS5lbWl0KHtuYW1lOiBlLm5hbWV9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==