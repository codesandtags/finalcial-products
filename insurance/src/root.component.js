import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

import { getEntries } from "./services/contentful";
import ProductCard from "./components/ProductCard";
import ComingSoon from "./components/ComingSoon";

export default function Root(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (getEntries) {
      getEntries()
        .then((entries) => {
          const insuranceProducts = entries.items.filter((entry) => {
            return (
              entry.fields.productType !== undefined &&
              entry.fields.productType.fields.type === "INSURANCE"
            );
          });

          setProducts(insuranceProducts);
        })
        .catch(console.error);
    }
  }, []);

  const renderProducts = () => {
    return products.map((product) => {
      const { id } = product.sys;
      const isHighlight = Math.floor(Math.random() * 20) < 10;

      return (
        <ProductCard product={product} isHighlight={isHighlight} key={id} />
      );
    });
  };

  return (
    <div>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Insurance
          </h1>
        </div>
      </header>
      <main>
        <div className="antialiased bg-gray-200 text-gray-900 font-sans p-6">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              {products.length > 0 ? renderProducts() : <ComingSoon />}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
