import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactsComponent } from "./contacts/contacts.component";
import { FindContactsComponent } from "./find-contacts/find-contacts.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {path: 'find', component : FindContactsComponent},
    {path: 'contacts', component : ContactsComponent},
    {path: '', component: RegisterComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
}
)
export class appRoutingModule{

}