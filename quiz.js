const seeds = [
  ['Prompt', 'eine Eingabe oder Aufgabenbeschreibung für ein KI-System', 'eine fest eingebaute Sicherheitsregel', 'ein gespeichertes Passwort', 'Ein Prompt beschreibt, was die KI tun soll. Je genauer die Aufgabe und der gewünschte Stil formuliert sind, desto gezielter fällt die Antwort aus.', 'Zum Beispiel kann ein Prompt einen Chatbot bitten, eine schwierige Hausaufgabe in drei verständlichen Schritten zu erklären.'],
  ['Trainingsdaten', 'Beispiele, aus denen ein Modell Muster lernt', 'nur Daten, die nach der Veröffentlichung entstehen', 'die persönliche Meinung einer einzelnen Person', 'Trainingsdaten liefern die Beispiele, aus denen ein Modell typische Muster ableitet. Sind sie einseitig oder fehlerhaft, können diese Eigenschaften im Ergebnis wieder auftauchen.', 'Ein Sprachmodell lernt etwa aus vielen Textbeispielen, wie Wörter und Sätze normalerweise zusammenpassen.'],
  ['Algorithmus', 'eine festgelegte Folge von Regeln oder Rechenschritten', 'ein besonders schneller Computer', 'ein soziales Netzwerk', 'Ein Algorithmus ist ein nachvollziehbarer Ablauf von Regeln, der aus Eingaben ein Ergebnis berechnet. KI-Systeme nutzen solche Abläufe, um Daten zu verarbeiten.', 'Eine Navigations-App vergleicht mit solchen Rechenschritten verschiedene Routen und ihre voraussichtliche Fahrzeit.'],
  ['KI-Modell', 'ein System, das aus Daten Muster ableitet und Aufgaben bearbeitet', 'ein Roboter mit menschlichen Gefühlen', 'eine gesetzliche Regelung', 'Ein KI-Modell speichert gelernte Muster und nutzt sie für neue Eingaben. Es denkt dabei nicht wie ein Mensch und besitzt keine eigenen Gefühle.', 'Ein Modell kann eine Lernfrage beantworten, weil es aus vielen Beispielen sprachliche Zusammenhänge gelernt hat.'],
  ['Halluzination', 'eine überzeugend klingende, aber falsche KI-Antwort', 'eine besonders gute Quellenangabe', 'ein Bildfilter für Träume', 'Eine Halluzination klingt plausibel, enthält aber eine erfundene oder falsche Information. Das passiert, wenn ein System eine Lücke nicht erkennt und trotzdem eine Antwort formuliert.', 'Ein Chatbot könnte eine nicht existierende Studie oder ein falsches Datum nennen – deshalb sind Quellenprüfungen wichtig.'],
  ['Deepfake', 'ein künstlich erzeugtes oder manipuliertes Bild, Video oder Audio', 'ein stark verschlüsseltes Dokument', 'eine besonders tiefe Datenbank', 'Ein Deepfake verändert Gesicht, Stimme oder Handlung so, dass ein künstlicher Inhalt echt wirken kann. Dadurch können Menschen getäuscht werden.', 'Ein gefälschtes Video könnte einer Person Worte in den Mund legen, die sie nie gesagt hat.'],
  ['Bias', 'eine systematische Verzerrung in Daten oder Ergebnissen', 'eine besonders neutrale Antwort', 'eine schnellere Internetverbindung', 'Bias bedeutet, dass Daten oder ein System bestimmte Gruppen oder Sichtweisen systematisch bevorzugt oder benachteiligt.', 'Wenn ein Erkennungssystem vor allem mit Bildern einer Bevölkerungsgruppe trainiert wurde, kann es andere Gesichter schlechter erkennen.'],
  ['Datenschutz', 'der Schutz persönlicher Informationen vor unbefugter Nutzung', 'das Löschen aller digitalen Geräte', 'eine Methode zum Schreiben von Prompts', 'Datenschutz soll verhindern, dass persönliche Informationen ohne guten Grund gesammelt, weitergegeben oder ausgewertet werden.', 'Private Gesundheitsdaten oder Passwörter gehören nicht in einen beliebigen Chatbot.'],
  ['Menschliche Kontrolle', 'dass Menschen wichtige KI-Ergebnisse prüfen und verantworten', 'dass KI keine Daten mehr verarbeitet', 'dass nur Roboter Entscheidungen treffen', 'Menschliche Kontrolle bedeutet, dass eine verantwortliche Person ein Ergebnis bewertet und bei Bedarf korrigiert. KI darf nicht automatisch jede wichtige Entscheidung treffen.', 'Vor einer medizinischen Diagnose prüft Fachpersonal den Hinweis eines KI-Systems.'],
  ['Quellenprüfung', 'das Vergleichen wichtiger Aussagen mit verlässlichen Quellen', 'das Kopieren der ersten KI-Antwort', 'das Ausschalten einer Suchmaschine', 'Bei einer Quellenprüfung wird eine Aussage mit unabhängigen und vertrauenswürdigen Informationen verglichen. So lassen sich Fehler und erfundene Belege erkennen.', 'Bei einer Hausarbeit sollte eine KI-Antwort mit einer Bibliotheksquelle oder offiziellen Statistik abgeglichen werden.'],
  ['Spracherkennung', 'das Umwandeln gesprochener Sprache in Text oder Befehle', 'das Übersetzen von Bildern in Musik', 'das Sortieren von E-Mails nach Farbe', 'Spracherkennung wandelt Schall in Wörter oder Befehle um. Erst dadurch kann ein Sprachassistent einen gesprochenen Wunsch verarbeiten.', 'Ein Timer beim Kochen wird gestartet, nachdem der Assistent den Sprachbefehl erkannt hat.'],
  ['Bildgenerator', 'ein System, das aus Textbeschreibungen neue Bilder erzeugt', 'eine Kamera mit besonders hoher Auflösung', 'ein Drucker ohne Tinte', 'Ein Bildgenerator erstellt aus einer Beschreibung ein neues Bild. Das Ergebnis ist kein Beweis für eine echte Aufnahme und sollte bei Veröffentlichungen gekennzeichnet werden.', 'Aus „Plakat für einen Schulflohmarkt im Retro-Stil“ kann ein erster Entwurf entstehen.'],
  ['Empfehlungssystem', 'eine KI, die passende Inhalte oder Produkte vorschlägt', 'ein Programm, das nur Zufallszahlen erzeugt', 'eine Regel für den Straßenverkehr', 'Ein Empfehlungssystem vergleicht Interessen und Nutzungsmuster, um passende Inhalte auszuwählen. Seine Vorschläge sind personalisiert, aber nicht automatisch objektiv oder vollständig.', 'Ein Musikdienst schlägt Songs vor, die zu den bisher gehörten Titeln passen.'],
  ['Navigation mit KI', 'das Berechnen und Anpassen von Routen anhand von Verkehrsdaten', 'das Abschalten von Satelliten', 'das Ausdrucken einer Papierkarte', 'KI-Navigation verbindet Karten-, Verkehrs- und Zeitdaten, um eine passende Route zu berechnen. Bei neuen Informationen kann sie einen anderen Weg vorschlagen.', 'Bei einem Stau empfiehlt die App eine Umfahrung oder den Wechsel zu Bus und Bahn.'],
  ['Autonomes Fahren', 'Fahren mit Systemen, die Teile der Fahraufgabe übernehmen', 'Fahren ohne jede Technik', 'eine besonders schnelle Fahrradart', 'Beim autonomen Fahren übernehmen Sensoren und Software bestimmte Fahraufgaben. Je nach System müssen Menschen trotzdem aufmerksam bleiben und eingreifen können.', 'Ein Robotaxi kann eine festgelegte Fahrt selbstständig durchführen, aber Sicherheitsregeln bleiben notwendig.'],
  ['Gesichtserkennung', 'das automatische Erkennen oder Vergleichen von Gesichtern in Bildern', 'das Messen der Körpergröße', 'das Erfinden neuer Personen', 'Gesichtserkennung vergleicht typische Merkmale eines Gesichts mit gespeicherten oder sichtbaren Bildern. Dabei sind Zweck, Genauigkeit und Datenschutz besonders wichtig.', 'Ein Smartphone kann das eigene Gesicht zur Entsperrung erkennen.'],
  ['KI in der Medizin', 'eine Unterstützung für Fachpersonal bei klar abgegrenzten Aufgaben', 'ein Ersatz für jede ärztliche Entscheidung', 'eine Methode zum Verkaufen von Medikamenten', 'KI in der Medizin kann Fachpersonal bei der Auswertung von Bildern oder Daten unterstützen. Die Verantwortung und die Diagnose bleiben bei qualifizierten Menschen.', 'Ein System markiert eine mögliche Auffälligkeit in einer Aufnahme, die anschließend ärztlich bewertet wird.'],
  ['KI-Gesetz der EU', 'ein risikobasierter Rahmen für bestimmte KI-Anwendungen', 'ein Verbot aller Computerprogramme', 'eine neue Programmiersprache', 'Der EU AI Act ordnet KI-Anwendungen nach ihrem Risiko ein und legt je nach Einsatzbereich unterschiedliche Pflichten fest.', 'Für ein System in einem sensiblen Bereich gelten strengere Anforderungen als für einen einfachen Spielefilter.'],
  ['Risikobasiert', 'dass strengere Regeln für Anwendungen mit höherem Schadenspotenzial gelten', 'dass jede KI genau gleich behandelt wird', 'dass nur Spiele überprüft werden', 'Risikobasiert bedeutet, dass Regeln von möglichen Schäden und dem konkreten Einsatz abhängen. Je größer das Risiko, desto höher sind die Anforderungen.', 'Eine KI für Bewerbungsentscheidungen braucht mehr Kontrolle als ein Filter für Urlaubsfotos.'],
  ['Verschlüsselung', 'eine Technik, die Daten für Unbefugte unlesbar macht', 'eine Methode zum Generieren von Bildern', 'ein Synonym für Löschen', 'Verschlüsselung verwandelt lesbare Daten in eine Form, die nur mit dem passenden Schlüssel wieder verständlich wird.', 'Beim Online-Banking schützt Verschlüsselung die Verbindung zwischen Gerät und Bank.'],
  ['Metadaten', 'zusätzliche Angaben über Daten, etwa Zeitpunkt oder Herkunft', 'das Gegenteil von Daten', 'nur geheime Passwörter', 'Metadaten beschreiben andere Daten und liefern Kontext, ohne selbst der eigentliche Inhalt zu sein.', 'Zu einem Foto können Aufnahmezeit, Ort oder verwendetes Gerät als Metadaten gespeichert sein.'],
  ['Chatbot', 'ein Programm, das in natürlicher Sprache mit Menschen kommuniziert', 'ein Gerät zum Reparieren von Kabeln', 'eine Art von Suchmaschine ohne Text', 'Ein Chatbot verarbeitet Sprache und antwortet dialogisch. Er kann zum Beispiel eine Lernfrage erklären oder eine Nachricht formulieren, liefert aber nicht automatisch verlässliche Fakten.', 'Beim Lernen kann ein Chatbot Rückfragen stellen und einen Lösungsweg Schritt für Schritt begleiten.'],
  ['KI-Begleiter', 'ein Chatbot, der auf persönliche Gespräche oder soziale Interaktion ausgerichtet ist', 'ein Navigationsgerät im Auto', 'ein Programm für Tabellenkalkulation', 'Ein KI-Begleiter ist auf regelmäßige persönliche Gespräche ausgelegt. Er kann zuhören und reagieren, ersetzt aber keine Freundschaft, Therapie oder professionelle Hilfe.', 'Menschen können mit einem solchen System Gedanken sortieren – bei einer Krise braucht es trotzdem menschliche Unterstützung.'],
  ['Digitale Kompetenz', 'die Fähigkeit, digitale Technik kritisch und sicher zu nutzen', 'möglichst viele Apps zu installieren', 'keine Fragen zu stellen', 'Digitale Kompetenz bedeutet, Technik zu verstehen, Ergebnisse zu hinterfragen und eigene Daten zu schützen.', 'Wer eine KI-Antwort mit Quellen vergleicht und sensible Daten nicht eingibt, handelt digital kompetent.'],
  ['Personalisierung', 'das Anpassen von Inhalten an einzelne Nutzer oder Situationen', 'das Löschen aller Einstellungen', 'das Verwenden identischer Antworten für alle', 'Personalisierung nutzt Informationen über Interessen oder Situationen, um Inhalte individueller auszuwählen. Dabei sollte klar sein, welche Daten dafür verwendet werden.', 'Eine Streaming-App stellt aus dem bisherigen Hörverhalten einen persönlichen Musikmix zusammen.']
];

function shuffle(list) {
  return [...list].sort(() => Math.random() - 0.5);
}

const questionPool = seeds.flatMap(([term, correct, wrongA, wrongB, explanation, example]) => [
  { question: `Was bedeutet „${term}“ im Zusammenhang mit KI?`, answers: [correct, wrongA, wrongB], correct, explanation, example },
  { question: `Welche Beschreibung passt zu „${term}“?`, answers: [wrongA, correct, wrongB], correct, explanation, example },
  { question: `Welche Aussage zu ${term} ist richtig?`, answers: [wrongB, wrongA, correct], correct, explanation, example },
  { question: `Worauf bezieht sich der Begriff ${term}?`, answers: [correct, wrongB, wrongA], correct, explanation, example }
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
  feedbackElement.replaceChildren();
  feedbackElement.className = 'feedback';
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

function showFeedback(status, item) {
  feedbackElement.replaceChildren();
  feedbackElement.className = `feedback is-${status}`;

  const heading = document.createElement('strong');
  heading.textContent = status === 'correct' ? 'Richtig!' : 'Nicht ganz.';
  const explanation = document.createElement('span');
  explanation.textContent = status === 'correct'
    ? item.explanation
    : `Richtig ist: ${item.correct}. ${item.explanation}`;
  const example = document.createElement('span');
  example.className = 'feedback-example';
  example.textContent = `Alltagsbeispiel: ${item.example}`;
  feedbackElement.append(heading, explanation, example);
}

function showResultFeedback() {
  feedbackElement.replaceChildren();
  feedbackElement.className = 'feedback is-result';
  const heading = document.createElement('strong');
  heading.textContent = 'Merke:';
  const message = document.createElement('span');
  message.textContent = 'Wichtig ist nicht nur, Begriffe zu kennen, sondern KI im Alltag kritisch, sicher und verantwortungsvoll zu nutzen.';
  feedbackElement.append(heading, message);
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
    showFeedback('correct', item);
  } else {
    buttons.find(button => button.textContent === answer).classList.add('wrong');
    showFeedback('wrong', item);
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
  showResultFeedback();
  progressElement.innerHTML = Array.from({ length: 10 }, () => '<i class="done"></i>').join('');
  nextButton.textContent = 'Neue 10 Fragen laden ↻';
  nextButton.disabled = false;
  nextButton.onclick = () => window.location.reload();
});

renderQuestion();
