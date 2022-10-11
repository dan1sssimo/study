let authPerson = prompt('Хто ти?');
if (authPerson === 'Admin' && authPerson != null) {
    let password = prompt('Введіть пароль')
    if (password === 'TheMaster' && password != null) {
        alert('Welcome')
    } else if (!(password === 'TheMaster' || password == null)) {
        alert('Wrong password')
    } else
        alert('Canceled')
} else if (!(authPerson == null || authPerson === 'Admin'))
    alert('IDKy')
else
    alert('Canceled')