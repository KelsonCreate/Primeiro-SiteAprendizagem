botao.addEventListener("click", function () {
  const pedido = document.querySelector('#pedi').value.trim();
  if (!pedido) {
    alert("Digite seu pedido antes de enviar!");
    return;
  }
  const msg = document.createElement('p');
msg.textContent = "✅ Pedido enviado com sucesso!";
document.querySelector('form').appendChild(msg);
});