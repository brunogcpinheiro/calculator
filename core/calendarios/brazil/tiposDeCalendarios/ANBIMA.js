import { getDate } from "date-fns";
import feriados from "../feriados";
import { obterDomingoDePascoa } from "../../../calendariosLunares/gregoriano";

export function obterListaDeFeriados(ano) {
  const domingoDePascoa = obterDomingoDePascoa(ano);

  let listaDeFeriados = [];

  const lista = feriados(domingoDePascoa);

  console.log(lista);

  listaDeFeriados.push(lista);

  return listaDeFeriados;
}
