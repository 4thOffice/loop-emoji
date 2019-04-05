import { OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class NgxEmojFooterComponent implements OnInit {
    sanitizer: DomSanitizer;
    footerBG: string;
    footerFG: string;
    footerFontSize: string;
    footerPadding: any;
    emos: any;
    activeIndicatorColor: string;
    activeIndicatorHeight: string;
    defaultActiveEmo: string;
    onemochange: any;
    martCategoryFontSize: string;
    martCategoryColor: string;
    martCategoryColorActive: string;
    onchardelete: any;
    hideFooter: boolean;
    activeEmo: string;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    onEmoSelect(e: any): void;
    deleteChar(e: any): void;
    delButton(fill: any, width: any, height: any): string;
}
