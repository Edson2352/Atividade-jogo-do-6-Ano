// Banco de Dados das 4 Missões Históricas
const missionsData = {
    1: {
        title: "Missão 1943: A Queda do Fascismo",
        targetCountry: "italy",
        targetCountryName: "Itália",
        npcName: "Benito Mussolini",
        npcTitle: "\"Il Duce\" - Líder do Partido Fascista",
        npcIcon: "fa-user-tie",
        locationText: "LOCAL: ROMA, ITÁLIA (1943)",
        letterContent: {
            date: "Data Estelar: 1943 d.C.",
            title: "Mensagem Interceptada do Alto Comando",
            body: `“Agente temporal, a Segunda Guerra Mundial atinge seu ponto de inflexão. O Pacto de Aço está balançando e o Grande Conselho fascista conspira nas sombras.<br><br>Sua missão é cruzar o portal temporal, identificar o território-chave na Europa Mediterrânea onde o 'Duce' comanda com punho de ferro e confrontar a principal figura política desta nação.<br><br><span class='text-amber-950 font-bold'>Pista Crítica: Procure a península em formato de bota, o berço do fascismo moderno no ano de 1943.</span>”`
        },
        dialogues: {
            what: "“A Itália está lutando pelo seu destino imperial! Os anglo-americanos desembarcaram na Sicília e traidores covardes em nosso próprio Grande Conselho conspiram contra o Partido Fascista e contra mim!”",
            why: "“Nós nos aliamos à Alemanha de Adolf Hitler para garantir o nosso espaço vital e reerguer a glória do Império Romano no Mediterrâneo! Juntos formamos o Eixo contra as democracias decadentes.”",
            who: "“Nossos inimigos são as plutocracias aliadas: o primeiro-ministro Winston Churchill do Reino Unido, o presidente Franklin Roosevelt dos Estados Unidos e os comunistas soviéticos de Josef Stalin!”",
            when: "“Nossa marcha para reerguer a nação começou em 1922 com a Marcha sobre Roma, e entramos oficialmente nesta conflagração mundial em junho de 1940 ao lado do Reich!”"
        }
    },
    2: {
        title: "Missão 1962: A Crise dos Mísseis",
        targetCountry: "cuba",
        targetCountryName: "Cuba",
        npcName: "Fidel Castro",
        npcTitle: "Comandante da Revolução Cubana",
        npcIcon: "fa-star",
        locationText: "LOCAL: HAVANA, CUBA (1962)",
        letterContent: {
            date: "Data Estelar: Outubro de 1962",
            title: "Alerta Vermelho: Caribe",
            body: `“Viajante, o mundo esteve a um segundo da destruição nuclear. Nossas escutas captaram tensão máxima numa ilha caribenha sob influência soviética.<br><br>Descubra onde o confronto nuclear está prestes a eclodir no mar do Caribe e intercepte o líder revolucionário local.<br><br><span class='text-amber-950 font-bold'>Pista Crítica: Procure a ilha tropical no arquipélago das Antilhas, bem perto da península da Flórida.</span>”`
        },
        dialogues: {
            what: "“Estamos defendendo nossa soberania revolucionária! O império americano nos impôs um bloqueio criminoso, mas os mísseis estratégicos aqui estacionados garantirão que pensem duas vezes antes de invadir nossa pátria!”",
            why: "“Porque após o fracasso da invasão da Baía dos Porcos, precisávamos de um escudo definitivo contra a agressão imperialista dos Estados Unidos. Nossa aliança com a União Soviética é nossa garantia de sobrevivência.”",
            who: "“Do outro lado do estreito temos o presidente John F. Kennedy liderando Washington, e do nosso lado contamos com o apoio solidário de Nikita Khrushchev e do povo soviético.”",
            when: "“A Revolução triunfou em 1959, mas esta crise atual atingiu o ponto de ebulição nestes dias tensos de outubro de 1962!”"
        }
    },
    3: {
        title: "Missão 1789: A Queda da Bastilha",
        targetCountry: "france",
        targetCountryName: "França",
        npcName: "Maximilien de Robespierre",
        npcTitle: "Líder Revolucionário Jacobino",
        npcIcon: "fa-flag",
        locationText: "LOCAL: PARIS, FRANÇA (1789)",
        letterContent: {
            date: "Data Estelar: Julho de 1789",
            title: "Despacho da Era das Luzes",
            body: `“O povo está faminto, a desigualdade atinge o ápice e a monarquia absoluta de Luís XVI ignora os gritos nas ruas de Paris.<br><br>Encontre o epicentro da revolta popular na Europa Ocidental antes que a pólvora exploda e o Antigo Regime caia por terra.<br><br><span class='text-amber-950 font-bold'>Pista Crítica: Procure a nação europeia famosa pela sua rica história, o rio Sena e a capital cultural da Europa.</span>”`
        },
        dialogues: {
            what: "“Liberdade, Igualdade, Fraternidade! O povo faminto de Paris levantou-se contra a tirania feudal! A Bastilha caiu e o poder está retornando para as mãos dos cidadãos da República!”",
            why: "“Porque séculos de opressão aristocrática, impostos esmagadores sobre o Terceiro Estado e o luxo insolente da realeza em Versalhes tornaram a vida insuportável para o povo francês.”",
            who: "“Nossos inimigos são o Rei Luís XVI, a Rainha Maria Antonieta e os tiranos coroados da Europa que tentam esmagar a nossa sagrada revolução!”",
            when: "“Estamos em pleno julho de 1789, o alvorecer de uma nova era para a humanidade inteira!”"
        }
    },
    4: {
        title: "Missão 1865: A Casa Dividida",
        targetCountry: "usa",
        targetCountryName: "Estados Unidos",
        npcName: "Abraham Lincoln",
        npcTitle: "16º Presidente dos Estados Unidos",
        npcIcon: "fa-hat-cowboy",
        locationText: "LOCAL: WASHINGTON D.C., EUA (1865)",
        letterContent: {
            date: "Data Estelar: Abril de 1865",
            title: "Despacho Federal",
            body: `“A nação americana sangrou por quatro longos anos em uma terrível guerra fratricida entre o Norte e o Sul. A escravidão racha os alicerces da união.<br><br>Encontre a superpotência norte-americana no final da guerra civil e converse com o homem que manteve a união unida.<br><br><span class='text-amber-950 font-bold'>Pista Crítica: Procure a nação federal na América do Norte que se estende de costa a costa e lutou sua guerra civil na década de 1860.</span>”`
        },
        dialogues: {
            what: "“A guerra civil finalmente chegou ao fim com a rendição de Appomattox, mas nossa nação precisa cicatrizar suas feridas profundas e garantir a liberdade perpétua para todos os cidadãos, sem distinção de raça.”",
            why: "“Porque uma casa dividida contra si mesma não pode subsistir. Esta nação não podia continuar meio escrava e meio livre; era preciso escolher entre a preservação da união e a abolição da infâmia da escravidão.”",
            who: "“Nossos irmãos sulistas liderados pela Confederação lutaram contra nós, mas nosso dever sagrado agora é acolher a todos de volta à União com malícia para com ninguém e caridade para com todos.”",
            when: "“Estamos em abril de 1865, no exato momento em que o sol da paz e da emancipação começa a raiar sobre nossa República.”"
        }
    }
};

let currentMissionId = 1;

// Elementos de Tela
const screenMenu = document.getElementById('screen-menu');
const screenLetter = document.getElementById('screen-letter');
const screenMap = document.getElementById('screen-map');
const screenScene = document.getElementById('screen-scene');
const statusMission = document.getElementById('status-mission');

// Modal Customizado
const customModal = document.getElementById('custom-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalIcon = document.getElementById('modal-icon');

function showModal(title, message, type = 'warning') {
    modalTitle.innerText = title;
    modalMessage.innerText = message;
    if (type === 'success') {
        modalIcon.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-500"></i>';
    } else if (type === 'error') {
        modalIcon.innerHTML = '<i class="fa-solid fa-circle-xmark text-red-500"></i>';
    } else {
        modalIcon.innerHTML = '<i class="fa-solid fa-triangle-exclamation text-amber-500"></i>';
    }
    customModal.classList.remove('hidden');
    customModal.classList.add('flex');
}

function closeModal() {
    customModal.classList.remove('flex');
    customModal.classList.add('hidden');
}

// Selecionar Missão do Menu
function selectMission(missionId) {
    currentMissionId = missionId;
    const mission = missionsData[missionId];

    // Atualizar conteúdo da carta
    document.getElementById('letter-date').innerText = mission.letterContent.date;
    document.getElementById('letter-title').innerText = mission.letterContent.title;
    document.getElementById('letter-body').innerHTML = mission.letterContent.body;

    // Atualizar dados do NPC na Cena
    document.getElementById('npc-name').innerText = mission.npcName;
    document.getElementById('npc-title').innerText = mission.npcTitle;
    document.getElementById('npc-name-badge').innerText = mission.npcName.toUpperCase();
    document.getElementById('npc-location-badge').innerText = mission.locationText;
    document.getElementById('npc-icon-el').className = `fa-solid ${mission.npcIcon} text-7xl mb-2 text-stone-400`;
    document.getElementById('dialogue-text').innerText = `“Forasteiro... Você me olha com atenção. O que deseja saber antes que o cenário mude?”`;

    // Transição para a carta
    screenMenu.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
        screenMenu.classList.add('hidden');
        screenLetter.classList.remove('hidden');
        setTimeout(() => {
            screenLetter.classList.remove('opacity-0', 'scale-95');
        }, 50);
    }, 300);
    statusMission.innerText = `STATUS: ${mission.title.toUpperCase()}`;
    statusMission.classList.remove('hidden');
}

// Retornar ao Menu Principal
function returnToMenu() {
    // Esconde todas as telas ativas
    [screenLetter, screenMap, screenScene].forEach(s => {
        s.classList.add('opacity-0', 'scale-95');
        setTimeout(() => s.classList.add('hidden'), 300);
    });

    setTimeout(() => {
        screenMenu.classList.remove('hidden');
        setTimeout(() => {
            screenMenu.classList.remove('opacity-0', 'scale-95');
        }, 50);
    }, 300);
    statusMission.innerText = "STATUS: SELECIONE UMA MISSÃO";
}

// Transição Carta -> Mapa
function transitionToMap() {
    screenLetter.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
        screenLetter.classList.add('hidden');
        screenMap.classList.remove('hidden');
        setTimeout(() => {
            screenMap.classList.remove('opacity-0', 'scale-95');
        }, 50);
    }, 300);
    statusMission.innerText = "STATUS: SELECIONE O PAÍS NO MAPA";
}

// Voltar para Carta
function backToLetter() {
    screenMap.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
        screenMap.classList.add('hidden');
        screenLetter.classList.remove('hidden');
        setTimeout(() => {
            screenLetter.classList.remove('opacity-0', 'scale-95');
        }, 50);
    }, 300);
    statusMission.innerText = `STATUS: ${missionsData[currentMissionId].title.toUpperCase()}`;
}

// Voltar para Mapa
function backToMap() {
    screenScene.classList.add('opacity-0', 'scale-95');
    setTimeout(() => {
        screenScene.classList.add('hidden');
        screenMap.classList.remove('hidden');
        setTimeout(() => {
            screenMap.classList.remove('opacity-0', 'scale-95');
        }, 50);
    }, 300);
    statusMission.innerText = "STATUS: SELECIONE O PAÍS NO MAPA";
}

// Validação de Clique no Mapa
function handleCountryClick(countryKey) {
    const mission = missionsData[currentMissionId];
    if (countryKey === mission.targetCountry) {
        showModal("Destino Correto!", `Anomalia temporal confirmada em ${mission.targetCountryName}. Entrando no cenário histórico...`, "success");
        setTimeout(() => {
            closeModal();
            screenMap.classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
                screenMap.classList.add('hidden');
                screenScene.classList.remove('hidden');
                setTimeout(() => {
                    screenScene.classList.remove('opacity-0', 'scale-95');
                }, 50);
            }, 300);
            statusMission.innerText = `STATUS: INFILTRADO EM ${mission.targetCountryName.toUpperCase()}`;
        }, 1200);
    } else {
        showModal("Coordenadas Incorretas", "Este país não corresponde às pistas e coordenadas fornecidas pelo Alto Comando nesta missão.", "error");
    }
}

// Sistema de Diálogo Dinâmico
function askQuestion(type) {
    const dialogueText = document.getElementById('dialogue-text');
    const mission = missionsData[currentMissionId];
    const response = mission.dialogues[type];

    dialogueText.style.opacity = '0';
    setTimeout(() => {
        dialogueText.innerText = response;
        dialogueText.style.opacity = '1';
    }, 200);
}
