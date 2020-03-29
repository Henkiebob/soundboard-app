<template>
  <v-app>
    <v-content>
      <Sounds/>
    </v-content>
  </v-app>
</template>

<script>
import Sounds from './components/Sounds';


export default {
  name: 'App',

  components: {
    Sounds,
  },

  data: () => ({
    //
  }),
};
</script>
