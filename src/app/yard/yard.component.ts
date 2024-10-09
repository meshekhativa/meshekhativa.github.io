import { Component } from '@angular/core'
import { GalleryImage } from '../misc/types'

@Component({
    selector: 'app-yard',
    templateUrl: './yard.component.html',
    styleUrl: './yard.component.scss',
})
export class YardComponent {
    images: GalleryImage[] = new Array(17)
        .fill(null)
        .map(() => ({ itemImageSrc: '' }))

    responsiveOptions: any[] = []

    ngOnInit() {
        this.images.forEach((image, index) => {
            image.itemImageSrc = `assets/yard/${index}.webp`
        })
    }
}
