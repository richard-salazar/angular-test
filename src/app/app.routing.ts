import { Route } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { LoginComponent } from './components/login/login.component';
import { UserCreateComponent } from './users/user-create/user-create.component';

export const routes: Route[] = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'productos',
        component: ProductsComponent
    },
    {
        path: 'nuevo-producto',
        component: ProductCreateComponent
    },
    {
        path: 'productos/:id',
        component: ProductEditComponent
    },
    {
        path: '',
        redirectTo: 'productos',
        pathMatch: 'full'
    },
    {
        path: 'nuevo-usuario',
        component: UserCreateComponent   
    }
];