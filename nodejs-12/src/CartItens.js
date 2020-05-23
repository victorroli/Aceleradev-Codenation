const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

class CartItens {
    constructor(itensSelected) {
        this.products = itensSelected;
        this.promotion = '';
        this.totalPrice = 0;
        this.discountValue = 0;
        this.discount = 0;
        this.initialize();
    }

    initialize() {
        this.getCategories();
        this.getValueTotal();
        this.getFormatItens();
    }

    getCategories() {
        let categories = []
        this.products.map(item => {
            if (!categories.includes(item.category)) {
                categories.push(item.category);
            }
        });
        this.setPromotion(categories.length);
    }

    setPromotion(size) {
        this.promotion = promotions[size > 4 ? 4 - 1 : size - 1];
    }

    getValueTotal() {
        let valueTotal = 0;
        let discount = 0;
        this.products.map(item => {
            let aPromotion = item.promotions.find(({ looks }) => looks.includes(this.promotion));
            discount += typeof(aPromotion) != 'undefined' ? item.regularPrice - aPromotion.price : 0;
            valueTotal += item.regularPrice;
        });
        this.discountValue = discount.toFixed(2);
        this.totalPrice = (valueTotal - discount).toFixed(2);
        this.discount = (discount * 100 / valueTotal).toFixed(2) + '%';
    }

    getFormatItens() {
        this.products = this.products.map(item =>
            ({ name: item.name, category: item.category }));
    }

}

module.exports = { CartItens };