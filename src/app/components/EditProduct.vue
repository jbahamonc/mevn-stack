<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateProduct">
            <md-card class="md-layout-item">
                <md-progress-bar md-mode="indeterminate" v-if="sending" />
                <md-card-header>
                    <div class="md-title">Formulario de actualización de Productos</div>
                </md-card-header>
                <md-card-content>
                    <div class="md-layout md-gutter">
                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('name')">
                                <label for="first-name">Nombre</label>
                                <md-input name="name" id="name" autocomplete="given-name" v-model="form.name" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.name.required">El nombre del producto es requerido</span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('category')">
                                <label for="first-name">Categoria</label>
                                <md-input name="category" id="category" autocomplete="given-category" v-model="form.category" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.category.required">La categoria es requerido</span>
                            </md-field>
                        </div>
                        <div class="md-layout-item md-small-size-100">
                            <md-field :class="getValidationClass('price')">
                                <label for="first-name">Precio</label>
                                <md-input name="price" id="price" autocomplete="given-price" v-model="form.price" :disabled="sending" />
                                <span class="md-error" v-if="!$v.form.price.required">El precio es requerido</span>
                            </md-field>
                        </div>
                    </div>
                </md-card-content>
                <md-card-actions>
                    <md-button type="submit" class="md-primary" :disabled="sending">actualizar producto</md-button>
                </md-card-actions>
            </md-card>
        </form>
        <md-snackbar :md-active.sync="productSaved">El producto {{ lastProduct }} ha sido actualizado!</md-snackbar>
    </div>
</template>
<script>
    import { validationMixin } from 'vuelidate'
    const { required } = require('vuelidate/lib/validators')
    export default {
        name: 'editProduct',
        mixins: [validationMixin],
        mounted () {
            let prod = this.$router.currentRoute.params.product[0]
            // console.log(prod)
            this.form.name = prod.name
            this.form.category = prod.category
            this.form.price = prod.price
            this.form.id = prod._id
        },
        data () {
            return {
                form: {
                    id: null,
                    name: null,
                    category: null,
                    price: null
                },
                productSaved: false,
                sending: false,
                lastProduct: null
            }
        },
        validations: {
            form: {
                name: { required },
                category: { required },
                price: { required }
            }
        },
        methods: {
            getValidationClass (fieldName) {
            const field = this.$v.form[fieldName]
                if (field) {
                    return {
                        'md-invalid': field.$invalid && field.$dirty
                    }
                }
            },
            updateProduct () {
                this.sending = true
                this.axios.put(`/products/${this.form.id}`, this.form).then(response => {
                    // console.log(response)
                    this.lastProduct = `${this.form.name}`
                    this.productSaved = true
                    this.sending = false
                    this.clearForm()
                    window.setTimeout(() => {
                        this.$router.replace({ name: 'showProducts'})
                    }, 4000)
                }).catch(err => {
                    console.log(err)
                    this.clearForm()
                })
            },
            validateProduct () {
                this.$v.$touch()
                if (!this.$v.$invalid) {
                  this.updateProduct()
                }
            },
            clearForm () {
                this.$v.$reset()
                this.form.name = null
                this.form.category = null
                this.form.price = null
            }
        }
    }
</script>
