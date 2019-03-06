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

<style lang="scss" scoped>
  $medium: 'mullermedium';
  $extrabold: 'mullerextrabold';
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
            background-color: rgba(#000, 0.55);
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
            line-height: 50px;
            width: 70%;
            z-index: 3;
            position: relative;
            float: right;
            .menu__items {
                float: right;
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
                    -webkit-transform: scale(1.1);
                    transform: scale(1.1);
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

</style>
