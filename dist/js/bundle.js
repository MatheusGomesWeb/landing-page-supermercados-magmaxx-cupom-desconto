!function(){"use strict";class e{constructor(e,t,s){this.container=document.querySelector(e),this.modal=document.querySelector(t),this.closeBtn=document.querySelector(s),this.closeModal=this.closeModal.bind(this),this.outsideCloseModal=this.outsideCloseModal.bind(this)}messageModal({type:e,typeTitle:t,typeMessage:s,message:i}){function o(e,t){document.querySelector(".c-modal__title").classList.add(e),i.forEach((e=>{e&&(document.querySelector(".c-modal__list").innerHTML+=`\n          <li class="c-modal__list__item ${t}">${e}</li>    \n        `)}))}this.modal.querySelector(".c-modal__title__type").innerHTML=t,this.modal.querySelector(".c-modal__title__message").innerHTML=s,0===e?(o("c-modal__title--erro",""),document.querySelector(".c-modal__title").classList.remove("c-modal__title--sucesso"),document.querySelector(".c-modal__title").classList.remove("c-modal__title--loading")):1===e?(o("c-modal__title--sucesso","c-modal__item--sucesso"),document.querySelector(".c-modal__title").classList.remove("c-modal__title--erro"),document.querySelector(".c-modal__title").classList.remove("c-modal__title--loading")):2===e&&(o("c-modal__title--loading","c-modal__item--loading"),document.querySelector(".c-modal__title").classList.remove("c-modal__title--erro"),document.querySelector(".c-modal__title").classList.remove("c-modal__title--sucesso"))}clearModalMessage(e){this.modal.querySelector(e).innerHTML=""}openModal(){"false"===this.container.dataset.activeModal&&(this.container.dataset.activeModal="true")}closeModal(){this.container.dataset.activeModal&&(this.container.dataset.activeModal=!1,this.container.removeEventListener("click",this.outsideCloseModal),this.clearModalMessage(".c-modal__list"))}outsideCloseModal({target:e}){e.dataset.activeModal&&this.closeModal()}addEvents(){this.closeBtn.addEventListener("click",this.closeModal),this.container.addEventListener("click",this.outsideCloseModal)}start(){this.container&&this.modal&&this.closeBtn&&(this.addEvents(),this.openModal())}}const t={dtNascimento:{regex:/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/,message:"Data de Nascimento inválida"},rg:{regex:/(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)/,message:"RG inválido"},cpf:{regex:/(?:\d{3}[-.]?){3}\d{2}/g,message:"CPF inválido"},cep:{regex:/[0-9]{5}-[0-9]{3}/,message:"Informe um cep válido"},numero:{regex:/^\d+$/,message:"Utilize apenas números"},celular:{regex:/(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g,message:"Celular inválido"},telefone:{regex:/(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g,message:"Telefone inválido"},email:{regex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Preencha um email válido"}};function s(e,s){let i="";return function(s){!1===e&&!1===s||(i=0===s.length?`Preencha um valor no campo: <strong class="c-modal__list__campo">${e}</strong>`:t[e]&&!t[e].regex.test(s)?`${t[e].message}: <strong style="margin-left: .3rem;">${e}</strong>`:"")}(s),{mensagem:i}}class i{constructor(e,t){this.type=e,this.input=t,this.frontController=this.frontController.bind(this),this.rg=this.rg.bind(this)}dtNascimento(){const e=this.input.value.replace(/[^\d]/g,""),t=(new Date).getFullYear(),s=(e.slice(0,2)<=31?e.slice(0,2):"**")+"/"+(e.slice(2,4)<=12?e.slice(2,4):"**")+"/"+(e.slice(4,8)>=t?"****":e.slice(4,8));10===s.length&&(this.input.value=s)}rg(){const e=this.input.value.replace(/[^\d]/g,""),t=e.slice(0,2)+"."+e.slice(2,5)+"."+e.slice(5,8)+"-"+e.slice(8,9);12===t.length&&(this.input.value=t)}cpf(){const e=this.input.value.replace(/[^\d]/g,""),t=e.slice(0,3)+"."+e.slice(3,6)+"."+e.slice(6,9)+"-"+e.slice(9,11);14===t.length&&(this.input.value=t)}cep(){const e=this.input.value.replace(/[^\d]/g,""),t=e.slice(0,5)+"-"+e.slice(5,8);9===t.length&&(this.input.value=t)}numero(){const e=this.input.value.replace(/[^\d]/g,"").split();5===e[0].length?this.input.value=e[0][0]+e[0][1]+"."+e[0][2]+e[0][3]+e[0][4]:4===e[0].length?this.input.value=e[0][0]+"."+e[0][1]+e[0][2]+e[0][3]:this.input.value=e[0]}telefone(){const e=this.input.value.replace(/[^\d]/g,"");/(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g.test(this.input.value)?this.input.value.length>=8&&(this.input.value=e):this.input.value="Telefone incorreto"}celular(){const e=this.input.value.replace(/[^\d]/g,"");/(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g.test(this.input.value)?this.input.value.length>=8&&(this.input.value=e):this.input.value="Celular incorreto"}frontController(){"dtNascimento"===this.type?this.dtNascimento():"rg"===this.type?this.rg():"cpf"===this.type?this.cpf():"cep"===this.type?this.cep():"numero"===this.type?this.numero():"telefone"===this.type?this.telefone():"celular"===this.type&&this.celular()}addEvents(){this.input.addEventListener("change",this.frontController)}init(){this.type&&this.input&&this.addEvents()}}new class{constructor(e,t){this.elClick=document.querySelector(e),this.elTarget=document.querySelector(t),this.scrollTo=this.scrollTo.bind(this),this.scrollTop=function(e,t){let s;return(...t)=>{s&&clearTimeout(s),s=setTimeout((()=>{e(...t),s=null}),100)}}(this.scrollTop.bind(this))}scrollTo(){this.elTarget.scrollIntoView({behavior:"smooth",block:"start"})}scrollTop(){const e=window.pageYOffset,t=this.elTarget.offsetHeight-100,s=document.querySelector(".c-btn-top");e>t?(s.style.display="flex",s.addEventListener("click",this.scrollTo)):(s.style.display="none",s.removeEventListener("click",this.scrollTo))}addEvent(){this.elClick.addEventListener("click",this.scrollTo),window.addEventListener("scroll",this.scrollTop)}start(){this.elClick&&this.elTarget&&this.addEvent()}}("[data-js-scrollToForm]",".l-main").start(),(new class{constructor(){this.form=document.forms.formulario,this.preencherCep=this.preencherCep.bind(this),this.submit=this.submit.bind(this)}limparDados(e){return Number(e.replace(/[^\d]/g,""))}preencherCep(){s("cep",this.form.cep.value).mensagem||(async()=>{let t=!1;const s=new e(".c-modal",".c-modal__container",".c-modal__close");try{t=!0,t&&(s.openModal(),s.messageModal({type:2,typeTitle:"CARREGANDO INFORMAÇÕES DE",typeMessage:`${this.form.cep.value}`,message:[" "]}));const e=await async function(e){const t=await fetch(`https://viacep.com.br/ws/${e}/json/`),s=await t.json();if(200===t.status)return{logradouro:s.logradouro,bairro:s.bairro}}(this.form.cep.value);this.form.endereco.value=e.logradouro,this.form.bairro.value=e.bairro}catch(e){throw new Error("Erro ao buscar o endereço com o cep informado")}finally{t=!1,t||s.closeModal(),"undefined"===this.form.endereco.value&&"undefined"===this.form.bairro.value&&(s.start(),s.messageModal({type:0,typeTitle:"ERRO AO CARREGAR INFORMAÇÕES DESTE CEP",typeMessage:`${this.form.cep.value}`,message:["Por favor informe um CEP válido"]}),this.form.endereco.value="",this.form.bairro.value="")}})()}inputError(e,t){0===t?(e.style.border="1px solid #ff3333","select"!==e.localName&&(e.value=""),e.focus(),"select"===e.localName&&e.addEventListener("change",(()=>{e.style.border="1px solid #cfcfcf"})),e.addEventListener("keyup",(()=>{e.style.border="1px solid #cfcfcf"}))):1===t&&(e.style.border="1px solid #5fa553",e.focus(),e.addEventListener("keyup",(()=>{e.style.border="1px solid #cfcfcf"})))}submit(t){t.preventDefault();const i=new e(".c-modal",".c-modal__container",".c-modal__close"),o=s("nome",this.form.nome.value),r=s("dtNascimento",this.form.dtNascimento.value),l="masculino"===this.form.sexo.value||"feminino"===this.form.sexo.value,a="casado"===this.form.estadoCivil.value||"solteiro"===this.form.estadoCivil.value,n=s("rg",this.form.rg.value),m=s("cpf",this.form.cpf.value),c=s("endereco",this.form.endereco.value),d=s("numero",this.limparDados(this.form.numero.value)),h=s("cep",this.form.cep.value),u=s("bairro",this.form.bairro.value),p=s("telefone",this.form.telefone.value),f=s("celular",this.form.celular.value),g=s("email",this.form.email.value),v=this.form.termos.checked;if(o.mensagem||r.mensagem||!l||!a||n.mensagem||m.mensagem||c.mensagem||d.mensagem||h.mensagem||u.mensagem||p.mensagem||f.mensagem||g.mensagem||!v)i.start(),i.messageModal({type:0,typeTitle:"ERRO",typeMessage:"verifique os dados",message:[o.mensagem,r.mensagem,l?null:"Selecione o campo SEXO",a?null:"Selecione o campo Estado Cívil",n.mensagem,m.mensagem,c.mensagem,d.mensagem,h.mensagem,u.mensagem,p.mensagem,f.mensagem,g.mensagem,v?null:"Você precisa concordar com os termos para enviar."]}),o.mensagem?this.inputError(this.form.nome,0):this.inputError(this.form.nome,1),r.mensagem?this.inputError(this.form.dtNascimento,0):this.inputError(this.form.dtNascimento,1),l?this.inputError(this.form.sexo,1):this.inputError(this.form.sexo,0),a?this.inputError(this.form.estadoCivil,1):this.inputError(this.form.estadoCivil,0),n.mensagem?this.inputError(this.form.rg,0):this.inputError(this.form.rg,1),m.mensagem?this.inputError(this.form.cpf,0):this.inputError(this.form.cpf,1),h.mensagem?this.inputError(this.form.cep,0):this.inputError(this.form.cep,1),d.mensagem?this.inputError(this.form.numero,0):this.inputError(this.form.numero,1),c.mensagem?this.inputError(this.form.endereco,0):this.inputError(this.form.endereco,1),u.mensagem?this.inputError(this.form.bairro,0):this.inputError(this.form.bairro,1),p.mensagem?this.inputError(this.form.telefone,0):this.inputError(this.form.telefone,1),f.mensagem?this.inputError(this.form.celular,0):this.inputError(this.form.celular,1),g.mensagem?this.inputError(this.form.email,0):this.inputError(this.form.email,1);else{const e=!0,t={nome:this.form.nome.value,dtNascimento:this.limparDados(this.form.dtNascimento.value),sexo:this.form.sexo.value,estadoCivil:this.form.estadoCivil.value,rg:this.limparDados(this.form.rg.value),cpf:this.limparDados(this.form.cpf.value),cep:this.limparDados(this.form.cep.value),numero:this.limparDados(this.form.numero.value),endereco:this.form.endereco.value,bairro:this.form.bairro.value,telefone:this.limparDados(this.form.telefone.value),celular:this.limparDados(this.form.celular.value),email:this.form.email.value,termos:this.form.termos.checked};console.log(t),e&&(i.openModal(),i.messageModal({type:1,typeTitle:"sucesso",typeMessage:"mensagem enviada com sucesso",message:["Aguarde enquanto redirecionamos você!"]}),setTimeout((()=>{location.reload(!0)}),3e3))}}addEvents(){new i("dtNascimento",this.form.dtNascimento).init(),new i("rg",this.form.rg).init(),new i("cpf",this.form.cpf).init(),new i("cep",this.form.cep).init(),new i("numero",this.form.numero).init(),new i("telefone",this.form.telefone).init(),new i("celular",this.form.celular).init(),this.form.cep.addEventListener("change",this.preencherCep),this.form.addEventListener("submit",this.submit)}start(){this.form&&this.addEvents()}}).start()}();