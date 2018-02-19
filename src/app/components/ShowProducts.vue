<template>
    <div>
        <md-table md-card v-if="products.length > 0">
            <md-table-toolbar>
                <h1 class="md-title">Listado de productos registrados</h1>
                <md-button class="md-raised md-primary" @click="newProduct()">agregar producto</md-button>
            </md-table-toolbar>
            <md-table-row>
                <md-table-head md-numeric>ID</md-table-head>
                <md-table-head>Nombre</md-table-head>
                <md-table-head>Categoria</md-table-head>
                <md-table-head>Precio</md-table-head>
                <md-table-head></md-table-head>
            </md-table-row>
            <md-table-row v-for="(p, index) in products" :key="index">
                <md-table-cell md-numeric>{{ index + 1}}</md-table-cell>
                <md-table-cell>{{ p.name }}</md-table-cell>
                <md-table-cell>{{ p.category }}</md-table-cell>
                <md-table-cell>${{ p.price }}</md-table-cell>
                <md-table-cell>
                    <md-button @click="deleteProduct(p._id)" class="md-icon-button md-dense md-accent">
                        <md-icon>delete</md-icon>
                    </md-button>
                    <md-button @click="editProduct(p._id)" class="md-icon-button md-dense md-primary">
                        <md-icon>edit</md-icon>
                    </md-button>
                </md-table-cell>
            </md-table-row>
        </md-table>
        <md-empty-state
            v-else
            md-icon="devices_other"
            md-label="Upss!!"
            md-description="En este momento no se cuenta con productos resgistrados.">
            <md-button class="md-primary md-raised" @click="newProduct()">registrar un nuevo producto</md-button>
        </md-empty-state>
        <md-snackbar :md-active.sync="productDelete">
            <span>El producto ha sido eliminado!</span>
            <md-button class="md-primary" @click="productDelete = false">cerrar</md-button>
        </md-snackbar>
    </div>
</template>
<script>
    export default {
        name: 'showProducts',
        mounted () {
            this.axios.get('/products').then(response => {
                // console.log(response.data)
                this.products = response.data
            }).catch(err => {
                console.log(err)
            })
        },
        data () {
            return {
                products: [],
                productDelete: false
            }
        },
        methods: {
            deleteProduct (id) {
                this.axios.delete(`/products/${id}`).then(response => {
                    // console.log(response.data)
                    this.products.splice(id, 1)
                    this.productDelete = true;
                }).catch(err => {
                    console.log(err);
                })
            },
            editProduct (id) {
                let prod = this.products.map( x => {
                    if (x._id == id)
                        return x
                })
                this.$router.push({ name: 'editProduct', params: {product: prod }})
            },
            newProduct () {
                this.$router.push({name: 'addProduct' })
            }
        }
    }
</script>
