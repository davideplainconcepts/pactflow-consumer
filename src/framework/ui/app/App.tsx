import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import './App.scss';
import { getAllPlanetsUseCase } from '../../../core/useCases/planet.use-cases';
import planetsSlice from '../../../data/planets.slice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {

    const ppp = async () => {
      const planets = await getAllPlanetsUseCase();
      console.log(planets)
    }

   
    ppp()
  }, [])
 
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
