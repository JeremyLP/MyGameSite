<template>
  <div >

    <router-link :to="{name: 'Gameplay'}">Gameplay</router-link> |
    <router-link :to="{name: 'Gallery'}">Gallery</router-link> |
    <router-link :to="{name: 'About'}">About</router-link> |
    <router-link :to="{name: 'Admin'}">Admin</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>

</style>
