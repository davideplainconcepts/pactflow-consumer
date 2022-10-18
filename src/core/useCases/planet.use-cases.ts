import { PlanetRepository,  } from "../data/planet.repository";
import { Planet } from "../entitities/planet.entity";
import { IPlanetModel } from "../model/planet.model";

export class PlanetUseCases implements IPlanetModel {

   private planetRepository: IPlanetModel;

   constructor(planetRepository: IPlanetModel) {
      this.planetRepository = planetRepository;
   }

   async get(orderFromSun: number): Promise<Planet> {
      return await this.planetRepository.get(orderFromSun);
   }

   async getAll(): Promise<Planet[]> {
      return await this.planetRepository.getAll();
   }

   async create(planet: Planet): Promise<Planet> {
      return await this.planetRepository.create(planet);
   }

   async delete(orderFromSun: number): Promise<number > {
      return await this.planetRepository.delete(orderFromSun);
   }
}