const seeds = [
  ['Prompt', 'eine Eingabe oder Aufgabenbeschreibung für ein KI-System', 'eine fest eingebaute Sicherheitsregel', 'ein gespeichertes Passwort'],
  ['Trainingsdaten', 'Beispiele, aus denen ein Modell Muster lernt', 'nur Daten, die nach der Veröffentlichung entstehen', 'die persönliche Meinung einer einzelnen Person'],
  ['Algorithmus', 'eine festgelegte Folge von Regeln oder Rechenschritten', 'ein besonders schneller Computer', 'ein soziales Netzwerk'],
  ['KI-Modell', 'ein System, das aus Daten Muster ableitet und Aufgaben bearbeitet', 'ein Roboter mit menschlichen Gefühlen', 'eine gesetzliche Regelung'],
  ['Halluzination', 'eine überzeugend klingende, aber falsche KI-Antwort', 'eine besonders gute Quellenangabe', 'ein Bildfilter für Träume'],
  ['Deepfake', 'ein künstlich erzeugtes oder manipuliertes Bild, Video oder Audio', 'ein stark verschlüsseltes Dokument', 'eine besonders tiefe Datenbank'],
  ['Bias', 'eine systematische Verzerrung in Daten oder Ergebnissen', 'eine besonders neutrale Antwort', 'eine schnellere Internetverbindung'],
  ['Datenschutz', 'der Schutz persönlicher Informationen vor unbefugter Nutzung', 'das Löschen aller digitalen Geräte', 'eine Methode zum Schreiben von Prompts'],
  ['Menschliche Kontrolle', 'dass Menschen wichtige KI-Ergebnisse prüfen und verantworten', 'dass KI keine Daten mehr verarbeitet', 'dass nur Roboter Entscheidungen treffen'],
  ['Quellenprüfung', 'das Vergleichen wichtiger Aussagen mit verlässlichen Quellen', 'das Kopieren der ersten KI-Antwort', 'das Ausschalten einer Suchmaschine'],
  ['Spracherkennung', 'das Umwandeln gesprochener Sprache in Text oder Befehle', 'das Übersetzen von Bildern in Musik', 'das Sortieren von E-Mails nach Farbe'],
  ['Bildgenerator', 'ein System, das aus Textbeschreibungen neue Bilder erzeugt', 'eine Kamera mit besonders hoher Auflösung', 'ein Drucker ohne Tinte'],
  ['Empfehlungssystem', 'eine KI, die passende Inhalte oder Produkte vorschlägt', 'ein Programm, das nur Zufallszahlen erzeugt', 'eine Regel für den Straßenverkehr'],
  ['Navigation mit KI', 'das Berechnen und Anpassen von Routen anhand von Verkehrsdaten', 'das Abschalten von Satelliten', 'das Ausdrucken einer Papierkarte'],
  ['Autonomes Fahren', 'Fahren mit Systemen, die Teile der Fahraufgabe übernehmen', 'Fahren ohne jede Technik', 'eine besonders schnelle Fahrradart'],
  ['Gesichtserkennung', 'das automatische Erkennen oder Vergleichen von Gesichtern in Bildern', 'das Messen der Körpergröße', 'das Erfinden neuer Personen'],
  ['KI in der Medizin', 'eine Unterstützung für Fachpersonal bei klar abgegrenzten Aufgaben', 'ein Ersatz für jede ärztliche Entscheidung', 'eine Methode zum Verkaufen von Medikamenten'],
  ['KI-Gesetz der EU', 'ein risikobasierter Rahmen für bestimmte KI-Anwendungen', 'ein Verbot aller Computerprogramme', 'eine neue Programmiersprache'],
  ['Risikobasiert', 'dass strengere Regeln für Anwendungen mit höherem Schadenspotenzial gelten', 'dass jede KI genau gleich behandelt wird', 'dass nur Spiele überprüft werden'],
  ['Verschlüsselung', 'eine Technik, die Daten für Unbefugte unlesbar macht', 'eine Methode zum Generieren von Bildern', 'ein Synonym für Löschen'],
  ['Metadaten', 'zusätzliche Angaben über Daten, etwa Zeitpunkt oder Herkunft', 'das Gegenteil von Daten', 'nur geheime Passwörter'],
  ['Chatbot', 'ein Programm, das in natürlicher Sprache mit Menschen kommuniziert', 'ein Gerät zum Reparieren von Kabeln', 'eine Art von Suchmaschine ohne Text'],
  ['KI-Begleiter', 'ein Chatbot, der auf persönliche Gespräche oder soziale Interaktion ausgerichtet ist', 'ein Navigationsgerät im Auto', 'ein Programm für Tabellenkalkulation'],
  ['Digitale Kompetenz', 'die Fähigkeit, digitale Technik kritisch und sicher zu nutzen', 'möglichst viele Apps zu installieren', 'keine Fragen zu stellen'],
  ['Personalisierung', 'das Anpassen von Inhalten an einzelne Nutzer oder Situationen', 'das Löschen aller Einstellungen', 'das Verwenden identischer Antworten für alle']
];

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

const questionPool = seeds.flatMap(([term, correct, wrongA, wrongB]) => [
  { question: `Was bedeutet „${term}“ im Zusammenhang mit KI?`, answers: [correct, wrongA, wrongB], correct, explanation: `Richtig: ${term} bedeutet ${correct}.` },
  { question: `Welche Beschreibung passt zu „${term}“?`, answers: [wrongA, correct, wrongB], correct, explanation: `Genau. ${term} ist ${correct}.` },
  { question: `Welche Aussage zu ${term} ist richtig?`, answers: [wrongB, wrongA, correct], correct, explanation: `Die passende Aussage lautet: ${correct}.` },
  { question: `Worauf bezieht sich der Begriff ${term}?`, answers: [correct, wrongB, wrongA], correct, explanation: `Richtig beantwortet: ${term} beschreibt ${correct}.` }
]);

function chooseTen() {
  const previous = JSON.parse(sessionStorage.getItem('kiQuizPrevious') || '[]');
  let selection = shuffle(questionPool.map((_, index) => index)).slice(0, 10);
  let shared = selection.filter(index => previous.includes(index)).length;
  let attempts = 0;
  while (shared > 4 && attempts < 30) {
    selection = shuffle(questionPool.map((_, index) => index)).slice(0, 10);
    shared = selection.filter(index => previous.includes(index)).length;
    attempts += 1;
  }
  sessionStorage.setItem('kiQuizPrevious', JSON.stringify(selection));
  return selection.map(index => questionPool[index]);
}

const quiz = chooseTen();
let current = 0;
let score = 0;
let answered = false;

const questionElement = document.querySelector('#question');
const answersElement = document.querySelector('#answers');
const feedbackElement = document.querySelector('#feedback');
const nextButton = document.querySelector('#next-question');
const countElement = document.querySelector('#question-count');
const progressElement = document.querySelector('#quiz-progress');

function renderQuestion() {
  const item = quiz[current];
  answered = false;
  questionElement.textContent = item.question;
  countElement.textContent = `Frage ${current + 1} von ${quiz.length}`;
  feedbackElement.textContent = '';
  nextButton.disabled = true;
  nextButton.textContent = current === quiz.length - 1 ? 'Ergebnis anzeigen →' : 'Nächste Frage →';
  progressElement.innerHTML = Array.from({ length: quiz.length }, (_, index) => `<i class="${index === current ? 'active' : index < current ? 'done' : ''}"></i>`).join('');
  answersElement.innerHTML = '';

  shuffle(item.answers).forEach(answer => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer';
    button.textContent = answer;
    button.addEventListener('click', () => selectAnswer(answer));
    answersElement.appendChild(button);
  });
}

function selectAnswer(answer) {
  if (answered) return;
  answered = true;
  const item = quiz[current];
  const buttons = [...answersElement.querySelectorAll('.answer')];
  buttons.forEach(button => {
    button.disabled = true;
    if (button.textContent === item.correct) button.classList.add('correct');
  });
  if (answer === item.correct) {
    score += 1;
    feedbackElement.textContent = item.explanation;
  } else {
    buttons.find(button => button.textContent === answer).classList.add('wrong');
    feedbackElement.textContent = `Nicht ganz. ${item.explanation}`;
  }
  nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
  if (!answered) return;
  if (current < quiz.length - 1) {
    current += 1;
    renderQuestion();
    return;
  }
  questionElement.textContent = score === 10 ? 'Perfekt – 10 von 10!' : `Geschafft: ${score} von 10 richtig.`;
  answersElement.innerHTML = '<p class="result-text">Beim nächsten Laden dieser Seite erhältst du einen anderen Satz aus dem Pool mit 100 Fragen.</p>';
  feedbackElement.textContent = 'Wichtig ist nicht nur die Technik zu kennen, sondern sie kritisch und verantwortungsvoll zu nutzen.';
  progressElement.innerHTML = Array.from({ length: 10 }, () => '<i class="done"></i>').join('');
  nextButton.textContent = 'Neue 10 Fragen laden ↻';
  nextButton.disabled = false;
  nextButton.onclick = () => window.location.reload();
});

renderQuestion();
