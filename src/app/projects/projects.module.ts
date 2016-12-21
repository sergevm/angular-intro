import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ProjectDetailComponent } from './project-detail.component';

import { ProjectDataService} from './../services/project-data-service';

let moduleRoutes: Routes = [
    {path: 'projects/project/:id', component: ProjectDetailComponent}
];

@NgModule({
    declarations: [
        ProjectsComponent, 
        ProjectDetailComponent
    ],
    imports: [
        BrowserModule, 
        RouterModule.forChild(moduleRoutes)
    ],
    providers: [ProjectDataService],
    exports: []
})
export class ProjectsModule {
}