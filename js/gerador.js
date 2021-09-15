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

var app = new Vue({
    el: '#app',
    data: {
        projetoGerado: "",
        projetoDescricao: "",
        checkedNivel: "",
        checkedCategoria: "",
        simples: {
            jogos: {
                titulo: ["Crie um jogo estilo cobrinha", "Crie um jogo com o uso do Lançamento Oblíquo", "Crie um jogo de plataforma"],
                descricao: ["No jogo a cobrinha não pode colidir consigo mesma ou nas paredes. Também deve conter os item que a cobrinha ira coletar para crescer.",
                    "O lançamento oblíquo ocorre quando um objeto inicia seu movimento formando um determinado ângulo com a horizontal. Nesse tipo de lançamento, o objeto executa dois movimentos simultâneos, ao mesmo tempo em que executa um movimento na vertical, subindo e descendo, também se desloca horizontalmente.",
                    "O personagem deve poder andar para a esquerda, direita, pular e coletar moedas."]
            },
            sites: {
                titulo: ["Crie um formulário de cadastro que guarda os dados em variáveis e imprime no console", "Desenvolva uma página de notícias", "Desenvolva uma página que mostre um vídeo do youtube"],
                descricao: ["As informações são nome, data de nascimento, sexo, RG, CPF, telefone, rua, número, bairro, cidade, estado, cep e complemento.", "Crie uma página que mostre uma notícia atual com data de publicação, autor e fontes.", "Faça uma descrição do vídeo e incorpore o vídeo do youtube dentro da página."]
            },
            softwares: {
                titulo: ["Desenvolva uma calculadora"],
                descricao: ["Devera ter as funções de somar, subtrair, multiplicar e dividir."]
            },
            aplicativos: {
                titulo: ["Desenvolva uma calculadora para android"],
                descricao: ["Devera ter as funções de somar, subtrair, multiplicar e dividir."]
            },
        }, mediano: {
            jogos: {
                titulo: ["Crie um jogo estilo cobrinha", "Crie um jogo de plataforma", "Crie um jogo simples estilo Endless runner"],
                descricao: ["No jogo a cobrinha não pode colidir consigo mesma ou nas paredes. Também deve conter sons, recorde e contador de mortes e os item que a cobrinha ira coletar para crescer.",
                    "O personagem deve poder andar para a esquerda, direita, pular e coletar moedas. Também deve conter sons, contador de moedas e contador de mortes.",
                    "O personagem deve poder andar para a esquerda, direita, pular e coletar moedas. Também deve conter sons, contador de moedas e contador de mortes."]
            },
            sites: {
                titulo: ["Desenvolva uma página de noticias responsivo", "Desenvolva um site de cadastro de pessoas responsivo. Conectado com um banco de dados e que mostre as pessoas cadastradas pesquisando pelo nome ou pelo CPF"],
                descricao: ["Crie uma página que mostre uma notícia atual com data de publicação, autor e fontes. Também incorpore um vídeo do youtube dentro da página.",
                    "As informações são nome, data de nascimento, sexo, RG, CPF, telefone, rua, número, bairro, cidade, estado, cep e complemento."]
            },
            softwares: {
                titulo: ["Desenvolva uma calculadora para windows", "Crie um programa de cadastro de pessoas. Conectado com um banco de dados e que mostre as pessoas cadastradas pesquisando pelo nome ou pelo CPF para windows"],
                descricao: ["Devera ter as funções de somar, subtrair, multiplicar e dividir.",
                    "As informações são nome, data de nascimento, sexo, RG, CPF, telefone, rua, número, bairro, cidade, estado, cep e complemento."]
            },
            aplicativos: {
                titulo: ["Desenvolva um aplicativo de notas"],
                descricao: ["Deve permitir o usuário criar notas e salva-las para visualizar posteriormente."]
            }
        }, avancado: {
            jogos: {
                titulo: ["Crie um jogo 3d estilo Endless runner", "Crie um jogo em 3d de tiro"],
                descricao: ["O personagem deve poder andar para a esquerda, direita, pular e coletar moedas. Também deve conter menu inicial e de pausa, opções de configurações, sons, animações, contador de morte e recorde máximo atingido.",
                    "Com menu inicial e de pausa, opções de configurações, sons, animações, contador de morte e recorde máximo atingido."]
            },
            sites: {
                titulo: ["Desenvolva um site que busque o tempo conectado a uma API", "Desenvolva um site que busque o endereço pelo CEP conectado a uma API"],
                descricao: ["Deve mostrar a temperatura atual, mínima, máxima e previsão de chuva", "Deve mostrar a rua, bairro, cidade, estado e cep."]
            },
            softwares: {
                titulo: ["Desenvolva um programa para contar os cliques do mouse em segundo plano"],
                descricao: ["Deve contar os cliques do botão direito, esquerdo e da rodinha."]
            },
            aplicativos: {
                titulo: ["Desenvolva um agregador de GIFs", "Desenvolva um app para visualizar fotos e vídeos"],
                descricao: ["Deve permitir pesquisar GIFs, buscar por categorias e baixar."]
            }
        }, godLevel: {
            jogos: {
                titulo: ["Desenvolva um jogo 3d que contenha jogadores online", "Desenvolva um jogo 3d em mundo aberto online com pessoas, veículos e missões"],
                descricao: ["Deve permitir que os jogadores joguem em grupos ou um contra os outros.", "Deve permitir que os jogadores joguem em grupos ou um contra os outros."]
            },
            sites: {
                titulo: ["Desenvolva um site de e-commerce com marketplace", "Desenvolva um site de cursos online"],
                descricao: ["Deve ter todas as funções de um e-commerce.", "Deve conter atividades interativas."]
            },
            softwares: {
                titulo: ["Crie uma IDE para alguma linguagem de programação"],
                descricao: ["Deve ter as funções básicas de uma IDE."]
            },
            aplicativos: {
                titulo: ["Desenvolva uma rede social", "Desenvolva um app de mensagens", "Crie um app para usar a câmera do smartphone no computador"],
                descricao: ["Deve conter todas as funções básicas de uma rede social.", "Deve conter todas as funções básicas de um aplicativo de mensagens instantâneas.", "Deve permitir usar a câmera do smartphone pelo USB no computador ou pela rede local WiFi."]
            }
        },
    },
    methods: {
        //To do - Refatorar IF's
        gerador() {

            //Verifica se tem um nivel ou categoria selecionado. Se não emite um alerta
            if (this.checkedNivel == false || this.checkedCategoria == false) {
                alert("Você deve selecionar um nível e uma categoria.");
            }

            //Checa o nivel e categoria selecionado

            //Nivel simples
            if (this.checkedNivel == "simples" && this.checkedCategoria == "jogos") {

                numAleatorio = Math.floor(Math.random() * this.simples.jogos.titulo.length);
                this.projetoGerado = this.simples.jogos.titulo[numAleatorio];
                this.projetoDescricao = this.simples.jogos.descricao[numAleatorio];

            }
            else if (this.checkedNivel == "simples" && this.checkedCategoria == "sites") {

                numAleatorio = Math.floor(Math.random() * this.simples.sites.titulo.length);
                this.projetoGerado = this.simples.sites.titulo[numAleatorio];
                this.projetoDescricao = this.simples.sites.descricao[numAleatorio];

            }
            else if (this.checkedNivel == "simples" && this.checkedCategoria == "softwares") {

                numAleatorio = Math.floor(Math.random() * this.simples.softwares.titulo.length);
                this.projetoGerado = this.simples.softwares.titulo[numAleatorio];
                this.projetoDescricao = this.simples.softwares.descricao[numAleatorio];

            }
            else if (this.checkedNivel == "simples" && this.checkedCategoria == "aplicativos") {

                numAleatorio = Math.floor(Math.random() * this.simples.aplicativos.titulo.length);
                this.projetoGerado = this.simples.aplicativos.titulo[numAleatorio];
                this.projetoDescricao = this.simples.aplicativos.descricao[numAleatorio];

            }
            //Nivel mediano
            else if (this.checkedNivel == "mediano" && this.checkedCategoria == "jogos") {

                numAleatorio = Math.floor(Math.random() * this.mediano.jogos.titulo.length);
                this.projetoGerado = this.mediano.jogos.titulo[numAleatorio];
                this.projetoDescricao = this.mediano.jogos.descricao[numAleatorio];

            }
            else if (this.checkedNivel == "mediano" && this.checkedCategoria == "sites") {

                numAleatorio = Math.floor(Math.random() * this.mediano.sites.titulo.length);
                this.projetoGerado = this.mediano.sites.titulo[numAleatorio];
                this.projetoDescricao = this.mediano.sites.descricao[numAleatorio];

            }
            else if (this.checkedNivel == "mediano" && this.checkedCategoria == "softwares") {

                numAleatorio = Math.floor(Math.random() * this.mediano.softwares.titulo.length);
                this.projetoGerado = this.mediano.softwares.titulo[numAleatorio];
                this.projetoDescricao = this.mediano.softwares.descricao[numAleatorio];

            }
            else if (this.checkedNivel == "mediano" && this.checkedCategoria == "aplicativos") {

                numAleatorio = Math.floor(Math.random() * this.mediano.aplicativos.titulo.length);
                this.projetoGerado = this.mediano.aplicativos.titulo[numAleatorio];
                this.projetoDescricao = this.mediano.aplicativos.descricao[numAleatorio];

            }
            //Nivel avancado
            else if (this.checkedNivel == "avancado" && this.checkedCategoria == "jogos") {

                numAleatorio = Math.floor(Math.random() * this.avancado.jogos.titulo.length);
                this.projetoGerado = this.avancado.jogos.titulo[numAleatorio];
                this.projetoDescricao = this.avancado.jogos.descricao[numAleatorio];

            }
            else if (this.checkedNivel == "avancado" && this.checkedCategoria == "sites") {

                numAleatorio = Math.floor(Math.random() * this.avancado.sites.titulo.length);
                this.projetoGerado = this.avancado.sites.titulo[numAleatorio];
                this.projetoDescricao = this.avancado.sites.descricao[numAleatorio];

            }
            else if (this.checkedNivel == "avancado" && this.checkedCategoria == "softwares") {

                numAleatorio = Math.floor(Math.random() * this.avancado.softwares.titulo.length);
                this.projetoGerado = this.avancado.softwares.titulo[numAleatorio];
                this.projetoDescricao = this.avancado.softwares.descricao[numAleatorio];

            }
            else if (this.checkedNivel == "avancado" && this.checkedCategoria == "aplicativos") {

                numAleatorio = Math.floor(Math.random() * this.avancado.aplicativos.titulo.length);
                this.projetoGerado = this.avancado.aplicativos.titulo[numAleatorio];
                this.projetoDescricao = this.avancado.aplicativos.descricao[numAleatorio];

            }
            //Nivel godLevel
            else if (this.checkedNivel == "godLevel" && this.checkedCategoria == "jogos") {

                numAleatorio = Math.floor(Math.random() * this.godLevel.jogos.titulo.length);
                this.projetoGerado = this.godLevel.jogos.titulo[numAleatorio];
                this.projetoDescricao = this.godLevel.jogos.descricao[numAleatorio];

            }
            else if (this.checkedNivel == "godLevel" && this.checkedCategoria == "sites") {

                numAleatorio = Math.floor(Math.random() * this.godLevel.sites.titulo.length);
                this.projetoGerado = this.godLevel.sites.titulo[numAleatorio];
                this.projetoDescricao = this.godLevel.sites.descricao[numAleatorio];

            }
            else if (this.checkedNivel == "godLevel" && this.checkedCategoria == "softwares") {

                numAleatorio = Math.floor(Math.random() * this.godLevel.softwares.titulo.length);
                this.projetoGerado = this.godLevel.softwares.titulo[numAleatorio];
                this.projetoDescricao = this.godLevel.softwares.descricao[numAleatorio];

            }
            else if (this.checkedNivel == "godLevel" && this.checkedCategoria == "aplicativos") {

                numAleatorio = Math.floor(Math.random() * this.godLevel.aplicativos.titulo.length);
                this.projetoGerado = this.godLevel.aplicativos.titulo[numAleatorio];
                this.projetoDescricao = this.godLevel.aplicativos.descricao[numAleatorio];

            }
        }
    }
})