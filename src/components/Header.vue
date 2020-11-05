<template>
  <div class="header">
    <div class="header-inner">
      <a href="#" class="title" @click="clickSmoothScroll('#app')">Vue Learning</a>
      <Nav class="nav"></Nav>
    </div>
  </div>
</template>

<script>
import Nav from './Nav.vue'


export default{
  components:{
    Nav
  }
}
</script>

<style>
.header{
  background-color:#03111a;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
}
.header-inner{
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
}
.title{
  color: whitesmoke;
  padding:20px 0px;
  font-size: 35px;
  margin:unset;
  text-decoration-line: none;
}
.nav{
  margin: auto ;
  margin-right: 0;
  padding: auto;
}
@media screen and (max-width: 450px) {
  .header {
    display: none;
  }
}
</style>
