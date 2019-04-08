import { EventEmitter, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
export declare class NgxEmojCategoryComponent implements OnInit, OnChanges {
    sanitizer: DomSanitizer;
    private cdRef;
    categoryIcon: any;
    categoryName: string;
    categoryIconColor: string;
    activeIndicatorColor: string;
    activeIndicatorHeight: string;
    martCategoryFontSize: string;
    martCategoryColor: string;
    martCategoryColorActive: string;
    active: boolean;
    onselect: EventEmitter<{}>;
    safeSvgComponent: SafeHtml;
    constructor(sanitizer: DomSanitizer, cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    selectCategory($event: any): void;
    private setInnerHtml;
}
