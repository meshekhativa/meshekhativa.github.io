import { Component } from '@angular/core'
import { GalleryImage } from '../misc/types'

@Component({
    selector: 'app-other-work',
    templateUrl: './other-work.component.html',
    styleUrl: './other-work.component.scss',
})
export class OtherWorkComponent {
    displayCustom: boolean = false

    activeIndex: number = 0

    images: GalleryImage[] = new Array(19)
        .fill(null)
        .map(() => ({ itemImageSrc: '', thumbnailImageSrc: '' }))

    responsiveOptions: any[] = []

    ngOnInit() {
        this.images.forEach((image, index) => {
            image.thumbnailImageSrc = `assets/mosaic/other-work/thumbnails/${index}.webp`
            image.itemImageSrc = `assets/mosaic/other-work/images/${index}.webp`
        })
    }

    imageClick(index: number) {
        this.activeIndex = index
        this.displayCustom = true
    }
}
