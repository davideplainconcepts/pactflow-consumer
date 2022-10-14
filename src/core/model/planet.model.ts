import { Planet } from "../entitities/planet.entity";

export interface IPlanetModel {
  getAll(): Promise<Planet[]>;
  get(orderFromSun: number): Promise<Planet>;
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
  };
};