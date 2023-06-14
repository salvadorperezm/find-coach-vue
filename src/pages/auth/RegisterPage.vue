<template>
    <div class="page-container">
        <base-card>
            <h2 class="page-title">Sign Up</h2>
            <form class="register-form" @submit.prevent="handleRegisterFormSubmit">
                <div class="form-control">
                    <label for="email" :class="[toggleInvalidLabel(email.isValid)]">Email</label>
                    <input id="email" type="email" v-model="email.value" :class="[toggleInvalidInput(email.isValid)]" />
                    <p v-if="!email.isValid" class="invalid-text">Verify your email and try again.</p>
                </div>
                <div class="form-control">
                    <label for="password" :class="[toggleInvalidLabel(password.isValid)]">Password</label>
                    <input id="password" type="password" v-model="password.value"
                        :class="[toggleInvalidInput(password.isValid)]" />
                    <p v-if="!password.isValid" class="invalid-text">{{ passwordErrorMessage }}</p>
                </div>
                <base-button title="Sign Up" type="bold" :isLoading="isLoadingSignUp" class="submit-button"></base-button>
                <router-link to="/login">Already have an account? Log In</router-link>
            </form>
        </base-card>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseButton from "../../components/ui/BaseButton.vue";
import BaseCard from "../../components/ui/BaseCard.vue"
import BaseSpinner from "../../components/ui/BaseSpinner.vue";

export default {
    components: {
        BaseButton,
        BaseCard,
        BaseSpinner
    },
    data() {
        return {
            email: {
                value: '',
                isValid: true
            },
            password: {
                value: '',
                isValid: true
            },
            passwordErrorMessage: '',
            isLoadingSignUp: false,
        }
    },
    methods: {
        async handleRegisterFormSubmit() {
            this.isLoadingSignUp = true;
            this.email.isValid = true;
            this.password.isValid = true;
            this.passwordErrorMessage = '';
            this.verifyEmailValidity();
            this.verifyPasswordValidity();
            await this.$store.dispatch('signUp', { email: this.email.value, password: this.password.value });
            if (!this.isSignUpInvalid) {
                this.$router.replace('/find-coach-vue/');
                this.isLoadingSignUp = false;
            } else {
                this.isLoadingSignUp = false;
                console.log('open toast')
            }
        },
        verifyEmailValidity() {
            if (this.email.value === '' || !this.email.value.includes("@") || !this.email.value.includes(".com")) {
                this.email.isValid = false;
            }
        },
        verifyPasswordValidity() {
            if (this.password.value === '') {
                this.password.isValid = false;
                this.passwordErrorMessage = 'Password cannot be empty.';
            } else if (this.password.value.length <= 5) {
                this.password.isValid = false;
                this.passwordErrorMessage = 'Password must be at least 6 characters long.'
            }
        },
        toggleInvalidInput(state) {
            if (!state) {
                return 'invalid-input'
            }
        },
        toggleInvalidLabel(state) {
            if (!state) {
                return 'invalid-label';
            }
        }
    },
    computed: {
        ...mapGetters(['isSignUpInvalid'])
    }
}
</script>

<style scoped>
.page-container {
    max-width: 900px;
    margin: 0 auto;
}

.page-title {
    margin-block-end: 20px;
    text-align: center;
}

.register-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-control {
    display: flex;
    flex-direction: column;
}

.submit-button {
    align-self: flex-start;
}

.invalid-text,
.invalid-label {
    color: red;
}

.invalid-input {
    border: 1px solid red;
}
</style>