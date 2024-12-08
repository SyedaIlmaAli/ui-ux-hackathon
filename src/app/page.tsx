import ProductsPicsAndTitle from "@/components/ProductsPicsAndTitle";

export default function Home() {
  return (
    <div className="bg-myBlack mt-9 flex justify-center items-center flex-col">
      {/* First Heading */}
      <div className="flex justify-center items-center">
        <h2 className="capitalize font-sans text-myViolet font-normal md:font-medium md:text-[51.7px] text-[31.7px]">
          JUST UX
        </h2>
      </div>

      {/* Second Heading */}
      <div className="flex justify-center items-center">
        <h1 className="max-w-[422px] md:max-w-[622px] text-white text-center md:leading-[80px] font-bold text-[40px] md:text-[80px]">
          ecommerce user interface kit
        </h1>
      </div>

      {/* Product Section */}
      <div className="flex justify-center items-center mt-8">
        <ProductsPicsAndTitle />
      </div>
    </div>
  );
}
