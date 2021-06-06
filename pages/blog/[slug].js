import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import { domain } from "../../data/siteConfig";
import { getFiles, getFileBySlug } from "../../lib/mdx";
import Layout from "../../components/Layout";
import Hero from "../../components/Hero";

export default function Blog({ mdxSource, frontMatter }) {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout HeroComp={() => <Hero heroData={{ title: frontMatter.title }} />}>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        date={new Date(frontMatter.publishedAt).toISOString()}
        canonical={`${domain}/blog/${slug}`}
        openGraph={{
          title: frontMatter.title,
          description: frontMatter.summary,
          url: `${domain}/blog/${slug}`,
          type: 'article',
          article: {
            publishedTime: new Date(frontMatter.publishedAt).toISOString(),
            modifiedTime: new Date(frontMatter.publishedAt).toISOString()
          },
          images: [
            {
              url: `${domain}/${frontMatter.image}`,
              width: 1350,
              height: 650,
              alt: frontMatter.title,
            },
          ],
        }}
      />
      <section>
        <aside>
          <div>
            <Image src={frontMatter.image} width={1350} height={650} />
          </div>
          <div>
            <MDXRemote {...mdxSource} />
          </div>
        </aside>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blog", params.slug);
  return { props: post };
}
