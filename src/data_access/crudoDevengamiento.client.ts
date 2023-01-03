import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CrudoDevengamientoDTO } from './dto';

@Injectable()
export class crudoClient {
  constructor(private http: HttpService) {}

  async getCrudo(
    desde: string,
    hasta: string,
    legajo: string,
  ): Promise<CrudoDevengamientoDTO[]> {
    let requestConfig = {
      headers: {
        [process.env.GATEWAY_HEADER]: process.env.GATEWAY_KEY,
      },
      params: {
        desde: desde,
        hasta: hasta,
        legajo: legajo,
      },
    };

    let { data } = await firstValueFrom(
      this.http.get(process.env.URL_CRUDO, requestConfig),
    );

    return data;
  }
}
