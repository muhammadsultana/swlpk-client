<template>
  <v-layout row>
    <v-container>
      <v-layout row>
        <v-flex xs12 md4>
          <h4>Saran lapak untuk Anda</h4>
            <v-select
            v-model="kota"
            :items="cities"
            item-text="name"
            item-value="value"
            class="pt-2 pl-2 pr-2"
            label="Kategori"
            solo
            ></v-select>
            <span>{{ kota }}</span>
        </v-flex>
      </v-layout>
    </v-container>
      <!-- swiper started -->
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row align-center>
            <v-flex xs12 md12>
              <swiper :options="swiperOption"
              class="swiper-container swiper-wrapper">
                <!-- slide -->
                <swiper-slide
                 v-for="post of posts.slice(0,10)"
                  :key="post.id">
                  <div>
                  <v-card
                  class="text-sm-left"
                  @click="goToDetail({
                    name: 'detail',
                    params: {
                      lapakId: post.id
                    }
                  })"
                  max-height
                  max-width>
                    <v-img
                    src="http://cdn2.tstatic.net/solo/foto/bank/images/alfamart-di-flipina_20160810_170637.jpg"
                    class="swiper-lazy">
                    </v-img>
                    <div class="swiper-lazy-preloader"></div>
                    <v-card-title>
                  <div>
                    <p class="title">{{ post.title }}</p>
                    <span class="red--text">Rp10.000.000</span><br>
                    <span>Jl. Palembang Prabumulih</span><br>
                    <span class="caption"><v-icon>done</v-icon>Tersedia</span>
                  </div>
                </v-card-title>
                </v-card>
                </div>
                </swiper-slide>
                <!-- end slide -->
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
              </swiper>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
  </v-layout>
</template>

<script>
import LapakController from '@/services/LapakController'

export default {
  data () {
    return {
      kota: '',
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: false,
        preloadImages: false,
        lazy: true,
        breakpoints: {
        // when window width is <= 320px
          600: {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1
          },
          960: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2
          },
          1264: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3
          }
        },
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      cities: [
        'Jakarta', 'Bogor', 'Aceh'
      ],
      posts: []
    }
  },
  methods: {
    goToDetail (route) {
      this.$router.push(route)
    }
    // async swiperOptions () {
    //   return this.$options.swiperOption
    // }
  },
  async mounted () {
    this.posts = (await LapakController.index()).data
  }
}
</script>

<style scoped>
</style>
