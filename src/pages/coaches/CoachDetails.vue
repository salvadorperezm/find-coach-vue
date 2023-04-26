<template>
    <div class="page-container">
        <base-card>
            <h2 class="coach-contact__name">{{ currentCoach.name }}</h2>
            <h4 class="coach-contact__price">{{ `$${currentCoach.price}/hr` }}</h4>
        </base-card>
        <base-card>
            <h2 class="contact-form__title">interested? reach out now!</h2>
            <base-button :type="'bold'" :title="'contact'" class="contact-form__contact"></base-button>
            <router-view></router-view>
        </base-card>
        <base-card>
            <div class="coach-contact__badges">
                <base-badge v-for="technology in currentCoach.technologies" :key="technology"
                    :type="technology"></base-badge>
            </div>
        </base-card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import BaseBadge from '../../components/ui/BaseBadge.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import BaseCard from "../../components/ui/BaseCard.vue"


export default {
    components: {
        BaseBadge,
        BaseButton,
        BaseCard,
    },
    created() {
        if (!this.currentCoach) {
            console.warn('coach not found')
        }
    },
    unmounted() {
        this.removeCurrentCoachId()
    },
    methods: {
        ...mapActions(['removeCurrentCoachId'])
    },
    computed: {
        ...mapGetters(['currentCoach']),
    },
}
</script>

<style scoped>
.contact-form__title {
    text-transform: capitalize;
    margin-block: 16px;
}

.page-container {
    max-width: 900px;
    margin: 0 auto;
}

.coach-contact__name,
.coach-contact__price {
    margin-block-end: 16px;
}

.coach-contact__badges {
    padding-block: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>