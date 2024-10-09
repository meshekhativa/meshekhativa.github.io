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
                command: () => {
                    this.router.navigate([routerPaths[0]])
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
                items: [
                    {
                        label: 'שולחנות',
                        route: routerPaths[2],
                    },
                    {
                        label: 'פלטות',
                        route: routerPaths[3],
                    },
                    {
                        label: 'עבודות אחרות',
                        route: routerPaths[4],
                    },
                ],
            },
            {
                label: 'שמן זית',
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
