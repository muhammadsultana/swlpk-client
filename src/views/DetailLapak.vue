<template>
  <div>
    <v-flex xs12>
      <v-carousel max>
        <v-carousel-item
          v-for="(image,i) in images"
          :key="i"
          :src="image.src"
          reverse-transition="fade"
          transition="fade"
        ></v-carousel-item>
      </v-carousel>
    </v-flex>

    <v-container fluid>
      <h2 class="text-xs-left">{{ post.title }}</h2>
      <v-divider></v-divider>
    </v-container>

    <v-container fluid grid-list-xl>
      <v-layout row>
        <v-flex xs12 md7>
          <v-card>
            <v-card-title>
              <div class="title"><v-icon>details</v-icon> Detail lapak</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-media>
              <v-layout row>
                <v-flex xs6 md5>
                  peta
                </v-flex>
                <v-flex xs6 md7>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon color="indigo">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>(650) 555-1234</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon color="indigo">mail</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>muhammadsultana@outlook.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon color="indigo">directions</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Get Directions</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-flex>
              </v-layout>
            </v-card-media>
          </v-card>
        </v-flex>
        <v-flex xs12 md5>
          <v-card>
            <v-card-title>
              <div class="title"><v-icon>description</v-icon> Deskripsi</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-media>
              <v-window
              max>
              {{ post.body }}
              </v-window>
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>

            <v-layout row>
        <v-flex xs12 md7>
          <v-card>
            <v-card-title>
              <div class="title"><v-icon>rate_review</v-icon> Rate and Write a review</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-media>
              <v-layout row>
                <v-flex xs12 md12>
                  <v-container>
                    <v-card-title>
                      <div class="caption">Write your comment below</div>
                    </v-card-title>
                    <v-textarea>
                    </v-textarea>
                    <v-text-field
                    label="Your Name">
                    </v-text-field>
                    <v-text-field
                    label="Your Email">
                    </v-text-field>
                    <v-text-field
                    label="Your Website">
                    </v-text-field>
                    <v-btn class="green">
                      <div>Submit review</div>
                    </v-btn>
                  </v-container>
                </v-flex>
              </v-layout>
            </v-card-media>
          </v-card>
        </v-flex>
        <v-flex xs12 md5>
          <v-card>
            <v-card-title>
              <div class="title"><v-icon>photos</v-icon> Photos</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-media>
              <v-img>
                <img src="http://sewalapak.id/wp-content/uploads/job-manager-uploads/gallery_images/2018/12/photo_2018-12-28_07-59-30.jpg" alt=""
                width="100px"
                height="100px">
              </v-img>
            </v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Controller from '@/services/Controller'

export default {
  components: {
    Footer
  },
  data () {
    return {
      post: [],
      images: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  },
  async mounted () {
    const lapakId = this.$store.state.route.params.lapakId
    this.post = (await Controller.details(lapakId)).data
  }
}
</script>

<style>
</style>
