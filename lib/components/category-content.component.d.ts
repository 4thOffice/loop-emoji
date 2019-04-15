import { EventEmitter, ElementRef } from '@angular/core';
export declare class NgxEmojCategoryContentComponent {
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
    emojiContainer: ElementRef;
    searchSet: any;
    recentEmosForSearch: any;
    constructor();
    search(e: any): void;
    pickEmoji(emoji: any): void;
}
