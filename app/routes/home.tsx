import type { Route } from "./+types/home";
import Hero from "~/components/home/Hero";
import Nosotros from "~/components/home/Nosotros";
import Productos from "~/components/home/Productos";
import Productos2 from "~/components/home/Productos2";
import Alcances from "~/components/home/Alcances";
import Proceso from "~/components/home/Proceso";
import Capacidad from "~/components/home/Capacidad";
import Compromiso from "~/components/home/Compromiso";
import Contacto from "~/components/home/Contacto";
import Footer from "~/layout/Footer";

import Navbar from "~/layout/Navbar";

export function meta({ }: Route.MetaArgs) {
  const siteUrl = "https://verdantia.mx";
  const ogImage = `${siteUrl}/home-imgs/limon_persa.webp`;
  
  const title = "Verdantia | Verduras Mexicanas de Calidad Mundial";
  const description = "Exportamos los mejores productos del campo mexicano con compromiso sustentable";

  return [
    { title },
    { name: "description", content: description },
    
    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: siteUrl },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: "Limon persa" },
    { property: "og:site_name", content: "Verdantia" },
    { property: "og:locale", content: "es_MX" },
    { property: "og:locale:alternate", content: "en_US" },
    
    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
    { name: "twitter:image:alt", content: "Verdantia Logo" },
    
    // Additional SEO
    { name: "author", content: "Verdantia" },
    { name: "robots", content: "index, follow" },
    { name: "theme-color", content: "#0F1612" },
  ];
}

export default function Home() {
  return (
    <main className="bg-[#0F1612]">
      <Navbar />
      <Hero />
      <Nosotros />
      <Productos />
      <Productos2 />
      <Alcances />
      <Proceso />
      <Capacidad />
      <Compromiso />
      <Contacto />
      <Footer />
    </main>
  );
}
