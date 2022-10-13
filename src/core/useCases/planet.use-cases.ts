import { getAll, IPlanetRepository, PlanetRepository, planetRepository } from "../../data/planet.repository";
import { Planet } from "../entitities/planet.entity";

import { createSelector } from "@reduxjs/toolkit";

const planetRepo: any = new PlanetRepository()

export const getAllPlanetsUseCase: Promise<Planet[]> = () => {
   return planetRepo.getAll();
}