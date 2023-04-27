<template>
    <form class="register-form" @submit.prevent="submitForm">
        <span class="register-form__option">
            <label for="full-name" class="register-form__label">full name</label>
            <input type="text" id="full-name" v-model="userInfo.name">
        </span>
        <span class="register-form__option">
            <label for="description" class="register-form__label">description</label>
            <textarea id="description" class="register-form__textarea" v-model="userInfo.description"></textarea>
        </span>
        <span class="register-form__option">
            <label for="price" class="register-form__label">hourly rate</label>
            <input type="text" id="price" v-model="userInfo.price">
        </span>
        <span class="register-form__areas">
            <label class="register-form__label">areas of expertise</label>
            <span>
                <input type="checkbox" name="frontend" value="frontend" class="register-form__checkbox"
                    v-model="userInfo.technologies">
                <label for="frontend" class="register-form__label--light">frontend development</label>
            </span>
            <span>
                <input type="checkbox" name="backend" value="backend" class="register-form__checkbox"
                    v-model="userInfo.technologies">
                <label for="backend" class="register-form__label--light">backend development</label>
            </span>
            <span>
                <input type="checkbox" name="career" value="career" class="register-form__checkbox"
                    v-model="userInfo.technologies">
                <label for="career" class="register-form__label--light">career advisory</label>
            </span>
        </span>
        <base-button :type="'bold'" :title="'register'" class="register-form__button"></base-button>
    </form>
</template>

<script>
import BaseButton from "../../components/ui/BaseButton.vue"

export default {
    components: {
        BaseButton
    },
    emits: ['save-data'],
    data() {
        return {
            userInfo: {
                name: '',
                description: '',
                price: null,
                technologies: []
            }
        }
    },
    methods: {
        submitForm() {
            this.$emit('save-data', this.userInfo)
        }
    }
}
</script>

<style scoped>
.register-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.register-form__button {
    align-self: flex-start;
}

.register-form__option {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.register-form__label {
    text-transform: capitalize;
    font-weight: bold;
}

.register-form__label--light {
    text-transform: capitalize;
}

.register-form__textarea {
    height: 90px;
    font-family: inherit;
}

.register-form__areas {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.register-form__checkbox {
    margin-inline-end: 10px;
}
</style>