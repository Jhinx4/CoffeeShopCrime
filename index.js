var evidenceBtn = document.getElementById("checkEv");
var evidence = document.querySelectorAll(".evidenceRadio");
var result = document.getElementById("result");
var chosenEvidence = "";

evidenceBtn.addEventListener("click", function () {
  evidence.forEach(function (evidence) {
    if (evidence.checked === true) {
      chosenEvidence = evidence.value;
    }
  });
  // eslint-disable-next-line default-case
  switch (chosenEvidence) {
    case "coffee":
      result.innerHTML = "لم يتم اكتشاف اثار للسم في القهوة ولا بالماء";
      break;
    case "":
      result.innerHTML = "";
      break;
    case "phone":
      result.innerHTML =
        'وجدنا رسالة من طليقة الضحية مضمونها: "بعتلك الجرنان ياريت تقرأ المقال بتاعي وابقي قولي رأيك"';
      break;
    case "cigarettes":
      result.innerHTML =
        "لم نجد اثار للسم في السجائر او علي الولاعة ، إلا أن السيجارة التي شربها الضحية بها اثار لسم السيانيد على فيلتر السيجارة فقط.";
      break;
    case "newsPaper":
      result.innerHTML =
        "كما هو مبين أنها جريدة الصحفية عبير، وبفحص الجريدة اتضح انها تحتوي علي اثار لسم السيانيد ، في اطراف الجريدة.";
      break;
    case "keyChain":
      result.innerHTML = "لم نجد أي شئ مريب بشأن مفاتيحه ، عليها بصماته فقط";
  }
});
