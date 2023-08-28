import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p>{product.price}</p>
      <button className="bg-green-800 text-white px-4 py-1 rounded-none">
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;