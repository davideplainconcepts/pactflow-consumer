import { resolve } from "path";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPlanets } from "../../core/data/planets.slice";
import { useUseCases } from "../../core/useCases/useUseCases.hook"

export const ViewModel = () => {

    const { getPlanet, getAllPlanets } = useUseCases();
    const planets = useSelector(selectPlanets);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    useEffect(() => {
        if(!isMounted){
            getAllPlanets();
            setIsMounted(true)
        }
    }, [planets.length])
    
    return (
        <div>Number of planets { planets.length } </div>
    )
}