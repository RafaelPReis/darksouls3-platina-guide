/* --------------------------------------------------------------------------
   DARK SOULS 3 - DYNAMIC PLAYTHROUGH TAB RENDERER (SINGLE AREA VIEW MODE)
   -------------------------------------------------------------------------- */

function getActivePlaythroughData() {
  const lang = localStorage.getItem('ds3_lang') || 'pt';
  if (lang === 'en' && typeof PLAYTHROUGH_AREAS_DATA_EN !== 'undefined') {
    return PLAYTHROUGH_AREAS_DATA_EN;
  }
  return typeof PLAYTHROUGH_AREAS_DATA !== 'undefined' ? PLAYTHROUGH_AREAS_DATA : [];
}

function renderPlaythroughTab() {
  const container = document.getElementById('tabPlaythrough');
  if (!container) return;

  const currentLang = localStorage.getItem('ds3_lang') || 'pt';
  const areasData = getActivePlaythroughData();

  let profilesData = {};
  if (typeof profiles !== 'undefined' && profiles[profilesKey] && profiles.current && profiles[profilesKey][profiles.current]) {
    profilesData = profiles[profilesKey][profiles.current].checklistData || {};
  }

  // Calculate overall count & checked
  let totalItemsCount = 0;
  let totalCheckedCount = 0;

  areasData.forEach(area => {
    area.items.forEach(item => {
      totalItemsCount++;
      if (profilesData[item.id]) totalCheckedCount++;
    });
  });

  const overallText = `${totalCheckedCount}/${totalItemsCount}`;
  const isEn = currentLang === 'en';

  let html = `
    <div class="fex-breadcrumb">
      <a href="#">${isEn ? 'Home' : 'Início'}</a> &gt; <a href="#">${isEn ? 'Guides & Walkthrough' : 'Guias e Passo a Passo'}</a> &gt; <span>${isEn ? 'Walkthrough' : 'Passo a Passo (Walkthrough)'}</span>
    </div>

    <div class="fex-page-title-row">
      <h1 class="fex-page-title">${isEn ? 'WALKTHROUGH | DARK SOULS 3' : 'WALKTHROUGH | DARK SOULS 3'}</h1>
      <div class="fex-page-meta">${isEn ? 'Overall Progress' : 'Progresso Geral'}: <strong id="playthrough_overall_total" style="color: var(--fex-gold);">${overallText}</strong></div>
    </div>

    <p class="lead">
      ${isEn ? 'Select an area in the index below to display only the walkthrough for that location.' : 'Selecione uma área no índice abaixo para exibir apenas o passo a passo da região desejada.'}
    </p>

    <!-- Category & Journey Toolbar -->
    <div class="fex-subtab-bar" style="align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px;">
      <div style="display: flex; gap: 8px; align-items: center;">
        <span style="font-weight: 700; color: var(--fex-gold); font-size: 0.9em; text-transform: uppercase;">${isEn ? 'Journey' : 'Jornada'}:</span>
        <button class="fex-subtab-btn active" data-ng-btn="1">NG</button>
        <button class="fex-subtab-btn" data-ng-btn="2">NG+</button>
        <button class="fex-subtab-btn" data-ng-btn="3">NG++</button>
        <button class="fex-subtab-btn" id="btn_toggle_show_all" style="margin-left: 10px;">${isEn ? '🌟 Show All Areas' : '🌟 Mostrar Todas as Áreas'}</button>
      </div>

      <div style="flex-grow: 1; max-width: 350px;">
        <input type="search" id="playthrough_search_input" class="form-control" placeholder="${isEn ? '🔍 Search Walkthrough...' : '🔍 Buscar no Passo a Passo...'}" style="margin: 0;" />
      </div>
    </div>

    <!-- AUTHENTIC FEXTRALIFE WALKTHROUGH INDEX BANNER & GRID -->
    <div class="fex-index-banner">
      <span>⚜</span> DARK SOULS 3 WALKTHROUGH INDEX <span>⚜</span>
    </div>

    <div class="fex-index-grid" id="fex_index_buttons_container">
  `;

  areasData.forEach((area, index) => {
    let areaChecked = 0;
    area.items.forEach(item => {
      if (profilesData[item.id]) areaChecked++;
    });
    html += `
      <button type="button" class="fex-index-btn ${index === 0 ? 'active' : ''}" data-area-id="${area.id}">
        ${area.name} <span id="nav_tot_${area.id}">${areaChecked}/${area.items.length}</span>
      </button>
    `;
  });

  html += `</div><div id="playthrough_areas_list" style="margin-top: 30px;">`;

  areasData.forEach((area, index) => {
    let areaChecked = 0;
    area.items.forEach(item => {
      if (profilesData[item.id]) areaChecked++;
    });

    const isFirst = index === 0;

    html += `
      <div class="fex-locations-box area-card-box" id="area_${area.id}" data-area-id="${area.id}" style="margin-bottom: 30px; ${isFirst ? 'display: block;' : 'display: none;'}">
        <!-- AUTHENTIC FEXTRALIFE AREA TITLE BANNER -->
        <div class="fex-area-title-banner">
          <div class="fex-area-title-text">
            <span class="fex-area-title-icon">⚜</span>
            <span>${isEn ? 'FULL' : 'PASSO A PASSO COMPLETO |'} ${area.name.toUpperCase()} ${isEn ? 'WALKTHROUGH' : ''}</span>
          </div>
          <div class="fex-area-title-counter" id="area_tot_${area.id}">${areaChecked}/${area.items.length}</div>
        </div>

        <!-- NPC AREA BANNER IF MAPPED -->
        ${getNpcAreaBannerHtml(area.id)}

        <div style="padding: 14px;">
          <ul style="margin: 0; padding: 0;">
    `;

    area.items.forEach(item => {
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

  html += `</div>`;
  container.innerHTML = html;
}

window.renderPlaythroughTab = renderPlaythroughTab;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderPlaythroughTab);
} else {
  renderPlaythroughTab();
}

function getNpcAreaBannerHtml(areaId) {
  if (typeof AREA_NPC_MAPPINGS === 'undefined' || !AREA_NPC_MAPPINGS[areaId]) return '';

  const npcs = AREA_NPC_MAPPINGS[areaId];
  let banner = `
    <div class="area-npc-banner" style="margin: 12px 14px 0 14px;">
      <div class="area-npc-title">👥 NPCs Presentes nesta Área:</div>
  `;

  npcs.forEach(npc => {
    banner += `
      <div class="area-npc-pill ${npc.isDanger ? 'area-npc-pill-danger' : ''}">
        <strong>${npc.npc}:</strong> ${npc.note}
      </div>
    `;
  });

  banner += `</div>`;
  return banner;
}

// Single Area Switcher Click Handler
$(document).on('click', '.fex-index-btn', function(e) {
  e.preventDefault();
  const areaId = $(this).data('area-id');
  if (!areaId) return;

  $('.fex-index-btn').removeClass('active');
  $(this).addClass('active');

  // Hide all area boxes and show ONLY the selected one
  $('.area-card-box').hide();
  $(`#area_${areaId}`).fadeIn(200);

  // Reset show all button
  $('#btn_toggle_show_all').removeClass('active').text('🌟 Mostrar Todas as Áreas');
});

// Toggle Show All Areas
$(document).on('click', '#btn_toggle_show_all', function() {
  const isShowingAll = $(this).hasClass('active');
  if (isShowingAll) {
    $(this).removeClass('active').text('🌟 Mostrar Todas as Áreas');
    // Revert to showing active button area
    const activeAreaId = $('.fex-index-btn.active').data('area-id') || 'Cemetery_of_Ash';
    $('.area-card-box').hide();
    $(`#area_${activeAreaId}`).show();
  } else {
    $(this).addClass('active').text('📌 Mostrar Apenas Área Selecionada');
    $('.area-card-box').show();
  }
});

// Search Filter Handler for Walkthrough
$(document).on('keyup search', '#playthrough_search_input', function() {
  const query = $(this).val().toLowerCase().trim();
  if (query.length > 0) {
    // If searching, show matching items in all areas
    $('.area-card-box').show();
    $('#playthrough_areas_list .fex-locations-box').each(function() {
      let hasMatch = false;
      $(this).find('li[data-id]').each(function() {
        const text = $(this).text().toLowerCase();
        if (text.includes(query)) {
          $(this).show();
          hasMatch = true;
        } else {
          $(this).hide();
        }
      });
      if (hasMatch) $(this).show();
      else $(this).hide();
    });
  } else {
    // Revert to selected area view
    const activeAreaId = $('.fex-index-btn.active').data('area-id') || 'Cemetery_of_Ash';
    $('.area-card-box').hide();
    $(`#area_${activeAreaId}`).show();
    $('#playthrough_areas_list li[data-id]').show();
  }
});

// NG Journey Selector Click Handler for Walkthrough
$(document).on('click', '[data-ng-btn]', function() {
  const ngLevel = String($(this).data('ng-btn')); // '1' = NG, '2' = NG+, '3' = NG++
  $('[data-ng-btn]').removeClass('active');
  $(this).addClass('active');

  $('#playthrough_areas_list li[data-id]').each(function() {
    const text = $(this).text();
    const isNGP = $(this).hasClass('f_ngp') || text.includes('NG+') || text.includes('+1');
    const isNGPP = $(this).hasClass('f_ngpp') || text.includes('NG++') || text.includes('+2') || text.includes('+3');

    if (ngLevel === '1') {
      $(this).css({ 'opacity': '1', 'border-color': 'var(--fex-border)', 'background': 'var(--fex-card)' });
    } else if (ngLevel === '2') {
      if (isNGP) {
        $(this).css({ 'opacity': '1', 'border-color': 'var(--fex-gold-bright)', 'background': 'rgba(198, 155, 76, 0.25)' });
      } else {
        $(this).css({ 'opacity': '0.35', 'border-color': 'var(--fex-border)', 'background': 'var(--fex-card)' });
      }
    } else if (ngLevel === '3') {
      if (isNGPP) {
        $(this).css({ 'opacity': '1', 'border-color': 'var(--fex-gold-bright)', 'background': 'rgba(198, 155, 76, 0.3)' });
      } else {
        $(this).css({ 'opacity': '0.35', 'border-color': 'var(--fex-border)', 'background': 'var(--fex-card)' });
      }
    }
  });
});
