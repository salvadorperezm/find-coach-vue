<template>
    <base-card>
        <base-button :title="'refresh'" :type="'light'" @click="fetchCoaches"></base-button>
        <base-spinner v-if="isFetchingCoaches"></base-spinner>
        <coach-card v-else v-for="coach in filteredCoaches" :key="coach.id" :coachData="coach"></coach-card>
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