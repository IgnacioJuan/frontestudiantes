import React, {useContext,useState} from "react";
import {Panel} from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { EstudianteContext } from "../contexts/EstudianteContext";
import {Button} from 'primereact/button'

import EstudiantesForm from "./EstudiantesForm";

const EstudiantesList =()=>{
    const {estudiantes, findEstudiante}=useContext(EstudianteContext)

    const [isVisible, setIsVisible]= useState(false);

    const saveEstudiante=(id)=>{
        findEstudiante(id)
        setIsVisible(true)
    }
    const footer=(
        <div className="p-clearfix" style={{width:"100%"}}>
            <Button 
                style={{flat:"left"}}
                icon="pi pi-plus"
                label="ADD"
                onClick={()=>setIsVisible(true)}
                />
        </div> 
    )
    return(
        <>
            <Panel header="LISTA DE ESTUDIANTES" style={{textAlign:"center"}}>
                <DataTable
                    value={estudiantes}
                    selectionMode="single"
                    onSelectionChange={e=>saveEstudiante(e.value.id)}
                    footer={footer}
                >
                    <Column field="id" header="ID"/>
                    <Column field="nombre" header="NOMBRE"/>
                    <Column field="numero" header="NUMERO"/>
                    <Column field="correo" header="CORREO"/>
                    <Column field="listCursos" header="CURSOS"/>
                    <Column field="gpa" header="GPA"/>

                </DataTable>
            </Panel>
            <EstudiantesForm isVisible={isVisible} setIsVisible={setIsVisible}/>
        </>
    );
    
}
export default EstudiantesList;