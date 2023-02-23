import React, { createContext, useEffect,useState } from 'react';
import { EstudiantesService } from '../services/EstudiantesServices';

export const EstudianteContext=createContext(); 

const EstudianteContextProvider =(props)=>{
    const estudianteService=new EstudiantesService();

    const [estudiantes, setEstudiantes]=useState([]);

    const [editestudiantes, setEditEstudiante]=useState(null);
    
    useEffect(()=>{
        estudianteService.get().then(data=>setEstudiantes(data));
    },[estudianteService,estudiantes]);

    const createEstudiante=(estudiante)=>{
        estudianteService.create(estudiante).then((data)=>setEstudiantes([...estudiante,data]));
    };
    const deleteEstudiante=(id)=>{
        estudianteService.delete(id).
        then(()=>setEstudiantes(estudiantes.filter((p)=>p.id !==id)));
    };
    const findEstudiante=(id)=>{
        const estudiante=estudiantes.find((p)=>p.id===id);
        setEditEstudiante(estudiante);
    }
    const updateEstudiante=(estudiante)=>{
        estudianteService.update(estudiante).then((data)=>setEstudiantes(
            estudiantes.map((e)=>(e.id===estudiante.id?data:estudiante))
        ));
        setEditEstudiante(null)
    };

    return(
        <EstudianteContext.Provider
            value={{
                createEstudiante,
                deleteEstudiante,
                findEstudiante,
                updateEstudiante,
                editestudiantes,
                estudiantes
            }}
        >
            {props.children}
        </EstudianteContext.Provider>
    );
}
export default EstudianteContextProvider;