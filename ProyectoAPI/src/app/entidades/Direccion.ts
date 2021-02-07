import { Peticion } from "./Interfaces";

export class Direccion implements Peticion{
    
    constructor(
        public descripcion: string,
        public estado: number,
        public datos: string,
        public metadatos: string,
    ){}
    public static createFromJsonObject(jsonObject:any):Direccion
    {
        let dato:Direccion= new Direccion(
            jsonObject['descripcion'],
            jsonObject['estado'],
            jsonObject['datos'],
            jsonObject['metadatos'],

        )
            return dato;
    } 

}