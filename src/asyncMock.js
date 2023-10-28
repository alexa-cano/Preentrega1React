const products = [
  {
    id: "1",
    name: "Cuaderno cosido",
    price: 53.80,
    category: "Útiles escolares",
    img: "https://tonypapelerias.vtexassets.com/arquivos/ids/215567-200-auto?v=637941103529100000&width=200&height=auto&aspect=true",
    stock: 25,
    description: "Cuaderno cosido de 100 hojas Profesional de cuadro chico Swing Cosi"
  },

  {
    id: "2",
    name: "Lápiz adhesivo",
    price: 235,
    category: "Útiles escolares",
    img: "https://tonypapelerias.vtexassets.com/arquivos/ids/215502-200-auto?v=637934254199270000&width=200&height=auto&aspect=true",
    stock: 25,
    description: "Pegamento Lápiz Adhesivo Tubo con 42 g con 5 Piezas Pritt"
  },

  {
    id: "3",
    name: "Cuaderno de espiral",
    price: 200,
    category: "Categoría diferente",
    img: "https://tonypapelerias.vtexassets.com/arquivos/ids/211543-200-auto?v=637733207402600000&width=200&height=auto&aspect=true",
    stock: 20,
    description: "Cuaderno espiral de 100 hojas Profesional de cuadro chico Escolar Plus Scribe"
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === productId));
    }, 500);
  });
};
