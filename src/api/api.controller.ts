import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('bff')
export class ApiController {
    constructor(private readonly apiService: ApiService) { }

    @Post('/product')
    async createProduct(@Body() data: any) {
        const result = await this.apiService.createProduct(data);
        await this.apiService.notifyFunction({ event: 'created', data });
        return result;
    }

    @Get('/product/:id')
    async getProduct(@Param('id') id: string) {
        return await this.apiService.findProduct(id);
    }
}
