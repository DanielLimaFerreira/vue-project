<template>
    <v-navigation-drawer app clipped dark height=100%
>   
        <v-list dense nav>
          <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h8">
                    Options
                </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <v-list-item v-for="item in items" :key="item.title" link>

            <v-list-item-icon>
                <v-icon color="quaternary">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import {
    mdiShareVariant,
    mdiDelete,
} from '@mdi/js'

  export default {
    data () {
      return {
        items: [
          { title: 'Favoritos', icon: 'mdi-heart' },
          { title: 'Buscar', icon: 'mdi-magnify'},
          { title: 'Compartilhar', icon: mdiShareVariant},
          { title: 'Lixeira', icon: mdiDelete }
        ],
        right: null,
      }
    },
  }
</script>
