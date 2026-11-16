/* ===== EDITE AQUI: seus produtos =====
   Para usar suas fotos: coloque o arquivo em assets/produtos/ e troque o nome em "foto". */
const WHATSAPP = "https://wa.me/5511985896167"; // troque pelo seu número
const produtos = [
 {nome:"Reconstrutor Acid",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",          precoOriginal:"R$ 170,00", preco:"R$ 140,00", foto:"assets/produtos/prod1black.jpeg"},
 {nome:"Escova Orgânica Matizada",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.", quantidade:"3 unidades", precoOriginal:"R$ 480,00", preco:"R$ 260,00",  foto:"assets/produtos/prod2black.jpeg"},
 {nome:"Kit Pro Cachos",      desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",     precoOriginal:"R$ 195,00", preco:"R$ 139,00",  foto:"assets/produtos/prod3black.jpeg"},
 {nome:"Kit S.O.S Cauterização",          desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",                  precoOriginal:"R$ 310,00", preco:"R$ 229,00",  foto:"assets/produtos/prod4black.jpeg"},
 {nome:"Matizadora Silver",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026", quantidade:"1KG", precoOriginal:"R$ 100,00", preco:"R$ 60,00", quantidadeb:"500g", precoOriginalb:"R$ 60,00", precob:"R$ 40,00", quantidadec:"3 unidades 300g", precoOriginalc:"R$ 120,00", precoc:"R$ 70,00", foto:"assets/produtos/prod5black.jpeg"},
 {nome:"Oxidante",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.", quantidade:"6 Unidades ", precoOriginal:"R$ 270,00", preco:"R$ 180,00", quantidadeb:"12 unidades",precoOriginalb:"R$ 540,00", precob:"R$ 300,00",foto:"assets/produtos/prod6black.jpeg"},
 {nome:"Tonalizante",        desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.",             quantidade:"6 Unidades ", precoOriginal:"R$ 210,00", preco:"R$ 120,00", quantidadeb:"12 unidades",precoOriginalb:"R$ 420,00", precob:"R$ 180,00",  foto:"assets/produtos/prod7black.jpeg"},
 {nome:"Escova Liss perfect Hair",    desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.", quantidade:"3 unidades", precoOriginal:"R$ 480,00", preco:"R$ 300,00", foto:"assets/produtos/prod8black.jpeg"},
 {nome:"Leave-In 300ml",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026", quantidade:"6 Unidades ", precoOriginal:"R$ 210,00", preco:"R$ 150,00", quantidadeb:"12 unidades",precoOriginalb:"R$ 420,00", precob:"R$ 264,00", foto:"assets/produtos/prod9black.jpeg"},
 {nome:"Keratin Gel 500ml",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.",precoOriginal:"R$ 95,00", preco:"R$60,00",  foto:"assets/produtos/prod10black.jpeg"},
 {nome:"Kit Matizador 1L",      desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",     precoOriginal:"R$ 160,00", preco:"R$ 119,00",  foto:"assets/produtos/prod11black.jpeg"},
 {nome:"Kit Escova orgânica Branca",          desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",                  precoOriginal:"R$ 320,00", preco:"R$ 230,00",  foto:"assets/produtos/prod12black.jpeg"},
 {nome:"Plástica dos Fios",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",precoOriginal:"R$ 140,00", preco:"R$ 90,00", foto:"assets/produtos/prod13black.jpeg"},
 {nome:"Shampoo detox",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.",  quantidade:"1L", precoOriginal:"R$ 75,00", preco:"R$ 55,00", quantidadeb:"2,5L", precoOriginalb:"R$ 150,00", precob:"R$ 115,00", quantidadec:"5L", precoOriginalc:"R$ 240,00", precoc:"R$ 190,00" ,foto:"assets/produtos/prod14black.jpeg"},
 {nome:"Leave-in 1L",        desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.",precoOriginal:"R$ 100,00", preco:"R$ 60,00", foto:"assets/produtos/prod15black.jpeg"},
 /* ===================================== */ 
 {nome:"Botox Orgânico Blond",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026", quantidade:"2 unidades", precoOriginal:"R$ 140,00", preco:"R$ 95,00", foto:"assets/produtos/prod16black.jpeg"},
 {nome:"Ampola smart Chantilly",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.", quantidade:"18 unidades", precoOriginal:"R$ 150,00", preco:"R$ 100,00",  foto:"assets/produtos/prod17black.jpeg"},
 {nome:"Keratin Liquida 500ml",      desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",     precoOriginal:"R$ 95,00", preco:"R$ 60,00",  foto:"assets/produtos/prod18black.jpeg"},
 {nome:"Kit S.O.S Cauterização",          desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",                  precoOriginal:"R$ 310,00", preco:"R$ 229,00",  foto:"assets/produtos/prod4black.jpeg"},
 {nome:"Matizadora Silver",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026", quantidade:"1KG", precoOriginal:"R$ 100,00", preco:"R$ 60,00", quantidadeb:"500g", precoOriginalb:"R$ 60,00", precob:"R$ 40,00", quantidadec:"3 unidades 300g", precoOriginalc:"R$ 120,00", precoc:"R$ 70,00", foto:"assets/produtos/prod5black.jpeg"},
 {nome:"Oxidante",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.", quantidade:"6 Unidades ", precoOriginal:"R$ 270,00", preco:"R$ 180,00", quantidadeb:"12 unidades",precoOriginalb:"R$ 540,00", precob:"R$ 300,00",foto:"assets/produtos/prod6black.jpeg"},
 {nome:"Tonalizante",        desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.",             quantidade:"6 Unidades ", precoOriginal:"R$ 210,00", preco:"R$ 120,00", quantidadeb:"12 unidades",precoOriginalb:"R$ 420,00", precob:"R$ 180,00",  foto:"assets/produtos/prod7black.jpeg"},
 {nome:"Escova Liss perfect Hair",    desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.", quantidade:"3 unidades", precoOriginal:"R$ 480,00", preco:"R$ 300,00", foto:"assets/produtos/prod8black.jpeg"},
 {nome:"Leave-In 300ml",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026", quantidade:"6 Unidades ", precoOriginal:"R$ 210,00", preco:"R$ 150,00", quantidadeb:"12 unidades",precoOriginalb:"R$ 420,00", precob:"R$ 264,00", foto:"assets/produtos/prod9black.jpeg"},
 {nome:"Keratin Gel 500ml",     desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.",precoOriginal:"R$ 95,00", preco:"R$60,00",  foto:"assets/produtos/prod10black.jpeg"},
 {nome:"Kit Matizador 1L",      desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",     precoOriginal:"R$ 160,00", preco:"R$ 119,00",  foto:"assets/produtos/prod11black.jpeg"},
 {nome:"Kit Escova orgânica Branca",          desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",                  precoOriginal:"R$ 320,00", preco:"R$ 230,00",  foto:"assets/produtos/prod12black.jpeg"},
 {nome:"Plástica dos Fios",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026",precoOriginal:"R$ 140,00", preco:"R$ 90,00", foto:"assets/produtos/prod13black.jpeg"},
 {nome:"Shampoo detox",         desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.",  quantidade:"1L", precoOriginal:"R$ 75,00", preco:"R$ 55,00", quantidadeb:"2,5L", precoOriginalb:"R$ 150,00", precob:"R$ 115,00", quantidadec:"5L", precoOriginalc:"R$ 240,00", precoc:"R$ 190,00" ,foto:"assets/produtos/prod14black.jpeg"},
 {nome:"Leave-in 1L",        desc:"Promoção válida para pagamento pix,dinheiro ou cartão. 17/11/2026 até 20/11/2026.",precoOriginal:"R$ 100,00", preco:"R$ 60,00", foto:"assets/produtos/prod15black.jpeg"},
];
/* ===================================== */

const opcoesPreco=p=>
  [ [p.quantidade,p.precoOriginal,p.preco], [p.quantidadeb,p.precoOriginalb,p.precob], [p.quantidadec,p.precoOriginalc,p.precoc] ]
    .filter(([,original,preco])=>original||preco)
    .map(([quantidade,original,preco])=>`<div class="opcao-preco"><span>${quantidade||""}</span><div>${original?`<del>${original}</del>`:""}<b>${preco||""}</b></div></div>`)
    .join("");

const prod=(p,n,lado)=>`<div class="pg"><div class="foto"><img src="${p.foto}" alt="${p.nome}"></div>
 <div class="info"><h3>${p.nome}</h3><p>${p.desc}</p>${p.precoOriginalb||p.precoOriginalc?`<div class="precos-opcoes">${opcoesPreco(p)}</div>`:`${p.quantidade?`<span class="quantidade">${p.quantidade}</span>`:""}<div class="preco">${p.precoOriginal?`<del>${p.precoOriginal}</del>`:""}<b>${p.preco}</b></div>`}</div><span class="num">${n}</span></div>`;

const capa=`<div class="capa"><i></i><img src="assets/logo.png" alt="7bios Beauty"><p>CATÁLOGO 2026</p></div>`;
const boasVindas=`<div class="texto marca"><img src="assets/logo.png" alt="Logo 7Bios"><h2>7Bios</h2><p>Uma empresa comprometida<br>com sua beleza e autoestima.</p><strong>Beleza com paixão!</strong></div>`;
const contato=`<div class="texto"><h2>Fale com a gente</h2><p>Faça seu pedido pelo WhatsApp<br>e receba em casa.</p><a href="${WHATSAPP}" target="_blank" rel="noopener">Pedir pelo WhatsApp</a></div>`;
const contracapa=`<div class="texto"><img src="assets/logo.png" alt="7bios Beauty"><p>Obrigada pela visita.</p></div>`;

const folhas=[[capa,boasVindas]];
for(let i=0;i<produtos.length;i+=2)
  folhas.push([prod(produtos[i],i+3),produtos[i+1]?prod(produtos[i+1],i+4):""]);
folhas.push([contato,contracapa]);
folhas[0][0]=capa;

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
const mq=matchMedia('(orientation:portrait)');
const mobile=()=>mq.matches; // celular/tablet em pé: mostra 1 página grande por vez

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
  const p=document.getElementById('pos');
  p.textContent=atual===0&&lado===0?'Capa':atual===N?'Contracapa':mobile()?`Página ${lado?2*atual:2*atual+1}`:`Páginas ${atual*2}–${atual*2+1}`;
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
mq.addEventListener('change',render);
document.getElementById('next').onclick=avancar;
document.getElementById('prev').onclick=voltar;
document.getElementById('mute').onclick=e=>{mudo=!mudo;e.target.textContent=mudo?'🔇':'🔊';};
addEventListener('keydown',e=>{if(e.key==='ArrowRight')avancar();if(e.key==='ArrowLeft')voltar();});
let x0=null;
addEventListener('touchstart',e=>x0=e.touches[0].clientX,{passive:true});
addEventListener('touchend',e=>{if(x0===null)return;const d=e.changedTouches[0].clientX-x0;if(Math.abs(d)>50)d<0?avancar():voltar();x0=null;});
render();
