import { useAppDispatch } from "../../app/hooks";
import { PlanetRepository } from "../../repository/planet.repository";
import { Planet } from "../entitities/planet.entity";

export class PlanetUseCase {

    constructor(){}

    public getAll(): Promise<Planet> {
        return PlanetRepository.getAll();
    };
    
    public get(orderFromSun: number): any {
        return PlanetRepository.get(orderFromSun);
    };
}