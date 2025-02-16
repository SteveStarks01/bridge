"use client";

import { Building2, Clock, Briefcase, Shield, Users2, LineChart } from "lucide-react";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const BRIDGE_FEATURES = [
    {
        title: "Dedicated Workspace",
        description: "State-of-the-art office environments equipped with modern technology and collaborative spaces, ensuring optimal productivity.",
        icon: Building2
    },
    {
        title: "Rapid Deployment",
        description: "Get matched with the right talent within 48 hours. Our streamlined process ensures quick team expansion without compromising quality.",
        icon: Clock
    },
    {
        title: "Comprehensive Benefits",
        description: "We provide full health insurance, wellness programs, and meal services to keep your team happy, healthy, and focused.",
        icon: Shield
    },
    {
        title: "Seamless Integration",
        description: "Our professionals are trained to adapt quickly to your company culture and workflows, ensuring immediate productivity.",
        icon: Users2
    },
    {
        title: "Professional Growth",
        description: "Continuous training and development programs keep your team at the cutting edge of industry trends and technologies.",
        icon: LineChart
    },
    {
        title: "Full Management",
        description: "We handle all administrative tasks, HR responsibilities, and workspace management, letting you focus on your core business.",
        icon: Briefcase
    }
];

const Features = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20" id="features">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Why Companies Choose <span className="bg-gradient-to-r from-[#106861] to-[#0e8177] bg-clip-text text-transparent">Bridge</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Experience the perfect blend of exceptional talent, modern workspaces, and comprehensive management that sets us apart.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative overflow-visible px-4 md:px-6">
                {BRIDGE_FEATURES.map((feature, index) => (
                    <Container key={feature.title} delay={0.1 + index * 0.1}>
                        <MagicCard
                            gradientFrom="#106861"
                            gradientTo="#0e8177"
                            className="p-6 lg:p-8 rounded-2xl lg:rounded-3xl"
                            gradientColor="rgba(16,104,97,0.1)"
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="p-2 rounded-lg bg-[#106861]/10">
                                    <feature.icon className="size-6 text-[#106861]" />
                                </div>
                                <h3 className="text-xl font-semibold">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-base text-muted-foreground">
                                {feature.description}
                            </p>
                        </MagicCard>
                    </Container>
                ))}
            </div>
        </div>
    );
};

export default Features;
