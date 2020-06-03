export const formatDate = (date) => {
    let formatDate = new Date(date);
    let options = { year: "numeric", month: "2-digit", day: "2-digit" };
    let novaData = formatDate.toLocaleDateString("pt-BR", options).split('-').reverse().join('/');

    return novaData;

};