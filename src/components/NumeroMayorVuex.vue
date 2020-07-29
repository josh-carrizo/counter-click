<template>
   <div class="row">
       <div class="col s6">
           <JugadorVuex numJugador="1"  />
       </div>
        <div class="col s6">
           <JugadorVuex numJugador="2"  />
       </div>
   </div>
</template>

<script>
import JugadorVuex from './JugadorVuex.vue'

export default {
    name:"NumeroMayorVuex",
    components:{
        JugadorVuex
    }
}
</script>

<style>

</style>