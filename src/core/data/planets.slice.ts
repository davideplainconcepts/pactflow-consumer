import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";
import { Planet } from "../entitities/planet.entity";
import { IPlanetModel } from "../model/planet.model";

type initialStateType = {
  planets: Planet[],
  selectedPlanet: Planet | null,
}

const initialState: initialStateType = {
    planets: [],
    selectedPlanet: null,
}

export const getAllPlanets = createAsyncThunk(
  "planets/getAll",
  async (_, thunkAPI) => {
    const response = await (await (thunkAPI.extra as IPlanetModel).getAll());
    return response;
  }
);

export const getPlanet = createAsyncThunk(
  "planets/get",
  async (orderFromSun: number, thunkAPI) => {
    const response = await (thunkAPI.extra as IPlanetModel).get(orderFromSun);
    return response;
  }
);

export const createPlanet = createAsyncThunk(
  "planets/create",
  async (planet: Planet, thunkAPI) => {
    const response = await (thunkAPI.extra as IPlanetModel).create(planet);
    return response;
  }
);

export const deletePlanet = createAsyncThunk(
  "planets/delete",
  async (orderFromSun: number, thunkAPI) => {
    const response = await (thunkAPI.extra as IPlanetModel).delete(orderFromSun);
    return response;
  }
);

const planetSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPlanets.fulfilled, (state, action) => {
        state.planets = action.payload.map((planet:Planet) => planet);
    });
    builder.addCase(getPlanet.fulfilled, (state, action) => {
      state.selectedPlanet = action.payload as Planet;
  });
  },
});

const selectSelf = (state: any) => state.planets;
export const selectPlanets = createSelector(selectSelf, (state) => {
  return state.planets
});

export default planetSlice.reducer