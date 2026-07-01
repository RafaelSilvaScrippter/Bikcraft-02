export function tabNavBicicletas() {
  const dataTabItemBikcraft = document.querySelectorAll(
    "[data-tab-item-bikcraft]",
  );
  const dataOpcaoBikcraft = document.querySelectorAll("[data-opcao-bikcraft]");

  dataTabItemBikcraft.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      dataTabItemBikcraft.forEach((item) => {
        item.classList.remove("on");
      });
      tab.classList.add("on");
    });
  });

  dataTabItemBikcraft.forEach((item, index) => {
    item.addEventListener("click", () => {
      dataOpcaoBikcraft.forEach((conteudo) => {
        conteudo.classList.remove("on");
      });
      dataOpcaoBikcraft[index].classList.add("on");
    });
  });
}
