import Feriado from "../../feriado";

export default function feriados(domingoDePascoa) {
  let feriados = {};

  let feriadosFixos = {};
  feriadosFixos.newYearsDay = new Feriado(1, 1, "New Year's Day");
  feriadosFixos.SaoPauloAnniversary = new Feriado(
    25,
    1,
    "Sao Paulo's Anniversary"
  );
  feriadosFixos.tiradentesDay = new Feriado(21, 4, "Tiradentes Day");
  feriadosFixos.laborDay = new Feriado(1, 5, "Labor Day");
  feriadosFixos.revolutionDay = new Feriado(9, 7, "Revolution Day");
  feriadosFixos.independenceDay = new Feriado(7, 9, "Independence Day");
  feriadosFixos.nossaSraAparecidaDay = new Feriado(
    12,
    10,
    "Nossa Senhora Aparecida's Day"
  );
  feriadosFixos.allSoulsDay = new Feriado(2, 11, "All Souls Day");
  feriadosFixos.blackConciousnessDay = new Feriado(
    20,
    11,
    "Black Conciousness Day"
  );
  feriadosFixos.christmasEve = new Feriado(24, 12, "Christams Eve");
  feriadosFixos.christmas = new Feriado(25, 12, "Christams Eve");

  function feriadosComIntervaloFixo() {
    let carnivalMonday = new Feriado();
    carnivalMonday.obterFeriadoComIntervaloFixo(
      domingoDePascoa,
      -48,
      "Carnival Monday"
    );

    let carnivalTuesday = new Feriado();
    carnivalTuesday.obterFeriadoComIntervaloFixo(
      domingoDePascoa,
      -47,
      "Carnival Tuesday"
    );

    let passionOfChrist = new Feriado();
    passionOfChrist.obterFeriadoComIntervaloFixo(
      domingoDePascoa,
      -2,
      "Passion of Christ"
    );

    let corpusChristi = new Feriado();
    corpusChristi.obterFeriadoComIntervaloFixo(
      domingoDePascoa,
      60,
      "Corpus Christi"
    );

    console.log(carnivalMonday);

    return {
      carnivalMonday,
      carnivalTuesday,
      passionOfChrist,
      corpusChristi,
    };
  }

  feriados.feriadosFixos = feriadosFixos;
  feriados.feriadosComIntervaloFixo = feriadosComIntervaloFixo();

  return feriados;
}
