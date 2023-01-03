import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class discordClient {
  constructor(private http: HttpService) {}

  public async alertasDiscord(mensaje) {
    let requestConfig = {
      headers: {
        [process.env.GATEWAY_HEADER]: process.env.GATEWAY_KEY_DISCORD,
      },
    };

    try {
      mensaje.type = 'ERROR';
      mensaje.idChannel = '1007378637651193956';

      let pruebasChannel = '1007378637651193956';

      await firstValueFrom(
        this.http.post(
          process.env.URL_DISCORD,
          {
            title: mensaje.title,
            type: 'ERROR',
            idChannel: pruebasChannel,
            description: mensaje.description,
          },
          requestConfig,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  }
}
