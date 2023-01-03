import { Test, TestingModule } from '@nestjs/testing';
import { validarHorasService } from './validarHoras.service';
import { crudoClient } from '../data_access/crudoDevengamiento.client';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { discordClient } from '../data_access/discord.client';

describe('ValidarHorasService', () => {
  let service: validarHorasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule.forRoot()],
      providers: [validarHorasService, crudoClient, discordClient],
    }).compile();
    service = module.get<validarHorasService>(validarHorasService);
  });

  describe('Quilmes 2022 Equipo integracion ', () => {
    // it('2022-01-01/2022-03-31 - 708 - 380hs', async (done) => {
    //   let total = await service.cantidadHoras(
    //     '2022-01-01',
    //     '2022-03-31',
    //     '708',
    //     '26ca140e-c8da-477b-bc9d-8c120ff56a72',
    //   );
    //   expect(Math.round(total)).toBe(380);
    // });

    it('26ca140e-c8da-477b-bc9d-8c120ff56a72 - 2022-01-01/2022-03-31 - 734', async () => {
      let total = await service.cantidadHoras(
        '2022-01-01',
        '2022-03-31',
        '734',
        '26ca140e-c8da-477b-bc9d-8c120ff56a72',
      );
      expect(Math.round(total)).toBe(350);
    }, 300000);

    // it('2022-01-01/2022-03-31 - 429', async () => {
    //   let total = await service.cantidadHoras(
    //     '2022-01-01',
    //     '2022-03-31',
    //     '429',
    //     '26ca140e-c8da-477b-bc9d-8c120ff56a72',
    //   );
    //   expect(Math.round(total)).toBe(380);
    // }, 300000);

    it('26ca140e-c8da-477b-bc9d-8c120ff56a72 - 2022-01-01/2022-03-31 - 58', async () => {
      let total = await service.cantidadHoras(
        '2022-01-01',
        '2022-03-31',
        '58',
        '26ca140e-c8da-477b-bc9d-8c120ff56a72',
      );
      expect(Math.round(total)).toBe(120);
    }, 300000);

    // it('2022-04-01/2022-06-30 - 708 - 440hs', async () => {
    //   let total = await service.cantidadHoras(
    //     '2022-04-01',
    //     '2022-06-30',
    //     '708',
    //     '26ca140e-c8da-477b-bc9d-8c120ff56a72',
    //   );
    //   expect(Math.round(total)).toBe(440);
    // }, 300000);

    // it('2022-04-01/2022-06-30 - 734 - 440hs', async () => {
    //   let total = await service.cantidadHoras(
    //     '2022-04-01',
    //     '2022-06-30',
    //     '734',
    //     '26ca140e-c8da-477b-bc9d-8c120ff56a72',
    //   );
    //   expect(Math.round(total)).toBe(440);
    // }, 300000);

    // it('2022-04-01/2022-06-30 - 429 - 440hs', async () => {
    //   let total = await service.cantidadHoras(
    //     '2022-04-01',
    //     '2022-06-30',
    //     '429',
    //     '26ca140e-c8da-477b-bc9d-8c120ff56a72',
    //   );
    //   expect(Math.round(total)).toBe(440);
    // }, 300000);

    // it('2022-04-01/2022-06-30 - 58 - 240hs', async () => {
    //   let total = await service.cantidadHoras(
    //     '2022-04-01',
    //     '2022-06-30',
    //     '58',
    //     '26ca140e-c8da-477b-bc9d-8c120ff56a72',
    //   );
    //   expect(Math.round(total)).toBe(240);
    // }, 300000);

    // it('2022-04-01/2022-06-30 - 1 - 48hs', async () => {
    //   let total = await service.cantidadHoras(
    //     '2022-04-01',
    //     '2022-06-30',
    //     '1',
    //     '26ca140e-c8da-477b-bc9d-8c120ff56a72',
    //   );
    //   expect(Math.round(total)).toBe(48);
    // }, 300000);

    // it('2022-04-01/2022-06-30 - 756 - 480hs', async () => {
    //   let total = await service.cantidadHoras(
    //     '2022-07-11',
    //     '2022-09-30',
    //     '756',
    //     '26ca140e-c8da-477b-bc9d-8c120ff56a72',
    //   );
    //   expect(Math.round(total)).toBe(480);
    // }, 300000);
  });
  // describe('TERNIUM 2022 S1 MOA 2FTE - e43a46f5-e5ca-4490-9300-70ff0d91aae8', () => {
  //   it('e43a46f5-e5ca-4490-9300-70ff0d91aae8 - 2022-01-01/2022-03-31 - 325 - 440hs', async function () {
  //     let total = await service.cantidadHoras(
  //       '2022-01-01',
  //       '2022-03-31',
  //       '325',
  //       'e43a46f5-e5ca-4490-9300-70ff0d91aae8',
  //     );
  //     // 200
  //     expect(Math.round(total)).toBe(180);
  //   }, 300000);

  // it('TERNIUM 2022 S1 MOA 2FTE - 2022-07-01/2022-06-30 - 325 - 440hs', async function () {
  //   let total = await service.cantidadHoras(
  //     '2022-04-01',
  //     '2022-06-30',
  //     '325',
  //     'e43a46f5-e5ca-4490-9300-70ff0d91aae8',
  //   );
  //   expect(Math.round(total)).toBe(440);
  // }, 300000);
  // });
});
