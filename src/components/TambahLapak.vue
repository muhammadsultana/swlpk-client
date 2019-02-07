<template v-for="lapak in lapaks">
<div  :key="lapak.id">
 <v-layout row>
    <v-flex xs12>
      <v-card flat max-height>
        <v-img
          max-width
          height="200"
          src="http://sewalapak.id/wp-content/uploads/2018/12/page-my-accountfeatured-image.jpg">
          <h1 class="display-3 font-weight-medium white--text mt-4">Tambah Lapak</h1>
          </v-img>
      </v-card>
    </v-flex>
 </v-layout>
 <v-container grid-list-md>
<v-card
    class="mx-auto"
    max-width="800"
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
            label="Nama Lapak"
          ></v-text-field>
          <!-- <v-select
            flat
            :items="option"
            class="pt-2 pl-2 pr-2"
            label="Kategori"
            v-model="KategoriId"
            solo
          ></v-select> -->
          <span class="title">Harga</span>
          <v-layout row>
            <v-flex xs12 md3>
              <v-text-field
              label="Per Jam"
              prepend-icon="attach_money"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md3>
              <v-text-field
              label="Per Hari"
              prepend-icon="attach_money"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md3>
              <v-text-field
              label="Per Bulan"
              prepend-icon="attach_money"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md3>
              <v-text-field
              label="Per Tahun"
              prepend-icon="attach_money"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-text-field
          label="Alamat"
          ></v-text-field>
          <!-- <v-layout row>
              <v-flex md4 xs12>
                <v-select
                label="Provinsi"
                v-model="Provinsi"></v-select>
              </v-flex>
              <v-flex md4 xs12>
                <v-select
                label="Kota"
                v-model="lapak.lokasi.kota">
                </v-select>
              </v-flex>
              <v-flex md4 xs12>
                <v-select
                label="Kecamatan"
                v-model="lapak.lokasi.kecamatan"></v-select>
              </v-flex>
          </v-layout> -->
          <v-img>
            <img src="https://developers.google.com/maps/solutions/images/storelocator_clothing.png" height="100" alt="">
          </v-img>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <!-- <v-container grid-list-xl>
          <b-form-file v-model="lapak.file" :state="Boolean(lapak.file)" placeholder="Choose a file..."></b-form-file>
          <div class="mt-3">Selected file: {{ lapak.file && lapak.file.name }}</div>
        </v-container> -->
        <v-container>
          <v-textarea
          name="input-7-1"
          solo
          label="Deskripsi"
          auto-grow
          ></v-textarea>
        </v-container>
      </v-window-item>

      <v-window-item :value="3">
        <v-container>
          <v-text-field
            label="Nomor Handphone"
            :mask="'####-####-#######'">
          </v-text-field>
          <v-text-field
            label="Nomor WhatsApp"
            :mask="'####-####-#######'">
          </v-text-field>
          <v-select
            flat
            :items="status_post"
            class="pt-2 pl-2 pr-2"
            label="Kategori"
            solo
          ></v-select>
        </v-container>
      </v-window-item>

      <v-window-item :value="4">
        <v-card-text>
          <v-text-field
            label="Nama Penyedia"
          ></v-text-field>
          <v-text-field
            label="Alamat">
          </v-text-field>
          <v-select
            flat
            :items="kecamatan"
            class="pt-2 pl-2 pr-2"
            label="Kategori"
            solo
          ></v-select>
        </v-card-text>
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
        v-if="step < 4"
        :disabled="step === 4"
        color="primary"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
      <v-btn
        v-if="step === 4"
        class="green"
        dark
        @click="postLapak"
      >
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
 </v-container>
</div>

</template>

<script>
// import LapakController from '@/services/LapakController'

export default {
  data () {
    return {
      step: 1,
      option: [
        'hehe',
        'huhu'
      ],
      kecamatan: [
        'Ogan Ilir',
        'Ugun Ulur'
      ],
      status_post: [
        'Tersedia',
        'Tidak tersedia'
      ],
      lapaks: [
        {
          nama_penyedia: '',
          alamat: '',
          kecamatan: '',
          LokasiId: '',
          Posts: {
            judul_post: '',
            deskripsi_umum: '',
            status_post: '',
            perjam: '',
            perhari: '',
            perbulan: '',
            pertahun: '',
            titik: {
              type: '',
              coordinates: []
            },
            alamat: '',
            kecamatan: '',
            KategoriId: '',
            LokasiId: '',
            Fotoposts: [],
            Fasilitas: [
              {
                nama_fasilitas: ''
              }
            ]
          }
        }
      ]
    }
  },
  computed: {
    currentTitle () {
      switch (this.step) {
        case 1: return 'Informasi umum'
        case 2: return 'Detail lapak'
        case 3: return 'Kontak personal'
        case 4: return 'Informasi Penyedia'
      }
      return this.step
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
