<template>
<div>
<v-card
    class="pa-3"
    flat
    height="300px"
    img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
  >
  <v-toolbar
      dense
      floating
    >
      <v-text-field
        hide-details
        prepend-icon="search"
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon>my_location</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
</v-card>

<v-container grid-list-xl fluid>
      <v-layout row>
        <v-flex xs12 md5>
          <v-card>
            <v-container>
              <v-card-title>
              </v-card-title>
                <v-layout row>
                  <v-flex xs12 md4>
                    <v-text-field
                    label="What?"
                    solo>
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-text-field
                    label="What?"
                    solo>
                    </v-text-field>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-text-field
                    label="What?"
                    solo>
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-subheader class="pr-4 pt-3">Radius: xKM</v-subheader>
                  <v-slider
                    v-model="slider"
                    thumb-label
                  ></v-slider>
                </v-layout>
                <v-layout row>
                  <v-card-title>
                    <span class="heading">Result 10 found</span>
                  </v-card-title>
                </v-layout>
              </v-container>
          </v-card>
        </v-flex>
        <v-flex xs12 md7>
          <v-card>
            <v-card-title>
              <span class="title">Result based on your keyword</span>
            </v-card-title>
            <v-layout row>
              <v-flex xs12 md6>
                <v-card>
                  <v-img>
                    <img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    alt=""
                    height="200px">
                  </v-img>
                  <v-card-title>
                    <span class="title">Lapak x</span>
                  </v-card-title>
                </v-card>
              </v-flex>
              <v-flex xs12 md6>
                <v-card>
                  <v-img>
                    <img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    alt=""
                    height="200px">
                  </v-img>
                  <v-card-title>
                    <span class="title">Lapak x</span>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
    </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  components: {
    Footer
  }
}
</script>

<style>
</style>
