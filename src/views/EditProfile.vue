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
                      <p class="text-xs-left">Nama Depan</p>
                      <p class="text-xs-left">Nama Belakang</p>
                      <p class="text-xs-left">Email</p>
                      <p class="text-xs-left">No. Handphone</p>
                      <p class="text-xs-left">No. WhatsApp</p>
                      <p class="text-xs-left" v-if="user.role == 'Operator'">Role</p>
                      <p class="text-xs-left">Username</p>
                    </v-flex>
                    <v-flex xs12 md9>
                      <div class="form-group">
                        <input type="text" class="form-control" v-model="profile.firstname">
                        <input type="text" class="form-control" v-model="profile.lastname">
                        <input type="text" class="form-control" v-model="profile.email">
                        <input type="text" class="form-control" v-model="profile.no_hp">
                        <input type="text" class="form-control" v-model="profile.wa">
                        <b-form-select v-if="user.role == 'Operator'" v-model="profile.role">
                          <option class="form-control" v-for="role in roles" v-bind:key="role.id" v-bind:value="role.value">
                            {{ role.value }}
                          </option>
                        </b-form-select>
                        <input type="text" class="form-control" v-model="profile.username">
                      </div>
                    </v-flex>
                  </v-layout>
                </v-card-text>
                <v-card-actions>
                  <v-btn @click="update_profile(profile)" class="blue" dark>Updates</v-btn>
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
import axios from 'axios'

export default {
  data () {
    return {
      id: this.$route.params.userid,
      profile: {},
      roles: [
        { id: '1', value: 'Admin' },
        { id: '2', value: 'Operator' },
        { id: '3', value: 'User' }
      ]
    }
  },
  created () {
    this.get_profile()
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
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
    update_profile (profile) {
      try {
        axios.put(`http://localhost:8081/user/${profile.id}`, {
          firstname: profile.firstname,
          lastname: profile.lastname,
          email: profile.email,
          no_hp: profile.no_hp,
          role: profile.role,
          wa: profile.wa,
          username: profile.username
        })
          .then((resp) => {
            this.$swal('Edited', 'Profile has been edited.', 'success')
              .then(() => {
                this.$router.push('/list-user')
              })
          })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
