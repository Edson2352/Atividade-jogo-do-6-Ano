"use strict";

/*
 * ATLAS DO TEMPO — lógica principal
 * Para acrescentar um caso, crie outro objeto em CASES seguindo o mesmo formato.
 */
const CASES = {
  france: {
    name: "França", icon: "🏰", title: "Liberdade, igualdade e revolução",
    short: "Revolução Francesa • 1789",
    hint: "É um país da Europa Ocidental cuja capital é Paris.",
    letterTitle: "Uma revolução está prestes a mudar a História!",
    letterText: "No final do século XVIII, uma grande transformação contestou os privilégios da monarquia e da nobreza. Ideias de liberdade e igualdade ganharam força.",
    missionTitle: "Encontre Napoleão Bonaparte",
    missionDescription: "A França foi encontrada! Agora procure o personagem ligado a uma fase posterior da história revolucionária francesa.",
    missionInstruction: "Escolha a pessoa correta entre as opções abaixo.",
    characters: [
      { name: "Napoleão Bonaparte", detail: "General que ganhou destaque durante a Revolução e chegou ao poder depois dela.", correct: true },
      { name: "Júlio César", detail: "General e líder político da Roma Antiga.", correct: false },
      { name: "Leonardo da Vinci", detail: "Artista e inventor do Renascimento italiano.", correct: false }
    ],
    storyTitle: "A Revolução Francesa",
    story: "A Revolução Francesa começou em 1789, em meio a uma crise financeira, desigualdades sociais e críticas ao poder absoluto do rei. A população e diferentes grupos políticos questionaram os privilégios da nobreza e do clero. A revolução transformou as instituições francesas e espalhou debates sobre cidadania e direitos. O período teve conflitos e mudanças de governo; Napoleão Bonaparte ganhou destaque militar e assumiu o poder em 1799. A igualdade defendida na época não se aplicou igualmente a todas as pessoas, e as mulheres continuaram sem os mesmos direitos políticos.",
    fact: "📍 Geografia: a França fica na Europa Ocidental. Paris é sua capital. A história francesa também se relaciona com muitos outros países europeus.",
    clue: "Procure a França, na Europa Ocidental."
  },
  brazil: {
    name: "Brasil", icon: "🇧🇷", title: "Um país declara sua independência",
    short: "Independência do Brasil • 1822",
    hint: "É o maior país da América do Sul e sua língua oficial é o português.",
    letterTitle: "Uma colônia quer decidir seu próprio futuro",
    letterText: "Em 1822, uma decisão rompeu os laços políticos entre o Brasil e Portugal. O processo de independência envolveu disputas e não mudou toda a sociedade de uma vez.",
    missionTitle: "Encontre Dom Pedro I",
    missionDescription: "Você chegou ao Brasil! Agora encontre a figura ligada à declaração de independência de 1822.",
    missionInstruction: "Leia as descrições e escolha a pessoa relacionada à independência brasileira.",
    characters: [
      { name: "Dom Pedro I", detail: "Príncipe que declarou a independência do Brasil em 1822 e se tornou seu primeiro imperador.", correct: true },
      { name: "Tiradentes", detail: "Figura associada à Inconfidência Mineira, no século XVIII.", correct: false },
      { name: "Getúlio Vargas", detail: "Presidente brasileiro que governou principalmente no século XX.", correct: false }
    ],
    storyTitle: "A Independência do Brasil",
    story: "Em 7 de setembro de 1822, Dom Pedro declarou a separação política do Brasil em relação a Portugal. A independência não mudou tudo de uma vez: conflitos aconteceram em diferentes regiões, e a escravidão continuou por décadas, sendo abolida apenas em 1888. O novo país precisou organizar seu governo e suas relações com outras nações. Muitas pessoas participaram desse processo, embora nem todas tenham tido voz nas decisões políticas.",
    fact: "📍 Geografia: o Brasil ocupa grande parte da América do Sul e faz fronteira com quase todos os países sul-americanos, exceto Chile e Equador.",
    clue: "Procure o Brasil, na América do Sul."
  },
  china: {
    name: "China", icon: "🐉", title: "O caminho da seda",
    short: "A Rota da Seda • Antiguidade e Idade Média",
    hint: "É um país do leste da Ásia com uma longa história de comércio e invenções.",
    letterTitle: "Uma rede de caminhos conecta povos distantes",
    letterText: "Mercadores viajavam por rotas terrestres e marítimas que ligavam regiões da Ásia, do Oriente Médio e, indiretamente, da Europa. Mercadorias e ideias percorriam longas distâncias.",
    missionTitle: "Encontre Zhang Qian",
    missionDescription: "Você chegou à China! Procure o enviado da dinastia Han tradicionalmente associado à ampliação dos contatos chineses com a Ásia Central.",
    missionInstruction: "Escolha a pessoa ligada às viagens e aos contatos que ajudaram a ampliar essas conexões.",
    characters: [
      { name: "Zhang Qian", detail: "Enviado chinês da dinastia Han que viajou à Ásia Central no século II a.C.", correct: true },
      { name: "Marco Polo", detail: "Viajante veneziano que percorreu partes da Ásia muitos séculos depois.", correct: false },
      { name: "Cristóvão Colombo", detail: "Navegador cuja expedição de 1492 chegou ao Caribe.", correct: false }
    ],
    storyTitle: "A Rota da Seda",
    story: "A Rota da Seda era uma rede de caminhos terrestres e marítimos que conectava a China a regiões da Ásia Central, do Oriente Médio e, indiretamente, da Europa. Por essas rotas circulavam mercadorias, tecnologias, crenças e conhecimentos. Não era uma única estrada, mas muitas rotas usadas por diferentes povos ao longo dos séculos. Zhang Qian realizou viagens diplomáticas no século II a.C. que ajudaram a ampliar os contatos entre a dinastia Han e a Ásia Central.",
    fact: "📍 Geografia: montanhas, desertos e oásis influenciavam os caminhos e as dificuldades das viagens.",
    clue: "Procure a China, no leste da Ásia."
  },
  usa: {
    name: "Estados Unidos", icon: "🗽", title: "Nasce uma nação",
    short: "Independência dos EUA • 1776",
    hint: "A Declaração de Independência foi adotada em 1776, na América do Norte.",
    letterTitle: "Treze colônias querem romper com a Grã-Bretanha",
    letterText: "Na América do Norte, treze colônias britânicas contestaram o domínio da Grã-Bretanha. Uma declaração adotada em 1776 tornou-se um marco desse processo.",
    missionTitle: "Encontre Thomas Jefferson",
    missionDescription: "Você chegou às antigas treze colônias! Procure uma figura importante na redação da Declaração de Independência.",
    missionInstruction: "Escolha a pessoa ligada ao documento de 1776.",
    characters: [
      { name: "Thomas Jefferson", detail: "Um dos principais redatores da Declaração de Independência dos Estados Unidos.", correct: true },
      { name: "Abraham Lincoln", detail: "Presidente durante a Guerra Civil dos Estados Unidos, no século XIX.", correct: false },
      { name: "George Washington Carver", detail: "Cientista e inventor que viveu entre os séculos XIX e XX.", correct: false }
    ],
    storyTitle: "A Independência dos Estados Unidos",
    story: "Em 4 de julho de 1776, representantes de treze colônias britânicas adotaram a Declaração de Independência. A guerra contra a Grã-Bretanha continuou até que a independência fosse reconhecida em 1783. Thomas Jefferson foi um dos principais redatores do documento. A criação do novo país influenciou outros movimentos políticos, mas a liberdade proclamada não foi garantida a todas as pessoas: a escravidão continuou e muitos grupos ficaram excluídos dos direitos políticos.",
    fact: "📍 Geografia: as treze colônias ficavam na costa atlântica da América do Norte.",
    clue: "Procure os Estados Unidos, na América do Norte."
  }
};

const state = {
  activeCase: "france",
  stage: "letter",
  score: 0,
  completed: new Set(),
  hintsUsed: new Set()
};
const $ = (id) => document.getElementById(id);

function showFeedback(id, message, type = "good") {
  const el = $(id);
  el.textContent = message;
  el.className = "feedback show " + type;
}
function hideFeedback(id) { $(id).className = "feedback"; }
function showView(view) {
  ["letterView", "missionView", "storyView", "welcomeView"].forEach(id => $(id).classList.add("hidden"));
  $(view).classList.remove("hidden");
}
function setStage(stage) {
  state.stage = stage;
  const stageNumber = stage === "letter" ? 1 : stage === "mission" ? 2 : 3;
  [1, 2, 3].forEach(n => $("step" + n).classList.toggle("active", n <= stageNumber));
}
const SAVE_KEY = "atlasDoTempoSave_v2";

function saveGame() {
  try {
    const payload = {
      activeCase: state.activeCase,
      stage: state.stage,
      score: state.score,
      completed: Array.from(state.completed),
      hintsUsed: Array.from(state.hintsUsed)
    };
    localStorage.setItem(SAVE_KEY, JSON.stringify(payload));
    $("saveStatus").textContent = "💾 Progresso salvo";
    $("saveStatus").title = "O progresso foi guardado neste navegador.";
  } catch (error) {
    $("saveStatus").textContent = "⚠️ Sem salvamento";
    $("saveStatus").title = "Este navegador não permitiu guardar o progresso. O jogo ainda pode ser usado nesta sessão.";
  }
}

function loadGame() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return false;
    const saved = JSON.parse(raw);
    if (!saved || typeof saved !== "object") return false;
    state.activeCase = CASES[saved.activeCase] ? saved.activeCase : "france";
    state.score = Number.isInteger(saved.score) && saved.score >= 0 ? saved.score : 0;
    state.completed = new Set(Array.isArray(saved.completed) ? saved.completed.filter(id => CASES[id]) : []);
    state.hintsUsed = new Set(Array.isArray(saved.hintsUsed) ? saved.hintsUsed.filter(id => CASES[id]) : []);
    // Pontuação é derivada das memórias recuperadas para evitar divergência no salvamento.
    state.score = state.completed.size;
    return true;
  } catch (error) {
    return false;
  }
}

function renderAchievements() {
  const count = state.completed.size;
  const achievements = [
    { at: 1, label: "Primeira memória", icon: "🌱" },
    { at: 2, label: "Explorador persistente", icon: "🧭" },
    { at: 3, label: "Detetive da História", icon: "🔎" },
    { at: 4, label: "Guardião do Atlas", icon: "🏆" }
  ];
  const earned = achievements.filter(a => count >= a.at);
  const pending = achievements.filter(a => count < a.at);
  const parts = [];
  if (earned.length) parts.push(earned.map(a => `${a.icon} ${a.label}`).join(" · "));
  if (pending.length) parts.push("🔒 Próxima: " + pending[0].label);
  $("achievementList").textContent = parts.join(" | ") || "🔒 Complete sua primeira missão para ganhar uma medalha.";
}

function updateProgress() {
  $("score").textContent = "✦ " + state.score + " fragmento" + (state.score === 1 ? "" : "s");
  $("completedCount").textContent = "📚 " + state.completed.size + "/" + Object.keys(CASES).length + " memórias";
  $("progressText").textContent = state.completed.size + " de " + Object.keys(CASES).length;
  $("progressFill").style.width = (state.completed.size / Object.keys(CASES).length * 100) + "%";
  document.querySelectorAll(".country").forEach(country => {
    const id = country.dataset.id;
    country.classList.toggle("done", state.completed.has(id));
    country.classList.toggle("selected", id === state.activeCase && !state.completed.has(id));
  });
  document.querySelectorAll(".case-button").forEach(button => {
    const done = state.completed.has(button.dataset.case);
    button.classList.toggle("complete", done);
    button.querySelector(".status").textContent = done ? "✓ Memória recuperada" : "Disponível";
  });
  renderAchievements();
  saveGame();
}
function renderCaseList() {
  const list = $("caseList");
  list.replaceChildren();
  Object.entries(CASES).forEach(([id, c]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "case-button";
    button.dataset.case = id;
    button.innerHTML = `<span class="case-icon" aria-hidden="true">${c.icon}</span>
      <span class="case-meta"><strong></strong><small></small></span><span class="status"></span>`;
    button.querySelector(".case-meta strong").textContent = c.name;
    button.querySelector(".case-meta small").textContent = c.short;
    button.addEventListener("click", () => selectCase(id));
    list.appendChild(button);
  });
  updateProgress();
}
function selectCase(id) {
  if (!CASES[id]) return;
  state.activeCase = id;
  hideFeedback("letterFeedback");
  hideFeedback("missionFeedback");
  const c = CASES[id];
  $("caseLabel").textContent = state.completed.has(id) ? "CASO CONCLUÍDO" : (id === "france" ? "CASO PRINCIPAL" : "CASO OPCIONAL");
  $("panelTitle").textContent = "✉️ " + c.name;
  if (state.completed.has(id)) {
    showStory();
  } else {
    $("letterView").querySelector(".content-title").textContent = c.letterTitle;
    $("letterView").querySelector(".body-copy").textContent = c.letterText;
    $("letterView").querySelector(".clue").innerHTML = "<strong>🔎 Sua pista</strong><br>" + c.clue + " Clique no país correspondente no mapa para iniciar a missão.";
    $("hintButton").textContent = state.hintsUsed.has(id) ? "Pista extra já revelada" : "Preciso de outra pista";
    $("hintButton").disabled = state.hintsUsed.has(id);
    showView("letterView");
    setStage("letter");
  }
  updateProgress();
}
function mapClick(id) {
  if (!CASES[id]) return;
  if (state.completed.has(id)) {
    state.activeCase = id;
    showStory();
    showFeedback("storyFeedback", "✨ Você já recuperou esta memória. Pode reler a história!", "good");
    return;
  }
  if (id !== state.activeCase) {
    selectCase(id);
    showFeedback("letterFeedback", "🧭 Caso selecionado: " + CASES[id].name + ". Leia a carta e, quando estiver pronto(a), clique novamente neste país para começar a missão.", "info");
    return;
  }
  startMission(id);
}
function startMission(id) {
  const c = CASES[id];
  state.activeCase = id;
  $("caseLabel").textContent = "MISSÃO ATIVA";
  $("panelTitle").textContent = "🧭 " + c.name;
  $("missionTitle").textContent = c.missionTitle;
  $("missionDescription").textContent = c.missionDescription;
  $("missionInstruction").textContent = c.missionInstruction;
  const list = $("characterList");
  list.replaceChildren();
  c.characters.forEach((character, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "character";
    const strong = document.createElement("strong");
    strong.textContent = (index + 1) + ". " + character.name;
    const small = document.createElement("small");
    small.textContent = character.detail;
    button.append(strong, small);
    button.addEventListener("click", () => chooseCharacter(character));
    list.appendChild(button);
  });
  hideFeedback("missionFeedback");
  showView("missionView");
  setStage("mission");
  updateProgress();
}
function chooseCharacter(character) {
  if (state.completed.has(state.activeCase)) return;
  if (!character.correct) {
    showFeedback("missionFeedback", "Ainda não! 🕵️ Leia as pistas com atenção e tente outra opção. Errar faz parte da investigação.", "bad");
    return;
  }
  const id = state.activeCase;
  if (!state.completed.has(id)) {
    state.completed.add(id);
    state.score += 1;
  }
  updateProgress();
  showStory();
}
function showStory() {
  const c = CASES[state.activeCase];
  $("caseLabel").textContent = "MEMÓRIA RECUPERADA";
  $("panelTitle").textContent = "📜 " + c.storyTitle;
  $("storyHeading").textContent = "Muito bem, explorador(a)!";
  $("storyTitle").textContent = c.storyTitle;
  $("storyText").textContent = c.story;
  $("storyFact").textContent = c.fact;
  $("nextCase").textContent = state.completed.size === Object.keys(CASES).length ? "Jogo concluído!" : "Explorar outro caso";
  $("storyFeedback").textContent = state.completed.size === Object.keys(CASES).length
    ? "🏆 Aventura concluída! Todas as memórias foram recuperadas."
    : "✨ Memória recuperada! Seu fragmento foi registrado no progresso.";
  showView("storyView");
  setStage("story");
  updateProgress();
}
function nextCase() {
  const next = Object.keys(CASES).find(id => !state.completed.has(id));
  if (!next) {
    state.activeCase = "france";
    $("caseLabel").textContent = "MISSÃO CONCLUÍDA";
    $("panelTitle").textContent = "🏆 Atlas do Tempo";
    $("storyHeading").textContent = "Parabéns, historiador(a)!";
    $("storyTitle").textContent = "Todas as memórias foram recuperadas!";
    $("storyText").textContent = "Você concluiu os quatro casos disponíveis e reuniu fragmentos de diferentes momentos da História. Continue fazendo perguntas, comparando fontes e descobrindo como o passado ajuda a compreender o presente.";
    $("storyFact").textContent = "🌟 Desafio extra: escolha um dos acontecimentos e explique como ele influenciou o mundo atual.";
    $("storyFeedback").textContent = "🏆 Aventura concluída! Você recuperou todas as memórias.";
    showView("storyView");
    setStage("story");
    return;
  }
  selectCase(next);
}
function resetGame() {
  const confirmed = window.confirm("Quer reiniciar o jogo? Todo o progresso desta sessão será apagado.");
  if (!confirmed) return;
  state.activeCase = "france";
  state.stage = "letter";
  state.score = 0;
  state.completed.clear();
  state.hintsUsed.clear();
  try { localStorage.removeItem(SAVE_KEY); } catch (error) { /* salvamento local indisponível */ }
  renderCaseList();
  selectCase("france");
  showFeedback("letterFeedback", "Novo jogo iniciado! Leia a carta e encontre o país correto no mapa.", "info");
}
function revealHint() {
  const id = state.activeCase;
  if (state.hintsUsed.has(id)) return;
  state.hintsUsed.add(id);
  $("hintButton").textContent = "Pista extra revelada";
  $("hintButton").disabled = true;
  const extra = id === "france" ? "A capital deste país é Paris, e sua bandeira tem as cores azul, branco e vermelho."
    : id === "brazil" ? "Sua capital atual é Brasília, e o país tem uma grande floresta tropical chamada Amazônia."
    : id === "china" ? "Sua capital é Pequim, e sua bandeira é vermelha com estrelas amarelas."
    : "Sua capital é Washington, D.C., e sua bandeira tem estrelas e listras.";
  showFeedback("letterFeedback", "💡 Pista extra: " + extra, "info");
}

document.querySelectorAll(".country").forEach(country => {
  country.addEventListener("click", () => mapClick(country.dataset.id));
  country.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      mapClick(country.dataset.id);
    }
  });
});
$("hintButton").addEventListener("click", revealHint);
$("startMissionButton").addEventListener("click", () => startMission(state.activeCase));
$("backToLetter").addEventListener("click", () => selectCase(state.activeCase));
$("nextCase").addEventListener("click", nextCase);
$("replayCase").addEventListener("click", () => showStory());
$("resetButton").addEventListener("click", resetGame);

const hadSavedGame = loadGame();
renderCaseList();
selectCase(state.activeCase);
if (hadSavedGame) {
  showFeedback("letterFeedback", "💾 Encontramos seu progresso anterior! Você pode continuar de onde parou ou escolher outro caso.", "info");
}
