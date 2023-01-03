import { Body, Controller, Post } from '@nestjs/common';
import { validarHorasService } from './validarHoras.service';
import { bodyDto } from './dto/body.dto';
import { runCLI } from '@jest/core';
import { ejecutarTestsService } from './ejecutarTests.service';

@Controller('run')
export class validarHorasController {
  constructor(
    private readonly validarHoras: validarHorasService,
    private readonly ejecutarTestsService: ejecutarTestsService,
  ) {}

  @Post()
  async ejecutarTests(@Body() { desde, hasta, legajo, proyectoId }: bodyDto) {
    const projectRootPath = './';
    // Add any Jest configuration options here
    const jestConfig = {
      roots: ['src'],
      testRegex: '\\.spec\\.ts$',
    };
    // Run the Jest asynchronously
    const { results } = await runCLI(jestConfig as any, [projectRootPath]);
    let testResults = results.testResults[1].testResults;

    results.testResults.forEach((element) => {
      let testsFailed = this.ejecutarTestsService.alerts(element.testResults);
    });

    // this.validarHoras.sendAlert(testsFailed, proyectoId);

    // results.testResults.forEach((result) => {
    //   console.log(result.testResults);
    // });

    // return {
    //   cantidad: testResults.length,
    //   errores: testsFailed.length,
    // };
  }
}

// {
//   title: 'ALERTA: ERRORES PORCENTAJE DE ASIGNACIÓN',
//   description: 'revisar sbus y porcentaje de asignación en la nómina.',
//   type: 'ALERT',
//   idChannel: '1007378637651193956',
//   fields: [
//     {
//       name: 'Errores:',
//       value: mensaje,
//     },
//   ],
// }
