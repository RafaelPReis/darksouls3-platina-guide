/* --------------------------------------------------------------------------
   DARK SOULS 3 - DYNAMIC EQUIPMENT & MISC TABS RENDERER (CATEGORIZED)
   -------------------------------------------------------------------------- */

function renderEquipmentTabs() {
  renderWeaponsTab();
  renderArmorsTab();
  renderMiscTab();
}

window.renderEquipmentTabs = renderEquipmentTabs;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderEquipmentTabs);
} else {
  renderEquipmentTabs();
}

function getActiveChecklistsData() {
  const lang = localStorage.getItem('ds3_lang') || 'pt';
  if (lang === 'en' && typeof CHECKLISTS_DATA_EN !== 'undefined') {
    return CHECKLISTS_DATA_EN;
  }
  return typeof CHECKLISTS_DATA !== 'undefined' ? CHECKLISTS_DATA : {};
}

function renderWeaponsTab() {
  const container = document.getElementById('tabWeapons');
  if (!container) return;

  const currentLang = localStorage.getItem('ds3_lang') || 'pt';
  const isEn = currentLang === 'en';
  const chkData = getActiveChecklistsData();

  let html = `
    <div class="fex-breadcrumb">
      <a href="#">${isEn ? 'Home' : 'Início'}</a> &gt; <a href="#">${isEn ? 'Equipment' : 'Equipamentos'}</a> &gt; <span>${isEn ? 'Weapons & Shields' : 'Armas e Escudos (Categorizados)'}</span>
    </div>

    <div class="fex-page-title-row">
      <h1 class="fex-page-title">${isEn ? 'WEAPONS & SHIELDS | DARK SOULS 3' : 'ARMAS E ESCUDOS | DARK SOULS 3'}</h1>
    </div>

    <p class="lead">${isEn ? 'Complete catalogue of weapons, swords, axes, staves, pyromancy flames and shields categorized.' : 'Catálogo completo de armas, espadas, machados, cajados, piromancias e escudos divididos por categoria.'}</p>

    <div class="form-group" style="margin-bottom: 25px;">
      <input type="search" id="weapons_search_input" class="form-control" placeholder="${isEn ? '🔍 Search weapons...' : '🔍 Buscar armas por nome ou categoria...'}" />
    </div>

    <div id="weapons_container"></div>
  `;

  container.innerHTML = html;
  renderEquipmentCategoryContainer('weapons_container', chkData ? chkData.weapons : []);
}

function renderArmorsTab() {
  const container = document.getElementById('tabArmors');
  if (!container) return;

  const currentLang = localStorage.getItem('ds3_lang') || 'pt';
  const isEn = currentLang === 'en';
  const chkData = getActiveChecklistsData();

  let html = `
    <div class="fex-breadcrumb">
      <a href="#">${isEn ? 'Home' : 'Início'}</a> &gt; <a href="#">${isEn ? 'Equipment' : 'Equipamentos'}</a> &gt; <span>${isEn ? 'Armor Checklists' : 'Armaduras e Peças'}</span>
    </div>

    <div class="fex-page-title-row">
      <h1 class="fex-page-title">${isEn ? 'ARMOR CHECKLISTS | DARK SOULS 3' : 'ARMADURAS E CONJUNTOS | DARK SOULS 3'}</h1>
    </div>

    <p class="lead">${isEn ? 'Complete list of armor pieces categorized by Head, Chest, Hands and Legs.' : 'Lista completa de peças de armadura divididas em Elmos, Peitorais, Manoplas e Perneiras.'}</p>

    <div class="form-group" style="margin-bottom: 25px;">
      <input type="search" id="armors_search_input" class="form-control" placeholder="${isEn ? '🔍 Search armors...' : '🔍 Buscar armaduras...'}" />
    </div>

    <div id="armors_container"></div>
  `;

  container.innerHTML = html;
  renderEquipmentCategoryContainer('armors_container', chkData ? chkData.armors : []);
}

function renderMiscTab() {
  const container = document.getElementById('tabMisc');
  if (!container) return;

  const chkData = getActiveChecklistsData();

  let html = `
    <div class="fex-breadcrumb">
      <a href="#">Início</a> &gt; <a href="#">Outros</a> &gt; <span>Itens Diversos e Trocas</span>
    </div>

    <div class="fex-page-title-row">
      <h1 class="fex-page-title">DIVERSOS E TROCAS | DARK SOULS 3</h1>
    </div>

    <div id="misc_container"></div>
  `;

  container.innerHTML = html;
  renderEquipmentCategoryContainer('misc_container', chkData ? chkData.misc : []);
}

function renderEquipmentCategoryContainer(containerId, dataList) {
  const container = document.getElementById(containerId);
  if (!container || !dataList) return;

  let profilesData = {};
  if (typeof profiles !== 'undefined' && profiles[profilesKey] && profiles.current && profiles[profilesKey][profiles.current]) {
    profilesData = profiles[profilesKey][profiles.current].checklistData || {};
  }

  let html = '';

  dataList.forEach(cat => {
    let catChecked = 0;
    cat.items.forEach(item => {
      if (profilesData[item.id]) catChecked++;
    });

    html += `
      <div class="fex-locations-box equip-cat-box" id="${cat.id}_box" style="margin-bottom: 25px;">
        <div class="fex-locations-header" style="display: flex; justify-content: space-between; align-items: center; text-align: left;">
          <span style="font-size: 1.1em;">${cat.name}</span>
          <span style="font-size: 0.9em; color: var(--fex-gold);" id="cat_tot_${cat.id}">${catChecked}/${cat.items.length}</span>
        </div>

        <div style="padding: 14px;">
          <ul style="margin: 0; padding: 0;">
    `;

    cat.items.forEach(item => {
      const isChecked = !!profilesData[item.id];
      html += `
        <li data-id="${item.id}" class="${item.class} ${isChecked ? 'completed' : ''}" style="margin-bottom: 6px; padding: 10px 14px; background: var(--fex-card); border: 1px solid var(--fex-border); border-radius: 4px;">
          <div class="checkbox" style="margin: 0;">
            <label class="${isChecked ? 'completed' : ''}" style="cursor: pointer; margin: 0; display: block; color: var(--fex-text-bright);">
              <input type="checkbox" id="${item.id}" ${isChecked ? 'checked' : ''} style="margin-right: 10px; width: 17px; height: 17px; accent-color: var(--fex-green); vertical-align: middle;">
              <span class="item_content">${item.html}</span>
            </label>
          </div>
        </li>
      `;
    });

    html += `
          </ul>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Search Filter Handler for Weapons
$(document).on('keyup search', '#weapons_search_input', function() {
  const query = $(this).val().toLowerCase().trim();
  $('#weapons_container .equip-cat-box').each(function() {
    let hasMatch = false;
    $(this).find('li[data-id]').each(function() {
      const text = $(this).text().toLowerCase();
      if (!query || text.includes(query)) {
        $(this).show();
        hasMatch = true;
      } else {
        $(this).hide();
      }
    });
    if (hasMatch) $(this).show();
    else $(this).hide();
  });
});

// Search Filter Handler for Armors
$(document).on('keyup search', '#armors_search_input', function() {
  const query = $(this).val().toLowerCase().trim();
  $('#armors_container .equip-cat-box').each(function() {
    let hasMatch = false;
    $(this).find('li[data-id]').each(function() {
      const text = $(this).text().toLowerCase();
      if (!query || text.includes(query)) {
        $(this).show();
        hasMatch = true;
      } else {
        $(this).hide();
      }
    });
    if (hasMatch) $(this).show();
    else $(this).hide();
  });
});
