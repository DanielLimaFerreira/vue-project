<template>
  <v-content app>
    <h1>{{titleview}}</h1>
    <v-row>
      <v-col
        v-for="data in events"
        :key="data.id"
        cols="12"
        sm='6'
        md="4"
        xs='2'
      >
      <MyCard :cardid="data.id" :cardInfo="data"></MyCard>

      </v-col>
    </v-row>
    
  </v-content>  
</template>

<script>
import MyCard from '@/components/MyCard'

export default {
  name: 'Share',
  data(){
    return{
      titleview: this.$store.state.title
    }
  },
  computed:{
    myCards(){
      return this.$store.state.cards
    },
     title(){
        return this.$store.getters.bigTitle
      },
    events(){
      return this.$store.state.events
    }
  },
  components: {
      MyCard
  },
  created() {
    this.$store.dispatch("fetchEvents")
  }
};
</script>