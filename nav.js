(function () {

  /* ══════════════════════════════════════════════
     DADOS: categorias e produtos
  ══════════════════════════════════════════════ */
  var CATS = [
    {
      id: 'enmg', label: 'ENMG e Potenciais Evocados', href: '/equipamentos/eletroneuromiografia-e-potenciais-evocados',
      products: [
        { name: 'Litebox',         desc: '3 canais · USB · MNIO',               href: '/equipamentos/eletroneuromiografia-e-potenciais-evocados/litebox-light' },
        { name: 'Skybox',          desc: '5 canais · teclado dedicado',          href: 'https://www.kandel.com.br/equipamento/eletroneuromiografia-e-pe/skybox' },
        { name: 'Neuro MEP Micro', desc: '2 canais · portátil',                 href: 'https://www.kandel.com.br/equipamento/eletroneuromiografia-e-pe/neuro-mep-micro' },
        { name: 'Neuro-MEP-4',    desc: 'Sistema modular completo',             href: 'https://www.kandel.com.br/equipamento/eletroneuromiografia-e-pe/neuro-mep' },
        { name: 'Neuro EMG Micro', desc: '2–4 canais · ambulatorial',           href: 'https://www.kandel.com.br/equipamento/eletroneuromiografia-e-pe/neuro-emg-micro' },
        { name: 'Neuro TOX',       desc: 'EMG guiado para toxina botulínica',   href: 'https://www.kandel.com.br/equipamento/eletroneuromiografia-e-pe/neuro-tox' },
      ]
    },
    {
      id: 'eeg', label: 'Eletroencefalografia', href: '/equipamentos/eletroencefalografia',
      products: [
        { name: 'Neuron Spectrum 65',    desc: 'EEG + PE · 24–128 canais',           href: 'https://www.kandel.com.br/equipamentos/eeg/neuron-spectrum-65' },
        { name: 'Neuron-Spectrum-4/EP',  desc: 'EEG ambulatorial · 21 canais',        href: 'https://www.kandel.com.br/equipamentos/eeg/neuron-spectrum-4ep' },
        { name: 'Neuron-Spectrum-45',    desc: 'EEG compacto · vídeo-EEG',           href: 'https://www.kandel.com.br/equipamentos/eeg/neuron-spectrum-45' },
      ]
    },
    {
      id: 'emt', label: 'Estimulação Magnética', href: '/equipamentos/estimulação-magnética-transcraniana',
      products: [
        { name: 'Neuro MS/D',  desc: 'TMS diagnóstica e terapêutica',  href: 'https://www.kandel.com.br/equipamentos/estimulacao-magnetica/neuro-ms-d' },
        { name: 'Neuro MSX',   desc: 'TMS de alta frequência',         href: '/equipamentos/estimulação-magnética-transcraniana/neuro-msx' },
      ]
    },
    {
      id: 'mnio', label: 'Monitorização Intraoperatória', href: '/equipamentos/monitorização-intraoperatória',
      products: [
        { name: 'Neuro IOM 32', desc: '32 canais · sala cirúrgica',     href: 'https://www.kandel.com.br/equipamentos/monitorizacao-intraoperatoria/neuro-iom-32' },
        { name: 'Neuro IOM',    desc: 'MNIO compacto e modular',        href: 'https://www.kandel.com.br/equipamentos/monitorizacao-intraoperatoria/neuro-iom' },
      ]
    },
    {
      id: 'audio', label: 'Audiologia', href: '/equipamentos/audiologia',
      products: [
        { name: 'Neuro-Audio',    desc: 'ABR · AMLR · DPOAE · TEOAE',   href: '/equipamentos/audiologia/neuro-audio' },
        { name: 'Neuro-Audio-04', desc: 'Screening neonatal avançado',    href: 'https://www.kandel.com.br/equipamentos/audiologia/neuro-audio-04' },
      ]
    },
    {
      id: 'ultra', label: 'Ultrassonografia', href: '/equipamentos/ultrassonografia',
      products: [
        { name: 'Echo Blaster 128', desc: 'Ultrassom diagnóstico portátil', href: 'https://www.kandel.com.br/equipamentos/ultrassonografia' },
      ]
    },
    {
      id: 'erg', label: 'Eletrorretinografia', href: '/equipamentos/eletrorretinografia',
      products: [
        { name: 'RetiPort',        desc: 'ERG · VEP · EOG · mfERG',   href: 'https://www.kandel.com.br/equipamentos/eletrorretinografia/retiport' },
      ]
    },
    {
      id: 'bio', label: 'Neurofeedback', href: '/equipamentos/neurofeedback',
      products: [
        { name: 'Neuro Praxis',    desc: 'Biofeedback e neurofeedback', href: 'https://www.kandel.com.br/equipamentos/neurofeedback' },
      ]
    },
    {
      id: 'cirurg', label: 'Sist. Cirúrgico Ultrassônico', href: '/equipamentos/sistema-cirurgico-ultrassonico',
      products: [
        { name: 'Finus 55', desc: 'Ablação ultrassônica cirúrgica', href: 'https://www.kandel.com.br/equipamentos/sistema-cirurgico-ultrassonico/finus-55' },
      ]
    },
  ];

  /* ══════════════════════════════════════════════
     CSS
  ══════════════════════════════════════════════ */
  var s = document.createElement('style');
  s.textContent = [
    /* nav base */
    '#kd-nav{',
      'position:fixed;top:0;left:0;right:0;z-index:9999;',
      'height:64px;display:flex;align-items:center;padding:0 28px;',
      'background:rgba(255,255,255,0);',
      'backdrop-filter:blur(0px);-webkit-backdrop-filter:blur(0px);',
      'border-bottom:1px solid rgba(12,30,44,0);',
      'transition:background .35s,backdrop-filter .35s,border-color .35s;',
    '}',
    '#kd-nav.scrolled{',
      'background:rgba(255,255,255,0.92);',
      'backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);',
      'border-color:rgba(12,30,44,0.08);',
    '}',
    '.kd-nav-inner{',
      'max-width:1200px;width:100%;margin:0 auto;',
      'display:flex;align-items:center;justify-content:space-between;gap:16px;',
    '}',
    '.kd-logo{display:flex;align-items:center;text-decoration:none;flex-shrink:0;}',
    '.kd-logo img{height:32px;width:auto;display:block;transition:filter .35s;}',
    '#kd-nav.scrolled .kd-logo img{filter:brightness(0);}',
    /* desktop links */
    '.kd-links{display:flex;align-items:center;gap:4px;list-style:none;}',
    '.kd-links>li{position:relative;}',
    '.kd-links>li>a{',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:14px;font-weight:400;color:rgba(255,255,255,0.80);',
      'text-decoration:none;padding:8px 14px;border-radius:8px;',
      'display:flex;align-items:center;gap:5px;',
      'transition:color .2s,background .2s;white-space:nowrap;',
    '}',
    '.kd-links>li>a:hover,.kd-links>li.mega-open>a{color:#fff;background:rgba(255,255,255,0.10);}',
    '#kd-nav.scrolled .kd-links>li>a{color:rgba(12,30,44,0.60);}',
    '#kd-nav.scrolled .kd-links>li>a:hover,#kd-nav.scrolled .kd-links>li.mega-open>a{color:#0c1e2c;background:rgba(12,30,44,0.05);}',
    '.kd-links>li>a svg{transition:transform .25s;opacity:.55;}',
    '.kd-links>li.mega-open>a svg{transform:rotate(180deg);opacity:1;}',
    /* CTA */
    '.kd-cta{',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:13px;font-weight:500;',
      'padding:8px 18px;border-radius:980px;',
      'background:#d44f4c;color:#fff;',
      'text-decoration:none;flex-shrink:0;',
      'transition:background .2s,transform .2s,box-shadow .2s;white-space:nowrap;',
    '}',
    '.kd-cta:hover{background:#b8413f;transform:translateY(-1px);box-shadow:0 6px 18px rgba(212,79,76,0.35);}',
    /* hamburger */
    '.kd-burger{',
      'display:none;flex-direction:column;gap:5px;',
      'background:none;border:none;cursor:pointer;padding:6px;',
    '}',
    '.kd-burger span{',
      'display:block;width:22px;height:2px;',
      'background:rgba(255,255,255,0.8);border-radius:2px;',
      'transition:transform .25s,opacity .25s,background .35s;',
    '}',
    '#kd-nav.scrolled .kd-burger span{background:rgba(12,30,44,0.65);}',
    '.kd-burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}',
    '.kd-burger.open span:nth-child(2){opacity:0;}',
    '.kd-burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}',

    /* ── MEGA MENU — tema claro ── */
    '#kd-mega{',
      'position:fixed;top:64px;left:0;right:0;z-index:9998;',
      'background:rgba(255,255,255,0.97);',
      'backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);',
      'border-bottom:1px solid rgba(12,30,44,0.08);',
      'box-shadow:0 8px 32px rgba(12,30,44,0.08);',
      'opacity:0;visibility:hidden;pointer-events:none;',
      'transform:translateY(-6px);',
      'transition:opacity .22s ease,transform .22s ease,visibility .22s;',
    '}',
    '#kd-mega.open{',
      'opacity:1;visibility:visible;pointer-events:auto;',
      'transform:translateY(0);',
    '}',
    '.kd-mega-inner{',
      'max-width:1200px;margin:0 auto;',
      'display:flex;padding:24px 28px 28px;gap:0;',
      'min-height:300px;',
    '}',
    /* left: category list */
    '.kd-mega-cats{',
      'width:230px;flex-shrink:0;',
      'display:flex;flex-direction:column;gap:2px;',
      'padding-right:20px;',
      'border-right:1px solid rgba(12,30,44,0.07);',
    '}',
    '.kd-mega-cat-title{',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:10px;font-weight:700;letter-spacing:.10em;text-transform:uppercase;',
      'color:rgba(12,30,44,0.28);padding:0 10px 10px;',
    '}',
    '.kd-mega-cat{',
      'display:flex;align-items:center;justify-content:space-between;gap:8px;',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:13px;font-weight:400;color:rgba(12,30,44,0.55);',
      'text-decoration:none;',
      'padding:9px 10px;border-radius:8px;cursor:pointer;',
      'transition:background .15s,color .15s;',
    '}',
    '.kd-mega-cat:hover,.kd-mega-cat.active{',
      'background:rgba(12,30,44,0.05);color:#0c1e2c;',
    '}',
    '.kd-mega-cat.active{font-weight:500;}',
    '.kd-mega-cat svg{opacity:0;transition:opacity .15s;flex-shrink:0;stroke:rgba(12,30,44,0.40);}',
    '.kd-mega-cat.active svg{opacity:1;}',
    /* right: product sets */
    '.kd-mega-prods{',
      'flex:1;padding-left:28px;',
      'position:relative;',
    '}',
    '.kd-prod-set{',
      'position:absolute;top:0;left:28px;right:0;',
      'display:grid;grid-template-columns:repeat(2,1fr);gap:6px;',
      'opacity:0;visibility:hidden;pointer-events:none;',
      'transition:opacity .18s;',
    '}',
    '#kd-mega.open .kd-prod-set.active{',
      'opacity:1;visibility:visible;pointer-events:auto;',
    '}',
    '.kd-prod-item{',
      'display:block;text-decoration:none;',
      'padding:14px 16px;border-radius:12px;',
      'border:1px solid rgba(12,30,44,0.06);',
      'transition:background .15s,border-color .15s,box-shadow .15s;',
    '}',
    '.kd-prod-item:hover{background:rgba(12,30,44,0.03);border-color:rgba(12,30,44,0.10);box-shadow:0 2px 12px rgba(12,30,44,0.06);}',
    '.kd-prod-name{',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:14px;font-weight:600;color:#0c1e2c;margin-bottom:3px;',
    '}',
    '.kd-prod-desc{',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:12px;color:rgba(12,30,44,0.38);',
    '}',
    /* footer link */
    '.kd-prod-footer{',
      'grid-column:1/-1;',
      'margin-top:8px;padding-top:14px;',
      'border-top:1px solid rgba(12,30,44,0.07);',
      'display:flex;align-items:center;gap:6px;',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:12px;font-weight:500;',
      'color:#d44f4c;text-decoration:none;',
      'transition:color .15s;',
    '}',
    '.kd-prod-footer:hover{color:#b8413f;}',

    /* preview panel */
    '.kd-mega-preview{',
      'width:220px;flex-shrink:0;',
      'border-left:1px solid rgba(12,30,44,0.07);',
      'padding-left:24px;',
      'display:flex;flex-direction:column;gap:12px;',
    '}',
    '.kd-preview-box{',
      'width:100%;aspect-ratio:4/3;border-radius:12px;overflow:hidden;',
      'background:linear-gradient(135deg,rgba(12,30,44,0.04) 0%,rgba(12,30,44,0.08) 100%);',
      'border:1px solid rgba(12,30,44,0.07);',
      'display:flex;align-items:center;justify-content:center;',
      'transition:background .2s;',
    '}',
    '.kd-preview-img{',
      'width:100%;height:100%;object-fit:contain;',
      'display:none;',
    '}',
    '.kd-preview-img.visible{display:block;}',
    '.kd-preview-ph{',
      'display:flex;flex-direction:column;align-items:center;gap:10px;',
      'padding:16px;text-align:center;',
    '}',
    '.kd-preview-ph svg{opacity:.18;}',
    '.kd-preview-ph-label{',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:11px;color:rgba(12,30,44,0.30);letter-spacing:.04em;',
    '}',
    '.kd-preview-info{display:flex;flex-direction:column;gap:4px;}',
    '.kd-preview-name{',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:14px;font-weight:600;color:#0c1e2c;',
      'min-height:20px;',
    '}',
    '.kd-preview-desc{',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:12px;color:rgba(12,30,44,0.40);',
      'min-height:16px;',
    '}',
    '.kd-preview-hint{',
      'margin-top:auto;',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:11px;color:rgba(12,30,44,0.22);',
      'line-height:1.4;',
    '}',

    /* ── MOBILE — tema claro ── */
    '#kd-mobile{',
      'position:fixed;top:64px;left:0;right:0;z-index:9997;',
      'background:rgba(255,255,255,0.97);',
      'backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);',
      'border-bottom:1px solid rgba(12,30,44,0.08);',
      'box-shadow:0 8px 24px rgba(12,30,44,0.08);',
      'padding:12px 20px 24px;',
      'display:none;flex-direction:column;',
      'max-height:calc(100vh - 64px);overflow-y:auto;',
    '}',
    '#kd-mobile.open{display:flex;}',
    '.mob-link{',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:15px;color:rgba(12,30,44,0.60);',
      'text-decoration:none;padding:10px 12px;border-radius:8px;',
      'transition:color .15s,background .15s;',
      'display:block;',
    '}',
    '.mob-link:hover{color:#0c1e2c;background:rgba(12,30,44,0.05);}',
    '.mob-divider{height:1px;background:rgba(12,30,44,0.08);margin:6px 0;}',
    /* accordion */
    '.mob-acc-btn{',
      'width:100%;display:flex;align-items:center;justify-content:space-between;',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:15px;font-weight:500;color:rgba(12,30,44,0.65);',
      'background:none;border:none;cursor:pointer;',
      'padding:10px 12px;border-radius:8px;text-align:left;',
      'transition:color .15s,background .15s;',
    '}',
    '.mob-acc-btn:hover,.mob-acc-btn.open{color:#0c1e2c;background:rgba(12,30,44,0.05);}',
    '.mob-acc-btn svg{transition:transform .25s;opacity:.4;flex-shrink:0;stroke:#0c1e2c;}',
    '.mob-acc-btn.open svg{transform:rotate(180deg);}',
    '.mob-acc-panel{display:none;padding:0 0 4px 12px;}',
    '.mob-acc-panel.open{display:block;}',
    '.mob-cat-btn{',
      'width:100%;display:flex;align-items:center;justify-content:space-between;',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:14px;color:rgba(12,30,44,0.55);',
      'background:none;border:none;cursor:pointer;',
      'padding:8px 12px;border-radius:6px;text-align:left;',
      'transition:color .15s,background .15s;',
    '}',
    '.mob-cat-btn:hover,.mob-cat-btn.open{color:#0c1e2c;background:rgba(12,30,44,0.05);}',
    '.mob-cat-btn svg{transition:transform .2s;opacity:.35;flex-shrink:0;stroke:#0c1e2c;}',
    '.mob-cat-btn.open svg{transform:rotate(180deg);}',
    '.mob-prod-panel{display:none;padding:4px 0 4px 16px;}',
    '.mob-prod-panel.open{display:block;}',
    '.mob-prod-link{',
      'display:block;text-decoration:none;',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:13px;color:rgba(12,30,44,0.45);',
      'padding:7px 12px;border-radius:6px;',
      'transition:color .15s,background .15s;',
    '}',
    '.mob-prod-link:hover{color:#0c1e2c;background:rgba(12,30,44,0.04);}',
    '.mob-cta{',
      'font-family:"Outfit",system-ui,sans-serif;',
      'font-size:15px;font-weight:500;',
      'padding:12px;border-radius:980px;',
      'background:#d44f4c;color:#fff;',
      'text-decoration:none;text-align:center;',
      'display:block;margin-top:10px;',
    '}',
    /* responsive */
    '@media(max-width:900px){',
      '.kd-links,.kd-cta{display:none;}',
      '.kd-burger{display:flex;}',
      '#kd-mega{display:none!important;}',
    '}',
  ].join('');
  document.head.appendChild(s);

  /* ══════════════════════════════════════════════
     NAV MARKUP
  ══════════════════════════════════════════════ */
  var nav = document.createElement('nav');
  nav.id = 'kd-nav';
  nav.innerHTML = [
    '<div class="kd-nav-inner">',
      '<a class="kd-logo" href="/"><img src="https://static.wixstatic.com/media/0aeb5d_3a1464cb5e1241c19c136802db0e55c5~mv2.png/v1/fill/w_176,h_50,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Kandel_Marca%20Horizontal_Cor_NEGATIVA.png" alt="Kandel Medical"></a>',
      '<ul class="kd-links">',
        '<li id="kd-equip-li">',
          '<a href="/cat-geral" id="kd-equip-a">',
            'Equipamentos',
            '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>',
          '</a>',
        '</li>',
        '<li><a href="https://loja.kandel.com.br/" target="_blank" rel="noopener">Loja Online</a></li>',
        '<li><a href="https://cursos.kandel.com.br/" target="_blank" rel="noopener">Cursos e Treinamentos</a></li>',
        '<li><a href="/blog">Blog</a></li>',
        '<li><a href="https://atendimento.kandel.com.br/kb" target="_blank" rel="noopener">Suporte Técnico</a></li>',
      '</ul>',
      '<a class="kd-cta" href="https://www.kandel.com.br/fale-conosco" target="_top">Solicitar demo</a>',
      '<button class="kd-burger" id="kdBurger" aria-label="Menu">',
        '<span></span><span></span><span></span>',
      '</button>',
    '</div>',
  ].join('');
  document.body.insertBefore(nav, document.body.firstChild);

  /* ══════════════════════════════════════════════
     MEGA MENU MARKUP
  ══════════════════════════════════════════════ */
  var mega = document.createElement('div');
  mega.id = 'kd-mega';

  var catsHTML = '<div class="kd-mega-cats"><div class="kd-mega-cat-title">Categorias</div>';
  var prodsHTML = '<div class="kd-mega-prods">';
  var chevronSVG = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>';

  CATS.forEach(function (cat, i) {
    catsHTML += '<a class="kd-mega-cat' + (i === 0 ? ' active' : '') + '" data-cat="' + cat.id + '" href="' + cat.href + '">' + cat.label + chevronSVG + '</a>';

    prodsHTML += '<div class="kd-prod-set' + (i === 0 ? ' active' : '') + '" data-cat="' + cat.id + '">';
    cat.products.forEach(function (p) {
      var external = p.href.indexOf('http') === 0;
      prodsHTML += '<a class="kd-prod-item" href="' + p.href + '"' + (external ? ' target="_top"' : '') + ' data-name="' + p.name + '" data-desc="' + p.desc + '" data-img="' + (p.img || '') + '">';
      prodsHTML += '<div class="kd-prod-name">' + p.name + '</div>';
      prodsHTML += '<div class="kd-prod-desc">' + p.desc + '</div>';
      prodsHTML += '</a>';
    });
    prodsHTML += '<a class="kd-prod-footer" href="' + cat.href + '"' + (cat.href.indexOf('http') === 0 ? ' target="_top"' : '') + '>';
    prodsHTML += 'Ver todos os equipamentos de ' + cat.label;
    prodsHTML += '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
    prodsHTML += '</a>';
    prodsHTML += '</div>';
  });

  catsHTML += '</div>';
  prodsHTML += '</div>';

  var deviceIconSVG = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#0c1e2c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="36" height="24" rx="3"/><line x1="16" y1="38" x2="32" y2="38"/><line x1="20" y1="34" x2="28" y2="38"/><polyline points="12 22 18 16 24 22 30 18 36 22"/></svg>';
  var previewHTML = '<div class="kd-mega-preview" id="kd-preview">'
    + '<div class="kd-preview-box" id="kd-preview-box">'
      + '<img class="kd-preview-img" id="kd-preview-img" src="" alt="">'
      + '<div class="kd-preview-ph" id="kd-preview-ph">' + deviceIconSVG + '<span class="kd-preview-ph-label" id="kd-preview-ph-label">Passe o mouse<br>sobre um produto</span></div>'
    + '</div>'
    + '<div class="kd-preview-info">'
      + '<div class="kd-preview-name" id="kd-preview-name"></div>'
      + '<div class="kd-preview-desc" id="kd-preview-desc"></div>'
    + '</div>'
    + '<div class="kd-preview-hint">Clique para ver a página completa do equipamento</div>'
  + '</div>';

  mega.innerHTML = '<div class="kd-mega-inner">' + catsHTML + prodsHTML + previewHTML + '</div>';
  document.body.insertBefore(mega, nav.nextSibling);

  /* ══════════════════════════════════════════════
     MOBILE MENU MARKUP
  ══════════════════════════════════════════════ */
  var mob = document.createElement('div');
  mob.id = 'kd-mobile';

  var chevDown = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>';

  var mobHTML = '';
  // Equipamentos accordion
  mobHTML += '<button class="mob-acc-btn" id="mobEquipBtn">Equipamentos ' + chevDown + '</button>';
  mobHTML += '<div class="mob-acc-panel" id="mobEquipPanel">';
  CATS.forEach(function (cat) {
    mobHTML += '<button class="mob-cat-btn" data-panel="mob-cat-' + cat.id + '">' + cat.label + chevDown + '</button>';
    mobHTML += '<div class="mob-prod-panel" id="mob-cat-' + cat.id + '">';
    cat.products.forEach(function (p) {
      var external = p.href.indexOf('http') === 0;
      mobHTML += '<a class="mob-prod-link" href="' + p.href + '"' + (external ? ' target="_top"' : '') + '>' + p.name + '</a>';
    });
    mobHTML += '</div>';
  });
  mobHTML += '</div>';
  mobHTML += '<div class="mob-divider"></div>';
  mobHTML += '<a class="mob-link" href="https://loja.kandel.com.br/" target="_blank" rel="noopener">Loja Online</a>';
  mobHTML += '<a class="mob-link" href="https://cursos.kandel.com.br/" target="_blank" rel="noopener">Cursos e Treinamentos</a>';
  mobHTML += '<a class="mob-link" href="/blog">Blog</a>';
  mobHTML += '<a class="mob-link" href="https://atendimento.kandel.com.br/kb" target="_blank" rel="noopener">Suporte Técnico</a>';
  mobHTML += '<a class="mob-cta" href="https://www.kandel.com.br/fale-conosco" target="_top">Solicitar demo</a>';

  mob.innerHTML = mobHTML;
  document.body.insertBefore(mob, mega.nextSibling);

  /* ══════════════════════════════════════════════
     INTERAÇÕES
  ══════════════════════════════════════════════ */

  // — Scroll: torna nav sólido
  function onScroll() { nav.classList.toggle('scrolled', window.pageYOffset > 40); }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // — Mega menu: abrir/fechar
  var equipLi = document.getElementById('kd-equip-li');
  var openTimer, closeTimer;

  function openMega() {
    clearTimeout(closeTimer);
    openTimer = setTimeout(function () {
      equipLi.classList.add('mega-open');
      mega.classList.add('open');
    }, 180);
  }
  function closeMega() {
    clearTimeout(openTimer);
    closeTimer = setTimeout(function () {
      equipLi.classList.remove('mega-open');
      mega.classList.remove('open');
    }, 180);
  }

  equipLi.addEventListener('mouseenter', openMega);
  equipLi.addEventListener('mouseleave', closeMega);
  mega.addEventListener('mouseenter', function () { clearTimeout(closeTimer); });
  mega.addEventListener('mouseleave', closeMega);

  // — Mega menu: trocar categoria ativa
  var catBtns = mega.querySelectorAll('.kd-mega-cat');
  var prodSets = mega.querySelectorAll('.kd-prod-set');

  catBtns.forEach(function (btn) {
    btn.addEventListener('mouseenter', function () {
      var id = btn.getAttribute('data-cat');
      catBtns.forEach(function (b) { b.classList.remove('active'); });
      prodSets.forEach(function (s) { s.classList.remove('active'); });
      btn.classList.add('active');
      mega.querySelector('.kd-prod-set[data-cat="' + id + '"]').classList.add('active');
    });
  });

  // — Preview panel
  var previewImg = document.getElementById('kd-preview-img');
  var previewPh = document.getElementById('kd-preview-ph');
  var previewPhLabel = document.getElementById('kd-preview-ph-label');
  var previewName = document.getElementById('kd-preview-name');
  var previewDesc = document.getElementById('kd-preview-desc');

  mega.querySelectorAll('.kd-prod-item').forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      var name = this.dataset.name || '';
      var desc = this.dataset.desc || '';
      var img  = this.dataset.img  || '';
      previewName.textContent = name;
      previewDesc.textContent = desc;
      if (img) {
        previewImg.src = img;
        previewImg.alt = name;
        previewImg.classList.add('visible');
        previewPh.style.display = 'none';
      } else {
        previewImg.classList.remove('visible');
        previewPh.style.display = 'flex';
        previewPhLabel.innerHTML = name;
      }
    });
  });

  // — Hamburger
  var burger = document.getElementById('kdBurger');
  burger.addEventListener('click', function () {
    burger.classList.toggle('open');
    mob.classList.toggle('open');
  });

  // — Mobile accordion: Equipamentos
  var mobEquipBtn = document.getElementById('mobEquipBtn');
  var mobEquipPanel = document.getElementById('mobEquipPanel');
  mobEquipBtn.addEventListener('click', function () {
    mobEquipBtn.classList.toggle('open');
    mobEquipPanel.classList.toggle('open');
  });

  // — Mobile accordion: categorias
  mob.querySelectorAll('.mob-cat-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panelId = btn.getAttribute('data-panel');
      var panel = document.getElementById(panelId);
      var isOpen = btn.classList.contains('open');
      // fecha os outros
      mob.querySelectorAll('.mob-cat-btn').forEach(function (b) { b.classList.remove('open'); });
      mob.querySelectorAll('.mob-prod-panel').forEach(function (p) { p.classList.remove('open'); });
      if (!isOpen) {
        btn.classList.add('open');
        panel.classList.add('open');
      }
    });
  });

  // — Fecha mobile ao clicar em link
  mob.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      burger.classList.remove('open');
      mob.classList.remove('open');
    });
  });

  // — Padding para hero de categoria
  var catHero = document.querySelector('.cat-hero');
  if (catHero) catHero.style.paddingTop = 'calc(72px + 72px)';

})();
