import { Component } from '@angular/core';

interface Note {
  title: string;
  value: string;
  color: string;
}

@Component({
  selector: 'app-notes',
  styleUrls: ['./notes.component.css'],
  templateUrl: './notes.component.html'
})
export class NotesComponent {
  notes: Note[] = [];

  onNoteChecked(note, i) {
    this.notes.splice(i, 1);
  }

  onCreateNote(note) {
    this.notes.push(note);
  }
}
