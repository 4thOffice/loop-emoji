/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var NgxEmojFooterComponent = /** @class */ (function () {
    function NgxEmojFooterComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.onemochange = new EventEmitter();
        this.onchardelete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    NgxEmojFooterComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.activeEmo = this.defaultActiveEmo;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojFooterComponent.prototype.onEmoSelect = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.activeEmo = e.name;
        this.onemochange.emit({ name: e.name });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NgxEmojFooterComponent.prototype.deleteChar = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.onchardelete.emit({ deleteChar: true });
    };
    /**
     * @param {?} fill
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    NgxEmojFooterComponent.prototype.delButton = /**
     * @param {?} fill
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (fill, width, height) {
        return "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 511.374 511.374\" width=\"" + width + "\" height=\"" + height + "\" fill=\"" + fill + "\" style=\"enable-background:new 0 0 511.374 511.374\" xml:space=\"preserve\"><g><g><path d=\"M433.134,47.687h-213.28c-37.109,0.21-72.235,16.778-96,45.28l-1.44,1.6l-115.2,140.8c-9.619,11.779-9.619,28.701,0,40.48l115.36,141.92c23.6,28.794,58.771,45.618,96,45.92h216.16c41.414-2.536,74.363-35.691,76.64-77.12c0-0.96,0-1.92,0-2.88v-257.12C510.781,83.499,476.196,48.631,433.134,47.687z M447.374,382.567c-0.428,9.583-8.327,17.13-17.92,17.12h-208c-19.662,0.779-38.49-7.979-50.56-23.52l-98.24-120.48l97.92-119.68c11.851-15.727,30.553-24.78,50.24-24.32h209.6c11.04,0,16,6.4,16.96,16V382.567z\"/></g></g><g><g><path d=\"M373.934,296.967l-11.52-11.52c-12.504-12.504-32.776-12.504-45.28,0s-12.504,32.776,0,45.28l11.52,11.52c12.504,12.504,32.776,12.504,45.28,0S386.438,309.471,373.934,296.967z\"/></g></g><g><g><path d=\"M373.934,169.127c-12.504-12.504-32.776-12.504-45.28,0h0.16l-41.44,41.28l-41.44-41.44c-12.504-12.504-32.776-12.504-45.28,0s-12.504,32.776,0,45.28l41.44,41.44l-41.44,41.44c-12.504,12.504-12.504,32.776,0,45.28s32.776,12.504,45.28,0l128-128C386.438,201.903,386.438,181.631,373.934,169.127z\"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>";
    };
    NgxEmojFooterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-emoj-footer',
                    template: "\n    <div\n      class=\"ngx-emoj-footer\"\n      [class.unveal]=\"hideFooter\"\n      [class.reveal]=\"!hideFooter\"\n      [ngStyle]=\"{'background-color': footerBG,\n                  'color': footerFG,\n                  'font-size': footerFontSize,\n                  'padding': footerPadding.y+' '+footerPadding.x}\">\n\n                  <div class=\"l\">\n                        <button\n                        class=\"emos-btn\"\n                *ngFor=\"let e of emos\" [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(\n                          e.icon[0](((e.name == activeEmo ) ? martCategoryColorActive : martCategoryColor),\n                                       martCategoryFontSize, martCategoryFontSize))\">\n                        </button>\n                  </div>\n                  <div class=\"r\">\n                      <button class=\"emos-btn\"\n                          (click)=\"deleteChar($event)\"\n                          [ngStyle]=\"{'color': martCategoryColor}\"\n                          [innerHTML]=\"sanitizer.bypassSecurityTrustHtml(\n                            delButton(martCategoryColor, martCategoryFontSize, martCategoryFontSize))\">\n                      </button>\n                  </div>\n    </div>\n  ",
                    styles: ["\n   .ngx-emoj-footer\n  {\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    align-items: center;\n    width: 100%;\n    box-sizing: border-box;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n\n  }\n  .ngx-emoj-footer .l\n  {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 85%;\n  }\n  .ngx-emoj-footer .r\n  {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 15%;\n  }\n\n  .emos-btn\n  {\n    background: transparent;\n    padding: 15px 10% 10px 10%;\n    border: none;\n    outline: none;\n    padding-left: 10%;\n    padding-right: 10%;\n    border: none;\n  }\n\n\n  .reveal\n  {\n    animation-name: reveal;\n    animation-duration: .3s;\n    animation-fill-mode: forwards;\n  }\n\n\n  .unveal\n  {\n    animation-name: unveal;\n    animation-duration: .5s;\n    animation-fill-mode: forwards;\n  }\n\n  @keyframes unveal\n  {\n    from\n    {\n      opacity: 1;\n      bottom: 0;\n    }\n\n    to\n    {\n      opacity: 0;\n      bottom: -150px;\n    }\n  }\n\n  @keyframes reveal\n  {\n\n    from\n    {\n      opacity: 0;\n      bottom: -150px;\n    }\n\n    to\n    {\n      opacity: 1;\n      bottom: 0;\n    }\n  }\n\n  "]
                }] }
    ];
    /** @nocollapse */
    NgxEmojFooterComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    NgxEmojFooterComponent.propDecorators = {
        footerBG: [{ type: Input }],
        footerFG: [{ type: Input }],
        footerFontSize: [{ type: Input }],
        footerPadding: [{ type: Input }],
        emos: [{ type: Input }],
        activeIndicatorColor: [{ type: Input }],
        activeIndicatorHeight: [{ type: Input }],
        defaultActiveEmo: [{ type: Input }],
        onemochange: [{ type: Output }],
        martCategoryFontSize: [{ type: Input }],
        martCategoryColor: [{ type: Input }],
        martCategoryColorActive: [{ type: Input }],
        onchardelete: [{ type: Output }],
        hideFooter: [{ type: Input }]
    };
    return NgxEmojFooterComponent;
}());
export { NgxEmojFooterComponent };
if (false) {
    /** @type {?} */
    NgxEmojFooterComponent.prototype.footerBG;
    /** @type {?} */
    NgxEmojFooterComponent.prototype.footerFG;
    /** @type {?} */
    NgxEmojFooterComponent.prototype.footerFontSize;
    /** @type {?} */
    NgxEmojFooterComponent.prototype.footerPadding;
    /** @type {?} */
    NgxEmojFooterComponent.prototype.emos;
    /** @type {?} */
    NgxEmojFooterComponent.prototype.activeIndicatorColor;
    /** @type {?} */
    NgxEmojFooterComponent.prototype.activeIndicatorHeight;
    /** @type {?} */
    NgxEmojFooterComponent.prototype.defaultActiveEmo;
    /** @type {?} */
    NgxEmojFooterComponent.prototype.onemochange;
    /** @type {?} */
    NgxEmojFooterComponent.prototype.martCategoryFontSize;
    /** @type {?} */
    NgxEmojFooterComponent.prototype.martCategoryColor;
    /** @type {?} */
    NgxEmojFooterComponent.prototype.martCategoryColorActive;
    /** @type {?} */
    NgxEmojFooterComponent.prototype.onchardelete;
    /** @type {?} */
    NgxEmojFooterComponent.prototype.hideFooter;
    /** @type {?} */
    NgxEmojFooterComponent.prototype.activeEmo;
    /** @type {?} */
    NgxEmojFooterComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvb3AtZW1vamkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUcsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRDtJQTRJRSxnQ0FBbUIsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQVZoQyxnQkFBVyxHQUFRLElBQUksWUFBWSxFQUFFLENBQUM7UUFJdEMsaUJBQVksR0FBUSxJQUFJLFlBQVksRUFBRSxDQUFDO0lBT2pELENBQUM7Ozs7SUFFRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUNELDRDQUFXOzs7O0lBQVgsVUFBWSxDQUFDO1FBRVgsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRUQsMkNBQVU7Ozs7SUFBVixVQUFXLENBQUM7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7Ozs7SUFDRCwwQ0FBUzs7Ozs7O0lBQVQsVUFBVSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU07UUFDM0IsT0FBTyxzTEFBcUssS0FBSyxvQkFBYSxNQUFNLGtCQUFXLElBQUksc3NDQUF3ckMsQ0FBQztJQUM5NEMsQ0FBQzs7Z0JBN0pGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsK3VDQTJCVDs2QkFDUSxrdUNBdUZSO2lCQUNGOzs7O2dCQXhIUSxZQUFZOzs7MkJBNEhsQixLQUFLOzJCQUNMLEtBQUs7aUNBQ0wsS0FBSztnQ0FDTCxLQUFLO3VCQUNMLEtBQUs7dUNBQ0wsS0FBSzt3Q0FDTCxLQUFLO21DQUNMLEtBQUs7OEJBQ0wsTUFBTTt1Q0FDTixLQUFLO29DQUNMLEtBQUs7MENBQ0wsS0FBSzsrQkFDTCxNQUFNOzZCQUNOLEtBQUs7O0lBd0JSLDZCQUFDO0NBQUEsQUEvSkQsSUErSkM7U0F2Q1ksc0JBQXNCOzs7SUFFakMsMENBQTBCOztJQUMxQiwwQ0FBMEI7O0lBQzFCLGdEQUFnQzs7SUFDaEMsK0NBQXVCOztJQUN2QixzQ0FBYzs7SUFDZCxzREFBc0M7O0lBQ3RDLHVEQUF1Qzs7SUFDdkMsa0RBQWtDOztJQUNsQyw2Q0FBZ0Q7O0lBQ2hELHNEQUFzQzs7SUFDdEMsbURBQW1DOztJQUNuQyx5REFBeUM7O0lBQ3pDLDhDQUFpRDs7SUFDakQsNENBQTZCOztJQUM3QiwyQ0FBa0I7O0lBSU4sMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1lbW9qLWZvb3RlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJuZ3gtZW1vai1mb290ZXJcIlxyXG4gICAgICBbY2xhc3MudW52ZWFsXT1cImhpZGVGb290ZXJcIlxyXG4gICAgICBbY2xhc3MucmV2ZWFsXT1cIiFoaWRlRm9vdGVyXCJcclxuICAgICAgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogZm9vdGVyQkcsXHJcbiAgICAgICAgICAgICAgICAgICdjb2xvcic6IGZvb3RlckZHLFxyXG4gICAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogZm9vdGVyRm9udFNpemUsXHJcbiAgICAgICAgICAgICAgICAgICdwYWRkaW5nJzogZm9vdGVyUGFkZGluZy55KycgJytmb290ZXJQYWRkaW5nLnh9XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZW1vcy1idG5cIlxyXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGUgb2YgZW1vc1wiIFtpbm5lckhUTUxdPVwic2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGUuaWNvblswXSgoKGUubmFtZSA9PSBhY3RpdmVFbW8gKSA/IG1hcnRDYXRlZ29yeUNvbG9yQWN0aXZlIDogbWFydENhdGVnb3J5Q29sb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJ0Q2F0ZWdvcnlGb250U2l6ZSwgbWFydENhdGVnb3J5Rm9udFNpemUpKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZW1vcy1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkZWxldGVDaGFyKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBtYXJ0Q2F0ZWdvcnlDb2xvcn1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwic2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsQnV0dG9uKG1hcnRDYXRlZ29yeUNvbG9yLCBtYXJ0Q2F0ZWdvcnlGb250U2l6ZSwgbWFydENhdGVnb3J5Rm9udFNpemUpKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgIC5uZ3gtZW1vai1mb290ZXJcclxuICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgfVxyXG4gIC5uZ3gtZW1vai1mb290ZXIgLmxcclxuICB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICB9XHJcbiAgLm5neC1lbW9qLWZvb3RlciAuclxyXG4gIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gIH1cclxuXHJcbiAgLmVtb3MtYnRuXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwJSAxMHB4IDEwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG5cclxuICAucmV2ZWFsXHJcbiAge1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJldmVhbDtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnVudmVhbFxyXG4gIHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiB1bnZlYWw7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC41cztcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyB1bnZlYWxcclxuICB7XHJcbiAgICBmcm9tXHJcbiAgICB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0b1xyXG4gICAge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBib3R0b206IC0xNTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgcmV2ZWFsXHJcbiAge1xyXG5cclxuICAgIGZyb21cclxuICAgIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgYm90dG9tOiAtMTUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgdG9cclxuICAgIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBOZ3hFbW9qRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0ICB7XHJcblxyXG4gIEBJbnB1dCgpIGZvb3RlckJHOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9vdGVyRkc6IHN0cmluZztcclxuICBASW5wdXQoKSBmb290ZXJGb250U2l6ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvb3RlclBhZGRpbmc7XHJcbiAgQElucHV0KCkgZW1vcztcclxuICBASW5wdXQoKSBhY3RpdmVJbmRpY2F0b3JDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGFjdGl2ZUluZGljYXRvckhlaWdodDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRlZmF1bHRBY3RpdmVFbW86IHN0cmluZztcclxuICBAT3V0cHV0KCkgb25lbW9jaGFuZ2U6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBtYXJ0Q2F0ZWdvcnlGb250U2l6ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1hcnRDYXRlZ29yeUNvbG9yOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWFydENhdGVnb3J5Q29sb3JBY3RpdmU6IHN0cmluZztcclxuICBAT3V0cHV0KCkgb25jaGFyZGVsZXRlOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQElucHV0KCkgaGlkZUZvb3RlcjogYm9vbGVhbjtcclxuICBhY3RpdmVFbW86IHN0cmluZztcclxuXHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVFbW8gPSB0aGlzLmRlZmF1bHRBY3RpdmVFbW87XHJcbiAgfVxyXG4gIG9uRW1vU2VsZWN0KGUpIHtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZUVtbyA9IGUubmFtZTtcclxuICAgIHRoaXMub25lbW9jaGFuZ2UuZW1pdCh7bmFtZTogZS5uYW1lfSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVDaGFyKGUpIHtcclxuICAgICAgdGhpcy5vbmNoYXJkZWxldGUuZW1pdCh7ZGVsZXRlQ2hhcjogdHJ1ZX0pO1xyXG4gIH1cclxuICBkZWxCdXR0b24oZmlsbCwgd2lkdGgsIGhlaWdodCl7XHJcbiAgICByZXR1cm4gYDxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA1MTEuMzc0IDUxMS4zNzRcIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgZmlsbD1cIiR7ZmlsbH1cIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjM3NCA1MTEuMzc0XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48Zz48Zz48cGF0aCBkPVwiTTQzMy4xMzQsNDcuNjg3aC0yMTMuMjhjLTM3LjEwOSwwLjIxLTcyLjIzNSwxNi43NzgtOTYsNDUuMjhsLTEuNDQsMS42bC0xMTUuMiwxNDAuOGMtOS42MTksMTEuNzc5LTkuNjE5LDI4LjcwMSwwLDQwLjQ4bDExNS4zNiwxNDEuOTJjMjMuNiwyOC43OTQsNTguNzcxLDQ1LjYxOCw5Niw0NS45MmgyMTYuMTZjNDEuNDE0LTIuNTM2LDc0LjM2My0zNS42OTEsNzYuNjQtNzcuMTJjMC0wLjk2LDAtMS45MiwwLTIuODh2LTI1Ny4xMkM1MTAuNzgxLDgzLjQ5OSw0NzYuMTk2LDQ4LjYzMSw0MzMuMTM0LDQ3LjY4N3ogTTQ0Ny4zNzQsMzgyLjU2N2MtMC40MjgsOS41ODMtOC4zMjcsMTcuMTMtMTcuOTIsMTcuMTJoLTIwOGMtMTkuNjYyLDAuNzc5LTM4LjQ5LTcuOTc5LTUwLjU2LTIzLjUybC05OC4yNC0xMjAuNDhsOTcuOTItMTE5LjY4YzExLjg1MS0xNS43MjcsMzAuNTUzLTI0Ljc4LDUwLjI0LTI0LjMyaDIwOS42YzExLjA0LDAsMTYsNi40LDE2Ljk2LDE2VjM4Mi41Njd6XCIvPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cIk0zNzMuOTM0LDI5Ni45NjdsLTExLjUyLTExLjUyYy0xMi41MDQtMTIuNTA0LTMyLjc3Ni0xMi41MDQtNDUuMjgsMHMtMTIuNTA0LDMyLjc3NiwwLDQ1LjI4bDExLjUyLDExLjUyYzEyLjUwNCwxMi41MDQsMzIuNzc2LDEyLjUwNCw0NS4yOCwwUzM4Ni40MzgsMzA5LjQ3MSwzNzMuOTM0LDI5Ni45Njd6XCIvPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cIk0zNzMuOTM0LDE2OS4xMjdjLTEyLjUwNC0xMi41MDQtMzIuNzc2LTEyLjUwNC00NS4yOCwwaDAuMTZsLTQxLjQ0LDQxLjI4bC00MS40NC00MS40NGMtMTIuNTA0LTEyLjUwNC0zMi43NzYtMTIuNTA0LTQ1LjI4LDBzLTEyLjUwNCwzMi43NzYsMCw0NS4yOGw0MS40NCw0MS40NGwtNDEuNDQsNDEuNDRjLTEyLjUwNCwxMi41MDQtMTIuNTA0LDMyLjc3NiwwLDQ1LjI4czMyLjc3NiwxMi41MDQsNDUuMjgsMGwxMjgtMTI4QzM4Ni40MzgsMjAxLjkwMywzODYuNDM4LDE4MS42MzEsMzczLjkzNCwxNjkuMTI3elwiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPmA7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=