<template>
  <v-system-bar app dark>
    <v-row justify="center">
      {{today}}
    </v-row>
  </v-system-bar>
</template>

<script>
  export default {
    name: 'SystemBar',
    data: () => ({
      today: '--/--/----'
    }),
    mounted() {
      this.today = new Date().toLocaleDateString();
    }
  }
</script>
