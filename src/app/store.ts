import { configureStore, ThunkAction, AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import planetsSlice from '../core/data/planets.slice';
import { PlanetModel } from '../core/model/planet.model';

export const store = configureStore({
  reducer: {
    planets: planetsSlice
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
    thunk: {extraArgument: PlanetModel('http://localhost:3000')}
  })],
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type Store = typeof store;
export type AppThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
