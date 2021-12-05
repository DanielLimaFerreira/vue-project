<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="../assets/beach.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      {{cardInfo.title}}
    </v-card-title>

    <v-card-subtitle>
      {{cardInfo.subtitle}}
    </v-card-subtitle>

    <v-card-subtitle>{{cardInfo.description}}</v-card-subtitle>

   

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        EXPORT
      </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
   
  </v-card>
</template>

<script>
export default {
  props:['cardid', 'cardInfo'],
};
</script>