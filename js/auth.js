const userName = document.querySelector('#username')
const pwd = document.querySelector('#pwd')
const loginBtn = document.querySelector('.login-btn')

loginBtn.addEventListener('click', function() {
    if (userName.value == 'coffeehouse@gmail.com' && pwd.value == '1') {
        alert('Đăng nhập thành công!')
        localStorage.setItem('isLogin', true)
        location.reload()
    }
    else alert('Đăng nhập thất bại!')
})

if (JSON.parse(localStorage.getItem('isLogin'))) 
    document.querySelector('.auth-login').innerHTML = '<p>The Coffee House</p>'
