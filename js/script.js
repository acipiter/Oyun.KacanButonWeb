var text = document.getElementById("text");
var kare = document.getElementById("kare");
var kareW = kare.offsetWidth;
var kareH = kare.offsetHeight;


function ortala() {
    var w = window.innerWidth; //tarayıcının iç genişliğini aldım
    var h = window.innerHeight; //tarayıcının iç yüksekliğini aldım
    var ilkL = kare.style.left = w / 2 - kareW / 2 + "px";
    var ilkT = kare.style.top = h / 2 - kareH / 2 + "px";
    text.innerHTML = "T: " + ilkT + "<br />L: " + ilkL;
}

ortala();

function kac() {
    var w = window.innerWidth; //tarayıcının iç genişliğini aldım
    var h = window.innerHeight; //tarayıcının iç yüksekliğini aldım
    var rndT = Math.floor(Math.random() * (h - kareH)); //Top değeri için rastgele bi sayı ürettim. Viewport yüksekliğinden (h) karenin yüksekliğini çıkarttım ki alta taşmayı engellemek için
    var rndL = Math.floor(Math.random() * (w - kareW));

    kare.style.left = rndL + "px";
    kare.style.top = rndT + "px";
    text.innerHTML = "T: " + rndT + "px<br />L: " + rndL+"px";
}

