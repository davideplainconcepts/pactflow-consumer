import { AnyAction, AsyncThunkAction } from "@reduxjs/toolkit";
import { AppThunkDispatch, store } from "../app/store";
import { Planet } from "../core/entitities/planet.entity";
import { IPlanetModel } from "../core/model/planet.model";
import { getAllPlanets, getPlanet } from './planets.slice'

export class PlanetRepository implements IPlanetModel  {

    private dispatch: AppThunkDispatch;
    
    constructor() {
        this.dispatch = store.dispatch as AppThunkDispatch
    }    
    async getAll() {
        const response = await this.dispatch(getAllPlanets());
        return response?.payload as Planet[];
    }     

    async get(orderFromSun: number) {
        const response = await this.dispatch(getPlanet(orderFromSun));
        return response?.payload as Planet[];
    }   
    
}

