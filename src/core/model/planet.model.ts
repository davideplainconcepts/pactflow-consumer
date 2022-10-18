import { Planet } from "../entitities/planet.entity";

export interface IPlanetModel {
  getAll(): Promise<Planet[]>;
  get(orderFromSun: number): Promise<Planet>;
  create(planet: Planet): Promise<Planet>;
  delete(orderFromSun: number): Promise<number>;
}

export const PlanetModel = (
  baseURL: string = "localhost:3000"
): IPlanetModel => {
  return {
    getAll: async () =>
      await fetch(`${baseURL}/planets`).then((result) => result.json()),
    get: async (orderFromSun: number) =>
      await fetch(`${baseURL}/planets/${orderFromSun}`).then((result) =>
        result.json()
      ),
    create: async (planet: Planet) =>
      await fetch(`${baseURL}/planets/`,{
        method: 'POST',
        body: JSON.stringify(planet)
      }).then((result) =>
        result.json()
      ),
    delete: async (orderFromSun: number) => await fetch(`${baseURL}/planets/`,{
      method: 'DELETE',
      body: JSON.stringify({orderFromSun})
    }).then((result) =>
      result.json()
    ),
  };
};
