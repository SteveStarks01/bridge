import Link from "next/link";
import Image from "next/image";
import Container from "../global/container";
import { Button } from "../ui/button";

const Footer = () => {
    return (
        <footer className="w-full border-t border-border/40 mt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 py-16">
                    <div className="col-span-2 lg:pr-12">
                        <Link href="/" className="text-2xl inline-flex items-center gap-2">
                            <Image
                                src="/images/logos/bridge-logo.png"
                                alt="Bridge Logo"
                                width={40}
                                height={40}
                                className="rounded-lg"
                            />
                            <span className="font-bold text-white font-montserrat uppercase">
                                BRIDGE.
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-6 max-w-xs">
                            Transforming how companies build and manage remote teams through intelligent talent solutions.
                        </p>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h3 className="font-medium text-base">Company</h3>
                        <div className="flex flex-col space-y-3">
                            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Why Bridge
                            </Link>
                            <Link href="#roles" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Roles
                            </Link>
                            <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                How It Works
                            </Link>
                            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h3 className="font-medium text-base">Legal</h3>
                        <div className="flex flex-col space-y-3">
                            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-border/40 mt-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Bridge. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                        <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
                            <Link href="mailto:contact@bridgetalent.com">contact@bridgetalent.com</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
