import { Component, Input, Output, EventEmitter, OnInit, OnChanges, DoCheck, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Component({
  selector: 'ngx-emoj-category',
  template: `
    <button (click)="selectCategory($event)" class="ngx-emoji-category-btn"
    [ngStyle]="{'color': categoryIconColor,
                'border-width': activeIndicatorHeight,
                'border-color': (active) ? activeIndicatorColor : 'transparent'}"
                [innerHTML]=safeSvgComponent>
    </button>
  `,
  styles: [`
  .ngx-emoji-category-btn
  {
    background: transparent;
    padding: 15px 10% 10px 10%;
    border: none;
    outline: none;
    border-bottom: 2px solid transparent;
  }
  `]
})
export class NgxEmojCategoryComponent implements OnInit, OnChanges {

  @Input() categoryIcon: any;
  @Input() categoryName: string;
  @Input() categoryIconColor: string;
  @Input() activeIndicatorColor: string;
  @Input() activeIndicatorHeight: string;
  @Input() martCategoryFontSize: string;
  @Input() martCategoryColor: string;
  @Input() martCategoryColorActive: string;
  @Input() active: boolean;

  @Output() onselect = new EventEmitter;

  safeSvgComponent: SafeHtml;

  constructor(
      public sanitizer: DomSanitizer,
      private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.setInnerHtml();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.active.previousValue !== changes.active.currentValue) {
        this.setInnerHtml();
        this.cdRef.markForCheck();
    }
  }

  selectCategory($event) {
    $event.stopPropagation();
    this.onselect.emit({name: this.categoryName, icon: this.categoryIcon});
  }

  private setInnerHtml() {
    this.safeSvgComponent = this.sanitizer.bypassSecurityTrustHtml(
        this.categoryIcon(
            ((this.active) ? this.martCategoryColorActive : this.martCategoryColor),
            this.martCategoryFontSize,
            this.martCategoryFontSize));
  }
}
