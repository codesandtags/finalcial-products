import React from "react";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const ProductCard = (props) => {
  const product = props.product;
  const { title, description, benefits } = product.fields;
  const image = product.fields.image.fields.file;

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4">
      <a
        href=""
        className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
      >
        <div className="relative overflow-hidden">
          <img
            className="object-contain h-48 w-2/3 m-auto"
            src={`https:${image.url}`}
            alt={image.fileName}
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-yellow-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            Highlight
          </span>
          <h2 className="mt-2 mb-2  font-bold">{title}</h2>
          <div
            className="text-gray-700 text-base"
            dangerouslySetInnerHTML={{
              __html: documentToHtmlString(description),
            }}
          ></div>
        </div>
        <div className="p-4 border-t border-b text-xs text-gray-700">
          <p className="text-gray-900 font-bold text-md mb-2">Benefits</p>
          {benefits.map((benefit, index) => {
            return (
              <span className="flex items-center" key={index}>
                <i className="far fa-address-card fa-fw text-gray-900 mr-2">
                  ⭐️
                </i>{" "}
                {benefit.description}
              </span>
            );
          })}
        </div>
        <div className="p-4 flex items-center text-sm text-gray-600">
          <button
            type="button"
            className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          >
            {" "}
            More information{" "}
          </button>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
