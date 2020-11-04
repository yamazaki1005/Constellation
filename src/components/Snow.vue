

<script>
import Snowf from 'vue-snowf';

export default {
  components: {
    Snowf
  }
};
</script>


<template>
  <div class="snow-contents">
    <Snowf
    :amount="300"
    :size="3"
    :speed="0.5"
    :wind="2"
    :opacity="0.8"
    :swing="1"
    :image="null"
    :zIndex="-1"
    :resize="true"
    color="#fff"
  ></Snowf>
  </div>
</template>