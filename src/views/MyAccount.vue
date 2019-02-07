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
                <v-card
                  height="100"
                >
                  <v-card-text>Photo</v-card-text>
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
                      <p class="text-xs-left">{{ user }}</p>
                      <p class="text-xs-left">Email User</p>
                      <p class="text-xs-left">No. Handphone User</p>
                      <p class="text-xs-left">No. WhatsApp User</p>
                    </v-flex>
                  </v-layout>
                </v-card-text>
                <v-card-action>
                  <v-btn class="blue" dark>Perbarui data</v-btn>
                </v-card-action>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'myAccount',
  computed: {
    ...mapState(['user', 'isUserLoggedIn', 'hello'])
  }
}
</script>

<style>

</style>
