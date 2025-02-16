"use client";

import { FileText, Users2, CalendarCheck, ClipboardCheck, Building2, UserCog } from "lucide-react";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const HowItWorks = () => {
    const STEPS = [
        {
            icon: FileText,
            title: "Share Your Requirements",
            description: "Tell us about the roles you need to fill, required skills, experience level, and any specific requirements for your team."
        },
        {
            icon: Users2,
            title: "Expert Matching",
            description: "Our team carefully selects and proposes the most qualified Bridge Contractors who perfectly match your requirements."
        },
        {
            icon: CalendarCheck,
            title: "Review & Interview",
            description: "Meet your matched Bridge Contractors through our streamlined interview process to ensure the perfect fit for your team."
        },
        {
            icon: ClipboardCheck,
            title: "Simple Paperwork",
            description: "We handle all administrative tasks, contracts, and documentation to ensure a smooth onboarding process."
        },
        {
            icon: Building2,
            title: "Workspace Setup",
            description: "We provide fully-equipped office space and all necessary tools, ensuring your Bridge Contractor is ready to excel from day one."
        },
        {
            icon: UserCog,
            title: "Dedicated Management",
            description: "Get assigned a full-time Bridge Manager who ensures seamless communication and provides regular performance reports."
        }
    ];

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-16" id="how-it-works">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#106861]/10 mb-6">
                        <span className="text-sm font-medium text-[#106861]">Simple 6-Step Process</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        How <span className="bg-gradient-to-r from-[#106861] to-[#0e8177] bg-clip-text text-transparent">Bridge</span> Works
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        A streamlined process designed to get your high-performing team up and running quickly and efficiently
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto px-4 md:px-6">
                {STEPS.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <Container key={step.title} delay={0.1 + index * 0.1}>
                            <MagicCard
                                gradientFrom="#106861"
                                gradientTo="#0e8177"
                                className="p-6 lg:p-8 rounded-2xl lg:rounded-3xl h-full"
                                gradientColor="rgba(16,104,97,0.1)"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 rounded-xl bg-[#106861]/10">
                                        <Icon className="size-6 text-[#106861]" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm text-muted-foreground">Step {index + 1}</span>
                                        <h3 className="text-lg font-semibold">{step.title}</h3>
                                    </div>
                                </div>
                                
                                <p className="text-sm text-muted-foreground">
                                    {step.description}
                                </p>
                            </MagicCard>
                        </Container>
                    );
                })}
            </div>
        </div>
    );
};

export default HowItWorks; 