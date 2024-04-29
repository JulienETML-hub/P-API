<template>
    <div>
      <h1>Liste des Livres</h1>
      <ul>
        <li v-for="book in books" :key="book.id">{{ book.title }} - {{ book.author }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        books: []
      }
    },
    mounted() {
      // Effectuer une requête GET pour récupérer la liste des livres depuis ton API
      axios
        .get('http://localhost:3000/api/livres')
        .then((response) => {
          this.books = response.data
        })
        .catch((error) => {
          console.error('Erreur lors de la récupération des livres :', error)
        })
    }
  }
  </script>
  