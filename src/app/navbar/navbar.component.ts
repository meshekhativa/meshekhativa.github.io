import { Component, HostListener, Input } from '@angular/core'
import { MenuItem } from 'primeng/api'

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
    items!: MenuItem[]

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'אודות המשק',
                // icon: 'pi pi-home',
                command: () => {
                    this.router.navigate(['/'])
                },
                items: [
                    {
                        label: 'החצר ובית המלכה',
                        route: routerPaths[1],
                    },
                ],
            },
            {
                label: 'מוזאיקה',
                // icon: 'pi pi-link',
                command: () => {
                    this.router.navigate(['/installation'])
                },
            },
            {
                label: 'שמן זית',
                // icon: 'pi pi-home',
                items: [
                    {
                        label: 'Angular',
                        url: 'https://angular.io/',
                    },
                    {
                        label: 'Vite.js',
                        url: 'https://vitejs.dev/',
                    },
                ],
            },
            {
                label: 'צור קשר',
                // icon: 'pi pi-home',
                items: [
                    {
                        label: 'Angular',
                        url: 'https://angular.io/',
                    },
                    {
                        label: 'Vite.js',
                        url: 'https://vitejs.dev/',
                    },
                ],
            },
        ]
    }
}
