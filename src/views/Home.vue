<template>
  <v-content app>
    <v-row>
      <v-col
        v-for="data in myCards"
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
  name: 'Home',
  data(){
    return{
      
    }
  },
  computed:{
    myCards(){
      return this.$store.state.cards
    }
  },
  components: {
      MyCard
  }
};

</script>