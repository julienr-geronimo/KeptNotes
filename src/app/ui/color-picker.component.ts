import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  styleUrls: ['./color-picker.component.css'],
  templateUrl: './color-picker.component.html'
})
export class ColorPickerComponent {
  @Input() colors: Array<string> = [];
  @Output() selected = new EventEmitter<string>();
  isSelectorVisible = false;

  showSelector(value: boolean) {
    this.isSelectorVisible = value;
  }

  selectColor(color: string) {
    this.showSelector(false);
    this.selected.next(color);
  }
}
