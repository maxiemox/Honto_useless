<img width="3188" height="1202" alt="image" src="https://github.com/user-attachments/assets/46559564-9254-4f82-9a44-6509ada717c4" />


**HONTO** 🎯

*Basic Details*
Team Name: Miyamura

Team Members

Team Lead: Mruthula S - Adi Shankara Institute of Engineering and Technology

Member 2: Anna Catherine -  Adi Shankara Institute of Engineering and Technology


Project Description : 

Honto is a dark-themed, AI-powered web app that recommends movies to ghosts based on their personalities, origins, and emotional backstories. Users enter ghost character traits, and the system analyzes them using NLP and emotion-detection models to generate eerily accurate film suggestions. It's a spooky, fun twist on recommendation engines — made for the undead, by the slightly unhinged. 👻🎬


The Problem :

Ghosts are bored.
Centuries of haunting have left spirits with nothing new to scream at. They’ve seen The Ring ten times, Paranormal Activity is so 2007, and they’re tired of being misrepresented.

The Solution (that nobody asked for):

Introducing Honto — the world’s first AI-powered movie recommender for ghosts.
Ghosts enter their backstory, emotional trauma, and curse origin, and our AI analyzes their spectral personality to suggest cinematic experiences tailored to their eternal unrest.
Whether you're a vengeful well-dweller or a misunderstood poltergeist, Honto gets you.

⚙️ Technical Details

🧠 Technologies/Components Used

For Software:

Framework:

React (likely via Next.js or plain React) — for building the single-page application.

Styling:

TailwindCSS — utility-first CSS framework perfect for dark themes and responsive layouts.

Custom CSS Animations — for mist overlays, glowing effects, hover pulses, and flickers.

Framer Motion — for floating ghost animations and spectral transitions.

Icons & Visuals:

Lucide or Phosphor Icons — for spooky icons like ghosts, tombstones, etc.

Lottie / SVG animations — for floating particles, mist, or ghost silhouettes.


Installation:

1. git clone https://github.com/yourusername/honto.git
   cd honto
2.  cd honto-frontend
npm install
3.Backend (FastAPI + Transformers)
cd ../honto-backend
pip install -r requirements.txt
4. cd ../honto-frontend
npm run dev


📘 Project Documentation
Input Flow:
User enters ghost character details (e.g. “Kayako Saeki – cursed spirit from Japan”)
Backend parses personality traits, emotional tone, and origin.
Hugging Face models evaluate:
Emotion Classification – What emotional state defines the ghost?
Zero-shot classification – Which movies semantically match this ghost's story?
Text Embedding – Compare ghost profile with movie loglines.

Output:
Recommendations like:
“This ghost may enjoy The Others (2001) for its tragic emotional arc.”
“The Sixth Sense is ideal for subtle, misunderstood specters.”

Screenshots (Add at least 3)
<img width="1914" height="941" alt="image" src="https://github.com/user-attachments/assets/fad7ad11-dcbb-4422-b5ea-f9dfba237fd9" />
<img width="1911" height="925" alt="image" src="https://github.com/user-attachments/assets/e3961831-4b9d-4c60-95ca-9f98a1cf9a1a" />
<img width="1920" height="924" alt="image" src="https://github.com/user-attachments/assets/73f97f54-c4f6-4045-a6df-4907ed8bacc0" />


Project Demo : honto.vercel.app


Team Contributions : 
Mruthla S : Ideation
Anna Catherine : Implementation
