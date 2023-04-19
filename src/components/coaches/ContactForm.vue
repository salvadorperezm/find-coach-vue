<template>
    <base-card>
        <h2 class="contact-form__title">interested? reach out now!</h2>
        <base-button :type="'bold'" :title="'contact'" class="contact-form__contact"></base-button>
        <form class="contact-form__form" @submit.prevent="submitForm">
            <label for="name" class="contact-form__label">your e-mail</label>
            <input type="text" name="email" class="contact-form__input" v-model="userInput.email">
            <label for="message" class="contact-form__label">your message</label>
            <textarea name="message" class="contact-form__textarea" v-model="userInput.message"></textarea>
            <base-button :type="'bold'" :title="'Send Message'" class="contact-form__submit"></base-button>
        </form>
    </base-card>
</template>

<script>
import axios from "axios"

import BaseButton from "../ui/BaseButton.vue"
import BaseCard from "../ui/BaseCard.vue";

export default {
    components: {
        BaseButton,
        BaseCard
    },
    data() {
        return {
            userInput: {
                email: null,
                message: null
            }
        }
    },
    methods: {
        async submitForm() {
            const fireBaseUrl = import.meta.env.VITE_FIREBASE_URL;
            try {
                await axios.post(`${fireBaseUrl}/requests.json`, this.userInput)
                this.$router.push('/find-coach-vue/')
            } catch (error) {
                console.warn(error)
            }
        }
    }
}
</script>

<style scoped>
.contact-form__title {
    text-transform: capitalize;
    margin-block: 16px;
}

.contact-form__contact,
.contact-form__form {
    margin-block-end: 16px;
}

.contact-form__form {
    border: 1px solid var(--light-grey);
    padding: 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.contact-form__label {
    font-weight: bold;
    text-transform: capitalize;
}

.contact-form__input,
.contact-form__textarea {
    border: 1px solid var(--light-grey);
    outline-color: var(--blue-light);
}

.contact-form__textarea {
    height: 90px;
    font-family: inherit;
}

.contact-form__submit {
    align-self: center;
}
</style>