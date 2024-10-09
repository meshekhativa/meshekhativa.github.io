import { Component } from '@angular/core'
import { GalleryImage } from '../misc/types'

@Component({
    selector: 'app-plates',
    templateUrl: './plates.component.html',
    styleUrl: './plates.component.scss',
})
export class PlatesComponent {
    displayCustom: boolean = false

    activeIndex: number = 0

    images: GalleryImage[] = new Array(45)
        .fill(null)
        .map(() => ({ itemImageSrc: '', thumbnailImageSrc: '' }))

    responsiveOptions: any[] = []

    ngOnInit() {
        this.images.forEach((image, index) => {
            image.thumbnailImageSrc = `assets/mosaic/plates/thumbnails/${index}.webp`
            image.itemImageSrc = `assets/mosaic/plates/images/${index}.webp`
        })
    }

    imageClick(index: number) {
        this.activeIndex = index
        this.displayCustom = true
    }
}
