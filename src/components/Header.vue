<template>
  <div>
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
            v-if="!isUserLoggedIn"
            >
            Log in/Register
            </v-btn>

            <v-btn flat dark
            @click="logout()"
            v-if="isUserLoggedIn"
            >
            Logout
            </v-btn>

            <v-dialog
            v-model="dialog"
            width="600"
            persistent
            >
              <v-tabs
              color="cyan"
              centered
              slider-color="red"
              >
                <v-toolbar class="blue" flat dark
                 v-for="pengguna in user" :key="pengguna.id"
                >
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
  </div>
</template>

<script>
// import Controller from '@/services/Controller'

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
    login () {
      let data = {
        email: this.user.email,
        password: this.user.password
      }
      this.$store.dispatch('login', data).then(() => {
        this.dialog = false
        this.$router.push('/')
      }).catch(err => console.log(err))
    },
    register () {
      this.$store.dispatch('register', {
        email: this.user.email,
        password: this.user.password,
        wa: this.user.wa,
        no_hp: this.user.no_hp
      }).then(() => {
        this.dialog = false
        this.$router.push('/')
        console.log('berhasil')
      }).catch(err => console.log(err))
    },
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  },
  computed: {
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
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
