<template>
  <div id="wrapper" class="wrapper__gallery">

  <div class="gallery" >

    <p class="gallery__text">Обращаем ваше внимание на то, что качество изображений уменьшено для увеличения скорости подгрузки картинок. </p>
    <div class="gallery__photo">
      <img src="../assets/gallery/p6.jpg" alt="фото людей Гаджидадаев"  @click="openImage($event)" class="gallery__item people">
      <img src="../assets/gallery/p27.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p7.jpg" alt="фото людей Гаджидадаев"  @click="openImage($event)" class="gallery__item people">
      <img src="../assets/gallery/p5.jpg" alt="фото людей Гаджидадаев"  @click="openImage($event)" class="gallery__item people">
      <img src="../assets/gallery/p3.jpg" alt="фото людей Гаджидадаев"  @click="openImage($event)" class="gallery__item people">
      <img src="../assets/gallery/p4.jpg" alt="фото людей Гаджидадаев"  @click="openImage($event)" class="gallery__item people">
      <img src="../assets/gallery/p20.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p21.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p22.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p19.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p8.jpg" alt="фото людей Гаджидадаев"  @click="openImage($event)" class="gallery__item people">
      <img src="../assets/gallery/p9.jpg" alt="фото людей Гаджидадаев"  @click="openImage($event)" class="gallery__item people">
      <img src="../assets/gallery/p10.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p16.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p17.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p18.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p1.jpg" alt="фото людей Гаджидадаев"  @click="openImage($event)" class="gallery__item people">
      <img src="../assets/gallery/p2.jpg" alt="фото людей Гаджидадаев"  @click="openImage($event)" class="gallery__item people">
      <img src="../assets/gallery/p11.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p12.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p13.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p14.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p15.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p25.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p26.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p23.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
      <img src="../assets/gallery/p24.jpg" alt="фото людей Гаджидадаев" @click="openImage($event)"  class="gallery__item people">
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
