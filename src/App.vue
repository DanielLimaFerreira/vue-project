<template>
  
  <v-app>
  <NavigationDrawer></NavigationDrawer>
  <AppBar></AppBar>
  <SystemBar></SystemBar>
    
    <v-main app class="ma-0 pa-0">
      <v-content app class="ma-0 pa-5" >
        <router-view></router-view>
      </v-content>
      
    <Footer></Footer>
      
    </v-main>

    <v-bottom-navigation
      app
      :value="selectedTab"
      color="teal"
      grow
    >
    <v-btn @click="selectedTab = 0">
      <span>Imagem Recente</span>

      <v-icon>mdi-history</v-icon>
    </v-btn>

   <v-btn @click="selectedTab = 1">
      <span>Imagem Favorita</span>

      <v-icon>mdi-heart</v-icon>
    </v-btn>
  </v-bottom-navigation>
      
  </v-app>
</template>

<script>
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import SystemBar from '@/components/SystemBar';
import AppBar from '@/components/AppBar';
import NavigationDrawer from '@/components/NavigationDrawer';
import Footer from '@/components/Footer'
//import Toolbar from '@/components/Toolbar'

export default {
  name: 'App',
  components: {
      SystemBar,
      AppBar,
      NavigationDrawer,
      Footer
    },
  data: () => ({
    menuOpened: false,
    selectedTab: 0
  }),
};
</script>
