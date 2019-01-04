<template>
    <v-container>
      <!-- 1 row -->
      <v-layout row>
        <v-flex xs12>
            <v-layout row>
              <!-- 1 column; left -->
              <v-flex sm5>
                <v-container>
                  <h1 class="white--text">Admin Login</h1>
                  <v-divider></v-divider>
                </v-container>
              </v-flex>
              <!-- 1 column; right-->
              <v-flex sm7>
                <v-card class="dark">
                  <h1 class="text-xs-center">sewalapak.id</h1>
                  <v-form dark>
                  <v-container>
                    <v-layout row wrap>
                      <v-flex xs6 offset-xs3>
                        <v-text-field
                          label="Username"
                        ></v-text-field>
                        <v-text-field
                          label="Password"
                        ></v-text-field>
                      <v-btn block dsark class="indigo"><i class="material-icons">check</i>Login</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-form>
                </v-card>
              </v-flex>
            </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'admin'
}
</script>

<style scoped>
.theme--light.v-card {
  padding-top: 100px;
  padding-bottom: 100px;
}
.container.fluid {
  background-color: #359AD6;
  padding-bottom: 200px;
}
.flex.sm5 {
  background-color: #359AD6;
}
</style>
