<template>
  <div>
    <h1>About</h1>
    <router-link :to="{name: 'RoadMap'}">Road-Map</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About'
};
</script>

<style scoped>
</style>