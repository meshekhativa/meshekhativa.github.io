import { Component } from '@angular/core'
import { GalleryImage } from '../misc/types'

@Component({
    selector: 'app-oil',
    templateUrl: './oil.component.html',
    styleUrl: './oil.component.scss',
})
export class OilComponent {
    images: GalleryImage[] = new Array(6)
        .fill(null)
        .map(() => ({ itemImageSrc: '' }))

    responsiveOptions: any[] = []

    ngOnInit() {
        this.images.forEach((image, index) => {
            image.itemImageSrc = `assets/oil/${index}.webp`
        })
    }
}
