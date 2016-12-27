import { Injectable } from '@angular/core';
import { Project } from './../models/projects.interface';
import { Customer, Contact } from './../models/customers';

@Injectable()
export class ProjectDataService {

    private projects: Project[] = [
        {id: 1, name: 'Mandahrin', customer: new Customer(1, 'NMBS', '1234566787', new Contact(1, 'Serge', 'Van Meerbeeck'))},
        {id: 2, name: 'Napoleon', customer: new Customer(2, 'Agfa', '333254636')}
    ];

    list():Promise<Project[]> { return Promise.resolve(this.projects); }
    get(id: number): Promise<Project> { return Promise.resolve(this.projects.find((project) => project.id === id))}
}