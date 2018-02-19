<template>
    <div>
        <form novalidate class="md-layout" @submit.prevent="validateProduct">
            <md-card class="md-layout-item">
                <md-progress-bar md-mode="indeterminate" v-if="sending" />
                <md-card-header>
                    <div class="md-title">Formulario de Registro de Nuevos Productos</div>
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
                                <span class="md-error" v-if="!$v.form.price.required">EL precio es requerido</span>
                            </md-field>
                        </div>
                    </div>
                </md-card-content>
                <md-card-actions>
                    <md-button type="submit" class="md-primary" :disabled="sending">registrar producto</md-button>
                </md-card-actions>
            </md-card>
        </form>
        <md-snackbar :md-active.sync="productSaved">El producto {{ lastProduct }} ha sido guardado!</md-snackbar>
    </div>
</template>
<script>
    import { validationMixin } from 'vuelidate'
    const { required } = require('vuelidate/lib/validators')
    export default {
        name: 'addProduct',
        mixins: [validationMixin],
        data () {
            return {
                form: {
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
            saveProduct () {
                this.sending = true
                this.axios.post('/products/', this.form).then(response => {
                    this.lastProduct = `${this.form.name}`
                    this.productSaved = true
                    this.sending = false
                    this.clearForm()
                    this.$router.replace({ name: 'showProducts'})
                }).catch(err => {
                    console.log(err)
                    this.clearForm()
                })
            },
            validateProduct () {
                this.$v.$touch()
                if (!this.$v.$invalid) {
                  this.saveProduct()
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
