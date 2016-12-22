import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Section } from './models/sections.interface';
import { RouteTitleService } from './services/route-title-service';

@Component({
    template: `
        <div class="tile-container">
            <a *ngFor="let section of sections" class="tile" [style.background-color]="section.background"
                routerLink="{{section.link}}" routerLinkActive="active-section">
                {{section.name}}
            </a>
        </div>
    `,
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sections: Section[];

  constructor(private titleService: RouteTitleService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sections = [
      {name: 'Projects', link: '/projects', background: 'lightgray' },
      {name: 'Invoices', link: '/invoices', background: 'darkgray' }
    ];

    this.titleService.observe(this.activatedRoute);
  }
}