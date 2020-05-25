import { feriadoComDataFixa, feriadoComIntervaloFixo } from "../../feriado";
import obterDomingoDePascoa from "../../calendariosLunares/gregoriano";

export default function feriados(domingoDePascoa) {
  let feriados = {};

  let feriadosDatasFixas = {
    newYearsDay: feriadoComDataFixa(1, 1, "New Year's Day"),
    saoPauloAnniversary: feriadoComDataFixa(25, 1, "Sao Paulo's Anniversary"),
    tiradentesDay: feriadoComDataFixa(21, 4, "Tiradentes Day"),
    laborDay: feriadoComDataFixa(1, 5, "Labor Day"),
    revolutionDay: feriadoComDataFixa(9, 7, "Revolution Day"),
    independenceDay: feriadoComDataFixa(7, 9, "Independence Day"),
    nossaSraAparecidaDay: feriadoComDataFixa(
      12,
      10,
      "Nossa Senhora Aparecida's Day"
    ),
    allSoulsDay: feriadoComDataFixa(2, 11, "All Souls Day"),
    blackConciousnessDay: feriadoComDataFixa(20, 11, "Black Conciousness Day"),
    christmasEve: feriadoComDataFixa(24, 12, "Christmas Eve"),
    christmas: feriadoComDataFixa(25, 12, "Christmas"),
  };

  let feriadosIntervaloFixo = {
    carnivalMonday: feriadoComIntervaloFixo(
      domingoDePascoa,
      -49,
      "Carnival Monday"
    ),
    carnivalTuesday: feriadoComIntervaloFixo(
      domingoDePascoa,
      -48,
      "Carnival Tuesday"
    ),
    passionOfChrist: feriadoComIntervaloFixo(
      domingoDePascoa,
      -2,
      "Passion of Christ"
    ),
    corpusChristi: feriadoComIntervaloFixo(
      domingoDePascoa,
      60,
      "Corpus Christi"
    ),
  };

  feriados.feriadosDatasFixas = feriadosDatasFixas;
  feriados.feriadosIntervaloFixo = feriadosIntervaloFixo;

  return feriados;
}
