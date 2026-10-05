const menu = document.querySelector('.menu-button');
const nav = document.querySelector('#primary-nav');
function closeMenu(){nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false');}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
// Sites review pages use the existing live contact service. Netlify retains
// native form handling and redirects to the local acknowledgement page.
const form = document.querySelector('.contact-form');
const reviewContact = document.querySelector('.preview-contact');
const isReview = ['localhost','127.0.0.1'].includes(location.hostname) || location.hostname.endsWith('.chatgpt.site');
if(form && isReview){form.hidden=true;if(reviewContact)reviewContact.hidden=false;}
else if(form){form.action='/thanks/';}

if(location.pathname==='/' && location.hash==='#about'){location.replace('/about/');}
