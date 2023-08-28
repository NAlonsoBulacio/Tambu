import React from "react";
import ProductCard from "../../Componentes/ProductCard/ProductCard";
import cañas from "../../images/cañas.jpg";
// import NavBar from "../../Componentes/NavBar/NavBar";
const Products = () => {
  const products = [
    { id: 1, image: cañas, name: "cañas de bambu", price: "$3456"  },
    { id: 2, image: cañas, name: "cañas de bambu", price: "$3456"  },
    { id: 3, image: cañas, name: "cañas de bambu", price: "$3456"  },
    { id: 4, image: cañas, name: "cañas de bambu", price: "$3456"  },
    { id: 5, image: cañas, name: "cañas de bambu", price: "$3456" },
    { id: 6, image: cañas, name: "cañas de bambu", price: "$3456"  },
    { id: 7, image: cañas, name: "cañas de bambu", price: "$3456" },
    { id: 8, image: cañas, name: "cañas de bambu", price: "$3456"  },
    { id: 9, image: cañas, name: "cañas de bambu", price: "$3456" },
  ];

  return (
    // <div className="overflow-hidden">
    //     <NavBar />
      <div className="flex flex-wrap -mx-2">
        {products?.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-2"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    // </div>
  );
};

export default Products;
