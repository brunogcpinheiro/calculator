import { getDate } from "date-fns";
import feriados from "../feriados";
import obterDomingoDePascoa from "../../../calendariosLunares/gregoriano";

export function obterListaDeFeriados(ano) {
  let domingoDePascoa = obterDomingoDePascoa(ano).dataUTC;

  const listaDeFeriados = feriados(domingoDePascoa);

  return listaDeFeriados;
}
