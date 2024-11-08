import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
    constructor(private httpService: HttpService) { }

    async createProduct(data: any) {
        const response = await lastValueFrom(this.httpService.post('URL_MICROSSERVICO/product', data));
        return response.data;
    }

    async findProduct(id: string) {
        const response = await lastValueFrom(this.httpService.get('URL_MICROSSERVICO/product/${id}'));
        return response.data;
    }

    async findProducts() {
        const response = await lastValueFrom(this.httpService.get('URL_MICROSSERVICO/user'));
        return response.data;
    }

    async updateProduct(userData: any) {
        const response = await lastValueFrom(this.httpService.put('URL_MICROSSERVICO/product', userData));
        return response.data;
    }

    async deleteProduct(userData: any) {
        const response = await lastValueFrom(this.httpService.delete('URL_MICROSSERVICO/product', userData));
        return response.data;
    }

    async createUser(userData: any) {
        const response = await lastValueFrom(this.httpService.post('URL_MICROSSERVICO/user', userData));
        return response.data;
    }

    async findUsers() {
        const response = await lastValueFrom(this.httpService.get('URL_MICROSSERVICO/user'));
        return response.data;
    }



    async findUser(id: string) {
        const response = await lastValueFrom(this.httpService.get('URL_MICROSSERVICO/user/${id}'));
        return response.data;
    }

    async updateUser(userData: any) {
        const response = await lastValueFrom(this.httpService.put('URL_MICROSSERVICO/user', userData));
        return response.data;
    }

    async deleteUser(userData: any) {
        const response = await lastValueFrom(this.httpService.delete('URL_MICROSSERVICO/user', userData));
        return response.data;
    }

    async createOrder(orderData: any) {
        const response = await lastValueFrom(this.httpService.post('URL_MICROSSERVICO/order', orderData));
        return response.data;
    }

    async findOrder(id: string) {
        const response = await lastValueFrom(this.httpService.get('URL_MICROSSERVICO/order/${id}'));
        return response.data;
    }
}