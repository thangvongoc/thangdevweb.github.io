const orderBtn = document.querySelector('.product-btn')
const products = JSON.parse(localStorage.getItem('products')) || []

orderBtn.addEventListener('click', function() {
    const name = orderBtn.previousElementSibling.parentElement.childNodes[1].innerText
    const isExist = products.find(product => product.name == name)
    if (!isExist) {
        products.push({
        path: orderBtn.previousElementSibling.parentElement.previousElementSibling.childNodes[1].src,
        name,
        price: orderBtn.previousElementSibling.getAttribute('value')
        })
    }

    localStorage.setItem('products', JSON.stringify(products))
})
