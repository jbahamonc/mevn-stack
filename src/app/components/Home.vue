<template>
    <div>
        <div class="md-empty-state md-theme-default">
            <div class="md-empty-state-container">
                <div class="md-layout md-alignment-center-center">
                    <div class="md-layout-item">
                        <img width="150" src="/image/mongodb.png" alt="">
                    </div>
                    <div class="md-layout-item">
                        <md-icon class="md-size-2x">add</md-icon>
                    </div>
                    <div class="md-layout-item">
                        <img width="150" src="/image/express.png" alt="">
                    </div>
                    <div class="md-layout-item">
                        <md-icon class="md-size-2x">add</md-icon>
                    </div>
                    <div class="md-layout-item">
                        <img width="150" src="/image/vue.png" alt="">
                    </div>
                    <div class="md-layout-item">
                        <md-icon class="md-size-2x">add</md-icon>
                    </div>
                    <div class="md-layout-item">
                        <img width="150" src="/image/nodejs.png" alt="">
                    </div>
                </div>
            </div>
            <div class="md-empty-state-container">
                <span class="md-display-1">Aplicación de gestión de productos CRUD</span>
                <span class="md-subheading">Realizado bajo el stack MEVN</span>
            </div>
            <div class="instruction">
                <div class="md-title">Como usarlo</div>
                <md-divider></md-divider>
                <div class="md-subheading">Este es un proyecto realizado bajo el stack MEVN, se recomienda el uso de npm 5+, nodejs 8+ y webpack 3+</div>
                <code>
                    <pre>1. $ git clone https://github.com/jbahamonc/mevn-stack.git</pre>
                    <pre>2. $ cd mevn-stack</pre>
                    <pre>3. $ npm install</pre>
                    <pre>4. $ npm start</pre>
                </code>
                <div class="md-title">Importante</div>
                <md-divider></md-divider>
                <div class="md-subheading">Se debe tener instalado mongo para el correcto funcionamiento de la aplicación</div>
                <code>
                    <pre>Nombre de la base de datos: mevn</pre>
                </code>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'home'
    }
</script>
<style>
.md-empty-state {
    max-width: 100%;
}
.instruction {
    text-align: left;
}
.md-empty-state-container {
    margin-bottom: 2rem;
}
.md-divider {
    margin: .7rem 0 1.2rem;
}
</style>
