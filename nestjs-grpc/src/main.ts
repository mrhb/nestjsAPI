import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';
import { grpcClientOptions } from './grpc-client.options';

async function bootstrap() {
  
  //This example contains a hybrid application (HTTP + gRPC)
  //You can switch to a microservice with NestFactory.createMicroservice() as follows:
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
   transport: Transport.GRPC,
   options: {
    url: '0.0.0.0:50051',
     package: 'hero',
     protoPath: join(__dirname, './hero/hero.proto'),
   }
  });
  await app.listen();
    
  // const app = await NestFactory.create(AppModule);
  // app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);

  // await app.startAllMicroservices();
  // await app.listen(3001);
  //console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
