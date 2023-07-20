import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import {Product} from "@/models/Product";
import Footer from "@/components/Footer";

export default function HomePage({product, newProducts}) {
  return (
    <div>
      <Header/>
      <Featured product={product}/>
      <NewProducts products={newProducts}/>
      <Footer/>
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '64b64f1c4f25adbab2a8e271';
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
