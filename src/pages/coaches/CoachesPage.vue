<template>
    <div class="page-container">
        <coaches-filter></coaches-filter>
        <coaches-list></coaches-list>
    </div>
</template>

<script>
import CoachesFilter from "../../components/coaches/CoachesFilter.vue"
import CoachesList from "../../components/coaches/CoachesList.vue";

export default {
    components: {
        CoachesFilter,
        CoachesList
    }
}
</script>

<style scoped>
.page-container {
    max-width: 900px;
    margin: 0 auto;
}
</style>