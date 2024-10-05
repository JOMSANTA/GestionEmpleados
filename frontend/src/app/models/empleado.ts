export class Empleado {
    constructor(_id ="", nombre = "", apellido = "", cargo = "", email = "",){
        this._id = _id;
        this.nombre = nombre;
        this.apellido= apellido;
        this.cargo = cargo;
        this.email = email;


    }
    _id: string;//id porq los datos llegan de mongo
    nombre: string;
    apellido: string;
    cargo: string;
    email: string;


}
