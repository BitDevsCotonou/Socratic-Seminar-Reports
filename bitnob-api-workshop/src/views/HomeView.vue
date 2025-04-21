<template>
<div class="paiement">
    <h2>Payer via Lightning</h2>
    <input v-model="lnAddress" placeholder="Adresse Lightning" />
    <input v-model.number="satoshiAmount" placeholder="Montant en satoshis" />
    <input v-model="email" placeholder="Votre email" />
    <button @click="payerAvecLightning">Payer</button>
    <p class="message" :class="{ success: isSuccess, error: !isSuccess }">{{ message }}</p>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            lnAddress: '',
            satoshiAmount: 0,
            email: '',
            message: '',
            isSuccess: false,
        };
    },
    methods: {
        async payerAvecLightning() {
            if (!this.lnAddress) {
                this.message = "Aucune adresse Lightning fournie.";
                this.isSuccess = false;
                return;
            }

            if (!this.email || !this.email.includes('@')) {
                this.message = "Veuillez entrer un email valide.";
                this.isSuccess = false;
                return;
            }

            const apiKey = "****"; //Votre clé d'API (Veuillez la placer dans un fichier .env)

            try {
                const response = await axios.post(
                    "https://api.bitnob.co/api/v1/lnurl/paylnaddress", {
                        lnAddress: this.lnAddress,
                        satoshis: this.satoshiAmount,
                        reference: `ref-${Date.now()}`,
                        customerEmail: this.email,
                    }, {
                        headers: {
                            Authorization: `Bearer ${apiKey}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                if (response.data && response.data.status === "success") {
                    this.message = "Paiement Lightning effectué avec succès !";
                    this.isSuccess = true;
                } else {
                    this.message = "Le paiement a échoué.";
                    this.isSuccess = false;
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style scoped>
.paiement {
    max-width: 400px;
    margin: 2rem auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #f6f6f6;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input {
    display: block;
    margin-bottom: 1rem;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    padding: 10px;
    width: 100%;
    background-color: #f5a623;
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
}

.message {
    margin-top: 1rem;
    font-weight: bold;
    text-align: center;
}

.message.success {
    color: green;
}

.message.error {
    color: red;
}
</style>
