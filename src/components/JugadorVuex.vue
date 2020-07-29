<template>
  <div class="card">
      <div class="card-content">
          <div class="card-title">
              <span> Su puntaje es:</span>
              <h3 > {{puntaje}}   </h3>
              <p><button @click="onClick" >Jugar</button></p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "JugadorVuex",
    props:{
        numJugador: String,
        
    },  
    computed:{
        puntaje() {
            if(this.numJugador == '1'){
                return this.$store.state.jugador1;
            } else {
                return this.$store.state.jugador2;
            }
        }
    },
    methods:{
        onClick() {
            if(this.numJugador == '1'){
                this.$store.commit('setJugador1');
            } else {
                this.$store.commit('setJugador2');
            }
        }
    }
  

}
</script>

<style>

</style>