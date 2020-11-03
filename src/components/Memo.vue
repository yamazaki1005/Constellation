<template>
  <div>
    <h1>学習メモ</h1>
    <p>Vueで学習した内容を記述していく場所</p>
    <p>
      ディレクティブ

      v-bind:属性
      属性の値をデータに対応づける

      <!-- <a v-bind:href="{{ url }}"></a> -->
      <!-- <a :href="url"></a>省略記法 -->

      v-on:domイベント
      イベント発生時に特定の処理をする

      <!-- <button v-on:click="countUp">カウントアップ</button> -->

      イベントリファレンス
      https://developer.mozilla.org/ja/docs/Web/Events

      イベントオブジェクト取得方法
      <!-- <p v-on:mousemove="changeMousePosition">マウスを載せてください</p> -->
      <!-- <p>X:{{X}},Y:{{Y}}</p> -->

      methods: {
        changeMousePosition: function(event) {
          this.X = event.clientX
          this.Y = event.clientY
        }
      }
    </p>
  </div>
</template>

<style scoped>
h1 {
  font-size: 30px;
}
</style>