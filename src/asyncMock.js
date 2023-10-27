const products = [
    {
      id: "1",
      name: "Lápiz adhesivo",
      price: 235,
      category: "Útiles escolares",
      img: "https://tse2.mm.bing.net/th?id=OIP.Jw-MfZVo8aCZLEVTHvMZbQHaE8&pid=Api&P=0&h=180",
      stock: 25,
      description: "Pegamento Lápiz Adhesivo Tubo con 42 g con 5 Piezas Pritt"
    },
  
    {
      id: "2",
      name: "Lápiz adhesivo",
      price: 235,
      category: "Útiles escolares",
      img: "https://tonypapelerias.vtexassets.com/arquivos/ids/215502-800-auto?v=637934254199270000&width=800&height=auto&aspect=true",
      stock: 25,
      description: "Pegamento Lápiz Adhesivo Tubo con 42 g con 5 Piezas Pritt"
    },
  
    {
      id: "3",
      name: "Otro producto",
      price: 200,
      category: "Categoría diferente",
      img: "URL_de_la_imagen_del_producto",
      stock: 20,
      description: "Descripción del otro producto"
    },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500);
    });
  };
  