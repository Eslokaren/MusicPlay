<template>
<main >
    <div class="banel vh-100 d-flex align-items-center  "> 
      <div class="container">
          <div class="row d-flex justify-content-center pt-4">
                 <div class="input-group col-6  ml-5">
                    <input 
                    type="text" 
                    class="w-75 rounded-left border border-danger" 
                    placeholder="Search " 
                    aria-label="Recipient's username" 
                    aria-describedby="button-addon2"
                    @keyup.enter="search"
                    v-model="searchQuery"
                    >
                     <div class="input-group-append">
                        <button class="btn btn-outline-danger  border-left-0 " type="button" id="button-addon2" @click="search" >
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div class="col-12 d-flex justify-content-center mt-4" v-if="isLoading">
                    <div class="spinner-border text-warning " role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div class="col-12 bg-danger mt-2" v-show="showNotification">
                    <p class="text-white text-center my-1">Music not registered, please search for another one!</p>
                </div>
          </div>
         
      </div>
   
    </div>
    <div class="container">
          <div class="row">
              <div class="col my-4" v-for="t in tracks" :key="t.id" @click="goToPlayer(t.id)">
                  <Mcards  :track='t'>
                     
                  </Mcards>
              </div>
          </div>
    </div>
   

</main>
</template>

<script>
import trackService from '@/service/track' 

import Mcards from '@/component/cards.vue'
export default {
    name: 'app',
    components: {
        Mcards
    },
     data () {
        return {
            searchQuery:'',
            tracks:[],
            showNotification: false,
            isLoading: false
        }
    },
    methods:{
        scrollDown () {
            setTimeout(() => {
                 window.scrollTo({
                        behavior:"smooth",
                        top:550,
                        
            }) 
            }, 1000);
            
        },
        search () {
            this.isLoading=true
            if (!this.searchQuery) { return }
             trackService.search(this.searchQuery)
                 .then(res=>{
                     this.showNotification = res.tracks.total === 0
                     this.tracks=res.tracks.items
                     this.isLoading=false
            });
            console.log(this.showNotification)
             this.scrollDown()
        },
        handleScroll: function() {
            const nav = document.querySelector('.navbar')
            if (window.scrollY>549) 
            {
                setTimeout(() => {
                    nav.classList.add('bg-success')  
                }, 100);
            }
            else{
               setTimeout(() => {
                    this.scroll()
                }, 100);
            }

                    

        },
        scroll(){
            const nav = document.querySelector('.navbar')
             nav.classList.remove('bg-success')  
        },
        goToPlayer(id){
            this.$router.push({name: 'player',params: {id}})
            this.scroll()
        }
    },
    watch: {
        showNotification(){
            if(this.showNotification){
                setTimeout(() => {
                    this.showNotification=false
                }, 3000);
            }
        }

    },
    mounted: function () {
        this.scroll()
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed: function () {
        window.removeEventListener('scroll', this.handleScroll);
    }

}
</script>

<style scoped>
      .banel{
        background-image: url('/src/assets/header.jpg');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
       }
       input:focus
       {
        outline:none !important;
        outline-offset: 0;
       }
       button{
           background-color: white;

       }
</style>