import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UserInfoComponent as UserInfoComponent } from "./user-info.component";
import { UserListComponent as UserListComponent } from "./user-list.component";

@NgModule({
    declarations: [
        UserListComponent,
        UserInfoComponent
    ], imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            {
                path: 'users',
                component: UserListComponent
            },
            {
                path: 'users/info/:id', 
                component: UserInfoComponent
            },
            {
                path: 'users/info', 
                component: UserInfoComponent
            },
        ])
    ]
})
export class UserModule {

}