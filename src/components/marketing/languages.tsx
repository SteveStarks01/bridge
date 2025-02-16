"use client";

import { Globe, Users2, MessageSquare, Headphones } from "lucide-react";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Languages = () => {
    const LANGUAGE_FEATURES = [
        {
            icon: Globe,
            title: "Bilingual Excellence",
            description: "Our talent pool is proficient in both English and French, enabling seamless communication across international teams."
        },
        {
            icon: Users2,
            title: "Cultural Awareness",
            description: "Bridge professionals are trained in cross-cultural communication, ensuring effective collaboration in diverse teams."
        },
        {
            icon: MessageSquare,
            title: "Clear Communication",
            description: "Regular language proficiency assessments ensure our talent maintains high standards in both written and verbal communication."
        },
        {
            icon: Headphones,
            title: "24/7 Support",
            description: "Our bilingual support team is available around the clock to assist with any communication needs."
        }
    ];

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Expertise Across <span className="bg-gradient-to-r from-[#106861] to-[#0e8177] bg-clip-text text-transparent">Technologies</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Bridge professionals are fluent in English and French, enabling seamless communication and collaboration across international teams.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto px-4 md:px-6">
                {LANGUAGE_FEATURES.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <Container key={feature.title} delay={0.1 + index * 0.1}>
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
                                    {feature.title}
                                </h3>
                                
                                <p className="text-sm text-muted-foreground">
                                    {feature.description}
                                </p>
                            </MagicCard>
                        </Container>
                    );
                })}
            </div>

            <Container delay={0.5}>
                <div className="mt-16 p-4 rounded-full bg-[#106861]/10 mx-auto w-fit">
                    <p className="text-sm text-[#106861] font-medium">
                        Additional language support available upon request
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default Languages; 