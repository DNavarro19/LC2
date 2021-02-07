import { Component, OnInit } from '@angular/core';
import { Provincia } from '../entidades/Provincia';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import {NavController} from '@ionic/angular';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-provincias',
  templateUrl: './provincias.page.html',
  styleUrls: ['./provincias.page.scss'],
})
export class ProvinciasPage implements OnInit {

  private provincias = new Array<Provincia>();
  constructor(private apiService : ApiServiceProvider,private navCtrl:NavController) { }


  ngOnInit() {
    this.apiService.getProvincias()
      .then((provincias : Provincia[])=>{
        this.provincias = provincias;
      })
      .catch((error:string)=>{
        console.log(error);
      });
  }
  Municipio(indice:number){
    let provincia = new Provincia(null,null,null);
    provincia = this.provincias[indice];
    let navigationExtras:NavigationExtras={
      queryParams:{
        provincia:JSON.stringify(provincia),
      }
    }
    this.navCtrl.navigateForward('/municipios',navigationExtras);
  }
}
