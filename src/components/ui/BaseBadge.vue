<template>
    <span :class="['base-badge', type]">{{ type }}</span>
</template>

<script>
export default {
    props: ['type']
}
</script>

<style scoped>
.base-badge {
    padding: 8px 16px;
    color: var(--white);
    text-transform: uppercase;
    border-radius: 32px;
}

.frontend {
    background-color: var(--header-bg);
}

.backend {
    background-color: var(--purple-dark);
}

.career {
    background-color: var(--pink-dark);
}
</style>