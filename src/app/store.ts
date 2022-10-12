import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import planetsSlice from '../data/redux/planets.slice';
import { PlanetRepositoryImpl } from '../data/repository/planet.repository';

export const store = configureStore({
  reducer: {
    planets: planetsSlice
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
    thunk: {extraArgument: PlanetRepositoryImpl('http://localhost:3000')}
  })],
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// app/hooks.ts
