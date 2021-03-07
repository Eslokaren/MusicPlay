<template>
<div class="player vh-100 d-flex align-items-center ">
    <div class="container " >
        <div class="row  ">
            <div class="col d-flex justify-content-center align-items-center flex-column">
                <h4 class="text-white">{{track.name}} <i> By {{ track.artists[0].name}} </i></h4>
                <img :src="track.album.images[0].url" class="rounded-circle my-3" alt="" >
                <audio :src="track.preview_url" controls></audio>

            </div>
        </div>
    </div>
</div>
</template>
    
<script>
import trackService from '@/service/track'
export default {
    data () {
        return {
            track: {}
        }
    },
    created () {
      const id = this.$route.params.id
      console.log(id)
      trackService.getById(id)
        .then( res => {
          console.log(res)
          this.track=res
          console.log(this.track)
      })
      

    },
}
</script>

<style scoped>
.player{
    background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);
}
img{
    height: 150px;
    width: 150px;
}
 audio:focus
       {
        outline:none !important;
        outline-offset: 0;
       }
</style>