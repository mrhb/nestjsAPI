import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
    {
      name: "CRUD",
      transport: Transport.TCP,
      options: {
        host: "127.0.0.1",
        port: 8889
      }
    }
  ])
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
