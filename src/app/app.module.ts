import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsModule } from './projects/projects.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects/projects.component';

import { RouteTitleService } from './services/route-title-service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'projects', component: ProjectsComponent, data: {title: 'Project List'}},
  {path: 'invoices', component: ProjectsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProjectsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RouteTitleService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
