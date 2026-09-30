import Button from './Button.jsx';

export default function Hero({ onTryPrototype }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h2 id="hero-title">AI-powered Decision Support for Farmers</h2>
      <p>Get crop recommendations, soil analysis, and market insights in your own language.</p>
      <Button onClick={onTryPrototype}>Try Prototype</Button>
    </section>
  );
}