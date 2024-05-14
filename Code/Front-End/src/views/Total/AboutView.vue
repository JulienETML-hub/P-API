<script>
import axios from 'axios'
import AddOuvrage from '@/views/Partial/AddOuvrage.vue'

export default {
  components: {
    AddOuvrage
  },
  data() {
    return {
      test:null,
    }
  }
}

</script>

<template>
  <div class="about">
    <h1>A site for events to better the world.</h1>
    <AddOuvrage></AddOuvrage>
  </div>
</template>

<style scoped>
.about {
  color: black;
}
h1{
  color:black;
}
</style>
