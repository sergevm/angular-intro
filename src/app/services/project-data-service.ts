import { Project } from './../models/projects.interface';

export class ProjectDataService {

    private projects: Project[] = [
        {id: 1, name: 'Mandahrin'},
        {id: 2, name: 'Napoleon'}
    ];

    list():Promise<Project[]> { return Promise.resolve(this.projects); }
    get(id: number): Promise<Project> { return Promise.resolve(this.projects.find((project) => project.id === id))}
}