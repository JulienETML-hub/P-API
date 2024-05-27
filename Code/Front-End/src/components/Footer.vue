<template>
    <div class="footer">
        <div class="section" id="follow-us">
            <p>Suiviez-nous:</p>
            <img src="../assets/networks.png" alt="Networks">
        </div>
        <div class="section" id="contact-us">
            <p>Contactez-nous:</p>
            <a href="mailto:mateen.khaiy@eduvaud.ch" id="email">mateen.khaiy@eduvaud.ch</a>
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
    background-color: #3E6A52;
    padding: 20px;
    flex-wrap: nowrap;
    overflow-x: auto;
}

.section {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 0 20px;
}

p {
    font-size: 34px;
    color: white;
    font-family: 'Roboto', sans-serif;
    margin: 0 10px 0 0; /* Adjust margin to reduce gap */
}

a {
    font-size: 34px;
    color: white;
    font-family: 'Roboto', sans-serif;
    margin-left: 0; /* Remove margin to reduce gap */
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

@media (max-width: 768px) {
    .footer {
        flex-direction: column;
        align-items: center;
    }

    .section {
        margin: 10px 0;
    }

    p, a {
        font-size: 24px;
    }
}
</style>
