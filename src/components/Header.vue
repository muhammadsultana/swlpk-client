<template>
    <v-toolbar sticky flat class="pb-4"
    style="margin-bottom: -23px">
        <v-toolbar-title class="mr-4 display-1 pt-4">
        <span
            class="home"
            @click="navigateTo({name: 'home'})">
            sewalapak
        </span>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="pt-4">
            <v-btn flat dark
            @click="navigateTo({name: 'admin'})">
              Explore
            </v-btn>
            <v-btn flat dark
            @click="navigateTo({name: 'admin'})">
              Deals and Coupons
            </v-btn>
            <v-btn flat dark
            slot="activator"
            @click="dialog = true"
            v-if="!$store.state.isUserLoggedIn"
            >
            Log in/Register
            </v-btn>

            <v-btn flat dark
            @click="logout()"
            v-if="$store.state.isUserLoggedIn"
            >
            Logout
            </v-btn>

            <v-dialog
            v-model="dialog"
            width="400"
            persistent
            >
              <v-tabs
              color="cyan"
              centered
              slider-color="red"
              >
                <v-toolbar class="blue" flat dark>
                  <v-tab>
                    <v-icon>person</v-icon>
                    <span class="subheading white--text"> Login</span>
                  </v-tab>
                  <v-tab>
                    <v-icon>person_add</v-icon>
                    <span class="subheading white--text"> Register</span>
                  </v-tab>
                  <v-spacer></v-spacer>
                  <v-icon
                  color="red"
                  class="pr-2 pb-3"
                  @click="dialog = false ">close</v-icon>
                </v-toolbar>
                <v-tab-item>
                  <v-card>
                    <div class="error" v-html="error"></div>
                    <v-card-title>
                      <v-container grid-list-xl>
                        <v-layout row>
                          <v-flex xs12 md12>
                            <v-text-field
                            label="Username or email"
                            v-model="user.email">
                            </v-text-field>
                            <v-text-field
                            label="Password"
                            type="password"
                            v-model="user.password">
                            </v-text-field>
                            <v-btn class="green"
                            @click="login">Login</v-btn><br>
                            <a class="caption navy--text" href="#">Lost your password?</a>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-title>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card>
                    <div class="error" v-html="error"></div>

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
                            <v-text-field
                            :mask="'####-####-#######'"
                            v-model="user.no_hp"
                            label="Nomor Handphone"
                            id="he"></v-text-field>

                            <!-- <v-switch
                              :label="'Apakah nomor handphone anda diatas juga termasuk nomor akun WhatsApp Anda?'"
                              v-model="checkbox"
                            ></v-switch>
                            <v-text-field
                            v-if="checkbox != hidden"
                            :mask="'####-####-#######'"
                            v-model="user.wa"
                            label="Nomor WhatsApp Anda:"
                            disabled
                            >
                            </v-text-field>
                            <v-text-field
                            v-if="checkbox != !hidden"
                            name="register.wa"
                            label="Nomor WhatsApp"></v-text-field> -->
                            <v-btn
                            class="green"
                            @click="register()">Register</v-btn> <br>
                            <span class="caption grey--text darken-2">Your personal data will be used to support your experience throughout this website, to manage access to your account</span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card-title>
                  </v-card>
                </v-tab-item>
              </v-tabs>
          </v-dialog>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import Controller from '@/services/Controller'

export default {
  data () {
    return {
      dialog: false,
      checkbox: false,
      hidden: false,
      error: '',
      user: [
        {
          firstname: '',
          lastname: '',
          username: '',
          email: '',
          password: '',
          wa: '',
          no_hp: ''
        }
      ]
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async register () {
      try {
        const response = await Controller.register({
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          username: this.user.username,
          email: this.user.email,
          password: this.user.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    async login () {
      try {
        const response = await Controller.login({
          email: this.user.email,
          password: this.user.password,
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          username: this.user.username

        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.dialog = false
      } catch (error) {
        this.error = error.response.data.error
      }
    },
    logout () {
      try {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: pointer;
  color: #359AD6;
}

.home:hover {
  color: navy;
}

.v-toolbar__content, .v-toolbar__extension {
  background-color: transparent;
  background: transparent;
}

.v-toolbar__items .v-btn:not(.v-btn--floating):not(.v-btn--icon), .v-toolbar__items .v-menu, .v-toolbar__items .v-menu__activator {
  color: black;
}

.theme--light.v-toolbar {
  background-color: white;
}
</style>
