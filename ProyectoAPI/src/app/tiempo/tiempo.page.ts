import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Datos } from '../entidades/Datos';
import { DiaClase } from '../entidades/DiaClase';
import { Direccion } from '../entidades/Direccion';
import { Municipio } from '../entidades/Municipio';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.page.html',
  styleUrls: ['./tiempo.page.scss'],
})
export class TiempoPage implements OnInit {
  private meteo = new Array<String>();
  constructor(private apiService: ApiServiceProvider, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      let municipio: Municipio = JSON.parse(params["municipio"]);
      this.apiService.getDireccion(municipio.CPRO + municipio.CMUN)
        .then((direccion: Direccion) => {
          this.apiService.getDatos(direccion.datos).
            then((datos: Datos[]) => {
              this.muestraDatos(datos[0].prediccion.dia);
            })
            .catch((error: string) => {
              console.log(error);
            });
        });
    });

  }
  muestraDatos(dias: DiaClase[]) {
    var date = new Date();
    var hora = date.getHours();
    for (let index = hora - Number.parseInt(dias[0].estadoCielo[0].periodo), total = 0, d = 0; total < 24; index++) {
      let linea = "";
      linea = this.getDatos(index, dias[d], Number.parseInt(dias[d].estadoCielo[index].periodo)).toString();
      this.meteo.push(linea);
      if (Number.parseInt(dias[d].estadoCielo[index].periodo) == 23) {
        d++;
        index = -1;
      }
      total++;
    }
  }
  getDatos(indice: number, dia: DiaClase, periodo: number): String {
    let datos = "";
    if (periodo < 7) {
      datos = dia.estadoCielo[indice].periodo + ":00 " + dia.estadoCielo[indice].descripcion + " " + dia.precipitacion[indice].value + "mm " + dia.probPrecipitacion[0].value +"%";
    } else if (periodo < 13) {
      datos = dia.estadoCielo[indice].periodo + ":00 " + dia.estadoCielo[indice].descripcion + " " + dia.precipitacion[indice].value + "mm " + dia.probPrecipitacion[1].value +"%";
    } else if (periodo < 19) {
      datos = dia.estadoCielo[indice].periodo + ":00 " + dia.estadoCielo[indice].descripcion + " " + dia.precipitacion[indice].value + "mm " + dia.probPrecipitacion[2].value +"%";
    } else {
      datos = dia.estadoCielo[indice].periodo + ":00 " + dia.estadoCielo[indice].descripcion + " " + dia.precipitacion[indice].value + "mm " + dia.probPrecipitacion[3].value+"%";
    }
    return datos;
  }
}
