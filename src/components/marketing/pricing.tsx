"use client";

import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Pricing = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Simple, <span className="bg-gradient-to-r from-[#106861] to-[#0e8177] bg-clip-text text-transparent">Transparent</span> Pricing
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-6 max-w-2xl">
                        Experience the future of remote team building with Bridge. Our tailored solutions adapt to your unique needs, ensuring the perfect match for your organization.
                    </p>
                </div>

                <div className="mt-12 max-w-4xl mx-auto">
                    <MagicCard
                        gradientFrom="#106861"
                        gradientTo="#0e8177"
                        className="p-6 lg:p-8 rounded-2xl lg:rounded-3xl"
                        gradientColor="rgba(16,104,97,0.1)"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#106861]/10 mb-6">
                                <span className="text-sm font-medium text-[#106861]">Custom Solutions Available</span>
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Begin Your Bridge Experience</h3>
                            <p className="text-muted-foreground max-w-2xl mb-8">
                                Join leading companies who trust Bridge to build and manage their high-performing remote teams. Our expert team will create a customized solution that perfectly matches your needs and budget.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-8">
                                <div className="flex flex-col items-center p-4 rounded-lg bg-background/40 border border-border/50">
                                    <span className="text-2xl font-bold text-[#106861]">48h</span>
                                    <span className="text-sm text-muted-foreground mt-2">Average Setup Time</span>
                                </div>
                                <div className="flex flex-col items-center p-4 rounded-lg bg-background/40 border border-border/50">
                                    <span className="text-2xl font-bold text-[#106861]">98%</span>
                                    <span className="text-sm text-muted-foreground mt-2">Client Satisfaction</span>
                                </div>
                                <div className="flex flex-col items-center p-4 rounded-lg bg-background/40 border border-border/50">
                                    <span className="text-2xl font-bold text-[#106861]">24/7</span>
                                    <span className="text-sm text-muted-foreground mt-2">Support Available</span>
                                </div>
                            </div>
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-gradient-to-r from-[#106861] to-[#0e8177] hover:from-[#0e5c56] hover:to-[#0c726a]">
                                    Get Started
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </MagicCard>
                </div>
            </Container>
        </div>
    );
};

export default Pricing;
