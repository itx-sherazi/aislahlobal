"use client";
import Image from "next/image";
import { useState } from "react";
import {
  FaShieldAlt, FaArrowRight, FaStar, FaCheckCircle,
  FaClock, FaFileAlt, FaTools, FaHome, FaLeaf, FaSun,
  FaBars, FaTimes, FaChevronDown, FaPhone, FaEnvelope,
} from "react-icons/fa";
import { MdOutlineElectricBolt } from "react-icons/md";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [tipoVivienda, setTipoVivienda] = useState("");
  const [tieneAttico, setTieneAttico] = useState("");

  const faqs = [
    {
      q: "¿El aislamiento es realmente completamente gratuito?",
      a: "Sí. Bajo el Real Decreto 36/2023, las empresas energéticas están legalmente obligadas a financiar medidas de eficiencia energética. Tu aislamiento de buhardilla es pagado 100% por estas empresas  no pagas absolutamente nada.",
    },
    {
      q: "¿Quién paga la obra?",
      a: "Las grandes empresas energéticas (Iberdrola, Endesa, Naturgy, etc.) financian la instalación a cambio de Certificados de Ahorro Energético (CAE), que cuentan para sus objetivos nacionales de ahorro obligatorio.",
    },
    {
      q: "¿Cuánto tiempo dura la instalación?",
      a: "La mayoría de trabajos de aislamiento de buhardilla se completan en un solo día. Nuestros técnicos certificados utilizan lana soplada o enrollada de roca/vidrio para obtener resultados rápidos y limpios.",
    },
    {
      q: "¿Qué zonas cubrís?",
      a: "Operamos en toda España. Introduzca su código postal en el formulario para confirmar la disponibilidad en su zona.",
    },
    {
      q: "¿Necesito ser propietario del inmueble?",
      a: "Sí, la solicitud debe realizarla el propietario registrado del inmueble o un representante autorizado.",
    },
  ];

  const beneficios = [
    { icon: <FaClock className="w-6 h-6" />, title: "Ahorro Inmediato", desc: "Reduzca sus facturas de calefacción y refrigeración hasta un 30% desde el primer mes." },
    { icon: <FaFileAlt className="w-6 h-6" />, title: "Gestión Integral", desc: "Nos encargamos de toda la burocracia administrativa y los certificados por usted." },
    { icon: <FaTools className="w-6 h-6" />, title: "Instalación Profesional", desc: "Técnicos certificados utilizando lana de roca o vidrio soplada de alta calidad." },
    { icon: <FaHome className="w-6 h-6" />, title: "Mayor Valor Inmobiliario", desc: "Una mejor calificación energética aumenta el valor de mercado de su vivienda." },
    { icon: <FaLeaf className="w-6 h-6" />, title: "Auditado y Garantizado", desc: "Cada instalación es verificada por inspectores acreditados bajo normas técnicas oficiales." },
    { icon: <FaSun className="w-6 h-6" />, title: "Confort Todo el Año", desc: "Calor en invierno y fresco en verano  el aislamiento funciona en ambos sentidos." },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ colorScheme: "light" }}>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center">
              <MdOutlineElectricBolt className="text-white text-lg" />
            </div>
            <span className="font-bold text-gray-900 text-lg">Aisla Global</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#como-funciona" className="hover:text-green-600 transition-colors">¿Cómo funciona?</a>
            <a href="#ventajas" className="hover:text-green-600 transition-colors">Ventajas</a>
            <a href="#galeria" className="hover:text-green-600 transition-colors">Nuestros trabajos</a>
            <a href="#faq" className="hover:text-green-600 transition-colors">Preguntas frecuentes</a>
          </div>
          <a href="#hero-form" className="hidden md:inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors">
            Simulación gratis <FaArrowRight className="text-xs" />
          </a>
          <button className="md:hidden p-2 text-gray-700 rounded-lg hover:bg-gray-100" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
            {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2 flex flex-col gap-3">
            {[
              { href: "#como-funciona", label: "¿Cómo funciona?" },
              { href: "#ventajas", label: "Ventajas" },
              { href: "#galeria", label: "Nuestros trabajos" },
              { href: "#faq", label: "Preguntas frecuentes" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 font-medium py-2 hover:text-green-600" onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#hero-form" className="bg-green-600 text-white text-center py-3 rounded-full font-semibold hover:bg-green-700 transition-colors" onClick={() => setMenuOpen(false)}>
              Simulación gratis
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="hero-form" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
        <Image src="/img8.jpeg" alt="Buhardilla aislada" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/92 via-green-900/82 to-green-900/55" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-14 w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
                <FaShieldAlt /> Real Decreto 36/2023  Aprobado Oficialmente
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
                Aislamiento de Buhardilla{" "}
                <span className="text-yellow-300">100% Subvencionado</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold opacity-90">(Coste 0€ para usted)</span>
              </h1>
              <p className="text-green-100 text-base sm:text-lg mb-7 leading-relaxed">
                <strong className="text-white">Reduzca sus facturas hasta un 30%.</strong> Financiado íntegramente por los Certificados de Ahorro Energético (CAE)  sin préstamos, sin esperar subvenciones.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                <span className="bg-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/25 backdrop-blur-sm">Certificados de Ahorro Energético (CAE)</span>
                <span className="bg-white/15 text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/25 backdrop-blur-sm">Fondo Nacional de Eficiencia Energética</span>
              </div>
              <div className="space-y-2 mb-8">
                {[
                  "Verificación de elegibilidad gratuita  sin compromiso",
                  "Resultados en 24 horas",
                  "Equipo de instalación certificado",
                  "Toda la burocracia gestionada por nosotros",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-green-100 text-sm justify-center md:justify-start">
                    <FaCheckCircle className="text-yellow-300 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT  FORM same as screenshot */}
            <div className="bg-white rounded-2xl shadow-2xl w-full overflow-hidden">
              {/* Form header */}
              <div className="px-6 pt-6 pb-4 text-center border-b border-gray-100">
                <h2 className="text-xl sm:text-2xl font-extrabold" style={{ color: "#1a2456" }}>
                  Simulación gratuita
                </h2>
                <p className="text-sm" style={{ color: "#1a2456" }}>
                  de <span className="font-semibold">aislamiento gratuito</span>
                </p>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                  Comprueba si puedes <strong>acceder al aislamiento subvencionado.</strong><br />
                  Rellena el formulario y <strong>recibe tu estimación gratuita,</strong> sin compromiso.
                </p>
              </div>

              <div className="px-6 py-5">
                <form className="space-y-3">
                  {/* Nombre + Apellido */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Nombre <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Apellido <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300" />
                    </div>
                  </div>

                  {/* Correo + Teléfono */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Correo <span className="text-red-500">*</span></label>
                      <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Teléfono <span className="text-red-500">*</span></label>
                      <div className="flex gap-1">
                        <select className="border border-gray-300 rounded px-2 py-2 text-xs text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 w-16">
                          <option>PK</option>
                          <option>ES</option>
                          <option>FR</option>
                          <option>DE</option>
                        </select>
                        <input type="tel" placeholder="+92" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 min-w-0" />
                      </div>
                    </div>
                  </div>

                  {/* Código postal + Ciudad */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Código postal <span className="text-red-500">*</span></label>
                      <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">Ciudad</label>
                      <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-500" />
                    </div>
                  </div>

                  {/* Tipo vivienda + Año construcción */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2">¿Qué tipo de vivienda tienes? <span className="text-red-500">*</span></label>
                      <div className="space-y-1.5">
                        {["Casa", "Piso"].map((op) => (
                          <label key={op} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                            <input type="radio" name="tipo" value={op} checked={tipoVivienda === op} onChange={() => setTipoVivienda(op)} className="accent-green-600" />
                            {op}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2">Año de construcción <span className="text-red-500">*</span></label>
                      <div className="space-y-1.5">
                        {["Antes de 2005", "Después de 2005"].map((op) => (
                          <label key={op} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                            <input type="radio" name="anio" value={op} className="accent-green-600" />
                            {op}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tiene ático + Superficie */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2">¿Tu vivienda tiene buhardilla (ático)? <span className="text-red-500">*</span></label>
                      <div className="space-y-1.5">
                        {["Sí", "No"].map((op) => (
                          <label key={op} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                            <input type="radio" name="atico" value={op} checked={tieneAttico === op} onChange={() => setTieneAttico(op)} className="accent-green-600" />
                            {op}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2">¿Cuál es la superficie habitable de tu vivienda (en m²)? <span className="text-red-500">*</span></label>
                      <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>51 - 100 m²</option>
                        <option>Menos de 50 m²</option>
                        <option>101 - 150 m²</option>
                        <option>Más de 150 m²</option>
                      </select>
                    </div>
                  </div>

                  {/* Privacy text */}
                  <p className="text-xs text-gray-400 leading-relaxed pt-1">
                    Aisla Global se compromete a proteger y respetar su privacidad. Solo utilizaremos sus datos personales para ponernos en contacto con usted en relación con la presente solicitud sobre el servicio de aislamiento de buhardillas. Al hacer clic en «Enviar» a continuación, autoriza a la empresa Aisla Global a almacenar y tratar sus datos personales.
                  </p>

                  {/* reCAPTCHA placeholder */}
                  <div className="flex items-center gap-3 border border-gray-200 rounded p-3 bg-gray-50 w-fit">
                    <input type="checkbox" className="w-5 h-5 accent-green-600" />
                    <span className="text-xs text-gray-600">No soy un robot</span>
                    <div className="ml-2 text-right">
                      <div className="text-xs text-gray-400">reCAPTCHA</div>
                      <div className="text-xs text-gray-300">Privacidad · Términos</div>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full text-white font-bold py-3.5 rounded-lg text-sm flex items-center justify-center gap-2 transition-all"
                    style={{ backgroundColor: "#f97316" }}
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-white border-y border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "+5.000", label: "Hogares completados" },
              { num: "100%", label: "Financiado por energéticas" },
              { num: "0€", label: "Coste para el propietario" },
              { num: "30%", label: "Reducción media en facturas" },
            ].map((s) => (
              <div key={s.label} className="py-2">
                <p className="text-2xl sm:text-3xl font-extrabold text-green-700">{s.num}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section id="como-funciona" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-green-600 text-xs sm:text-sm font-semibold uppercase tracking-widest">Explicación Técnica</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              ¿Cómo es posible que mi aislamiento sea{" "}
              <span className="text-green-600">100% GRATUITO?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="bg-white border border-green-100 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="font-bold text-green-800 text-lg mb-4">Real Decreto 36/2023</h3>
              <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
                {[
                  { title: "Financiación Directa", desc: "Las empresas energéticas pagan el 100% de su instalación para cumplir con los objetivos de ahorro estatales del Real Decreto 36/2023." },
                  { title: "Sin Desembolso", desc: "Usted no paga nada ni espera subvenciones. Cobramos directamente de las energéticas a cambio del ahorro generado (CAE: Certificados de Ahorro Energético)." },
                  { title: "Garantía Oficial", desc: "Obra auditada por verificadores acreditados y conforme al Código Técnico de la Edificación." },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <FaCheckCircle className="text-green-500 mt-0.5 shrink-0 text-base" />
                    <span><strong>{item.title}:</strong> {item.desc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-green-100">
                <p className="text-green-800 font-bold text-sm flex items-center gap-2">
                  <MdOutlineElectricBolt className="text-green-600" />
                  Resultado: Ahorro del 30% en sus facturas con coste 0€.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { n: "1", text: "Usted solicita el aislamiento.", highlight: false },
                { n: "2", text: "Realizamos la obra con materiales certificados (lana de roca/vidrio).", highlight: false },
                { n: "3", text: "Las empresas energéticas financian el coste total para cumplir sus objetivos estatales.", highlight: false },
                { n: "=", text: "Resultado: Mejora el confort de su hogar y reduce sus facturas sin pagar ni un céntimo.", highlight: true },
              ].map((step) => (
                <div key={step.n} className={`flex items-start gap-4 p-4 rounded-xl ${step.highlight ? "bg-green-600" : "bg-white border border-gray-100 shadow-sm"}`}>
                  <span className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${step.highlight ? "bg-white text-green-600" : "bg-green-600 text-white"}`}>
                    {step.n}
                  </span>
                  <p className={`text-sm leading-relaxed pt-1.5 ${step.highlight ? "text-white font-semibold" : "text-gray-700"}`}>{step.text}</p>
                </div>
              ))}
              <div className="pt-2">
                <a href="#hero-form" className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-green-700 transition-colors text-sm w-full justify-center sm:w-auto">
                  Recibir mi valoración gratuita <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALERÍA ── */}
      <section id="galeria" className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-green-600 text-xs sm:text-sm font-semibold uppercase tracking-widest">Proyectos Reales</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Vea la Diferencia</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
              Fotos reales de antes y después de obras completadas  hogares reales, resultados reales.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-6">
            {[
              { src: "/img1.jpeg", label: "Antes y Después  Proyecto 1" },
              { src: "/img2.jpeg", label: "Antes y Después  Proyecto 2" },
              { src: "/img3.jpeg", label: "Antes y Después  Proyecto 3" },
            ].map((img) => (
              <div key={img.src} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                <div className="relative h-52 sm:h-56">
                  <Image src={img.src} alt={img.label} fill className="object-cover" />
                </div>
                <div className="bg-white px-4 py-3">
                  <p className="text-sm font-medium text-gray-700">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {["/img4.jpeg", "/img5.jpeg", "/img6.jpeg", "/img7.jpeg", "/img8.jpeg"].map((src, i) => (
              <div key={src} className="rounded-xl overflow-hidden shadow aspect-square relative">
                <Image src={src} alt={`Obra de aislamiento ${i + 4}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VENTAJAS ── */}
      <section id="ventajas" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-green-600 text-xs sm:text-sm font-semibold uppercase tracking-widest">Por qué ahora</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              ¿Por qué aislar su buhardilla <span className="text-green-600">hoy?</span>
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
              Cumplimiento estricto del CTE (Código Técnico de la Edificación) y el compromiso europeo por la descarbonización.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {beneficios.map((b) => (
              <div key={b.title} className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-green-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-4">{b.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIO TODO INCLUIDO ── */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">
                <span style={{ color: "#4ade80" }}>Servicio </span>
                <span style={{ color: "#1a2456" }}>Todo Incluido</span>
              </h2>
              <div className="space-y-5">
                {[
                  { n: "1", title: "Auditoría Técnica", desc: "Evaluación del potencial de ahorro bajo el RD 36/2023.", descGreen: false },
                  { n: "2", title: "Gestión CAE:", desc: "Financiación directa al 100% con las energéticas.", descGreen: true },
                  { n: "3", title: "Instalación,", desc: "mano de obra y materiales incluidos sin coste para el cliente.", descGreen: true },
                  { n: "4", title: "Certificados", desc: "Validación oficial del ahorro por entidad externa acreditada.", descGreen: false },
                ].map((item) => (
                  <div key={item.n} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 mt-0.5" style={{ backgroundColor: "#e8f0fe", color: "#1a2456" }}>
                      {item.n}
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: "#1a2456" }}>{item.title}</p>
                      <p className="text-sm mt-0.5" style={{ color: item.descGreen ? "#22c55e" : "#6b7280" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative flex items-center justify-center mb-4">
                <div className="absolute w-36 h-36 rounded-full" style={{ background: "radial-gradient(circle, rgba(74,222,128,0.35) 0%, transparent 70%)" }} />
                <span className="relative font-extrabold" style={{ fontSize: "5rem", color: "#22c55e", lineHeight: 1 }}>0€</span>
              </div>
              <h3 className="font-extrabold text-lg sm:text-xl mb-2" style={{ color: "#1a2456" }}>¡Aislamiento 100% Subvencionado!</h3>
              <p className="text-gray-500 text-sm mb-6 max-w-xs leading-relaxed">Sin pagos anticipados. Sin letra pequeña. Financiado por el sistema CAE sin desembolso.</p>
              <a href="#hero-form" className="inline-flex items-center justify-center gap-3 text-white font-bold px-8 py-4 rounded-2xl text-sm w-full max-w-xs transition-all" style={{ backgroundColor: "#1e3a6e", boxShadow: "0 6px 24px 0 rgba(74,222,128,0.3)" }}>
                Solicitar aislamiento a €0 <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 PASOS ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3" style={{ color: "#1a2456" }}>
            ¿Tiene un proyecto de{" "}
            <span style={{ color: "#4ade80" }}>renovación?</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-14 max-w-lg mx-auto leading-relaxed">
            No pierda las ayudas que pueden financiar su proyecto.<br />
            Le responderemos rápidamente tras revisar su solicitud.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 mb-14">
            {[
              { n: "1", title: "Indico mis necesidades", desc: "Contáctenos o rellene el formulario online para explicarnos su proyecto." },
              { n: "2", title: "Recibo una oferta personalizada", desc: "Un experto analiza su situación y le facilita un presupuesto gratuito adaptado a sus necesidades." },
              { n: "3", title: "Nosotros nos encargamos de todo", desc: "Tramitación administrativa y financiera, validación técnica e instalación del aislamiento. Sin complicaciones." },
            ].map((step) => (
              <div key={step.n} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-extrabold mb-5 shadow-md" style={{ backgroundColor: "#22c55e" }}>
                  {step.n}
                </div>
                <h3 className="font-extrabold text-base sm:text-lg mb-2" style={{ color: "#1a2456" }}>{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
          <a href="#hero-form" className="inline-flex items-center justify-center gap-3 text-white font-bold px-10 py-4 rounded-2xl text-base w-full sm:max-w-sm transition-all" style={{ backgroundColor: "#1e3a6e", boxShadow: "0 8px 32px 0 rgba(74,222,128,0.35)" }}>
            Simulación gratuita <FaArrowRight />
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-green-600 text-xs sm:text-sm font-semibold uppercase tracking-widest">Preguntas Frecuentes</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-2">Resolvemos sus dudas</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                <button className="w-full px-5 py-4 text-left font-semibold text-gray-800 text-sm flex justify-between items-center gap-3 hover:bg-gray-50 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <FaChevronDown className={`shrink-0 text-gray-400 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-12 bg-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">¿Listo para ahorrar hasta un 30% en sus facturas?</h2>
          <p className="text-green-100 text-sm sm:text-base mb-6">Rellene el formulario arriba  verificación gratuita, sin compromiso, resultados en 24 horas.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+34900000000" className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-3.5 rounded-full hover:bg-green-50 transition-colors text-sm shadow-lg">
              <FaPhone /> Llámenos: +34 900 000 000
            </a>
            <a href="mailto:info@aislaglobal.es" className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm">
              <FaEnvelope /> info@aislaglobal.es
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
              <MdOutlineElectricBolt className="text-white text-base" />
            </div>
            <span className="text-white font-semibold">Aisla Global</span>
          </div>
          <p className="text-xs max-w-sm">
            Cumple con el Real Decreto 36/2023 · Código Técnico de la Edificación (CTE) · Certificados de Ahorro Energético (CAE)
          </p>
          <p className="text-xs">&copy; {new Date().getFullYear()} Aisla Global. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
