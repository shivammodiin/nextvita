import { MDXRemote } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import Layout from "../components/Layout";
import { domain } from "../data/siteConfig";
import { getFileBySlug } from "../lib/mdx";
import Hero from "../components/Hero";

export default function About({ mdxSource, frontMatter }) {
  return (
    <Layout
      HeroComp={() => (
        <Hero
          heroData={{ title: "About NextVita Template Next JS Boilerplate" }}
        />
      )}
    >
      <NextSeo
        title="About Us - NextVita"
        description="About Google Core Web Vital SEO update ready Next JS template with attractive blue theme for free download."
        canonical={`${domain}/about`}
        openGraph={{
          url: `${domain}/about`,
          title:
            "About Us - NextVita",
          description:
            "About Google Core Web Vital SEO update ready Next JS template with attractive blue theme for free download.",
        }}
      />
      <section>
        <aside>
          <div>
            <MDXRemote {...mdxSource} />
          </div>
        </aside>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const uses = await getFileBySlug("about");

  return { props: uses };
}
