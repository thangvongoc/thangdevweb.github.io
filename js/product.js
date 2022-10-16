const productClassic = [
    {
        name: 'Amazing Bar Chocolate Almond',
        price: '89.300đ',
        path: '../img/Product/TruyenThong/Amazing-Bar-Chocolate-Almond.png',
        detailPath: '../html/products/amazing-almond.html'
    },
    {
        name: 'Amazing Bar Chocolate 85gr',
        price: '89.300đ',
        path: '../img/Product/TruyenThong/Amazing-Bar-Chocolate-85.png',
        detailPath: '../html/products/amazing-bar.html'
    },
    {
        name: 'Amazing Bar Chocolate Milk',
        price: '89.300đ',
        path: '../img/Product/TruyenThong/Amazing-Bar-Chocolate-Milk.png',
        detailPath: '../html/products/amazing-milk.html'
    },
    {
        name: 'Bitter Chocolate',
        price: '89.300đ',
        path: '../img/Product/TruyenThong/Bar100-Chocolate-78-500x500.jpg',
        detailPath: '../html/products/bitter-chocolate.html'
    },
    {
        name: 'Forest Chocolate',
        price: '89.300đ',
        path: '../img/Product/TruyenThong/Forest-Chocolate-001-500x500.jpg',
        detailPath: '../html/products/forest-chocolate.html'
    },
    {
        name: 'Matcha Chocolate',
        price: '89.300đ',
        path: '../img/Product/TruyenThong/Bar100-Chocolate-Matcha-500x500.jpg',
        detailPath: '../html/products/matcha-chocolate.html'
    },
    {
        name: 'White Chocolate',
        price: '89.300đ',
        path: '../img/Product/TruyenThong/Bar100-Chocolate-White-500x500.jpg',
        detailPath: '../html/products/white-chocolate.html'
    },
]

const productLove = [
    {
        name: 'Garden Chocolate Love',
        price: '89.300đ',
        path: '../img/Product/Love/Garden-Chocolate-001-500x500.jpg',
        detailPath: '../html/productLove/garden-love.html'
    },
    {
        name: 'Heart Box Love',
        price: '89.300đ',
        path: '../img/Product/Love/heart-box-chocolate.png',
        detailPath: '../html/productLove/heart-box.html'
    },
    {
        name: 'Love Chocolate Blue',
        price: '89.300đ',
        path: '../img/Product/Love/love-chocolate-blue.jpg',
        detailPath: '../html/productLove/love-blue.html'
    },
    {
        name: 'Love Chocolate (V2)',
        price: '89.300đ',
        path: '../img/Product/Love/love-chocolate.jfif',
        detailPath: '../html/productLove/love-chocolate-2.html'
    },
    {
        name: 'Love Chocolate',
        price: '89.300đ',
        path: '../img/Product/Love/love-chocolate-1.jpg',
        detailPath: '../html/productLove/love-chocolate.html'
    },
    {
        name: 'Love Chocolate (V3)',
        price: '89.300đ',
        path: '../img/Product/Love/valentine-chocolate-1.jfif',
        detailPath: '../html/productLove/valentine-v3.html'
    },
    {
        name: 'Valentine Chocolate',
        price: '89.300đ',
        path: '../img/Product/Love/valentine-chocolate.jpg',
        detailPath: '../html/productLove/valentine.html'
    },
]

const product = productClassic.concat(productLove)
const productJs = document.querySelector('.product-js')
const productTypes = document.querySelectorAll('.product-type')

function render(product) {
    const htmls = product.reduce((preVal, curVal) => {
        return preVal + `
                <div class="col l-3 m-4 c-6" style="animation: sideOn 0.4s linear forwards;">
                    <a href=${curVal.detailPath} class="product-item">
                        <div class="product-img-wrap">
                            <img src=${curVal.path} alt="" class="product-img">
                        </div>
                        <p class="product-name">${curVal.name}</p>
                        <p class="product-price">${curVal.price}</p>
                    </a>
                </div>
            `
    }, '')
    productJs.innerHTML = htmls
}


productTypes.forEach((productType, index) => {
    productType.onclick = () => {
        // Remove active class
        productTypes.forEach(productType => {
            productType.classList.remove('active')
        })
        productType.classList.add('active')
        
        if (index == 1) {
            render(productClassic)
        }
        else if (index == 2) render(productLove)
        else render(product)
    }
})

render(product)