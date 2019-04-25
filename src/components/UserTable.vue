<template>
  <div>
    <slot name="listuser">
      <v-toolbar flat color="white">
        <v-toolbar-title>User Terdaftar</v-toolbar-title>
        <v-divider
          class="mx-2"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <v-btn slot="activator" @click="navigateTo({
            name: 'registeruser'
          })" color="primary" dark class="mb-2">New Item</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="user"
        class="elevation-1"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-center">{{ props.item.firstname }} {{ props.item.lastname }}</td>
          <td class="text-xs-center">{{ props.item.username }}</td>
          <td class="text-xs-center">{{ props.item.no_hp }}</td>
          <td class="text-xs-center">{{ props.item.role }}</td>
          <td class="justify-center layout px-0">
            <v-icon
              small
              class="mr-2"
              @click="update_profile({
                name: 'editprofile',
                params: {
                  userid: props.item.id
                }
              })">
              edit
            </v-icon>
            <v-icon
              small
              @click="delete_user(props)">
              delete
            </v-icon>
          </td>
        </template>
        <template slot="no-data">
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
    </slot>
  </div>
</template>

<script>
import UserController from '@/services/UserController'

export default {
  data: () => ({
    dialog: false,
    headers: [
      // {
      //   text: 'Judul post',
      //   align: 'center',
      //   sortable: false,
      //   value: 'name'
      // },
      { text: 'Nama', align: 'center', value: 'lapak' },
      { text: 'Username', align: 'center', value: 'fat' },
      { text: 'No Handphone', align: 'center', value: 'carbs' },
      { text: 'Role', align: 'center', value: 'protein' },
      { text: 'Actions', align: 'center', value: 'name', sortable: false }
    ],
    user: [],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
    this.get_user()
  },

  methods: {
    navigateTo (route) {
      return this.$router.push(route)
    },
    delete_user (props) {
      UserController.delete(props.item.id)
        .then((resp) => {
          this.$swal('Deleted', 'Profile has been deleted.', 'success')
            .then(() => {
              this.$router.push('list-user')
            })
        })
    },
    update_profile (route) {
      this.$router.push(route)
    },
    get_user () {
      try {
        UserController.index()
          .then((resp) => {
            this.user = resp.data
            console.log(resp.data)
          })
      } catch (e) {
        console.log(e)
      }
    },
    initialize () {
      this.user = [
        {
          user: this.user.email
        }
      ]
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
