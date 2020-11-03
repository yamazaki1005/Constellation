<template>
  <div class="library">
    <div id="main">
      <vue-typer :text="['Library\n ①vue-typer \n②vue-particles']" 
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