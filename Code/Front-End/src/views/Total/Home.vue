

<template>
  <section>
    <div id="banniere">
        <div id="rec1"></div>
        <div id="rec2">
            <p id="text1">Qui sommes-nous?</p>
            <p id="text2">Ce site offre une plateforme conviviale pour les passionnés de lecture. Les utilisateurs peuvent découvrir de nouveaux ouvrages, ajouter, modifier ou supprimer des livres, et partager leurs appréciations.</p>
        </div>
        <div id="rec3"></div>
    </div>
    <OuvrageRecent />
    <!-- <Footer /> -->
  </section>
</template>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
#banniere{
    margin-top: 80 px;
    margin-bottom: 100px;
}
#rec1, #rec2, #rec3 {
  height: 320px; 
}
#rec1, #rec3{
    background-color: #269968;
}
#rec2{
    background-color: #4BCC95;
    padding: 20px;
    text-align: justify;
    text-align: center;
}
</style>