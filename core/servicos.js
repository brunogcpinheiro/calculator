import { obterListaDeFeriados } from "./calendarios/brazil/tiposDeCalendarios/ANBIMA";

export function verify() {
  const listaDeFeriados = obterListaDeFeriados(2020);
  return listaDeFeriados;
}
