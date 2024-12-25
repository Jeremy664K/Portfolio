import { SUBTITLE_CLASS, TITLE_CLASS } from "../../constants/stylesClass";
import { ArrowDownIcon, GithubIcon, LinkedInIcon } from "../../elements/Icons";

import Link from "../../elements/Link";

export const Hero = () => {
    const titleClass = TITLE_CLASS;
    const subtitleClass = SUBTITLE_CLASS;

    return (
        <section id="hero">
            <div className="animate-fadeIn max-w-screen-xl mx-auto pt-20 p-4 h-screen flex flex-col gap-8 justify-center items-center text-center">
                <div className="absolute -z-10 h-full w-full left-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,#000_10%,transparent_100%)]"></div>
                <div className="flex flex-col gap-2">
                    <h1 className={titleClass}>Jeremy Díaz</h1>
                    <h2 className={subtitleClass}>Frontend Developer</h2>
                </div>
                <div className="max-w-md">
                    <p>
                        Llevo más de tres años desarrollando experiencias de usuario atractivas y funcionales. <span className="animate-greeting inline-block">👋</span>
                    </p>
                </div>
                <div className="flex gap-2">
                    <Link href="https://github.com/jevmydev" title="Github" target="_blank" isActive>
                        <>
                            <GithubIcon />
                            Github
                        </>
                    </Link>
                    <Link href="https://www.linkedin.com/in/jevmydev" title="LinkedIn" target="_blank">
                        <>
                            <LinkedInIcon />
                            LinkedIn
                        </>
                    </Link>
                </div>
                <div className="absolute bottom-0 animate-arrow">
                    <Link href="/#projects" title="Explora">
                        <ArrowDownIcon />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
