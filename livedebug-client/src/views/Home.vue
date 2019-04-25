<template>
  <div class="container mx-auto pt-5">
    <div class="flex flex-col justify-center" v-if="!isLoading">
      <img class="w-full h-64 self-center text-center mb-4" src="../assets/loading.svg">

      <span class="text-center text-grey-dark font-normal text-xl">Waiting data to be loaded</span>
    </div>
    <div v-else>
      <h3 class="text-dark text-xl mb-4">People To Follow</h3>
      <div class="flex justify-between flex-wrap">
        <user
          v-for="(user, index) in users"
          :key="index"
          :id="user.behanceId"
          :name="user.display_name"
          :occupation="user.occupation"
          :stats="user.stats"
          :picture="user.images"
          @detail="seeProject"
        />
      </div>
    </div>

    <router-view @myFavorite="myFavorite"/>
  </div>
</template>

<script>
// @ is an alias to /src
import User from '@/components/User.vue'
import { mapState } from 'vuex'

export default {
  name: 'home',

  data () {
    return {
      isLoading: true
    }
  },

  components: {
    User
  },

  methods: {
    fetchUser () {
      console.log({dari: 'home fetch user'})
      this.$store.dispatch('fetchUsers')
    },

    seeProject (id) {
      this.$router.push(`/${id}`)
    },

    myFavorite (data) {
      this.$emit('favorites', data)
    }
  },

  computed: {
    // users () {
    //   return this.$store.state.users
    // }
    ...mapState(['users', 'projects', 'collections']),
  },

  mounted () {
    // console.log({dari: 'home mounted'})
    this.fetchUser()
      // .then(data => {
      //   console.log({dari: 'home mounted then'})
      //   this.isLoading = false
      // })
      // .catch(err => {
      //   console.log({err})
      // })
  }
}
</script>
