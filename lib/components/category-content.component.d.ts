import { EventEmitter, ElementRef, Renderer2, AfterViewInit, OnChanges } from '@angular/core';
export declare class NgxEmojCategoryContentComponent implements AfterViewInit, OnChanges {
    private rd;
    categoryName: string;
    categoryEmojiSet: any;
    activeIndex: number;
    emojiBtnPadding: any;
    emojiFontSize: string;
    searchEmojiPlaceholderText: string;
    searchBoxStyle: any;
    emojiNotFoundText: string;
    martEmojiNotFoundFG: string;
    onpickemoji: EventEmitter<{}>;
    oncontentscroll: any;
    oncontentSwipe: any;
    notFound: boolean;
    initialEmoj: boolean;
    emojiContainer: ElementRef;
    searchSet: any;
    recentEmosForSearch: any;
    constructor(rd: Renderer2);
    ngOnChanges(): void;
    search(e: any): void;
    ngAfterViewInit(): void;
    pickEmoji(emoji: any): void;
    private focusSearch;
}
