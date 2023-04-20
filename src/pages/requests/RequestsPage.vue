<template>
    <div class="page-container">
        <base-card>
            <h2 class="request-page__title">requests received</h2>
            <div class="spinner-container" v-if="isFetchingRequests">
                <base-spinner></base-spinner>
            </div>
            <request-card v-else v-for="request in requests" :key="request.id" :requestData="request"></request-card>
        </base-card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import BaseCard from '../../components/ui/BaseCard.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';
import RequestCard from '../../components/requests/RequestCard.vue';

export default {
    created() {
        this.fetchRequests()
    },
    components: {
        BaseCard,
        BaseSpinner,
        RequestCard
    },
    methods: {
        ...mapActions(['fetchRequests'])
    },
    computed: {
        ...mapGetters(['isFetchingRequests', 'requests'])
    }
}
</script>

<style scoped>
.page-container {
    max-width: 900px;
    margin: 0 auto;
}

.request-page__title {
    text-transform: capitalize;
    text-align: center;
    margin: 32px;
}
</style>