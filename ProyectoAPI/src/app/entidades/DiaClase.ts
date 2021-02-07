import { Dia, EstadoCielo, HumedadRelativa, Nieve, Precipitacion, ProbNieve, ProbPrecipitacion, ProbTormenta, SensTermica, Temperatura, VientoAndRachaMax } from "./Interfaces";

export class DiaClase implements Dia{
    constructor(
    public estadoCielo: EstadoCielo[],
    public precipitacion: Precipitacion[],
    public probPrecipitacion: ProbPrecipitacion[],
    public probTormenta: ProbTormenta[],
    public nieve: Nieve[],
    public probNieve: ProbNieve[],
    public temperatura: Temperatura[],
    public sensTermica: SensTermica[],
    public humedadRelativa: HumedadRelativa[],
    public vientoAndRachaMax: VientoAndRachaMax[],
    public fecha: Date,
    public orto: string,
    public ocaso: string,
    ){}

    
}