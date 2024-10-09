import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IntroComponent } from './intro/intro.component'
import { YardComponent } from './yard/yard.component'
import { routerPaths } from './misc/strings'

const routes: Routes = [
    {
        path: '',
        component: IntroComponent,
    },
    {
        path: routerPaths[1].split('/')[1],
        component: YardComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
