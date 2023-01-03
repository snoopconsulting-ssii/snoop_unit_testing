import { Injectable } from '@nestjs/common';
import { crudoClient } from '../data_access/crudoDevengamiento.client';
import { discordClient } from '../data_access/discord.client';

@Injectable()
export class validarHorasService {
  constructor(
    private readonly crudoClient: crudoClient,
    private readonly discordClient: discordClient,
  ) {}
  async cantidadHoras(
    desde: string,
    hasta: string,
    legajo: string,
    proyectoId: string,
  ) {
    let data = await this.crudoClient.getCrudo(desde, hasta, legajo);

    let dataPorCliente = data.filter((x) => x.proyectoId === proyectoId);

    let totalHoras = dataPorCliente
      .map((item) => item.horas)
      .reduce((prev, curr) => prev + curr, 0);

    return totalHoras;
  }
}
