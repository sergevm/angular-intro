import { Component } from '@angular/core';
import { Project } from '../models/projects.interface';

@Component({
    selector: 'project-list',
    templateUrl: './projects.main.html',
    styles: []
})
export class ProjectsComponent {
    projects: Project[] = [{name: 'Super Fun Project'}, {name: 'Lousy Project'}];
}