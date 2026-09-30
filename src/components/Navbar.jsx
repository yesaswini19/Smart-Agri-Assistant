export default function Navbar({ onNavigate }) {
  return (
    <header className="site-header">
      <h1>🌱 Smart Agri Assistant</h1>
      <nav aria-label="Main navigation">
        <button type="button" onClick={() => onNavigate('top')}>Home</button>
        <button type="button" onClick={() => onNavigate('features')}>Features</button>
        <button type="button" onClick={() => onNavigate('contact')}>Contact</button>
      </nav>
    </header>
  );
}