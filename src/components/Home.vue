<template>
  <div id="wrapper">

 <!-- Шапка -->
		<!-- <header class="header" id="header">

			<div class="header__slideshow">
				<button class="slide_arrow slide_prew">&lt;</button>
				<button class="slide_arrow slide_next">&gt;</button>
				<div class="header__slide slide1 showed"></div>
				<div class="header__slide slide2"></div>
				<div class="header__slide slide3"></div>
				<div class="header__slide slide4"></div>
				<div class="header__slide slide5"></div>
			</div>
		</header> -->

    	<header class="header" id="header">
        <div class="menu">
          <ul class="menu__items">
            <router-link :to="{ name: 'home'}" tag="li">
              <a href="#">Главная</a>
            </router-link>
            <router-link :to="{ name: 'wedding'}" tag="li">
              <a href="#">Свадьбы</a>
            </router-link>
            <router-link :to="{ name: 'landscape'}" tag="li">
              <a href="#">Пейзаж</a>
            </router-link>
            <router-link :to="{ name: 'car'}" tag="li">
              <a href="#">Автомобили</a>
            </router-link>
            <router-link :to="{ name: 'people'}" tag="li">
              <a href="#">Фотографии людей</a>
            </router-link>
          </ul>
        </div>
        <div class="header__inner">
          <h1>Mukhtar <br> Gadzhidadaev</h1>
          <h2>Профессиональный фотограф</h2>
          <router-link :to="{ name: 'wedding'}">
            <img src="../assets/photo_link.png" alt="portfolio">
            Портфолио
          </router-link>
        </div>
        <img class="header__img" src="../assets/header.png" alt="Гаджидадаев" title="Гаджидадаев">
        <ul class="header_soc">
          <li><a href="">
            <img src="../assets/instagram.png" target="_blank" alt="Gadzhidadaev">
          </a></li>
          <li><a href="">
            <img src="../assets/youtube.png" target="_blank" alt="Gadzhidadaev">
          </a></li>
          <li><a href="">
            <img src="../assets/telegram.png" target="_blank" alt="Gadzhidadaev">
          </a></li>
          <li><a href="">
            <img src="../assets/vk.png" target="_blank" alt="Gadzhidadaev">
          </a></li>
          <li><a href="">
            <img src="../assets/whatsapp.png" target="_blank" alt="Gadzhidadaev">
          </a></li>
        </ul>
      </header>
 <!-- about-me  -->
		<div class="about-me" id="about-me">
      <div class="about-me__photo"></div>
			<div class="about-me__info">
				<div class="about-me__info__bg"></div>
				<div class="about-me__info__inner">
					<h2>Мухтар Гаджидадаев </h2>
					<!-- <h3>Фотограф с <span> Canon 6D</span></h3> -->
					<p>Заниматься фотографированием я начал в далеком 2012 году с момента появления IPAD 3. Тогда я ходил на различные мероприятия. В основном это были автомобильные сходняки. </p>
          <p>Со временем начал все больше и больше заниматься фотографированием и это стало моим хобби. Первым моим фотоаппаратом стал <span>Canon 60D</span> и тогда я начал поснимать все подряд, но в основном это были пейзажи.</p>
					<p>Мне очень нравиться путешествовать в другие районы, в отдаленные села, снимать жизнь людей и красоты родного Дагестана. </p>
					<p> Я живу и работаю в селении Хунзах. С 2015 года работаю в местном телевидении оператором. Сейчас снимаю на профессиональной камере Canon 6D. В свободное время стараюсь побольше путешествовать, и снимаю на заказ свадебные фотографии.  </p>
					<p>«Что мне нравится в фотографии, так это то, что в ней пойман момент, который ушел навсегда, который невозможно воспроизвести».</p>
				</div>
			</div>
		</div>

 <!-- service  -->
		<div class="service" id="service">
			<div class="service__bg"></div>
			<div class="service__inner">
				<h2>Услуги</h2>
				<div class="service__items">
          <router-link :to="{ name: 'wedding'}">
            <div class="service__item">
							<img src="../assets/wedding.jpg" title="Гаджидадаев свадебный" alt="свадебные">
							<div>
								<h4>Свадебные фотографии</h4>
							</div>
						</div>
          </router-link>
          <router-link :to="{ name: 'landscape'}">
            <div class="service__item">
							<img src="../assets/landscape.jpg" alt="пейзаж" title="Гаджидадаев пейзаж">
							<div>
								<h4>Пейзаж</h4>
							</div>
						</div>
          </router-link>
          <router-link :to="{ name: 'car'}">
            <div class="service__item">
							<img src="../assets/auto.jpg" title="Гаджидадаев Автофото" alt="Автофото">
							<div>
								<h4>Автофото</h4>
							</div>
						</div>
          </router-link>
          <router-link :to="{ name: 'people'}">
            <div class="service__item">
							<img src="../assets/people.jpg" title="Гаджидадаев Люди" alt="Люди">
							<div>
								<h4>Люди (мероприятия)</h4>
							</div>
		       </div>
          </router-link>
				</div>
			</div>
		</div>

 <!-- portfolio  -->
		<div class="portfolio" id="portfolio">
			<h2>Мои проекты</h2>
			<div class="works">
				<div class="portfolio__inner">
					<div class="portfolio__photo">
						<img src="../assets/l1.jpg" alt="Гаджидадаев фото" title="Gadzhidadaev">
						<img src="../assets/l2.jpg" alt="Гаджидадаев фото" title="Gadzhidadaev">
						<img src="../assets/l3.jpg" alt="Гаджидадаев фото" title="Gadzhidadaev">
						<img src="../assets/l4.jpg" alt="Гаджидадаев фото" title="Gadzhidadaev">
						<img src="../assets/l5.jpg" alt="Гаджидадаев фото" title="Gadzhidadaev">
						<img src="../assets/l6.jpg" alt="Гаджидадаев фото" title="Gadzhidadaev">
						<!-- <img src="../assets/l7.jpg" alt="">
						<img src="../assets/l8.jpg" alt="">
						<img src="../assets/l9.jpg" alt=""> -->
					</div>
					<!-- <a href="gallery.html" class="portfolio__show-all">Перейти в галерею</a> -->
				</div>
			</div>
		</div>

 <!-- video  -->
		<div class="video">
			<div class="video__bg"></div>
			<h2>Видео с моего<a href="https://www.youtube.com/channel/UCCFpgr1NPq9aeejnrSR0VxA/videos" target="_blank"> youtube </a>канала</h2>
			<div class="video__items">
				<div class="video__item">
					<iframe src="https://www.youtube.com/embed/hdZPNwBgigc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				</div>
				<div class="video__item">
					<iframe src="https://www.youtube.com/embed/Azb8k1kiXcs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				</div>
				<div class="video__item">
					<iframe src="https://www.youtube.com/embed/yvCVsOnRVYY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
				</div>
			</div>
		</div>

 <!-- contacts  -->
		<div class="contacts" id="contacts">
			<!-- <div class="contacts__soc">
				<div class="contacts__soc__item soc__inst"><a href="https://www.instagram.com/mukhtar_gadzhidadaev/"  target="_blank"><i class="fa fa-instagram"></i>instagram</a></div>
				<div class="contacts__soc__item soc__fb"><a href="https://www.facebook.com/profile.php?id=100003203017081"  target="_blank"><i class="fa fa-facebook"></i>facebook</a></div>
				<div class="contacts__soc__item soc__vk"><a href="https://vk.com/gadzhidadaev003"  target="_blank"><i class="fa fa-vk"></i>vkontakte</a></div>
			</div> -->
			<div class="contacts__map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6991.497842226445!2d46.70722579441256!3d42.54334245996748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1517558780080" frameborder="0" style="border:0" allowfullscreen></iframe>
			</div>
		</div>
  </div>
</template>

<script>
// $(function() {
//     $(".nav").hide(0);
// });
// $(window).on("scroll", function() {
//   if($(this).scrollTop() < 400) {
//     $(".nav").slideUp(100);
//   } else {
//     $(".nav").slideDown(100);
//   }
// })
let token = '5501043384.1677ed0.6f7fd36a2ebc4e2f840a939d729421a8',
    userid = 228142647,
    kolichestvo = 9;

$.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent/?' + token,
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: kolichestvo}, // передаем параметры, которые мы указывали выше
	success: function(result){
 		console.log(result);
		for( x in result.data ){
			$('ul').append('<li><img src="'+result.data[x].images.low_resolution.url+'"></li>'); // result.data[x].images.low_resolution.url - это URL картинки среднего разрешения, 306х306
			// result.data[x].images.thumbnail.url - URL картинки 150х150
			// result.data[x].images.standard_resolution.url - URL картинки 612х612
			// result.data[x].link - URL страницы данного поста в Инстаграм
		}
	},
	error: function(result){
		console.log(result); // пишем в консоль об ошибках
	}
});
export default {
}
</script>

<style lang="css" scoped>
</style>
