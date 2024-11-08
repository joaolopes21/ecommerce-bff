import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('product')
export class ProductController {
    constructor(private readonly apiService: ApiService) { }

    @Post('')
    async createProduct(@Body() data: any) {
        return await this.apiService.createProduct(data);
    }

    @Get('findMany')
    async findProducts() {
        return await this.apiService.findProducts();
    }

    @Get(':id')
    async getProduct(@Param('id') id: string) {
        return await this.apiService.findProduct(id);
    }

    @Put()
    async updateProduct(@Body() body: any) {
        return await this.apiService.updateProduct(body);
    }

    @Delete()
    async deleteProduct(@Body() body: any) {
        return await this.apiService.deleteProduct(body);
    }
}

@Controller('user')
export class UserController {
    constructor(private readonly apiService: ApiService) { }

    @Post()
    async createUser(@Body() userData: any) {
        return await this.apiService.createUser(userData);
    }

    @Get('findMany')
    async findUsers() {
        return await this.apiService.findUsers();
    }

    @Get(':id')
    async getUser(@Param('id') id: string) {
        return await this.apiService.findUser(id);
    }

    @Put()
    async updateUser(@Body() body: any) {
        return await this.apiService.updateUser(body);
    }

    @Delete()
    async deleteUser(@Body() body: any) {
        return await this.apiService.deleteUser(body);
    }
}

@Controller('order')
export class OrderController {
    constructor(private readonly apiService: ApiService) { }

    @Post()
    async createOrder(@Body() orderData: any) {
        return await this.apiService.createOrder(orderData);
    }

    @Get(':id')
    async getOrder(@Param('id') id: string) {
        return await this.apiService.findOrder(id);
    }
}
