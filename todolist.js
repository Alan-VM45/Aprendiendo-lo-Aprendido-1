import { preguntar } from "./Librerias/iinterface.js";

let Tareas=[];
async function EditarTarea(indice) {
    console.clear();
    let t= Tareas[indice];

    console.log("Bienvenido al editor de Tareas!!");

    console.log("Editando la Tarea: "+t.titulo+ "\n");

    let nuevoTitulo = await preguntar("Nuevo título (" + t.titulo + "): ");
    let nuevaDescripcion= await preguntar("Nueva Descripcion("+ t.descripcion +"): ");
    let nuevoEstado= await preguntar("Nuevo Estado("+ t.estado +"): ");
    let nuevaDificultad= await preguntar("Nueva Dificultad(" + t.dificultad + "): ");
    let nuevoVencimiento= await preguntar("Nueva Fecha de Vencimiento(" + t.dificultad +"): ");

    if(nuevoTitulo)t.titulo = nuevoTitulo;
    if(nuevaDescripcion) t.descripcion = nuevaDescripcion;
    if(nuevoEstado) t.estado = nuevoEstado;
    if(nuevaDificultad) t.dificultad = nuevaDificultad;
    if(nuevoVencimiento)t.vencimiento = nuevoVencimiento;

    console.log("Tarea actualizada!");
    await preguntar("\nPresiona Enter para volver...");
}

async function VerDetalleTarea(indice) {
    console.clear();
    let t = Tareas[indice];

    console.log("Detalles de la tarea:\n");
    console.log("Título: " + t.titulo);
    console.log("Descripción: " + t.descripcion);
    console.log("Estado: " + t.estado);
    console.log("Dificultad: " + t.dificultad);
    console.log("Vencimiento: " + t.vencimiento);
    console.log("Fecha de creación: " + t.fechaCreacion);

    let opcion = await preguntar("\nPresiona [E] para editar o [0] para volver: ");

    if (opcion.toUpperCase() === "E") {
        await EditarTarea(indice);
    }   
}

async function TodalasTareas(){
    console.clear();
    console.log("Todas las Tareas\n");
    if (Tareas.length === 0) {
        console.log("Todavia no hay tareas cargadas...");
    } else {
        for (let i = 0; i < Tareas.length; i++) {
            let t= Tareas[i];
            console.log((i+1)+". "+t.titulo);   
        }   
    }
    let eleccion = await preguntar("\nIngrese el número de la tarea para ver detalles o 0 para volver: ");
    let num = parseInt(eleccion);
  if (!isNaN(num) && num > 0 && num <= Tareas.length) {
    await VerDetalleTarea(num - 1); 
  }
}
async function Pendientes(){
    console.clear();
    console.log("Todas las tareas Pendientes\n");

    let pendientes = Tareas.filter(t=>t.estado === "P"|| t.estado ==="Pendiente");

    if(pendientes.length > 0) {
        for (let i = 0; i < Tareas.length; i++) {
            let t= Tareas[i];
            console.log((i+1)+". "+t.titulo);   
        }
    }else{
        console.log("Todavia no hay tareas  pendientes cargadas...");
    }
    let eleccion = await preguntar("\nIngrese el número de la tarea para ver detalles o 0 para volver: ");
    let num = parseInt(eleccion);
  if (!isNaN(num) && num > 0 && num <= Tareas.length) {
    await VerDetalleTarea(num - 1); 
  } 
}
async function EnCurso(){
    console.clear();
    console.log("Todas las tareas En Curso\n");

    let Encurso = Tareas.filter(t=> t.estado === "E"|| t.estado ==="En Curso");

    if(Encurso.length > 0) {
        for (let i = 0; i < Tareas.length; i++) {
            let t= Tareas[i];
            console.log((i+1)+". "+t.titulo);   
        }
    }else{
        console.log("Todavia no hay tareas  cargadas...");
    }
    let eleccion = await preguntar("\nIngrese el número de la tarea para ver detalles o 0 para volver: ");
    let num = parseInt(eleccion);
  if (!isNaN(num) && num > 0 && num <= Tareas.length) {
    await VerDetalleTarea(num - 1); 
  } 
}
async function Terminadas(){
    console.clear();
    console.log("Todas las tareas Terminadas\n");

    let Terminada = Tareas.filter(t=> t.estado === "T"|| t.estado === "Terminada");

    if(Terminada.length > 0) {
        for (let i = 0; i < Tareas.length; i++) {
            let t= Tareas[i];
            console.log((i+1)+". "+t.titulo);   
        }
    }else{
        console.log("Todavia no hay tareas Terminadas cargadas...");
    }
    let eleccion = await preguntar("\nIngrese el número de la tarea para ver detalles o 0 para volver: ");
    let num = parseInt(eleccion);
  if (!isNaN(num) && num > 0 && num <= Tareas.length) {
    await VerDetalleTarea(num - 1); 
  } 
}

async function Canceladas() {
    console.clear();
    console.log("Todas las Tareas Canceladas\n");
    let Canceladas = Tareas.filter(t=> t.estado === "C"|| t.estado === "Cancelada");
    if (Canceladas.length > 0) {
        for (let i = 0; i < Tareas.length; i++) {
            let t = Tareas[i];
            console.log((i+1)+". "+t.titulo);
        }
    } else {
        console.log("Todavia no hay tareas Canceladas cargadas...");
    }
    let eleccion = await preguntar("\nIngrese el número de la tarea para ver detalles o 0 para volver: ");
    let num = parseInt(eleccion);
  if (!isNaN(num) && num > 0 && num <= Tareas.length) {
    await VerDetalleTarea(num - 1); 
  } 
}

async function VerTarea() {
    let opc;
    do {  
        console.clear();
        console.log("¿Que Tareas quieres ver?\n");
        console.log(" [1]Todas las tareas.\n [2]Pendientes.\n [3]En Curso.\n [4]Terminadas.\n [5]Cancelada. \n [6]Volver.");

        opc = parseInt(await preguntar(">"));
        if (opc >= 1 && opc<= 6) {
            switch (opc) {
                case 1:
                    await TodalasTareas();
                    break;
                case 2: 
                     await Pendientes();
                    break;
                case 3:
                    await EnCurso();
                    break;
                case 4:
                    await Terminadas();
                    break;
                case 5:
                    await Canceladas();
                    break;
                case 6:
                    Main();
                    break;
                default:
                    console.log("Opcion invalida, Vuelve a intentar...");
                    break;
            }   
        }    
    } while (opc !=6);
}

 async function BuscarTarea(){
    console.clear();
    console.log("Buscador de Tareas.\n");

    let palabraClave = await preguntar("Ingrese el titulo de la Tarea: ");

    let clave = palabraClave.toLowerCase();

    let coincidencias = Tareas.filter(t => t.titulo.toLowerCase().includes(clave));

    if (coincidencias.length > 0) {
        console.log("Tareas encontradas: ");
        for(let i = 0; i < Tareas.length; i++){
            let t = Tareas[i];
            console.log((i+1)+". "+t.titulo);
        }
    } else{
        console.log("No se encontro ninguna tarea con ese titulo...")
    }
    let eleccion = await preguntar("\nIngrese el número de la tarea para ver detalles o 0 para volver: ");
    let num = parseInt(eleccion);
        if (!isNaN(num) && num > 0 && num <= Tareas.length) {
            await VerDetalleTarea(num - 1); 
        } 
}
async function AgregarTarea() {
    console.clear();
    
    let titulo;
    let descripcion;
    let estado;
    let dificultad;
    let vencimiento;
    let fechaCreacion = new Date().toLocaleString();
    console.log("\t Bienvenido al creador de tareas.\n");
    titulo = await preguntar("1. Ingresa el titulo: ");
    descripcion = await preguntar("2. Ingresa una descrpcion: ");
    estado = await preguntar("3. Estado: ([P]endiente/ [E]n curso / [T]erminada / [C]ancelada): ");
    dificultad = await preguntar("4. Dificultad: ([1] / [2] / [3]): ");
    vencimiento = await preguntar("5. Vencimiento: ")
    
    let nuevaTarea={
        titulo,
        descripcion,
        estado, 
        dificultad, 
        vencimiento,
        fechaCreacion
    };
    Tareas[Tareas.length] = nuevaTarea;
    console.log("Datos guardados!!");   
}
async function Main() {
 let opciones;
    do {
        console.clear();
        console.log("Bienvenido/a al sistema!");
        console.log("¿Que desea hacer?");
        console.log("\t1. ver Mis Tareas. \n\t2. Buscar una Tarea. \n\t3. Agregar una Tarea. \n\t 4.Salir")
        opciones = parseInt(await preguntar("Ingrese una opcion: "));
        if (opciones >= 1 && opciones <= 3 ) {
            switch (opciones) {
                case 1:
                    await VerTarea();
                    break;
                case 2:
                    await BuscarTarea();
                    break;
                case 3:
                    await AgregarTarea();
                    break; 

                default:
                    console.log("la opcion no es valida...")
                    break;
            }
        }
    } while (opciones !== 4);    
}
Main();