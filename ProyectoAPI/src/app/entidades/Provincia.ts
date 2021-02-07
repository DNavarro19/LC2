import { ProvinciaInterface } from "./Interfaces";

export class Provincia implements ProvinciaInterface{
    
    constructor(
        public CCOM: string,
        public CPRO: string,
        public PRO: string
        ){}

        public static createFromJsonObject(jsonObject:any):Provincia
    {
        let dato:Provincia= new Provincia(
            jsonObject['CCOM'],
            jsonObject['CPRO'],
            jsonObject['PRO'],
        )
            return dato;
    } 

}