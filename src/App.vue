<template>
  <v-app>
    <system-bar />

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="menuOpened = !menuOpened"></v-app-bar-nav-icon>

      <v-toolbar-title>Dan Projects</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    
    <v-main app>
      <v-navigation-drawer
        v-model="menuOpened"
        absolute
      >
        <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Meio</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fim</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      </v-navigation-drawer>

      <v-content app>
        <v-row justify="center">
          <h1 v-if="selectedTab == 0">Recente</h1>
        </v-row>

        <v-row justify="center">
          <h1 v-if="selectedTab == 1">Favorita</h1>
        </v-row>
    
        <v-row justify="center">
          <v-img
            v-if="selectedTab == 0"
            style="border-radius: 8px"
            src="https://lorempixel.com/600/280/"
            max-width="600"
            max-height="280"            
          ></v-img>

          <v-img
            v-if="selectedTab == 1"
            style="border-radius: 8px"
            src="https://lorempixel.com/400/200/"
            max-width="600"
            max-height="280"            
          ></v-img>
        </v-row>
        <v-footer 
          app
          style="font-size: 12px; padding: 6px; display: flex; justify-content: center"
        >
           Copyright © 2021 Dan Productions - All Rights Reserved   
         </v-footer>
      </v-content>
      
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
import SystemBar from './components/SystemBar';

export default {
  name: 'App',
  components: {
      SystemBar,
    },
  data: () => ({
    menuOpened: false,
    selectedTab: 0
  }),
};
</script>
