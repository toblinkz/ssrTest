<template>
  <Tutorial/>
</template>

<script>
export default {
  name: 'IndexPage',
  methods:{
     getCountries(){
       this.$axios.$get('https://api.termii.com/v1/utility/countries');
     }
  },
  mounted() {
    this.getCountries();
  }
}
</script>
