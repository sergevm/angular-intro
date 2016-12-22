import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, Params, NavigationEnd } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class RouteTitleService {

    constructor(private router: Router, private title: Title){}

    observe(activatedRoute: ActivatedRoute, identifier: string = null) {
       // https://toddmotto.com/dynamic-page-titles-angular-2-router-events
        this.router.events.filter(event => event instanceof NavigationEnd)
            .map(() => 
                activatedRoute
            )
            .mergeMap(route => 
                route.data
            )
            .subscribe((data) => 
                {
                    if (identifier === null)
                        this.title.setTitle(data['title'])
                    else
                        this.title.setTitle(`${data['title']} - ${identifier}`)
                }
            );
    }
}