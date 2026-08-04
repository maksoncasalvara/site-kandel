(function () {
  var style = document.createElement('style');
  style.textContent = [
    '.kd-prefooter{padding:80px 28px;background:linear-gradient(135deg,#0c1e2c 0%,#0f2538 50%,#1a3347 100%);position:relative;overflow:hidden}',
    '.kd-prefooter::before{content:"";position:absolute;bottom:-80px;left:50%;transform:translateX(-50%);width:600px;height:200px;background:radial-gradient(ellipse,rgba(212,79,76,0.18) 0%,transparent 70%);pointer-events:none}',
    '.kd-prefooter-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:40px;position:relative;z-index:1}',
    '.kd-prefooter-text h2{font-size:clamp(24px,3.5vw,42px);font-weight:700;letter-spacing:-0.03em;line-height:1.1;margin-bottom:10px;color:#fff}',
    '.kd-prefooter-text p{font-size:16px;font-weight:300;color:rgba(255,255,255,0.50);max-width:400px}',
    '.kd-prefooter-actions{display:flex;gap:12px;flex-wrap:wrap;flex-shrink:0}',
    '.kd-footer{background:#0c1e2c;padding:72px 28px 36px;border-top:1px solid rgba(255,255,255,0.07);font-family:\'Outfit\',system-ui,-apple-system,sans-serif}',
    '.kd-footer-inner{max-width:1200px;margin:0 auto}',
    '.kd-footer-top{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;padding-bottom:52px;border-bottom:1px solid rgba(255,255,255,0.07)}',
    '.kd-footer-brand .kd-brand-name{font-size:22px;font-weight:700;letter-spacing:-0.02em;color:#fff;margin-bottom:16px}',
    '.kd-footer-brand .kd-brand-name span{color:#d44f4c}',
    '.kd-footer-brand p{font-size:14px;font-weight:300;line-height:1.7;color:rgba(255,255,255,0.40);max-width:280px;margin-bottom:28px}',
    '.kd-social-links{display:flex;gap:10px}',
    '.kd-social-link{width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,0.07);display:flex;align-items:center;justify-content:center;text-decoration:none;color:rgba(255,255,255,0.5);transition:background 0.2s,color 0.2s}',
    '.kd-social-link:hover{background:rgba(255,255,255,0.12);color:#fff}',
    '.kd-footer-col h4{font-size:12px;font-weight:700;letter-spacing:0.09em;text-transform:uppercase;color:rgba(255,255,255,0.35);margin-bottom:20px}',
    '.kd-footer-col ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:12px}',
    '.kd-footer-col ul li a{font-size:14px;color:rgba(255,255,255,0.65);text-decoration:none;transition:color 0.2s}',
    '.kd-footer-col ul li a:hover{color:#fff}',
    '.kd-footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:16px;padding-top:32px;flex-wrap:wrap}',
    '.kd-footer-bottom p{font-size:13px;color:rgba(255,255,255,0.28)}',
    '.kd-footer-bottom-links{display:flex;gap:24px}',
    '.kd-footer-bottom-links a{font-size:13px;color:rgba(255,255,255,0.28);text-decoration:none;transition:color 0.2s}',
    '.kd-footer-bottom-links a:hover{color:rgba(255,255,255,0.65)}',
    '.kd-prefooter-actions .btn{display:inline-flex;align-items:center;gap:7px;padding:14px 28px;border-radius:980px;font-family:\'Outfit\',system-ui,-apple-system,sans-serif;font-size:15px;font-weight:600;cursor:pointer;text-decoration:none;transition:background 0.22s,color 0.22s,border-color 0.22s}',
    '.kd-prefooter-actions .btn-red{background:#d44f4c;color:#fff;border:1.5px solid #d44f4c}',
    '.kd-prefooter-actions .btn-red:hover{background:#b8413f;border-color:#b8413f}',
    '.kd-prefooter-actions .btn-outline{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,0.30)}',
    '.kd-prefooter-actions .btn-outline:hover{border-color:#fff}',
    '@media(max-width:1024px){.kd-footer-top{grid-template-columns:1fr 1fr 1fr}.kd-footer-brand{grid-column:span 3}}',
    '@media(max-width:768px){.kd-prefooter-inner{flex-direction:column;align-items:flex-start}.kd-footer-top{grid-template-columns:1fr 1fr}.kd-footer-brand{grid-column:span 2}}',
    '@media(max-width:480px){.kd-footer-top{grid-template-columns:1fr}.kd-footer-brand{grid-column:span 1}.kd-footer-bottom{flex-direction:column;align-items:flex-start}.kd-prefooter{padding:56px 20px}.kd-footer{padding:56px 20px 32px}}'
  ].join('');
  document.head.appendChild(style);

  var wrap = document.createElement('div');
  wrap.innerHTML = '<div class="kd-prefooter">' +
    '<div class="kd-prefooter-inner">' +
      '<div class="kd-prefooter-text">' +
        '<h2>Pronto para transformar<br>sua prática clínica?</h2>' +
        '<p>Fale com nossos especialistas e descubra a solução ideal para a sua necessidade.</p>' +
      '</div>' +
      '<div class="kd-prefooter-actions">' +
        '<a href="https://www.kandel.com.br/fale-conosco" class="btn btn-red">Solicitar demonstração <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>' +
        '<a href="https://www.kandel.com.br/equipamentos/Eletroneuromiografia-e-Potenciais-Evocados" class="btn btn-outline">Ver equipamentos</a>' +
      '</div>' +
    '</div>' +
  '</div>' +
  '<footer class="kd-footer">' +
    '<div class="kd-footer-inner">' +
      '<div class="kd-footer-top">' +
        '<div class="kd-footer-brand">' +
          '<div class="kd-brand-name">Kandel<span>.</span></div>' +
          '<p>Equipamentos e suprimentos médicos de excelência para neurologia, audiologia e diagnóstico. Distribuindo inovação ao Brasil há mais de 20 anos.</p>' +
          '<div class="kd-social-links">' +
            '<a href="https://www.instagram.com/kandel.medical/" class="kd-social-link" aria-label="Instagram" target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>' +
            '<a href="https://www.facebook.com/kandelmedical" class="kd-social-link" aria-label="Facebook" target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>' +
            '<a href="https://www.youtube.com/@kandelmedical" class="kd-social-link" aria-label="YouTube" target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/></svg></a>' +
            '<a href="https://www.linkedin.com/company/kandel-medical" class="kd-social-link" aria-label="LinkedIn" target="_blank" rel="noopener"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>' +
          '</div>' +
        '</div>' +
        '<div class="kd-footer-col">' +
          '<h4>Especialidades</h4>' +
          '<ul>' +
            '<li><a href="https://www.kandel.com.br/equipamentos/Eletroneuromiografia-e-Potenciais-Evocados">ENMG</a></li>' +
            '<li><a href="https://www.kandel.com.br/equipamentos/Monitorizacao-Intraoperatoria">Monit. Intraoperatória</a></li>' +
            '<li><a href="https://www.kandel.com.br/equipamentos/Estimulacao-Magnetica">Estimulação Magnética</a></li>' +
            '<li><a href="https://www.kandel.com.br/equipamentos/Eletroencefalografia-e-Potenciais-Evocados">Eletroencefalografia</a></li>' +
            '<li><a href="https://www.kandel.com.br/eletrodos-audiologia">Audiologia</a></li>' +
            '<li><a href="https://www.kandel.com.br/equipamentos/Eletrorretinografia">Eletrorretinografia</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="kd-footer-col">' +
          '<h4>Empresa</h4>' +
          '<ul>' +
            '<li><a href="https://www.kandel.com.br/nossa-historia">Nossa História</a></li>' +
            '<li><a href="https://www.kandel.com.br/cursos-e-eventos">Cursos & Eventos</a></li>' +
            '<li><a href="https://www.kandel.com.br/blog">Kandel Academy</a></li>' +
            '<li><a href="https://www.kandel.com.br/fale-conosco">Fale Conosco</a></li>' +
            '<li><a href="https://www.kandel.com.br/trabalhe-conosco">Trabalhe Conosco</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="kd-footer-col">' +
          '<h4>Contato</h4>' +
          '<ul>' +
            '<li><a href="tel:+551150540070">(11) 5054-0070</a></li>' +
            '<li><a href="mailto:contato@kandel.com.br">contato@kandel.com.br</a></li>' +
            '<li><a href="https://maps.google.com/?q=Av.+Dr.+Chucri+Zaidan,+940,+São+Paulo" target="_blank" rel="noopener">Av. Dr. Chucri Zaidan, 940<br>São Paulo — SP</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="kd-footer-bottom">' +
        '<p>© 2024 Kandel Medical. Todos os direitos reservados.</p>' +
        '<div class="kd-footer-bottom-links">' +
          '<a href="https://www.kandel.com.br/politica-de-privacidade">Privacidade</a>' +
          '<a href="https://www.kandel.com.br/termos-de-uso">Termos de Uso</a>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</footer>';

  while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
})();
