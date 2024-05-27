<!-- Header.vue -->
<template>
    <header>
        <div class="image-container">
            <img class="header-image" :src="logoText">
            <img class="header-image" :src="logoBar">
        </div>
        <nav>
            <RouterLink to="/">Accueil</RouterLink>
            <RouterLink to="/books">Livres</RouterLink>
        </nav>
    </header>
</template>

<script>
import logoText from '../assets/logo-text.png'
import logoBar from '../assets/logo-bar.png'

export default {
    setup() {
        return { logoText, logoBar }
    }
}
</script>

<style scoped>
    body{
        margin: 0px;
    }
    header {
        background-color: #64A9CE;
        padding: 10px;
        text-align:left;
    }
    .header-image {
        height: 100px;
    }
    
</style>