<template>
    <v-app-bar app clipped-left color="primary" dark>
        <v-toolbar-title>Dan Projects</v-toolbar-title>
         <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>{{ icons.mdiShareVariant }}</v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>{{ icons.mdiDelete }}</v-icon>
        </v-btn>
        
    </v-app-bar>
</template>

<script>

import {
    mdiShareVariant,
    mdiDelete,
} from '@mdi/js'

export default {
  name: 'AppBar',

  data: () => ({
      icons: {
        mdiShareVariant,
        mdiDelete,
      },
  }),
};
</script>
