import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OpenmodalComponent } from './openmodal/openmodal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProjectComponent } from './project/project.component';

import * as Parse from 'parse';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    OpenmodalComponent,
    ProjectComponent,
    ProjectDetailComponent,
    ProjectListComponent,
    NewProjectComponent,
    CreateDocumentComponent,
    KanbanBoardComponent
  ],
  imports: [BrowserModule, FormsModule, DragDropModule, ModalModule.forRoot(), AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    Parse.initialize(
      'mIFzAteyXuRylG8nG4XBrjiPSQSzHSTocTLS7pak',
      '7GA9tAdaj9Gq02DGaFylzIuzTSSV7QLHTRTczpPN'
    );
    // Parse.serverURL =
    //   'https://pg-app-yqlwblbs9ov58igdk7l990rj9due2y.scalabl.cloud/1/';
    Parse.serverURL = 'http://localhost:1337/1';
  }
}
