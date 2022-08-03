import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { User } from "./user";
import { UserService } from "./user.service";

@Component({
    templateUrl: './user-info.component.html'
})
export class UserInfoComponent implements OnInit{

    user: User = new User();

    constructor(private route: ActivatedRoute, private userService: UserService){}

    ngOnInit(): void {
        if(this.route.snapshot.paramMap.get('id')){
            this.userService.retrieveById(+this.route.snapshot.paramMap.get('id')).subscribe({
                next: user => this.user = user,
                error: err => console.log('Error', err)
            });
        }
    }

    save(): void{
        this.userService.save(this.user).subscribe({
            next: user => console.log('Saved with success', user),
            error: err => console.log('Error', err)
        });
    }

}