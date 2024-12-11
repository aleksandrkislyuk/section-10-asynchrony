document.addEventListener('DOMContentLoaded', loadProducts);

function loadProducts() {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      const productsContainer = document.querySelector('.products-container');
      data.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('productCard');

        productCard.innerHTML = `
                <div class="card">
                    <h3>Название:${product.title}</h3>
                    <p>Артикул: ${product.id}</p>
                    <p>Цена: $${product.price}</p>
                    <p>Категория: ${product.category}</p>
                    <p>Описание: ${product.description}</p>
                    <img src=${product.image}>
                </div>
                `;

        productsContainer.appendChild(productCard);
      });
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
}

