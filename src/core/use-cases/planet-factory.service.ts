import { Planet } from "../entitities/planet.entity";

export class PlanetFactoryService {
    static createNewPlanet(createPlanetDto: Planet) {
      const newPlanet = new Planet();
      newPlanet.name = createPlanetDto.name;
      newPlanet.hasRings = createPlanetDto.hasRings;
      newPlanet.surfaceTemperatureC = createPlanetDto.surfaceTemperatureC;
      newPlanet.mainAtmosphere = createPlanetDto.mainAtmosphere;
      newPlanet.orderFromSun = createPlanetDto.orderFromSun;
      return newPlanet;
    } 
  }