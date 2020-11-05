<template>
    <div>
        <h1 class="content-title"><font-awesome-icon icon="hammer" class="icon"/> Output</h1>
        <ul class="works">
          <li class="card">
            <div class="card-content">
              <img class="card-img" src="../assets/learning/1.png" alt="">
              <h1 class="card-title">学習項目1</h1>
              <p class="card-text">Vueの公開</p>
              <br>
              <a href="#" class="card-link github-link">Qiita(未)</a>
            </div>
          </li>
          <li class="card">
            <div class="card-content">
              <img class="card-img" src="../assets/learning/2.png" alt="">
              <h1 class="card-title">学習項目2</h1>
              <p class="card-text">ライブラリの導入</p>
              <br>
              <a href="#" class="card-link github-link">Qiita(未)</a>
            </div>
          </li>
          <li class="card">
            <div class="card-content">
              <img class="card-img" src="../assets/learning/3.png" alt="">
              <h1 class="card-title">学習項目3</h1>
              <p class="card-text">Vue Routerの設定</p>
              <br>
              <a href="#" class="card-link github-link">Qiita(未)</a>
            </div>
          </li>
          <li class="card">
            <div class="card-content">
              <img class="card-img" src="../assets/learning/4.png" alt="">
              <h1 class="card-title">学習項目4</h1>
              <p class="card-text">学習内容</p>
              <br>
              <a href="#" class="card-link github-link">Qiita(未)</a>
            </div>
          </li>
          <li class="card">
            <div class="card-content">
              <img class="card-img" src="../assets/learning/5.png" alt="">
              <h1 class="card-title">学習項目5</h1>
              <p class="card-text">学習内容</p>
              <br>
              <a href="#" class="card-link github-link">Qiita(未)</a>
            </div>
          </li>
          <li class="card">
            <div class="card-content">
              <img class="card-img" src="../assets/learning/6.png" alt="">
              <h1 class="card-title">学習項目6</h1>
              <p class="card-text">学習内容</p>
              <br>
              <a href="#" class="card-link github-link">Qiita(未)</a>
            </div>
          </li>
          <li class="card">
            <div class="card-content">
              <img class="card-img" src="../assets/learning/7.png" alt="">
              <h1 class="card-title">学習項目7</h1>
              <p class="card-text">学習内容</p>
              <br>
              <a href="#" class="card-link github-link">Qiita(未)</a>
            </div>
          </li>
          <li class="card">
            <div class="card-content">
              <img class="card-img" src="../assets/learning/8.png" alt="">
              <h1 class="card-title">学習項目8</h1>
              <p class="card-text">学習内容</p>
              <br>
              <a href="#" class="card-link github-link">Qiita(未)</a>
            </div>
          </li>
          <li class="card">
            <div class="card-content">
              <img class="card-img" src="../assets/learning/9.png" alt="">
              <h1 class="card-title">学習項目9</h1>
              <p class="card-text">学習内容</p>
              <br>
              <a href="#" class="card-link github-link">Qiita(未)</a>
            </div>
          </li>
          <li class="card">
            <div class="card-content">
              <img class="card-img" src="../assets/learning/10.png" alt="">
              <h1 class="card-title">学習項目10</h1>
              <p class="card-text">学習内容</p>
              <br>
              <a href="#" class="card-link github-link">Qiita(未)</a>
            </div>
          </li>
          <li class="card">
            <div class="card-content">
              <img class="card-img" src="../assets/learning/11.png" alt="">
              <h1 class="card-title">学習項目11</h1>
              <p class="card-text">学習内容</p>
              <br>
              <a href="#" class="card-link github-link">Qiita(未)</a>
            </div>
          </li>
          <li class="card">
            <div class="card-content">
              <img class="card-img" src="../assets/learning/12.png" alt="">
              <h1 class="card-title">学習項目12</h1>
              <p class="card-text">学習内容</p>
              <br>
              <a href="#" class="card-link github-link">Qiita(未)</a>
            </div>
          </li>
        </ul>
    </div>
</template>




<style>
.works{
  list-style-type: none;
  padding-left: 0;
  text-align: center;
  padding-left: 15%;
  padding-right: 15%;
}
.jp{
  font-weight: 100;
}
.card-lang{
  font-weight: 500;
}
.card {
  display: inline-block;
  margin: 30px 60px;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  float: left;
  width: 30%;
  height: auto;
}
.card-content {
  padding: 0px 20px 20px 20px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
.card-link{
  border: 1px solid #00aaff;
  text-decoration: none;
  color: #00aaff;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
}
.card-link:hover {
  font-weight: 700;
}
.github-link{
  border-color: #171515;
  color: #171515;
}
@media screen and (max-width: 768px){
  .works{
      padding-left: 1%;
      padding-right: 1%;
  }
}
@media screen and (max-width: 550px){
  .card{
    width: 280px;
    margin: 30px 0;
  }
}
</style>