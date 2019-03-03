import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {
    private baseURL: string;

    constructor(private http: HttpClient) {
        this.baseURL = environment.api;
    }

   /* getProducts() {
        const fullUrl = `${this.baseURL}/products/`;
        return this.http.get(fullUrl);
    }

    getProductById(id: number) {
        const fullUrl = `${this.baseURL}/products/${id}`;

        return this.http.get(fullUrl);
    }*/

    createUser(user: User) {
        const fullUrl = `${this.baseURL}/usuarios`;

        return this.http.post(fullUrl, user);
    }

    /*
    updateProduct(id: number, product: Product) {
        const fullUrl = `${this.baseURL}/products/${id}`;

        return this.http.put(fullUrl, product);
    }

    deleteProduct(id: number) {
        const fullUrl = `${this.baseURL}/products/${id}`;

        return this.http.delete(fullUrl);
    }*/
}