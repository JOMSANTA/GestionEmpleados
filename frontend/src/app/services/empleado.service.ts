import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';



@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  selectedEmpleado: Empleado;
  empleados : Empleado[];
  readonly URL_API= "http://localhost:3000/api/employees";

  constructor(private http: HttpClient) {
    this.selectedEmpleado= new Empleado();
    this.empleados=[];

   }

   getEmpleados(){
    return this.http.get(this.URL_API);
   }

   PostEmpleados(Empleado:Empleado){
    return this.http.post(this.URL_API,Empleado);
   }

   putEmpleados(Empleado:Empleado){
    return this.http.put(this.URL_API+ `/${Empleado._id}`, Empleado);//
   }

   deleteEmpleado(_id: string) { // Solo se necesita el id, no todo lo del empleado

    return this.http.delete(this.URL_API + `/${_id}`);// utilizamos el método delete
    
    }
}
