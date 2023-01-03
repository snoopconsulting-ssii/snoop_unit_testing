import { Injectable } from '@nestjs/common';
import { crudoClient } from '../data_access/crudoDevengamiento.client';
import * as moment from 'moment';

@Injectable()
export class validarLicenciasService {
  constructor(private readonly crudoClient: crudoClient) {}
  async licencias(desde: string, hasta: string, legajo: string) {
    let data = await this.crudoClient.getCrudo(desde, hasta, legajo);

    // let res = data.filter((each) => {
    //   return moment(each.fecha).isBetween(
    //     moment(desde_licencia),
    //     moment(hasta_licencia),
    //   );
    // });

    return data;
  }
}
