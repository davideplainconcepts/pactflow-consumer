import { resolve } from "path";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectPlanets } from "../../core/data/planets.slice";
import { useUseCases } from "../../core/useCases/useUseCases.hook"

export const ViewModel = () => {

    const { getPlanet, getAllPlanets } = useUseCases();
    const planets = useSelector(selectPlanets)
    useEffect(() => {
        getAllPlanets();
    }, [planets.length])
    
    return (
        <div>Number of planets { planets.length } </div>
    )
}