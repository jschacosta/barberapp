<template>
  <div class="home px-4" >
    <br>
    <v-row class="align-center justify-center">
      <v-col  cols="12"
      sm="6"
      md="4">
         <v-autocomplete
            v-model="values"
            :items="items"
            label="Selecciona el hostel"
            dense
          ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row class="align-center justify-center">
      <v-col cols="12"
      sm="6"
      md="4">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Selecciona la fecha"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      </v-col>
    </v-row>
    <br>
    <v-row class="align-center justify-center">
      <v-col  cols="12"
      sm="6"
      md="4">
         <v-autocomplete
            v-model="values2"
            :items="items2"
            label="Selecciona el horario"
            dense
          ></v-autocomplete>
      </v-col>
    </v-row>

    <v-row class="align-center justify-center"> 
      <v-btn rounded color="primary"
      dark>
        Enviar
      </v-btn>
    </v-row>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      menu:false,
      date:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      items: ['Aquarela Hostel', 'Che Lagarto CopaCabana', 'El Misti', 'Ipanema Hostel', 'hostel otro'],
      values: ['foo', 'bar'],
      items2: ['13:30', '14:00', '14:30', '15:00'],
      values2: ['foo', 'bar'],
    }
  },
  created(){
    this.axios.get('/')
      .then((response) => {
        console.log(response.data)
      })
      .catch((e)=>{
        console.log('error' + e);
      })

      this.axios.post('/')
      .then((response) => {
        console.log(response.data)
      })
      .catch((e)=>{
        console.log('error' + e);
      })
  }
}
</script>
