import { NavbarComponent } from './../navbar/navbar.component'
import { NgModule } from '@angular/core'
import { IntroComponent } from '../intro/intro.component'
import { CardModule } from 'primeng/card'
import { DividerModule } from 'primeng/divider'
import { ImageModule } from 'primeng/image'
import { MenubarModule } from 'primeng/menubar'
import { CommonModule } from '@angular/common'
import { YardComponent } from '../yard/yard.component' // Import CommonModule
import { GalleriaModule } from 'primeng/galleria'
@NgModule({
    declarations: [NavbarComponent, IntroComponent, YardComponent],
    imports: [
        CardModule,
        GalleriaModule,
        MenubarModule,
        DividerModule,
        ImageModule,
        CommonModule,
    ],
    exports: [IntroComponent, NavbarComponent],
})
export class BodyModule {}
