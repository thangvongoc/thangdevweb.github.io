const totalPrice = document.querySelector('.total-price')
const productJs = document.querySelector('.product-js')
const account = JSON.parse(localStorage.getItem('account'))
const arr = JSON.parse(localStorage.getItem('product'))
let deleteBtn

function render() {
    if (!isLogin) {
        alert('Hãy đăng nhập')
        window.location = ('./login.html')
    }
    let htmls = arr?.reduce((preVal, curVal) => {
        return preVal + `
                <div class="cart-product">
                    <img src=${curVal.img} alt="" class="cart-product-img">
                    <div class="product-info">
                        <h3 class="product-name">${curVal.name}</h3>
                        <p value=${curVal.price} class="product-price">${parseInt(curVal.price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                        <div class="cart-product-btn">
                            <span>-</span>
                            <input disabled type="text" min="1" value="1" class="quantity">
                            <span>+</span>
                        </div>
                    </div>
                    <button class="delete-product">XÓA SẢN PHẨM</button>
                </div>
            `
    }, '<h3 class="cart-title">THÔNG TIN SẢN PHẨM</h3>')
    if (!htmls) htmls = 'Bạn chưa chọn sản phẩm nào'
    productJs.innerHTML = htmls

    deleteBtn = document.querySelectorAll('.delete-product')
    handleClick()
}

function calTotalPrice() {
    let price = 0;
    const listPrice = document.querySelectorAll('.product-price')
    const quantity = document.querySelectorAll('.quantity')
    listPrice.forEach((item, index) => {
        price += parseInt(item.getAttribute('value')) * parseInt(quantity[index].value)
    })
    totalPrice.innerText = price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

function handleClick() {
    const btns = document.querySelectorAll('.cart-product-btn span')
    btns.forEach((btn, index) => {
        btn.onclick = () => {
            if (index % 2 == 1) {
                const quantity = btn.previousElementSibling
                quantity.value = parseInt(quantity.value) + 1
                calTotalPrice()
            }
            else {
                const quantity = btn.nextElementSibling
                if (quantity.value != 1) {
                    quantity.value = parseInt(quantity.value) - 1
                    calTotalPrice()
                }
            }
        }
    })
}
render()

handleClick()

calTotalPrice()

// deleteBtn.onclick = () => {
    // console.log(deleteBtn[0].previousElementSibling.childNodes[1].innerText);
// }

deleteBtn.forEach(btn => {
    btn.onclick = () => {
        const strName = btn.previousElementSibling.childNodes[1].innerText
        let index
        for(let i = 0; i < arr.length; i++) {
            if (arr[i].name == strName) {
                index = i
                break
            }
        }
        arr.splice(index, 1)
        localStorage.setItem('product', JSON.stringify(arr))
        location.reload()
    }
})