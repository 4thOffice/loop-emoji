import { EventEmitter, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
export declare class NgxEmojCategoryComponent implements OnInit {
    sanitizer: DomSanitizer;
    categoryIcon: any;
    categoryName: string;
    categoryIconColor: string;
    active: boolean;
    activeIndicatorColor: string;
    activeIndicatorHeight: string;
    martCategoryFontSize: string;
    martCategoryColor: string;
    martCategoryColorActive: string;
    onselect: EventEmitter<{}>;
    safeSvgComponent: SafeHtml;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    selectCategory(): void;
}
