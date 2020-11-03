

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
    :amount="50"
    :size="5"
    :speed="0.1"
    :wind="0"
    :opacity="0.8"
    :swing="1"
    :image="null"
    :zIndex="null"
    :resize="true"
    color="#fff"
  ></Snowf>
  </div>
</template>


<style scoped>
.snow-contents {
}
</style>