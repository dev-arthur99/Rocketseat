/* Exercício 1 */

let testeIdade = idade => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        idade >= 18 ? resolve() : reject();
      }, 2000);
    });
  };
  
testeIdade(55)
    .then(function() {
      console.log("Maior que 18");
    })
    .catch(function() {
      console.log("Menor que 18");
    });

/* Exercício 2 */

var inputName = document.getElementById("user");
var dataList = document.querySelector("ul#mod4");
const getUserRepo = name => {
  var user = inputName.value;
  if (!user) {
    renderError();
    alert("Preencha o campo");
  }
  renderLoading();
  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(response => {
      fillList(response.data);
    })
    .catch(error => {
      alert("Usuário não encontrado!");
      renderError(error);
    });
};

/* Exercício 3 */

function renderLoading(loading) {
  dataList.innerHTML = "";
  var textElement = document.createTextNode("Carregando...");
  var loadingElement = document.createElement("li");
  loadingElement.appendChild(textElement);
  dataList.appendChild(loadingElement);
}

function renderError(loading) {
  dataList.innerHTML = "";
  var user = inputName.value;
  var msgUserEmpty = !user ? "Preencha o usuário" : "Usuário não encontrado!";

  var textElement = document.createTextNode(msgUserEmpty);
  var errorElement = document.createElement("li");
  errorElement.style.color = "red";
  errorElement.appendChild(textElement);
  dataList.appendChild(errorElement);
}

const fillList = repositorios => {
  console.log("TCL: repositorios", repositorios);
  dataList.innerHTML = "";

  for (repo of repositorios) {
    const reponame = document.createTextNode(repo.name);
    const repoItem = document.createElement("li");

    repoItem.appendChild(reponame);
    dataList.appendChild(repoItem);
  }
};