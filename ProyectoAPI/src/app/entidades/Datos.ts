import { Example, Origen, Prediccion } from "./Interfaces";

export class Datos implements Example{

    constructor(
        public origen: Origen,
    public elaborado: Date,
    public nombre: string,
    public provincia: string,
    public prediccion: Prediccion,
    public id: string,
    public version: string
    ){}
    public static createFromJsonObject(jsonObject:any):Datos
    {
        let dato:Datos= new Datos(
            jsonObject['origen'],
            jsonObject['elaborado'],
            jsonObject['nombre'],
            jsonObject['provincia'],
            jsonObject['prediccion'],
            jsonObject['id'],
            jsonObject['version'],
        )
            return dato;
    } 
    /*public getJsonObject():any
    {
        let jsonObject:any={};
        jsonObject['id']=this.id;
        jsonObject['first_name']=this.first_name;
        jsonObject['last_name']=this.last_name;
        jsonObject['email']=this.email;
        jsonObject['gender']=this.gender;
        jsonObject['avatar']=this.avatar;
        jsonObject['address']=this.address;
        jsonObject['city']=this.city;
        jsonObject['postalCode']=this.postalCode;
        return jsonObject;
    }*/
}