import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Project } from './../models/projects.interface';
import { ProjectDataService } from './../services/project-data-service';
import { RouteTitleService } from './../services/route-title-service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
    selector: 'project-detail',
    templateUrl: './project-detail.html'
})
export class ProjectDetailComponent implements OnInit {

    project: Project;

    constructor(private route: ActivatedRoute, private router: Router, private titleService: RouteTitleService, private projectDataService: ProjectDataService) {}

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.projectDataService.get(+params['id']))
            .subscribe((project: Project) => {
                this.project = project;
                this.titleService.observe(this.route, this.project.id.toString());
            });
    }

    gotoList() {
        this.router.navigate(['/projects']);
    }
}