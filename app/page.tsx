import Image from "next/image";
import {
  ArrowRight,
  AtSign,
  Download,
  Flame,
  Leaf,
  MapPin,
  MessageCircle,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { ReservationForm } from "./ReservationForm";

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

type GalleryImage = {
  src: string;
  alt: string;
  label: string;
  variant: "garden" | "night" | "food" | "day";
};

const navLinks = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#fotos", label: "Fotos" },
  { href: "#menu", label: "Menú" },
  { href: "#atardeceres", label: "Atardeceres" },
  { href: "#visitanos", label: "Visítanos" },
];

const features: Feature[] = [
  {
    icon: Leaf,
    title: "De la huerta",
    text: "Hortalizas, hierbas y frutas de productores del oriente antioqueño, elegidas por temporada.",
  },
  {
    icon: Flame,
    title: "Fuego lento",
    text: "Brasas, ahumados y fondos de cocción larga con técnica de autor y memoria campesina.",
  },
  {
    icon: Sparkles,
    title: "Bajo las luces",
    text: "Terraza al aire libre, jardín y corredores con vista a las montañas para una cena íntima.",
  },
];

const menu = [
  {
    category: "Para empezar",
    items: [
      {
        name: "Trucha ahumada en casa",
        detail: "Suero, uchuvas encurtidas, tostadas de maíz",
        price: "$38.000",
      },
      {
        name: "Arepa de maíz pelao",
        detail: "Chicharrón confitado, hogao tatemado",
        price: "$32.000",
      },
      {
        name: "Crema de ahuyama",
        detail: "Queso campesino, semillas tostadas, aceite de cilantro",
        price: "$29.000",
      },
    ],
  },
  {
    category: "Fuertes y postres",
    items: [
      {
        name: "Lomo madurado a la brasa",
        detail: "Papa criolla, chimichurri de hierbas de la huerta",
        price: "$72.000",
      },
      {
        name: "Pollo campesino de cocción lenta",
        detail: "Fondo de maíz, plátano maduro, cebolla ocañera",
        price: "$58.000",
      },
      {
        name: "Brevas y arequipe quemado",
        detail: "Helado de queso, crocante de panela",
        price: "$28.000",
      },
    ],
  },
];

const galleryImages: GalleryImage[] = [
  {
    src: "/images/casa-nocturna-jardin.png",
    alt: "Casa campestre de La Mesa Secreta iluminada de noche bajo guirnaldas",
    label: "Jardín encendido",
    variant: "garden",
  },
  {
    src: "/images/terraza-luces-noche.png",
    alt: "Terraza nocturna con sombrilla roja, plantas y luces cálidas",
    label: "Terraza bajo luces",
    variant: "night",
  },
  {
    src: "/images/paella-mariscos.png",
    alt: "Paella de mariscos servida en sartén sobre una mesa de madera",
    label: "Cocina para compartir",
    variant: "food",
  },
  {
    src: "/images/terraza-campestre-dia.png",
    alt: "Mesa campestre con sombrilla y vista verde sobre Rionegro",
    label: "Vista de día",
    variant: "day",
  },
];

const WHATSAPP_URL = "https://wa.me/573104204077";
const WHATSAPP_DISPLAY = "+57 310 420 4077";

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" aria-label="La Mesa Secreta, inicio">
        La Mesa Secreta
      </a>
      <nav className="site-nav" aria-label="Principal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="button button--outline header-cta" href="#reservas">
        Reservar
      </a>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="inicio">
          <Image
            className="hero__image"
            src="/images/terraza-luces-noche.png"
            alt="Terraza de La Mesa Secreta de noche, con guirnaldas de luz y corredor verde"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="hero__shade" />
          <div className="container hero__content">
            <div className="hero__text">
              <p className="eyebrow">Restaurante campestre · Rionegro, Antioquia</p>
              <h1>
                Una mesa escondida <em>entre montañas.</em>
              </h1>
              <p className="hero__lead">
                Cocina de autor con producto del oriente antioqueño, servida bajo
                guirnaldas de luz en una casa campesina de corredores verdes.
              </p>
              <div className="hero__actions">
                <a className="button button--solid" href="#reservas">
                  Reservar mesa
                  <ArrowRight aria-hidden="true" size={16} strokeWidth={1.5} />
                </a>
                <a className="text-link" href="#menu">
                  Ver el menú
                </a>
              </div>
              <dl className="hero__facts">
                <div>
                  <dt>Jueves a domingo</dt>
                  <dd>4 p.m. a 11 p.m.</dd>
                </div>
                <div>
                  <dt>Solo con reserva</dt>
                  <dd>12 mesas por noche</dd>
                </div>
              </dl>
            </div>
          </div>
          <a className="hero__scroll" href="#experiencia">
            Descubre
          </a>
        </section>

        <section className="experience section-band" id="experiencia">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">La experiencia</p>
                <h2>
                  Lo secreto no es el lugar. <em>Es cómo se vive.</em>
                </h2>
              </div>
              <p>
                Pocas mesas, una cocina abierta al campo y un menú que cambia con
                lo que llega de las fincas vecinas cada semana.
              </p>
            </div>
            <div className="feature-grid">
              {features.map((feature, index) => (
                <article className="feature" key={feature.title}>
                  <div className="feature__top">
                    <span className="feature__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <feature.icon aria-hidden="true" size={26} strokeWidth={1.2} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="photo-gallery" id="fotos" aria-label="Fotos de La Mesa Secreta">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">La casa</p>
                <h2>
                  Rincones para llegar temprano. <em>Motivos para quedarse.</em>
                </h2>
              </div>
              <p>
                La casa, la terraza y la cocina se viven distinto a cada hora:
                de la luz verde del campo a las guirnaldas encendidas de la noche.
              </p>
            </div>
            <div className="gallery-grid">
              {galleryImages.map((image) => (
                <figure className={`gallery__item gallery__item--${image.variant}`} key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                  <figcaption>{image.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="menu-section" id="menu">
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">Menú de temporada</p>
              <h2>Lo que llega a la mesa esta semana</h2>
              <p>
                Una carta corta, cambiante y pensada para compartir al ritmo del
                atardecer.
              </p>
            </div>
            <div className="menu-grid">
              {menu.map((group) => (
                <section className="menu-column" key={group.category}>
                  <h3>{group.category}</h3>
                  {group.items.map((item) => (
                    <article className="menu-item" key={item.name}>
                      <div className="menu-item__line">
                        <h4>{item.name}</h4>
                        <span className="menu-item__leader" aria-hidden="true" />
                        <span className="menu-item__price">{item.price}</span>
                      </div>
                      <p>{item.detail}</p>
                    </article>
                  ))}
                </section>
              ))}
            </div>
            <div className="menu-note">
              <p>Menú degustación de 6 tiempos · maridaje opcional</p>
              <a className="button button--outline" href="#reservas">
                Descargar carta
                <Download aria-hidden="true" size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </section>

        <section className="sunset" id="atardeceres">
          <div className="sunset__media">
            <Image
              src="/images/terraza-campestre-dia.png"
              alt="Mesa campestre con sombrilla y vista a las montañas desde La Mesa Secreta"
              fill
              sizes="(max-width: 1100px) 100vw, 50vw"
            />
          </div>
          <div className="sunset__copy">
            <p className="eyebrow">La hora dorada</p>
            <h2>
              Llega antes del atardecer. <em>Quédate hasta que se enciendan las luces.</em>
            </h2>
            <p>
              Desde la terraza el cielo se incendia sobre el valle de Rionegro.
              Recomendamos reservar el primer turno para ver la puesta de sol con
              una copa en la mano.
            </p>
            <dl className="time-grid">
              <div>
                <dt>Primer turno</dt>
                <dd>4:30 p.m.</dd>
              </div>
              <div>
                <dt>Segundo turno</dt>
                <dd>7:30 p.m.</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="reservations" id="reservas">
          <div className="container reservation-grid">
            <div className="reservation-copy">
              <p className="eyebrow">Reservas</p>
              <h2>
                Guarda tu lugar <em>en la mesa.</em>
              </h2>
              <p>
                Atendemos solo con reserva previa. Para grupos de más de 6
                personas, celebraciones o cenas privadas, escríbenos por WhatsApp.
              </p>
              <a className="button button--ghost" href={WHATSAPP_URL}>
                <MessageCircle aria-hidden="true" size={17} strokeWidth={1.5} />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </div>
            <ReservationForm />
          </div>
        </section>
      </main>

      <footer className="footer" id="visitanos">
        <div className="container footer__grid">
          <div>
            <p className="footer__brand">La Mesa Secreta</p>
            <p className="footer__tagline">Cocina campestre de autor en el oriente antioqueño.</p>
          </div>
          <div>
            <span>Cómo llegar</span>
            <p>Vereda El Tablazo, Rionegro</p>
            <a href="#visitanos">
              <MapPin aria-hidden="true" size={15} strokeWidth={1.5} />
              Abrir en Google Maps
            </a>
          </div>
          <div>
            <span>Horario</span>
            <p>Jueves a domingo</p>
            <p>4 p.m. a 11 p.m.</p>
          </div>
          <div>
            <span>Síguenos</span>
            <a href="#visitanos">
              <AtSign aria-hidden="true" size={15} strokeWidth={1.5} />
              @lamesasecreta
            </a>
            <a href={WHATSAPP_URL}>
              <MessageCircle aria-hidden="true" size={15} strokeWidth={1.5} />
              WhatsApp
            </a>
          </div>
        </div>
        <div className="container footer__bottom">
          <span>© 2026 La Mesa Secreta</span>
          <span>Rionegro · Antioquia · Colombia</span>
        </div>
      </footer>
    </>
  );
}
