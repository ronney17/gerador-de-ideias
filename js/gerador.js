Vue.component('menu-topo', {
    template: `
    <header class="menu py-3">
        <div class="container">
            <div class="d-flex">
                <a href="index.html">
                    <img src="assets/lamp-w-outline.png" style="width: 40px;" alt="logo">
                </a>
                <ul class="nav me-lg-auto">
                    <li><a href="index.html" class="nav-link text-black">Gerador de ideias</a></li>
                </ul>
                <div class="text-end">
                    <ul class="nav me-lg-auto">
                        <li><a href="sobre.html" class="nav-link text-black">Sobre</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    `
})

Vue.component('rodape-bottom', {
    template: `
    <footer class="rodape d-flex align-items-center justify-content-center fixed-bottom py-3">
        <div class="col-md-8 d-flex justify-content-center">
            <a href="index.html" class="me-2">
                <img width="24" height="24" src="assets/lamp.png" alt="logo">
            </a>
            <span class="text-black"> 2021 | Roney </span>
        </div>
        <a class="px-2" href="https://www.linkedin.com/in/roney-s-a8b463110/" target="_blank"><img width="24" height="24"
                src="assets/linkedin-logo.png" alt="linkedin"></a>
    </footer>`,
})

//To do -  Add mais projeto e uma descrição 
var app = new Vue({
    el: '#app',
    data: {
        projetoGerado: "",
        checkedNivel: "",
        checkedCategoria: "",
        simples: {
            jogos: ["Crie um jogo estilo cobrinha", "Crie um jogo com uso do Lançamento Oblíquo", "Crie um jogo de plataforma"],
            sites: ["Crie um formulário de cadastro que guarda os dados em variáveis e imprime no console","Desenvolva uma página de noticias", "Desenvolva um site que mostre um vídeo do youtube"],
            softwares: ["Desenvolva uma calculadora sem interface"],
            aplicativos: ["Desenvolva um app que some duas entradas para android"],
        }, mediano: {
            jogos: ["Crie um jogo estilo cobrinha com sons, recorde e contador de mortes", "Crie um jogo de plataforma com sons, contador de moedas e contador de mortes", "Crie um jogo simples estilo Endless runner"],
            sites: ["Desenvolva site de noticias resposivo", "Desenvolva um site de cadastro de pessoas conectado com um banco de dados e que mostre as pessoas cadastradas"],
            softwares: ["Desenvolva uma calculadora como uma interface", "Crie um programa de cadastro de pessoas conectado com um banco de dados e que mostre as pessoas cadastradas"],
            aplicativos: ["Desenvolva uma calculadora para android"]
        }, avancado: {
            jogos: ["Crie um jogo 3d estilo Endless runner com menu inicial e de pausa, opções de configurações, sons, animações, contador de morte e recorde máximo atingido", "Crie um jogo em 3d de tiro com menu inicial e de pausa, opções de configurações, sons, animações, contador de morte e recorde máximo atingido"],
            sites: ["Desenvolva um site que busque o tempo conectado a uma API", "Desenvolva um site que busque o endereço pelo CEP conectado a uma API"],
            softwares: ["Desenvolva uma calculadora"],
            aplicativos: ["Desenvolva um agregador de GIFs", "Desenvolva um app para visualizar fotos e vídeos", "Desenvolva um aplicativo de notas"]
        }, godLevel: {
            jogos: ["Desenvolva um jogo 3d que contenha jogadores online", "Desenvolva um jogo 3d em mundo aberto online com pessoas, veículos e missões"],
            sites: ["Desenvolva um site de e-commerce com marketplace", "Desenvolva um site de cursos online"],
            softwares: ["Crie um programa para usar a câmera do smartphone pelo usb e wifi"],
            aplicativos: ["Desenvolva uma rede social", "Desenvolva um app de mensagens"]
        },
    },
    methods: {
        //To do - Refatorar gerador
        gerador() {

            //Verifica se tem um nivel e categoria selecionado. Se não emite um alerta
            if (this.checkedNivel == false || this.checkedCategoria == false) {
                alert("Você deve selecionar um nível e uma categoria.");
            }

            //Checa o nivel e categoria selecionado

            //Nivel simples
            if (this.checkedNivel == "simples" && this.checkedCategoria == "jogos") {
                this.projetoGerado = this.simples.jogos[Math.floor(Math.random() * this.simples.jogos.length)];
                
            }
            else if (this.checkedNivel == "simples" && this.checkedCategoria == "sites") {
                this.projetoGerado = this.simples.sites[Math.floor(Math.random() * this.simples.sites.length)];
                
            }
            else if (this.checkedNivel == "simples" && this.checkedCategoria == "softwares") {
                this.projetoGerado = this.simples.softwares[Math.floor(Math.random() * this.simples.softwares.length)];
                
            }
            else if (this.checkedNivel == "simples" && this.checkedCategoria == "aplicativos") {
                this.projetoGerado = this.simples.aplicativos[Math.floor(Math.random() * this.simples.aplicativos.length)];
                
            }
            //Nivel mediano
            else if (this.checkedNivel == "mediano" && this.checkedCategoria == "jogos") {
                this.projetoGerado = this.mediano.jogos[Math.floor(Math.random() * this.mediano.jogos.length)];
                
            }
            else if (this.checkedNivel == "mediano" && this.checkedCategoria == "sites") {
                this.projetoGerado = this.mediano.sites[Math.floor(Math.random() * this.mediano.sites.length)];
                
            }
            else if (this.checkedNivel == "mediano" && this.checkedCategoria == "softwares") {
                this.projetoGerado = this.mediano.softwares[Math.floor(Math.random() * this.mediano.softwares.length)];
                
            }
            else if (this.checkedNivel == "mediano" && this.checkedCategoria == "aplicativos") {
                this.projetoGerado = this.mediano.aplicativos[Math.floor(Math.random() * this.mediano.aplicativos.length)];
                
            }
            //Nivel avancado
            else if (this.checkedNivel == "avancado" && this.checkedCategoria == "jogos") {
                this.projetoGerado = this.avancado.jogos[Math.floor(Math.random() * this.avancado.jogos.length)];
                
            }
            else if (this.checkedNivel == "avancado" && this.checkedCategoria == "sites") {
                this.projetoGerado = this.avancado.sites[Math.floor(Math.random() * this.avancado.sites.length)];
                
            }
            else if (this.checkedNivel == "avancado" && this.checkedCategoria == "softwares") {
                this.projetoGerado = this.avancado.softwares[Math.floor(Math.random() * this.avancado.softwares.length)];
                
            }
            else if (this.checkedNivel == "avancado" && this.checkedCategoria == "aplicativos") {
                this.projetoGerado = this.avancado.aplicativos[Math.floor(Math.random() * this.avancado.aplicativos.length)];
                
            }
            //Nivel godLevel
            else if (this.checkedNivel == "godLevel" && this.checkedCategoria == "jogos") {
                this.projetoGerado = this.godLevel.jogos[Math.floor(Math.random() * this.godLevel.jogos.length)];
                
            }
            else if (this.checkedNivel == "godLevel" && this.checkedCategoria == "sites") {
                this.projetoGerado = this.godLevel.sites[Math.floor(Math.random() * this.godLevel.sites.length)];
                
            }
            else if (this.checkedNivel == "godLevel" && this.checkedCategoria == "softwares") {
                this.projetoGerado = this.godLevel.softwares[Math.floor(Math.random() * this.godLevel.softwares.length)];
                
            }
            else if (this.checkedNivel == "godLevel" && this.checkedCategoria == "aplicativos") {
                this.projetoGerado = this.godLevel.aplicativos[Math.floor(Math.random() * this.godLevel.aplicativos.length)];
                
            }
        }
    }
})