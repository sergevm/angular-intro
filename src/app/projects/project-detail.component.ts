import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Project } from './../models/projects.interface';
import { ProjectDataService } from './../services/project-data-service';

import 'rxjs/add/operator/switchMap';

@Component({
    template: `<div>Project: {{project?.name}}</div>`
})
export class ProjectDetailComponent implements OnInit {

    project: Project;

    constructor(private route: ActivatedRoute, private projectDataService: ProjectDataService) {}

    ngOnInit() {
        const projectId = this.route.params
            .switchMap((params: Params) => this.projectDataService.get(+params['id']))
            .subscribe((project: Project) => this.project = project);
    }
}