<script>
import axios from 'axios'

export default {
    name: 'AddOuvrage',
    data() {
        return {
            categories: [],
        }
    },
    async mounted() {

        await this.getCategories();
        console.log("categorie :" + this.categories[0])
    },
    methods: {
        async ajouter(event) {
            event.preventDefault()

            const response = await axios.post(`http://localhost:3000/api/livres`, {
                titre: this.titre,
                id_categorie: this.categorie,
                extrait: this.extrait,
                resume: this.resume,
                anneeEdition: this.anneeEdition,
                imageCouverture: this.imageCouverture,
            })
            console.log(response)
        },

        async getCategories() {
            const response = await axios.get(`http://localhost:3000/api/categories`)
            this.categories = response.data.data



        }
    }
}
</script>


<template>
    <div class="addOuvrage">
        <h3>Ajout d'ouvrages</h3>

        <form @submit="ajouter">
            <label for="titre">Titre</label>
            <input type="text" v-model="titre" placeholder="Entrez le titre de l'ouvrage">


            <label for="resume">resume</label>
            <input type="text" v-model="resume" placeholder="Entrez le résumé du livre">

            <label for="extrait">extrait</label>
            <input type="text" v-model="extrait" placeholder="Entrez un extrait du livre">

            <label for="nbPages">nbPages</label>
            <input type="number" v-model="nbPages" placeholder="Entrez  le nombre de page">

            <label for="anneeEdition">anneeEdition</label>
            <input type="number" v-model="anneeEdition" placeholder="Entrez  l'anneeEdition">

            <label for="imageCouverture">image de couverture</label>
            <input type="text" v-model="imageCouverture" placeholder="Entrez l'image de couverture">
            <label for="categorie">categorie</label>
            <select v-model="categorie">
                <option v-for="categorie in categories" :key="categorie.idCategorie" :value="categorie.idCategorie">
                    {{ categorie.nom }}
                </option>
            </select>
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

.ajouter {
    display: block;
    margin: auto;
}

.addOuvrage {
    color: rgb(170, 0, 0);
}
</style>
