<template>
<div>
 <v-layout row>
    <v-flex xs12>
      <v-card flat max-height>
        <v-img
          max-width
          height="300"
          src="https://ecs7.tokopedia.net/img/cache/700/product-1/2017/8/1/0/0_fcf633d2-a25a-46ef-8c2f-7e00b894f54f_700_394.jpg">
          </v-img>
      </v-card>
    </v-flex>
 </v-layout>
 <v-container grid-list-md>
<v-card
    class="mx-auto"
    max-width="1000"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step"
    max-width>
      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            label="Email"
            value="john@vuetifyjs.com"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            label="Password"
            type="password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-3 text-xs-center">
          <v-img
            class="mb-3"
            contain
            height="128"
            width="1000"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        flat
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 3"
        color="primary"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
 </v-container>
</div>

</template>

<script>
export default {
  data: () => ({
    step: 1
  }),

  computed: {
    currentTitle () {
      switch (this.step) {
        case 1: return 'Sign-up'
        case 2: return 'Create a password'
        default: return 'Account created'
      }
    }
  }
}
</script>

<style>
</style>
