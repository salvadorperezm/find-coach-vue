<template>
    <h3>{{ currentCoach.name }}</h3>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
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

<style scoped></style>