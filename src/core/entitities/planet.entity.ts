export class Planet implements IPlanet{
    name?: string;
    orderFromSun?: number;
    hasRings?: boolean;
    mainAtmosphere?: string[];
    surfaceTemperatureC?: SurfaceTemperature;
}

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