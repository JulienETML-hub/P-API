<template>
    <div class="footer">
        <div id="moitier">
            <p>suiviez-nous:</p>
            <img src="../assets/networks.png" alt="networks">
        </div>
        <div id="moitier2">
            <p>contactez-nous:</p>
            <a href="mailto:mateen.khaiy@eduvaud.ch">mateen.khaiy@eduvaud.ch</a>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.footer {
    display: flex;
    justify-content: space-between;
    height: 123px;
    background-color: #3E6A52;
}
#moitier, #moitier2 {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: row; /* Ajouté pour afficher le contenu sur la même ligne */
}
p, a {
    margin-left: 204px;
    margin-right: 66px;
    font-size: 34px;
    color: white;
    font-family: 'Roboto', sans-serif;
}
</style>