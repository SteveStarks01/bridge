import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
import Companies from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Pricing from "@/components/marketing/pricing";
import Roles from "@/components/marketing/roles";
import HowItWorks from "@/components/marketing/how-it-works";
import Languages from "@/components/marketing/languages";
import Testimonials from "@/components/marketing/testimonials";

const HomePage = () => {
    return (
        <Wrapper className="relative">
            <div className="space-y-16">
                <Hero />
                <Features />
                <Roles />
                <HowItWorks />
                <Languages />
                <Analysis />
                <Testimonials />
                <Companies />
                <Pricing />
                <CTA />
            </div>
        </Wrapper>
    )
};

export default HomePage
