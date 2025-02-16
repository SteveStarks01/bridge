import type { Metadata, Viewport } from "next";

const defaultMetadata = {
    title: "Bridge - Intelligent Talent Management Platform",
    description: "Bridge helps companies build and manage high-performing remote teams with our intelligent talent management platform.",
    applicationName: "Bridge",
    authors: [{ name: "Bridge", url: "https://bridge.work" }],
    keywords: [
        "talent management",
        "remote teams",
        "professional staffing",
        "team management",
        "talent acquisition",
        "performance metrics",
        "remote work",
        "global talent",
        "bridge platform",
        "talent solutions"
    ],
    creator: "Bridge",
    publisher: "Bridge",
    robots: "index, follow"
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1
};

export const generateMetadata = ({
    title,
    description,
    ...rest
}: Partial<Metadata> = {}): Metadata => {
    return {
        ...defaultMetadata,
        ...rest,
        title: title ?? defaultMetadata.title,
        description: description ?? defaultMetadata.description,
        metadataBase: new URL("https://bridge.work"),
        openGraph: {
            type: "website",
            locale: "en_US",
            url: "https://bridge.work",
            title: title ?? defaultMetadata.title,
            description: description ?? defaultMetadata.description,
            siteName: "Bridge",
            images: [
                {
                    url: "/images/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "Bridge - Intelligent Talent Management Platform"
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: title ?? defaultMetadata.title,
            description: description ?? defaultMetadata.description,
            creator: "@bridgetalent",
            images: ["/images/twitter-image.png"]
        },
        icons: {
            icon: "/favicon.ico",
            shortcut: "/favicon-16x16.png",
            apple: "/apple-touch-icon.png"
        }
    };
};

export const SITE_NAME = 'Bridge';
export const SITE_DESCRIPTION =
    'Bridge - The intelligent talent management platform for remote teams. Connect with top global talent, streamline onboarding, and manage your distributed workforce with ease.';
export const SITE_KEYWORDS =
    'talent management, remote work, distributed teams, global talent, workforce management, talent matching, remote onboarding';
export const SITE_URL = 'https://bridge.work';
export const TWITTER_HANDLE = '@bridgework';
export const TWITTER_CARD = 'summary_large_image';
export const FACEBOOK_APP_ID = 'bridge-app-id';