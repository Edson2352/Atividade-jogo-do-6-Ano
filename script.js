const cases = {
  france: {
    name: 'França',
    title: 'O grito por mudança',
    hint: 'A capital é Paris.',
    main: true,
    mission: 'Encontre Napoleão Bonaparte'
  },
  egypt: {
    name: 'Egito',
    title: 'O segredo do Nilo',
    hint: 'A civilização cresceu às margens de um rio muito longo, que deságua no Mar Mediterrâneo.',
    text: 'Uma página fala de faraós, monumentos gigantes e de uma civilização que floresceu no nordeste da África. Qual país guarda essa memória?',
    storyTitle: 'O Egito Antigo e o Nilo',
    story: 'A civilização egípcia desenvolveu-se ao longo do rio Nilo, cujas cheias ajudavam a fertilizar as terras para a agricultura. Os faraós governavam o reino, e os egípcios construíram templos, túmulos e pirâmides. O rio também servia como rota de transporte e comunicação.',
    fact: ' Geografia: o Nilo atravessa o nordeste da África e foi essencial para a agricultura e a vida cotidiana.'
  },
  brazil: {
    name: 'Brasil',
    title: 'Um grito de independência',
    hint: 'A declaração aconteceu em 1822, e o país fica na América do Sul.',
    text: 'Uma carta conta que, em 1822, um território da América do Sul declarou que deixaria de ser governado por Portugal. A memória está ligada a Dom Pedro.',
    storyTitle: 'A Independência do Brasil',
    story: 'Em 7 de setembro de 1822, Dom Pedro declarou a separação política do Brasil em relação a Portugal. A independência não mudou tudo de uma vez: muitos conflitos aconteceram e a escravidão continuou por décadas. O novo país precisou organizar seu governo e suas relações com outras nações.',
    fact: ' Geografia: o Brasil ocupa grande parte da América do Sul e faz fronteira com quase todos os países sul-americanos, exceto Chile e Equador.'
  },
  china: {
    name: 'China',
    title: 'O caminho da seda',
    hint: 'Procure um país do leste da Ásia, com uma longa história de comércio e invenções.',
    text: 'Mercadores viajavam por rotas que ligavam partes da Ásia, do Oriente Médio e da Europa. Seda, especiarias e ideias percorriam longas distâncias. Onde esta história começa?',
    storyTitle: 'A Rota da Seda',
    story: 'A Rota da Seda era uma rede de caminhos terrestres e marítimos que conectava a China a regiões da Ásia Central, do Oriente Médio e, indiretamente, da Europa. Por essas rotas circulavam mercadorias, tecnologias, crenças e conhecimentos. Não era uma única estrada, mas muitas rotas usadas por diferentes povos ao longo dos séculos.',
    fact: ' Geografia: montanhas, desertos e oásis influenciavam os caminhos e as dificuldades das viagens.'
  },
  usa: {
    name: 'Estados Unidos',
    title: 'Nasce uma nação',
    hint: 'A Declaração de Independência foi adotada em 1776, na América do Norte.',
    text: 'Treze colônias britânicas na América do Norte romperam com o domínio da Grã-Bretanha. Uma declaração de 1776 tornou-se um marco desse processo.',
    storyTitle: 'A Independência dos Estados Unidos',
    story: 'Em 4 de julho de 1776, representantes de treze colônias britânicas adotaram a Declaração de Independência. A guerra contra a Grã-Bretanha continuou até que a independência fosse reconhecida em 1783. A criação do novo país foi influente, mas a liberdade proclamada não foi garantida a todas as pessoas que viviam ali.',
    fact: ' Geografia: as treze colônias ficavam na costa atlântica da América do Norte.'
  }
};

let stage = 'letter', active = 'france', zoom = 1, score = 0, completed = new Set();
const $ = id => document.getElementById(id);

function showFeedback(text, type = 'good') {
  $('feedback').textContent = text;
  $('feedback').className = 'feedback show ' + type;
}

function hideAll() {
  ['letter', 'mission', 'story', 'optionalIntro', 'optionalStory'].forEach(id => $(id).classList.add('hidden'));$('feedback').className = 'feedback';
}

function setSteps(n) {
  [1, 2, 3].forEach(i => $('s' + i).classList.toggle('active', i <= n));
}

function updateScore() {
  $('score').textContent = '✦ ' + score + ' fragmento' + (score === 1 ? '' : 's');
  document.querySelectorAll('.case').forEach(b => {
    const id = b.dataset.case;
    const st = b.querySelector('.status');
    if (completed.has(id)) {
      b.classList.add('complete');
      st.textContent = 'Memória recuperada';
    } else {
      b.classList.remove('complete');
      st.textContent = 'Disponível';
    }
  });
  document.querySelectorAll('.country').forEach(g => g.classList.toggle('done', completed.has(g.dataset.id)));
}

function selectCase(id) {
  active = id;
  stage = 'letter';
  hideAll();
  document.querySelectorAll('.country').forEach(g => g.classList.toggle('selected', g.dataset.id === id));
  $('caseLabel').textContent = id === 'france' ? 'CASO PRINCIPAL' : 'CASO OPCIONAL';$('panelTitle').textContent = ' ' + (id === 'france' ? 'Carta misteriosa' : 'Carta de viagem');
  setSteps(1);

  if (id === 'france') {
    $('letter').classList.remove('hidden');
  } else {
    const c = cases[id];
    $('optionalIntro').classList.remove('hidden');$('optionalTitle').textContent = c.title;
    $('optionalText').textContent = c.text;
    $('optionalHint').textContent = ' Pista: ' + c.hint;
    $('panelTitle').textContent = ' ' + c.name;
  }
}

function mapClick(id) {
  if (id === 'france') {
    if (active === 'france' && stage !== 'letter') return;
    selectCase('france');
    showFeedback('Você encontrou a França! O portal histórico se abriu.', 'good');
    $('letter').classList.add('hidden');$('mission').classList.remove('hidden');
    stage = 'mission';
    setSteps(2);
    $('panelTitle').textContent = ' Missão principal';
  } else {
    selectCase(id);
    showFeedback('Caso selecionado: ' +
