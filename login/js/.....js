const usuarios = [
    {
        login: 'caio@gmail.com',
        pass: 'caio',
        //email: 'caio@gmail.com'
    },
    {
        login: 'admin',
        pass: 'admin',
        //email: 'admin@gmail.com'
    },
    {
        login: 'kkk',
        senha: 'pkk'
    }
]

let botao = document.getElementById('botaologin')

botao.addEventListener('click', function logar(){

    let pegaUsuario = document.getElementById('email').value
    //let pegaEmail = document.getElementById('email').value
    let pegaSenha = document.getElementById('senha').value
    let validaLogin = false

    for(let i in usuarios){

        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass /*&&pegaEmail == usuarios[i].email*/){
            validaLogin = true
            break
        }
    }
    

    if(validaLogin == true){
        location.href = '/home/home.html'
        }else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuário ou senha incorretos!',
            })
         }
    

})