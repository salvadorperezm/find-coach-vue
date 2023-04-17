<template>
    <base-card>
        <h2 class="coaches-filter__title">find your coach</h2>
        <div class="coaches-filter__body">
            <label v-for="option in options" class="coaches-filter__label">
                {{ option }}
                <input type="checkbox" :name="option" :value="option" v-model="chosenOptions" />
            </label>
        </div>
    </base-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import BaseCard from '../ui/BaseCard.vue';

export default {
    components: {
        BaseCard
    },
    created() {
        this.chosenOptions = this.coachesFilterSelectedOptions
    },
    data() {
        return {
            options: ['frontend', 'backend', 'career'],
            chosenOptions: []
        }
    },
    methods: {
        ...mapActions(['filterSelectedOptions'])
    },
    computed: {
        ...mapGetters(['coachesFilterSelectedOptions'])
    },
    watch: {
        chosenOptions() {
            this.filterSelectedOptions(this.chosenOptions)
        }
    }
}
</script>

<style scoped>
.coaches-filter__title {
    margin-block-end: 10px;
    text-transform: capitalize;
}

.coaches-filter__body {
    display: flex;
    gap: 15px;
    align-items: center;
}


.coaches-filter__label {
    text-transform: capitalize;

}
</style>