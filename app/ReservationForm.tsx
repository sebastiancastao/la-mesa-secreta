"use client";

import { type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "573001112233";

export function ReservationForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const message = [
      "Hola, quiero reservar en La Mesa Secreta.",
      `Fecha: ${data.get("date")}`,
      `Personas: ${data.get("guests")}`,
      `Turno: ${data.get("shift")}`,
      `Nombre: ${data.get("name")}`,
      `Celular: ${data.get("phone")}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div className="reservation-form__head reservation-form__wide">
        <h3>Solicitud de reserva</h3>
        <p>Se abrirá WhatsApp con tu solicitud lista para enviar.</p>
      </div>
      <label>
        Fecha
        <input name="date" type="date" required />
      </label>
      <label>
        Personas
        <select name="guests" defaultValue="2 personas">
          <option>2 personas</option>
          <option>3 personas</option>
          <option>4 personas</option>
          <option>5 personas</option>
          <option>6 o más</option>
        </select>
      </label>
      <label>
        Nombre
        <input name="name" type="text" placeholder="Tu nombre" autoComplete="name" required />
      </label>
      <label>
        Celular
        <input name="phone" type="tel" placeholder="+57" autoComplete="tel" required />
      </label>
      <label className="reservation-form__wide">
        Turno
        <select name="shift" defaultValue="Primer turno, atardecer">
          <option>Primer turno, atardecer</option>
          <option>Segundo turno, luces encendidas</option>
          <option>Cena privada</option>
        </select>
      </label>
      <button className="button button--dark reservation-form__wide" type="submit">
        Solicitar reserva
        <ArrowRight aria-hidden="true" size={16} strokeWidth={1.5} />
      </button>
    </form>
  );
}
