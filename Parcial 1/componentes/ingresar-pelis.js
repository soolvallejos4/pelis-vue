Vue.component('cargar-pelis', {
	data:function(){
		return {
				titulo:null,
				seleccion:[],
				comentario:"",
        vista:null,
				
										
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
template:`<div class="form-pelis py-5 px-5">
		<form v-on:submit.prevent="guardar" novalidate >

    <h2> Mis peliculas </h2>
    <div class="row">
    <div class="col-12">
      <label class="fs-5">Titulo de la Pelicula</label>
      <input type="text" v-model="titulo"  class="form-control" placeholder="Ingrese Titulo" name="titulo"">
    </div>
  </div>
  <div class="row pt-3">
    <div class="col-12">
      <label class="fs-5" > Ingrese el genero</label>
      <select class="form-select" v-model="seleccion" name="seleccion">
        <option >Terror</option>
        <option >Accion</option>
        <option >Aventura</option>
        <option >Humor</option>
        <option >Ciencia Ficcion</option>
      </select>
    </div>
  </div>
  <div class="row pt-5">
    <dib class="col-12">
      <label class="fs-5">Escriba una breve reseña para no olvidarse !</label>
      <div class="form-floating">
        <textarea v-model="comentario" class="form-control" id="floatingTextarea2" style="height: 100px"></textarea>
      </div>
    </dib>
  </div>
  <div class="row pt-5">

    <div class ="row">
      <div class="col-12">
      <label class="fs-5">Donde la viste?</label>
      <input type="text" v-model="vista"  class="form-control " placeholder="Ingrese vista" name="vista">
      </div>
    </div>
  </div>


		<input type="submit" value="Enviar" class="vista my-5" />

		</form>

		<div v-if="enviado === true">
			<div v-if="hayErrores" class="classerror">
			 <ul>
	     		 <li v-for="x in errores" >{{x}}</li>
	    	</ul>
	  		</div>
	  		<div v-else class="enviado">
	          <span>Tu película fue cargada con éxito.</span>
	      </div>
 		</div>

		<div v-if="this.arr.length > 0" >
			<mostrar-dato v-bind:arr ="arr"></mostrar-dato>
	
		</div>
		<div v-else class="classerror">
			<p class="fs-5">Ninguna pelicula cargada</p>
		</div>

		
	</div>`,
methods:{
	guardar:function(){
		//console.log(e) //evento del submit
	//validacion
       this.enviado = true; //queremos evaluar que los mensajes se muestren solo cuando se ejecute la funcion
       this.errores=[] //vaciamos el array de errores
             
	  if (!this.titulo) {
	  	console.log(!this.titulo)
	   	this.errores.push('El título es obligatorio.');
       
      }
    
      if(!this.seleccion[0]){
      	this.errores.push('Debes seleccionar un género.');
      }
      if (!this.comentario) {
        this.errores.push('¡No te olvides del resumen!');
        
      }
     	
     if(this.errores.length == 0){
     	     	 
     nuevoObj = {
     							comentario: this.comentario,
						 			titulo: this.titulo,
						 			seleccion: this.seleccion,
						 			vista: this.vista,
								}
			
      if(!localStorage.pelis){
					this.arr=[]
				}else{
					this.arr=JSON.parse(localStorage.getItem("pelis"))
				}

				this.arr.push(nuevoObj)
				localStorage.setItem("pelis",JSON.stringify(this.arr))
   		}
},



}, //cierre de methods


//cuando se monte la instancia...
	mounted:function(){
		this.arr=JSON.parse(localStorage.getItem("pelis")) || [] //solo si devuelve null o undefined creará el array
    
	}

});
Vue.component("mostrar-dato", {
  props:["arr"],
  template: `


  <div class= "row">
  
  <div class="col-4" v-for= "x in arr">
      <div class="card mb-3" style="width: 18rem;">
      <img src="./img/card.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h3 class="card-title"> {{x.titulo}} </h3>
        <span v-for="t in x.seleccion">{{t}} </span>
        <p class="card-text">{{x.comentario}}</p>
        <button > {{x.vista}} </button>
       
      </div>
    </div>
  </div>
  </div>
        `,



          

})