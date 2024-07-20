$(document).ready(function() {
    $("[name=email]").on("input", function() {
        $(this).val($(this).val().toLowerCase());
    });
});
function registerUser(event) {
    event.preventDefault();
    
    let name = document.getElementById('usu_nome').value;
    let email = document.getElementById('usu_email').value;
    let phone = document.getElementById('usu_telefone').value;
    let password = document.getElementById('usu_senha').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    let userExists = users.some(user => user.email === email);

    if (userExists) {
        alert('Email já cadastrado!');
        return;
    }

    users.push({
        name: name,
        email: email,
        phone: phone,
        password: password
    });

    localStorage.setItem('users', JSON.stringify(users));
    alert('Usuário registrado com sucesso!');
    window.location.href = "/index.html";
}

function loginUser(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('senha').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Save user session to localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Login bem-sucedido!');
        window.location.href = "pages/home/index.html"; // Redireciona para a dashboard
    } else {
        alert('Email ou senha incorretos!');
    }
}

// Verifique se o usuário está logado e redirecione para a página de login, se não estiver
function checkIfUserIsLoggedIn() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = "/login.html";
    }
}

// Chame essa função na página da dashboard para verificar se o usuário está logado
// checkIfUserIsLoggedIn(); // Descomente essa linha na página da dashboard
