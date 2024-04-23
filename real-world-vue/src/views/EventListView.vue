<script>
import axios from 'axios'

export default {
  data() {
    return {
      livres: []
    }
  },
  mounted() {
    // Effectuer une requête GET pour récupérer la liste des livres depuis ton API
    axios
      .get('http://localhost:3000/api/livres/2')
      .then((response) => {
        this.livres = response.data
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des livres :', error)
      })
  }
}
</script>
<template>
  <div>
    <h1>Liste des Livres</h1>
    <ul>
      <li v-for="livre in livres" :key="livre.idLivre">{{ livre.titre }}</li>
    </ul>
  </div>
</template>


