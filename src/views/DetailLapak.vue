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
      <h2 class="text-xs-left">{{ lapak.judul_post }}</h2>
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
            <v-responsive>
              <v-layout row>
                <v-flex xs6 md5>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon color="indigo">money</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Harga bulanan: Rp{{ lapak.perbulan }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon color="indigo">person</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Pemilik: {{ lapak.Penyedium.nama_penyedia }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon color="indigo">person</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Fasilitas: {{ Object.keys(lapak.Fasilitas) }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-flex>
                <v-flex xs6 md7>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon color="indigo">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>{{ lapak.no_hp }}</v-list-tile-title>
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
                      <v-list-tile-title>{{ lapak.Lokasi.kota}}, {{ lapak.Lokasi.provinsi}}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-flex>
              </v-layout>
            </v-responsive>
          </v-card>
        </v-flex>
        <v-flex xs12 md5>
          <v-card>
            <v-card-title>
              <div class="title"><v-icon>description</v-icon> Deskripsi</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-responsive>
              <v-window
              max>
              {{ lapak.deskripsi_umum }}
              </v-window>
            </v-responsive>
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
            <v-responsive>
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
            </v-responsive>
          </v-card>
        </v-flex>
        <!-- <v-flex xs12 md5>
          <v-card>
            <v-card-title>
              {{ lapak }}
              <div class="title"><v-icon>photos</v-icon> Photos</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-responsive>
              <v-img>
                <img src="http://sewalapak.id/wp-content/uploads/job-manager-uploads/gallery_images/2018/12/photo_2018-12-28_07-59-30.jpg" alt=""
                width="100px"
                height="100px">
              </v-img>
            </v-responsive>
          </v-card>
        </v-flex> -->
      </v-layout>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import LapakController from '@/services/LapakController'

export default {
  components: {
    Footer
  },
  data () {
    return {
      id: this.$route.params.lapakId,
      lapak: {},
      images: [
        {
          src: 'http://cdn2.tstatic.net/solo/foto/bank/images/alfamart-di-flipina_20160810_170637.jpg'
        }
      ]
    }
  },
  created: function () {
    LapakController.show(this.id).then((resp) => {
      this.lapak = resp.data
      console.log(this.lapak)
    })
  }
}
</script>

<style>
</style>
