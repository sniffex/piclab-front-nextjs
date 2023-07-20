import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function HomePage({product, newProducts}) {
  return (
    <div>
      <Header/>
      <About/>
      <Footer/>
    </div>
  )
}