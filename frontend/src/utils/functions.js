export const getDiscount = (price, cuttedPrice) => {
    return (((cuttedPrice - price) / cuttedPrice) * 100).toFixed();
}

export const getDeliveryDate = () => {
    const deliveryDate = new Date();
    deliveryDate.setDate(new Date().getDate() + 7)
    return deliveryDate.toUTCString().substring(0, 11);
}

export const formatDate = (dt) => {
    return new Date(dt).toUTCString().substring(0,16);
}

export const getRandomProducts = (prodsArray, n) => {
    return prodsArray.sort(() => 0.5 - Math.random()).slice(0, n)
}

export const getRandomProductsByCategory = (prodsArray, n, category = 'Fashion') => {
    const prodsInCategory = prodsArray.filter(prod => prod.category === category);
    return prodsInCategory.sort(() => 0.5 - Math.random()).slice(0, n);
}
