<template>
    <section class="base-card__container">
        <slot></slot>
    </section>
</template>

<script>
export default {}
</script>

<style scoped>
.base-card__container {
    border-radius: 8px;
    padding: 16px;
    margin-block: 32px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>