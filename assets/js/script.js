
//Se crea la funcion cargar tabala y se le pasa el parametro de listadoNuevo esto para indicar en un futuro con que es lo que se trabaja//
var cargarTabla = (listadoNuevo)=>{
    //Primero se llaman a los elementos del html atraves de un identificador//
    let eSBtnAccion = document.getElementById("sBtnAccion");
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eEmail = document.getElementById("email");
    let eDireccion = document.getElementById("direccion");
    let eTelefono = document.getElementById("telefono");
    let eCelular = document.getElementById("celular");
    let eEdad = document.getElementById("edad");
    let eCiudad = document.getElementById("ciudad");
    //Segundo procedo a crear una etiqueta de tipo tabla que contenga los siguientes parametros con una variable llamada render cuya funcion es indicar que estamos cargando un apartado visual//
    render = "<table>"
    //Terecero enn esta variable le agruegamos un += simbolo de que concadenacion, la variable contiene etiquetas th el cual es utilizada para ver un apartado con los campos que iran dentro en este caso seran los titulos de la tabla//
    render += "<tr><th>Nombre</th><th>Apellido</th><th>Email</th><th>Direccion</th><th>Telefono</Th><th>Celular</Th><th>Edad</th><th>Ciudad</th><th>Accion</th></tr>"
    //Cuarto el for lo que hace es que para i con el valor de 0 se compara si es menor al largo de listado nuevo agregando un i++ lo que hace que al listado nuevo se le agruegue un valor de indice mas, asi por cada objeto de la lista tendra un indice qu eparta en 0 y que se le valla agregugando un valor mas a i asi no se le asigna el mismo valor de indice al objeto//
    for (let i = 0; i < listadoNuevo.length; i++) {
        //Quinto aqui se usa una constante con el proposito de que el valor no cambie y dicho valor es la asigancion de la lista con un indice//
        const element = listadoNuevo[i];
        //Sexto lo qeu se realiza aqui es concadenar el elemento del campo llamado esta concadenacion va de la mano con los th mencionados anteriormente esto para que en la tabla se muestren de manera ordanada los registros//
        render+="<tr>"
        render+="<td>"+element.nombre+"</td>";
        render+="<td>"+element.apellido+"</td>";
        render+="<td>"+element.email+"</td>";
        render+="<td>"+element.direccion+"</td>";
        render+="<td>"+element.telefono+"</td>";
        render+="<td>"+element.celular+"</td>";
        render+="<td>"+element.edad+"</td>";
        render+="<td>"+element.ciudad+"</td>";
        //Concadena el id de los botones con el indice en el que esta asignado en la tabla y se le agrega unos efectos para cuando le den click//
        render+="<td>"
        render+="<button id='btnEditar"+i+"' class='btn waves-effect grey'>Editar</button>"
        render+="<button id='btnEliminar"+i+"' class='btn waves-effect grey'>Eliminar</button>"
        render+="</td>"
        render+="</tr>"
        }
    render+="</table>"
    //Septimo aqui lo unico que se hace es cargar la tabla a HTML dandole el valor de render, todo lo de antes//
    eContenedorTabla.innerHTML = render;
    //Octavo el for lo que hace es que para i con el valor de 0 se compara si es menor al largo de listado nuevo agregando un i++ lo que hace que al listado nuevo se le agruegue un valor de indice mas, asi por cada objeto de la lista tendra un indice qu eparta en 0 y que se le valla agregugando un valor mas a i asi no se le asigna el mismo valor de indice al objeto//
    for (let i = 0; i < listadoNuevo.length; i++) {
        //Noveno aqui se usa una constante con el proposito de que el valor no cambie y dicho valor es la asigancion de la lista con un indice//
        const element = listadoNuevo[i];
        //Decimo se crea una varible var cuyo proposito es recuperar el elemento de btnEditar concadenando al indice del objeto de la lista//
        var eBtnEditar = document.getElementById("btnEditar"+i);
        //Onceavo al eBtnEditar se le asigna un listener el cual es una funcion que espera algo, un evento,  en este caso espera un click luego de eso ejecuta la funcion que trae//
        eBtnEditar.addEventListener("click",()=>{
            //Doceavo se crea un let con el valor de una etiqueta tipo boton esto se realiza para no recargar la pagina, ademas se le agregua un identificador para ser llamado despues, a este se le da el valor de i esto para que cuando uno le realize click este llame al objeto relacionado por su indice y la clase proviniente de material lo que hace es agreguar un efecto al clickear sobre el ademas de agregar que sea de color gris unicamente que no cambie//
            let sBtn = "<button type='button' id='btnEditar' value='"+i+"' class='btn waves-effect grey'>Editar</button>"
            //Treceavo cargo eSBtnAccion a html y le doy el valor de sBtn//
            eSBtnAccion.innerHTML = sBtn
            //Catorceavo creo un variable tipo let que contiene la recuperacion del elemento btnEditar acompañado de un evento listener que al dar click en el ejecuta la funcion modificar y le enterga listado nuevo//
            let eBtnEditarUp = document.getElementById("btnEditar");
            eBtnEditarUp.addEventListener('click',()=>modificar(listadoNuevo)) 
            //Quinceavo recupera los elementos y los muestra//
            eNombre.value = element.nombre;
            eApellido.value = element.apellido;
            eEmail.value = element.email;
            eDireccion.value = element.direccion;
            eTelefono.value = element.telefono;
            eCelular.value = element.celular;
            eEdad.value = element.edad;
            eCiudad.value = element.ciudad;
        })
        //Dieciseisavo creo un variable tipo let que contiene la recuperacion del elemento btnEliminar acompañado de un evento listener que al dar click en el ejecuta la funcion//
        var eBtnEliminar = document.getElementById("btnEliminar"+i);
        eBtnEliminar.addEventListener("click",()=>{
            //Diecisiteavo se crea un let con el valor de una etiqueta tipo boton esto se realiza para no recargar la pagina, ademas se le agregua un identificador para ser llamado despues, a este se le da el valor de i esto para que cuando uno le realize click este llame al objeto relacionado por su indice y la clase proviniente de material lo que hace es agreguar un efecto al clickear sobre el ademas de agregar que sea de color gris unicamente que no cambie//
            let sBtn = "<button type='button' id='btnEliminar' value='"+i+"' class='btn waves-effect grey'>Eliminar</button>"
            //Dieciochoavo cargo eSBtnAccion a html y le doy el valor de sBtn//
            eSBtnAccion.innerHTML = sBtn
            //Dicinueveavo creo un variable tipo let que contiene la recuperacion del elemento btnEliminar acompañado de un evento listener que al dar click en el ejecuta la funcion modificar y le enterga listado nuevo//
            let eBtnEliminarUp = document.getElementById("btnEliminar");
            eBtnEliminarUp.addEventListener('click',()=>eliminar(listadoNuevo)) 
            //Veinteavo recupera los elementos y los muestra//
            eNombre.value = element.nombre;
            eApellido.value = element.apellido;
            eEmail.value = element.email;
            eDireccion.value = element.direccion;
            eTelefono.value = element.telefono;
            eCelular.value = element.celular;
            eEdad.value = element.edad;
            eCiudad.value = element.ciudad;
        })
        
        
    }
}

////
var modificar = (listadoNuevo)=>{
    //Primero se llaman a los elementos del html atraves de un identificador//
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eEmail = document.getElementById("email");
    let eDireccion = document.getElementById("direccion");
    let eTelefono = document.getElementById("telefono");
    let eCelular = document.getElementById("celular");
    let eEdad = document.getElementById("edad");
    let eCiudad = document.getElementById("ciudad");
    let eBtnEditarUp = document.getElementById("btnEditar");
    //Segundo se crea una varialble que conteine el valor de los elementos//
    let nombre = eNombre.value;
    let apellido = eApellido.value;
    let email = eEmail.value;
    let direccion = eDireccion.value;
    let telefono = eTelefono.value;
    let celular = eCelular.value;
    let edad = eEdad.value;
    let ciudad = eCiudad.value;
    let indice = eBtnEditarUp.value;
    //Tercero accedo al indice del listado nuevo por su valor dentro de este y le digo que su valor cambiara por el nuevo// 
    listadoNuevo[indice].nombre = nombre;
    listadoNuevo[indice].apellido = apellido;
    listadoNuevo[indice].email = email;
    listadoNuevo[indice].direccion = direccion;
    listadoNuevo[indice].telefono = telefono;
    listadoNuevo[indice].celular = celular;
    listadoNuevo[indice].edad = edad;
    listadoNuevo[indice].ciudad = ciudad;
    //Cuarto cargo al al localstorage le cargo los itmes dentro que son alumnos y ademas los modifico a datos tipos json con la funcion de stringify//
    localStorage.setItem('alumnos',JSON.stringify(listadoNuevo))
    //Quinto llamo a la funcion CargarTabla//
    cargarTabla(listadoNuevo);
}

//Creo la funcion eliminar con una variable tipo var//
var eliminar = (listadoNuevo)=>{
    //Primero se llaman a los elementos del html atraves de un identificador//
    let eBtnEliminarUp = document.getElementById("btnEliminar");
    //Segundo se crea una varialble que conteine el valor de los elementos//
    let indice = eBtnEliminarUp.value;
    //Tercero creo un variable llamada lista al cual le entrego listadoNuevo y le filtro cada elemento o objeto por indice// 
    let lista = listadoNuevo.filter((p)=>p.id!=indice)
    //Cuarto se crea lsitafinal la cual contiene a lista con la funcion map que indica que debe cambiar todos los elementos relacionado al indice//
    let listaFinal = lista.map((p,index)=>{return {...p,'id':index}})
    //Cuarto cargo al al localstorage le cargo los itmes dentro que son alumnos y ademas los modifico a datos tipos json con la funcion de stringify//
    localStorage.setItem('alumnos',JSON.stringify(listaFinal))
    //Quinto llamo a la funcion CargarTabla//
    cargarTabla(listaFinal)
}

//Creo una funcion tipo var llamada registrar//
var registrar = ()=>{
    //Primero se llaman a los elementos del html atraves de un identificador//
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eEmail = document.getElementById("email");
    let eDireccion = document.getElementById("direccion");
    let eTelefono = document.getElementById("telefono");
    let eCelular = document.getElementById("celular");
    let eEdad = document.getElementById("edad");
    let eCiudad = document.getElementById("ciudad");
    //Segundo se crea una varialble que conteine el valor de los elementos//
    let nombre = eNombre.value;
    let apellido = eApellido.value;
    let email = eEmail.value;
    let direccion = eDireccion.value;
    let telefono = eTelefono.value;
    let celular = eCelular.value;
    let edad = eEdad.value;
    let ciudad = eCiudad.value;
    let listadoAntiguoStr = localStorage.getItem("alumnos");
    //Tercero creo listadoAntiguo y hago que convierte a listadoAntiguoStr en JSON
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    //Cuarto Mustra en la consola el listado Antiguo//
    console.log(listaAntiguo)
    //Quinto pregunto si listado Antiguo es nulo osea si no tengo registros y hago que una variable llamada persona contenga todos los elementos con un id igual a 0 para que sea la incial//
    if(listaAntiguo==null){
        let persona = {"id":0,"nombre":nombre,"apellido":apellido,"email":email,"direccion":direccion,"telefono":telefono,"celular":celular,"edad":edad,"ciudad":ciudad};
        //Sexto hago que listado nuevo se les pasen los valores de persona//
        var listadoNuevo = [persona]
    //Septimo en caso de que no persona empecara con el id de lasta antigua al cual los valores se le pasaran a listado nuevo//
    }else{
        let persona = {"id":listaAntiguo.length,"nombre":nombre,"apellido":apellido,"email":email,"direccion":direccion,"telefono":telefono,"celular":celular,"edad":edad,"ciudad":ciudad};
        var listadoNuevo = [...listaAntiguo,persona]
    }
    //Octavo Mustra en la consola el listado Nuevo//
    console.log(listadoNuevo)
    //Noveno cargo al al localstorage le cargo los itmes dentro que son alumnos y ademas los modifico a datos tipos json con la funcion de stringify//
    localStorage.setItem("alumnos",JSON.stringify(listadoNuevo));
    //Decimo llamo a la funcion CargarTabla//
    cargarTabla(listadoNuevo)
}

//Cambiar Contraste//
//Llamo al elemnto html por su id y le agrego el evento de click cuya funcion es agregar por el mdeio de un toggle una funcion que se llame contraste en el body//
var botonContraste = document.getElementById("cambiarContraste");
botonContraste.addEventListener("click", ()=> {
    document.body.classList.toggle("contraste");
});

//Creo la funcion con una variable tipo var//
var obtenerDatos = ()=>{
    //Primero llamo al elemento html por si id//
    let listadoAntiguoStr = localStorage.getItem("alumnos");
    //Segundo Creo la variable lsitaAntiguo al cual le digo que es la tranformacion del listadoAntiguoStr a JSON//
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    //Tercero llamo a la funcion CargarTabla//
    cargarTabla(listaAntiguo)
}

//Cambiar Tamañio de Fuente//
//Hago que el evento espere a que cargue todo el html para que ejecute la fucnion//
document.addEventListener("DOMContentLoaded", ()=> {
    // Creo una variable con valor 1 que se llame tamanio cuyo valor representa 16px de tamaño de fuente//
    var tamanio = 1;
    //Llamo al elemento html por su id y le asigno un listener cuyo evento es un click y ejecuta una funcion llmada cambiar tamanio//
    var cambiarBtn = document.getElementById("cambiarBtn");
    cambiarBtn.addEventListener("click", ()=> {
        cambiarTamanio();
    });
    //Creo la variable cambiarTamanio cuya funcion es tomar tomar el fontsize del body el cual es el tamaño de fuente y meterlo en un if//
    var cambiarTamanio = ()=> {
        //La funcion del if es comparar el tamnio de la fuente si es 1 lo cambiara a 0 que es 12 px, si es igual a 0 lo cambiara a 2 que es el tamaño mas grande de la fuente 20 y si no lo cambiara a 1 que es el tamanio mediano//
        if (tamanio === 1) {
            document.body.style.fontSize = "12px";
            tamanio = 0; // 0: Pequeño (12px)
        } else if (tamanio === 0) {
            document.body.style.fontSize = "20px";
            tamanio = 2; // 2: Grande (20px)
        } else {
            document.body.style.fontSize = "16px";
            tamanio = 1; // 1: Mediano (16px)
        }
    }
});

//Validar Campo Vacio//
//Creo la funcion validarCampovacio esta funcion es utilizada solo para los campos obligatorios//
var validarCampoVacio = ()=>{
    //Primero se llaman a los elementos del html atraves de un identificador//
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eEmail = document.getElementById("email");
    let eTelefono = document.getElementById("telefono");
    //Segundo se crea una varialble que conteine el valor de los elementos y se le agruega la funcion trim cuya funcion es eliminar los espacios//
    let nombre = eNombre.value.trim();
    let apellido = eApellido.value.trim();
    let email = eEmail.value.trim();
    let telefono = eTelefono.value.trim();
    //Tercero comparo con un if si cada campo esta vacio si todos los campos estan completos devuelve un true si falta almenos uno devuelve un false// 
    if (nombre === "" || apellido === "" || email === "" || telefono === "") {
        return false; // Al menos uno de los campos está vacío
    } else {
        return true; // Todos los campos están completos
    }
}

//Validar//
//Creo la funcion llamada Validar la cual sera empleada solo para los campos obligatorios//
var Validar = ()=>{
    //Primero Recupero los elemntos html por su id//
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eEmail = document.getElementById("email");
    let eTelefono = document.getElementById("telefono");
    //Segundo pregunto utlizando la funcion de validarCampoVacio si me devuelve un true de cada elemento ejecutara la funcion registrar
    if (
        validarCampoVacio(eNombre) &&
        validarCampoVacio(eApellido) &&
        validarCampoVacio(eEmail) &&
        validarCampoVacio(eTelefono)&&
        ValidarTelefono()&&
        ValidarEdad()
    ) {
        // Todos los campos están completos//
        registrar();
    }
    //Tercero en caso de que al menos un campo me devuelva un false arrojare una alerta de que faltan campos por completar//
    else {
        alert("Faltan campos por completar");
    }
}

//Validar Telefono//
//Creo la Funcion ValidarTelefono//
var ValidarTelefono = ()=> {
    //Recupero el elemento de html por su id y tambien recupero su valor//
    let eTelefono = document.getElementById("telefono");
    let telefono = eTelefono.value;
    //Hago que el if pregunte si el valor de telefono es menos o igual a 0//
    if (telefono <= 0) {
        //si lo es envio una alerta indicando en que fallo el usuario ademas de enviar un false//
        alert("No se pudo registrar. Ingrese un número de teléfono válido.");
        return false;
    //si no retorno un true//
    } else {
        return true;
    }
    //El proposito del true y false se ven reflejados en la funcion validar//
}

var ValidarEdad = ()=> {
    //Recupero el elemento de html por su id y tambien recupero su valor//
    let eEdad = document.getElementById("edad");
    let edad = eEdad.value;
    //Hago que el if pregunte si el valor de telefono es menos o igual a 0//
    if (edad <= 0) {
        //si lo es envio una alerta indicando en que fallo el usuario ademas de enviar un false//
        alert("Ingrese un número de Edad válido.");
        return false;
    //si no retorno un true//
    } else {
        return true;
    }
    //El proposito del true y false se ven reflejados en la funcion validar//
}


//Evento de Boton//
//Hago que cargue todo el html antes de ejecutar la funcion//
document.addEventListener("DOMContentLoaded", ()=> {
    //Primero llamo al elemnto de html por su id//
    var submitBtn = document.getElementById("submitBoton");
    //Segundo hago que a submitBtn se le agregue un lsitener cuyo evento es click al hacerlo ejecuta la funcion event//
    submitBtn.addEventListener("click", function(event) {
    //Tercero la funcion prevent default previente el comportamiento del boton ya que es tipo submit, al prevenir sierto comportamiento impide que refresque la pagina//
    event.preventDefault();
    Validar(); // Llama a la función externa "Validar"
    });
});

//Creo un evento que hace que carguen los datos y le paso la funcion obtener datos//
addEventListener('load',obtenerDatos)