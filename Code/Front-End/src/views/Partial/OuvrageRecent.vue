<template>
  <p>Ouvrage ajouté récemment</p>
  <div class="livres-container">
    <div class="livre" v-for="livre in livres" :key="livre.idLivre">
      <img :src="livre.imageCouverture" :alt="livre.titre" />
      <h2>{{ livre.titre }}</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'OuvrageRecent',
  data() {
    return {
      livres: []
    }
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:3000/api/livres/recent')
      console.log('Livres récupérés :', response.data)
      this.livres = response.data.data
      console.log('Livres dans le data :', this.livres)
      console.log('Titres des livres :', this.livres.forEach((livre) => livre.titre))
      console.log('Images des livres :', this.livres.map((livre) => livre.image))
    } catch (error) {
      console.error('Erreur lors de la récupération des livres :', error)
    }
  }
}
</script>

<style scoped>
p{
  font-size: 34px;
  margin-left: 28px;
  margin-bottom: 63px;
}
.livre img {
  width: 200px;
  height: 300px;
  object-fit: cover;
}
.livres-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>