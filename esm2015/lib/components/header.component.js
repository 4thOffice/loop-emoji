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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvb3AtZW1vamkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBeUMvRSxNQUFNLE9BQU8sc0JBQXNCO0lBaUJqQztRQUZVLHFCQUFnQixHQUFRLElBQUksWUFBWSxFQUFFLENBQUM7SUFHckQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztTQUNsRDtJQUNILENBQUM7Ozs7O0lBQ0QsZ0JBQWdCLENBQUMsQ0FBQztRQUVoQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUFwRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDt5QkFDUTs7Ozs7Ozs7Ozs7R0FXUjthQUNGOzs7Ozt1QkFJRSxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7bUNBQ0wsS0FBSztvQ0FDTCxLQUFLO29DQUNMLEtBQUs7bUNBQ0wsS0FBSztnQ0FDTCxLQUFLO3NDQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFFTCxNQUFNOzs7O0lBYlAsMENBQTBCOztJQUMxQiwwQ0FBMEI7O0lBQzFCLGdEQUFnQzs7SUFDaEMsK0NBQXVCOztJQUN2QixpREFBeUI7O0lBQ3pCLHNEQUFzQzs7SUFDdEMsdURBQXVDOztJQUN2Qyx1REFBdUM7O0lBQ3ZDLHNEQUFzQzs7SUFDdEMsbURBQW1DOztJQUNuQyx5REFBeUM7O0lBQ3pDLGdEQUFnQzs7SUFFaEMsa0RBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZW1vai1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwibmd4LWVtb2otaGVhZGVyXCJcbiAgICAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGhlYWRlckJHLFxuICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogaGVhZGVyRkcsXG4gICAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogaGVhZGVyRm9udFNpemUsXG4gICAgICAgICAgICAgICAgICAncGFkZGluZyc6IGhlYWRlclBhZGRpbmcueSsnICcraGVhZGVyUGFkZGluZy54fVwiPlxuXG4gICAgICAgICAgICAgICAgICA8bmd4LWVtb2otY2F0ZWdvcnkgKm5nRm9yPVwibGV0IGMgb2YgZW1vamlDYXRlZ29yaWVzXCJcbiAgICAgICAgICAgICAgICAgICBbY2F0ZWdvcnlJY29uXT1cImMuaWNvblswXVwiXG4gICAgICAgICAgICAgICAgICAgW2NhdGVnb3J5SWNvbkNvbG9yXT1cIid3aGl0ZSdcIlxuICAgICAgICAgICAgICAgICAgIFtjYXRlZ29yeU5hbWVdPVwiYy5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICBbbWFydENhdGVnb3J5Rm9udFNpemVdPVwibWFydENhdGVnb3J5Rm9udFNpemVcIlxuICAgICAgICAgICAgICAgICAgIFttYXJ0Q2F0ZWdvcnlDb2xvcl09XCJtYXJ0Q2F0ZWdvcnlDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgW21hcnRDYXRlZ29yeUNvbG9yQWN0aXZlXT1cIm1hcnRDYXRlZ29yeUNvbG9yQWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICBbYWN0aXZlSW5kaWNhdG9yQ29sb3JdPVwiYWN0aXZlSW5kaWNhdG9yQ29sb3JcIlxuICAgICAgICAgICAgICAgICAgIFthY3RpdmVJbmRpY2F0b3JIZWlnaHRdPVwiYWN0aXZlSW5kaWNhdG9ySGVpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICBbYWN0aXZlXT1cImFjdGl2ZUNhdGVnb3J5ID09PSBjLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgIChvbnNlbGVjdCk9XCJvbkNhdGVnb3J5U2VsZWN0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnd2lkdGgnOiAnMjYuMjJweCd9XCI+XG4gICAgICAgICAgICAgICAgICA8L25neC1lbW9qLWNhdGVnb3J5PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG5cbiAgLm5neC1lbW9qLWhlYWRlclxuICB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGBdXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4RW1vakhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAge1xuXG4gIEBJbnB1dCgpIGhlYWRlckJHOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlYWRlckZHOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlYWRlckZvbnRTaXplOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlYWRlclBhZGRpbmc7XG4gIEBJbnB1dCgpIGVtb2ppQ2F0ZWdvcmllcztcbiAgQElucHV0KCkgYWN0aXZlSW5kaWNhdG9yQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgYWN0aXZlSW5kaWNhdG9ySGVpZ2h0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlZmF1bHRBY3RpdmVDYXRlZ29yeTogc3RyaW5nO1xuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlGb250U2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZTogc3RyaW5nO1xuICBASW5wdXQoKSBhY3RpdmVDYXRlZ29yeTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvbmNhdGVnb3J5Y2hhbmdlOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlQ2F0ZWdvcnkpIHtcbiAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmRlZmF1bHRBY3RpdmVDYXRlZ29yeTtcbiAgICB9XG4gIH1cbiAgb25DYXRlZ29yeVNlbGVjdChlKSB7XG5cbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gZS5uYW1lO1xuICAgIHRoaXMub25jYXRlZ29yeWNoYW5nZS5lbWl0KHtuYW1lOiBlLm5hbWV9KTtcbiAgfVxuXG59XG4iXX0=