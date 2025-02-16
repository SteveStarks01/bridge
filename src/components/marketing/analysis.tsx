import { DownloadIcon, FilterIcon, TrendingUpIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Real-time talent <br /><span className="bg-gradient-to-r from-[#106861] to-[#0e8177] bg-clip-text text-transparent">performance metrics</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        Track your team's performance, productivity, and engagement with our comprehensive analytics dashboard.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 relative overflow-visible px-4 md:px-6 max-w-6xl mx-auto">
                <Container delay={0.1}>
                    <MagicCard
                        gradientFrom="#106861"
                        gradientTo="#0e8177"
                        gradientColor="rgba(16,104,97,0.1)"
                        className="p-4 lg:p-8 w-full overflow-hidden"
                    >
                        <div className="space-y-4">
                            <div className="flex justify-between items-baseline">
                                <div>
                                    <div className="text-3xl font-semibold">
                                        98%
                                    </div>
                                    <div className="text-sm text-[#106861] flex items-center gap-1 mt-2">
                                        <TrendingUpIcon className="w-4 h-4" />
                                        +5% from last quarter
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button size="icon" variant="ghost">
                                        <FilterIcon className="w-5 h-5" />
                                    </Button>
                                    <Button size="icon" variant="ghost">
                                        <DownloadIcon className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="grid grid-cols-4 text-sm text-muted-foreground py-2">
                                    <div>Department</div>
                                    <div>Team Size</div>
                                    <div>Productivity</div>
                                    <div>Retention</div>
                                </div>
                                {[
                                    { name: "Engineering", size: "45", productivity: "96%", retention: "95%" },
                                    { name: "Design", size: "28", productivity: "94%", retention: "92%" },
                                    { name: "Marketing", size: "32", productivity: "97%", retention: "94%" },
                                ].map((dept) => (
                                    <div key={dept.name} className="grid grid-cols-4 text-sm py-2 border-t border-border/50">
                                        <div>{dept.name}</div>
                                        <div>{dept.size}</div>
                                        <div>{dept.productivity}</div>
                                        <div className="font-semibold">{dept.retention}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </MagicCard>
                </Container>

                <Container delay={0.2}>
                    <MagicCard
                        gradientFrom="#106861"
                        gradientTo="#0e8177"
                        gradientColor="rgba(16,104,97,0.1)"
                        className="p-4 lg:p-8 w-full overflow-hidden"
                    >
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">
                                Talent Metrics
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Key performance indicators for your remote teams.
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <div className="p-4 rounded-lg bg-[#106861]/10 border border-[#106861]/20">
                                    <div className="text-2xl font-semibold">48h</div>
                                    <div className="text-sm text-muted-foreground mt-1">Average Placement Time</div>
                                </div>
                                <div className="p-4 rounded-lg bg-[#106861]/10 border border-[#106861]/20">
                                    <div className="text-2xl font-semibold">150+</div>
                                    <div className="text-sm text-muted-foreground mt-1">Active Professionals</div>
                                </div>
                                <div className="p-4 rounded-lg bg-[#106861]/10 border border-[#106861]/20">
                                    <div className="text-2xl font-semibold">24/7</div>
                                    <div className="text-sm text-muted-foreground mt-1">Support Coverage</div>
                                </div>
                                <div className="p-4 rounded-lg bg-[#106861]/10 border border-[#106861]/20">
                                    <div className="text-2xl font-semibold">98%</div>
                                    <div className="text-sm text-muted-foreground mt-1">Client Satisfaction</div>
                                </div>
                            </div>
                        </div>
                    </MagicCard>
                </Container>
            </div>
        </div>
    );
};

export default Analysis;
