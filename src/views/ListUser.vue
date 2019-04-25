<template>
  <v-container>
    <UserTable slot="listuser"></UserTable>
  </v-container>
</template>

<script>
import UserTable from '@/components/UserTable'

export default {
  components: {
    UserTable
  }
}
</script>
