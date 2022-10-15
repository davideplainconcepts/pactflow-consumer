import { IPlanet, SurfaceTemperature } from "./planet.interfaces";

export class Planet implements IPlanet {
    name?: string;
    orderFromSun?: number;
    hasRings?: boolean;
    mainAtmosphere?: string[];
    surfaceTemperatureC?: SurfaceTemperature;
}