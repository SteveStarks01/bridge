"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import Container from "../global/container";
import { Button } from "../ui/button";
import Particles from "../ui/particles";

const CTA = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container className="py-20 max-w-6xl mx-auto">
                <div className="relative flex flex-col items-center justify-center py-12 lg:py-20 px-6 rounded-2xl lg:rounded-3xl bg-background/20 text-center border border-foreground/20 overflow-hidden">
                    <Particles
                        refresh
                        ease={80}
                        quantity={80}
                        color="#106861"
                        className="hidden lg:block absolute inset-0 z-0"
                    />
                    <Particles
                        refresh
                        ease={80}
                        quantity={35}
                        color="#106861"
                        className="block lg:hidden absolute inset-0 z-0"
                    />

                    <motion.div
                        className="absolute -bottom-1/8 left-1/3 -translate-x-1/2 w-44 h-32 lg:h-52 lg:w-1/3 rounded-full blur-[5rem] lg:blur-[10rem] -z-10"
                        style={{
                            background: 'conic-gradient(from 0deg at 50% 50%, #106861 0deg, #0e8177 180deg, #0c726a 360deg)',
                        }}
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium !leading-snug">
                        Ready to Scale Your Team <br /> with <span className="bg-gradient-to-r from-[#106861] to-[#0e8177] bg-clip-text text-transparent">Elite Talent</span>?
                    </h2>
                    <p className="text-sm md:text-lg text-center text-accent-foreground/80 max-w-2xl mx-auto mt-4">
                        Join leading companies who trust Bridge to build and manage their high-performing remote teams. Start hiring exceptional professionals today.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                        <Link href="/contact">
                            <Button size="lg" className="bg-gradient-to-r from-[#106861] to-[#0e8177] hover:from-[#0e5c56] hover:to-[#0c726a]">
                                Start Hiring
                                <ArrowRightIcon className="ml-2 size-4" />
                            </Button>
                        </Link>
                        <Link href="#schedule-call">
                            <Button size="lg" variant="outline" className="border-[#106861] text-[#106861] hover:bg-[#106861] hover:text-white">
                                Schedule a Consultation
                            </Button>
                        </Link>
                    </div>
                    <p className="text-sm text-muted-foreground mt-6">
                        Average placement time: 48 hours • 98% client satisfaction
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default CTA;
