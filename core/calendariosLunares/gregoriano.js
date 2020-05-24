export function obterDomingoDePascoa(ano) {
  let a = ano % 19;
  let b = Math.floor(parseFloat(ano) / 100);
  let c = ano % 100;
  let d = Math.floor(b / 4);
  let e = b % 4;
  let f = Math.floor((b + 8) / 25);
  let g = Math.floor((b - f + 1) / 3);
  let h = (19 * a + b - d - g + 15) % 30;
  let i = Math.floor(parseFloat(c) / 4);
  let k = c % 4;
  let l = (32 + 2 * e + 2 * i - h - k) % 7;
  let m = Math.floor((a + 11 * h + 22 * l) / 451);

  let mes = Number(Math.floor((h + l - 7 * m + 114) / 31));
  let dia = Number((h + l - 7 * m + 114) % 31) + 1;

  return {
    dia,
    mes,
    ano,
  };
}
