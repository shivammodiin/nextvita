import { NextSeo } from "next-seo";
import { domain } from "../data/siteConfig";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Table from "../components/Table";
import Accordion from "../components/Accordion";
import Link from "next/link";

export default function Home() {
  const helperElement = () => (
    <p>
      <a
        target="_blank"
        rel="noopener"
        href="https://github.com/shivammodi456/nextvita"
      >
        <i>Github Repo ↗</i>
      </a>
      <Link href="/about">
        <a>
          <b>Get Started ↗ </b>
        </a>
      </Link>
    </p>
  );

  const subtitleElement = () => (
    <p>
      <b>No class names, no hustle ,</b> one click deploy and{" "}
      <mark>lighthouse 100% score.</mark>
    </p>
  );
  const heroData = {
    title: "Core Web Vital Ready Next JS Template",
    subtitle: subtitleElement,
    helperElement: helperElement,
  };
  return (
    <Layout HeroComp={() => <Hero heroData={heroData} />}>
      <NextSeo
        title="NextVita Fastest Next JS Core Web Vital 100% Scorer Free Template"
        description="Google Core Web Vital SEO update ready Next JS template with attractive blue theme for free download."
        canonical={`${domain}`}
        openGraph={{
          url: domain,
          title:
            "NextVita Fastest Next JS Core Web Vital 100% Scorer Free Template",
          description:
            "Google Core Web Vital SEO update ready Next JS template with attractive blue theme for free download.",
        }}
      />
      <hr />
      <main>
        <Testimonials />
        <hr />
        <Table />
        <hr />
        <Accordion />
      </main>
    </Layout>
  );
}
