<template>
    <button :class="['base-button', type]">{{ isLoading ? 'Signing Up...' : title }}</button>
</template>

<script>
import BaseSpinner from './BaseSpinner.vue';

export default {
    props: ['title', 'type', 'isLoading']
}
</script>

<style scoped>
.base-button {
    padding: 16px 32px;
    text-transform: capitalize;
    border-radius: 32px;
    border: none;
    background-color: none;
    cursor: pointer;
    font-size: 16px;
}

.light {
    background-color: var(--white);
    border: 1px solid var(--black);
    color: var(--black);
}

.light:hover {
    background-color: var(--pink-light);
}

.bold {
    background-color: var(--blue-light);
    border: 1px solid transparent;
    color: var(--white)
}

.bold:hover {
    background-color: var(--header-bg);
}
</style>