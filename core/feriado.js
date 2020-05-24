import { addDays, getDay, getMonth } from "date-fns";
import { obterDomingoDePascoa } from "./calendariosLunares/gregoriano";

export default class Feriado {
  constructor(dia, mes, descricao) {
    this.dia = dia;
    this.mes = mes;
    this.descricao = descricao;
  }

  obterFeriadoComIntervaloFixo(domingoDePascoa, intervalo, descricao) {
    let diaAdicionado = getDay(addDays(domingoDePascoa, intervalo));
    let mesAdicionado = getMonth(addDays(domingoDePascoa, intervalo));

    return new Feriado(diaAdicionado, mesAdicionado, descricao);
  }
}
