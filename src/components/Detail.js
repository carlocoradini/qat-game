import React from "react";

const Detail = () => {
  return (
    <div>
      <p style={styles.text}>
        QAT é um jogo educativo, projetado para despertar o interesse pela
        língua inglesa e auxiliar no aprendizado do vocabulário. O foco é
        exclusivamente na experiência de formar palavras e aprimorar o
        conhecimento do idioma. Ao abrir o jogo, o jogador encontrará 3 linhas
        sublinhadas já preenchidas com as letras 'Q', 'A' e 'T'. O jogador
        poderá, então, modificar alguma dessas letras afim de formar uma nova
        palavra ou selecionar a randomização dessas 3 letras. A cada palavra
        formada gramaticamente correto, será apresentado o significado da
        palavra em sua forma literal ou colocada em uma determinada frase. Se
        essa nova palavra tiver uma letra não preenchida antes, ela contará como
        pontuação no alfabeto. E assim, seguindo até que o alfabeto seja
        completo.
      </p>
      <h1 style={styles.itemText}>Mecânicas</h1>
      <ul style={styles.list}>
        <li style={styles.itemList}>
          O objetivo principal do jogo é completar todas as letras do alfabeto
          atráves de palavras em inglês com apenas 3 letras.
        </li>
        <li style={styles.itemList}>
          As ações permitidades ao jogador é: mudar uma das letras ou trocar a
          posição das letras.
        </li>
        <li style={styles.itemList}>
          Para completar o objetivo, o jogador terá que ter um conhecimento
          básico da lingua inglesa, e a partir disso, se desafiar para melhorar
          o seu vocabulario.
        </li>
      </ul>
      <h1 style={styles.itemText}>Dinâmicas</h1>
      <ul style={styles.list}>
        <li style={styles.itemList}>
          Os jogadores aprendem estratégias de formação de palavras, ao
          experimentarem diferntes combinações de letras;
        </li>
        <li style={styles.itemList}>
          A troca e a reorganização de letras promovem o pensamento criativo e a
          resolução de problemas;
        </li>
        <li style={styles.itemList}>
          Os jogadores competem consigo mesmos e com outros players, para bater
          recordes anteriores de tempo, incentivando a repetição e o aprendizado
          constante.
        </li>
      </ul>
      <p style={styles.text}>
        Divirta-se, aproveite cada jogada e mostre todo o seu potencial. Boa
        sorte e bom jogo!
      </p>
    </div>
  );
};

const styles = {
  text: {
    fontFamily: "Verdana, sans-serif",
    fontSize: "16px",
    textAlign: "justify",
    fontWeight: "normal",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  itemText: {
    fontFamily: "Verdana, sans-serif",
    fontSize: "16px",
    textAlign: "justify",
    fontWeight: "bold",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  list: {
    paddingLeft: "90px",
    paddingRight: "90px",
  },
  itemList: {
    fontFamily: "Verdana, sans-serif",
    fontSize: "16px",
    textAlign: "justify",
    fontWeight: "normal",
  },
};

export default Detail;
