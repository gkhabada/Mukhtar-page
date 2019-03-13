<template lang="html">
  <div class="footer_wrapper">
    <div class="footer">
      <h4>© Front-end разработчик GadzhidadaevGR <a href="http://gkhabada.h1n.ru/" target="_blank">Gkhabada</a>  2018 -  {{ nowDate }} </h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed:{
    nowDate: function() {
      let now = new Date();
      return now.getFullYear();
    }
  }
}
</script>

<style lang="scss" scoped>
.footer_wrapper {
    position: relative;
    font-family: 'Roboto', sans-serif;
    height: 90px;
    .footer {
        background-color: rgba(#000, .7);
        bottom: 0;
        position: absolute;
        width: 100%;
        height: 90px;
        h4{
            padding: 0;
            margin: 0;
            text-align: center;
            line-height: 90px;
            font-size: 18px;
            color: #fff;
            font-weight: 300;
            letter-spacing: .05em;
            a {
                font-weight: 500;
                color: #23c869;
                font-weight: 600;
                text-transform: uppercase;
                margin: 0 10px;
            }
        }
    }
}
</style>
