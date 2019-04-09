<template>
      

  <div class="container">

    <div class="col-md-12">
        <div class="pull-left">
          <h3><strong>LIST DATA BLOG ALL</strong></h3>
        </div>
        <div class="pull-right">
          <router-link :to="'/categorias/new'" class="btn btn-lg btn-default">
            New Data
          </router-link>
          <router-link :to="'/'" class="btn btn-lg btn-primary">
            Back to Homepage
          </router-link>
        </div>
      </div>
    
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in categorias" :key="d.id">
          <td>{{ d.id }}</td>
          <td>{{ d.codigo }}</td>
          <td>{{ d.nombre }}</td>
          <td>
            <router-link v-bind:to="'/categorias/edit/' + d.id" class="btn btn-sm btn-warning">
              Edit Data
            </router-link>
            <button @click="destroy(d.id)" class="btn btn-sm btn-danger">
              Delete Data
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/*
import { mapState } from 'vuex'
export default {
  mounted () {
    this.$store.dispatch('loadCategorias')
  },
  computed: mapState([
    'categorias'
  ])
}*/
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'categorias',
  computed: mapGetters({
    categorias: 'categorias',
    messages: 'messages'
  }),
  methods: mapActions([
    'destroy'
  ]),
  created () {
    this.$store.dispatch('getAllCategorias')
  }
}
</script>