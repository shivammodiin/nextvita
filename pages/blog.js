import { useState } from "react";
import { NextSeo } from "next-seo";
import { domain } from "../data/siteConfig";
import BlogPost from "../components/BlogPost";
import Layout from "../components/Layout";
import { getAllFilesFrontMatter } from "../lib/mdx";
import Hero from "../components/Hero";

export default function Blog({ posts }) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  const subtitleElement = () => (
    <input
      aria-label="Search blogs"
      type="text"
      onChange={(e) => setSearchValue(e.target.value)}
      value={searchValue}
      autoFocus
      placeholder="Search blogs"
    />
  );

  const heroData = {
    title: "All Blogs",
    subtitle: subtitleElement,
  };

  return (
    <Layout HeroComp={() => <Hero heroData={heroData} />}>
      <NextSeo
        title="Blog Page - NextVita"
        description="Blog for this website are available here. You can find blog using input box provided in the top. "
        canonical={`${domain}/blog`}
        openGraph={{
          url: `${domain}/blog`,
          title: "Blog Page - NextVita",
          description:
            "Blog for this website are available here. You can find blog using input box provided in the top. ",
        }}
      />
      <section id="blogs">
        {!filteredBlogPosts.length && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No posts found.
          </p>
        )}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
