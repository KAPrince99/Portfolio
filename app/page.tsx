import NewHero from "@/components/ui/NewHero";
import Projects from "@/components/ui/Projects";
import Essentials from "@/components/ui/Essentials";
import NewAbout from "@/components/ui/NewAbout";

export const metadata = {
  title:
    "Prince Amanor Kabutey " +
    "– Africa’s Elite Frontend Engineer & Solo Founder of Stanect",
  description:
    "Prince Amanor Kabutey is Africa’s Elite Frontend Engineer. He builds world-class, production-ready web apps as a solo founder. Founder of Stanect , delivering top-tier frontend experiences.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Solo Founder",
    "Stanect",
    "Tiny45",
    "Africa",
    "Africa Based Developer",
    "Web Development",
    "Web Applications",
    "Prince Amanor Kabutey",
    "Elite Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Prince Amanor Kabutey", url: "https://your-website.com" }],
  openGraph: {
    title:
      "Prince Amanor Kabutey – Africa’s Elite Frontend Engineer & Solo Founder of Stanect",
    description:
      "Explore the portfolio of Prince Amanor Kabutey, solo founder and elite frontend engineer, creator of Stanect and Tiny45.",
    url: "https://portfolio-tan-mu-59.vercel.app/",
    siteName: "Prince Amanor Portfolio",
    images: [
      {
        url: "https://your-website.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Prince Amanor Kabutey – Portfolio & Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Prince Amanor Kabutey – Africa’s Elite Frontend Engineer & Solo Founder of Stanect",
    description:
      "Check out Prince Amanor Kabutey’s portfolio: production-ready apps, solo projects, and world-class frontend engineering.",
    images: ["https://your-website.com/og-image.png"],
  },
};

export default function page() {
  return (
    <main className="min-h-screen w-full py-20 mx-auto max-w-[1920px] relative">
      <NewHero />
      <Projects />
      <Essentials />
      <NewAbout />
    </main>
  );
}
