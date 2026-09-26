import Image from "next/image";
import {
  ArrowRight,
  AtSign,
  Clock3,
  Download,
  Flame,
  Leaf,
  MapPin,
  MessageCircle,
  Sparkles,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { ReservationForm } from "./ReservationForm";

type Feature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

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

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="18.5" />
      <circle cx="20" cy="20" r="15" className="brand-mark__soft" />
      <path d="M13 25c3-1 5-3 7-7M27 25c-3-1-5-3-7-7M20 18v-6" />
      <circle cx="20" cy="11" r="1.4" className="brand-mark__dot" />
    </svg>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="La Mesa Secreta, inicio">
        <BrandMark />
        <span>La Mesa Secreta</span>
      </a>
      <nav className="site-nav" aria-label="Principal">
        <a href="#experiencia">Experiencia</a>
        <a href="#menu">Menú</a>
        <a href="#atardeceres">Atardeceres</a>
        <a href="#visitanos">Visítanos</a>
      </nav>
      <a className="button button--outline header-cta" href="#reservas">
        Reservar
        <ArrowRight aria-hidden="true" size={16} />
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
            src="/images/terraza-noche.jpg"
            alt="Terraza de La Mesa Secreta de noche, con guirnaldas de luz y corredor verde"
            fill
            priority
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
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
                <a className="text-link" href="#menu">
                  Ver el menú
                  <ArrowRight aria-hidden="true" size={18} />
                </a>
              </div>
              <div className="hero__facts" aria-label="Datos principales">
                <div>
                  <Clock3 aria-hidden="true" size={20} />
                  <span>Jueves a domingo</span>
                  <strong>4 p.m. a 11 p.m.</strong>
                </div>
                <div>
                  <UsersRound aria-hidden="true" size={20} />
                  <span>Solo con reserva</span>
                  <strong>12 mesas por noche</strong>
                </div>
              </div>
            </div>
            <div className="hero__seal" aria-hidden="true">
              <span>Cenas bajo las luces</span>
              <small>Desde las 6 p.m.</small>
            </div>
          </div>
        </section>

        <section className="experience section-band" id="experiencia">
          <div className="container">
            <div className="section-heading section-heading--split">
              <h2>
                Lo secreto no es el lugar. <em>Es cómo se vive.</em>
              </h2>
              <p>
                Pocas mesas, una cocina abierta al campo y un menú que cambia con
                lo que llega de las fincas vecinas cada semana.
              </p>
            </div>
            <div className="feature-grid">
              {features.map((feature) => (
                <article className="feature" key={feature.title}>
                  <feature.icon aria-hidden="true" size={38} strokeWidth={1.4} />
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="menu-section" id="menu">
          <div className="container menu-container">
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
                      <div>
                        <h4>{item.name}</h4>
                        <p>{item.detail}</p>
                      </div>
                      <span>{item.price}</span>
                    </article>
                  ))}
                </section>
              ))}
            </div>
            <div className="menu-note">
              <a className="button button--outline" href="#reservas">
                Descargar carta
                <Download aria-hidden="true" size={17} />
              </a>
              <p>Menú degustación de 6 tiempos · maridaje opcional</p>
            </div>
          </div>
        </section>

        <section className="sunset" id="atardeceres">
          <div className="sunset__media">
            <Image
              src="/images/atardecer-terraza.jpg"
              alt="Atardecer sobre las montañas visto desde la terraza de La Mesa Secreta"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
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
            <div className="time-grid">
              <div>
                <span>Primer turno</span>
                <strong>4:30 p.m.</strong>
              </div>
              <div>
                <span>Segundo turno</span>
                <strong>7:30 p.m.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="reservations" id="reservas">
          <div className="container reservation-grid">
            <div className="reservation-copy">
              <p className="eyebrow">Reservas</p>
              <h2>Guarda tu lugar en la mesa.</h2>
              <p>
                Atendemos solo con reserva previa. Para grupos de más de 6
                personas, celebraciones o cenas privadas, escríbenos por WhatsApp.
              </p>
              <a className="button button--ghost" href="https://wa.me/573001112233">
                <MessageCircle aria-hidden="true" size={19} />
                WhatsApp +57 300 111 2233
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
            <p className="eyebrow">Rionegro · Colombia</p>
          </div>
          <div>
            <span>Cómo llegar</span>
            <p>Vereda El Tablazo, Rionegro</p>
            <a href="#visitanos">
              <MapPin aria-hidden="true" size={16} />
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
              <AtSign aria-hidden="true" size={16} />
              @lamesasecreta
            </a>
            <a href="https://wa.me/573001112233">
              <MessageCircle aria-hidden="true" size={16} />
              WhatsApp
            </a>
          </div>
        </div>
        <div className="container footer__bottom">
          <span>© 2026 La Mesa Secreta</span>
          <span>Cocina campestre de autor</span>
        </div>
      </footer>
    </>
  );
}
