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
        const response = await lastValueFrom(this.httpService.get(`URL_MICROSSERVICO/${id}`));
        return response.data;
    }

}

@Injectable()
export class UserService {
    constructor(private httpService: HttpService) { }

    async createUser(userData: any) {
        const response = await lastValueFrom(this.httpService.post('URL_MICROSSERVICO/user', userData));
        return response.data;
    }

    async findUser(id: string) {
        const response = await lastValueFrom(this.httpService.get(`URL_MICROSSERVICO/user/${id}`));
        return response.data;
    }
}

@Injectable()
export class OrderService {
    constructor(private httpService: HttpService) { }

    async createOrder(orderData: any) {
        const response = await lastValueFrom(this.httpService.post('URL_MICROSSERVICO/order', orderData));
        return response.data;
    }

    async findOrder(id: string) {
        const response = await lastValueFrom(this.httpService.get(`URL_MICROSSERVICO/order/${id}`));
        return response.data;
    }
}
