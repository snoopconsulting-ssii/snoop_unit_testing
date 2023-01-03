import { Test, TestingModule } from '@nestjs/testing';
import { validarHorasService } from './validarHoras.service';
import { crudoClient } from '../data_access/crudoDevengamiento.client';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { discordClient } from '../data_access/discord.client';
import { validarLicenciasService } from './validarLicencias.service';

describe('ValidarLicenciasService', () => {
  let service: validarLicenciasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot()],
      providers: [validarLicenciasService, crudoClient, discordClient],
    }).compile();
    service = module.get<validarLicenciasService>(validarLicenciasService);
  });

  describe('Licencias: ', () => {
    it('727 2022-10-11 al 2022-10-15', async function () {
      let dias = await service.licencias('2022-11-11', '2022-11-12', '727');
      expect(dias).toStrictEqual([]);
    }, 300000);
    it('727, 2022-10-26 al 2022-10-28', async function () {
      let dias = await service.licencias('2022-10-26', '2022-10-28', '727');

      expect(dias).toStrictEqual([]);
    }, 300000);
  });
});
