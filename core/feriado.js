import { addDays, getDate, getMonth } from "date-fns";

export function feriadoComDataFixa(dia, mes, descricao) {
  let feriado = {};

  feriado.dia = dia;
  feriado.mes = mes;
  feriado.descricao = descricao;

  return feriado;
}

export function feriadoComIntervaloFixo(domingoDePascoa, intervalo, descricao) {
  let diaAdicionado = getDate(addDays(domingoDePascoa, intervalo));
  let mesAdicionado = getMonth(addDays(domingoDePascoa, intervalo));

  return {
    diaAdicionado,
    mesAdicionado,
    descricao,
  };
}

// export default function feriado(dia, mes, descricao) {
//   this.dia = dia;
//   this.mes = mes;
//   this.descricao = descricao;

//   this.obterFeriadoComIntervaloFixo = function(domingoDePascoa, intervalo) {
//     let diaAdicionado = getDate(addDays(domingoDePascoa, intervalo));
//     let mesAdicionado = getMonth(addDays(domingoDePascoa, intervalo));

//     let intervaloFixo = new Feriado(
//       diaAdicionado,
//       mesAdicionado,
//       this.descricao
//     );
//     return intervaloFixo;
//   };
// }
