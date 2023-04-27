<template>
    <div class="page-container">
        <base-card>
            <h2 class="coach-registration__title">Register as coach now!</h2>
            <register-form @save-data="uploadData"></register-form>
        </base-card>
    </div>
</template>

<script>
import axios from 'axios';

import BaseCard from '../../components/ui/BaseCard.vue';
import RegisterForm from '../../components/coaches/RegisterForm.vue';

export default {
    components: {
        BaseCard,
        RegisterForm
    },
    methods: {
        async uploadData(userInfo) {
            const fireBaseUrl = import.meta.env.VITE_FIREBASE_URL;
            try {
                await axios.post(`${fireBaseUrl}/coaches.json`, userInfo)
                this.$router.replace('/find-coach-vue/coaches')
            } catch (error) {
                console.warn(error)
            }
        }
    }
}
</script>

<style scoped>
.page-container {
    max-width: 900px;
    margin: 0 auto;
}

.coach-registration__title {
    margin-block-end: 16px;
}
</style>