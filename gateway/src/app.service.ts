import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from "rxjs/operators";

@Injectable()
export class AppService {
  constructor(
    @Inject("CRUD") private readonly clientServiceA: ClientProxy
  ) {}
  
  pingCRUDService() {
    const startTs = Date.now();
    const pattern = { cmd: "ping" };
    const payload = {};
    return this.clientServiceA
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({ message, duration: Date.now() - startTs }))
      );
  }
  getHello(): string {
    return 'Hello World!';
  }
}
