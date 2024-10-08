import { NavbarComponent } from './../navbar/navbar.component'
import { NgModule } from '@angular/core'
import { IntroComponent } from '../intro/intro.component'
import { CardModule } from 'primeng/card'
import { DividerModule } from 'primeng/divider'
import { ImageModule } from 'primeng/image'

@NgModule({
    declarations: [NavbarComponent, IntroComponent],
    imports: [CardModule, DividerModule, ImageModule],
    exports: [IntroComponent, NavbarComponent],
})
export class BodyModule {}
