import { NavbarComponent } from './../navbar/navbar.component'
import { NgModule } from '@angular/core'
import { IntroComponent } from '../intro/intro.component'
@NgModule({
    declarations: [NavbarComponent, IntroComponent],
    imports: [],
    exports: [IntroComponent, NavbarComponent],
})
export class BodyModule {}
