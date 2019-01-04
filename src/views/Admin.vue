<template>
  <div>
      <!-- 1 row -->
      <v-layout>
        <v-toolbar dense flat class="indigo">
          <v-toolbar-side-icon></v-toolbar-side-icon>
          <v-toolbar-title class="white--text">sewalapak.id</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>apps</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>refresh</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
      </v-layout>

        <v-layout>
          <v-navigation-drawer
          v-model="drawer"
          permanent
          height>
            <v-toolbar flat class="transparent">
              <v-list class="pa-0">
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img src="https://randomuser.me/api/portraits/men/85.jpg">
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>John Leider</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-toolbar>
            <v-list class="pt-1" dense>
              <v-divider></v-divider>

              <v-list-tile
              v-for="item in items"
              :key="item.title">
                <v-list-tile-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title
                  @click="item.action">{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-navigation-drawer>
          <v-flex>
            <v-container >
              <Datatable slot="dataadmin"></Datatable>
            </v-container>
          </v-flex>
        </v-layout>
  </div>
</template>

<script>
import Datatable from '@/components/Datatable'

export default {
  components: {
    Datatable
  },
  data () {
    return {
      drawer: true,
      items: [
        {
          title: 'Home',
          icon: 'dashboard',
          action: function (title) {
            console.log(title)
          }
        },
        {
          title: 'About',
          icon: 'question_answer',
          action: function (title) {
            console.log(title)
          }
        }
      ],
      right: null
    }
  }
}
</script>
