//Några konstanter och ett objekt att utgå från
const eu = "europeiskt";
const jpn = "japanskt";
const fantasy = "fantasi";

function Svärd(typ, bild) {
    this.typ = typ;
    this.bild = bild;
}

//Använden den här listan på svärd för godkänt, för VG ska du hämta den större listan via fetch
let allaSvärd = [
    new Svärd(eu, "img/european/1.jpg"),
    new Svärd(eu, "img/european/2.jpg"),
    new Svärd(jpn, "img/japanese/1.jpg"),
    new Svärd(jpn, "img/japanese/2.jpg"),
    new Svärd(fantasy, "img/fantasy/1.jpg"),
    new Svärd(fantasy, "img/fantasy/2.jpg")
]

document.addEventListener('DOMContentLoaded', function() {

  document.getElementById("footer").textContent = "Daniella Bwende";

  const meny = document.querySelector('#meny');
  const svar = document.querySelector('#svar');
  const svarH2 = svar.querySelector('h2');
  const wrapper = document.querySelector('.svärdwrapper');
  const svardBild = wrapper.querySelector('.svärdbild');
  const knapprad = wrapper.querySelector('.knapprad');
  const resultat = document.querySelector('#resultat');
  const senaste = resultat.querySelector('#senaste');
  const highscore = resultat.querySelector('#highscore');

  let svardTyp = '';
  let antalRatt = 0;
  let flestRatt = 0;

  const slumpaSvard = () => {
    const slump = Math.floor(Math.random() * allaSvärd.length);
    const slumpatSvard = allaSvärd[slump];
    svardBild.src = slumpatSvard.bild;
    svardTyp = slumpatSvard.typ;
  }

  meny.querySelector('button').addEventListener('click', function() {
    meny.classList.add('osynlig');

    svar.classList.remove('osynlig');
    antalRatt = 0;
    svarH2.textContent = 'Antal rätt i rad: 0';

    slumpaSvard();
  });

  wrapper.addEventListener('mouseenter', function() {
    knapprad.classList.remove('osynlig'); 
  });
  
  wrapper.addEventListener('mouseleave', function() {
    knapprad.classList.add('osynlig'); 

  });

  const knappradLogik = (gissadTyp) => {
    if (svardTyp === gissadTyp) {
      antalRatt++;
      svarH2.textContent = 'Antal rätt i rad: ' + antalRatt;
      slumpaSvard();

      return;
    }

    svar.classList.add('osynlig');
    meny.classList.remove('osynlig');
    senaste.textContent = 'Du lyckades gissa rätt på ' + antalRatt + ' svärd i rad!!!';

    if (antalRatt > flestRatt)
    {
      flestRatt = antalRatt;
      highscore.textContent = 'Din highscore är: ' + flestRatt;
    }
  };

  knapprad.querySelector('.' + eu).addEventListener('click', function() {
    knappradLogik(eu);
  });

  knapprad.querySelector('.' + jpn).addEventListener('click', function() {
    knappradLogik(jpn);
  });

  knapprad.querySelector('.' + fantasy).addEventListener('click', function() {
    knappradLogik(fantasy);
  });
  
});