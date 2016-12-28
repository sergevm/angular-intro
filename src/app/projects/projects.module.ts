import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './project-list.component';
import { ProjectNewComponent } from './project-new.component';
import { ProjectDetailComponent } from './project-detail.component';

import { ProjectDataService } from './../services/project-data-service';
import { CustomerDataService } from './../services/customer-data-service'; 

let moduleRoutes: Routes = [
    {path: 'projects/create', component: ProjectNewComponent, data: {title: 'Create Project'}},
    {path: 'projects/:id', component: ProjectDetailComponent, data: {title: 'Project Detail'}},
];

@NgModule({
    declarations: [
        ProjectsComponent, 
        ProjectDetailComponent,
        ProjectNewComponent
    ],
    imports: [
        BrowserModule, 
        FormsModule,
        RouterModule.forChild(moduleRoutes)
    ],
    providers: [ProjectDataService, CustomerDataService],
    exports: []
})
export class ProjectsModule {
}