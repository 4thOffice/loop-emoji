import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  Renderer2,
  AfterViewInit
} from '@angular/core';
import {
  EMOJIS
} from '../misc/emojis.data';

@Component({
  selector: 'ngx-emoj-category-content',
  template: `
  <input *ngIf="activeIndex === 0"  type="text" (keyup)="search($event)" placeholder="{{ searchEmojiPlaceholderText }}"
  class="ngx-emoji-search" [ngStyle]="{'color': searchBoxStyle.FGcolor,
                                       'background': searchBoxStyle.BGcolor,
                                       'border-radius': searchBoxStyle.borderRadius,
                                       'border-color': searchBoxStyle.borderColor}"/>
                                       <div class="ngx-emoji-not-found" *ngIf="activeIndex === 0 && notFound == true"
                                       [ngStyle]="{
                                        'color': martEmojiNotFoundFG
                                        }">
                                        {{ emojiNotFoundText }}
                                       </div>
  <div class="ngx-emoji-category-content" [ngStyle]="{'padding': '0px 5px 5px 15px'}"
                                           #emojiContainer>

      <div class="emoji-btn-container"
        *ngFor="let emo of categoryEmojiSet" [ngStyle]="{'height': emojiBtnPadding.y,
                                                         'width': emojiBtnPadding.x   }">
          <button (click)="pickEmoji(emo)" class="ngx-emoji-emoj-btn"
          [ngStyle]="{'font-size': emojiFontSize}">
      {{ emo[0] }}
    </button>
      </div>
  </div>
  `,
  styles: [`


  .ngx-emoji-not-found
  {
    display: table;
    margin: 60px auto;
    font-size: 15px;
    font-family: sans-serif;
  }

  .ngx-emoji-search
  {
    width: 87%;
    display: table;
    border: 1px solid;
    padding: 5px 10px;
    height: 30px;
    font-family: sans-serif;
    margin: 15px auto 10px auto;
    outline: none;
  }

  .ngx-emoji-category-content
  {
    overflow-y: scroll;
    height: 80%;
    width: 105% !important;
    display: flex;
    flex-wrap: wrap;
    text-align: left;
    align-content: flex-start;
    justify-content: flex-start;
  }

  .emoji-btn-container
  {
    display: flex;
    overflow: hidden;
  }
  .ngx-emoji-emoj-btn
  {
    background: transparent;
    margin: auto;
    border: none;
    outline: none;
    cursor: pointer;
  }
  `]
})
export class NgxEmojCategoryContentComponent implements AfterViewInit {

  @Input() categoryName: string;
  @Input() categoryEmojiSet: any;
  @Input() activeIndex: number;
  @Input() emojiBtnPadding: any;
  @Input() emojiFontSize: string;
  @Input() searchEmojiPlaceholderText: string;
  @Input() searchBoxStyle: any;
  @Input() emojiNotFoundText: string;
  @Input() martEmojiNotFoundFG: string;

  @Output() onpickemoji = new EventEmitter;
  @Output() oncontentscroll: any = new EventEmitter;
  @Output() oncontentSwipe: any = new EventEmitter;

  notFound: boolean;
  initialEmoj: boolean;

  @ViewChild('emojiContainer') emojiContainer: ElementRef;
  // @ViewChild('swipePane') swipePane: ElementRef;

  searchSet: any = [];
  recentEmosForSearch: any = [];

  constructor(private rd: Renderer2) {
    this.initialEmoj = false;
    this.notFound = false;
  }


  search(e) {
    if (!this.initialEmoj) {
      // save the recent emojs
      this.recentEmosForSearch = this.categoryEmojiSet;
      let searchSet = [];
      for (let i = 2; i < EMOJIS.length; i++) {
        searchSet = searchSet.concat(EMOJIS[i].emojis);
      }
      this.searchSet = searchSet;
      this.initialEmoj = true;
    }
    const query = e.target.value.toLowerCase();

    if (query && query.trim() !== '') {
      this.categoryEmojiSet = this.searchSet.filter(item => {
        if (item[1].toLowerCase().indexOf(query) > -1) {
          return item;
        }
      });

    } else {
      this.categoryEmojiSet = this.recentEmosForSearch;
    }
    if (this.categoryEmojiSet.length === 0) {
      this.notFound = true;
    } else {
      this.notFound = false;
    }
  }


  ngAfterViewInit() {
    // listen for scroll event
    this.rd.listen(this.emojiContainer.nativeElement, 'scroll', (e) => {
      this.oncontentscroll.emit({
        scrollTop: this.emojiContainer.nativeElement.scrollTop,
        scrollHeight: this.emojiContainer.nativeElement.scrollHeight
      });
    });
  }

  pickEmoji(emoji) {
    this.onpickemoji.emit({
      emoji: emoji
    });
  }
}
