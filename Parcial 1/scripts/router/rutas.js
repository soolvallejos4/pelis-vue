const form = {template: `<contacto-form> </contacto-form>`, name:"form"
}
const ingresar = {template: `<cargar-pelis> </cargar-pelis>`, name:"ingresar"
}

const routes = [
  { path: '/', component: form },
  { path: '/ingresar', component: ingresar },
  { path: '*', redirect: '/' }

]

const router = new VueRouter({
  routes
})

const app = new Vue({
	el:"#app",
  	router,

})

