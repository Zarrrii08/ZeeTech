const projects = [
  {
    title: "CRM Growth Engine",
    description:
      "Lead pipeline automation with smart follow-ups, deal stages, and reporting for high-volume sales teams.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    tag: "CRM",
  },
  {
    title: "ERP Operations Suite",
    description:
      "Centralized HR, payroll, attendance, and performance tracking across distributed teams and departments.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    tag: "ERP",
  },
  {
    title: "Shopify Commerce Build",
    description:
      "Designed conversion-focused storefronts with strong merchandising, mobile UX, and smooth checkout flow.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    tag: "E-commerce",
  },
  {
    title: "AI Voice Assistant",
    description:
      "Built interactive voice experiences that streamline customer support and automated service workflows.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80",
    tag: "AI",
  },
  {
    title: "Business Portal Platform",
    description:
      "Secure client, vendor, and employee portals with dashboards, access controls, and reporting tools.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    tag: "Portal",
  },
  {
    title: "Agency Web Experience",
    description:
      "High-impact marketing sites built to increase leads, elevate branding, and drive measurable growth.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
    tag: "Branding",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            Selected Work
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base font-light text-slate-300 md:text-[1.6rem] md:leading-normal">
            A curated showcase of digital products and business platforms built to improve operations,
            growth, and customer experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[22px] border border-slate-700/80 bg-slate-900/80 shadow-[0_18px_40px_rgba(15,23,42,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/45 hover:shadow-[0_24px_55px_rgba(34,211,238,0.1)]"
            >
              <div className="relative h-[300px] overflow-hidden sm:h-[330px] xl:h-[310px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/10 to-transparent" />

                <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 bg-slate-950/35 text-lg text-slate-100 backdrop-blur-sm">
                  ↗
                </div>

                <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-5">
                  <span className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-slate-950/60 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-200 backdrop-blur-sm">
                    {project.tag}
                  </span>
                  <h3 className="text-[1.7rem] font-semibold leading-tight text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 bg-slate-950/80 p-4 md:p-5">
                <p className="text-sm leading-7 text-slate-300">{project.description}</p>

                <div className="flex items-center justify-between border-t border-slate-800 pt-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300">
                    Case Study
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-lg text-slate-100 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
