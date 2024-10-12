import { Component, HostListener, Input } from '@angular/core'
import { MenuItem } from 'primeng/api'

import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs'
import { RouterPaths } from '../misc/strings'

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
                    this.router.navigate([RouterPaths.Intro])
                },
                items: [
                    {
                        label: 'החצר ובית המלאכה',
                        route: RouterPaths.Yard,
                    },
                ],
            },
            {
                label: 'מוזאיקה',
                items: [
                    {
                        label: 'שולחנות',
                        route: RouterPaths.Tables,
                    },
                    {
                        label: 'פלטות',
                        route: RouterPaths.Plates,
                    },
                    {
                        label: 'עבודות אחרות',
                        route: RouterPaths.OtherWork,
                    },
                ],
            },
            {
                label: 'שמן זית',
                command: () => {
                    this.router.navigate([RouterPaths.Oil])
                },
            },
            {
                label: 'צור קשר',
                command: () => {
                    this.router.navigate([RouterPaths.Contact])
                },
            },
        ]
    }
}
