"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Testimonials = () => {
    const TESTIMONIALS = [
        {
            quote: "Bridge has transformed how we scale our engineering team. Their talent is exceptional, and the managed workspace model ensures consistent productivity.",
            author: "Sarah Chen",
            role: "CTO",
            company: "TechFlow Solutions"
        },
        {
            quote: "The quality of professionals and the comprehensive benefits package Bridge provides has resulted in high retention rates and excellent performance.",
            author: "Michael Rodriguez",
            role: "Head of Engineering",
            company: "DataSphere Inc"
        },
        {
            quote: "What sets Bridge apart is their attention to both talent quality and employee well-being. Our team members are happy, productive, and fully integrated.",
            author: "Emily Watson",
            role: "VP of Operations",
            company: "InnovateX"
        }
    ];

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20" id="testimonials">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        What Our <span className="bg-gradient-to-r from-[#106861] to-[#0e8177] bg-clip-text text-transparent">Clients Say</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        See how Bridge helps companies build and manage high-performing remote teams
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto px-4 md:px-6">
                {TESTIMONIALS.map((testimonial, index) => (
                    <Container key={`${testimonial.author}-${testimonial.company}`} delay={0.1 + index * 0.1}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                        >
                            <MagicCard
                                gradientFrom="#106861"
                                gradientTo="#0e8177"
                                className="p-6 lg:p-8 rounded-2xl lg:rounded-3xl h-full flex flex-col"
                                gradientColor="rgba(16,104,97,0.1)"
                            >
                                <div className="p-3 rounded-xl bg-[#106861]/10">
                                    <MessageSquare className="size-6 text-[#106861]" />
                                </div>
                                
                                <p className="text-lg text-foreground/90 flex-grow">
                                    "{testimonial.quote}"
                                </p>
                                
                                <div className="mt-6 pt-6 border-t border-border">
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-foreground">
                                            {testimonial.author}
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            {testimonial.role}, {testimonial.company}
                                        </span>
                                    </div>
                                </div>
                            </MagicCard>
                        </motion.div>
                    </Container>
                ))}
            </div>
        </div>
    );
};

export default Testimonials; 