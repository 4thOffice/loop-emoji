/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEmojComponent } from './ngx-emoj.component';
import { NgxEmojHeaderComponent } from './components/header.component';
import { NgxEmojFooterComponent } from './components/footer.component';
import { NgxEmojCategoryComponent } from './components/category.component';
import { NgxEmojCategoryContentComponent } from './components/category-content.component';
export class NgxEmojModule {
}
NgxEmojModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgxEmojComponent,
                    NgxEmojHeaderComponent,
                    NgxEmojCategoryComponent,
                    NgxEmojCategoryContentComponent,
                    NgxEmojFooterComponent
                ],
                imports: [
                    CommonModule
                ],
                exports: [NgxEmojComponent,
                    NgxEmojHeaderComponent,
                    NgxEmojCategoryComponent,
                    NgxEmojCategoryContentComponent,
                    NgxEmojFooterComponent],
                providers: [],
                entryComponents: [NgxEmojComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVtb2oubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbG9vcC1lbW9qaS8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZW1vai5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzNFLE9BQU8sRUFBQywrQkFBK0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBcUJ6RixNQUFNLE9BQU8sYUFBYTs7O1lBbkJ6QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0Qix3QkFBd0I7b0JBQ3hCLCtCQUErQjtvQkFDL0Isc0JBQXNCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0I7b0JBQ3hCLHNCQUFzQjtvQkFDdEIsd0JBQXdCO29CQUN4QiwrQkFBK0I7b0JBQy9CLHNCQUFzQixDQUFDO2dCQUN2QixTQUFTLEVBQUUsRUFBRTtnQkFDYixlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5cbmltcG9ydCB7IE5neEVtb2pDb21wb25lbnQgfSBmcm9tICcuL25neC1lbW9qLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hFbW9qSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4RW1vakZvb3RlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEVtb2pDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXRlZ29yeS5jb21wb25lbnQnO1xuaW1wb3J0IHtOZ3hFbW9qQ2F0ZWdvcnlDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhdGVnb3J5LWNvbnRlbnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmd4RW1vakNvbXBvbmVudCxcbiAgICBOZ3hFbW9qSGVhZGVyQ29tcG9uZW50LFxuICAgIE5neEVtb2pDYXRlZ29yeUNvbXBvbmVudCxcbiAgICBOZ3hFbW9qQ2F0ZWdvcnlDb250ZW50Q29tcG9uZW50LFxuICAgIE5neEVtb2pGb290ZXJDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbTmd4RW1vakNvbXBvbmVudCxcbiAgICBOZ3hFbW9qSGVhZGVyQ29tcG9uZW50LFxuICAgIE5neEVtb2pDYXRlZ29yeUNvbXBvbmVudCxcbiAgICBOZ3hFbW9qQ2F0ZWdvcnlDb250ZW50Q29tcG9uZW50LFxuICAgIE5neEVtb2pGb290ZXJDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgZW50cnlDb21wb25lbnRzOiBbTmd4RW1vakNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RW1vak1vZHVsZSB7IH1cbiJdfQ==