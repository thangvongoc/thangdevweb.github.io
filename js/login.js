const arrAccount = JSON.parse(localStorage.getItem('account'))
const cartShop = document.querySelector('.giohang a')
const loginBtn = document.querySelector('.login-btn')

loginBtn.onclick = (e) => {
    let isLoginOk = false
    e.preventDefault()
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')

    if (arrAccount) {
        arrAccount.forEach(acc => {
            console.log(acc);
            if (email.value == acc.email && password.value == acc.password) {
                isLoginOk = true
                localStorage.setItem('isLogin', 'true')
                
                window.location = ('../index.html')
            }
        })
    }
    if (!isLoginOk) alert("Tài khoản hoặc mật khẩu không đúng")
}