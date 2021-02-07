import { MunicipioInterface } from "./Interfaces";

export class Municipio implements MunicipioInterface{
    constructor(
        public CODAUTO: string,
        public CPRO: string,
        public CMUN: string,
        public DC: string,
        public NOMBRE: string,
    ){}

    public static createFromJsonObject(jsonObject:any):Municipio
        {
            let dato:Municipio= new Municipio(
                jsonObject['CODAUTO'],
                jsonObject['CPRO'],
                jsonObject['CMUN'],
                jsonObject['DC'],
                jsonObject['NOMBRE'],
            )
                return dato;
        } 
}