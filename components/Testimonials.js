import Image from "next/image";

export default function Testimonials() {
  return (
    <section>
      <header>
        <h2> Testimonials</h2>
        <p>Sample testimonial section for your website</p>
      </header>
      <aside>
        <blockquote>
          <Image alt="Quote" src="/icon-quote.svg" width="150" height="80" />
          <br />
          "No CSS Class name, so no need to remember any style, just pure html code to build site. "
          <footer>
            <Image alt="face-1" src="/face-1.jpeg" width="80" height="80" />
            <br />
            <br />
            <i>- Sample User, NextVita</i>
          </footer>
        </blockquote>
      </aside>
      <aside>
        <blockquote>
          <Image alt="Quote-2" src="/icon-quote.svg" width="150" height="80" />
          <br />
          "Super fast page loading and ready to use component to build site as needed."
          <footer>
            <Image alt="face-2" src="/face-2.jpeg" width="80" height="80" />
            <br />
            <br />
            <i>- Another User, Not from NextVita</i>
          </footer>
        </blockquote>
      </aside>
    </section>
  );
}
