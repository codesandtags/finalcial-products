import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

import { getEntries } from "./services/contentful";
import ProductCard from "./components/ProductCard";

export default function Root(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (getEntries) {
      getEntries()
        .then((entries) => {
          console.log(entries);

          const savingAccountProducts = entries.items.filter((entry) => {
            return (
              entry.fields.productType !== undefined &&
              entry.fields.productType.fields.type === "CREDIT_CARD"
            );
          });
          setProducts(savingAccountProducts);
        })
        .catch(console.error);
    }
  }, []);

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Credit Cards
          </h1>
        </div>
      </header>
      <main>
        <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              {products.map((product) => {
                const { id } = product.sys;
                const isHighlight = Math.floor(Math.random() * 20) < 10;

                return (
                  <ProductCard
                    product={product}
                    isHighlight={isHighlight}
                    key={id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
