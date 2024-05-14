<script>
export default {
    name: 'Banniere',
}

</script>

<template>
    <div id="banniere">
        <div id="rec1"></div>
        <div id="rec2">
            <p id="text1">Qui sommes-nous?</p>
            <p id="text2">Ce site offre une plateforme conviviale pour les passionnés de lecture. Les utilisateurs peuvent découvrir de nouveaux ouvrages, ajouter, modifier ou supprimer des livres, et partager leurs appréciations.</p>
        </div>
        <div id="rec3"></div>
    </div>
</template>

<style scoped>
p{
    color: black;
}
#text1{
    font-size: 30px;
}
#banniere{
    width: 100%;
    display: grid;
    grid-template-columns: 5fr 4fr 5fr;
    margin-bottom: 100px;
}
#rec1, #rec2, #rec3 {
  height: 320px; 
}
#rec1, #rec3{
    background-color: #269968;
}
#rec2{
    height: 300px;
    background-color: #4BCC95;
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
    text-align: justify;
    text-align: center;
}
</style>