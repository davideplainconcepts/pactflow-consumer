import { AnyAction, AsyncThunkAction } from "@reduxjs/toolkit";
import { AppThunkDispatch, store } from "../app/store";
import { Planet } from "../core/entitities/planet.entity";
import { PlanetModel } from "../core/model/planet.model";
import { getAllPlanets } from './planets.slice'


export interface IPlanetRepository {
    getAll: () => void
}
export class PlanetRepository implements IPlanetRepository  {

    private dispatch: AppThunkDispatch;
    
    constructor() {
        this.dispatch = store.dispatch as AppThunkDispatch
    }    

     getAll() {
        this.dispatch(getAllPlanets())
    }     
    
}

