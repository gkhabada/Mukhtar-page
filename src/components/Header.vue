<template lang="html">
  <nav class="nav">
    <div class="nav__inner">
      <router-link :to="{ name: 'home'}">
        <p class="logo" >Gadzhidadaev <br> <span>Mukhtar</span> </p>
      </router-link>

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
      <img src="http://romeo-studio.ru/img/menu-icon.png" alt="" @click="mobMenu()" class="header_burger">
    </div>
    <div class="nav__bg"></div>
    <progress value="0">
      <div class="progress-container">
        <span class="progress-bar"></span>
      </div>
    </progress>
    <div class="modal" @click="close()"></div>
    <div class="overlay" @click="close()"></div>
  </nav>
</template>

<script>
 $(window).resize(function() {
    if ($(window).width() >= '900'){
     $('.menu__link').on('click', function(){
       $('.menu').hide(100)
     })
    }
  });
export default {
  methods: {
    close() {
      let modal = $('.modal');
      let overlay = $('.overlay');
      $(modal).children().remove();
      overlay.removeClass('open');
      modal.removeClass('open');
    },
    mobMenu() {
      $('.menu').slideToggle(200);
    }
  }
}
</script>

<style lang="scss" scoped>

  $medium: 'mullermedium';
  $extrabold: 'mullerextrabold';
    .header_burger {
      display: none;
      z-index: 2;
    }
    .nav {
        height: 70px;
        padding-top: 0px;
        position: fixed;
        top: 0;
        z-index: 9;
        width: 100%;

        &__bg {
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: rgba(#000, 0.65);
            z-index: 1;
            top: 0;
            left: 0;
        }

        &__inner {
            width: 1080px;
            margin: 0 auto;
        }

        .logo {
            float: left;
            z-index: 3;
            width: 20%;
            position: relative;
            font-size: 27px;
            margin-top: 2px;
            font-family: $medium;
            color: #fff;
            line-height: 27px;
            display: inline-block;
            vertical-align: middle;
            span {
                font-size: 44px;
                line-height: 35px;
                font-family: $extrabold;
            }
        }
        .menu {
            margin-top: 13px;
            display: block;
            line-height: 50px;
            width: 70%;
            z-index: 3;
            position: relative;
            float: right;
            .menu__items {
              position: relative;
            }
            &__item {
                display: inline-block;
                vertical-align: middle;
                font-size: 17px;
                position: relative;
                margin-right: 30px;
                transition: 0.2s;
                border-bottom: 3px solid transparent;
                &:hover {
                    top: 1px;
                    transition: 0.2s;
                    border-bottom: 3px solid #fff;
                    .menu__link, .menu__link1  {
                        font-weight: 500;
                    }
                }
                &:last-child {
                    margin-right: 0;
                }
            }
            .menu__item__gallery:hover {
                border-color: #00e6b8;
            }
            &__link, .menu__link1 {
                text-decoration: none;
                padding: 4px 0;
                font-weight: 400;
                color: #fff;
                text-transform: uppercase;
            }
            .menu__gallery {
                color: #00e6b8;
            }
        }
    }

    progress{
        position:fixed;
        left:0;
        top:65px;
        width:100%;
        z-index: 10;
        height:5px;
        -webkit-appearance:none;
        -moz-appearance:none;
        appearance:none;
        border:none;
        background:transparent;
        color:#ec9c5d;

    }
    progress::-webkit-progress-bar{
        background:transparent;
        border-radius:5px;
    }
    progress::-webkit-progress-value{
        background:#ec9c5d;
        border-radius:5px;
    }
    progress::-moz-progress-bar{
        background:#ec9c5d;
        border-radius:5px;
    }
    .progress-container {
        width:100%;
        background:transparent;
        position:fixed;
        top:0;
        left:0;
        height:5px;
        display:block;
    }
    .progress-bar{
        background:#ec9c5d;
        width:0%;
        display:block;
        height:inherit;
    }
  @media (max-width: 1200px) {
    .nav .menu {
        float: left;
        width: 63%;
    }
  }

    @media (max-width: 900px) {

      .header_burger {
        display: block;
        position: absolute;
        right: 10px;
        top: 10px;
        width: 50px;
        height: 50px;
      }
      .nav {
        z-index: 11;
        .logo {
          left: 15px;
        }
        .menu {
          width: 100%;
          display: none;
          padding-top: 20px;
          padding-bottom: 10px;
          margin-top: 0;
          background-color: rgba(#000, 0.85);
          .menu__items {
            width: 100%;
            li {
              width: 100%;
              box-sizing: border-box;
              padding-left: 25px;
            }
          }
        }
      }

    }

</style>
