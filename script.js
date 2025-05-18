let botao = document.querySelector("#botao");
botao.addEventListener("click", function () {
    botao.style.backgroundColor = "grey";
    let msg = document.querySelector("#mensagem");
    msg.textContent = "Seja bem vindo! Aqui tem um pouco sobre mim!";
  });
