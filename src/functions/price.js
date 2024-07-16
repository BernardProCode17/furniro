function formatPrice(price) {
    const formatePrice = price.toString();

    if (formatePrice.length < 4) {
        return price
    } else if (formatePrice.length === 4) {
        return `${formatePrice[0]},${formatePrice.slice(1)}`
    }
}

export default formatPrice;