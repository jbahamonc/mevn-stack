<template lang="html">
    <div class="page-container">
        <md-app md-mode="reveal">
            <md-app-toolbar class="md-primary">
                <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                    <md-icon>menu</md-icon>
                </md-button>
                <span class="md-title">Mis productos</span>
            </md-app-toolbar>
            <md-app-drawer :md-active.sync="menuVisible">
                <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
                <md-list>
                    <md-list-item>
                        <router-link :to="{ name: 'home' }">
                            <md-icon>home</md-icon>
                            <span class="md-list-item-text">Home</span>
                        </router-link>
                    </md-list-item>
                    <md-list-item>
                        <router-link :to="{ name: 'showProducts' }">
                            <md-icon>visibility</md-icon>
                            <span class="md-list-item-text">Mostrar Productos</span>
                        </router-link>
                    </md-list-item>
                    <md-list-item>
                        <router-link :to="{ name: 'addProduct' }">
                            <md-icon>add</md-icon>
                            <span class="md-list-item-text">Nuevo Producto</span>
                        </router-link>
                    </md-list-item>
                </md-list>
            </md-app-drawer>
            <md-app-content>
                <div class="main">
                    <router-view></router-view>
                </div>
            </md-app-content>
        </md-app>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {
                menuVisible : false
            }
        }
    }
</script>
<style scoped>
.md-app {
    height: 100vh;
}
.md-drawer {
    width: 230px;
}
.md-list-item-content > a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-decoration: none;
    min-height: 48px;
}
.md-list-item-content > a > i{
    margin-right: 32px;
}
.main {
    max-width: 90%;
    margin: auto;
}
</style>
