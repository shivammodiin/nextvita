import Header from "./Header";
import Footer from "./Footer";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

const Layout = ({ children, HeroComp }) => (
  <>
    <DefaultSeo {...SEO} />
    <Header HeroComp={HeroComp} />
    {children}
    <Footer />
  </>
);

export default Layout;
