const cartShop = document.querySelector('.giohang span')
const cartShopLink = document.querySelector('.giohang a')
const userName = document.querySelector('.cach a')
const arr = JSON.parse(localStorage.getItem('product'))
const account = JSON.parse(localStorage.getItem('account'))
const isLogin = JSON.parse(localStorage.getItem('isLogin'))

function logOut() {
    localStorage.setItem('isLogin', 'false')
    location.reload()
}

userName.onclick = logOut

if (!arr) cartShop.innerText = '(0)'
else cartShop.innerText = `(${arr.length})`

if (isLogin) {
    userName.innerHTML = 'Đăng xuất'
    userName.style.textTransform = 'unset'
    userName.href = ''
}
else {
    cartShop.innerText = '(0)'
}

cartShopLink.onclick = (e) => {
    if (isLogin) {

    }
    else {
        e.preventDefault()
        alert("Đăng nhập để sử dụng chắc năng này.")
    }
}
