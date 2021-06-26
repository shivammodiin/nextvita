import { useEffect } from "react";
import Image from "next/image";
import Testimonials from "../components/Testimonials";
import Button from "../components/Button";
import { MDXProvider } from "@mdx-js/react";
import { useRouter } from "next/router";
import "../styles/main.css";
import * as gtag from "../lib/analytics";

export function reportWebVitals({ id, name, label, value }) {
  //console.log({ id, name, label, value });
  if (label === "web-vital" && typeof window !== "undefined" && window.gtag) {
    window.gtag("event", name, {
      event_category: "Web Vitals",
      value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
      event_label: id, // id unique to current page load
      nonInteraction: true, // avoids affecting bounce rate.
    });
  }
}

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <MDXProvider components={{ Image, Testimonials, Button }}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
