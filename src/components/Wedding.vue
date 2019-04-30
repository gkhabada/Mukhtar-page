<template lang="html">
  <div id="wrapper" class="wrapper__gallery">

  <div class="gallery" >

    <p class="gallery__text">Обращаем ваше внимание на то, что качество изображений уменьшено для увеличения скорости подгрузки картинок. </p>
    <div class="gallery__photo">
      <img src="../assets/gallery/w16.jpg" alt="свадебное фото Гаджидадаев" @click="openImage($event)"  class="gallery__item wedding">
      <img src="../assets/gallery/w17.jpg" alt="свадебное фото Гаджидадаев" @click="openImage($event)"  class="gallery__item wedding">
      <img src="../assets/gallery/w9.jpg" alt="свадебное фото Гаджидадаев"  @click="openImage($event)" class="gallery__item wedding">
      <img src="../assets/gallery/w10.jpg" alt="свадебное фото Гаджидадаев" @click="openImage($event)"  class="gallery__item wedding">
      <img src="../assets/gallery/w15.jpg" alt="свадебное фото Гаджидадаев" @click="openImage($event)"  class="gallery__item wedding">
      <img src="../assets/gallery/w5.jpg" alt="свадебное фото Гаджидадаев"  @click="openImage($event)" class="gallery__item wedding">
      <img src="../assets/gallery/w7.jpg" alt="свадебное фото Гаджидадаев"  @click="openImage($event)" class="gallery__item wedding">
      <img src="../assets/gallery/w18.jpg" alt="свадебное фото Гаджидадаев" @click="openImage($event)"  class="gallery__item wedding">
      <img src="../assets/gallery/w19.jpg" alt="свадебное фото Гаджидадаев" @click="openImage($event)"  class="gallery__item wedding">
      <img src="../assets/gallery/w20.jpg" alt="свадебное фото Гаджидадаев" @click="openImage($event)"  class="gallery__item wedding">
      <img src="../assets/gallery/w8.jpg" alt="свадебное фото Гаджидадаев"  @click="openImage($event)" class="gallery__item wedding">
      <img src="../assets/gallery/w6.jpg" alt="свадебное фото Гаджидадаев"  @click="openImage($event)" class="gallery__item wedding">
      <img src="../assets/gallery/w1.jpg" alt="свадебное фото Гаджидадаев"  @click="openImage($event)" class="gallery__item wedding">
      <img src="../assets/gallery/w2.jpg" alt="свадебное фото Гаджидадаев"  @click="openImage($event)" class="gallery__item wedding">
      <img src="../assets/gallery/w3.jpg" alt="свадебное фото Гаджидадаев"  @click="openImage($event)" class="gallery__item wedding">
      <img src="../assets/gallery/w21.jpg" alt="свадебное фото Гаджидадаев" @click="openImage($event)"  class="gallery__item wedding">
      <img src="../assets/gallery/w22.jpg" alt="свадебное фото Гаджидадаев" @click="openImage($event)"  class="gallery__item wedding">
      <img src="../assets/gallery/w23.jpg" alt="свадебное фото Гаджидадаев" @click="openImage($event)"  class="gallery__item wedding">
      <img src="../assets/gallery/w24.jpg" alt="свадебное фото Гаджидадаев" @click="openImage($event)"  class="gallery__item wedding">
      <img src="../assets/gallery/w13.jpg" alt="свадебное фото Гаджидадаев" @click="openImage($event)"  class="gallery__item wedding">
      <img src="../assets/gallery/w14.jpg" alt="свадебное фото Гаджидадаев" @click="openImage($event)"  class="gallery__item wedding">
      <img src="../assets/gallery/w4.jpg" alt="свадебное фото Гаджидадаев"  @click="openImage($event)" class="gallery__item wedding">
      <img src="../assets/gallery/w11.jpg" alt="свадебное фото Гаджидадаев" @click="openImage($event)"  class="gallery__item wedding">
      <img src="../assets/gallery/w12.jpg" alt="свадебное фото Гаджидадаев" @click="openImage($event)"  class="gallery__item wedding">
    </div>
  </div>



  </div><!--#wrapper-->
</template>

<script>
export default {
  methods: {
    openImage(e) {
      let modal = $('.modal');
      let overlay = $('.overlay');
      $(e.target).clone().appendTo($(modal));
      $(modal).children().css({"top": "auto", "left": "auto", "height": "100%", "position": "relative"});
      overlay.addClass('open');
      modal.addClass('open');
    }
  }
}
</script>

<style lang="css" scoped>
</style>
