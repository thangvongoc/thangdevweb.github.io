const addBtn = document.querySelector('.product-add-btn button')

addBtn.onclick = () => {
    if (!isLogin) {
        alert('Đăng nhập để sử dụng chức năng này')
        window.location = ('../login.html')
        return 
    }
    const img = document.querySelector('.product-img')
    const name = document.querySelector('.product-name')
    const price = document.querySelector('.product-price')
    const obj = {
            img: img.src,
            name: name.innerText,
            price: price.getAttribute('value')
    }
    let arrStorage = JSON.parse(localStorage.getItem('product'))
    if (!arrStorage) arrStorage = []
    const isExist = arrStorage.some(obj => {
        return obj.name === name.innerText
    })
    if (!isExist) {
        arrStorage.push(obj)
        const cartShop = document.querySelector('.giohang span')
        cartShop.innerText = `(${arrStorage.length})`
    }
    localStorage.setItem('product', JSON.stringify(arrStorage))
    window.location = ('../cart.html')
}