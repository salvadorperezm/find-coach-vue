<template>
    <base-card>
        <base-button :title="'refresh'" :type="'light'"></base-button>
        <coach-card v-for="test in tests" :key="test"></coach-card>
    </base-card>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
import BaseCard from "../ui/BaseCard.vue"
import CoachCard from "./CoachCard.vue";

export default {
    components: {
        BaseButton,
        BaseCard,
        CoachCard
    },
    data() {
        return {
            tests: ['hello']
        }
    }
}
</script>