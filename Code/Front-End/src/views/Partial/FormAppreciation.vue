<script>
import axios from 'axios';

export default {
    name: 'FormAppreciation',
    data() {
        return {
            commentaireValue:null,
            appreciationValue: null
        };
    },
    methods: {
        async envoyer(event) {
            event.preventDefault(); // Empêche le formulaire de se soumettre normalement

            // Récupère la valeur de l'appréciation
            const commentaireInput = document.getElementById('commentaire');
            const appreciationInput = document.getElementsByClassName('appreciation')
            
            this.commentaireValue = commentaireInput.value;
            this.appreciationValue = appreciationInput.value;
            
            axios.post(`http://localhost:3000/api/commentaires`, {
                contenu: 'aaa',
                appreciation: 3,
                idLivre: 2,
            })
            // Vous pouvez stocker cette valeur dans une variable ou faire tout autre traitement souhaité
            console.log('Valeur d\'appréciation : ', appreciationInput.data.data);

            /// NOTE PR JULIEN
            // finir formulaire, trouver comment envoyer des données depuis des variables/const (voir au dessus)
        }
    }
}
</script>

<!-- Formulaire d'appréciation -->
<template>
    <div>
        <h3>Formulaire d'appréciation</h3>

        <form @submit="envoyer">
        <div>
          <label for="commentaire">Qu'avez-vous pensé de ce livre ?</label>
         <textarea name="commentaire" id="commentaire" cols="20" rows="3"></textarea>

          <label for="appreciation">Entrez un nombre entre 0 et 5</label>
          <input class="appreciation"
            id="appreciation"
            type="number"
            name="appreciation"
            step="1"
            min="0"
            max="5"
            required
          />
          <span class="validity"></span>
        </div>
        <div>
          <input type="submit" />
        </div>
       
      </form>
        
    </div>
</template>



<style scoped> 

div{
    background-color: rgb(77, 122, 73);
    border-radius: 10px;
    width:80%;
    height: 60%;
    margin: auto;
}
div input, .appreciation{
    background-color: rgb(169, 194, 167);
    display: block;
    margin: 20px auto 10px auto;
    width: 30%;
    padding: 2%;
    border:none;
    
}
.appreciation{
    background-color: rgb(217, 217, 217);

}
h3{
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 padding-top: 5% ;
}
textarea{
    display: block;
    margin:auto;
    background-color: rgb(217, 217, 217);

}
</style>