<template>
  <div class="nav-res">
    <a href="#" class="link-content" @click="clickSmoothScroll('#app')">
      <font-awesome-icon icon="image" class="nav-icon"/>
      <p class="comment">Top</p>
    </a>
    <a href="#" class="link-content" @click="clickSmoothScroll('#about')">
      <font-awesome-icon icon="user-circle" class="nav-icon"/>
      <p class="comment">#</p>
    </a>
    <a href="#" class="link-content" @click="clickSmoothScroll('#skill')">
      <font-awesome-icon icon="code" class="nav-icon"/>
      <p class="comment">#</p>
    </a>
    <a href="#" class="link-content" @click="clickSmoothScroll('#work')">
      <font-awesome-icon icon="hammer" class="nav-icon"/>
      <p class="comment">#</p>
    </a>
    <a href="#" class="link-content" @click="clickSmoothScroll('#contact')">
      <font-awesome-icon icon="handshake" class="nav-icon"/>
      <p class="comment">#</p>
    </a>
  </div>
</template>

<style scoped>
.res-title{
  background-color:#03111a;
  padding: 10px;
  margin: 0;
  color: whitesmoke;
}
.nav-res{
  display: none;
}

@media screen and (max-width: 768px){
  .nav-res{
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 1;
    background-color: #03111a;
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>