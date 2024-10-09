import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { IntroComponent } from './intro/intro.component'
import { YardComponent } from './yard/yard.component'
import { RouterPaths } from './misc/strings'
import { TablesComponent } from './tables/tables.component'
import { PlatesComponent } from './plates/plates.component'
import { OtherWorkComponent } from './other-work/other-work.component'
import { OilComponent } from './oil/oil.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
    {
        path: '',
        component: IntroComponent,
    },
    {
        path: RouterPaths.Yard.split('/')[1],
        component: YardComponent,
    },
    {
        path: RouterPaths.Tables.split('/')[1],
        component: TablesComponent,
    },
    {
        path: RouterPaths.Plates.split('/')[1],
        component: PlatesComponent,
    },
    {
        path: RouterPaths.OtherWork.split('/')[1],
        component: OtherWorkComponent,
    },
    {
        path: RouterPaths.Oil.split('/')[1],
        component: OilComponent,
    },
    {
        path: RouterPaths.Contact.split('/')[1],
        component: ContactComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
