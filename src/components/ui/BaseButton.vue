<template>
    <button :class="['base-button', type]">{{ title }}</button>
</template>

<script>
export default {
    props: ['title', 'type']
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

.bold {
    background-color: var(--blue-light);
    border: 1px solid transparent;
    color: var(--white)
}
</style>