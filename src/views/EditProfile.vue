<template>
  <div>
    <v-layout row>
      <v-flex xs12>
        <v-card flat max-height>
          <v-img
            max-width
            height="120"
            src="http://sewalapak.id/wp-content/uploads/2018/12/page-my-accountfeatured-image.jpg">
            <h1 class="display-3 font-weight-medium white--text mt-4">Update Profile</h1>
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
                    </v-flex>
                    <v-flex xs12 md9>
                      <p><input type="text" v-model="profile.firstname"><input type="text" v-model="profile.lastname"></p>
                      <p><input type="text" v-model="profile.email"></p>
                      <p><input type="text" v-model="profile.no_hp"></p>
                      <p><input type="text" v-model="profile.wa"></p>
                    </v-flex>
                  </v-layout>
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="update_profile(profile)" class="blue" dark>Update</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
    </v-container>
  </div>
</template>

<script>
// import Controller from '@/services/Controller'
import axios from 'axios'

export default {
  data () {
    return {
      profile: {}
    }
  },
  created () {
    this.profile = this.$store.getters.user
  },
  methods: {
    update_profile (profile) {
      let data = {
        firstname: this.profile.firstname,
        lastname: this.profile.lastname,
        email: this.profile.email,
        no_hp: this.profile.no_hp,
        wa: this.profile.wa
      }
      // this.$store.dispatch('update_profile', this.$route.params.id)
      axios.post(`http://localhost:8081/user/${profile.id}`, {
        body: JSON.stringify(profile),
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((resp) => {
        console.log(data)
        console.log(resp)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
