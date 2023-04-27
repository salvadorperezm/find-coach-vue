<template>
    <base-card v-if="isFetchingCoaches">
        <base-spinner></base-spinner>
    </base-card>
    <base-card v-else>
        <div class="coaches__controls">
            <base-button :title="'refresh'" :type="'light'" @click="fetchCoaches"></base-button>
            <base-button :title="'register as coach'" :type="'bold'"></base-button>
        </div>
        <coach-card v-if="filteredCoaches.length > 0" v-for="coach in filteredCoaches" :key="coach.id"
            :coachData="coach"></coach-card>
        <h2 v-else class="coaches__text">No coaches were found.</h2>
    </base-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import BaseButton from "../ui/BaseButton.vue";
import BaseCard from "../ui/BaseCard.vue";
import BaseSpinner from "../ui/BaseSpinner.vue";
import CoachCard from "./CoachCard.vue";

export default {
    components: {
        BaseButton,
        BaseCard,
        BaseSpinner,
        CoachCard
    },
    methods: {
        ...mapActions(['fetchCoaches'])
    },
    computed: {
        ...mapGetters(['filteredCoaches', 'isFetchingCoaches'])
    }
}
</script>

<style scoped>
.coaches__controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.coaches__text {
    margin-block: 32px;
    text-align: center;
}
</style>