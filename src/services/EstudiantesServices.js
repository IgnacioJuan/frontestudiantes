import axios from "axios";

export class EstudiantesService{
    baseUrl="https://est-rest-api.herokuapp.com/estudiate"

    create(estudiante){
        return axios.post(this.baseUrl+"/",estudiante).then(res=>res.data);
    }
    
    get(){
        return axios.get(this.baseUrl+"/",).then(res=>res.data);
    }
    
    update(estudiante){
        return axios.put(this.baseUrl+"/"+estudiante.id,estudiante).then(res=>res.data);
    }
    
    delete(id){
        return axios.delete(this.baseUrl+"/"+id);
    }
}