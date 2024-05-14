<script>
import axios from 'axios'

export default {
    name: 'AddOuvrage',
    data() {
        return {

        }
    },
    methods: {
        async ajouter(event) {
            event.preventDefault()

            const response = await axios.post(`http://localhost:3000/api/livres`, {
                idLivre: 10,
                titre: "this.titre",
                id_categories: 2,
                extrait: "aaaa",
                resume: "this.resume",
                anneeEdition: 2000,
                imageCouverture: "this.imageCouverture",
            })
            console.log(response)
        }
    },
}
</script>


<template>
    <div>
        <h3>Ajout d'ouvrages</h3>

        <form @submit="ajouter">
            <label for="titre">Titre</label>
            <input type="text" v-model="titre" placeholder="Entrez le titre de l'ouvrage">

            <label for="categorie">categorie</label>
            <input type="text" v-model="categorie" placeholder="Entrez votre categorie">

            <label for="nbPages">nbPages</label>
            <input type="number" v-model="nbPages" placeholder="Entrez  le nombre de page">

            <label for="auteur">auteur</label>
            <input type="text" v-model="auteur" placeholder="Entrez votre auteur">

            <label for="editeur">editeur</label>
            <input type="text" v-model="editeur" placeholder="Entrez votre editeur">

            <label for="imageCouverture">image de couverture</label>
            <input type="text" v-model="imageCouverture" placeholder="Entrez l'image de couverture">

            <input class="ajouter" type="submit" />
        </form>
    </div>
</template>

<style scoped>

label {
    display: block;
}

input {
    width: 10%;
    height: 30px;
}
.ajouter{
    display:block;
    margin:auto;
}
</style>
