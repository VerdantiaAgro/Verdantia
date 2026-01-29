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
  return [
    { title: "Verdantia | Verduras Mexicanas de Calidad Mundial" },
    { name: "description", content: "Exportamos los mejores productos del campo mexicano con compromiso sustentable" },
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
