import { OnInit } from '@angular/core';
export declare class NgxEmojHeaderComponent implements OnInit {
    headerBG: string;
    headerFG: string;
    headerFontSize: string;
    headerPadding: any;
    emojiCategories: any;
    activeIndicatorColor: string;
    activeIndicatorHeight: string;
    defaultActiveCategory: string;
    martCategoryFontSize: string;
    martCategoryColor: string;
    martCategoryColorActive: string;
    activeCategory: string;
    oncategorychange: any;
    constructor();
    ngOnInit(): void;
    onCategorySelect(e: any): void;
}
