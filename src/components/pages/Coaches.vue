<template>
    <div class="page-container">
        <coaches-filter></coaches-filter>
    </div>
</template>

<script>
import CoachesFilter from "../coaches/CoachesFilter.vue"

export default {
    components: {
        CoachesFilter
    }
}
</script>

<style scoped>
.page-container {
    max-width: 900px;
    margin: 0 auto;
}
</style>