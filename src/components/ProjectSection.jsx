import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Smart Bill",
    description:
      "A full-stack electricity billing system built using Laravel (API) and React for the frontend, styled with Tailwind CSS. The system includes secure authentication with Laravel Sanctum, user role management, real-time bill tracking, automated bill generation, and payment integration. API endpoints were tested and documented using Postman.",
    image: "/smartbill.png",
    tags: [
      "Laravel",
      "React",
      "TailWindCSS",
      "REST API",
      "Chappa",
      "Sanctum SPA Authentication",
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/coderun23-cloud/Smart_Bill",
  },
  {
    id: 2,
    title: "Adika Driver Registration System",
    description:
      "A driver registration and tracking platform for Adika, developed using Laravel for backend and RestApi and  Reactjs for the frontend and TailwindCSS for styling .This system enable to regsiter a driver and manage it ",
    image: "/adikasite.png",
    tags: [
      "Laravel",
      "React",
      "TailwindCSS",
      "REST API",
      "Sanctum SPA Authentication",
    ],
    demoUrl: "#", // Optional
    githubUrl: "https://github.com/coderun23-cloud/driver_registration",
  },
  {
    id: 3,
    title: "Personal Crypto Tracker",
    description:
      "Crypto Tracker is a modern web app that allows users to explore and monitor real-time cryptocurrency data. Built with React, it uses the CoinGecko API to fetch up-to-date prices, market cap, and historical data of the top cryptocurrencies.",
    image: "/crypto.png",
    tags: ["React", "CSS"],
    demoUrl: "https://personal-crypto-tracker.vercel.app", // Optional
    githubUrl: "https://github.com/coderun23-cloud/Personal-crypto-tracker", // Optional
  },
  {
    id: 4,
    title: "Smart Cart",
    description:
      "Smart Cart is a full-stack e-commerce platform built with React for the frontend and Laravel for a robust RESTful API backend. It provides a seamless shopping experience for users while offering powerful admin tools for business management.",
    image: "/smartcart.png",
    tags: [
      "Laravel",
      "React",
      "TailwindCSS",
      "REST API",
      "Sanctum SPA Authentication",
    ],
    demoUrl: "#", // Optional
    githubUrl: "https://github.com/coderun23-cloud/SmartCart", // Optional
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/coderun23-cloud"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
