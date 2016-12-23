import { Injectable } from '@angular/core';
import { Project } from './../models/projects.interface';

@Injectable()
export class ProjectDataService {

    private projects: Project[] = [
        {id: 1, name: 'Mandahrin'},
        {id: 2, name: 'Napoleon'}
    ];

    list():Promise<Project[]> { return Promise.resolve(this.projects); }
    get(id: number): Promise<Project> { return Promise.resolve(this.projects.find((project) => project.id === id))}
}