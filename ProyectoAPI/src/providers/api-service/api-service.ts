import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Datos } from '../../app/entidades/Datos';
import { Direccion } from '../../app/entidades/Direccion';
import { Provincia } from '../../app/entidades/Provincia';
import { Municipio } from '../../app/entidades/Municipio';

@Injectable()
export class ApiServiceProvider {
    
    private direccion ="https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/horaria/";
    private apy_key = "?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkbmF2YXJyb2NlYmFsbG9zQGdtYWlsLmNvbSIsImp0aSI6IjU2MTNlOTM0LWZhZWEtNDYyNy04ZWRmLWEyNGI2YTJiZDJjNyIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjA5NjA2Mzg1LCJ1c2VySWQiOiI1NjEzZTkzNC1mYWVhLTQ2MjctOGVkZi1hMjRiNmEyYmQyYzciLCJyb2xlIjoiIn0.syvxq6lUUDTMPMam_oHu9NgpfOayITjpvT9EMJM_cUo";
    private provinciasRoute = './assets/json/provincias.json';
    private municipiosRoute = './assets/json/municipios.json';
    constructor(public http: HttpClient){
    }
    getDireccion(codMun:string):Promise<Direccion>{
        let promise = new Promise<Direccion>((resolve,reject)=>{
            this.http.get(this.direccion+codMun+this.apy_key
            ).toPromise()
            .then((data:any)=>{

                let dr = Direccion.createFromJsonObject(data);
                resolve(dr);
            })
            .catch((error:Error)=>{
                reject(error.message);
            });
        });
        return promise;
    }
    getDatos(dir:string):Promise<Datos[]>{
        let promise = new Promise<Datos[]>((resolve,reject)=>{
            this.http.get(dir).toPromise()
            .then((data:any)=>{
                let datos=new Array<Datos>();
                data.forEach(element => {
                    let dato=Datos.createFromJsonObject(element);
                    datos.push(dato);
                });
                resolve(datos);
            })
            .catch((error:Error)=>{
                reject(error.message);
            });
        });
        return promise;
    }
    getProvincias():Promise<Provincia[]>{
        let promise = new Promise<Provincia[]>((resolve,reject)=>{
          this.http.get(this.provinciasRoute
          ).toPromise()
          .then((data:any)=>{
            let provincias=new Array<Provincia>();
            data.forEach(provinciaJson => {
                let provincia=Provincia.createFromJsonObject(provinciaJson);
                provincias.push(provincia);
            });
            resolve(provincias);
          })
          .catch((error:Error)=>{
              reject(error.message);
          });
      });
      return promise;
      }
      getMunicipios(codigo:string):Promise<Municipio[]>{
        let promise = new Promise<Municipio[]>((resolve,reject)=>{
          this.http.get(this.municipiosRoute
          ).toPromise()
          .then((data:any)=>{
            let municipios=new Array<Municipio>();
            data.forEach(municipioJson => {
                let municipio=Municipio.createFromJsonObject(municipioJson);
                if(municipio.CPRO == codigo){
                    municipios.push(municipio);
                }
            });
            resolve(municipios);
          })
          .catch((error:Error)=>{
              reject(error.message);
          });
      });
      return promise;
      }
}