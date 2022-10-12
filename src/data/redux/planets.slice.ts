import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Planet, IPlanet} from "../../core/entitities/planet.entity";
import { PlanetRepository } from "../repository/planet.repository";


type initialStateType = {
  planets: IPlanet[] | [],
  selectedPlanet: IPlanet | null,
}

const initialState: initialStateType = {
    planets: [],
    selectedPlanet: null,
}

export const getAllPlanets = createAsyncThunk(
  "planets/getAll",
  async (_, thunkAPI) => {
    const response = await (thunkAPI.extra as PlanetRepository).getAll();
    return response;
  }
);

export const getPlanet = createAsyncThunk(
  "planets/getAll",
  async (orderFromSun: number, thunkAPI) => {
    const response = await (thunkAPI.extra as PlanetRepository).get(orderFromSun);
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
      state.selectedPlanet = action.payload;
  });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default planetSlice.reducer