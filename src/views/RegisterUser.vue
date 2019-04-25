<template>
  <div>
     <v-layout row>
    <v-flex xs12>
      <v-card flat max-height>
        <v-img
          max-width
          height="200"
          src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2018/howresearchi.jpg">
          </v-img>
      </v-card>
    </v-flex>
 </v-layout>
    <v-container>
      <v-card>
        <h1 class="display-3 font-weight-medium black--text mt-4">Register New User</h1>
        <v-card-title>
          <v-container grid-list-md>
            <v-layout row>
              <v-flex xs6 md6>
                <v-text-field
                label="First name"
                v-model="user.firstname">
                </v-text-field>
              </v-flex>
              <v-flex xs6 md6>
                <v-text-field
                label="Last name"
                v-model="user.lastname">
                </v-text-field>
              </v-flex>
              <v-flex xs12 md12>
                <v-text-field
                label="Username"
                v-model="user.username"></v-text-field>
                <v-text-field
                label="Email Address"
                v-model="user.email"></v-text-field>
                <v-text-field
                label="Password"
                type="password"
                v-model="user.password"></v-text-field>
                <b-form-select v-if="pengguna.role == 'Operator'" v-model="profile.role">
                  <option class="form-control" v-for="role in roles" v-bind:key="role.id" v-bind:value="role.value">
                    {{ role.value }}
                  </option>
                </b-form-select>
                <v-text-field
                :mask="'####-####-#######'"
                v-model="user.no_hp"
                label="Nomor Handphone"
                ></v-text-field>
                <v-text-field
                :mask="'####-####-#######'"
                v-model="user.wa"
                label="Nomor WhatsApp"
                ></v-text-field>
                <v-btn
                class="green"
                @click="register">Register</v-btn> <br>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-title>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import UserController from '@/services/UserController'
// import Controller from '@/services/Controller'
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
      ],
      user: [
        {
          firstname: '',
          lastname: '',
          username: '',
          role: '',
          email: '',
          password: '',
          wa: '',
          no_hp: '',
          foto_user: ''
        }
      ]
    }
  },
  computed: {
    pengguna () {
      return this.$store.getters.user
    }
  },
  created () {
    this.get_profile()
  },
  methods: {
    register () {
      let data = [
        {
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          role: this.user.role,
          email: this.user.email,
          password: this.user.password,
          wa: this.user.wa,
          no_hp: this.user.no_hp
        }
      ]

      axios.post('http://localhost:8081/register', { data })
        .then(() => {
          this.$swal('Registered', 'Successfully Registered', 'success')
            .then(() => {
              this.$router.push('list-user')
            })
        }).catch(err => {
          this.$swal('Error', err.message, 'error')
        })
    },
    get_profile () {
      try {
        UserController.show(this.id)
          .then((resp) => {
            this.profile = resp.data
          })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
