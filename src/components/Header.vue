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
            @click="navigateTo({name: 'login'})">
              Log in/Sign up
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
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
