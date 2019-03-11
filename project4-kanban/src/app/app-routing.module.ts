import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { CreateDocumentComponent } from './create-document/create-document.component';

const routes: Routes = [
  { path: 'projectDetail/:projectName', component: ProjectDetailComponent },
  { path: 'projectList', component: ProjectListComponent },
  { path: 'newProject', component: NewProjectComponent },
  { path: 'kanban', component: KanbanBoardComponent },
  { path: 'createDocument', component: CreateDocumentComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
