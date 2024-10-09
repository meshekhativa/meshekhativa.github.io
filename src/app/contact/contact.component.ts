import { Component } from '@angular/core'
import { Image } from '../misc/types'

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
})
export class ContactComponent {
    readonly image: Image = {
        src: 'assets/general/contact.webp',
        alt: 'תמונה של עמי ועפרה',
    }
}
