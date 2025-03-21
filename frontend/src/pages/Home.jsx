import React from "react";
import Hero from "../components/layout/Hero";
import GenderCollection from "../components/products/GenderCollection";
import NewArrivals from "../components/products/NewArrivals";
import ProductDetails from "../components/products/ProductDetails";
import ProductGrid from "../components/products/ProductGrid";
import FeaturedCollection from "../components/products/FeaturedCollection";
import FeaturesSection from "../components/products/FeaturesSection";

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/200/200?random=3",
      },
    ],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/200/200?random=4",
      },
    ],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/200/200?random=5",
      },
    ],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 100,
    images: [
      {
        url: "https://picsum.photos/200/200?random=6",
      },
    ],
  },
  {
    _id: 5,
    name: "Product 5",
    price: 120,
    images: [
      {
        url: "https://picsum.photos/200/200?random=7",
      },
    ],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 130,
    images: [
      {
        url: "https://picsum.photos/200/200?random=8",
      },
    ],
  },
  {
    _id: 7,
    name: "Product 7",
    price: 140,
    images: [
      {
        url: "https://picsum.photos/200/200?random=9",
      },
    ],
  },
  {
    _id: 8,
    name: "Product 8",
    price: 150,
    images: [
      {
        url: "https://picsum.photos/200/200?random=10",
      },
    ],
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrivals />

      {/* Best seller */}
      <ProductDetails />

      <div className="container mx-auto bg-[#FAF1E6]">
        <h2 className="text-3xl text-center font-bold mb-4 mt-3">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeaturedCollection/>
      <FeaturesSection/>
    </div>
  );
};

export default Home;
