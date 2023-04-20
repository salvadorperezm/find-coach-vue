<template>
    <div class="request-card__container">
        <a :href="`mailto:${requestData.email}`" class="request-card__email">{{ requestData.email }}</a>
        <p class="request-card__message">{{ requestData.message }}</p>
    </div>
</template>

<script>
export default {
    props: ['requestData']
}
</script>

<style scoped>
.request-card__container {
    border: 1px solid var(--light-grey);
    padding: 16px;
    max-width: 600px;
    margin: 0 auto;
    margin-block-end: 16px;
}

.request-card__email {
    text-decoration: none;
    color: var(--header-bg);
    font-weight: bold;
}

.request-card__email:hover {
    color: var(--purple-dark);
}

.request-card__message {
    margin-block-start: 8px;
}
</style>