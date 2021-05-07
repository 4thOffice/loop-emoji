/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var NgxEmojHeaderComponent = /** @class */ (function () {
    function NgxEmojHeaderComponent() {
        this.oncategorychange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxEmojHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.activeCategory) {
            this.activeCategory = this.defaultActiveCategory;
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojHeaderComponent.prototype.onCategorySelect = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.activeCategory = e.name;
        this.oncategorychange.emit({ name: e.name });
    };
    NgxEmojHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-emoj-header',
                    template: "\n    <div\n      class=\"ngx-emoj-header\"\n      [ngStyle]=\"{'background-color': headerBG,\n                  'color': headerFG,\n                  'font-size': headerFontSize,\n                  'padding': headerPadding.y+' '+headerPadding.x}\">\n\n                  <ngx-emoj-category *ngFor=\"let c of emojiCategories\"\n                   [categoryIcon]=\"c.icon[0]\"\n                   [categoryIconColor]=\"'white'\"\n                   [categoryName]=\"c.name\"\n                   [martCategoryFontSize]=\"martCategoryFontSize\"\n                   [martCategoryColor]=\"martCategoryColor\"\n                   [martCategoryColorActive]=\"martCategoryColorActive\"\n                   [activeIndicatorColor]=\"activeIndicatorColor\"\n                   [activeIndicatorHeight]=\"activeIndicatorHeight\"\n                   [active]=\"activeCategory === c.name\"\n                   (onselect)=\"onCategorySelect($event)\"\n                   [ngStyle]=\"{'width': '26.22px'}\">\n                  </ngx-emoj-category>\n    </div>\n  ",
                    styles: ["\n\n  .ngx-emoj-header\n  {\n    display: flex;\n    justify-content: space-around;\n    flex-wrap: wrap;\n    align-items: center;\n    width: 100%;\n    box-sizing: border-box;\n  }\n  "]
                }] }
    ];
    /** @nocollapse */
    NgxEmojHeaderComponent.ctorParameters = function () { return []; };
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
    return NgxEmojHeaderComponent;
}());
export { NgxEmojHeaderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvb3AtZW1vamkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBd0RFO1FBRlUscUJBQWdCLEdBQVEsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUdyRCxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUM7U0FDbEQ7SUFDSCxDQUFDOzs7OztJQUNELGlEQUFnQjs7OztJQUFoQixVQUFpQixDQUFDO1FBRWhCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7O2dCQXBFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLHVoQ0FzQlQ7NkJBQ1EsNkxBV1I7aUJBQ0Y7Ozs7OzJCQUlFLEtBQUs7MkJBQ0wsS0FBSztpQ0FDTCxLQUFLO2dDQUNMLEtBQUs7a0NBQ0wsS0FBSzt1Q0FDTCxLQUFLO3dDQUNMLEtBQUs7d0NBQ0wsS0FBSzt1Q0FDTCxLQUFLO29DQUNMLEtBQUs7MENBQ0wsS0FBSztpQ0FDTCxLQUFLO21DQUVMLE1BQU07O0lBZ0JULDZCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0EvQlksc0JBQXNCOzs7SUFFakMsMENBQTBCOztJQUMxQiwwQ0FBMEI7O0lBQzFCLGdEQUFnQzs7SUFDaEMsK0NBQXVCOztJQUN2QixpREFBeUI7O0lBQ3pCLHNEQUFzQzs7SUFDdEMsdURBQXVDOztJQUN2Qyx1REFBdUM7O0lBQ3ZDLHNEQUFzQzs7SUFDdEMsbURBQW1DOztJQUNuQyx5REFBeUM7O0lBQ3pDLGdEQUFnQzs7SUFFaEMsa0RBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZW1vai1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwibmd4LWVtb2otaGVhZGVyXCJcbiAgICAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGhlYWRlckJHLFxuICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogaGVhZGVyRkcsXG4gICAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogaGVhZGVyRm9udFNpemUsXG4gICAgICAgICAgICAgICAgICAncGFkZGluZyc6IGhlYWRlclBhZGRpbmcueSsnICcraGVhZGVyUGFkZGluZy54fVwiPlxuXG4gICAgICAgICAgICAgICAgICA8bmd4LWVtb2otY2F0ZWdvcnkgKm5nRm9yPVwibGV0IGMgb2YgZW1vamlDYXRlZ29yaWVzXCJcbiAgICAgICAgICAgICAgICAgICBbY2F0ZWdvcnlJY29uXT1cImMuaWNvblswXVwiXG4gICAgICAgICAgICAgICAgICAgW2NhdGVnb3J5SWNvbkNvbG9yXT1cIid3aGl0ZSdcIlxuICAgICAgICAgICAgICAgICAgIFtjYXRlZ29yeU5hbWVdPVwiYy5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICBbbWFydENhdGVnb3J5Rm9udFNpemVdPVwibWFydENhdGVnb3J5Rm9udFNpemVcIlxuICAgICAgICAgICAgICAgICAgIFttYXJ0Q2F0ZWdvcnlDb2xvcl09XCJtYXJ0Q2F0ZWdvcnlDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgW21hcnRDYXRlZ29yeUNvbG9yQWN0aXZlXT1cIm1hcnRDYXRlZ29yeUNvbG9yQWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICBbYWN0aXZlSW5kaWNhdG9yQ29sb3JdPVwiYWN0aXZlSW5kaWNhdG9yQ29sb3JcIlxuICAgICAgICAgICAgICAgICAgIFthY3RpdmVJbmRpY2F0b3JIZWlnaHRdPVwiYWN0aXZlSW5kaWNhdG9ySGVpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICBbYWN0aXZlXT1cImFjdGl2ZUNhdGVnb3J5ID09PSBjLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgIChvbnNlbGVjdCk9XCJvbkNhdGVnb3J5U2VsZWN0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnd2lkdGgnOiAnMjYuMjJweCd9XCI+XG4gICAgICAgICAgICAgICAgICA8L25neC1lbW9qLWNhdGVnb3J5PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG5cbiAgLm5neC1lbW9qLWhlYWRlclxuICB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGBdXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4RW1vakhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCAge1xuXG4gIEBJbnB1dCgpIGhlYWRlckJHOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlYWRlckZHOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlYWRlckZvbnRTaXplOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGhlYWRlclBhZGRpbmc7XG4gIEBJbnB1dCgpIGVtb2ppQ2F0ZWdvcmllcztcbiAgQElucHV0KCkgYWN0aXZlSW5kaWNhdG9yQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgYWN0aXZlSW5kaWNhdG9ySGVpZ2h0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlZmF1bHRBY3RpdmVDYXRlZ29yeTogc3RyaW5nO1xuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlGb250U2l6ZTogc3RyaW5nO1xuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZTogc3RyaW5nO1xuICBASW5wdXQoKSBhY3RpdmVDYXRlZ29yeTogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBvbmNhdGVnb3J5Y2hhbmdlOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlQ2F0ZWdvcnkpIHtcbiAgICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkgPSB0aGlzLmRlZmF1bHRBY3RpdmVDYXRlZ29yeTtcbiAgICB9XG4gIH1cbiAgb25DYXRlZ29yeVNlbGVjdChlKSB7XG5cbiAgICB0aGlzLmFjdGl2ZUNhdGVnb3J5ID0gZS5uYW1lO1xuICAgIHRoaXMub25jYXRlZ29yeWNoYW5nZS5lbWl0KHtuYW1lOiBlLm5hbWV9KTtcbiAgfVxuXG59XG4iXX0=