import { IPlanetRepository, PlanetRepository,  } from "../../data/planet.repository";
import { Planet } from "../entitities/planet.entity";

import { createSelector } from "@reduxjs/toolkit";

const planetRepo: IPlanetRepository = new PlanetRepository()

export const getAllPlanetsUseCase = () => {
   return planetRepo.getAll();
}