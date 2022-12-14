import React from 'react';

function THeadTableDetailsProducts() {
  return (
    <thead className="bg-gray-200 border-b-2 border-gray-200">
      <tr>
        <th className="w-12 p-2 text-sm font-semibold tracking-wide text-left">
          Item
        </th>
        <th className="p-2 text-sm font-semibold tracking-wide text-center">
          Descrição
        </th>
        <th className="w-24 p-2 text-sm font-semibold tracking-wide text-left">
          Quantidade
        </th>
        <th className="w-28 p-2 text-sm font-semibold tracking-wide text-left">
          Valor Unitário
        </th>
        <th className="w-24 p-2 text-sm font-semibold tracking-wide text-left">
          Sub-total
        </th>
      </tr>
    </thead>
  );
}

export default THeadTableDetailsProducts;
