class ProductSearch {
    constructor() {
        this.products = this.getAllProducts();
        this.init();
    }

    init() {
        this.attachSearchListeners();
    }

    getAllProducts() {
        return [
            { id: 'm1', name: 'Классический костюм', price: '24 990₸', image: 'images/kostum.jpg', category: 'men' },
            { id: 'm2', name: 'Классическое пальто', price: '12 990₸', image: 'images/coat.webp', category: 'men' },
            { id: 'm3', name: 'Хлопковая рубашка', price: '7 990₸', image: 'images/shirt.webp', category: 'men' },
            { id: 'm4', name: 'Джинсы slim fit', price: '8 990₸', image: 'images/jeans.jpg', category: 'men' },
            { id: 'm5', name: 'Худи оверсайз', price: '15 990₸', image: 'images/hudi.avif', category: 'men' },
            { id: 'm6', name: 'Брюки классические', price: '9 990₸', image: 'images/man2.webp', category: 'men' },
            { id: 'm7', name: 'Свитшот', price: '11 990₸', image: 'images/mm1.webp', category: 'men' },
            { id: 'm8', name: 'Пиджак', price: '18 990₸', image: 'images/kostum.jpg', category: 'men' },
            { id: 'm9', name: 'Рубашка офисная', price: '6 990₸', image: 'images/shirt.webp', category: 'men' },
            { id: 'm10', name: 'Джинсы классические', price: '7 990₸', image: 'images/jeans.jpg', category: 'men' },
            { id: 'm11', name: 'Толстовка', price: '10 990₸', image: 'images/hudi.avif', category: 'men' },
            { id: 'm12', name: 'Пальто длинное', price: '16 990₸', image: 'images/coat.webp', category: 'men' },
            
            { id: 'w1', name: 'Пальто женское', price: '14 990₸', image: 'images/coat.webp', category: 'women' },
            { id: 'w2', name: 'Костюм женский', price: '22 990₸', image: 'images/kostum.jpg', category: 'women' },
            { id: 'w3', name: 'Блузка', price: '6 990₸', image: 'images/shirt.webp', category: 'women' },
            { id: 'w4', name: 'Джинсы женские', price: '8 990₸', image: 'images/jeans.jpg', category: 'women' },
            { id: 'w5', name: 'Худи женское', price: '13 990₸', image: 'images/hudi.avif', category: 'women' },
            { id: 'w6', name: 'Платье', price: '11 990₸', image: 'images/ff1.webp', category: 'women' },
            { id: 'w7', name: 'Рубашка оверсайз', price: '7 490₸', image: 'images/shirt.webp', category: 'women' },
            { id: 'w8', name: 'Джинсы скинни', price: '9 490₸', image: 'images/jeans.jpg', category: 'women' },
            { id: 'w9', name: 'Пальто короткое', price: '12 990₸', image: 'images/coat.webp', category: 'women' },
            { id: 'w10', name: 'Жакет', price: '16 990₸', image: 'images/kostum.jpg', category: 'women' },
            { id: 'w11', name: 'Свитшот', price: '10 990₸', image: 'images/hudi.avif', category: 'women' },
            { id: 'w12', name: 'Юбка', price: '5 990₸', image: 'images/ff1.webp', category: 'women' },
            
            { id: 'u1', name: 'Худи унисекс', price: '14 990₸', image: 'images/hudi.avif', category: 'unisex' },
            { id: 'u2', name: 'Футболка унисекс', price: '4 990₸', image: 'images/shirt.webp', category: 'unisex' },
            { id: 'u3', name: 'Джинсы унисекс', price: '8 990₸', image: 'images/jeans.jpg', category: 'unisex' },
            { id: 'u4', name: 'Свитшот унисекс', price: '11 990₸', image: 'images/hudi.avif', category: 'unisex' },
            { id: 'u5', name: 'Куртка унисекс', price: '15 990₸', image: 'images/coat.webp', category: 'unisex' },
            { id: 'u6', name: 'Рубашка унисекс', price: '6 990₸', image: 'images/shirt.webp', category: 'unisex' },
            { id: 'u7', name: 'Шорты унисекс', price: '5 990₸', image: 'images/jeans.jpg', category: 'unisex' },
            { id: 'u8', name: 'Толстовка унисекс', price: '9 990₸', image: 'images/hudi.avif', category: 'unisex' },
            { id: 'u9', name: 'Парка унисекс', price: '18 990₸', image: 'images/coat.webp', category: 'unisex' },
            { id: 'u10', name: 'Поло унисекс', price: '7 490₸', image: 'images/shirt.webp', category: 'unisex' },
            { id: 'u11', name: 'Брюки унисекс', price: '10 990₸', image: 'images/jeans.jpg', category: 'unisex' },
            { id: 'u12', name: 'Ветровка унисекс', price: '12 990₸', image: 'images/hudi.avif', category: 'unisex' },
            
            { id: 'a1', name: 'Кожаная сумка', price: '13 990₸', image: 'images/sumka.jpg', category: 'accessories' },
            { id: 'a2', name: 'Сумка через плечо', price: '11 990₸', image: 'images/sumka.jpg', category: 'accessories' },
            { id: 'a3', name: 'Рюкзак', price: '9 990₸', image: 'images/aa1.webp', category: 'accessories' },
            { id: 'a4', name: 'Клатч', price: '5 990₸', image: 'images/sumka.jpg', category: 'accessories' },
            { id: 'a5', name: 'Портмоне', price: '4 990₸', image: 'images/aa1.webp', category: 'accessories' },
            { id: 'a6', name: 'Сумка-тоут', price: '7 990₸', image: 'images/sumka.jpg', category: 'accessories' },
            { id: 'a7', name: 'Шарф', price: '3 990₸', image: 'images/aa1.webp', category: 'accessories' },
            { id: 'a8', name: 'Пояс', price: '2 990₸', image: 'images/sumka.jpg', category: 'accessories' },
            { id: 'a9', name: 'Шапка', price: '4 490₸', image: 'images/aa1.webp', category: 'accessories' },
            { id: 'a10', name: 'Очки солнцезащитные', price: '8 990₸', image: 'images/sumka.jpg', category: 'accessories' },
            { id: 'a11', name: 'Перчатки', price: '3 490₸', image: 'images/aa1.webp', category: 'accessories' },
            { id: 'a12', name: 'Кошелек', price: '5 490₸', image: 'images/sumka.jpg', category: 'accessories' }
        ];
    }

    search(query) {
        if (!query || query.trim() === '') {
            return [];
        }

        const searchTerm = query.toLowerCase().trim();
        return this.products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }

    attachSearchListeners() {
        const searchButtons = document.querySelectorAll('.search-btn');
        searchButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.openSearchModal();
            });
        });

        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.performSearch(e.target.value);
            });

            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.performSearch(e.target.value);
                }
            });
        }

        const searchClose = document.getElementById('search-close');
        const searchOverlay = document.getElementById('search-overlay');
        
        if (searchClose) {
            searchClose.addEventListener('click', () => {
                this.closeSearchModal();
            });
        }

        if (searchOverlay) {
            searchOverlay.addEventListener('click', () => {
                this.closeSearchModal();
            });
        }
    }

    openSearchModal() {
        const searchModal = document.getElementById('search-modal');
        const searchOverlay = document.getElementById('search-overlay');
        
        if (searchModal) {
            searchModal.classList.add('active');
            if (searchOverlay) searchOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                setTimeout(() => searchInput.focus(), 100);
            }
        }
    }

    closeSearchModal() {
        const searchModal = document.getElementById('search-modal');
        const searchOverlay = document.getElementById('search-overlay');
        
        if (searchModal) {
            searchModal.classList.remove('active');
            if (searchOverlay) searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    performSearch(query) {
        const results = this.search(query);
        this.displaySearchResults(results, query);
    }

    displaySearchResults(results, query) {
        const resultsContainer = document.getElementById('search-results');
        const resultsCount = document.getElementById('search-results-count');
        
        if (!resultsContainer) return;

        if (resultsCount) {
            resultsCount.textContent = query ? `Найдено: ${results.length}` : '';
        }

        if (!query || query.trim() === '') {
            resultsContainer.innerHTML = '<p class="search-placeholder">Введите запрос для поиска</p>';
            return;
        }

        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="search-no-results">
                    <p>По запросу "${query}" ничего не найдено</p>
                    <p class="search-suggestion">Попробуйте изменить запрос</p>
                </div>
            `;
            return;
        }

        resultsContainer.innerHTML = results.map(product => `
            <div class="search-result-item" onclick="productSearch.addToCartFromSearch('${product.id}')">
                <div class="search-result-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="search-result-info">
                    <h4>${product.name}</h4>
                    <div class="search-result-price">${product.price}</div>
                    <div class="search-result-category">${this.getCategoryName(product.category)}</div>
                </div>
            </div>
        `).join('');
    }

    getCategoryName(category) {
        const categories = {
            'men': 'Мужчинам',
            'women': 'Женщинам',
            'unisex': 'Унисекс',
            'accessories': 'Аксессуары'
        };
        return categories[category] || category;
    }

    addToCartFromSearch(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product && cart) {
            cart.addItem(product);
            this.closeSearchModal();
        }
    }
}

let productSearch;
document.addEventListener('DOMContentLoaded', () => {
    productSearch = new ProductSearch();
});

