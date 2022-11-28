const products = JSON.parse(localStorage.getItem('products')) || []
const productJS = document.querySelector('.product-js')
const totalPrice = document.querySelector('.total-price')
let deleteBtn

function render() {
    let htmls = products.reduce((pre, cur) => {
        return pre + `
        <div class="cart-product">
            <img src=${cur.path} alt="" class="cart-product-img">
            <div class="product-info">
                <h3 class="product-name">${cur.name}</h3>
                <p value="${cur.price}" class="product-price">${parseInt(cur.price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</p>
                <div class="cart-product-btn">
                    <span>-</span>
                    <input type="text" min="1" value="1" class="quantity">
                    <span>+</span>
                </div>
            </div>
            <button class="delete-product">XÓA SẢN PHẨM</button>
        </div>
        `
    }, '<h3 class="cart-title">THÔNG TIN SẢN PHẨM</h3>')

    productJS.innerHTML = htmls
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

deleteBtn.forEach(btn => {
    btn.onclick = () => {
        const strName = btn.previousElementSibling.childNodes[1].innerText
        let index
        for(let i = 0; i < products.length; i++) {
            if (products[i].name == strName) {
                index = i
                break
            }
        }
        products.splice(index, 1)
        localStorage.setItem('products', JSON.stringify(products))
        location.reload()
    }
})