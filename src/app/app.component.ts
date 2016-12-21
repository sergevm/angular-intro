import { Component, OnInit } from '@angular/core';
import { Section } from './models/sections.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sections: Section[];

  ngOnInit() {
    this.sections = [
      {name: 'Home', link: 'home' },
      {name: 'Projects', link: 'projects' },
      {name: 'Invoices', link: 'invoices' }
    ];
  }
}
