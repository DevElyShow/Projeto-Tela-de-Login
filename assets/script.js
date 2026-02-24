const form = document.getElementById("loginForm");
const message = document.getElementById("message");

// Usuário fake (simulação realista)
const fakeUser = {
  email: "torcedor@sport.com",
  password: "123456"
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Efeito de carregamento
  message.style.color = "white";
  message.textContent = "Verificando credenciais...";

  setTimeout(() => {
    if (email === fakeUser.email && password === fakeUser.password) {
      message.style.color = "#00ff88";
      message.textContent = "Login realizado com sucesso! Bem-vindo ao Portal do Leão 🦁";

      // Simulação de redirecionamento
      setTimeout(() => {
        alert("Login autorizado! (Aqui você pode redirecionar para o dashboard)");
        // window.location.href = "dashboard.html";
      }, 1000);

    } else {
      message.style.color = "#ff4d4d";
      message.textContent = "Email ou senha incorretos. Tente novamente.";
    }
  }, 1500);
});