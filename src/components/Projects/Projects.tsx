import { SUBTITLE_COLOR_CLASS } from "../../constants/stylesClass";
import { type ProjectsTypes } from "../../types";
import { projects } from "../../mocks/projects";

import ProjectsItem from "./ProjectsItem";
import ProjectsMore from "./ProjectsMore";

export const Projects = () => {
    const subtitleClass = SUBTITLE_COLOR_CLASS;

    return (
        <section id="projects">
            <div className="max-w-screen-xl mx-auto pt-28 p-4">
                <h2 className={subtitleClass}>Proyectos</h2>
                <div className="flex flex-col gap-40 pt-20">
                    {projects.map((project: ProjectsTypes, index) => {
                        const { id } = project;
                        const isPictureRightOrder = index % 2 === 0; // index % 2 === 0 --> right then left picture

                        return <ProjectsItem key={id} project={project} isPictureRightOrder={isPictureRightOrder} />;
                    })}
                    <ProjectsMore />
                </div>
            </div>
        </section>
    );
};

export default Projects;
