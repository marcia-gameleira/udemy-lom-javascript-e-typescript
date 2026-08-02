const numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

// Filtrando números pares
const numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log('Números pares:', numerosPares);