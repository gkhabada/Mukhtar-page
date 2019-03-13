<template>
  <section>
    <div class="not-found">
      <h1>4<img src="../assets/camera.png" alt="">4</h1>
      <p>Страница не найдена</p>
      <router-link :to="{ name: 'home'}">Перейти на главную</router-link>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
  section {
    display: -webkit-flex;
  	display: -ms-flex;
  	display: flex;
  	-webkit-align-items: center;
  	-webkit-box-align: center;
  	-ms-flex-align: center;
  	align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 90px);
    text-align: center;
  }
  .not-found {
    font-family: cursive;
    height: 300px;
  }
  h1 {
    font-size: 190px;
    text-shadow: 1px 1px white,
               2px 2px #555;
  }
  h1 img {
    width: 230px;
  }
  p {
    font-size: 26px;
    margin: 20px 0 40px;
  }
  .not-found a {
    color: #23c869;
    font-weight: 400;
    font-size: 20px;
    /* text-shadow: 1px 1px 10px rgba(0,0,0, 0.2); */
  }
</style>
