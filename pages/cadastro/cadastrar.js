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
