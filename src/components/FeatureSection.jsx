import Button from './Button.jsx';

const features = [
  {
    title: '🌍 Localized Advice',
    description: 'Receive recommendations based on soil, weather & crop history.',
    action: 'Try Advice',
    type: 'advice',
  },
  {
    title: '📸 Image Support',
    description: 'Upload crop images for disease detection & remedies.',
    action: 'Upload Image',
    type: 'image',
  },
  {
    title: '🎤 Voice & Chat',
    description: 'Ask questions in your local language via voice or chat.',
    action: 'Try Voice',
    type: 'voice',
  },
  {
    title: '📊 Market Insights',
    description: 'Get real-time crop prices & demand trends.',
    action: 'View Market',
    type: 'market',
  },
];

export default function FeatureSection({ onFeatureAction }) {
  return (
    <section className="features" id="features" aria-label="Features">
      {features.map((feature) => (
        <article className="card" key={feature.type}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
          <Button onClick={() => onFeatureAction(feature.type)}>{feature.action}</Button>
        </article>
      ))}
    </section>
  );
}