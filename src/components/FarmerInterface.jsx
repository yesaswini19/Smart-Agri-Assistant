import Button from './Button.jsx';

export default function FarmerInterface({
  language,
  question,
  output,
  imageInputRef,
  onLanguageChange,
  onQuestionChange,
  onGetAdvice,
}) {
  return (
    <section className="farmer-interface" id="farmerInterface" aria-labelledby="farmer-title">
      <h2 id="farmer-title">Farmer Query Interface</h2>
      <div className="input-section">
        <label htmlFor="language">Language</label>
        <select id="language" value={language} onChange={onLanguageChange}>
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="Telugu">Telugu</option>
          <option value="Hindi">Hindi</option>
        </select>

        <label htmlFor="question">Your question</label>
        <textarea
          id="question"
          placeholder="Type your question (e.g., Best crop for my soil today?)"
          value={question}
          onChange={onQuestionChange}
        />

        <label htmlFor="imageInput">Crop image</label>
        <input ref={imageInputRef} type="file" accept="image/*" id="imageInput" />
        <Button onClick={onGetAdvice}>Get Advice</Button>
      </div>
      <div className="output-box" aria-live="polite">{output}</div>
    </section>
  );
}