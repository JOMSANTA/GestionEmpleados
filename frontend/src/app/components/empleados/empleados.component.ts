import { Component, OnInit } from "@angular/core";
import { EmpleadosService} from "src/app/services/empleado.service";
import { NgForm } from "@angular/forms";
import { Empleado} from 'src/app/models/empleado';

declare var M: any;

@Component({
    selector:'app-empleados',
    templateUrl: './empleados.component.html',
    styleUrls: ['./empleados.component.css'],
    providers: [EmpleadosService]
})
export class EmpleadosComponent implements OnInit {
    constructor(public empleadoService: EmpleadosService) { }
    //inicio de la app
    ngOnInit(): void {
        //optener los datos al iniciar y mostrar para la evidencia
        this.getEmpleados();
    
    }
    
    agregarEmpleado(form?: NgForm) {
    this.empleadoService.PostEmpleados(form?.value)
    .subscribe(res => {
    //resetiar el formato despues de guardar
    this.resetForm(form);
    //mostrar mensaje
    M.toast({html: "Empleado Guardado"});
    this.getEmpleados();
    });
    
    }

    getEmpleados() {
        this.empleadoService.getEmpleados()
        //escuchar respuesta
        .subscribe(res=>{
            this.empleadoService.empleados = res as  Empleado[];
            console.log(res);
        })
    }
    
    resetForm(form?: NgForm) { // Limpiar el formulario, recibe un formulario como parametro
    
    if (form) {
    
    form.reset();
    
    this.empleadoService.selectedEmpleado = new Empleado();
    
    }
    
    }
    editEmpleado() {}

    deleteEmpleado() {}
}