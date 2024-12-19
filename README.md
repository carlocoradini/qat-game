# **QAT: O jogo**

> Você sabe até onde vai seu vocabulário em inglês formando palavras de 3, 4 ou 5 letras? Desafie seus amigos e sejam os melhores! Comece a jogar agora e transforme seu inglês!

---


<h1 id="summary">Sumário</h1>

* **[1. Resumo do Documento de Design do Jogo](#resume)**

* **[2. História](#history)**
    * Personagens
    * Jogadores

* **[3. Configuração](#config)**
    * Características

* **[4. Narrativa](#narrative)**

* **[5. Jogabilidade](#gameplay)**
    * Evento principal
    * Mecânicas
    * Dinâmicas

* **[6. UI/Controles do Jogo](#ui)**

* **[7. Design de Níveis](#level)**

* **[8. Arte](#art)**
    * Visual
    * Áudio

* **[9. Plano de Desenvolvimento & Pilares de Design](#design)**
    * Protótipo
    * Equipe

* **[10. Fases do desenvolvimento](#dev)**
    * Cronograma
    * Milestones

* **[11. Compilar e executar](#compile)**


---

<h1 id="resume">Resumo do Documento de Design do Jogo</h1>

> Para melhores soluções, vamos nos concentrar em responder algumas perguntas sobre isso...

1. Como o jogo funciona?

2. Como o jogo se parece?

3. Como o jogo será executado?

4. Como o jogo será feito?

---

<h1 id="history">História</h1>

> Já tentou lembrar de uma palavra e esteva na ponta da língua? Quem nunca tentou mudar um letra de cada vez para acertar a palavra certa? Agora você pode jogar e testar seus conhecimentos em inglês! Desafie seus amigos quem consegue formar as palavras mais rápido! 

## Personagens

## Jogadores

> O jogador, sua conta, perfil, ranking

- **Usuário**

> O jogador pode tentar jogar como um convidado. Ao final, se quiser entrar no ranking precisa fazer cadastro

- **Perfil**

> Cadastramento por db, mais tarde auth0(hotmail, facebook, gmail)

- **Social**
    - Ranking Geral
        > Um ranking para todos os jogadores de uma categoria
    - Ranking Local
        > Um ranking para um partida local entre jogadores convidados
    
---

<h1 id="config">Configuração</h1>


### Características

- **Gênero**
    > Puzzle, Casual
- **Plataforma**
    > PC, iOS, Android, Mobile
- **Público Alvo**
    > Estudantes entre fundamental e médio
- **Duração Estimada**
    > 15~30 minutos, para todas as fases
- **Requisitos Mínimos:**
    > Mouse e teclado; Touchscreen; **Pesquisar recursos de acessibilidade

---

<h1 id="narrative">Narrativa</h1>

- *Objetivo final*

> Formar palavras, apartir de "**qat**", trocando apenas uma letra por vez. Começando por 3 letras, depois 4 letras, até 5 letras. Seja o mais astuto e ágil de cada categoria.

- *Pitch de venda*

> Já tentou lembrar de uma palavra e esteva na ponta da língua? Quem nunca tentou mudar um letra de cada vez para acertar a palavra certa? Agora você pode jogar e testar seus conhecimentos em inglês! Desafie seus amigos quem consegue formar as palavras mais rápido! 

---

<h1 id="gameplay">Jogabilidade</h1>


### Loop Principal

O evento principal do jogo.

> **Acertar palavaras até completar todas letras do alfabeto. Primeiro com 3, depois 4, até 5**

### Mecânicas

Regras e ações básicas.

> **Trocar apenas uma letra por vez, ou inverter a palvra**

### Dinâmicas

O comportamento emergente que surge da jogabilidade, quando as mecânicas são colocadas em uso.

> **A**

---

<h1 id="ui">UI/Controles do Jogo</h1>

### Comandos básicos

---

<h1 id="level">Design de Níveis</h1>

> Descrição sobre como deve ficar as cenas dentro do jogo

### Cenário 1


### Cenário 2


---

<h1 id="art">Arte</h1>

> Descrições básicas, protótipos e ideias de arte

## Visual

### Avatar do Usuário

### Cenas

> Imagens de referência para cada cena, à adicionar na próxima etapa...


## Áudio

> Descrição básica de sonoplastia e trilha sonora

### Sonoplastia

### Trilha Sonora

---

<h1 id="design">Plano de Desenvolvimento & Pilares de Design</h1>

> Definir o sentido dos pilares, quais deles estão relacionados a quais áreas do desenvolvimento, e estrategicamente combinar a equipe com tarefas e funções

### Protótipo

> Projeto da Interface

<img width="50%" src="./prototipo.png" alt_text="Prévia do Protótipo"/>

"Primeiro prototipo do projeto"

### Equipe

> Definam suas aspirações e áreas de contribuição

- **Carlo** - **Tecnologia** 
    - **Desenvolvedor**
        - Tecnologia de Front-end
        - Auxiliar no desenvolvimento de design
        - Assistente de desenvolvedor de servidor
        - Focar em semiótica visual e experiência do usuário
        - Assistente de Direção e Produção (Documentação)
        

- **Vinícius** - **Design**
    - **Game designer**
        - Criar um design atraente, identidade e logotipo
        - Diretor de Design e Marketing 
  

- **Thiago** - **Psicologia**
    - **Desenvolvedor Estrutural(Exemplo)**
        - Definir tecnologias de servidor e banco de dados
        

- **Vitor** - **Pedagogia**
    - **Produtor(Exemplo)**
        - Feedback e melhorias contínuas
        
---

<h1 id="dev">Fases do desenvolvimento</h1>

### Plano de Ação:

> Cronograma com milestones e seus respectivos entregáveis
> Recursos humanos: quem é responsável por fazer o quê (papel na equipe);
> Recursos tecnológicos: quais as tecnologias a serem usadas no desenvolvimento.


## Cronograma

- Data Inicial: 20/12
- Data Prazo Final: 20/01

> 4 Semanas para entrega final e apresentação

## Milestones

> Fases de definição do projeto

### Projeto Protótipo / Primeiro protótipo funcional

- Discussão de funcionalidades básicas
- Discussão de servidor local
- Discussão de database 
- Discussão de design básico
- Discussão de carregamento de imagens

### Projeto Alpha / Fases de Testes

- Definição de funcionalidades básicas
- Definição de servidor local
- Definição de database 
- Definição de design básico
- Definição de carregamento de imagens


### Projeto Definitivo / Conclusão de implementações

- Implementação básica de todas fases
- Implementação básica de servidor na nuvem(vercel, github pages)
- Implementação de registro de usuários
- Implementação de design final
- Implementação de API/IA para recursos visuais

### Projeto Beta / Fases de Lançamento

- Teste e verificação de erros no cliente/servidor
- Implementação final de servidor e database
- Garantir segurança da database e usuários
- Garantir recursos de acessibilidade
- Gerenciamento de erros de custos computacionais das API/IA


---

<h1 id="compile">Compilar e executar</h1>

> Para compilar digite o seguinte comando
```
npm install
```

> Para executar o servidor
```
npm start
```

- E para abrir o jogo, basta acessar o home.html no seu navegador apartir do [localhost](https://localhost:3000), por enquanto...
- Bom jogo!

[Voltar ao topo](#summary)