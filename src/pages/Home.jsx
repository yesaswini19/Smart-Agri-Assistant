import { useRef, useState } from 'react';
import ContactForm from '../components/ContactForm.jsx';
import FeatureSection from '../components/FeatureSection.jsx';
import FarmerInterface from '../components/FarmerInterface.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';

const initialOutput = 'Results will appear here...';

export default function Home() {
  const [language, setLanguage] = useState('');
  const [question, setQuestion] = useState('');
  const [output, setOutput] = useState(initialOutput);
  const [contactMessage, setContactMessage] = useState('');
  const imageInputRef = useRef(null);

  function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  function generateResponse() {
    let response = '📢 Suggested Crop: Rice\n🌦️ Weather: Moderate Rain\n💰 Market Demand: High\n✅ Profit Margin: 18% Expected';

    if (language === 'Telugu') {
      response = '📢 సిఫారసు చేసిన పంట: బియ్యం\n🌦️ వాతావరణం: మోస్తరు వర్షం\n💰 మార్కెట్ డిమాండ్: ఎక్కువ\n✅ లాభం: 18%';
    } else if (language === 'Hindi') {
      response = '📢 सुझाई गई फसल: धान\n🌦️ मौसम: मध्यम बारिश\n💰 बाज़ार की मांग: अधिक\n✅ लाभ: 18%';
    }

    setOutput(`${response}\n\n📝 Question: ${question}`);
  }

  function handleFeatureAction(type) {
    scrollToSection('farmerInterface');

    if (type === 'advice') {
      setOutput('🌱 Localized Advice:\nBest Crop = Rice\nFertility Score = High\nRotation Suggestion = Pulses next season.');
    } else if (type === 'image') {
      setOutput('📸 Please upload an image of your crop for analysis...');
      imageInputRef.current?.click();
    } else if (type === 'voice') {
      setOutput('🎤 Voice Input: (Future feature — connect mic API here)');
    } else if (type === 'market') {
      setOutput('📊 Market Insights:\nWheat ₹2100/qtl\nRice ₹2400/qtl\nMaize ₹1800/qtl');
    }
  }

  function handleContactSubmit(event) {
    event.preventDefault();
    setContactMessage('✅ Thank you! We will get back to you soon.');
  }

  return (
    <>
      <Navbar onNavigate={scrollToSection} />
      <main className="container" id="top">
        <Hero onTryPrototype={() => scrollToSection('farmerInterface')} />
        <FeatureSection onFeatureAction={handleFeatureAction} />
        <FarmerInterface
          language={language}
          question={question}
          output={output}
          imageInputRef={imageInputRef}
          onLanguageChange={(event) => setLanguage(event.target.value)}
          onQuestionChange={(event) => setQuestion(event.target.value)}
          onGetAdvice={generateResponse}
        />
        <ContactForm message={contactMessage} onSubmit={handleContactSubmit} />
      </main>
      <Footer />
    </>
  );
}