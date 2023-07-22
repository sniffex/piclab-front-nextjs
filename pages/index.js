import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import {Product} from "@/models/Product";
import Footer from "@/components/Footer";

export default function HomePage({product, newProducts}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow">
      <Featured product={product}/>
      <NewProducts products={newProducts}/>
      </main>
      <Footer/>
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '64b96000a74e45311cd074de'; //dont change this will get error
  await mongooseConnect();
  const product = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {sort: {'_id':-1}, limit:10});
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
