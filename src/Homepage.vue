<template>
<div>
  <v-layout row>
    <v-flex xs12>
      <v-card flat max-height>
        <v-container>
          <v-layout row align-center>
            <v-flex xs12 md3>
              <v-layout justify-center class="pb-5">
                <v-card-title justify-center primary-title
                  class="white--text display-1 font-weight-thin text-xs-center">CARI LAPAK
                </v-card-title>
              </v-layout>
            </v-flex>
            <v-flex xs12 md4>
                <v-text-field
                class="pt-2 pl-2 pr-2"
                solo
                label="Provinsi dan Kota"
                append-icon="place"
                full-width
                @click="dialog = true"
                ></v-text-field>
            </v-flex>
            <v-flex xs12 md2>
              <v-select
              flat
              :items="items"
              class="pt-2 pl-2 pr-2"
              label="Kategori"
              solo
              ></v-select>
            </v-flex>
            <v-flex xs12 md3>
              <v-layout class="pb-4" align-center justify-center>
                <v-btn round class="orange" large><v-icon>search</v-icon>Cari</v-btn>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
  <swiper />
  <Kota />
      <!-- dialog -->
      <v-dialog
      v-model="dialog"
      max-width="1000"
      >
      <v-toolbar class="white" flat>
        <v-toolbar-title>Pilih Lokasi</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon
        color="red"
        @click="dialog = false ">close</v-icon>
      </v-toolbar>
        <v-layout style="background-color: #359AD6;
        color: white">
        <v-container>
          <v-flex xs12 md4>
            <p>Aceh</p>
            <p>Aceh</p>
            <p>Aceh</p>
            <p>Aceh</p>
            <p>Aceh</p>
            <p>Aceh</p>
            <p>Aceh</p>
            <p>Aceh</p>
          </v-flex>
          <v-flex xs12 md4>
sdf
          </v-flex>
                    <v-flex xs12 md4>
sdf
          </v-flex>
        </v-container>
        </v-layout>
    </v-dialog>
</div>
</template>

<script>
import swiperLapak from '@/components/SwiperLapak'
import Kota from '@/components/Kota'

export default {
  data () {
    return {
      dropdown_font: ['Arial', 'Calibri', 'Courier', 'Verdana'],
      dropdown_icon: [
        { text: 'list', callback: () => console.log('list') },
        { text: 'favorite', callback: () => console.log('favorite') },
        { text: 'delete', callback: () => console.log('delete') }
      ],
      dropdown_edit: [
        { text: '100%' },
        { text: '75%' },
        { text: '50%' },
        { text: '25%' },
        { text: '0%' }
      ],
      dialog: false,
      items: [
        'Alfamart', 'Indomaret', 'Bazaar'
      ]
    }
  },
  components: {
    'swiper': swiperLapak,
    Kota
  }
}
</script>

<style scoped>
.theme--light.v-card {
  background-color: #359AD6;
}

#search {
  margin-top: -40px;
}

.v-card__title {
  margin-bottom: -10px;
  margin-left: -15px
}

.headline {
  margin-top: -15px;
}
</style>
