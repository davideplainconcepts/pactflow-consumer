import { IPlanetModel } from "../model/planet.model";
import { Planet } from "./planet.entity";

export interface IPlanet {
    name?: string;
    orderFromSun?: number;
    hasRings?: boolean;
    mainAtmosphere?: string[];
    surfaceTemperatureC?: SurfaceTemperature;
}

export interface SurfaceTemperature {
    min: number | null;
    max: number | null;
    mean: number;
}

export interface IPlanetRepo {
    getAll: Promise<Planet[]>;
    get(orderFromSun: number): Promise<Planet>;
}
