import { AnyAction, AsyncThunkAction } from "@reduxjs/toolkit";
import { AppThunkDispatch, store } from "../app/store";
import { Planet } from "../core/entitities/planet.entity";
import { getAllPlanets } from './planets.slice'


export interface IPlanetRepository {
    getAll: () => Promise<unknown>
}
export class PlanetRepository implements IPlanetRepository  {

    private dispatch: AppThunkDispatch;
    
    constructor() {
        this.dispatch = store.dispatch as AppThunkDispatch
    }    
    //@ts-ignore
    async getAll() {
        const response = await this.dispatch(getAllPlanets());
        return response?.payload ;
    }     
    
}

