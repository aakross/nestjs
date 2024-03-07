import { Controller, Get, Delete, Post, Put, Param } from '@nestjs/common';

@Controller('ejemplo')
export class EjemploController {
    @Get()
    metodoGet() {
        return "Hola desde GET";
    }
    //@Get(':id/:slug') se le puede pasar mas de un paramtro
    @Get(':id')
    metodoGetPorId(@Param() params) {
        return "Hola con parametro =" +params.id; //Se acceden a los parametros con params. y el parametro que esta esperando el metodo
    }
    @Post()
    metodoPost() {
        return "Hola desde POST";
    }
    @Put()
    metodoPut() {
        return "Hola desde PUT";
    }
    @Delete()
    metodoDelete() {
        return "Hola desde DELETE";
    }
}
