<template>
  <div class="typer">
    <div id="main">
      <vue-typer :text="[
      'Library\n\n vue-typer \nvue-particles\n vue-snowf\n vue-smoothscroll'
      ]" 
        class="top-text"
        :repeat='0'
        :preTypeDelay="1000"
        :typeDelay="120"
        :preEraseDelay="5000"
        :eraseDelay="2000"
      ></vue-typer>
    </div>
  </div>
</template>

<style>
#main{
  position: absolute;
  top: 60vh;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
</style>