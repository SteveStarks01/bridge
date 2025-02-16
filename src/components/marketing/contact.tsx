import React from "react";
import { Building2, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Container } from "@/components/ui/container";
import { MagicCard } from "@/components/ui/magic-card";

interface MagicCardProps {
    gradientFrom: string;
    gradientTo: string;
    gradientColor: string;
    className?: string;
    children: React.ReactNode;
}

const Contact: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20" id="contact">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Ready to <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">Get Started</span>?
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Fill out the form below and we'll get back to you within 24 hours to discuss your needs
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto px-4 md:px-6 w-full">
                <Container delay={0.1}>
                    <MagicCard
                        gradientFrom="#38bdf8"
                        gradientTo="#3b82f6"
                        className="p-6 lg:p-8 rounded-2xl lg:rounded-3xl h-full"
                        gradientColor="rgba(59,130,246,0.1)"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="fullName" className="text-sm font-medium">
                                        Full Name
                                    </label>
                                    <Input id="fullName" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-medium">
                                        Company
                                    </label>
                                    <Input id="company" placeholder="Your Company" />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <Input id="email" type="email" placeholder="john@company.com" />
                            </div>
                            
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Message
                                </label>
                                <Textarea 
                                    id="message"
                                    placeholder="Tell us about your team needs..."
                                    className="min-h-[120px]"
                                />
                            </div>

                            <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-sky-400 hover:from-blue-700 hover:to-sky-500">
                                Send Message
                                <Send className="ml-2 size-4" />
                            </Button>
                        </form>
                    </MagicCard>
                </Container>

                <Container delay={0.2}>
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-blue-500/10 w-fit">
                                <Mail className="size-6 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="font-medium">Email Us</h3>
                                <p className="text-sm text-muted-foreground">contact@bridgetalent.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-blue-500/10 w-fit">
                                <Phone className="size-6 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="font-medium">Call Us</h3>
                                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-blue-500/10 w-fit">
                                <Building2 className="size-6 text-blue-500" />
                            </div>
                            <div>
                                <h3 className="font-medium">Visit Us</h3>
                                <p className="text-sm text-muted-foreground">
                                    123 Innovation Drive<br />
                                    Tech Hub, Floor 5<br />
                                    Douala, Cameroon
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Contact; 