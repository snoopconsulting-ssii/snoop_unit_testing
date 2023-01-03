import { Injectable } from '@nestjs/common';
import { crudoClient } from '../data_access/crudoDevengamiento.client';
import { discordClient } from '../data_access/discord.client';

@Injectable()
export class ejecutarTestsService {
  constructor(
    private readonly crudoClient: crudoClient,
    private readonly discordClient: discordClient,
  ) {}
  alerts(testResults) {
    let testsFailed: testsFailed[] = [];

    // console.log('acaaaaaaaa');
    // console.log(testResults);

    testResults
      .filter((test) => test.status === 'failed')
      .forEach((testFailed) => {
        if (testFailed.fullName.split(' ')[0] === 'ValidarHorasService') {
          this.validarHorasMensaje(testFailed);
        }
        if (testFailed.fullName.split(' ')[0] === 'ValidarLicenciasService') {
          this.validarLicenciasMensaje(testFailed);
          //   console.log('soy licencia');
        }
      });
    // .forEach((result) =>
    //   testsFailed.push({
    //     title: result.fullName.split(' ').slice(1).join(' '),
    //     description: `status: ${result.status} \n expected: ${String(
    //       result.failureDetails[0]['matcherResult'].actual,
    //     )} \n received: ${String(
    //       result.failureDetails[0]['matcherResult'].expected,
    //     )}`,
    //   }),
    // );
    return testsFailed;
  }
  validarHorasMensaje(testFailed) {
    // console.log(testFailed.failureDetails[0].matcherResult);
    let url = `https://snoopconsulting.sharepoint.com/sites/pwa/project%20detail%20pages/informaci%C3%B3n_proyecto_cliente.aspx?projuid=${
      testFailed.title.split(' ')[0]
    }`;
    let mensaje = {
      title: testFailed.fullName.split(' ').slice(1).join(' '),
      description: `expected: ${String(
        testFailed.failureDetails[0]['matcherResult'].actual,
      )} \n received: ${String(
        testFailed.failureDetails[0]['matcherResult'].expected,
      )} \n Url Project: ${url}`,
    };
    return this.sendAlert(mensaje);
  }
  validarLicenciasMensaje(testFailed) {
    let legajo = testFailed.title.split(' ')[0];
    let periodo =
      testFailed.title.split(' ')[1] +
      ' ' +
      testFailed.title.split(' ')[2] +
      ' ' +
      testFailed.title.split(' ')[3] +
      ' ';
    let mensaje = {
      title: 'Revisar crudo devengamiento',
      description: `El colaborador con legajo ${legajo} estuvo con licencia en el período ${periodo}, sin embargo figura con actividad en el crudo devengamiento`,
    };
    return this.sendAlert(mensaje);
  }
  sendAlert(mensaje) {
    this.discordClient.alertasDiscord(mensaje);
  }
}
