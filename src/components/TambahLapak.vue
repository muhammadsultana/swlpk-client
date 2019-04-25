<template>
<div>
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
            v-model="lapak.Posts.judul_post"
          ></v-text-field>
          <span class="title">Harga</span>
          <v-layout row>
            <v-flex xs12 md3>
              <v-text-field
              label="Per Jam"
              v-model="lapak.Posts.perjam"
              prepend-icon="attach_money"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md3>
              <v-text-field
              label="Per Hari"
              v-model="lapak.Posts.perhari"
              prepend-icon="attach_money"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md3>
              <v-text-field
              label="Per Bulan"
              v-model="lapak.Posts.perbulan"
              prepend-icon="attach_money"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 md3>
              <v-text-field
              label="Per Tahun"
              v-model="lapak.Posts.pertahun"
              prepend-icon="attach_money"
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-select
          :items="cat"
          name="cat"
          v-model="lapak.Posts.KategoriId"
          item-text="nama_kategori"
          item-value="id"
          class="pt-2 pl-2 pr-2"
          label="Kategori"
          solo
          ></v-select>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-container>
          <v-textarea
          name="input-7-1"
          solo
          label="Deskripsi"
          v-model="lapak.Posts.deskripsi_umum"
          auto-grow
          ></v-textarea>
          <v-select
          :items="loc"
          name="loc"
          v-model="lapak.LokasiId"
          item-text="kota"
          item-value="id"
          class="pt-2 pl-2 pr-2"
          label="Lokasi"
          solo
          ></v-select>
        </v-container>
      </v-window-item>

      <v-window-item :value="3">
        <v-card-text>
          <v-text-field
            label="Nama Penyedia"
            v-model="lapak.nama_penyedia"
          ></v-text-field>
          <v-text-field
            label="Alamat Penyedia"
            v-model="lapak.Posts.alamat">
          </v-text-field>
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
        :disabled="step === 3"
        color="primary"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
      <v-btn
        v-if="step === 3"
        class="green"
        dark
        @click="submitlapak"
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
import LokasiController from '@/services/LokasiController'
import KategoriController from '@/services/KategoriController'
// import axios from 'axios'

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
      loc: [],
      cat: [],
      status_post: [
        'Tersedia',
        'Tidak tersedia'
      ],
      lapak: {
        nama_penyedia: '',
        alamat: '',
        LokasiId: '',
        Posts: {
          judul_post: '',
          deskripsi_umum: '',
          status_post: '',
          perjam: '',
          perhari: '',
          perbulan: '',
          pertahun: '',
          foto: '',
          KategoriId: '',
          Fasilitas: [
            { nama_fasilitas: '' }
          ]
        }
      }
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
  async mounted () {
    await this.get_lokasi()
    await this.get_kategori()
  },
  methods: {
    get_kategori () {
      KategoriController.index()
        .then((resp) => {
          this.cat = resp.data
        })
    },
    get_lokasi () {
      LokasiController.index()
        .then((resp) => {
          this.loc = resp.data
        })
    },
    submitlapak () {
      // let lapak = {
      //   nama_penyedia: this.lapak.nama_penyedia,
      //   alamat: this.lapak.alamat,
      //   kecamatan: this.lapak.kecamatan,
      //   LokasiId: this.lapak.LokasiId,
      //   judul_post: this.lapak.Posts.judul_post,
      //   deskripsi_umum: this.lapak.Posts.deskripsi_umum,
      //   status_lapak: this.lapak.Posts.status_post,
      //   perjam: this.lapak.Posts.perjam,
      //   perhari: this.lapak.Posts.perhari,
      //   perbulan: this.lapak.Posts.perbulan,
      //   pertahun: this.lapak.Posts.pertahun
      // }
      // LapakController.register_lapak(lapak)
      //   .then((resp) => {
      //     console.log(resp)
      //   })

      // this.$store.dispatch('submit_lapak', {
      //   nama_penyedia: this.lapak.nama_penyedia,
      //   alamat: this.lapak.alamat,
      //   kecamatan: this.lapak.kecamatan,
      //   LokasiId: this.lapak.LokasiId,
      //   judul_post: this.lapak.Posts.judul_post,
      //   deskripsi_umum: this.lapak.Posts.deskripsi_umum,
      //   status_lapak: this.lapak.Posts.status_post,
      //   perjam: this.lapak.Posts.perjam,
      //   perhari: this.lapak.Posts.perhari,
      //   perbulan: this.lapak.Posts.perbulan,
      //   pertahun: this.lapak.Posts.pertahun
      // })
      //   .then((resp) => {
      //     console.log(resp)
      //   })

      this.$http.post('http://localhost:8081/post/', this.lapak,
        {
          headers: {
            'content-type': 'application/json'
          }
        })
        .then(result => {
          console.log(result.data)
        })
    }
  }
}
</script>

<style>
</style>
