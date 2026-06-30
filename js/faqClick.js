export function faqCss() {
  const dataTituloDt = document.querySelectorAll("[data-titulo-dt]");
  const dataDescricaoDd = document.querySelectorAll("[data-descricao-dd]");

  if (dataDescricaoDd[0]) {
    dataDescricaoDd[0].classList.add("on");
    dataTituloDt[0].classList.add("on");
    dataTituloDt.forEach((item, index) => {
      item.addEventListener("click", () => {
        dataDescricaoDd[index].classList.toggle("on");
        dataTituloDt[index].classList.toggle("on");
      });
    });
  }
}
