import React, { useState } from "react";
import "./Main.scss";
import {
  TiLinkOutline,
  TiSocialGithubCircular,
  TiArrowRight,
} from "react-icons/ti";
import { myProjects } from "./MyProject";
import { motion, AnimatePresence } from "framer-motion";

const categoryFilters = ["all", "Scss", "react", "vuejs", "bootstrap"];

function Main() {
  const [filteredProjects, setFilteredProjects] = useState(myProjects);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredProjects(myProjects);
    } else {
      const filtered = myProjects.filter((item) =>
        item.Category.includes(category)
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-content">
          <nav className="filter-nav">
            {categoryFilters.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`filter-btn ${
                  activeFilter === category ? "filter-btn--active" : ""
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </nav>

          <div className="projects-grid">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={`${project.projectTitle}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                  }}
                  className="project-card"
                >
                  <div className="project-card__image">
                    <img src={project.imgPath} alt={project.projectTitle} />
                  </div>

                  <div className="project-card__content">
                    <div className="project-card__header">
                      <h2 className="project-card__title">
                        {project.projectTitle}
                      </h2>
                    </div>
                    <div className="project-card__info">
                      <p className="project-card__tech">{project.language}</p>
                      <p className="project-card__desc">
                        {project.projectDescription}
                      </p>
                    </div>
                    <div className="project-card__links">
                      <div className="project-card__social">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="project-card__link"
                          aria-label="View live site"
                        >
                          <TiLinkOutline />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="project-card__link"
                          aria-label="View source code"
                        >
                          <TiSocialGithubCircular />
                        </a>
                      </div>
                      <a
                        className="project-card__more"
                        href="http://localhost:5173/Portfolio"
                        aria-label="Learn more"
                      >
                        More <TiArrowRight />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
