import React from "react";
import ProductCard from "./ui/ProductCard";

const ProductsPicsAndTitle = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden xl:block relative mx-auto w-[1200px] h-[400px]">
        <div className="absolute left-[42px] top-[86px] h-full">
          <ProductCard
            title="The Dandy chair"
            src="/ui-chair.png"
            alt="chair"
            price="£250"
          />
        </div>
        <div className="absolute left-[289.27px] top-[141px] h-full">
          <ProductCard src="/ui-lamp.png" alt="vase" />
        </div>
        <div className="absolute left-[536.55px] top-[67px] h-full">
          <ProductCard
            title="The Stanley Table"
            src="/ui-table.png"
            alt="table"
            price="£125"
          />
        </div>
        <div className="absolute left-[785px] top-[111px] h-full">
          <ProductCard
            title="New Lamp"
            src="/ui-stool.png"
            alt="table"
            price="£250"
          />
        </div>
        <div className="absolute left-[1032.27px] top-[60px] h-full">
          <ProductCard
            title="Andel Vase"
            src="/artifact-ui.jpg"
            alt="new lamp"
            price="£95"
          />
        </div>
      </div>

      {/* Medium View (md screens) */}
      <div className="xl:hidden  flex flex-wrap justify-center gap-6 my-5 mx-4">
        <div className="flex justify-center items-center">
          <ProductCard
            title="The Dandy chair"
            src="/ui-chair.png"
            alt="chair"
            price="£250"
          />
        </div>
        <div className="flex justify-center items-center">
          <ProductCard src="/ui-lamp.png" alt="vase" />
        </div>
        <div className="flex justify-center items-center">
          <ProductCard
            title="The Stanley Table"
            src="/ui-table.png"
            alt="table"
            price="£125"
          />
        </div>
        <div className="flex justify-center items-center">
          <ProductCard
            title="New Lamp"
            src="/ui-stool.png"
            alt="table"
            price="£250"
          />
        </div>
        <div className="flex justify-center items-center">
          <ProductCard
            title="Andel Vase"
            src="/artifact-ui.jpg"
            alt="new lamp"
            price="£95"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsPicsAndTitle;
