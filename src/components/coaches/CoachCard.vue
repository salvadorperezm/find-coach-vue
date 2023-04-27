<template>
    <section class="coach-card__container">
        <h2 class="coach-card__title">{{ coachData.name }}</h2>
        <h4 class="coach-card__price">${{ coachData.price }}/hour</h4>
        <div class="coach-card__badges">
            <base-badge v-for="technology in coachData.technologies" :key="technology" :type="technology"></base-badge>
        </div>
        <div class="coach-card__buttons">
            <router-link :to="`/find-coach-vue/coaches/${coachData.id}/contact`">
                <base-button :title="'contact'" :type="'light'" @click="setCurrentCoachId(coachData.id)"></base-button>
            </router-link>

            <router-link :to="`/find-coach-vue/coaches/${coachData.id}`">
                <base-button :title="'view details'" :type="'bold'" @click="setCurrentCoachId(coachData.id)"></base-button>
            </router-link>
        </div>
    </section>
</template>

<script>
import { mapActions } from "vuex";

import BaseBadge from "../ui/BaseBadge.vue"
import BaseButton from '../ui/BaseButton.vue';

export default {
    components: {
        BaseBadge,
        BaseButton
    },
    props: ['coachData'],
    methods: {
        ...mapActions(['setCurrentCoachId']),
    }
}
</script>

<style scoped>
.coach-card__container {
    border: 1px solid var(--black);
    padding: 16px;
    border-radius: 16px;
    margin-block: 16px;
}

.coach-card__title {
    text-transform: capitalize;
}

.coach-card__badges {
    display: flex;
    align-items: center;
    gap: 10px;
}

.coach-card__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
}

.coach-card__title,
.coach-card__price,
.coach-card__badges {
    margin-block-end: 10px;
}
</style>