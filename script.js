// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
const gender = process.argv[2]; // Genero
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**

if (
  gender === "male" && //Aqui está verificando se a variável entre na categoria masculino - "male"
  height >= 1.7 && //Confirma se a altura é no mínimo 1.7
  (barReps >= 6 || barSeconds >= 15) && //Aqui valida se barReps for no mínimo 6 ou se barSeconds for no mínimo 15
  abs >= 41 && //confirma se abs (abdominais) é no mínimo 41
  ((runDistance >= 3000 && runTime <= 720) || //Passa se a runDistance ter no mínimo 3000 e a runTime ter no máximo 720 ou
    (runDistance >= 5000 && runTime <= 1200)) && //se a runDistance ter no mínimo 5000 e a runTime ter no máximo 1200
  ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30) // Confirma se a swimDistance ter no mínimo 100 e a swimTime ter no máximo 60 ou se a diveTime ter no máximo 30
) {
  passed = true; //se tudo passar o resultado vai ser "true"
}

if (
  gender === "female" && //Aqui está verificando se a variável entre na categoria femino - "female"
  height >= 1.6 && //Confirma se a altura é no mínimo 1.6
  (barReps >= 5 || barSeconds >= 12) && //Aqui valida se barReps for no mínimo 6 ou se barSeconds for no mínimo 15
  abs >= 41 && //confirma se abs (abdominais) é no mínimo 41
  ((runDistance >= 4000 && runTime <= 900) || //Passa se a runDistance ter no mínimo 4000 e a runTime ter no máximo 900 ou
    (runDistance >= 6000 && runTime <= 1320)) && //se a runDistance ter no mínimo 6000 e a runTime ter no máximo 1320
  ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30) // Confirma se a swimDistance ter no mínimo 100 e a swimTime ter no máximo 60 ou se a diveTime ter no máximo 30
) {
  passed = true; //se tudo passar o resultado vai ser "true"
}

/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
