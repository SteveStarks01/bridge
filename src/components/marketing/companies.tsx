"use client";

import { Star, Award, Trophy } from "lucide-react";
import Container from "../global/container";

const Companies = () => {
    const TRUST_INDICATORS = [
        {
            icon: Star,
            metric: "98%",
            label: "Client Satisfaction"
        },
        {
            icon: Award,
            metric: "150+",
            label: "Active Professionals"
        },
        {
            icon: Trophy,
            metric: "48h",
            label: "Average Placement"
        }
    ];

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 mt-16 companies overflow-hidden">
            <Container>
                <div className="flex flex-col items-center justify-center">
                    <h4 className="text-2xl lg:text-4xl font-medium text-center">
                        Trusted by <span className="bg-gradient-to-r from-[#106861] to-[#0e8177] bg-clip-text text-transparent">Industry Leaders</span>
                    </h4>
                    <p className="text-muted-foreground mt-4 text-center max-w-2xl">
                        Join forward-thinking companies that have transformed their teams with Bridge&apos;s talent solutions
                    </p>
                </div>
            </Container>

            <Container delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
                    {TRUST_INDICATORS.map((indicator) => {
                        const Icon = indicator.icon;
                        return (
                            <div key={indicator.label} className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-b from-background/50 to-background border border-border/50">
                                <div className="p-3 rounded-xl bg-[#106861]/10 mb-4">
                                    <Icon className="size-6 text-[#106861]" />
                                </div>
                                <span className="text-3xl font-bold bg-gradient-to-r from-[#106861] to-[#0e8177] bg-clip-text text-transparent">
                                    {indicator.metric}
                                </span>
                                <span className="text-sm text-muted-foreground mt-2">
                                    {indicator.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </Container>

            <Container delay={0.2}>
                <div className="flex flex-col items-center mt-16">
                    <div className="px-6 py-3 rounded-full bg-gradient-to-r from-[#106861]/10 to-[#0e8177]/10 border border-[#106861]/20">
                        <span className="text-sm text-gradient bg-gradient-to-r from-[#106861] to-[#0e8177] bg-clip-text text-transparent">
                            Now accepting new client partnerships
                        </span>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Companies;
