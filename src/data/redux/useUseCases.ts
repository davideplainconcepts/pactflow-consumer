import { getAllPlanets, getPlanet } from "./planets.slice"

export const useUseCases = (dispatch: Function) => {
    return {
        getAllPlanets: () => dispatch(getAllPlanets()),
        getPlanet: (orderFromSun: number) => dispatch(getPlanet(orderFromSun)),
    }
}