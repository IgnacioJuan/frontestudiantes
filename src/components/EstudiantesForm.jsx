import React, { useContext, useState, useEffect } from "react";
import { EstudianteContext } from "../contexts/EstudianteContext";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

const EstudiantesForm = (props) => {
  const { isVisible, setIsVisible } = props;
  const {
    createEstudiante,
    deleteEstudiante,
    findEstudiante,
    updateEstudiante,
    editestudiantes
  } = useContext(EstudianteContext);
  const initialEstudianteState = {
    id: "",
    nombre: "",
    numero: 0.000,
    correo: "",
    listCursos: "",
    gpa: 0,
  };
  const [estudianteData, setEstudianteData] = useState(initialEstudianteState);

  useEffect(() => {
    if(editestudiantes) setEstudianteData(editestudiantes);

  }, [editestudiantes])
  

  const changeField = (data, field) => {
    setEstudianteData({
      ...estudianteData,
      [field]: data,
    });
    console.log(estudianteData);
  };
  const saveEstudiante=()=>{
    if(!editestudiantes){
      createEstudiante(estudianteData);
    }else{
      updateEstudiante(estudianteData);
    }
    setEstudianteData(initialEstudianteState);
    setIsVisible(false);
  };
  const _deleteEstudiante=()=>{
    if(editestudiantes){

      deleteEstudiante(estudianteData.id)
      setEstudianteData(initialEstudianteState);
      setIsVisible(false);
    }
  }
  const dialogfooter = (
    <div className="ui-dialog-buttonpane p-clearfix">
      <Button label="Borrar" icon="pi pi-times" onClick={_deleteEstudiante}/>
      <Button label="Guardar" icon="pi pi-check" onClick={saveEstudiante} />
    </div>
  );
  
  return (
    <>
      <Dialog
        visible={isVisible}
        modal={true}
        style={{ width: "420px" }}
        contentStyle={{ overflow: "visible" }}
        header="Detalles del estudiante"
        onHide={() => setIsVisible(false)}
        footer={dialogfooter}
      >
        <div className="p-grid p-fluid">
        <br />
          <div className="p-float-label">
            <InputText
              value={estudianteData.id}
              onChange={(e) => changeField(e.target.value, "id")}
            />
            <label>id</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={estudianteData.nombre}
              onChange={(e) => changeField(e.target.value, "nombre")}
            />
            <label>Nombre</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputNumber
              value={estudianteData.numero}
              onValueChange={(e) => changeField(e.target.value, "numero")}
            />
            <label>Numero</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={estudianteData.correo}
              onChange={(e) => changeField(e.target.value, "correo")}
            />
            <label>Correo</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputText
              value={estudianteData.listCursos}
              onChange={(e) => changeField(e.target.value, "listCursos")}
            />
            <label>Cursos</label>
          </div>
          <br />
          <div className="p-float-label">
            <InputNumber
              value={estudianteData.gpa}
              onValueChange={(e) => changeField(e.value, "gpa")}
            />
            <label>GPA</label>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default EstudiantesForm;
