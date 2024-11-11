import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
    constructor(private httpService: HttpService) { }

    async createProduct(data: any) {
        const response = await lastValueFrom(this.httpService.post('https://microcontainer.livelyforest-7ff538b4.brazilsouth.azurecontainerapps.io/product', data));
        return response.data;
    }

    async findProduct(id: string) {
        const response = await lastValueFrom(this.httpService.get('https://microcontainer.livelyforest-7ff538b4.brazilsouth.azurecontainerapps.io/product/${id}'));
        return response.data;
    }

    async findProducts() {
        const response = await lastValueFrom(this.httpService.get('https://microcontainer.livelyforest-7ff538b4.brazilsouth.azurecontainerapps.io/user'));
        return response.data;
    }

    async updateProduct(userData: any) {
        const response = await lastValueFrom(this.httpService.put('https://microcontainer.livelyforest-7ff538b4.brazilsouth.azurecontainerapps.io/product', userData));
        return response.data;
    }

    async deleteProduct(userData: any) {
        const response = await lastValueFrom(this.httpService.delete('https://microcontainer.livelyforest-7ff538b4.brazilsouth.azurecontainerapps.io/product', userData));
        return response.data;
    }

    async createUser(userData: any) {
        const response = await lastValueFrom(this.httpService.post('https://microcontainer.livelyforest-7ff538b4.brazilsouth.azurecontainerapps.io/user', userData));
        return response.data;
    }

    async findUsers() {
        const response = await lastValueFrom(this.httpService.get('https://microcontainer.livelyforest-7ff538b4.brazilsouth.azurecontainerapps.io/user'));
        return response.data;
    }



    async findUser(id: string) {
        const response = await lastValueFrom(this.httpService.get('https://microcontainer.livelyforest-7ff538b4.brazilsouth.azurecontainerapps.io/user/${id}'));
        return response.data;
    }

    async updateUser(userData: any) {
        const response = await lastValueFrom(this.httpService.put('https://microcontainer.livelyforest-7ff538b4.brazilsouth.azurecontainerapps.io/user', userData));
        return response.data;
    }

    async deleteUser(userData: any) {
        const response = await lastValueFrom(this.httpService.delete('https://microcontainer.livelyforest-7ff538b4.brazilsouth.azurecontainerapps.io/user', userData));
        return response.data;
    }

    async createOrder(orderData: any) {
        const response = await lastValueFrom(this.httpService.post('https://microcontainer.livelyforest-7ff538b4.brazilsouth.azurecontainerapps.io/order', orderData));
        return response.data;
    }


}