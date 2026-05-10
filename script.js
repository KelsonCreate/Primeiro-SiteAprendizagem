const btn = document.getElementById("btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const form = document.querySelector('form');
const msg = document.createElement('p');
msg.textContent = "✅ Pedido enviado com sucesso!";
msg.style.color = "green"; // Opcional: deixar a cor verde

form.addEventListener('submit', (evento) => {
  evento.preventDefault(); // Impede a página de recarregar
  form.appendChild(msg);   // Mostra a mensagem só agora
});
