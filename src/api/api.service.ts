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

    async notifyFunction(data: any) {
        const response = await lastValueFrom(this.httpService.post('URL_AZURE_FUNCTION', data));
        return response.data;
    }
}
