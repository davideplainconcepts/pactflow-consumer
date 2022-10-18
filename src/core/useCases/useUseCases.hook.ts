import { useAppDispatch } from "../../app/hooks"
import { PlanetRepository } from "../data/planet.repository";
import { IPlanetModel } from "../model/planet.model";
import { PlanetUseCases } from "./planet.use-cases";

export const useUseCases = () => {
    const dispatch = useAppDispatch();
    const planetRepository: IPlanetModel = new PlanetRepository(dispatch);
    const planetUseCases: IPlanetModel = new PlanetUseCases(planetRepository);

    return {
        getPlanet: planetUseCases.get.bind(planetUseCases),
        getAllPlanets: planetUseCases.getAll.bind(planetUseCases),
        createPlanet: planetUseCases.create.bind(planetUseCases),
        deletePlanet: planetUseCases.delete.bind(planetUseCases),
    }
}