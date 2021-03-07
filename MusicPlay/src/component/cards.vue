<template>
    <div class="card  " >
        <img :src="track.album.images[0].url" class="card-img-top" alt="">
        <div class="card-body">
            <p class="card-text">{{track.name}} by {{ track.artists[0].name}}</p>
        </div>
    </div>

</template>

<style scoped>
  .card{
      width: 18rem;
  }
</style>

<script>
import play from '@/component/player.vue'
export default {
    name: 'app',
    components: {play},
    props: {
        track:{type: Object, required: true}
    }
}
</script>