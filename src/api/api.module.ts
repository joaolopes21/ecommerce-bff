import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ProductController } from './api.controller';
import { UserController } from './api.controller';
import { OrderController } from './api.controller';

@Module({
    providers: [ApiService],
    controllers: [ProductController, UserController, OrderController],
})
export class ApiModule { }
