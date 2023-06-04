<template>
    <form class="register-form" @submit.prevent="submitForm">
        <span class="register-form__option">
            <label for="full-name" :class="['register-form__label', activateInvalidLabelClass(userInfo.name.isValid)]">full name</label>
            <input type="text" id="full-name" v-model.trim="userInfo.name.val" :class="[activateInvalidInputClass(userInfo.name.isValid)]" @blur="clearValidation('name')">
            <p v-if="!userInfo.name.isValid" class="invalid-label">Username should not be empty.</p>
        </span>
        <span class="register-form__option">
            <label for="description" :class="['register-form__label', activateInvalidLabelClass(userInfo.description.isValid)]">description</label>
            <textarea id="description" v-model.trim="userInfo.description.val" :class="['register-form__textarea',activateInvalidInputClass(userInfo.description.isValid)]" @blur="clearValidation('description')"></textarea>
            <p v-if="!userInfo.description.isValid" class="invalid-label">Description should not be empty.</p>
        </span>
        <span class="register-form__option">
            <label for="price" :class="['register-form__label', activateInvalidLabelClass(userInfo.price.isValid)]">hourly rate</label>
            <input type="text" id="price" v-model.trim="userInfo.price.val" :class="[activateInvalidInputClass(userInfo.price.isValid)]" @blur="clearValidation('price')">
            <p v-if="!userInfo.price.isValid" class="invalid-label">Hourly rate should not be empty.</p>
        </span>
        <span class="register-form__areas">
            <label :class="['register-form__label', activateInvalidLabelClass(userInfo.name.isValid)]">areas of expertise</label>
            <span>
                <input type="checkbox" name="frontend" value="frontend"
                    v-model="userInfo.technologies.val" class="register-form__checkbox" @blur="clearValidation('technologies')">
                <label for="frontend" :class="['register-form__label--light', activateInvalidLabelClass(userInfo.technologies.isValid)]">frontend development</label>
            </span>
            <span>
                <input type="checkbox" name="backend" value="backend" class="register-form__checkbox"
                    v-model="userInfo.technologies.val" @blur="clearValidation('technologies')">
                <label for="backend" :class="['register-form__label--light', activateInvalidLabelClass(userInfo.technologies.isValid)]">backend development</label>
            </span>
            <span>
                <input type="checkbox" name="career" value="career" class="register-form__checkbox"
                    v-model="userInfo.technologies.val" @blur="clearValidation('technologies')">
                <label for="career" :class="['register-form__label--light', activateInvalidLabelClass(userInfo.technologies.isValid)]">career advisory</label>
            </span>
            <p v-if="!userInfo.technologies.isValid" class="invalid-label">At least one technology should be selected.</p>
        </span>
        <p v-if="!isFormValid" class="invalid-label">Please fix the above errors and submit again.</p>
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
                name: {
                    val: '',
                    isValid: true
                },
                description: {
                    val: '',
                    isValid: true
                },
                price: {
                    val: null,
                    isValid: true
                },
                technologies: {
                    val: [],
                    isValid: true
                }
            },
            isFormValid: true
        }
    },
    methods: {
        clearValidation(input) {
            this.userInfo[input].isValid = true;
        },
        validateForm() {
            this.isFormValid = true
            if (this.userInfo.name.val === '') {
                this.userInfo.name.isValid = false
                this.isFormValid = false
            }
            if (this.userInfo.description.val === '') {
                this.userInfo.description.isValid = false
                this.isFormValid = false
            }
            if (this.userInfo.price.val === null || this.userInfo.price.val <= 0) {
                this.userInfo.price.isValid = false
                this.isFormValid = false
            }
            if (this.userInfo.technologies.val.length === 0) {
                this.userInfo.technologies.isValid = false
                this.isFormValid = false
            }
        },
        submitForm() {
            this.validateForm()
            if (!this.isFormValid) {
                return;
            }
            const newCoach = {
                name: this.userInfo.name.val,
                description: this.userInfo.description.val,
                price: this.userInfo.price.val,
                technologies: this.userInfo.technologies.val
            }
            this.$emit('save-data', newCoach)
        },
        activateInvalidLabelClass(value) {
            if (!value) {
                return 'invalid-label'
            }
        },
        activateInvalidInputClass(value) {
            if (!value) {
                return 'invalid-input'
            }
        },
        activateInvalidTextAreaClass(value) {
            if (!value) {
                return 'invalid-textarea'
            }
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

.invalid-label {
    color: red;
}

.invalid-input,
.invalid-textarea {
    border: 1px solid red;
}
</style>