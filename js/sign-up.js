const signUpBtn = document.querySelector('.sign-up-btn')
let isOk = false;

function checkPassWord() {
    var input = document.querySelector('#password')
    if (input.value.length < 8) {
        input.nextElementSibling.style.display = 'inline-block'
        isOk = false
    }
    else {
        input.nextElementSibling.style.display = 'none'
        isOk = true
    }
}
function checkPhone() {
    var regex = /((09|03|07|08|05)+([0-9]{8})\b)/g
    var input = document.querySelector('#phone')
    if (!regex.test(input.value)) {
        input.style.border = '1px solid red'
        isOk = false
    }
    else {
        isOk = true
        input.style.border = '1px solid #c8c8c8'
    }
}
function checkEmail() {
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    var input = document.querySelector('#email')
    if (!regex.test(input.value)) {
        input.style.border = '1px solid red'
        isOk = false
    }
    else {
        isOk = true
        input.style.border = '1px solid #c8c8c8'
    }
}

function signUp() {
    let isExist = false;
    const email = document.querySelector('#email')
    const pwd = document.querySelector('#password')
    if (isOk) {
        let account = JSON.parse(localStorage.getItem('account'))
        if (!account) account = []
        const obj = 
            {
            email: email.value,
            password: pwd.value
            }
        for (let i = 0; i < account.length; i++) {
            if (account[i].email == email.value) {
                alert('Email đã được đăng ký')
                isExist = true
                break
            }
        }
        if (!isExist) {
            account.push(obj)
            localStorage.setItem('account', JSON.stringify(account))
            alert('Chúc mừng bạn đã đăng kí thành công!')
        }
    }
}
