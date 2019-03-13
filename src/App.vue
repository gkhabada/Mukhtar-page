<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
$( document ).ready(function() {
  var w = $('.portfolio__photo img').css('width');
  var h = parseInt(w) / 100 *67;
  $('.portfolio__photo img').css('height', h + 'px');
  $(window).resize(function(){
    var w = $('.portfolio__photo img').css('width');
    var h = parseInt(w) / 100 *67;
    $('.portfolio__photo img').css('height', h + 'px');
  });

  $(window).on("scroll resize", function() {
      var o = $(window).scrollTop() / ($(document).height() - $(window).height());
      $(".progress-bar").css({
          "width": (100 * o | 0) + "%"
      });
      $('progress')[0].value = o;
  })
});
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Header,
    Footer
  }
}

</script>

<!--
<style lang="scss">
  @import './sass/screen.scss';
</style>
 -->


<style lang="scss">

html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed,figure, figcaption, footer, header, hgroup,menu, nav, output, ruby, section, summary,time, mark, audio, video {margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align:baseline;}:focus {outline: 0;}
article, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}body {line-height: 1;}ol, ul {list-style: none;}blockquote, q {quotes: none;}blockquote:before, blockquote:after,q:before, q:after {content: '';content: none;}table {border-collapse: collapse;border-spacing: 0;}
input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration {-webkit-appearance: none;-moz-appearance: none;}input[type=search] {-webkit-appearance: none;-moz-appearance: none;-webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;}textarea{overflow: auto;vertical-align: top;resize: vertical;}
audio,canvas,video {display: inline-block;*display: inline;*zoom: 1;max-width: 100%;}audio:not([controls]) {display: none;height: 0;}[hidden] {display: none;}html {font-size: 100%;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;}a:focus {outline: thin dotted;}
a:active,a:hover {outline: 0;}img {border: 0;-ms-interpolation-mode: bicubic;}figure {margin: 0;}form {margin: 0;}fieldset {border: 1px solid #c0c0c0;margin: 0 2px;padding: 0.35em 0.625em 0.75em;}legend{border:0;padding:0;white-space:normal;*margin-left:-7px;}
button,input,select,textarea {font-size: 100%;margin: 0;vertical-align: baseline;*vertical-align: middle;}button,input {line-height: normal;}button,select {text-transform: none;}button,html input[type="button"],input[type="reset"],input[type="submit"] {-webkit-appearance:button;cursor: pointer;*overflow:visible;}
button[disabled],html input[disabled] {cursor: default;}input[type="checkbox"],input[type="radio"] {box-sizing: border-box;padding: 0;*height: 13px;*width: 13px;}input[type="search"] {-webkit-appearance: textfield;-moz-box-sizing: content-box;-webkit-box-sizing: content-box;box-sizing: content-box;}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration {-webkit-appearance: none;}button::-moz-focus-inner,input::-moz-focus-inner {border: 0;padding: 0;}textarea {overflow: auto;vertical-align: top;}table {border-collapse: collapse;border-spacing: 0;}html,button,input,select,textarea {color: #222;}::-moz-selection {background: #b3d4fc;text-shadow: none;}::selection{background: #b3d4fc;text-shadow:none;}img{vertical-align: middle;}
fieldset {border: 0; margin: 0;padding: 0;}textarea {resize: vertical;}.chromeframe {margin: 0.2em 0;background: #ccc;color: #000;padding: 0.2em 0;}

.modal img {
  top: auto;
  left: auto;
  height: 100%;
  position: relative;
}

 // general

  $medium: 'mullermedium';
  $extrabold: 'mullerextrabold';

  @mixin h2 {
    padding: 0;
    margin: 0;
    font-size: 52px;
    text-align: center;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  @keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rot {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  html, body {
      font-family: 'Roboto', sans-serif;
  }
  * {
      box-sizing: border-box;
      text-decoration: none;
  }
  textarea:focus, input:focus{
  outline: none;
  }
  #wrapper {
      min-width: 320px;
  }
  .section {
      width: 1020px;
      margin-left: auto;
      margin-right: auto;
  }

  .hidden{	opacity:0;	}
  .visible{	opacity:1;	}


   // header

  .header {
      position: relative;
      z-index: 10;
      background-color: #fff;
      width: 100%;
      height: 750px;

      .menu__items {
        display: flex;
        width: 700px;
        justify-content: space-around;
        margin: 0 auto;
        padding-top: 50px;
        a {
          font-size: 18px;
          color: #333;
          font-weight: 300;
          transition: 0.3s;
          &:hover {
            color: #000;
            text-shadow: 1px 1px 5px rgba(0,0,0, 0.3);
            transition: 0.3s;
          }
        }
      }

      &__inner {
        position: relative;
        margin: 0 auto;
        top: 180px;
        width: 70%;
        h1 {
          font-size: 72px;
          width: 100%;
          font-family: 'Archivo Black', sans-serif;
          text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
        }
        h2 {
          margin: 30px 0;
          font-size: 36px;
          font-weight: 300;
          color: #102030;
        }
        a {
          width: 180px;
          border-radius: 3px;
          height: 50px;
          border: 2px solid #102030;
          position: relative;
          display: block;
          color: #010101;
          padding-left: 65px;
          line-height: 50px;
          font-size: 18px;
          transition: 1s;
          font-weight: 600;
          img {
            width: 30px;
            height: 30px;
            display: inline-block;
            position: absolute;
            left: 10px;
            top: 10px;
            animation: 3s linear 0s normal none infinite running rot;
            -webkit-animation: 3s linear 0s normal none infinite running rot;
          }
          &:hover {
            color: #555;
            transform: rotateX(180deg);
            transition: 1s;
          }
        }
      }
      &__img{
        position: absolute;
        right: 0;
        bottom: -2px;
      }
      &_soc {
        z-index: 2;
        background-color: #fff;
        width: 50%;
        height: 90px;
        border-radius: 90px;
        box-shadow: 0 0 20px rgba(black, 0.3);
        position: absolute;
        transition: 0.3s;
        left: 25%;
        bottom: -25px;
        display: flex;
        justify-content: space-around;
        li {
          padding-top: 20px;
          position: relative;
            img {
              position: relative;
              width: 50px;
              height: 50px;
              filter: grayscale(1);
              transition: 0.2s;
            }
          }
          &:hover {
            box-shadow: 0 0 20px rgba(black, 0.5  );
            transition: 0.3s;
            li {
              img {
                filter: grayscale(0);
                transition: 0.2s;
              }
            }
          }
        }
  }



  /*****************************************************************/
  .about-me {
      height: 640px;
      display: flex;
      overflow: hidden;
      background-color: #291807;
      justify-content: space-between;
      position: relative;

      .about-me__info {
          display: inline-block;
          padding-top: 70px;
          height: 640px;
          position: relative;
          min-width: 49.999%;
          background-color: #291807;
          color: #fff;

          .about-me__info__bg {
              background-image: url(./assets/fon1.png);
              background-repeat: no-repeat;
              background-size: cover;
              z-index: 1;
              opacity: .13;
              position: absolute;
              width: 100%;
              height: 100%;
          }
          .about-me__info__inner {
              width: 650px;
              padding: 15px;
              position: relative;
              z-index: 3;
              float: left;
              h2 {
                  font-size: 36px;
                  font-weight: 700;
                  margin-bottom: 25px;
              }

              h3 {
                  font-size: 20px;
                  line-height: 1.3;
                  font-weight: 500;
                  margin-bottom: 15px;
              }

              p {
                  font-size: 18px;
                  line-height: 1.5;
                  font-weight: 400;
                  text-align: justify;
              }
          }

      }

      .about-me__photo {
          height: 100%;
          min-width: 49.999%;
          background-image: url(./assets/about.jpg);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
      }

  }




  /****************************************************/
  .service {
      background-color: lightskyblue;
      position: relative;

      .service__inner {
          position: relative;
          z-index: 3;
          h2 {
              text-align: center;
              @include h2;
              color: #fefefe;
              margin-bottom: 35px;
              padding-top: 35px;
          }

          .service__items {
              display: flex;
              justify-content: center;

              .service__item {
                  margin: 0 20px 50px;
                  height: 380px;
                  position: relative;
                  -webkit-box-shadow: 0 3px 17px 1px rgba(#000, .25);
                  -moz-box-shadow: 0 3px 17px 1px rgba(#000, .25);
                  box-shadow: 0 3px 17px 1px rgba(#000, .25);
                  padding-bottom: 70px;
                  box-sizing: border-box;
                  overflow: hidden;
                  width: 270px;
                  div {
                      width: 100%;
                      height: 70px;
                      background-color: #fff;
                      box-sizing: border-box;
                      padding: 20px 5px 10px;
                      transition: 0.3s;
                      position: absolute;
                      text-align: center;
                      bottom: 0;
                      h4 {
                          font-weight: 500;
                          font-size: 18px;
                          color: #0a9bf5;

                      }
                  }
                  img {
                     height: 100%;
                     width: 100%;
                     position: relative;
                  }
                  &:hover div{
                      transition: 0.3s;
                      -webkit-box-shadow: inset 0px -30px 70px -36px rgba(0,0,0,0.53);
                      -moz-box-shadow: inset 0px -30px 70px -36px rgba(0,0,0,0.53);
                      box-shadow: inset 0px -30px 70px -36px rgba(0,0,0,0.53);
                  }
              }
          }
      }

      &__bg {
          background-image: url(./assets/fon2.png);
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          z-index: 1;
          opacity: .08;
          position: absolute;
          width: 100%;
          height: 100%;
      }
  }




  /****************************   portfolio   *********************************/
  .portfolio {
      clear: both;
      width: 100%;
      overflow: hidden;
      padding-top: 25px;
      padding-bottom: 55px;
      background-color: #00e6b8;
      position: relative;
      h2 {
          @include h2;
          color: #fefefe;
          display: block;
          margin-top: 15px;
          margin-bottom: 40px;
      }
      &__items {
          display: -webkit-flex;
          display: flex;
          justify-content: space-around;
          margin-top: 50px;
          margin-bottom: 35px;

          .portfolio__link {
              font-size: 17px;
              padding: 17px 30px;
              font-weight: 300;
              border: 2px solid #fefefe;
              transition: 0.3s;

              &:hover {
                  transition: 0.3s;
                  background-color: #fefefe;

                  a {
                      color: #333;
                      transition: 0.3s;
                  }
              }
              a {
                  color: #fefefe;
                  &:hover {
                      transition: 0.3s;
                  }
              }
          }
      }

      .portfolio__show-all {
          font-size: 17px;
          padding: 17px 30px;
          font-weight: 400;
          border: 2px solid #fefefe;
          color: #fefefe;
          display: block;
          width:  230px;
          text-align: center;
          margin: 55px auto 0;
          transition: 0.3s;
          &:hover {
              transition: 0.3s;
              background-color: #fefefe;
              color: #00e6b8;
              cursor: pointer;
              border-radius: 100px;
              font-weight: 500;
          }
      }

      .portfolio__inner {
          position: relative;

          .portfolio__photo {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
              width: 100%;

              img {
                  width: 33.33%;
                  height: 400px;
                  transition: 0.3s;
                  filter: sepia(55%);

                  &:hover {
                      transform: scale(1.15);
                      z-index: 4;
                      transition: 0.3s;
                      filter: sepia(5%);
                  }
              }
          }
      }



  }



  /************************************************************/
  .video {
      position: relative;
      box-sizing: border-box;
      background-color: #a29bfe;
      padding: 30px;

      &__bg {
          background-image: url(./assets/fon2.png);
          background-repeat: no-repeat;
          background-size: cover;
          z-index: 1;
          opacity: .09;
          position: absolute;
          background-position: center;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
      }


      h2 {
          @include h2;
          color: #fefefe;
          display: block;
          margin-top: 15px;
          z-index: 2;
          position: relative;
          margin-bottom: 40px;
          a {
              transition: 0.2s;
              color: #c4302b;
              &:hover {
                  transition: 0.2s;
                  text-shadow: 1px 2px 7px rgba(#c4302b, 0.49);
              }
          }
      }

      &__items {
          position: relative;
          display: flex;
          width: 100%;
          justify-content: space-around;
          z-index: 2;


          .video__item {
              margin: 10px;
              height: 0;
              padding-bottom: 16.9%;
              position: relative;
              width: 30%;

              iframe {
                  width: 100%;
                  height: 100%;
                  left: 0;
                  top: 0;
                  position: absolute;
              }
          }
      }
  }



  /************************************************************/
  .contacts {
      position: relative;
      &__soc{
          position: relative;
          display: flex;
          justify-content: space-around;
          .contacts__soc__item {
              width: 33.33%;
              box-sizing: border-box;
              padding: 45px 0;

              a {
                  text-decoration: none;
                  font-weight: 500;
                  text-transform: uppercase;
                  text-align: center;
                  box-sizing: border-box;
                  display: block;
                  width: 45%;
                  font-size: 20px;
                  margin: 0 auto;
                  padding: 4% 0;
                  color: #fff;
                  transition: 0.4s;
                  border: 1px solid #fff;
                  i {
                      margin-right: 12px;
                  }
                  &:hover {
                      transition: 0.4s;
                  }
              }
          }
           .soc__inst {
              background-color: #ec9c5d;
              a:hover {
                  background-color: #fff;
                  color: #ec9c5d;
              }
          }
          .soc__fb {
              background-color: #ed8f5c;
              a:hover {
                  background-color: #fff;
                  color: #ed8f5c;
              }
          }
          .soc__vk {
              background-color: #ec7b5d;
              a:hover {
                  background-color: #fff;
                  color: #ec7b5d;
              }
          }
      }
      .contacts__map {
          height: 500px;
          width: 100%;
          position: relative;

          iframe {
              width: 100%;
              height: 100%;
          }

          .footer {
              background-color: rgba(#000, .7);
              bottom: 0;
              position: absolute;
              width: 100%;
              height: 90px;
              h4{
                  text-align: center;
                  line-height: 90px;
                  font-size: 20px;
                  color: #fff;
                  font-weight: 300;
                  a {
                      font-weight: 500;
                      color: #23c869;
                      font-family: $medium;
                      text-transform: uppercase;
                  }
              }
          }
      }
  }

  .gallery {
      position: relative;
      background: linear-gradient(to top left, powderblue, #66cdaa);
      padding: 100px 20px 50px;
      box-sizing: border-box;

      .gallery__text {
          font-size: 25px;
          padding: 0 5%;
          box-sizing: border-box;
          color: #e55039;
          font-weight: 500;
          text-align: center;
          margin: 20px auto;
      }

      .gallery__photo {
          overflow: hidden;
          padding: 10px 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          .gallery__item {
              display: block;
              width: 320px;
              height: 200px;
              object-fit: cover;
              margin: 17px 1.4% 15px;
              box-shadow: 0 2px 9px 1px rgba(#000, .5);
              position: relative;
              transition: 0.7s;
              &:hover {
                  cursor: pointer;
                  transform: scale(1.2);
              }
          }
      }
      ul {
          display: flex;
          justify-content: center;
          .gallery__link {
              padding: 17px 30px;
              border: 2px solid #fefefe;
              display: block;
              width:  245px;
              text-align: center;
              margin: 35px 2%;
              transition: 0.5s;
              a {
                  color: #fefefe;
                  transition: 0.5s;
                  font-size: 18px;
                  font-weight: 400;
              }
              &:hover {
                  transition: 0.5s;
                  cursor: pointer;
                  background-color: #fff;
                  border-radius: 100px;
                  a {
                      transition: 0.5s;
                      font-weight: 500;
                      color: #66cdaa;
                  }
              }
          }
          .galley_active {
              background-color: #fefefe;
              border-radius: 100px;
              transition: 0.5s;
              a {
                  color: #00cec9;
                  font-weight: 500;
              }
          }
      }


      .show_more{
          font-size: 17px;
          padding: 17px 30px;
          font-weight: 400;
          border: 2px solid #fefefe;
          color: #fefefe;
          display: block;
          width:  230px;
          text-align: center;
          margin: 55px auto 0;
          transition: 0.3s;
          &:hover {
              transition: 0.3s;
              cursor: pointer;
              background-color: #fefefe;
              color: #66cdaa;
              border-radius: 100px;
              font-weight: 500;
          }
      }
  }

  .modal {
      display: none;
      width: 90%;
      height: 90%;
      overflow: hidden;
      position: fixed;
      left: 5%;
      top: 5%;
      z-index: 101;
      align-items: center;
      justify-content: center;
  }
  .overlay {
      display: none;
      width: 100%;
      height: 100%;
      overflow: hideen;
      position: fixed;
      z-index: 100;
      background-color: rgba(0, 0, 0, 0.7);
  }
  .open {
      display: flex;
  }

  @import './sass/media.scss';

</style>
