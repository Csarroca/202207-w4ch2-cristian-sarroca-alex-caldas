# El ahorcado

- ## App

  - Recibe:
    - Letra selecciónada
    - Palabra a acertar
  - Estado:
    - partida en curso o fin de partida
  - Muestra:
    - Letters
    - Guessed Letters
    - Used Letters
    - Hangman
    - Result
  - Acción de usuario:
    - Selecciónar una letra

- ## Letters

  (revisar si podemos cambiarlo de a a button)

  - Recibe:
    - Letras abecedario [A-Z]
    - Acción de selecciónar letra
  - Estado:
    - Contador de letras selecciónadas
  - Muestra:
    - Letras del abecedario no usadas
  - Acción de usuario:
    - Selecciónar una letra

- ## Guessed Letters

  - Recibe:
    - Letras correctas
  - Estado:
    - Contador de letras aceratdas
  - Muestra:
    - Letras recividas
  - Acción de usuario:
    - Ninguna

- ## Used Letters

  - Recibe:
    - Letras usadas no correctas
  - Estado:
    - Contador de letras no correctas
  - Muestra:
    - Letras recibidas
  - Acción de usuario:
    - Ninguna

- ## Hangman

  - Recibe:
    - Partes del dibujo
  - Estado:
    - Contador de palos
  - Muestra:
    - Las partes recibidas del dibujo
  - Acción de usuario:
    - Ninguna

- ## Result
  - Recibe:
    - Texto end-game
  - Estado:
    - Oculto o activo
  - Muestra:
    - El texto recivido
  - Acción de usuario:
    - Ninguna

&nbsp;

# Data layer

- Datos:
  - Array de palabras a acertar
  - Array letras selecciónadas erroneas
  - Array letras selecciónadas correctas
  - Contador de fallos permitidos
- Modificaciónes:
  - Aleatoriamente al reiniciar
  - Añadir letra al array de Used Letters
  - Añadir letra al array de Guessed Letters
  - Añadir linea de dibujo a Hangman
  - Mostrar resultado en Result
