import { Module } from '@nestjs/common';
import { crudoClient } from './crudoDevengamiento.client';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [crudoClient],
  exports: [crudoClient],
})
export class DataAccessModule {}
