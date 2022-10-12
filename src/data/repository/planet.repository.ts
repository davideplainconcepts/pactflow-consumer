import { Planet } from "../../core/entitities/planet.entity";

export interface PlanetRepository {
  getAll(): Promise<Planet[]>;
  get(orderFromSun: number): Promise<Planet>;
}

export const PlanetRepositoryImpl = (
  baseURL: string = "localhost:3000"
): PlanetRepository => {
  return {
    getAll: async () =>
      await fetch(`${baseURL}/planets`).then((result) => result.json()),
    get: async (orderFromSun: number) =>
      await fetch(`${baseURL}/planets/${orderFromSun}`).then((result) =>
        result.json()
      ),
  };
};
