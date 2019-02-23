<template lang="html">
  <nav class="nav">
    <div class="nav__inner">
      <a href="#header"><p class="logo" >Gadzhidadaev <br> <span>Mukhtar</span> </p></a>
      <div class="menu">
        <ul class="menu__items">
          <router-link class="menu__item" :to="{ name: 'home'}" tag="li">
            <a class="menu__link" href="#">Главная</a>
          </router-link>
          <router-link class="menu__item" :to="{ name: 'wedding'}" tag="li">
            <a class="menu__link" href="#">Свадьбы</a>
          </router-link>
          <router-link class="menu__item" :to="{ name: 'landscape'}" tag="li">
            <a class="menu__link" href="#">Пейзаж</a>
          </router-link>
          <router-link class="menu__item" :to="{ name: 'car'}" tag="li">
            <a class="menu__link" href="#">Автомобили</a>
          </router-link>
          <router-link class="menu__item" :to="{ name: 'people'}" tag="li">
            <a class="menu__link" href="#">Фотографии людей</a>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="nav__bg"></div>
    <progress value="0">
      <div class="progress-container">
        <span class="progress-bar"></span>
      </div>
    </progress>
    <div class="modal"></div>
    <div class="overlay"></div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
