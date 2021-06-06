import { domain, twitter } from "/data/siteConfig";
const title = "NextVita Fastest Next JS Template Free";
const description =
  "Google Core Web Vital SEO update ready Next JS template with attractive blue theme for free download.";
const siteName = "NextVita";
const canonical = domain;
const SEO = {
  title,
  description,
  titleTemplate: "%s | " + siteName,
  canonical: canonical,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: canonical,
    title,
    description,
    images: [
      {
        url: domain + "/static/images/banner.png",
        alt: title,
        width: 1350,
        height: 650,
      },
    ],
  },
  twitter: {
    handle: twitter,
    site: twitter,
    cardType: "summary_large_image",
  },
};

export default SEO;
