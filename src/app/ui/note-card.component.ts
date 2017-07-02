import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-card',
  styleUrls: ['./note-card.component.css'],
  templateUrl: './note-card.component.html'
})
export class NoteCardComponent {
  @Input() note = {};
  @Output() checked = new EventEmitter();

  showCheck = false;

  toggleCheck() {
    this.showCheck = !this.showCheck;
  }

  onChecked() {
    this.checked.next(this.note);
  }
}
