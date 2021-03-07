<template>
<div id="app" >
    <Mheader></Mheader>
    <router-view></router-view>
</div>
</template>

<script>
import Mheader from '@/component/layout/header.vue'
export default {
    name: 'app',
    components: {
        Mheader,
    }
}
</script>

