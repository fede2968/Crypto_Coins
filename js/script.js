
function news(){
  const data = null;
  var v;
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
  	if (this.readyState === this.DONE) {
  		v = JSON.parse(this.responseText);
      for (var i = 0; i < v.length; i++) {
        document.getElementById('notizie').innerHTML += '<h1> '+ v[i].title +'</h1>'+'<h4 align="center">'+ v[i].pubDate+'      Fonte: '+v[i].source+'</h4>'+'<div class="button_cont" align="center"><a class="example_a" href="'+v[i].link+'" target="_blank" rel="nofollow noopener">Go to the article</a></div>';

        }

  	}
  });

  xhr.open("GET", "https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news");
  xhr.setRequestHeader("x-rapidapi-key", "f993945b21msh74797a56886f133p19cbcbjsn59f1ad86c5f1");
  xhr.setRequestHeader("x-rapidapi-host", "yahoo-finance15.p.rapidapi.com");

  xhr.send(data);
}

function prendi(){
  var paese = document.getElementById('input').value;
  console.log(paese);
  news(paese);
  location.reload();
}

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 45.476044, lng: 9.231877 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}



function darkMode(){
  document.getElementsByTagName('body')[0].className = 'parallax-dark';
  document.getElementById('switch').className = 'on';
  localStorage.setItem('darkmode', 'y')}
function lightMode(){
  document.getElementsByTagName('body')[0].className = 'parallax';
  document.getElementById('switch').className = 'off';
  localStorage.setItem('darkmode', 'n')}

  var darkmode = localStorage.getItem('darkmode');
  if(darkmode == 'y'){
    darkMode()
  }else{lightMode()}
function fswitch(el){
  if (el.className == 'on'){
  lightMode()
  }else{darkMode()}
  }
