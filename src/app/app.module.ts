import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MainComponent, NotesComponent } from './containers';
import { HeaderComponent, NoteCardComponent, NoteCreatorComponent, ColorPickerComponent } from './ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    NoteCardComponent,
    NotesComponent,
    NoteCreatorComponent,
    ColorPickerComponent,
    AppComponent
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
