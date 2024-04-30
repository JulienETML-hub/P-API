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
      .get('http://localhost:3000/api/livres/1')
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
  <section>
    <div class="partie1">
      <img src="../assets/imageID1.jpg" alt="Image de couverture du livre" />
      <h3>Informations :</h3>
      <ul>
        <li v-for="livre in livres" :key="livre.idLivre">
          Titre : {{ livre.titre }} Année d'édition : {{ livre.anneeEdition }}
        </li>
      </ul>
    </div>

    <div class="partie2">
      <p>partie2</p>
    </div>
    <div class="partie3">
      <h1>Liste des Livres</h1>

      <ul>
        <li v-for="livre in livres" :key="livre.idLivre">
          {{ livre.titre }} - {{ livre.anneeEdition }}
        </li>
      </ul>
    </div>
  </section>
</template>
<style>
section {
  display: grid;
  grid-template-areas: 'partie1 partie2 partie3' 'partie1 partie2 partie3';
}
.partie1 {
  background-color: rgb(44, 106, 149);
  grid-area: partie1;
}
.partie2 {
  background-color: rgb(37, 90, 133);
  grid-area: partie2;
}
.partie3 {
  background-color: rgb(27, 79, 121);
  grid-area: partie3;
}
h3 {
  color: white;
}
</style>
