export function faqCss() {
  const dataTituloDt = document.querySelectorAll("[data-titulo-dt]");
  const dataDescricaoDd = document.querySelectorAll("[data-descricao-dd]");

  dataDescricaoDd[0].classList.add("on");
  dataTituloDt[0].classList.add("on");
  dataTituloDt.forEach((item, index) => {
    item.addEventListener("click", () => {
      dataDescricaoDd[index].classList.toggle("on");
      dataTituloDt[index].classList.toggle("on");
    });
  });
}
