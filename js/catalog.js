const CATALOG = [
    {
        id: 'el1',
        name: 'Крыса Дамбо',
        img: 'images/dambo.jpg',
        price: 500,
        quantity: 0,
    },
    {
        id: 'el2',
        name: 'Голубая крыса',
        img: 'images/blue.jpeg',
        price: 550,
        quantity: 0,
    },
    {
        id: 'el3',
        name: 'Декоративная крыса',
        img: 'images/decorative.jpg',
        price: 600,
        quantity: 0,
    },
    {
        id: 'el4',
        name: 'Крыса Сфинкс',
        img: 'images/goli.jpg',
        price: 650,
        quantity: 0,
    },
    {
        id: 'el5',
        name: 'Крыса Рекс',
        img: 'images/rexmini.jpg',
        price: 700,
        quantity: 0,
    },
    {
        id: 'el6',
        name: 'Крыса Сатин',
        img: 'images/satin.jpeg',
        price: 750,
        quantity: 0,
    },
];

function renderProducts() {
    const productsContainer = document.getElementById('products');
    let catalogHTML = '<div class="container"><div class="row">';
    
    CATALOG.forEach((item) => {
        catalogHTML += `
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card">
                    <img src="${item.img}" class="card-img-top products-element__img" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title products-element__name">${item.name}</h5>
                        <p class="card-text products-element__price">Цена: ${item.price} руб.</p>
                        <div class="quantity-control">
                            <button class="btn btn-secondary" onclick="changeQuantity('${item.id}', -1)">-</button>
                            <span id="quantity-${item.id}">${item.quantity}</span>
                            <button class="btn btn-secondary" onclick="changeQuantity('${item.id}', 1)">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    catalogHTML += '</div><button class="btn btn-purple" style="margin-top: 20px;" onclick="buySelectedItems()">Купить</button>';
    productsContainer.innerHTML = catalogHTML;
}

function changeQuantity(itemId, change) {
    const item = CATALOG.find(el => el.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity < 0) {
            item.quantity = 0; // Не позволять количеству быть меньше нуля
        }

        document.getElementById(`quantity-${item.id}`).innerText = item.quantity; // Обновляем отображаемое количество
    }
}

function buySelectedItems() {
    const itemsToBuy = CATALOG.filter(item => item.quantity > 0);
    if (itemsToBuy.length === 0) {
        alert('Пожалуйста, выберите хотя бы одну крысу для покупки.');
        return;
    }

    let queryString = itemsToBuy.map(item => `name=${encodeURIComponent(item.name)}&price=${item.price}&quantity=${item.quantity}`).join('&'); //Join объединятие строки в одну разделяя их символом 
    const newUrl = `https://www.bing.com/search?"${queryString}`;
    window.location.href = newUrl; // Перенаправление на Bing с параметрами
}

document.addEventListener('DOMContentLoaded', renderProducts);

