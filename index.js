let resposta = prompt("Você pagou o boleto? (sim/não)");
let boletoPago = false;

if (resposta === "sim") {
  boletoPago = true;
} else if (resposta === "não") {
  boletoPago = false;
} else {
  boletoPago = "invalido";
}

if (boletoPago === false) {
  alert("O boleto não está pago");
  console.log("O boleto não está pago");
} else if (boletoPago === true) {
  alert("O boleto está pago");
  console.log("O boleto está pago");
} else {
  alert("Resposta inválida, não foi possível verificar a condição do boleto");
  console.log(
    "Resposta inválida, não foi possível verificar a condição do boleto"
  );
}
