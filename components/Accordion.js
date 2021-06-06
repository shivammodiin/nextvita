export default function Accordion() {
  return (
    <article>
      <h2>Frequently Asked Questions</h2>
      <details>
        <summary>Why would I use this?</summary>
        <p>100% lighthouse core web vital score. </p>
        <p>
          <sup>PRO TIP</sup> A NextVita is a free template, it doesn't have to be
          <i>and shouldn't be</i> perfect. You can customize it as per your need.
        </p>
      </details>
      <details>
        <summary>What skills will I need?</summary>
        <p>Mostly NextJS, rest of thing you may already know. </p>
        <p>
          <i>CSS</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <progress max="100" value="5">
            5
          </progress>
        </p>
        <p>
          <i>Design</i>&nbsp;&nbsp;
          <progress max="100" value="0">
            0
          </progress>
        </p>
        <p>
          <i>HTML</i>&nbsp;&nbsp;&nbsp;&nbsp;
          <progress max="100" value="100">
            95
          </progress>
        </p>
      </details>
      <details>
        <summary>How to contribute?</summary>
        <p>We are open for all kind of contribution. Just push your code to our github. </p>
      </details>
      <details>
        <summary>What if I don't like the default styles?</summary>
        <p>
          Most styles are editable through <em>CSS variables</em>. You can also
          add your own styles and class to override the default css from MVP css. 
        </p>
      </details>
    </article>
  );
}
