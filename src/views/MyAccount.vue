<template>
  <div id="myAccount">
    <v-layout row>
      <v-flex xs12>
        <v-card flat max-height>
          <v-img
            max-width
            height="120"
            src="http://sewalapak.id/wp-content/uploads/2018/12/page-my-accountfeatured-image.jpg">
            <h1 class="display-3 font-weight-medium white--text mt-4">My Account</h1>
            </v-img>
        </v-card>
      </v-flex>
    </v-layout>

    <v-container grid-list-xl>
        <v-flex xs12>
          <v-card>
            <v-layout row>
              <v-flex xs12 md4>
                <v-card mb-4
                >

                </v-card>
              </v-flex>
              <v-flex xs12 md8>
                <v-card-text primary-title>
                  <p class="text-xs-center title">Ubah Data Biodata Diri</p>
                </v-card-text>
                <v-card-text>
                  <v-layout row>
                    <v-flex xs12 md3>
                      <p class="text-xs-left">Nama</p>
                      <p class="text-xs-left">Email</p>
                      <p class="text-xs-left">No. Handphone</p>
                      <p class="text-xs-left">No. WhatsApp</p>
                      <p v-if="profile.username" class="text-xs-left">Username</p>
                    </v-flex>
                    <v-flex xs12 md9>
                      <p class="text-xs-left">{{ profile.firstname }} {{ profile.lastname }}</p>
                      <p class="text-xs-left">{{ profile.email }}</p>
                      <p class="text-xs-left">{{ profile.no_hp }}</p>
                      <p class="text-xs-left">{{ profile.wa }}</p>
                      <p class="text-xs-left">{{ profile.username }}</p>
                    </v-flex>
                  </v-layout>
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="navigateTo(
                    {
                      name: 'editprofile',
                      params: {
                        userid: profile.id
                      }
                    })" class="blue" dark>Perbarui data</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
    </v-container>
  </div>
</template>

<script>
import UserController from '@/services/UserController'

export default {
  data () {
    return {
      id: this.$store.getters.user.id,
      profile: {}
    }
  },
  name: 'myAccount',
  created () {
    this.get_profile()
  },
  methods: {
    get_profile () {
      try {
        UserController.show(this.id)
          .then((resp) => {
            this.profile = resp.data
          })
      } catch (e) {
        console.log(e)
      }
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

<style>

</style>
