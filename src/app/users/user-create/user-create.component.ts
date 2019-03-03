import { Component } from '@angular/core';
import { Router } from '@angular/router/'
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html'
})
export class UserCreateComponent {
    newUser:User=new User();

    

    constructor(private router: Router,
                 private userService: UserService) {}

    handleSubmit(user: User) {
        //user.urlImage="https://via.placeholder.com/100/771796";//por defecto
        
        this.userService.createUser(user)
             .subscribe(response => {
                 this.router.navigate(['/usuarios']);
             });
    }
}