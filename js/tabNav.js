export function tabNav() {
  const dataItemOpcao = document.querySelectorAll("[data-container-opcao]");
  const dataOpcaoTab = document.querySelectorAll("[data-tab-opcao]");

  const dataOpcaoItemSeguro = document.querySelectorAll(
    "[data-opcao-item-seguro]",
  );

    dataItemOpcao[0].classList.add('on')

  function removeClassAll(element) {
    element.forEach((item) => item.classList.remove("on"));
  }

  dataOpcaoItemSeguro.forEach((item) => {
    item.addEventListener("click", () => {
      removeClassAll(dataOpcaoItemSeguro);
      item.classList.add("on");
    });
  });

  dataOpcaoTab.forEach((item, index) => {
    item.addEventListener("click", () => {
      removeClassAll(dataOpcaoTab);
      dataOpcaoTab[index].classList.add("on");
    });
  });

  dataOpcaoTab.forEach((item, index) => {
    item.addEventListener("click", () => {
      removeClassAll(dataItemOpcao);
      dataItemOpcao[index].classList.add("on");
    });
  });
}
