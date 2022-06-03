import { Controller, Get } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppService } from './app.service';
import { Hero, Micr1Service } from './micr1';

@Controller()
export class AppController {
    @Client( {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50051',
        package: 'hero',
        protoPath: join(__dirname, 'hero/hero.proto')
      },})
  private readonly client1: ClientGrpc;


  private micr1Service: Micr1Service;

  onModuleInit() {
    this.micr1Service = this.client1.getService<Micr1Service>('HeroService');
  }

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("/ping-crud")
  pingServiceA() {
    return this.appService.pingCRUDService();
  }

  @Get('hero')
  find1(): Promise<Hero> {
    return this.micr1Service.FindOne({ id: 1 });
  }
}
