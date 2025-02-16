import * as React from "react";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import { OrbitingCircles } from "../ui/orbiting-circles";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

const Hero: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <div className="absolute flex lg:hidden size-40 rounded-full bg-[#106861] blur-[10rem] top-0 left-1/2 -translate-x-1/2 -z-10" />

            <div className="flex flex-col items-center justify-center gap-y-8 relative">
                <Container className="hidden lg:flex absolute inset-0 top-0 mb-auto flex-col items-center justify-center w-full min-h-screen -z-10">
                    <OrbitingCircles
                        speed={0.5}
                        radius={300}
                    >
                        <Icons.circle1 className="size-4 text-[#106861]/70" />
                        <Icons.circle2 className="size-1 text-[#106861]/80" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.25}
                        radius={400}
                    >
                        <Icons.circle2 className="size-1 text-[#106861]/50" />
                        <Icons.circle1 className="size-4 text-[#106861]/60" />
                        <Icons.circle2 className="size-1 text-[#106861]/90" />
                    </OrbitingCircles>
                    <OrbitingCircles
                        speed={0.1}
                        radius={500}
                    >
                        <Icons.circle2 className="size-1 text-[#106861]/50" />
                        <Icons.circle2 className="size-1 text-[#106861]/90" />
                        <Icons.circle1 className="size-4 text-[#106861]/60" />
                        <Icons.circle2 className="size-1 text-[#106861]/90" />
                    </OrbitingCircles>
                </Container>

                <div className="flex flex-col items-center justify-center text-center gap-y-4 bg-background/0">
                    <Container className="relative hidden lg:block overflow-hidden">
                        <button 
                            type="button"
                            className="group relative grid overflow-hidden rounded-full px-2 py-1 shadow-[0_1000px_0_0_hsl(0_0%_15%)_inset] transition-colors duration-200 mx-auto"
                        >
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-background transition-colors duration-200 group-hover:bg-neutral-800" />
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center">
                                <span className="px-2 py-[0.5px] h-[18px] tracking-wide flex items-center justify-center rounded-full bg-gradient-to-r from-[#106861] to-[#0e8177] text-[9px] font-medium mr-2 text-white">
                                    NEW
                                </span>
                                98% Client Satisfaction Rate
                            </span>
                        </button>
                    </Container>
                    <Container delay={0.15}>
                        <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold text-center !leading-tight max-w-4xl mx-auto">
                            Scale Your Team with {" "}
                            <span className="bg-gradient-to-r from-[#106861] to-[#0e8177] bg-clip-text text-transparent">
                                Elite Global Talent {" "}
                            </span>
                        </h1>
                    </Container>
                    <Container delay={0.2}>
                        <p className="max-w-xl mx-auto mt-2 text-base lg:text-lg text-center text-muted-foreground">
                            Access a curated pool of exceptional professionals ready to elevate your team. Modern workspaces, comprehensive benefits, and seamless integration.
                        </p>
                    </Container>
                    <Container delay={0.25} className="z-20">
                        <div className="flex items-center justify-center mt-6 gap-x-4">
                            <Link href="#" className="flex items-center gap-2 group">
                                <Button size="lg" className="bg-gradient-to-r from-[#106861] to-[#0e8177] hover:from-[#0e5c56] hover:to-[#0c726a]">
                                    Start Hiring
                                    <ArrowRightIcon className="size-4 group-hover:translate-x-1 transition-all duration-300" />
                                </Button>
                            </Link>
                            <Link href="#" className="flex items-center gap-2 group">
                                <Button size="lg" variant="outline" className="border-[#106861] text-[#106861] hover:bg-[#106861] hover:text-white">
                                    Schedule a Call
                                </Button>
                            </Link>
                        </div>
                    </Container>
                    <Container delay={0.3} className="relative">
                        <div className="relative rounded-xl lg:rounded-[32px] border border-border p-2 backdrop-blur-lg mt-10 max-w-6xl mx-auto">
                            <div className="absolute top-1/8 left-1/2 -z-10 bg-gradient-to-r from-[#0e8177] to-[#106861] w-1/2 lg:w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[4rem] lg:blur-[10rem] animate-image-glow" />
                            <div className="hidden lg:block absolute -top-1/8 left-1/2 -z-20 bg-[#106861] w-1/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem] animate-image-glow" />

                            <div className="rounded-lg lg:rounded-[22px] border border-border bg-background p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-b from-neutral-900/50 to-neutral-900/30 border border-neutral-800">
                                        <span className="text-4xl font-bold text-[#106861]">150+</span>
                                        <span className="text-sm text-neutral-400 mt-2">Active Professionals</span>
                                    </div>
                                    <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-b from-neutral-900/50 to-neutral-900/30 border border-neutral-800">
                                        <span className="text-4xl font-bold text-[#0e8177]">24/7</span>
                                        <span className="text-sm text-neutral-400 mt-2">Support & Management</span>
                                    </div>
                                    <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-b from-neutral-900/50 to-neutral-900/30 border border-neutral-800">
                                        <span className="text-4xl font-bold text-[#106861]">48h</span>
                                        <span className="text-sm text-neutral-400 mt-2">Average Placement Time</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 inset-x-0 w-full h-1/2" />
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Hero;
