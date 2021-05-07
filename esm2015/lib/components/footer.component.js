/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class NgxEmojFooterComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.onemochange = new EventEmitter();
        this.onchardelete = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.activeEmo = this.defaultActiveEmo;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onEmoSelect(e) {
        this.activeEmo = e.name;
        this.onemochange.emit({ name: e.name });
    }
    /**
     * @param {?} e
     * @return {?}
     */
    deleteChar(e) {
        this.onchardelete.emit({ deleteChar: true });
    }
    /**
     * @param {?} fill
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    delButton(fill, width, height) {
        return `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.374 511.374" width="${width}" height="${height}" fill="${fill}" style="enable-background:new 0 0 511.374 511.374" xml:space="preserve"><g><g><path d="M433.134,47.687h-213.28c-37.109,0.21-72.235,16.778-96,45.28l-1.44,1.6l-115.2,140.8c-9.619,11.779-9.619,28.701,0,40.48l115.36,141.92c23.6,28.794,58.771,45.618,96,45.92h216.16c41.414-2.536,74.363-35.691,76.64-77.12c0-0.96,0-1.92,0-2.88v-257.12C510.781,83.499,476.196,48.631,433.134,47.687z M447.374,382.567c-0.428,9.583-8.327,17.13-17.92,17.12h-208c-19.662,0.779-38.49-7.979-50.56-23.52l-98.24-120.48l97.92-119.68c11.851-15.727,30.553-24.78,50.24-24.32h209.6c11.04,0,16,6.4,16.96,16V382.567z"/></g></g><g><g><path d="M373.934,296.967l-11.52-11.52c-12.504-12.504-32.776-12.504-45.28,0s-12.504,32.776,0,45.28l11.52,11.52c12.504,12.504,32.776,12.504,45.28,0S386.438,309.471,373.934,296.967z"/></g></g><g><g><path d="M373.934,169.127c-12.504-12.504-32.776-12.504-45.28,0h0.16l-41.44,41.28l-41.44-41.44c-12.504-12.504-32.776-12.504-45.28,0s-12.504,32.776,0,45.28l41.44,41.44l-41.44,41.44c-12.504,12.504-12.504,32.776,0,45.28s32.776,12.504,45.28,0l128-128C386.438,201.903,386.438,181.631,373.934,169.127z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;
    }
}
NgxEmojFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-emoj-footer',
                template: `
    <div
      class="ngx-emoj-footer"
      [class.unveal]="hideFooter"
      [class.reveal]="!hideFooter"
      [ngStyle]="{'background-color': footerBG,
                  'color': footerFG,
                  'font-size': footerFontSize,
                  'padding': footerPadding.y+' '+footerPadding.x}">

                  <div class="l">
                        <button
                        class="emos-btn"
                *ngFor="let e of emos" [innerHTML]="sanitizer.bypassSecurityTrustHtml(
                          e.icon[0](((e.name == activeEmo ) ? martCategoryColorActive : martCategoryColor),
                                       martCategoryFontSize, martCategoryFontSize))">
                        </button>
                  </div>
                  <div class="r">
                      <button class="emos-btn"
                          (click)="deleteChar($event)"
                          [ngStyle]="{'color': martCategoryColor}"
                          [innerHTML]="sanitizer.bypassSecurityTrustHtml(
                            delButton(martCategoryColor, martCategoryFontSize, martCategoryFontSize))">
                      </button>
                  </div>
    </div>
  `,
                styles: [`
   .ngx-emoj-footer
  {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    left: 0;

  }
  .ngx-emoj-footer .l
  {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
  }
  .ngx-emoj-footer .r
  {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
  }

  .emos-btn
  {
    background: transparent;
    padding: 15px 10% 10px 10%;
    border: none;
    outline: none;
    padding-left: 10%;
    padding-right: 10%;
    border: none;
  }


  .reveal
  {
    animation-name: reveal;
    animation-duration: .3s;
    animation-fill-mode: forwards;
  }


  .unveal
  {
    animation-name: unveal;
    animation-duration: .5s;
    animation-fill-mode: forwards;
  }

  @keyframes unveal
  {
    from
    {
      opacity: 1;
      bottom: 0;
    }

    to
    {
      opacity: 0;
      bottom: -150px;
    }
  }

  @keyframes reveal
  {

    from
    {
      opacity: 0;
      bottom: -150px;
    }

    to
    {
      opacity: 1;
      bottom: 0;
    }
  }

  `]
            }] }
];
/** @nocollapse */
NgxEmojFooterComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xvb3AtZW1vamkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUcsTUFBTSwyQkFBMkIsQ0FBQztBQTBIMUQsTUFBTSxPQUFPLHNCQUFzQjs7OztJQW9CakMsWUFBbUIsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztRQVZoQyxnQkFBVyxHQUFRLElBQUksWUFBWSxFQUFFLENBQUM7UUFJdEMsaUJBQVksR0FBUSxJQUFJLFlBQVksRUFBRSxDQUFDO0lBT2pELENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFDRCxXQUFXLENBQUMsQ0FBQztRQUVYLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxDQUFDO1FBQ1IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7O0lBQ0QsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTTtRQUMzQixPQUFPLHFLQUFxSyxLQUFLLGFBQWEsTUFBTSxXQUFXLElBQUksd3JDQUF3ckMsQ0FBQztJQUM5NEMsQ0FBQzs7O1lBN0pGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTJCVDt5QkFDUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUZSO2FBQ0Y7Ozs7WUF4SFEsWUFBWTs7O3VCQTRIbEIsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLEtBQUs7NEJBQ0wsS0FBSzttQkFDTCxLQUFLO21DQUNMLEtBQUs7b0NBQ0wsS0FBSzsrQkFDTCxLQUFLOzBCQUNMLE1BQU07bUNBQ04sS0FBSztnQ0FDTCxLQUFLO3NDQUNMLEtBQUs7MkJBQ0wsTUFBTTt5QkFDTixLQUFLOzs7O0lBYk4sMENBQTBCOztJQUMxQiwwQ0FBMEI7O0lBQzFCLGdEQUFnQzs7SUFDaEMsK0NBQXVCOztJQUN2QixzQ0FBYzs7SUFDZCxzREFBc0M7O0lBQ3RDLHVEQUF1Qzs7SUFDdkMsa0RBQWtDOztJQUNsQyw2Q0FBZ0Q7O0lBQ2hELHNEQUFzQzs7SUFDdEMsbURBQW1DOztJQUNuQyx5REFBeUM7O0lBQ3pDLDhDQUFpRDs7SUFDakQsNENBQTZCOztJQUM3QiwyQ0FBa0I7O0lBSU4sMkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyICB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZW1vai1mb290ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwibmd4LWVtb2otZm9vdGVyXCJcbiAgICAgIFtjbGFzcy51bnZlYWxdPVwiaGlkZUZvb3RlclwiXG4gICAgICBbY2xhc3MucmV2ZWFsXT1cIiFoaWRlRm9vdGVyXCJcbiAgICAgIFtuZ1N0eWxlXT1cInsnYmFja2dyb3VuZC1jb2xvcic6IGZvb3RlckJHLFxuICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogZm9vdGVyRkcsXG4gICAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogZm9vdGVyRm9udFNpemUsXG4gICAgICAgICAgICAgICAgICAncGFkZGluZyc6IGZvb3RlclBhZGRpbmcueSsnICcrZm9vdGVyUGFkZGluZy54fVwiPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJlbW9zLWJ0blwiXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGUgb2YgZW1vc1wiIFtpbm5lckhUTUxdPVwic2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlLmljb25bMF0oKChlLm5hbWUgPT0gYWN0aXZlRW1vICkgPyBtYXJ0Q2F0ZWdvcnlDb2xvckFjdGl2ZSA6IG1hcnRDYXRlZ29yeUNvbG9yKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcnRDYXRlZ29yeUZvbnRTaXplLCBtYXJ0Q2F0ZWdvcnlGb250U2l6ZSkpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZW1vcy1idG5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGVsZXRlQ2hhcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IG1hcnRDYXRlZ29yeUNvbG9yfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwic2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbEJ1dHRvbihtYXJ0Q2F0ZWdvcnlDb2xvciwgbWFydENhdGVnb3J5Rm9udFNpemUsIG1hcnRDYXRlZ29yeUZvbnRTaXplKSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAubmd4LWVtb2otZm9vdGVyXG4gIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuXG4gIH1cbiAgLm5neC1lbW9qLWZvb3RlciAubFxuICB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA4NSU7XG4gIH1cbiAgLm5neC1lbW9qLWZvb3RlciAuclxuICB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxNSU7XG4gIH1cblxuICAuZW1vcy1idG5cbiAge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDE1cHggMTAlIDEwcHggMTAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuXG4gIC5yZXZlYWxcbiAge1xuICAgIGFuaW1hdGlvbi1uYW1lOiByZXZlYWw7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuM3M7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIH1cblxuXG4gIC51bnZlYWxcbiAge1xuICAgIGFuaW1hdGlvbi1uYW1lOiB1bnZlYWw7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gIH1cblxuICBAa2V5ZnJhbWVzIHVudmVhbFxuICB7XG4gICAgZnJvbVxuICAgIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuXG4gICAgdG9cbiAgICB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgYm90dG9tOiAtMTUwcHg7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyByZXZlYWxcbiAge1xuXG4gICAgZnJvbVxuICAgIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBib3R0b206IC0xNTBweDtcbiAgICB9XG5cbiAgICB0b1xuICAgIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgYF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ3hFbW9qRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0ICB7XG5cbiAgQElucHV0KCkgZm9vdGVyQkc6IHN0cmluZztcbiAgQElucHV0KCkgZm9vdGVyRkc6IHN0cmluZztcbiAgQElucHV0KCkgZm9vdGVyRm9udFNpemU6IHN0cmluZztcbiAgQElucHV0KCkgZm9vdGVyUGFkZGluZztcbiAgQElucHV0KCkgZW1vcztcbiAgQElucHV0KCkgYWN0aXZlSW5kaWNhdG9yQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgYWN0aXZlSW5kaWNhdG9ySGVpZ2h0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRlZmF1bHRBY3RpdmVFbW86IHN0cmluZztcbiAgQE91dHB1dCgpIG9uZW1vY2hhbmdlOiBhbnkgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIG1hcnRDYXRlZ29yeUZvbnRTaXplOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1hcnRDYXRlZ29yeUNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1hcnRDYXRlZ29yeUNvbG9yQWN0aXZlOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBvbmNoYXJkZWxldGU6IGFueSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgaGlkZUZvb3RlcjogYm9vbGVhbjtcbiAgYWN0aXZlRW1vOiBzdHJpbmc7XG5cblxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVFbW8gPSB0aGlzLmRlZmF1bHRBY3RpdmVFbW87XG4gIH1cbiAgb25FbW9TZWxlY3QoZSkge1xuXG4gICAgdGhpcy5hY3RpdmVFbW8gPSBlLm5hbWU7XG4gICAgdGhpcy5vbmVtb2NoYW5nZS5lbWl0KHtuYW1lOiBlLm5hbWV9KTtcbiAgfVxuXG4gIGRlbGV0ZUNoYXIoZSkge1xuICAgICAgdGhpcy5vbmNoYXJkZWxldGUuZW1pdCh7ZGVsZXRlQ2hhcjogdHJ1ZX0pO1xuICB9XG4gIGRlbEJ1dHRvbihmaWxsLCB3aWR0aCwgaGVpZ2h0KXtcbiAgICByZXR1cm4gYDxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA1MTEuMzc0IDUxMS4zNzRcIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgZmlsbD1cIiR7ZmlsbH1cIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTExLjM3NCA1MTEuMzc0XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48Zz48Zz48cGF0aCBkPVwiTTQzMy4xMzQsNDcuNjg3aC0yMTMuMjhjLTM3LjEwOSwwLjIxLTcyLjIzNSwxNi43NzgtOTYsNDUuMjhsLTEuNDQsMS42bC0xMTUuMiwxNDAuOGMtOS42MTksMTEuNzc5LTkuNjE5LDI4LjcwMSwwLDQwLjQ4bDExNS4zNiwxNDEuOTJjMjMuNiwyOC43OTQsNTguNzcxLDQ1LjYxOCw5Niw0NS45MmgyMTYuMTZjNDEuNDE0LTIuNTM2LDc0LjM2My0zNS42OTEsNzYuNjQtNzcuMTJjMC0wLjk2LDAtMS45MiwwLTIuODh2LTI1Ny4xMkM1MTAuNzgxLDgzLjQ5OSw0NzYuMTk2LDQ4LjYzMSw0MzMuMTM0LDQ3LjY4N3ogTTQ0Ny4zNzQsMzgyLjU2N2MtMC40MjgsOS41ODMtOC4zMjcsMTcuMTMtMTcuOTIsMTcuMTJoLTIwOGMtMTkuNjYyLDAuNzc5LTM4LjQ5LTcuOTc5LTUwLjU2LTIzLjUybC05OC4yNC0xMjAuNDhsOTcuOTItMTE5LjY4YzExLjg1MS0xNS43MjcsMzAuNTUzLTI0Ljc4LDUwLjI0LTI0LjMyaDIwOS42YzExLjA0LDAsMTYsNi40LDE2Ljk2LDE2VjM4Mi41Njd6XCIvPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cIk0zNzMuOTM0LDI5Ni45NjdsLTExLjUyLTExLjUyYy0xMi41MDQtMTIuNTA0LTMyLjc3Ni0xMi41MDQtNDUuMjgsMHMtMTIuNTA0LDMyLjc3NiwwLDQ1LjI4bDExLjUyLDExLjUyYzEyLjUwNCwxMi41MDQsMzIuNzc2LDEyLjUwNCw0NS4yOCwwUzM4Ni40MzgsMzA5LjQ3MSwzNzMuOTM0LDI5Ni45Njd6XCIvPjwvZz48L2c+PGc+PGc+PHBhdGggZD1cIk0zNzMuOTM0LDE2OS4xMjdjLTEyLjUwNC0xMi41MDQtMzIuNzc2LTEyLjUwNC00NS4yOCwwaDAuMTZsLTQxLjQ0LDQxLjI4bC00MS40NC00MS40NGMtMTIuNTA0LTEyLjUwNC0zMi43NzYtMTIuNTA0LTQ1LjI4LDBzLTEyLjUwNCwzMi43NzYsMCw0NS4yOGw0MS40NCw0MS40NGwtNDEuNDQsNDEuNDRjLTEyLjUwNCwxMi41MDQtMTIuNTA0LDMyLjc3NiwwLDQ1LjI4czMyLjc3NiwxMi41MDQsNDUuMjgsMGwxMjgtMTI4QzM4Ni40MzgsMjAxLjkwMywzODYuNDM4LDE4MS42MzEsMzczLjkzNCwxNjkuMTI3elwiLz48L2c+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPmA7XG4gIH1cblxufVxuIl19