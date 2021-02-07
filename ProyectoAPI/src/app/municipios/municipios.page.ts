import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras} from '@angular/router';
import { Provincia } from '../entidades/Provincia';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Municipio } from '../entidades/Municipio';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.page.html',
  styleUrls: ['./municipios.page.scss'],
})
export class MunicipiosPage implements OnInit {
  private provincia:Provincia;
  private municipios = new Array<Municipio>();

  constructor(private route:ActivatedRoute,private apiService:ApiServiceProvider,private navCtrl:NavController) {
    this.route.queryParams.subscribe(params =>{
      this.provincia = JSON.parse(params["provincia"]);
    });
   }

  ngOnInit() {
    this.apiService.getMunicipios(this.provincia.CPRO)
      .then((municipios:Municipio[])=>{
        this.municipios=municipios;
      }).catch((error:string)=>{
        console.log(error);
      });
  }

  verPronostico(indice:number){
    let municipio = this.municipios[indice];
    let navigationExtras:NavigationExtras={
      queryParams:{
        municipio:JSON.stringify(municipio),
      }
    }
    this.navCtrl.navigateForward('/tiempo',navigationExtras);
  }

}
