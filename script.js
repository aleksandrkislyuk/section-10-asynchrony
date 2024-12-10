document.addEventListener('DOMContentLoaded', loadProducts);

function loadProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.querySelector('#products-container');
            data.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                productCard.innerHTML = `
                    <h3>Название товара:${product.title}</h3>
                    <p>Идентификатор товара: ${product.id}</p>
                    <p>Стоимость товара: $${product.price}</p>
                    <p>Категория товара: ${product.category}</p>
                    <p>Описание товара: ${product.description}</p>
                    <img src=${product.image} alt="${product.title}">
                `;

                productsContainer.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}