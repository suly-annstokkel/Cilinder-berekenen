window.onload = function () {
  const cilinders = [
    { vorm: "cilinder", diameter: 5, hoogte: 5 },
    { vorm: "cilinder", diameter: 3, hoogte: 1 },
    { vorm: "cilinder", diameter: 2, hoogte: 1 },
    { vorm: "cilinder", diameter: 9, hoogte: 12 },
  ];

  const balken = [
    { vorm: "balk", lengte: 3, breedte: 4, hoogte: 50 },
    { vorm: "balk", lengte: 5, breedte: 13, hoogte: 21 },
    { vorm: "balk", lengte: 1, breedte: 6, hoogte: 11 },
    { vorm: "balk", lengte: 2, breedte: 1, hoogte: 2 },
    { vorm: "balk", lengte: 7, breedte: 6, hoogte: 5 },
  ];

  const pi = 3.14;

  //Opdracht 1
  var allevormen = [...cilinders, ...balken];
  console.log(allevormen);

  //Opdracht 2, 3 & 4
  berekenInhoudcilinder = ({ diameter, hoogte }) => diameter * hoogte * pi;
  berekenInhoudbalk = ({ lengte, breedte, hoogte }) =>
    lengte * breedte * hoogte;

  for (let i in cilinders) {
    var inhoudcil = berekenInhoudcilinder(cilinders[i]);
    console.log(inhoudcil);
  }

  for (let j in balken) {
    var inhoudbalk = berekenInhoudbalk(balken[j]);
    console.log(inhoudbalk);
  }

  //Klein of groot
  berekenInhoudcilinder = ({ diameter, hoogte }) => diameter * hoogte * pi;
  berekenInhoudbalk = ({ lengte, breedte, hoogte }) =>
    lengte * breedte * hoogte;

  for (let i in cilinders) {
    var inhoudcil = berekenInhoudcilinder(cilinders[i]);
    if (inhoudcil > 10) {
      console.log("grote cilinder", inhoudcil);
    } else {
      console.log("kleine cilinder", inhoudcil);
    }
  }

  for (let j in balken) {
    var inhoudbalk = berekenInhoudbalk(balken[j]);
    if (inhoudbalk > 100) {
      console.log("grote balk", inhoudbalk);
    } else {
      console.log("kleine balk", inhoudbalk);
    }
  }

  //Sorteer namen alfabetische volgorde
  var stringArray = ["Blue", "Humpback", "Beluga"];
  console.log("stringArray:", stringArray.join());
  console.log("Sorted:", stringArray.sort());

  //Sorteer nummers (klein naar groot)
  var num = [70, 30, 20, 65];
  num.sort();
  console.log(num);

  //Sorteer nummers (groot naar klein)
  num.reverse();
  console.log(num);

  // Maximaal getal
  console.log(Math.max(...num));

  //Minimum getal
  console.log(Math.min(...num));

  //Bereken inhoud
  var afm = [10, 20, 3];
  function berekenInhoud(l, b, h) {
    return l * b * h;
  }
  var inhoud = berekenInhoud(...afm);
  console.log(inhoud);
};
