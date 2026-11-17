/* ===== EDITE AQUI: seus produtos =====
   Para usar suas fotos: coloque o arquivo em assets/produtos/ e troque o nome em "foto". */
const WHATSAPP = "https://wa.me/5511985896167"; // troque pelo seu número
const produtos = [
 {nome:"Kit Escova orgânica Branca",          desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",                  precoOriginal:"R$ 320,00", preco:"R$ 230,00",  foto:"assets/produtos/prod12black.jpeg"},
 {nome:"Escova orgânica Branca",          desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",quantidade:"3 Unidades", precoOriginal:"R$ 480,00", preco:"R$ 310,00",  foto:"assets/produtos/prod27black.jpg"},
 {nome:"Kit Escova Orgânica Matizada",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",precoOriginal:"R$ 310,00", preco:"R$ 230,00", foto:"assets/produtos/prod29black.jpeg"},
 {nome:"Escova Orgânica Matizada",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.", quantidade:"3 unidades", precoOriginal:"R$ 480,00", preco:"R$ 260,00",  foto:"assets/produtos/prod2black.jpg"},
 {nome:"Kit Escova Liss perfect Hair",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.",  precoOriginal:"R$ 310,00", preco:"R$ 230,00" ,foto:"assets/produtos/prod28black.jpeg"},
 {nome:"Escova Liss perfect Hair",    desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.", quantidade:"3 unidades", precoOriginal:"R$ 480,00", preco:"R$ 300,00", foto:"assets/produtos/prod8black.jpg"},
 {nome:"Kit Reconstrutor Acid",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",          precoOriginal:"R$ 170,00", preco:"R$ 140,00", foto:"assets/produtos/prod1black.jpeg"},
 {nome:"Kit Acid + Leave 1L",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026", precoOriginal:"R$ 290,00", preco:"R$ 199,00", foto:"assets/produtos/prod20black.jpg"},
 {nome:"Kit S.O.S Cauterização",          desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",                  precoOriginal:"R$ 310,00", preco:"R$ 229,00",  foto:"assets/produtos/prod4black.jpeg"},
 {nome:"Keratin Liquida 500ml",      desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",     precoOriginal:"R$ 95,00", preco:"R$ 60,00",  foto:"assets/produtos/prod18black.jpeg"},
 {nome:"Keratin Gel 500ml",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.",precoOriginal:"R$ 95,00", preco:"R$60,00",  foto:"assets/produtos/prod10black.jpeg"},
 {nome:"Oxidante",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.", quantidade:"6 Unidades ", precoOriginal:"R$ 270,00", preco:"R$ 180,00", quantidadeb:"12 unidades",precoOriginalb:"R$ 540,00", precob:"R$ 300,00",foto:"assets/produtos/prod6black.jpeg"},
 {nome:"Kit Colágeno 1L Completo",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.", precoOriginal:"R$ 135,00", preco:"R$ 119,00",foto:"assets/produtos/prod21black.jpeg"},
  {nome:"Kit 2.5L Colágeno",      desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",     precoOriginal:"R$ 210,00", preco:"R$ 169,00",  foto:"assets/produtos/prod26black.jpeg"},
 {nome:"Kit Pro Cachos 1L",      desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",     precoOriginal:"R$ 195,00", preco:"R$ 139,00",  foto:"assets/produtos/prod3black.jpeg"},
 {nome:"Kit Matizador 1L",      desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",     precoOriginal:"R$ 160,00", preco:"R$ 119,00",  foto:"assets/produtos/prod11black.jpeg"},
 {nome:"Matizadora Silver",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026", quantidade:"1KG", precoOriginal:"R$ 100,00", preco:"R$ 60,00", quantidadeb:"500g", precoOriginalb:"R$ 60,00", precob:"R$ 40,00", quantidadec:"3 unidades 300g", precoOriginalc:"R$ 120,00", precoc:"R$ 70,00", foto:"assets/produtos/prod5black.jpeg"},
 {nome:"Tonalizante",        desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.",             quantidade:"6 Unidades ", precoOriginal:"R$ 210,00", preco:"R$ 120,00", quantidadeb:"12 unidades",precoOriginalb:"R$ 420,00", precob:"R$ 180,00",  foto:"assets/produtos/prod7black.jpeg"},
 {nome:"Leave-in 1L",        desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.",precoOriginal:"R$ 100,00", preco:"R$ 60,00", foto:"assets/produtos/prod15black.jpeg"},
 {nome:"Leave-In 300ml",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026", quantidade:"6 Unidades ", precoOriginal:"R$ 210,00", preco:"R$ 150,00", quantidadeb:"12 unidades",precoOriginalb:"R$ 420,00", precob:"R$ 264,00", foto:"assets/produtos/prod9black.jpeg"},
 {nome:"Plástica dos Fios",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",precoOriginal:"R$ 140,00", preco:"R$ 90,00", foto:"assets/produtos/prod13black.jpeg"},
 /* ===================================== */ 
 {nome:"Botox Orgânico Blond",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026", quantidade:"2 unidades", precoOriginal:"R$ 140,00", preco:"R$ 95,00", foto:"assets/produtos/prod16black.jpeg"},
 {nome:"Collapse Hair 1kg",    desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.", precoOriginal:"R$ 80,00", preco:"R$ 60,00", foto:"assets/produtos/prod23black.jpeg"},
 {nome:"Máscara Colágeno 1KG",        desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.", precoOriginal:"R$ 65,00", preco:"R$ 50,00",  foto:"assets/produtos/prod22black.jpeg"},
 {nome:"Máscara Powerfull 2Kg",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",  precoOriginal:"R$ 100,00", preco:"R$ 80,00", foto:"assets/produtos/prod24black.jpeg"},
 {nome:"Máscara Colágeno 500gr",          desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026", quantidade:"6 unidades", precoOriginal:"R$ 210,00", preco:"R$ 120,00",  foto:"assets/produtos/prod19black.jpeg"},
 {nome:"Ampola smart Chantilly",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.", quantidade:"18 unidades", precoOriginal:"R$ 150,00", preco:"R$ 100,00",  foto:"assets/produtos/prod17black.jpeg"},
 {nome:"Algaline Fix cor 15ml",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.",quantidade:"18 unidades", precoOriginal:"R$ 150,00", preco:"R$ 100,00",  foto:"assets/produtos/prod25black.jpeg"},
 {nome:"Shampoo detox",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.",  quantidade:"1L", precoOriginal:"R$ 75,00", preco:"R$ 55,00", quantidadeb:"2,5L", precoOriginalb:"R$ 150,00", precob:"R$ 115,00", quantidadec:"5L", precoOriginalc:"R$ 240,00", precoc:"R$ 190,00" ,foto:"assets/produtos/prod14black.jpeg"},
];
/* ===================================== */

const opcoesPreco=p=>
  [ [p.quantidade,p.precoOriginal,p.preco], [p.quantidadeb,p.precoOriginalb,p.precob], [p.quantidadec,p.precoOriginalc,p.precoc] ]
    .filter(([,original,preco])=>original||preco)
    .map(([quantidade,original,preco])=>`<div class="opcao-preco"><span>${quantidade||""}</span><div>${original?`<del>${original}</del>`:""}<b>${preco||""}</b></div></div>`)
    .join("");

const prod=(p,n,lado)=>`<div class="pg"><div class="foto"><img data-src="${p.foto}" loading="lazy" decoding="async" alt="${p.nome}"></div>
 <div class="info"><h3>${p.nome}</h3><p>${p.desc}</p>${p.precoOriginalb||p.precoOriginalc?`<div class="precos-opcoes">${opcoesPreco(p)}</div>`:`${p.quantidade?`<span class="quantidade">${p.quantidade}</span>`:""}<div class="preco">${p.precoOriginal?`<del>${p.precoOriginal}</del>`:""}<b>${p.preco}</b></div>`}</div><span class="num">${n}</span></div>`;

const capa=`<div class="capa"><i></i><div class="capa-oferta"><span>BLACK</span><strong>FRIDAY</strong></div><img src="assets/logo.png" fetchpriority="high" decoding="async" alt="7bios Beauty"><p>CATÁLOGO ESPECIAL • 2026</p></div>`;
const boasVindas=`<div class="texto marca"><img src="assets/logo.png" alt="Logo 7Bios"><p>Uma empresa comprometida<br>com sua beleza e autoestima.</p><strong>Beleza com paixão!</strong></div>`;
const redesSociais=`<div class="texto redes"><h2>Nos siga nas redes sociais</h2><div class="redes-lista">
 <a class="rede" href="https://www.instagram.com/7biosebeauty/" target="_blank" rel="noopener">
  <span class="rede-icone" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle class="icone-ponto" cx="18" cy="6" r="1"></circle></svg></span>
  <span class="rede-nome"><small>Instagram</small><strong>@7biosebeauty</strong></span><span class="rede-seta" aria-hidden="true">↗</span>
 </a>
 <a class="rede" href="https://www.tiktok.com/@7biosebeauty" target="_blank" rel="noopener">
  <span class="rede-icone" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M14 3v11.2a4.2 4.2 0 1 1-3.2-4.08"></path><path d="M14 3c.4 3 2.3 4.8 5 5"></path></svg></span>
  <span class="rede-nome"><small>TikTok</small><strong>7biosebeauty</strong></span><span class="rede-seta" aria-hidden="true">↗</span>
 </a>
 <a class="rede" href="https://www.youtube.com/results?search_query=7+Bios+Beauty" target="_blank" rel="noopener">
  <span class="rede-icone" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="2.5" y="5" width="19" height="14" rx="4"></rect><path class="icone-play" d="m10 9 5 3-5 3z"></path></svg></span>
  <span class="rede-nome"><small>YouTube</small><strong>7 Bios</strong></span><span class="rede-seta" aria-hidden="true">↗</span>
 </a>
 </div></div>`;
const contato=`<div class="texto"><h2>Fale com a gente</h2><p>Faça seu pedido pelo WhatsApp ou Instagram<br>e receba no local indicado por você<br>não cobramos taxa de entrega</p></div>`;
const contracapa=`<div class="texto"><img src="assets/logo.png" alt="7bios Beauty"><p>Obrigada pela visita.</p></div>`;

const folhas=[[capa,boasVindas]];
for(let i=0;i<produtos.length;i+=2)
  folhas.push([prod(produtos[i],i+3),produtos[i+1]?prod(produtos[i+1],i+4):redesSociais]);
folhas.push([contato,contracapa]);
folhas[0][0]=capa;

const indiceList=document.getElementById('indice-list');
produtos.forEach((produto,i)=>{
  const item=document.createElement('button');
  item.type='button';
  item.className='indice-item';
  item.textContent=produto.nome;
  item.addEventListener('click',()=>irParaProduto(i));
  indiceList.appendChild(item);
});

const book=document.getElementById('book'),N=folhas.length;
const leaves=folhas.map(([f,b],i)=>{
  const el=document.createElement('div');el.className='leaf';
  el.innerHTML=`<div class="face front">${f}</div><div class="face back">${b}</div>`;
  el.addEventListener('click',e=>{
    if(e.target.closest('a'))return;
    if(mobile())return e.clientX<innerWidth/2?voltar():avancar();
    el.classList.contains('flipped')?voltar():avancar();
  });
  book.appendChild(el);return el;
});
let atual=0,lado=0,ocupado=false,mudo=false,ac; // lado: 0 = vendo a frente (direita) | 1 = vendo o verso (esquerda)
const imagensEmPreload=new Set();
const mq=matchMedia('(orientation:portrait)');
const mobile=()=>mq.matches; // celular/tablet em pé: mostra 1 página grande por vez
const indice=document.getElementById('indice');
const indiceOpen=document.getElementById('indice-open');
const indiceClose=document.getElementById('indice-close');
const indiceBackdrop=document.getElementById('indice-backdrop');
const indiceEstaAberto=()=>document.body.classList.contains('indice-aberto');

function fecharIndice(){
  document.body.classList.remove('indice-aberto');
  indice.setAttribute('aria-hidden','true');
  indiceOpen.setAttribute('aria-expanded','false');
  indiceOpen.focus();
}

function abrirIndice(){
  if(!mobile())return;
  document.body.classList.add('indice-aberto');
  indice.setAttribute('aria-hidden','false');
  indiceOpen.setAttribute('aria-expanded','true');
  indiceClose.focus();
}

function irParaProduto(i){
  fecharIndice();
  const folha=1+Math.floor(i/2);
  const verso=i%2===1;
  const stage=document.getElementById('stage');
  stage.classList.add('saltando');
  void book.offsetWidth;
  atual=folha+(verso?1:0);
  lado=verso?1:0;
  render();
  requestAnimationFrame(()=>stage.classList.remove('saltando'));
}

indiceOpen.addEventListener('click',abrirIndice);
indiceClose.addEventListener('click',fecharIndice);
indiceBackdrop.addEventListener('click',fecharIndice);

function som(){
  if(mudo)return;
  try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();
  const d=.6,n=ac.sampleRate*d,buf=ac.createBuffer(1,n,ac.sampleRate),x=buf.getChannelData(0);
  for(let i=0;i<n;i++){const t=i/n;x[i]=(Math.random()*2-1)*Math.pow(Math.sin(Math.PI*t),1.6)*(.5+.5*Math.random());}
  const s=ac.createBufferSource();s.buffer=buf;
  const f=ac.createBiquadFilter();f.type='bandpass';f.Q.value=.6;
  f.frequency.setValueAtTime(900,ac.currentTime);f.frequency.linearRampToValueAtTime(4500,ac.currentTime+d);
  const g=ac.createGain();g.gain.value=.55;s.connect(f).connect(g).connect(ac.destination);s.start();}catch(e){}
}
function render(){
  leaves.forEach((l,i)=>{l.classList.toggle('flipped',i<atual);if(!l.classList.contains('flipping'))l.style.zIndex=i<atual?i:N-i;});
  if(atual===0)lado=0;if(atual===N)lado=1;
  book.className=(atual===0?'':atual===N?'fim':'aberto')+(lado?' vL':' vR');
  carregarImagensVisiveis();
  precargarProximasImagens();
  const p=document.getElementById('pos');
  p.textContent=atual===0&&lado===0?'Capa':atual===N?'Contracapa':mobile()?`Página ${lado?2*atual:2*atual+1}`:`Páginas ${atual*2}–${atual*2+1}`;
}
function carregarImagemDaFace(indice,face){
  if(indice<0||indice>=leaves.length)return;
  leaves[indice].querySelectorAll(`.face.${face} img[data-src]`).forEach(img=>{
    img.loading='eager';
    img.src=img.dataset.src;
    img.removeAttribute('data-src');
  });
}
function carregarImagensVisiveis(){
  if(mobile()){
    carregarImagemDaFace(lado?atual-1:atual,lado?'back':'front');
    return;
  }
  carregarImagemDaFace(atual-1,'back');
  carregarImagemDaFace(atual,'front');
}
function precargarImagemDaFace(indice,face){
  if(indice<0||indice>=leaves.length)return;
  leaves[indice].querySelectorAll(`.face.${face} img[data-src]`).forEach(img=>{
    const src=img.dataset.src;
    if(imagensEmPreload.has(src))return;
    imagensEmPreload.add(src);
    const imagem=new Image();
    imagem.decoding='async';
    imagem.fetchPriority='low';
    imagem.src=src;
  });
}
function precargarProximasImagens(){
  if(mobile()){
    if(lado===0)precargarImagemDaFace(atual,'back');
    else if(atual<N)precargarImagemDaFace(atual,'front');
    return;
  }
  if(atual<N){
    precargarImagemDaFace(atual,'back');
    precargarImagemDaFace(atual+1,'front');
  }
}
function virar(i,dir){
  if(ocupado)return;ocupado=true;som();
  const l=leaves[i];l.style.zIndex=N+1;l.classList.add('flipping');
  atual+=dir;render();
  setTimeout(()=>{l.classList.remove('flipping');l.style.zIndex=i<atual?i:N-i;ocupado=false;},1100);
}
function avancar(){
  if(ocupado)return;
  if(atual===N){atual=0;lado=0;som();render();return;}
  if(mobile()){
    if(lado===0){if(atual<N){lado=1;virar(atual,1);}}   // vira a folha e mostra o verso
    else if(atual<N){lado=0;render();}                  // desliza para a frente da próxima folha
  }else if(atual<N)virar(atual,1);
}
function voltar(){
  if(ocupado)return;
  if(mobile()){
    if(lado===1){if(atual>0){lado=0;virar(atual-1,-1);}}
    else if(atual>0){lado=1;render();}
  }else if(atual>0)virar(atual-1,-1);
}
mq.addEventListener('change',()=>{
  if(!mobile()&&indiceEstaAberto())fecharIndice();
  render();
});
document.getElementById('next').onclick=avancar;
document.getElementById('prev').onclick=voltar;
document.getElementById('mute').onclick=e=>{mudo=!mudo;e.target.textContent=mudo?'🔇':'🔊';};
const fullscreenButton=document.getElementById('fullscreen');
const fullscreenStatus=document.getElementById('fullscreen-status');
let fullscreenStatusTimer;
function avisarTelaCheia(mensagem){
  fullscreenStatus.textContent=mensagem;
  fullscreenStatus.classList.add('visivel');
  clearTimeout(fullscreenStatusTimer);
  fullscreenStatusTimer=setTimeout(()=>fullscreenStatus.classList.remove('visivel'),4000);
}
function atualizarBotaoTelaCheia(){
  const ativa=Boolean(document.fullscreenElement);
  fullscreenButton.setAttribute('aria-label',ativa?'Sair da tela cheia':'Ativar tela cheia');
  fullscreenButton.title=ativa?'Sair da tela cheia':'Ativar tela cheia';
}
fullscreenButton.addEventListener('click',async()=>{
  if(!document.fullscreenEnabled||typeof document.documentElement.requestFullscreen!=='function'){
    avisarTelaCheia('Tela cheia não está disponível neste navegador.');
    return;
  }
  try{
    if(document.fullscreenElement)await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
    atualizarBotaoTelaCheia();
  }catch(error){
    console.error('Não foi possível alternar para a tela cheia.',error);
    avisarTelaCheia('Não foi possível ativar a tela cheia. Verifique as permissões do navegador.');
  }
});
document.addEventListener('fullscreenchange',atualizarBotaoTelaCheia);
addEventListener('keydown',e=>{
  if(e.key==='Escape'&&indiceEstaAberto()){fecharIndice();return;}
  if(indiceEstaAberto())return;
  if(e.key==='ArrowRight')avancar();
  if(e.key==='ArrowLeft')voltar();
});
let x0=null;
addEventListener('touchstart',e=>x0=indiceEstaAberto()?null:e.touches[0].clientX,{passive:true});
addEventListener('touchend',e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50)d<0?avancar():voltar();x0=null;});
render();
