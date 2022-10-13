import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import './App.scss';
import { useUseCases } from '../../../data/useUseCases';

function App() {
  const dispatch = useAppDispatch();
  const useCases = useUseCases(dispatch);

  useEffect(() => {
    useCases.getAllPlanets();
  }, [])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
