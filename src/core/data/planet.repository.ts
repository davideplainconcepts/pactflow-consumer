import { AppThunkDispatch, Store, store } from "../../app/store";
import { Planet } from "../entitities/planet.entity";
import { IPlanetModel } from "../model/planet.model";
import { getAllPlanets, getPlanet, createPlanet, deletePlanet } from './planets.slice'

export class PlanetRepository implements IPlanetModel  {

    private dispatch: AppThunkDispatch;
    
    constructor(dispatch: AppThunkDispatch) {
        this.dispatch = dispatch;
    }    
    async getAll() {
        const response = await this.dispatch(getAllPlanets());
        return response?.payload as Promise<Planet[]>;
    }     

    async get(orderFromSun: number) {
        const response = await this.dispatch(getPlanet(orderFromSun));
        return response?.payload as  Promise<Planet>;
    }   

    async create(planet: Planet) {
        const response = await this.dispatch(createPlanet(planet));
        return response?.payload as  Promise<Planet>;
    }   

    async delete(orderFromSun: number) {
        const response = await this.dispatch(deletePlanet(orderFromSun));
        return response?.payload as  Promise<number>;
    }   
    
}

