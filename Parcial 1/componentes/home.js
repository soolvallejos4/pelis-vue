Vue.component('contacto-form', {
	data:function(){
		return {
				nombre:null,
                apellido:null,
				comentario:"",
				seleccion:[],
				anio:null,
										
		arr:[],
		errores:[],
		enviado: false,
		}

	},
	computed : {
    hayErrores: function(){
    	return this.errores.length; // Devuelve cantidad errores 
    }
},
template:

`


<section id ="home">
<div class="banner">
  <div class="row">
  
   

    <div class = "col-6">
        <div class="row  text-center mt-5">
            <div class="col-12 ">
                <h2 class="pt-5">¿Te cansaste de repetir peliculas?</h2>
                <p class="slogan text-white">Star Notes llegó, el mejor anotador de peliculas de Argentina.</p>
            </div>
            </div>
                <div class="row mt-5">
                <div class="col-6"><img src="./img/appstore.png" alt="" class="w-50"> </div>
            <div class="col-6"><img src="./img/google play.jpg" alt="" class="w-50"></div>
        </div>    
    </div>
    <div class="col-6"></div>

  </div>
</div>


<div class="form">
  
<div class="row">
<div class="col-lg-4  fondo-mujer">
  <img src="./img/mujer-cine2.png" alt="">  
</div>
<div class ="col-lg-8 col-md-12 px-5">

<form v-on:submit.prevent="guardar" novalidate class="mt-5">
<h3 class="text-white"> Contactanos </h3>
<div class="row py-5">
  <div class="col-6">
    <label class="text-white">Ingrese su nombre</label>
    <input type="text" v-model="nombre" class="form-control" placeholder="Nombre" name="nombre">
  </div>
  <div class="col-6">
    <label class="text-white">Ingrese su apellido</label>
    <input type="text" v-model="apellido" class="form-control" placeholder="Apellido" name="apellido"  >
  </div>
</div>

<div class="row seleccion">
  <div class="col-12"
    <label class="text-white"> ¿Cómo nos conocio? </label>
      <select class="form-select" v-model="seleccion">
          <option value="fb">Facebook</option>
          <option value="ig">Instagram</option>
          <option value="tw">Twitter</option>
      </select>
  </div>
  <div class="row">
  <div class="col-12">
  <label class ="text-white">Su Mensaje</label>
      <div class="form-floating">
          <textarea class="form-control" v-model="comentario"  id="floatingTextarea2" style="height: 100px"></textarea>
          
      </div>
  </div>
</div>
<input type="submit" value="Enviar" class="mt-5 mb-5 enviar"/>
</div>

</div>

		<div v-if="enviado === true">
			<div v-if="hayErrores" class="error">
          <ul>
            <li v-for="x in errores" >{{x}}</li>
          </ul>
	  	</div>
	  	<div v-else class="enviado">
	        <span>Enviado con éxito</span>
	    </div>
 		</div>

	</div>



</form>
</div>

</section>

`,
methods:{
	guardar:function(){
		//console.log(e) //evento del submit
	//validacion
       this.enviado = true; //queremos evaluar que los mensajes se muestren solo cuando se ejecute la funcion
       this.errores=[] //vaciamos el array de errores
             
	  if (!this.nombre ) {
	  	console.log(!this.nombre)
	   	this.errores.push('El nombre es obligatorio.');
         
      }
      if (!this.apellido ) {
        console.log(!this.apellido)
         this.errores.push('El apellido es obligatorio.');
       
    }
      if(!this.seleccion[0]){
      	this.errores.push('¡No olvides seleccionar dónde nos conociste!');
      }
     	
     if(this.errores.length == 0){
     	     	 
     nuevoObj = {
     							comentario: this.comentario,
						 			nombre: this.nombre,
						 			seleccion: this.seleccion,
						 			
								}
			
      if(!localStorage.dato){
					this.arr=[]
				}else{
					this.arr=JSON.parse(localStorage.getItem("dato"))
				}

				this.arr.push(nuevoObj)
				localStorage.setItem("dato",JSON.stringify(this.arr))
   		}
}

}, //cierre  methods

	mounted:function(){
		this.arr=JSON.parse(localStorage.getItem("dato")) || [] //solo si devuelve null o undefined creará el array
	}

});