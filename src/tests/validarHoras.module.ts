import { HttpService, HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { validarLicenciasService } from './validarLicencias.service';
import { validarHorasService } from './validarHoras.service';

@Module({})
export class ejecutarTests {
  imports: [HttpModule];
  providers: [HttpService, validarHorasService, validarLicenciasService];
}
