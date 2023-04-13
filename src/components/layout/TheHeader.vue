<template>
    <header class="header__container">
        <h1>
            <router-link to="/find-coach-vue/" class="header__logo">find a coach</router-link>
        </h1>
        <nav class="header__nav">
            <router-link v-for="link in links" :to="link.route" class="header__link">{{ link.description }}</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    description: 'all coaches',
                    route: '/find-coach-vue/coaches/'
                },
                {
                    description: 'requests',
                    route: '/find-coach-vue/requests/'
                }
            ]
        }
    }
}
</script>

<style scoped>
.header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-block: 16px;
    padding-inline: 64px;
    background-color: var(--header-bg);
    color: var(--white)
}

.header__logo {
    color: var(--white);
    text-transform: capitalize;
    cursor: pointer;
    text-decoration: none;
}

.header__nav {
    display: flex;
    align-items: center;
    gap: 10px;
}

.header__link {
    font-size: 20px;
    border: 1px solid transparent;
    padding: 16px;
    text-transform: capitalize;
    text-decoration: none;
    color: var(--purple-light);
    cursor: pointer;
}

.header__link:hover {
    border: 1px solid var(--purple-light);
}

.router-link-active {
    border: 1px solid var(--purple-light);
}
</style>