/* --------------------------------------------------------------------------
   DARK SOULS 3 - DYNAMIC COLLECTIBLES & TROPHIES TAB RENDERER (ACCURATE NG)
   -------------------------------------------------------------------------- */

function getActiveChecklistsData() {
  const lang = localStorage.getItem('ds3_lang') || 'pt';
  if (lang === 'en' && typeof CHECKLISTS_DATA_EN !== 'undefined') {
    return CHECKLISTS_DATA_EN;
  }
  return typeof CHECKLISTS_DATA !== 'undefined' ? CHECKLISTS_DATA : {};
}

function renderChecklistsTab() {
  const container = document.getElementById('tabChecklists');
  if (!container) return;

  const chkData = getActiveChecklistsData();

  let html = `
    <div class="fex-breadcrumb">
      <a href="#">Início</a> &gt; <a href="#">Guias e Passo a Passo</a> &gt; <span>Conquistas e Colecionáveis</span>
    </div>

    <div class="fex-page-title-row">
      <h1 class="fex-page-title">CONQUISTAS & COLECIONÁVEIS | PLATINA</h1>
    </div>

    <!-- SUB-TAB FILTER PILLS -->
    <div class="fex-subtab-bar">
      <button class="fex-subtab-btn active" data-trophy-subtab="all">🌟 Todos os Colecionáveis</button>
      <button class="fex-subtab-btn" data-trophy-subtab="steam">🏆 43 Troféus Steam</button>
      <button class="fex-subtab-btn" data-trophy-subtab="rings">💍 107 Anéis (NG / NG+ / NG++)</button>
      <button class="fex-subtab-btn" data-trophy-subtab="spells">📜 Feitiços & Milagres</button>
      <button class="fex-subtab-btn" data-trophy-subtab="gestures">🙋 33 Gestos</button>
      <button class="fex-subtab-btn" data-trophy-subtab="infusions">⚔️ Infusões & Finais</button>
    </div>

    <!-- STEAM TROPHIES DASHBOARD CONTAINER -->
    <div id="steam_trophies_container"></div>

    <!-- COLLECTIBLE ITEM LISTS -->
    <div id="checklists_items_container" style="margin-top: 25px;"></div>
  `;

  container.innerHTML = html;

  // Render steam trophies grid
  if (typeof renderSteamTrophiesTab === 'function') renderSteamTrophiesTab();

  // Render collectible list items
  renderChecklistItemsContainer('all');
}

window.renderChecklistsTab = renderChecklistsTab;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderChecklistsTab);
} else {
  renderChecklistsTab();
}

function renderChecklistItemsContainer(subtabType) {
  const container = document.getElementById('checklists_items_container');
  if (!container) return;

  let profilesData = {};
  if (typeof profiles !== 'undefined' && profiles[profilesKey] && profiles.current && profiles[profilesKey][profiles.current]) {
    profilesData = profiles[profilesKey][profiles.current].checklistData || {};
  }

  const chkData = getActiveChecklistsData();
  if (!chkData.collectibles) return;

  let html = '';

  chkData.collectibles.forEach(cat => {
    // Filter categories based on active subtab
    if (subtabType && subtabType !== 'all') {
      if (subtabType === 'rings' && cat.type !== 'rings') return;
      if (subtabType === 'spells' && cat.type !== 'spells') return;
      if (subtabType === 'gestures' && cat.type !== 'gestures') return;
      if (subtabType === 'infusions' && cat.type !== 'infusions') return;
      if (subtabType === 'steam') return; // Steam trophies handled separately
    }

    html += `
      <div class="fex-locations-box" id="${cat.id}_box" style="margin-bottom: 30px;">
        <div class="fex-locations-header" style="text-align: left;">
          <span>${cat.name}</span>
        </div>

        <div style="padding: 14px;">
    `;

    cat.subCategories.forEach(sub => {
      let subChecked = 0;
      sub.items.forEach(item => {
        if (profilesData[item.id]) subChecked++;
      });

      html += `
        <div style="margin-bottom: 20px;">
          <h4 style="color: var(--fex-gold); font-family: 'Cinzel', serif; font-size: 1.05em; border-bottom: 1px solid var(--fex-border-gold); padding-bottom: 6px; margin-bottom: 12px; display: flex; justify-content: space-between;">
            <span>${sub.name}</span>
            <span>${subChecked}/${sub.items.length}</span>
          </h4>
          <ul style="margin: 0; padding: 0;">
      `;

      sub.items.forEach(item => {
        const isChecked = !!profilesData[item.id];
        html += `
          <li data-id="${item.id}" class="${isChecked ? 'completed' : ''}" style="margin-bottom: 6px; padding: 10px 14px; background: var(--fex-card); border: 1px solid var(--fex-border); border-radius: 4px;">
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
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Sub-Tab Filter Click Handler inside Conquistas (Platina)
$(document).on('click', '[data-trophy-subtab]', function() {
  const target = $(this).data('trophy-subtab');

  $('[data-trophy-subtab]').removeClass('active');
  $(this).addClass('active');

  const $steamContainer = $('#steam_trophies_container');

  if (target === 'steam') {
    $steamContainer.show();
    renderChecklistItemsContainer('steam');
  } else if (target === 'all') {
    $steamContainer.show();
    renderChecklistItemsContainer('all');
  } else {
    $steamContainer.hide();
    renderChecklistItemsContainer(target);
  }
});
