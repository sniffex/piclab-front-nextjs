import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function HomePage({product, newProducts}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-grow">
      <About/>
      </main>
      <Footer/>
    </div>
  )
}