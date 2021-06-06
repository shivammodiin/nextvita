export default function Hero({ heroData }) {
  return (
    <>
      <h1>{heroData?.title}</h1>
      {heroData.subtitle?.()}
      {heroData.helperElement?.() && (
        <>
          <br />
          {heroData.helperElement?.()}
        </>
      )}
    </>
  );
}
