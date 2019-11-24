import Vue from 'vue'
import CreateAPI from 'vue-create-api'
import DialogComponent from './components/dialog-componet/dialog-component'

Vue.use(CreateAPI)
Vue.createAPI(DialogComponent, true)
