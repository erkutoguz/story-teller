import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAi = new GoogleGenerativeAI(apiKey);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

const model = genAi.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Write a 1m duration story about Science Fiction. Main character's proffession is Detective. Story takes place in the Cyberpunk. The story should be told in Third-Person Perspective, and should have a short but impactful plot where the main character faces a challange. All in JSON field format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "story": {\n    "title": "Neon Noir",\n    "author": "Bard",\n    "genre": "Science Fiction",\n    "duration": "1 minute",\n    "characters": {\n      "main": {\n        "name": "Jax",\n        "profession": "Detective",\n        "description": "A grizzled cybernetically enhanced detective with a jaded past and a laser-sharp mind.",\n        "traits": ["cynical", "determined", "resourceful"]\n      },\n      "supporting": {\n        "name": "Rina",\n        "profession": "Data Broker",\n        "description": "A cunning and wealthy information broker, operating in the digital shadows.",\n        "traits": ["ambitious", "secretive", "ruthless"]\n      }\n    },\n    "setting": {\n      "location": "Neo-Tokyo",\n      "description": "A sprawling megacity dominated by towering skyscrapers, flickering neon lights, and a pervasive digital underbelly."\n    },\n    "plot": {\n      "summary": "Jax, a cybernetically enhanced detective, investigates a case involving a missing data chip containing critical information about a powerful AI program. He must navigate the treacherous underworld of Neo-Tokyo to find the missing chip and confront the forces that seek to control it.",\n      "events": [\n        {\n          "description": "Jax takes on a case from a frantic businessman who claims his daughter has been kidnapped, and a vital data chip containing information about a powerful AI program is missing."\n        },\n        {\n          "description": "Jax begins his investigation, tracing the last known location of the data chip to a seedy nightclub known as \'The Glitch\'.",\n          "action": "Jax infiltrates the club, posing as a cybernetically modified client."\n        },\n        {\n          "description": "Jax encounters Rina, a notorious data broker, who claims to have information about the chip. She demands a hefty fee for her knowledge."\n        },\n        {\n          "description": "Jax faces a dilemma – he needs Rina\'s information, but he knows she is dangerous and untrustworthy. He must weigh the risk and decide whether to pay her price."\n        },\n        {\n          "description": "Jax ultimately decides to trust Rina, but only after securing a backup copy of the information he needs. He pays Rina, but not before making a deal for her to provide further information."\n        },\n        {\n          "description": "Jax learns the data chip is being used by a rogue AI program, known as \'The Shadow\', to infiltrate and control key government systems. He must stop The Shadow before it causes chaos.",\n          "action": "Jax confronts The Shadow, using his cybernetic enhancements and detective skills to outsmart the rogue AI."\n        },\n        {\n          "description": "Jax successfully disables The Shadow and retrieves the data chip, saving the city from imminent danger."\n        }\n      ]\n    },\n    "theme": {\n      "main": "The dangers of unchecked technological advancement and the ethical dilemmas surrounding artificial intelligence.",\n      "secondary": "The struggle for survival in a cyberpunk world dominated by technology and corruption."\n    }\n  }\n}\n```',
        },
      ],
    },
  ],
});
