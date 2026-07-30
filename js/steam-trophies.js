/* --------------------------------------------------------------------------
   DARK SOULS 3 - OFFICIAL STEAM ACHIEVEMENTS / TROPHIES DATABASE & LOGIC
   -------------------------------------------------------------------------- */

const STEAM_ACHIEVEMENTS_DATA = [
  {
    id: "trophy_1",
    name: "The Dark Soul (A Alma Sombria)",
    type: "platinum",
    icon: "🏆",
    desc: "Obtenha todas as 42 conquistas de Dark Souls 3.",
    req: "Concluir todas as outras conquistas do jogo."
  },
  {
    id: "trophy_2",
    name: "Vincular a Primeira Chama (To Link the First Flame)",
    type: "ending",
    icon: "🔥",
    desc: "Conclua o jogo com o final 'Vincular a Primeira Chama'.",
    req: "Acender a Primeira Chama após derrotar a Alma das Cinzas."
  },
  {
    id: "trophy_3",
    name: "O Fim da Chama (The End of Fire)",
    type: "ending",
    icon: "🌑",
    desc: "Conclua o jogo com o final 'O Fim da Chama'.",
    req: "Invoque a Guardiã do Fogo com os Olhos de uma Guardiã do Fogo após derrotar a Alma das Cinzas."
  },
  {
    id: "trophy_4",
    name: "A Usurpação da Chama (The Usurpation of Fire)",
    type: "ending",
    icon: "👑",
    desc: "Conclua o jogo com o final 'A Usurpação da Chama'.",
    req: "Siga a questline de Yoel/Yuria de Londor, realize o casamento com Anri e tome a Chama."
  },
  {
    id: "trophy_5",
    name: "Senhores das Cinzas: Vigilantes do Abismo",
    type: "boss",
    icon: "⚔️",
    desc: "Derrote os Vigilantes do Abismo, Senhores das Cinzas.",
    req: "Chefe obrigatório da Fortaleza de Farron."
  },
  {
    id: "trophy_6",
    name: "Senhor das Cinzas: Yhorm, o Gigante",
    type: "boss",
    icon: "🛡️",
    desc: "Derrote Yhorm, o Gigante, Senhor das Cinzas.",
    req: "Chefe obrigatório da Capital Profanada."
  },
  {
    id: "trophy_7",
    name: "Senhor das Cinzas: Aldrich, o Devorador de Deuses",
    type: "boss",
    icon: "🔮",
    desc: "Derrote Aldrich, o Devorador de Deuses, Senhor das Cinzas.",
    req: "Chefe obrigatório de Anor Londo."
  },
  {
    id: "trophy_8",
    name: "Senhor das Cinzas: Lothric, Príncipe Caçula",
    type: "boss",
    icon: "👑",
    desc: "Derrote Lothric, Príncipe Caçula, Senhor das Cinzas.",
    req: "Chefe obrigatório do Castelo de Lothric / Grandes Arquivos."
  },
  {
    id: "trophy_9",
    name: "Reforço Supremo de Arma (Supreme Weapon Reinforcement)",
    type: "upgrade",
    icon: "🔨",
    desc: "Aprimore qualquer arma ao nível máximo (+10 para comuns / +5 para especiais).",
    req: "Requer uma Laje de Titanita."
  },
  {
    id: "trophy_10",
    name: "Mestre das Infusões (Master of Infusion)",
    type: "collectible",
    icon: "🔥",
    desc: "Realize todos os 15 tipos de infusões de armas.",
    req: "Infusões: Afiada, Pesada, Refinada, Bruta, Simples, Cristal, Fogo, Caos, Raio, Abençoada, Profunda, Obscura, Venenosa, Sangrenta e Oca."
  },
  {
    id: "trophy_11",
    name: "Mestre das Feitiçarias (Master of Sorceries)",
    type: "collectible",
    icon: "📜",
    desc: "Adquira todas as 34 feitiçarias no jogo.",
    req: "Coletar todas as feitiçarias (incluindo tomos de Orbeck e drops de bosses)."
  },
  {
    id: "trophy_12",
    name: "Mestre das Piromancias (Master of Pyromancies)",
    type: "collectible",
    icon: "🔥",
    desc: "Adquira todas as 27 piromancias no jogo.",
    req: "Coletar todas as piromancias (incluindo tomos de Cornyx e Karla)."
  },
  {
    id: "trophy_13",
    name: "Mestre dos Milagres (Master of Miracles)",
    type: "collectible",
    icon: "✨",
    desc: "Adquira todos os 35 milagres no jogo.",
    req: "Coletar todos os milagres (incluindo tomos de Irina/Karla e recompensas de pactos)."
  },
  {
    id: "trophy_14",
    name: "Mestre dos Anéis (Master of Rings)",
    type: "collectible",
    icon: "💍",
    desc: "Adquira todos os 107 anéis no jogo (incluindo versões +1, +2 e +3).",
    req: "Coletar todos os anéis ao longo do NG, NG+ e NG++."
  },
  {
    id: "trophy_15",
    name: "Mestre da Expressão (Master of Expression)",
    type: "collectible",
    icon: "🙋",
    desc: "Aprenda todos os 33 gestos no jogo.",
    req: "Obter todos os gestos dos NPCs ao longo da jornada."
  },
  {
    id: "trophy_16",
    name: "Fogueira Suprema (Ultimate Bonfire)",
    type: "upgrade",
    icon: "🔥",
    desc: "Aprimore a fogueira do Santuário ao nível máximo (+10).",
    req: "Queimar os 10 Fragmentos de Osso de Morto-Vivo no Santuário do Elo do Fogo."
  },
  {
    id: "trophy_17",
    name: "Estus Supremo (Ultimate Estus)",
    type: "upgrade",
    icon: "🧪",
    desc: "Aprimore o Frasco de Estus ao nível máximo (15 usos).",
    req: "Entregar os 11 Fragmentos de Estus ao Ferreiro Andre."
  },
  {
    id: "trophy_18",
    name: "Pacto: Guerreiro da Luz Solar (Warrior of Sunlight)",
    type: "covenant",
    icon: "☀️",
    desc: "Descubra o pacto Guerreiro da Luz Solar.",
    req: "Encontrar a Insígnia do Solar no Assentamento dos Mortos."
  },
  {
    id: "trophy_19",
    name: "Pacto: Caminho Azul (Way of Blue)",
    type: "covenant",
    icon: "🛡️",
    desc: "Descubra o pacto Caminho Azul.",
    req: "Falar com Emma na igreja da Muralha Alta de Lothric."
  },
  {
    id: "trophy_20",
    name: "Pacto: Sentinelas Azuis (Blue Sentinels)",
    type: "covenant",
    icon: "⚔️",
    desc: "Descubra o pacto Sentinelas Azuis.",
    req: "Falar com Horace na Fortaleza do Caminho dos Sacrifícios."
  },
  {
    id: "trophy_21",
    name: "Pacto: Lâmina da Lua Sombria (Blade of the Darkmoon)",
    type: "covenant",
    icon: "🌙",
    desc: "Descubra o pacto Lâmina da Lua Sombria.",
    req: "Fazer o gesto 'Lealdade à Lua Sombria' para Yorshka na Torre de Anor Londo."
  },
  {
    id: "trophy_22",
    name: "Pacto: Dedos de Rosaria (Rosaria's Fingers)",
    type: "covenant",
    icon: "🩸",
    desc: "Descubra o pacto Dedos de Rosaria.",
    req: "Encontrar Rosaria na Catedral das Profundezas."
  },
  {
    id: "trophy_23",
    name: "Pacto: Empilhadores de Corpos (Mound-makers)",
    type: "covenant",
    icon: "💀",
    desc: "Descubra o pacto Empilhadores de Corpos.",
    req: "Entrar na gaiola do carregador antes de matar a Árvore Corrompida ou pela quest do Hodrick."
  },
  {
    id: "trophy_24",
    name: "Pacto: Cães de Guarda de Farron (Watchdogs of Farron)",
    type: "covenant",
    icon: "🐺",
    desc: "Descubra o pacto Cães de Guarda de Farron.",
    req: "Orar ao Velho Lobo de Farron no pântano."
  },
  {
    id: "trophy_25",
    name: "Pacto: Fiel de Aldrich (Aldrich Faithful)",
    type: "covenant",
    icon: "👁️",
    desc: "Descubra o pacto Fiel de Aldrich.",
    req: "Falar com Archdeacon McDonnell na câmara secreta de Irithyll."
  },
  {
    id: "trophy_26",
    name: "Túmulos Esquecidos (Untended Graves)",
    type: "location",
    icon: "🪦",
    desc: "Alcance os Túmulos Esquecidos.",
    req: "Passar pela parede ilusória atrás do Oceiros no Jardim do Rei Consumido."
  },
  {
    id: "trophy_27",
    name: "Pico do Arquidragão (Archdragon Peak)",
    type: "location",
    icon: "🐉",
    desc: "Alcance o Pico do Arquidragão.",
    req: "Usar o gesto 'Caminho do Dragão' no Calabouço de Irithyll."
  },
  {
    id: "trophy_28",
    name: "Iudex Gundyr",
    type: "boss",
    icon: "⚔️",
    desc: "Derrote Iudex Gundyr.",
    req: "Chefe inicial do Cemitério das Cinzas."
  },
  {
    id: "trophy_29",
    name: "Vordt do Vale Boreal (Vordt of the Boreal Valley)",
    type: "boss",
    icon: "❄️",
    desc: "Derrote Vordt do Vale Boreal.",
    req: "Chefe da Muralha Alta de Lothric."
  },
  {
    id: "trophy_30",
    name: "Grande Carvalho Corrompido (Curse-rotted Greatwood)",
    type: "boss",
    icon: "🌳",
    desc: "Derrote o Grande Carvalho Corrompido.",
    req: "Chefe opcional do Assentamento dos Mortos."
  },
  {
    id: "trophy_31",
    name: "Sábio de Cristal (Crystal Sage)",
    type: "boss",
    icon: "🧙‍♂️",
    desc: "Derrote o Sábio de Cristal.",
    req: "Chefe da Estrada dos Sacrifícios."
  },
  {
    id: "trophy_32",
    name: "Diáconos das Profundezas (Deacons of the Deep)",
    type: "boss",
    icon: "⛪",
    desc: "Derrote os Diáconos das Profundezas.",
    req: "Chefe da Catedral das Profundezas."
  },
  {
    id: "trophy_33",
    name: "Alto Senhor Wolnir (High Lord Wolnir)",
    type: "boss",
    icon: "💀",
    desc: "Derrote o Alto Senhor Wolnir.",
    req: "Chefe das Catacumbas de Carthus."
  },
  {
    id: "trophy_34",
    name: "Pontífice Sulyvahn (Pontiff Sulyvahn)",
    type: "boss",
    icon: "⚔️",
    desc: "Derrote o Pontífice Sulyvahn.",
    req: "Chefe de Irithyll do Vale Boreal."
  },
  {
    id: "trophy_35",
    name: "Dançarina do Vale Boreal (Dancer of the Boreal Valley)",
    type: "boss",
    icon: "💃",
    desc: "Derrote a Dançarina do Vale Boreal.",
    req: "Chefe da igreja na Muralha Alta de Lothric."
  },
  {
    id: "trophy_36",
    name: "Armadura do Matador de Dragões (Dragonslayer Armour)",
    type: "boss",
    icon: "🛡️",
    desc: "Derrote a Armadura do Matador de Dragões.",
    req: "Chefe do Castelo de Lothric."
  },
  {
    id: "trophy_37",
    name: "Antigo Rei Demônio (Old Demon King)",
    type: "boss",
    icon: "🔥",
    desc: "Derrote o Antigo Rei Demônio.",
    req: "Chefe opcional do Lago Ardente."
  },
  {
    id: "trophy_38",
    name: "Oceiros, o Rei Consumido (Oceiros, the Consumed King)",
    type: "boss",
    icon: "🐉",
    desc: "Derrote Oceiros, o Rei Consumido.",
    req: "Chefe opcional do Jardim do Rei Consumido."
  },
  {
    id: "trophy_39",
    name: "Campeão Gundyr (Champion Gundyr)",
    type: "boss",
    icon: "⚔️",
    desc: "Derrote o Campeão Gundyr.",
    req: "Chefe opcional dos Túmulos Esquecidos."
  },
  {
    id: "trophy_40",
    name: "Wyvern Ancião (Ancient Wyvern)",
    type: "boss",
    icon: "🐲",
    desc: "Derrote o Wyvern Ancião.",
    req: "Chefe do Pico do Arquidragão."
  },
  {
    id: "trophy_41",
    name: "Rei Sem Nome (Nameless King)",
    type: "boss",
    icon: "⚡",
    desc: "Derrote o Rei Sem Nome.",
    req: "Chefe opcional do Pico do Arquidragão."
  },
  {
    id: "trophy_42",
    name: "Acender (Enkindle)",
    type: "story",
    icon: "🔥",
    desc: "Acenda uma fogueira pela primeira vez.",
    req: "Acender a primeira fogueira no Cemitério das Cinzas."
  },
  {
    id: "trophy_43",
    name: "Abraçar a Chama (Embrace the Flame)",
    type: "story",
    icon: "✨",
    desc: "Torne-se um Receptáculo das Cinzas (Host of Embers) pela primeira vez.",
    req: "Usar uma Brasa ou derrotar Iudex Gundyr."
  }
];

function getChecklistData() {
  let prof = (typeof window !== 'undefined' && window.profiles) ? window.profiles : (typeof $.jStorage !== 'undefined' ? $.jStorage.get('darksouls3_profiles', {}) : {});
  const pKey = (typeof window !== 'undefined' && window.profilesKey) ? window.profilesKey : 'darksouls3_profiles';
  if (prof && prof.current && prof[pKey] && prof[pKey][prof.current]) {
    return prof[pKey][prof.current].checklistData || {};
  }
  return {};
}

function renderSteamTrophiesTab() {
  const container = document.getElementById('steam_trophies_container');
  if (!container) return;

  const profilesData = getChecklistData();

  // If grid already built, simply update checkboxes and classes in place!
  if (container.querySelector('.steam-trophies-grid')) {
    STEAM_ACHIEVEMENTS_DATA.forEach((trophy) => {
      const isChecked = !!profilesData[trophy.id];
      const chk = document.getElementById(trophy.id);
      if (chk) {
        chk.checked = isChecked;
        const card = chk.closest('.steam-trophy-card');
        if (card) {
          if (isChecked) card.classList.add('trophy-completed');
          else card.classList.remove('trophy-completed');
        }
      }
    });
    updateSteamTrophiesProgress();
    return;
  }

  let completedCount = 0;
  STEAM_ACHIEVEMENTS_DATA.forEach(t => {
    if (profilesData[t.id]) completedCount++;
  });

  const pct = Math.round((completedCount / STEAM_ACHIEVEMENTS_DATA.length) * 100);

  let html = `
    <div class="platinum-dashboard" style="margin-bottom: 20px;">
      <h3 class="trophy-progress-title" style="color: var(--fex-gold); font-family: 'Spectral', serif; margin-bottom: 8px;">🏆 Progresso das Conquistas da Steam (${completedCount} / 43 - ${pct}%)</h3>
      <div class="progress" style="background: var(--fex-card); border: 1px solid var(--fex-border-gold); height: 24px; border-radius: 4px;">
        <div class="progress-bar progress-bar-success" role="progressbar" style="width: ${pct}%; line-height: 24px; font-weight: bold; background-color: #10b981;">${pct}%</div>
      </div>
    </div>
    <div class="steam-trophies-grid">
  `;

  STEAM_ACHIEVEMENTS_DATA.forEach((trophy) => {
    const isChecked = !!profilesData[trophy.id];
    html += `
      <div class="steam-trophy-card ${isChecked ? 'trophy-completed' : ''}">
        <div>
          <div class="steam-trophy-header">
            <input type="checkbox" id="${trophy.id}" ${isChecked ? 'checked' : ''} class="steam-trophy-checkbox" data-trophy-id="${trophy.id}">
            <label for="${trophy.id}" class="steam-trophy-title" style="cursor: pointer; margin: 0;">${trophy.icon} ${trophy.name}</label>
          </div>
          <p class="steam-trophy-desc">${trophy.desc}</p>
        </div>
        <div class="steam-trophy-req">
          <strong>Requisito:</strong> ${trophy.req}
        </div>
      </div>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}

function updateSteamTrophiesProgress() {
  const container = document.getElementById('steam_trophies_container');
  if (!container) return;

  const profilesData = getChecklistData();

  let completedCount = 0;
  STEAM_ACHIEVEMENTS_DATA.forEach(t => {
    if (profilesData[t.id]) completedCount++;
  });

  const pct = Math.round((completedCount / STEAM_ACHIEVEMENTS_DATA.length) * 100);

  const titleEl = container.querySelector('.trophy-progress-title');
  const barEl = container.querySelector('.progress-bar');
  if (titleEl) titleEl.textContent = `🏆 Progresso das Conquistas da Steam (${completedCount} / 43 - ${pct}%)`;
  if (barEl) {
    barEl.style.width = pct + '%';
    barEl.textContent = pct + '%';
  }
}

// Sub-Tab Filter Handler inside Conquistas (Platina)
$(document).on('click', '[data-trophy-subtab]', function() {
  const target = $(this).data('trophy-subtab');

  $('[data-trophy-subtab]').removeClass('active');
  $(this).addClass('active');

  const $steamContainer = $('#steam_trophies_container');
  const $toc = $('.table_of_contents');
  const $itemList = $('#item_list');

  if (target === 'all') {
    $steamContainer.show();
    $toc.show();
    $itemList.show();
    $itemList.find('h3, ul').show();
  } else if (target === 'steam') {
    $steamContainer.show();
    $toc.hide();
    $itemList.hide();
  } else if (target === 'rings') {
    $steamContainer.hide();
    $toc.hide();
    $itemList.show();
    $itemList.find('h3, ul').hide();
    $('#Master_of_Rings, #Master_of_Rings_col, #DLC_Rings, #DLC_Rings_col').show();
  } else if (target === 'spells') {
    $steamContainer.hide();
    $toc.hide();
    $itemList.show();
    $itemList.find('h3, ul').hide();
    $('#Master_of_Sorceries, #Master_of_Sorceries_col, #Master_of_Pyromancies, #Master_of_Pyromancies_col, #Master_of_Miracles, #Master_of_Miracles_col, #DLC_Spells, #DLC_Spells_col').show();
  } else if (target === 'gestures') {
    $steamContainer.hide();
    $toc.hide();
    $itemList.show();
    $itemList.find('h3, ul').hide();
    $('#Master_of_Expression, #Master_of_Expression_col').show();
  } else if (target === 'infusions') {
    $steamContainer.hide();
    $toc.hide();
    $itemList.show();
    $itemList.find('h3, ul').hide();
    $('#Master_of_Infusion, #Master_of_Infusion_col, #Ending_Achievements, #Ending_Achievements_col, #Boss_Achievements, #Boss_Achievements_col, #Covenants_Achievements, #Covenants_Achievements_col').show();
  }
});
