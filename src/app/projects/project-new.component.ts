import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from './../models/projects'
import { Customer } from './../models/customers';

import { ProjectDataService } from './../services/project-data-service';
import { CustomerDataService } from './../services/customer-data-service';
import { RouteTitleService } from './../services/route-title-service';

@Component({
    selector: 'project-new',
    templateUrl: './project-new.html'
})
export class ProjectNewComponent implements OnInit {

    project: Project;
    customers: Customer[];
    selectedCustomer: Customer = null;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private customerDataService: CustomerDataService, 
    private projectDataService: ProjectDataService, private routeTitleService: RouteTitleService) {}

    ngOnInit() {
        this.routeTitleService.observe(this.activatedRoute);
        
        this.project = new Project();
        this.customerDataService.list()
            .then((customers) => this.customers = customers);
    }

    cancel() {
        this.router.navigate(['projects']);
    }

    isSelectedCustomer(customer: Customer) {
        return customer && this.selectedCustomer && customer.id === this.selectedCustomer.id;
    }

    submit(form: NgForm) {
        if (!form.form.invalid) {
            this.projectDataService.create(this.project)
                .then(project => this.router.navigate(['projects', project.id]))
        }
    }
}