import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../models/projects.interface';
import { ProjectDataService } from './../services/project-data-service';
import { RouteTitleService } from './../services/route-title-service';

@Component({
    selector: 'project-list',
    templateUrl: './projects.main.html',
    styles: []
})
export class ProjectsComponent implements OnInit {
    projects: Project[];

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: RouteTitleService, private projectDataService: ProjectDataService) {
    }

    ngOnInit() {
        this.titleService.observe(this.activatedRoute);
        this.projectDataService.list().then(projects => this.projects = projects);
    }

    detail(event: Event, project: Project) {
        event.preventDefault();
        this.router.navigate(['projects/project', project.id]);
    }
}