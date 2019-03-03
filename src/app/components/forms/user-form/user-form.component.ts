import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
/*
import { CategoryService } from '../../../services/category.service';
import { Category } from 'src/app/models/catgory.model';
import { State } from '../../../app.enums';*/

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html' 
})
export class UserFormComponent implements OnInit {
    /*categories: Category[];*/

    @Input() user: User;

    @Output() handleSubmit: EventEmitter<User> = new EventEmitter<User>();
    
    constructor(){} 
    /*constructor(private categoryService: CategoryService) {}*/

    ngOnInit() {
        /*this.categories = [];
        this.product.categoryId = this.product.categoryId || State.empty;
        
        this.categoryService.getCategories()
        .subscribe((response: Category[]) => {
            this.categories = response;
        })*/
    }

    onSubmit(f: any) {
        if (f.valid) {
            this.handleSubmit.emit(this.user);
        }
    }
}