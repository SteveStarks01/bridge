"use client";

import { Headphones, Code, Users2, LineChart, Briefcase, MessageSquare } from "lucide-react";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Roles = () => {
    const ROLES = [
        {
            icon: Headphones,
            title: "Technical Support",
            description: "Skilled professionals providing expert technical assistance and problem resolution for your customers."
        },
        {
            icon: MessageSquare,
            title: "Customer Service & Care",
            description: "Dedicated agents delivering exceptional customer experiences in both English and French."
        },
        {
            icon: Code,
            title: "Development",
            description: "Expert Frontend and Backend developers building and maintaining your digital solutions."
        },
        {
            icon: LineChart,
            title: "Management",
            description: "Experienced managers and team leads driving project success and team performance."
        },
        {
            icon: Users2,
            title: "Team Leadership",
            description: "Skilled team leads fostering collaboration and ensuring project delivery excellence."
        },
        {
            icon: Briefcase,
            title: "Specialized Roles",
            description: "Additional specialized positions tailored to your specific business needs."
        }
    ];
    
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-16" id="roles">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#106861]/10 mb-6">
                        <span className="text-sm font-medium text-[#106861]">Bilingual Professionals (English & French)</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Find Your Perfect <span className="bg-gradient-to-r from-[#106861] to-[#0e8177] bg-clip-text text-transparent">Bridge Contractor</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Our diverse pool of skilled professionals covers a wide range of roles, ready to strengthen your team
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto px-4 md:px-6">
                {ROLES.map((role, index) => {
                    const Icon = role.icon;
                    return (
                        <Container key={role.title} delay={0.1 + index * 0.1}>
                            <MagicCard
                                gradientFrom="#106861"
                                gradientTo="#0e8177"
                                className="p-6 lg:p-8 rounded-2xl lg:rounded-3xl h-full"
                                gradientColor="rgba(16,104,97,0.1)"
                            >
                                <div className="p-3 rounded-xl bg-[#106861]/10 w-fit mb-6">
                                    <Icon className="size-6 text-[#106861]" />
                                </div>
                                
                                <h3 className="text-lg font-semibold mb-3">
                                    {role.title}
                                </h3>
                                
                                <p className="text-sm text-muted-foreground">
                                    {role.description}
                                </p>
                            </MagicCard>
                        </Container>
                    );
                })}
            </div>

            <Container delay={0.5}>
                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground">
                        Don't see the role you need? Contact us to discuss your specific requirements
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default Roles; 