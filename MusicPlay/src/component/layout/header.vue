<template>
  <header>
       <nav class="navbar navbar-expand-lg navbar-dark fixed-top d-flex justify-content-between">
        <a class="navbar-brand" href="#">
            <img src="@/assets/logo-header.png" alt="" height="50" class="bg-warning rounded-circle">
        </a>
         <a class="nav-link text-white h1" href="#/"><i class="fas fa-home"></i></a>
      </nav>
      
  </header>
</template>

<script>
export default {
    methods:{
        goToHome(){
            this.$router.push({name: 'search'})
        }
    }
}
</script>

