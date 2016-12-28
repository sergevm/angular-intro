import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Project } from './../models/projects';
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

    original: Project;
    project: Project;
    isNew: boolean;
    editing: boolean = false;

    constructor(private route: ActivatedRoute, private router: Router, private titleService: RouteTitleService, private projectDataService: ProjectDataService) {}

    ngOnInit() {
        this.route.params
            .switchMap((params: Params) => {
                if (params && params['id']) {
                    return this.projectDataService.get(+params['id']);
                }else {
                    return Promise.reject('Invalid request');
                }
            })
            .subscribe((project: Project) => {
                this.project = project;
                this.titleService.observe(this.route, this.project.id.toString());
            });
    }

    gotoList() {
        this.router.navigate(['/projects']);
    }

    edit() {
        this.editing = true;
        this.original = Object.assign({}, this.project);
    }

    cancelEdit() {
        Object.assign(this.project, this.original);
        this.editing = false;
    }

    onSubmit(ngForm: NgForm) {
        if (!ngForm.form.invalid) {
            this.editing = false;
            this.original = null;
        }
    }
}