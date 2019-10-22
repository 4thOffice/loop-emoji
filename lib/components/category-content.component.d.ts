import { EventEmitter, ElementRef, OnChanges, Renderer2 } from '@angular/core';
export declare class NgxEmojCategoryContentComponent implements OnChanges {
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
    martEmojiContentPaddingLeft: string;
    onpickemoji: EventEmitter<{}>;
    oncontentscroll: any;
    oncontentSwipe: any;
    notFound: boolean;
    initialEmoj: boolean;
    searchValue: string;
    emojiContainer: ElementRef;
    searchInput: ElementRef;
    searchSet: any;
    recentEmosForSearch: any;
    constructor(rd: Renderer2);
    ngOnChanges(): void;
    search(e: any): void;
    pickEmoji(emoji: any): void;
    private focusSearch;
}
