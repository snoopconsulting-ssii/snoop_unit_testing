import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ejecutarTests } from './tests/validarHoras.module';
import { validarHorasService } from './tests/validarHoras.service';
import { ConfigModule } from '@nestjs/config';
import { crudoClient } from './data_access/crudoDevengamiento.client';
import { validarHorasController } from './tests/ejecutarTests.controller';
import { HttpModule, HttpService } from '@nestjs/axios';
import { discordClient } from './data_access/discord.client';
import { ejecutarTestsService } from './tests/ejecutarTests.service';

@Module({
  imports: [ejecutarTests, ConfigModule.forRoot(), HttpModule],
  controllers: [AppController, validarHorasController],
  providers: [
    AppService,
    validarHorasService,
    crudoClient,
    discordClient,
    ejecutarTestsService,
  ],
})
export class AppModule {}
