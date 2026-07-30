/* --------------------------------------------------------------------------
   DARK SOULS 3 - CREDITS & ACKNOWLEDGMENTS TAB RENDERER
   -------------------------------------------------------------------------- */

function renderCreditsTab() {
  const container = document.getElementById('tabCredits');
  if (!container) return;

  const currentLang = localStorage.getItem('ds3_lang') || 'pt';
  const isEn = currentLang === 'en';

  let html = `
    <div class="fex-breadcrumb">
      <a href="#">${isEn ? 'Home' : 'Início'}</a> &gt; <span>${isEn ? 'Credits & Acknowledgments' : 'Créditos e Agradecimentos'}</span>
    </div>

    <div class="fex-page-title-row">
      <h1 class="fex-page-title">${isEn ? 'CREDITS & ACKNOWLEDGMENTS' : 'CRÉDITOS E AGRADECIMENTOS'}</h1>
    </div>

    <p class="lead">
      ${isEn 
        ? 'This Platinum Guide and Cheat Sheet was built with inspiration from open-source community projects and official Dark Souls III lore resources.' 
        : 'Este Guia da Platina e Cheat Sheet foi desenvolvido com inspiração em projetos open-source da comunidade e fontes oficiais de Dark Souls III.'}
    </p>

    <!-- CREDITS CARDS GRID -->
    <div style="display: flex; flex-direction: column; gap: 25px; margin-top: 25px;">
      
      <!-- 1. ORIGINAL CHEAT SHEET PROJECT -->
      <div class="fex-locations-box" style="padding: 24px; border: 1px solid var(--fex-border-gold); background: linear-gradient(180deg, rgba(28, 24, 20, 0.95) 0%, rgba(18, 15, 12, 0.95) 100%); border-radius: 6px; box-shadow: 0 4px 20px rgba(0,0,0,0.6);">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
          <span style="font-size: 2em; color: var(--fex-gold-bright);">⭐</span>
          <div>
            <h3 style="margin: 0; color: var(--fex-gold-bright); font-family: 'Cinzel', serif; font-size: 1.35em;">
              ${isEn ? 'Original Project Inspiration' : 'Projeto Original & Inspiração Principal'}
            </h3>
            <span style="font-size: 0.9em; color: var(--fex-text-muted);">
              ZKjellberg / Dark Souls 3 Cheat Sheet
            </span>
          </div>
        </div>

        <p style="color: var(--fex-text-bright); line-height: 1.6; font-size: 1em;">
          ${isEn 
            ? 'Special thanks to <strong>ZKjellberg</strong> and all open-source contributors of the original <em>Dark Souls 3 Cheat Sheet</em> repository. Their incredible work laid the foundation for tracking walkthrough tasks, items, and platinum achievements.' 
            : 'Agradecimento especial a <strong>ZKjellberg</strong> e a todos os colaboradores do repositório open-source original <em>Dark Souls 3 Cheat Sheet</em>. O trabalho incrível dessa comunidade forneceu a base estrutural para o rastreamento de tarefas, itens e conquistas de platina.'}
        </p>

        <div style="margin-top: 15px;">
          <a href="https://github.com/ZKjellberg/dark-souls-3-cheat-sheet" target="_blank" rel="noopener noreferrer" class="fex-subtab-btn active" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none; padding: 8px 16px;">
            <span>🐙</span> GitHub Repository: ZKjellberg/dark-souls-3-cheat-sheet
          </a>
        </div>
      </div>

      <!-- 2. FEXTRALIFE WIKI & COMMUNITY -->
      <div class="fex-locations-box" style="padding: 24px; border: 1px solid var(--fex-border); background: var(--fex-card); border-radius: 6px;">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
          <span style="font-size: 2em; color: #70c5ff;">⚔️</span>
          <div>
            <h3 style="margin: 0; color: var(--fex-gold-bright); font-family: 'Cinzel', serif; font-size: 1.35em;">
              Fextralife Dark Souls 3 Wiki
            </h3>
            <span style="font-size: 0.9em; color: var(--fex-text-muted);">
              https://darksouls3.wiki.fextralife.com
            </span>
          </div>
        </div>

        <p style="color: var(--fex-text-bright); line-height: 1.6; font-size: 1em;">
          ${isEn 
            ? 'Item locations, walkthrough notes, weapon stats, npc questline details, and wiki hyperlink references are sourced from the extensive <strong>Fextralife Dark Souls 3 Wiki</strong>.' 
            : 'As localizações de itens, notas de walkthrough, estatísticas de armas, detalhes de questlines de NPCs e referências de hiperlinks da wiki foram extraídos e alinhados a partir da extensa enciclopédia <strong>Fextralife Dark Souls 3 Wiki</strong>.'}
        </p>

        <div style="margin-top: 15px;">
          <a href="https://darksouls3.wiki.fextralife.com/Dark+Souls+3+Wiki" target="_blank" rel="noopener noreferrer" class="fex-subtab-btn" style="display: inline-flex; align-items: center; gap: 8px; text-decoration: none; padding: 8px 16px;">
            <span>🌐</span> Visit Fextralife DS3 Wiki
          </a>
        </div>
      </div>

      <!-- 3. FROMSOFTWARE & BANDAI NAMCO -->
      <div class="fex-locations-box" style="padding: 24px; border: 1px solid var(--fex-border); background: var(--fex-card); border-radius: 6px;">
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
          <span style="font-size: 2em; color: var(--fex-gold-bright);">🔥</span>
          <div>
            <h3 style="margin: 0; color: var(--fex-gold-bright); font-family: 'Cinzel', serif; font-size: 1.35em;">
              FromSoftware & Bandai Namco Entertainment
            </h3>
            <span style="font-size: 0.9em; color: var(--fex-text-muted);">
              Dark Souls III &copy; FromSoftware, Inc.
            </span>
          </div>
        </div>

        <p style="color: var(--fex-text-bright); line-height: 1.6; font-size: 1em;">
          ${isEn 
            ? 'Dark Souls III is a masterpiece created by Hidetaka Miyazaki and FromSoftware. All game titles, character names, items, graphics, and lore are intellectual property of FromSoftware and Bandai Namco Entertainment.' 
            : 'Dark Souls III é uma obra-prima desenvolvida por Hidetaka Miyazaki e a FromSoftware. Todos os títulos do jogo, nomes de personagens, itens, marcas e lore são propriedade intelectual da FromSoftware e Bandai Namco Entertainment.'}
        </p>
      </div>

    </div>
  `;

  container.innerHTML = html;
}

window.renderCreditsTab = renderCreditsTab;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderCreditsTab);
} else {
  renderCreditsTab();
}
