import { Controller, Get, Delete, Post, Put, Param, Body, Header, HttpCode } from '@nestjs/common';
import { EjemploDto } from 'src/dto/ejemplo.dto';
import { EjemploInterface } from 'src/interfaces/ejemplo_interface';
import { EjemploService } from 'src/servicios/ejemplo/ejemplo.service';

@Controller('ejemplo')
export class EjemploController {

    constructor(private servicio: EjemploService) {

    }


    @Get()
    @Header('cabecero_alan', 'tamil.cl')
    metodoGet() {
        return this.servicio.getTexto("Alan");
    }



    // @Get()
    // @Header('cabecero_alan', 'tamil.cl')
    // @HttpCode(200)
    // metodoGet(): EjemploInterface {
    //     return { estado: "ok", mensaje: "Hola desde interface" };
    // }
    // @Get()
    // metodoGet() {
    //     return "Hola desde GET";
    // }
    //@Get(':id/:slug') se le puede pasar mas de un paramtro
    @Get(':id')
    metodoGetPorId(@Param() params) {
        return "Hola con parametro =" + params.id; //Se acceden a los parametros con params. y el parametro que esta esperando el metodo
    }
    @Post()
    metodoPost(@Body() dto: EjemploDto) {
        return dto;
    }
    /*
        @Post()
        metodoPost(@Body() json) {
            return json;
            //return json.correp;
        }
    */
    /*
    @Post()
    metodoPost() {
        return "Hola desde POST";
    }
    */
    @Put()
    metodoPut() {
        return "Hola desde PUT";
    }
    @Delete()
    metodoDelete() {
        return "Hola desde DELETE";
    }
}
