import { Component, HostListener, Input } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs'
import { routerPaths } from '../misc/strings'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
    @Input() isSideways!: boolean
    activeIndex: number = 0
    routerLinks = routerPaths

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.router.events
            .pipe(
                filter(
                    (event): event is NavigationEnd =>
                        event instanceof NavigationEnd
                )
            )
            .subscribe(this.setIndexViaURL)
    }

    setIndexViaURL = (event: NavigationEnd) => {
        this.activeIndex = this.routerLinks.indexOf(event.urlAfterRedirects)
    }

    setActive(i: number) {
        this.activeIndex = i
    }

    isActive(i: number) {
        return this.activeIndex === i
    }
}
