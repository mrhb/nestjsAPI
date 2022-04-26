import { NestFactory } from '@nestjs/core';
import { Transport } from "@nestjs/microservices";
import { AppModule } from './app.module';
import { Logger } from "@nestjs/common";

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: "127.0.0.1",
      port: 8889
    }
  });
  app.listen().finally(() => logger.log("Microservice A is listening to 8889"));
}
bootstrap();