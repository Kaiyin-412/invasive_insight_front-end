import logo from './logo.svg';
import './QuizApp.css';
import React, { useEffect, useState } from 'react';
import './QuizQuestion.js';
import './styles.css';

const quizData =[
  {
    question: "The fish in the picture below is an invasive species in Malaysia that has spread throughout the waterways in Malaysia. What is the name of the fish?",
    options: ["Ikan pacu (Mylopus)", "Suckermouth catfish (Hypostomus plecostomus)", "African catfish", "Flower horn (Cichiasoma)"],
    answer: "Suckermouth catfish (Hypostomus plecostomus)",
    explanation: "This fish is also known as 'Ikan Bandaraya' in Malaysia. It is named as such because it cleans algae, detritus, and leftover food in aquariums, similar to city garbage services – thus bandaraya, meaning council garbage service. Similarly, Indonesians call it 'ikan sapu-sapu' (sweeper fish) and Filipinos call it the 'janitor fish'.",
    hint: "This fish is black in colour.",
    //image: '../image/latestquizbg.jpg'
  },
  {
    question: "Why do the populations of invasive species grow so quickly?",
    options: ["Invasive species are native to an area.", "Invasive species are prey to many animals.", "Invasive species have no predators.", "Invasive species keep the ecosystems in equilibrium."],
    answer: "Invasive species have no predators.",
    explanation: "Invasive species lack natural predators in their new environments, allowing their populations to grow unchecked.",
    hint: "Think about what controls the population of a species in an ecosystem. What role do predators play in keeping populations in check?"
  },
  {
    question: "The picture below shows an invasive species in Malaysia known as the Apple Snail. Why is the Apple Snail considered an invasive species in Malaysia’s wetlands?",
    options: ["It disrupts rice paddies by feeding on young rice plants", "It reduces fish population by preying on native fish", "It causes water pollution by excreting harmful chemicals", "It assists in mosquito breeding"],
    answer: "It disrupts rice paddies by feeding on young rice plants",
    explanation: "Apple Snails feed on young, tender rice plants and other crops, causing major damage in paddy fields. This reduces crop yields, increasing costs and labor for farmers who must control the snails.",
    hint: "This type of snail is known for its appetite for tender plants. Think about how this could affect crops in wetland areas."
  },
  {
    question: "Which of the following is a major consequence of invasive species in Malaysia?",
    options: ["They help increase biodiversity", "They threaten native species and disrupt ecosystems", "They create more food sources for animals", "They have no real impact"],
    answer: "They threaten native species and disrupt ecosystems",
    explanation: "Invasive species compete with local flora and fauna for resources, sometimes outcompeting them entirely. This disrupts the balance of ecosystems and affects biodiversity, causing broader ecological consequences like changes in soil health and water quality.",
    hint: ""
  },
  {
    question: "Which invasive plant species in Malaysia poses a threat to native plants by spreading rapidly and taking over natural habitats?",
    options: ["Mangrove Tree", "Oil Palm", "Water Hyacinth", "Rubber Tree"],
    answer: "Water Hyacinth",
    explanation: "Water Hyacinth is an invasive aquatic plant that spreads quickly over water surfaces, blocking sunlight and depleting oxygen in the water, which disrupts ecosystems and harms native aquatic plants and fish.",
    hint: ""
  },
  {
    question: "Why are invasive species a threat to Malaysia’s ecosystems?",
    options: ["They help control local pest populations", "They contribute to biodiversity by introducing new species", "They often compete with native species for resources", "They enhance soil quality and reduce pollution"],
    answer: "They often compete with native species for resources",
    explanation: "Invasive species directly threaten ecosystems by competing with native species for resources, spreading disease, and impacting native species' ability to reproduce.",
    hint: "Think about how non-native species might impact the resources and survival of species that already live in the ecosystem."
  },
  {
    question: "Which of the following is NOT a reason why the Red-Eared Slider turtle is considered an invasive species in Malaysia?",
    options: ["It competes with native turtles for food and habitat", "It is a natural predator of local pests like mosquitoes", "It spreads diseases that affect native species", "It can outcompete and displace native turtle populations"],
    answer: "It is a natural predator of local pests like mosquitoes",
    explanation: "The Red-Eared Slider turtle is invasive because it competes with native turtles for resources, spreads diseases, and outcompetes native populations. It is not known for controlling pests like mosquitoes.",
    hint: "Think about the kind of impact the Red-Eared Slider has on the environment. Does it help by eating pests, or does it cause problems for native turtles?"
  },
  {
    question: "Which of the following species is considered invasive in Malaysia and poses a significant threat to the local biodiversity?",
    options: ["Malayan Tapir", "Asian Elephant", "Golden Apple Snail", "Sun Bear"],
    answer: "Golden Apple Snail",
    explanation: "The Golden Apple Snail is an invasive species in Malaysia, affecting rice fields by damaging crops and disrupting local ecosystems. In contrast, the Malayan Tapir, Asian Elephant, and Sun Bear are native species crucial to biodiversity.",
    hint: "This species is known for causing damage to rice fields and is not originally from Malaysia."
  },
  {
    question: "What effect will an invasive species have on the carrying capacity of an ecosystem?",
    options: ["The carrying capacity will increase", "The carrying capacity for everyone will decrease", "The carrying capacity will only decrease for those in competition for the same resource", "The carrying capacity for all animals will stay the same"],
    answer: "The carrying capacity will only decrease for those in competition for the same resource",
    explanation: "An invasive species competes with native species for resources, leading to a reduced carrying capacity for those specific resources.",
    hint: "Consider how the arrival of a new species affects resource availability for native species. Will it impact all species equally, or mainly those that need the same resources?"
  },
  {
    question: "Which of the following animals has the longest migration journey, traveling over 70,000 kilometers (43,500 miles) annually?",
    options: ["Gray Whale", "Arctic Tern", "Monarch Butterfly", "Leatherback Sea Turtle"],
    answer: "Arctic Tern",
    explanation: "The Arctic Tern holds the record for the longest migration, traveling from the Arctic to the Antarctic and back each year, covering more than 70,000 kilometers to remain in continuous sunlight.",
    hint: ""
  }
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(60);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
      if (timer === 0) {
          setTimeUp(true);
          handleProceed(false); // Assume answer is wrong if time runs out
      }
      const countdown = setInterval(() => {
          setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);

      return () => clearInterval(countdown); 
  }, [timer]);

  useEffect(() => {
      setTimer(60); 
      setTimeUp(false);
  }, [currentQuestionIndex]);

  const handleProceed = (isCorrect) => {
      if (isCorrect) setScore(score + 1);

      if (currentQuestionIndex < quizData.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
          setIsQuizCompleted(true);
      }
  };

  const progressWidth = ((currentQuestionIndex + 1) / quizData.length) * 100;

  return (
      <div>
          <div className="progress-timer-wrapper">
              <div className="progress-container">
                  <div className="progress-bar">
                      <div className="progress" style={{ width: `${progressWidth}%` }}></div>
                  </div>
              </div>
              <div className="timer-container">
                  <span className="timer-icon">⏰</span>
                  <span className="timer">{timer}</span>
              </div>
          </div>
          {isQuizCompleted ? (
              <div className="score-container">
                  <div className="score-circle">
                      <p>{score} / {quizData.length}</p>
                  </div>
              </div>
          ) : (
              <QuizQuestion
                  questionData={quizData[currentQuestionIndex]}
                  onProceed={handleProceed}
                  timeUp={timeUp} 
              />
          )}
      </div>
  );
}

export default QuizApp;
