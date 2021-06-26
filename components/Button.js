const Button = ({ src, title }) => (
  <p>
    <a target="_self" rel="noopener" href={src}>
      <i>{title}</i>
    </a>
  </p>
);

export default Button;
