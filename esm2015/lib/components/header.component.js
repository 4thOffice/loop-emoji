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
                   (onselect)="onCategorySelect($event)">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvb3AtZW1vamkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBNkMvRSxNQUFNLE9BQU8sc0JBQXNCO0lBaUJqQztRQUZVLHFCQUFnQixHQUFRLElBQUksWUFBWSxFQUFFLENBQUM7SUFHckQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztTQUNsRDtJQUNILENBQUM7Ozs7O0lBQ0QsZ0JBQWdCLENBQUMsQ0FBQztRQUVoQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUFyRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJUO3lCQUNROzs7Ozs7Ozs7Ozs7O0dBYVI7YUFDRjs7Ozs7dUJBSUUsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLO21DQUNMLEtBQUs7b0NBQ0wsS0FBSztvQ0FDTCxLQUFLO21DQUNMLEtBQUs7Z0NBQ0wsS0FBSztzQ0FDTCxLQUFLOzZCQUNMLEtBQUs7K0JBRUwsTUFBTTs7OztJQWJQLDBDQUEwQjs7SUFDMUIsMENBQTBCOztJQUMxQixnREFBZ0M7O0lBQ2hDLCtDQUF1Qjs7SUFDdkIsaURBQXlCOztJQUN6QixzREFBc0M7O0lBQ3RDLHVEQUF1Qzs7SUFDdkMsdURBQXVDOztJQUN2QyxzREFBc0M7O0lBQ3RDLG1EQUFtQzs7SUFDbkMseURBQXlDOztJQUN6QyxnREFBZ0M7O0lBRWhDLGtEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWVtb2otaGVhZGVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzcz1cIm5neC1lbW9qLWhlYWRlclwiXHJcbiAgICAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGhlYWRlckJHLFxyXG4gICAgICAgICAgICAgICAgICAnY29sb3InOiBoZWFkZXJGRyxcclxuICAgICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IGhlYWRlckZvbnRTaXplLFxyXG4gICAgICAgICAgICAgICAgICAncGFkZGluZyc6IGhlYWRlclBhZGRpbmcueSsnICcraGVhZGVyUGFkZGluZy54fVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPG5neC1lbW9qLWNhdGVnb3J5ICpuZ0Zvcj1cImxldCBjIG9mIGVtb2ppQ2F0ZWdvcmllc1wiXHJcbiAgICAgICAgICAgICAgICAgICBbY2F0ZWdvcnlJY29uXT1cImMuaWNvblswXVwiXHJcbiAgICAgICAgICAgICAgICAgICBbY2F0ZWdvcnlJY29uQ29sb3JdPVwiJ3doaXRlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICBbY2F0ZWdvcnlOYW1lXT1cImMubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbbWFydENhdGVnb3J5Rm9udFNpemVdPVwibWFydENhdGVnb3J5Rm9udFNpemVcIlxyXG4gICAgICAgICAgICAgICAgICAgW21hcnRDYXRlZ29yeUNvbG9yXT1cIm1hcnRDYXRlZ29yeUNvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgIFttYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZV09XCJtYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbYWN0aXZlSW5kaWNhdG9yQ29sb3JdPVwiYWN0aXZlSW5kaWNhdG9yQ29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgW2FjdGl2ZUluZGljYXRvckhlaWdodF09XCJhY3RpdmVJbmRpY2F0b3JIZWlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgW2FjdGl2ZV09XCJhY3RpdmVDYXRlZ29yeSA9PT0gYy5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgIChvbnNlbGVjdCk9XCJvbkNhdGVnb3J5U2VsZWN0KCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgPC9uZ3gtZW1vai1jYXRlZ29yeT5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG5cclxuICAubmd4LWVtb2otaGVhZGVyXHJcbiAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG5cclxuICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE5neEVtb2pIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgIHtcclxuXHJcbiAgQElucHV0KCkgaGVhZGVyQkc6IHN0cmluZztcclxuICBASW5wdXQoKSBoZWFkZXJGRzogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGhlYWRlckZvbnRTaXplOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaGVhZGVyUGFkZGluZztcclxuICBASW5wdXQoKSBlbW9qaUNhdGVnb3JpZXM7XHJcbiAgQElucHV0KCkgYWN0aXZlSW5kaWNhdG9yQ29sb3I6IHN0cmluZztcclxuICBASW5wdXQoKSBhY3RpdmVJbmRpY2F0b3JIZWlnaHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBkZWZhdWx0QWN0aXZlQ2F0ZWdvcnk6IHN0cmluZztcclxuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlGb250U2l6ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1hcnRDYXRlZ29yeUNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWFydENhdGVnb3J5Q29sb3JBY3RpdmU6IHN0cmluZztcclxuICBASW5wdXQoKSBhY3RpdmVDYXRlZ29yeTogc3RyaW5nO1xyXG5cclxuICBAT3V0cHV0KCkgb25jYXRlZ29yeWNoYW5nZTogYW55ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmFjdGl2ZUNhdGVnb3J5KSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmRlZmF1bHRBY3RpdmVDYXRlZ29yeTtcclxuICAgIH1cclxuICB9XHJcbiAgb25DYXRlZ29yeVNlbGVjdChlKSB7XHJcblxyXG4gICAgdGhpcy5hY3RpdmVDYXRlZ29yeSA9IGUubmFtZTtcclxuICAgIHRoaXMub25jYXRlZ29yeWNoYW5nZS5lbWl0KHtuYW1lOiBlLm5hbWV9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==