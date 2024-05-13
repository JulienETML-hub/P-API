<script>
import axios from 'axios'
import Header from '@/components/Header.vue'
import FormAppreciation from '@/views/Partial/FormAppreciation.vue'
export default {
  components: {
    Header,
    FormAppreciation
  },
  data() {
    return {
      livres: null,
      commentaires: null,
      moyenneA: null,
      comment: null,
      livreId: null
    }
  },
  async mounted() {
    console.log(this.livreId)

    await this.getBooksById(this.livreId)
  },
  methods: {
    async getBooksById(id) {
      try {
        const response = await axios.get(`http://localhost:3000/api/livres/${id}`)
        this.livres = response.data
        /* if (this.livres != null) {
          console.log('aaaa' + this.livres.data.resume);
        } else {
          console.log('bbbb');
        }*/
        await this.getComments(id)
      } catch (error) {
        console.error('Erreur lors de la récupération des livres :', error)
      }
    },
    async getComments(commentId) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/commentaires/livre/${commentId}`
        )
        const response2 = await axios.get(
          `http://localhost:3000/api/commentaires/livre/${commentId}/moyenneA`
        )
        //const response = await axios.get(`http://localhost:3000/api/livres/${commentId}/commentaires`)
        this.commentaires = response.data
        this.moyenneA = response2.data
      } catch (error) {
        console.error('Erreur lors de la récupération des commentaires :', error)
      }
    },
    async SelectionLivre(event) {
      event.preventDefault()
      this.getBooksById(this._idLivre)
      this.livreId = 3
      console.log(this.livreId)
    }
  }
}
</script>

<template>
  <section>
    <div class="partie1">
      <img src="../../assets/imageID1.jpg" alt="Image de couverture du livre" />
      <h3>Informations :</h3>
      <ul>
        <li v-for="livre in livres" :key="livre.idLivre">
          <!-- Afficher chaque propriété du livre si elle a une valeur -->
          <p v-if="livre.titre">Titre : {{ livre.titre }}</p>
          <p v-if="livre.anneeEdition">Année d'édition : {{ livre.anneeEdition }}</p>
          <p v-if="livre.extrait">Nombre de page : {{ livre.extrait }}</p>
          <p v-if="livre.resume">Auteur : {{ livre.author }}</p>
        </li>
      </ul>
      <form @submit="SelectionLivre">
        <div>
          <label for="_idLivre">ID livre : </label>
          <input v-model="_idLivre" placeholder="Entrez l'id d'un livre" />
          <span class="validity"></span>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>

    <div class="partie2" v-for="livre in livres" :key="livre.idLivre">
      <h2>Résumé</h2>
      <p>{{ livres.data.resume }}</p>

      <a href="https://www.w3schools.com/">Extrait</a>
    </div>
    <div class="partie3" v-for="commentaire in commentaires" :key="commentaire.idCommentaire">
      <h2>Appréciations des lecteurs</h2>
      <p>{{ moyenneA.moyenneAppreciation }}</p>
      <FormAppreciation :livreId="livres.data.idLivre"></FormAppreciation>
    </div>
  </section>
</template>
<style>
section {
  display: grid;
  grid-template-areas: 'partie1 partie2 partie3';
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: white;
  line-height: 140%;
  letter-spacing: 0.5px;
}
.partie1 {
  background-color: rgb(44, 106, 149);
  grid-area: partie1;
  display: grid;
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
.partie1 img {
  margin: auto;
}
.partie1 ul {
  list-style: none;
  text-align: left;
  margin: auto;
}
.partie1 p {
  color: white;
  font-size: medium;
}

.partie2 p {
  margin: auto;
  width: 33%;
}
.partie2 a {
  background-color: green;
  color: white;
  font-size: large;
}
.partie3 p {
  text-decoration: underline;
}
</style>
