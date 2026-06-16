import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check, X, Scale, MessageCircle, ListChecks, Shield, Clock,
  BookOpen, Calendar, FileText, MessageSquare, Sparkles, HeartHandshake,
  Plus, Minus, Lock, Star, Quote, Gift,
} from "lucide-react";
import heroImg from "@/assets/hero-mother-child.jpg";
import phoneImg from "@/assets/phone-table.jpg";
import familyImg from "@/assets/closing-family.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "7 días sin peleas de pantallas — Ebook para madres" },
      { name: "description", content: "El método E.C.E. para que tu hijo de 5-9 años use menos pantallas en 7 días, sin gritos ni culpa. Hecho por y para madres trabajadoras." },
      { property: "og:title", content: "7 días sin peleas de pantallas" },
      { property: "og:description", content: "Método práctico y cálido para recuperar la paz en casa." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: SalesPage,
});

function CTA({ children = "Quiero mi ejemplar — $12.99", size = "lg" }: { children?: React.ReactNode; size?: "lg" | "md" }) {
  return (
    <a
      href="https://pay.hotmart.com/G106328685V"
      className="btn-cta btn-cta-hover"
      style={{
        minWidth: size === "lg" ? 280 : 240,
        minHeight: size === "lg" ? 64 : 56,
        fontSize: size === "lg" ? "1.0625rem" : "1rem",
      }}
    >
      <Lock size={18} strokeWidth={2.2} />
      {children}
    </a>
  );
}

function SectionHeading({ kicker, title, children }: { kicker?: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {kicker && (
        <div className="inline-block uppercase tracking-[0.18em] text-xs font-semibold mb-4" style={{ color: "var(--gold-deep)" }}>
          {kicker}
        </div>
      )}
      <h2 className="font-display font-bold text-[28px] md:text-[36px] mb-4">{title}</h2>
      {children && <p className="text-[17px]" style={{ color: "var(--text-secondary)" }}>{children}</p>}
    </div>
  );
}

function SalesPage() {
  return (
    <div className="min-h-screen pb-24 md:pb-0" style={{ background: "#fff" }}>
      {/* HERO */}
      <header
        className="section-y"
        style={{ background: "linear-gradient(180deg, var(--cream) 0%, #ffffff 100%)" }}
      >
        <div className="container-page grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: "var(--cream-dark)", color: "var(--gold-deep)" }}>
              <Sparkles size={14} /> Para madres que quieren paz, no más peleas
            </div>
            <h1 className="font-display font-bold text-[36px] md:text-[48px] leading-[1.1] mb-5">
              En{" "}
              <span style={{ color: "var(--gold-deep)" }}>7 días</span>, tu hijo verá menos pantallas{" "}
              <span style={{ color: "var(--gold-deep)" }}>sin peleas</span>, sin gritos y sin culpa.
            </h1>
            <p className="text-[18px] md:text-[20px] mb-8" style={{ color: "var(--text-secondary)" }}>
              Un ebook claro y cálido para madres trabajadoras con hijos de 5 a 9 años.
              El método E.C.E. te devuelve la calma en casa, paso a paso.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <CTA />
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <Lock size={16} /> Pago seguro · Garantía 30 días
              </div>
            </div>
            {/* <div className="flex items-center gap-3 mt-7">
              <div className="flex">
                {[0,1,2,3,4].map(i => <Star key={i} size={18} fill="var(--gold)" stroke="var(--gold)" />)}
              </div>
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>              </span>
            </div> */}
          </div>
          <div className="relative fade-up">
            <img
              src={heroImg}
              alt="Madre y su hijo jugando con juguetes físicos en un living acogedor"
              className="w-full h-auto rounded-3xl shadow-card"
              style={{ boxShadow: "var(--shadow-card)" }}
              width={1280}
              height={896}
            />
            <div className="hidden md:flex absolute -bottom-6 -left-6 items-center gap-3 bg-white rounded-2xl px-4 py-3"
              style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="w-10 h-10 rounded-full grid place-items-center" style={{ background: "color-mix(in oklab, var(--success) 18%, white)" }}>
                <Check size={20} color="var(--success)" />
              </div>
              <div>
                <div className="text-sm font-semibold">Resultados en 7 días</div>
                <div className="text-xs" style={{ color: "var(--text-secondary)" }}>Sin apps. Sin castigos.</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HISTORIA */}
      <section className="section-y" style={{ background: "#fff" }}>
        <div className="container-page">
          <div className="max-w-[700px] mx-auto text-center">
            <SectionHeading kicker="Una carta para ti" title="No estás sola, mamá." />
            <p className="text-[17px] mb-5" style={{ color: "var(--foreground)" }}>
              Llegas del trabajo agotada. Quieres conectar con tu hijo, pero la tablet ya está encendida.
              Le pides que la apague — empieza el llanto, la negociación, el grito. Después, la culpa.
            </p>
            <p className="text-[17px] mb-5" style={{ color: "var(--text-secondary)" }}>
              Te has prometido mil veces que mañana será distinto. Y mañana se repite.
            </p>
            <p className="text-[20px] md:text-[22px] italic font-medium my-8" style={{ color: "var(--gold-deep)", fontFamily: "var(--font-display)" }}>
              "No estás sola, Pao."
            </p>
            <p className="text-[17px]" style={{ color: "var(--foreground)" }}>
              Yo viví esto durante años. Hasta que entendí que el problema no era mi hijo, ni yo.
              Era que nadie nos había enseñado <em>cómo</em>. Por eso escribí este libro.
            </p>
            <img
              src={phoneImg}
              alt="Celular sobre una mesa de madera, en calma"
              loading="lazy"
              width={1024}
              height={640}
              className="w-full max-w-md mx-auto mt-10 rounded-2xl opacity-90"
            />
          </div>
        </div>
      </section>

      {/* MÉTODO E.C.E. */}
      <section className="section-y" style={{ background: "var(--cream)" }}>
        <div className="container-page">
          <SectionHeading kicker="El método" title="E.C.E. — tres pasos, una casa en paz.">
            Una metodología simple, probada en familias reales. Nada de teoría inalcanzable.
          </SectionHeading>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Scale size={32} />, letter: "E", title: "Equilibrio", desc: "Aprende a poner límites que tu hijo entienda y respete, sin convertirte en la mala del cuento." },
              { icon: <MessageCircle size={32} />, title: "Claridad", letter: "C", desc: "Conversaciones cortas y firmes que cambian la dinámica desde el primer día. Sin discursos eternos." },
              { icon: <ListChecks size={32} />, title: "Ejecución", letter: "E", desc: "Un plan de 7 días con acciones concretas para cada noche. Sabrás exactamente qué hacer." },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border" style={{ borderColor: "var(--cream-dark)", boxShadow: "var(--shadow-card)" }}>
                <div className="w-14 h-14 rounded-2xl grid place-items-center mb-5" style={{ background: "var(--cream)", color: "var(--gold-deep)" }}>
                  {s.icon}
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display font-bold text-3xl" style={{ color: "var(--gold-deep)" }}>{s.letter}</span>
                  <h3 className="font-display font-semibold text-[22px]">{s.title}</h3>
                </div>
                <p style={{ color: "var(--text-secondary)" }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-12 bg-white/60 rounded-2xl p-7">
            <h4 className="font-display font-semibold text-lg mb-4">Esto NO es…</h4>
            <ul className="space-y-3">
              {[
                "Otro método de castigos ni de premios con dulces.",
                "Una app de control parental que tu hijo va a esquivar.",
                "Un libro de 300 páginas de teoría académica.",
                "Una promesa mágica de 24 horas.",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full grid place-items-center mt-0.5 shrink-0" style={{ background: "color-mix(in oklab, var(--danger) 18%, white)" }}>
                    <X size={14} color="var(--danger)" strokeWidth={3} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading kicker="Lo que vas a notar" title="En 7 días, otro hogar." />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-8" style={{ background: "var(--cream)" }}>
              <h3 className="font-display font-semibold text-[24px] mb-5">Tu hijo:</h3>
              <ul className="space-y-4">
                {[
                  "Acepta apagar la pantalla sin rabieta.",
                  "Vuelve a pedir cuentos, juegos y compañía.",
                  "Duerme mejor — porque el cerebro descansa.",
                  "Habla más, se concentra más, se aburre menos.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full grid place-items-center shrink-0" style={{ background: "var(--success)" }}>
                      <Check size={16} color="#fff" strokeWidth={3} />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl p-8" style={{ background: "color-mix(in oklab, var(--gold-soft) 50%, white)" }}>
              <h3 className="font-display font-semibold text-[24px] mb-5">Y tú:</h3>
              <ul className="space-y-4">
                {[
                  "Dejas de gritar y de sentir culpa al acostarlo.",
                  "Tienes un guion claro para cada momento difícil.",
                  "Recuperas tus noches — y a tu pareja.",
                  "Vuelves a disfrutar ser mamá, sin tanto cansancio.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full grid place-items-center shrink-0" style={{ background: "var(--success)" }}>
                      <Check size={16} color="#fff" strokeWidth={3} />
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="section-y" style={{ background: "var(--cream)" }}>
        <div className="container-page max-w-3xl">
          <div className="rounded-3xl p-8 md:p-10 text-center border-2" style={{ borderColor: "var(--gold)", background: "linear-gradient(180deg, #fff, var(--cream))" }}>
            <div className="w-20 h-20 rounded-full grid place-items-center mx-auto mb-5" style={{ background: "var(--cream)" }}>
              <Shield size={44} color="var(--gold-deep)" strokeWidth={1.8} />
            </div>
            <h3 className="font-display font-bold text-[24px] md:text-[28px] mb-3">
              Garantía de 7 días, sin preguntas.
            </h3>
            <p className="text-[17px]" style={{ color: "var(--text-secondary)" }}>
              Léelo, aplícalo durante una semana. Si en 30 días no ves un cambio real en casa,
              te devuelvo cada centavo. Sin formularios, sin explicaciones.
            </p>
          </div>
        </div>
      </section>

      {/* NO ES PARA TI */}
      <section className="section-y" style={{ background: "linear-gradient(180deg, #fff, color-mix(in oklab, var(--gold-soft) 35%, white))" }}>
        <div className="container-page max-w-3xl">
          <SectionHeading kicker="Honestidad primero" title="Este libro NO es para ti si…" />
          <ul className="space-y-4 bg-white rounded-2xl p-7" style={{ boxShadow: "var(--shadow-card)" }}>
            {[
              "Crees que las pantallas no son un problema en tu casa.",
              "Buscas una solución mágica que no requiera tu presencia.",
              "No estás dispuesta a sostener una conversación firme con tu hijo.",
              "Prefieres echar la culpa al colegio, al papá o al algoritmo.",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full grid place-items-center shrink-0" style={{ background: "color-mix(in oklab, var(--danger) 18%, white)" }}>
                  <X size={16} color="var(--danger)" strokeWidth={3} />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p className="text-center font-display font-bold text-xl mt-8">
            Si te quedaste leyendo, este libro <span style={{ color: "var(--gold-deep)" }}>sí</span> es para ti.
          </p>
        </div>
      </section>

      {/* ENTREGABLES */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading kicker="Lo que recibes" title="Todo lo que necesitas para tus 7 días.">
            Material listo para abrir y aplicar hoy mismo.
          </SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <BookOpen />, t: "Ebook E.C.E.", d: "20 páginas, claras y al grano." },
              { icon: <Calendar />, t: "Plan de 7 días", d: "Una acción por día, paso a paso." },
              { icon: <MessageSquare />, t: "Guion de frases", d: "Qué decir cuando hay rabieta." },
              { icon: <FileText />, t: "Acuerdo Digital Familiar imprimible", d: "Llénalo en familia y fírmalo juntos." },
              { icon: <ListChecks />, t: "Checklist diaria", d: "Para mantener el método después." },
              { icon: <Sparkles />, t: "30 actividades sin pantalla", d: "Para niños 5-9 años, por edad." },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border" style={{ borderColor: "var(--cream-dark)", boxShadow: "var(--shadow-card)" }}>
                <div className="w-14 h-14 rounded-2xl grid place-items-center mx-auto mb-4" style={{ background: "var(--cream)", color: "var(--gold-deep)" }}>
                  {c.icon}
                </div>
                <h4 className="font-display font-semibold text-[17px] mb-2">{c.t}</h4>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONIFICACIONES */}
      <section className="section-y" style={{ background: "linear-gradient(180deg, #fff, color-mix(in oklab, var(--gold-soft) 35%, white))" }}>
        <div className="container-page">
          <SectionHeading kicker="Bonus" title="Bonos Extras, Gratis" />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { t: "Cómo mantener la calma cuando ya vas a gritar", d: "Técnicas para no explotar en el momento de más tensión." },
              { t: "Frases que NO ayudan — y su reemplazo", d: "Las palabras exactas que generan conflicto y cómo cambiarlas." },
            ].map((b, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-7 border" style={{ borderColor: "var(--gold-soft)", boxShadow: "var(--shadow-card)" }}>
                <span className="absolute top-4 right-4 text-[11px] font-bold px-3 py-1.5 rounded-full" style={{ background: "var(--danger)", color: "#fff" }}>
                  GRATIS HOY
                </span>
                <Gift size={32} color="var(--gold-deep)" className="mb-4" />
                <h4 className="font-display font-semibold text-[19px] mb-3 pr-20">{b.t}</h4>
                <p className="mb-4" style={{ color: "var(--text-secondary)" }}>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARACIÓN PRECIO */}
      <section id="comprar" className="section-y">
        <div className="container-page">
          <SectionHeading kicker="Hagamos números" title="Lo que cuesta seguir igual vs. lo que cuesta cambiar." />
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-center max-w-5xl mx-auto">
            <div className="rounded-2xl p-7" style={{ background: "color-mix(in oklab, var(--danger) 10%, white)", border: "1px solid color-mix(in oklab, var(--danger) 30%, white)" }}>
              <h4 className="font-display font-semibold text-lg mb-5">Seguir como hoy</h4>
              <ul className="space-y-3 text-[15px]">
                {[
                  ["1 sesión de terapia familiar", "$80"],
                  ["Una app de control parental al año", "$120"],
                  ["Comprar juguetes 'que sí funcionen'", "$200+"],
                  ["Noches sin dormir y peleas en pareja", "Sin precio"],
                ].map(([a, b], i) => (
                  <li key={i} className="flex justify-between gap-4 pb-2 border-b" style={{ borderColor: "color-mix(in oklab, var(--danger) 20%, white)" }}>
                    <span>{a}</span><span className="font-semibold">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:grid w-14 h-14 rounded-full place-items-center font-display font-bold mx-auto" style={{ background: "var(--gold-deep)", color: "#fff" }}>
              VS
            </div>
            <div className="rounded-2xl p-7 text-center" style={{ background: "linear-gradient(180deg, var(--cream), #fff)", border: "2px solid var(--gold)" }}>
              <h4 className="font-display font-semibold text-lg mb-2">Esta solución</h4>
              <div className="text-sm mb-4" style={{ color: "var(--text-secondary)" }}>Acceso inmediato y para siempre</div>
              <div className="font-display font-bold leading-none mb-3" style={{ fontSize: "72px", color: "var(--gold-deep)" }}>
                $12.99
              </div>
              <div className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>Pago único · sin suscripción</div>
              <CTA />
              <div className="flex items-center justify-center gap-2 text-xs mt-4" style={{ color: "var(--text-secondary)" }}>
                <Lock size={12} /> Pago 100% seguro · SSL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEEP DIVE Error/Solución */}
      <section className="section-y" style={{ background: "var(--cream)" }}>
        <div className="container-page">
          <SectionHeading kicker="Lo que aprenderás" title="4 errores que estás cometiendo (y cómo los resuelve E.C.E.).">
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {[
              { e: "Quitar la pantalla 'de golpe' como castigo.", s: "Anticipar el corte con una señal calmada 10 minutos antes. (E. Equilibrio)" },
              { e: "Explicar con discursos largos por qué la pantalla es mala.", s: "Una sola frase, firme y corta. La repites igual cada vez. (C. Claridad)" },
              { e: "Cambiar la regla cuando estás cansada.", s: "Un plan escrito que se ejecuta igual los 7 días, aunque tú dudes. (E. Ejecución)" },
              { e: "Negociar 'cinco minutos más' que se vuelven una hora.", s: "Un cierre ritualizado, con actividad lista de reemplazo. (E.C.E. completo)" },
            ].map((b, i) => (
              <div key={i} className="grid sm:grid-cols-2 gap-3">
                <div className="rounded-2xl p-5" style={{ background: "color-mix(in oklab, var(--danger) 10%, white)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full grid place-items-center" style={{ background: "var(--danger)" }}>
                      <X size={14} color="#fff" strokeWidth={3} />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--danger)" }}>Error</span>
                  </div>
                  <p className="text-[15px]">{b.e}</p>
                </div>
                <div className="rounded-2xl p-5" style={{ background: "color-mix(in oklab, var(--success) 12%, white)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-6 h-6 rounded-full grid place-items-center" style={{ background: "var(--success)" }}>
                      <Check size={14} color="#fff" strokeWidth={3} />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--success)" }}>Solución</span>
                  </div>
                  <p className="text-[15px]">{b.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGENCIA */}
      <section className="section-y" style={{ background: "linear-gradient(180deg, #fff, color-mix(in oklab, var(--gold-soft) 40%, white))" }}>
        <div className="container-page max-w-3xl text-center">
          <div className="w-16 h-16 rounded-full grid place-items-center mx-auto mb-5" style={{ background: "#fff", boxShadow: "var(--shadow-card)" }}>
            <Clock size={28} color="var(--gold-deep)" />
          </div>
          <h2 className="font-display font-bold text-[28px] md:text-[36px] mb-4">
            Cada semana que pasa, la pantalla pesa más.
          </h2>
          <p className="text-[17px] mb-8" style={{ color: "var(--text-secondary)" }}>
            No te pido que decidas hoy por presión. Te pido que decidas hoy porque tu hijo de 7 años
            no tiene 5 años para esperar a que encontremos el método perfecto. Este ya existe.
          </p>
          <CTA />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y">
        <div className="container-page max-w-3xl">
          <SectionHeading kicker="Preguntas frecuentes" title="Lo que otras madres me han preguntado." />
          <FAQ />
        </div>
      </section>

      {/* CIERRE */}
      <section className="section-y" style={{ background: "linear-gradient(180deg, color-mix(in oklab, var(--gold-soft) 30%, white), var(--cream))" }}>
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <img
            src={familyImg}
            alt="Familia feliz riendo en el sofá de un salón cálido"
            loading="lazy"
            width={1280}
            height={720}
            className="w-full h-auto rounded-3xl"
            style={{ boxShadow: "var(--shadow-card)" }}
          />
          <div>
            <h2 className="font-display font-bold text-[28px] md:text-[40px] mb-5">
              Imagina tu casa, en una semana.
            </h2>
            <p className="text-[17px] mb-4" style={{ color: "var(--foreground)" }}>
              Una cena sin tablet. Un cuento antes de dormir. Tu hijo riendo de algo que tú dijiste,
              no de un video. Tú, descansada, sin culpa al apagar la luz.
            </p>
            <p className="text-[17px] mb-8" style={{ color: "var(--text-secondary)" }}>
              Eso es lo que te entrego en este libro. No una promesa: un método.
            </p>
            <CTA />
            <p className="text-sm italic mt-8" style={{ color: "var(--text-secondary)" }}>
              P.D. — Si has leído hasta aquí, ya tomaste la decisión que importaba: la de buscar
              ayuda. Lo demás son $12.99 y siete noches. Te espero del otro lado.
            </p>
          </div>
        </div>
      </section>

      {/* STICKY CTA mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 border-t" style={{ background: "rgba(255,255,255,0.96)", backdropFilter: "blur(8px)", borderColor: "var(--cream-dark)" }}>
        <a href="#comprar" className="btn-cta btn-cta-hover w-full" style={{ width: "100%", minHeight: 52 }}>
          <Lock size={16} /> Acceso ahora — $12.99
        </a>
      </div>
    </div>
  );
}

const FAQS = [
  { q: "¿Funciona si mi hijo ya tiene 9 años y lleva años con pantalla?", a: "Sí. El método está diseñado precisamente para hábitos ya instalados. La franja 5-9 años es la edad donde los cambios todavía son rápidos si los adultos sostenemos las reglas con calma." },
  { q: "¿Necesito que mi pareja participe?", a: "Ayuda mucho, pero no es obligatorio. El libro incluye una guía corta para alinear a la pareja y, si no es posible, también funciona aplicándolo solo tú." },
  { q: "¿Cuánto tiempo me toma al día?", a: "El plan está pensado para madres trabajadoras: 15-20 minutos al día durante 7 días. No vas a tener que reorganizar tu vida para aplicarlo." },
  { q: "¿Lo recibo de forma física?", a: "Es un ebook digital descargable. Lo recibes por correo en menos de 5 minutos después de comprar, y lo conservas para siempre." },
  { q: "¿Y si no me funciona?", a: "Tienes 15 días para pedir la devolución del 100% sin preguntas. Solo me escribes y te devuelvo el dinero." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="bg-white rounded-2xl border overflow-hidden transition-colors" style={{ borderColor: "var(--cream-dark)" }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[var(--cream)] transition-colors"
              style={{ minHeight: 56 }}
            >
              <span className="font-display font-semibold text-[16px] md:text-[17px]">{item.q}</span>
              <span className="w-8 h-8 rounded-full grid place-items-center shrink-0" style={{ background: "var(--cream)", color: "var(--gold-deep)" }}>
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 -mt-1 text-[15px]" style={{ color: "var(--text-secondary)" }}>
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
