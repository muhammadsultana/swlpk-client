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
            v-model="lapak.nama_lapak"
          ></v-text-field>
          <v-select
            flat
            :items="items"
            class="pt-2 pl-2 pr-2"
            label="Kategori"
            v-model="lapak.kategori"
            solo
            ></v-select>
          <v-text-field
            label="Harga"
          ></v-text-field>
          <v-text-field
          label="Alamat"
          v-model="lapak.lokasi.alamat"></v-text-field>
          <v-layout row>
              <v-flex md4 xs12>
                <v-select
                label="Provinsi"
                v-model="lapak.lokasi.provinsi"></v-select>
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
          </v-layout>
          <v-img>
            <img src="https://developers.google.com/maps/solutions/images/storelocator_clothing.png" height="100" alt="">
          </v-img>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-container grid-list-xl>
          <b-form-file v-model="lapak.file" :state="Boolean(lapak.file)" placeholder="Choose a file..."></b-form-file>
          <div class="mt-3">Selected file: {{ lapak.file && lapak.file.name }}</div>
        </v-container>
        <v-container>
          <v-textarea
          name="input-7-1"
          solo
          label="Deskripsi"
          v-model="lapak.deksripsi"
          auto-grow
          ></v-textarea>
        </v-container>
      </v-window-item>

      <v-window-item :value="3">
        <v-container>
          <v-text-field
            label="Nomor Handphone"
            v-model="lapak.user.no_hp"
            :mask="'####-####-#######'">
          </v-text-field>
          <v-text-field
            label="Nomor WhatsApp"
            v-model="lapak.user.no_hp"
            :mask="'####-####-#######'">
          </v-text-field>
        </v-container>
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
        v-if="step < 3"
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
        depressed
        @click="submit"
      >
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
 </v-container>
</div>

</template>

<script>
export default {
  data () {
    return {
      step: 1,
      lapak: {
        kategori: '',
        nama_lapak: '',
        harga: '',
        lokasi: {
          alamat: '',
          provinsi: '',
          kota: '',
          kecamatan: ''
        },
        file: null,
        deskripsi: '',
        user: {
          no_hp: '',
          no_wa: ''
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
      }
      return this.step
    }
  }
}
</script>

<style>
</style>
