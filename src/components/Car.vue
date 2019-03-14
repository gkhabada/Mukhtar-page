<template lang="html">
  <div id="wrapper" class="wrapper__gallery" @click="openImg = false">

  <div class="gallery">

    <p class="gallery__text">Обращаем ваше внимание на то, что качество изображений уменьшено для увеличения скорости подгрузки картинок. </p>
    <div class="gallery__photo">
      <img src="../assets/gallery/a6.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a7.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a8.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a9.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a11.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a10.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a15.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a16.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a22.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a5.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a13.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a14.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a12.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a19.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a20.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a17.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a18.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a21.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a1.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a2.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a3.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a4.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
      <img src="../assets/gallery/a23.jpg" alt="автофото Гаджидадаев" class="gallery__item auto" @click="openImage($event)">
    </div>
  </div>




  </div><!--#wrapper-->
</template>

<script>
export default {
  data() {
    return {
    }
  },
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

<style lang="scss" >
  // .gallery .gallery__photo .gallery__item {
  //   width: 23%;
  //   height: auto;
  // }
</style>
