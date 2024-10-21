import { Component } from '@angular/core'
import { Image } from '../misc/types'

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrl: './intro.component.scss',
})
export class IntroComponent {
    readonly main: Image = {
        src: 'assets/intro/0.webp',
        alt: 'שלט כניסה למשק חטיבה',
    }

    readonly ofra: Image = {
        src: 'assets/intro/ofra.webp',
        alt: 'תמונה של עפרה',
    }

    readonly ami: Image = {
        src: 'assets/intro/ami.jpg',
        alt: 'תמונה של עמי',
    }
}
