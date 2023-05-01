function calculationDeposit() {
  let sum = document.getElementById("sum");
  let rate = document.getElementById("rate");
  let time = document.getElementById("time");
  let period = document.getElementById("period");
  let day = document.getElementById("day");
  let res = 0;
  let total = Number(sum.value);
  let subtotal = 0;
  if ((total >= 10000) && (total <= 100000000)) {
    if (document.getElementsByName("typePercent")[0].checked) {
      res = (sum.value * rate.value * time.value / day.value) / 100;
      /*alert("Итого вы получите: " + (Number(sum.value) + res).toFixed(2) + " руб.\nИз них сумма процентов: " + res.toFixed(2) + " руб.");*/
      document.getElementById("result").innerHTML = "Итого вы получите: " + (Number(sum.value) + res).toFixed(2) + " руб.\nИз них сумма процентов: " + res.toFixed(2) + " руб."
    } else {
      for (i = 0; i < (time.value / period.value); i++) {
        res = (total * rate.value * period.value / day.value) / 100;
        subtotal = res;
        total = total + subtotal;
      }
      /*alert("Итого вы получите: " + total.toFixed(2) + " руб.\nИз них сумма процентов: " + (total - Number(sum.value)).toFixed(2) + " руб.");*/
      document.getElementById("result").innerHTML = "Итого вы получите: " + total.toFixed(2) + " руб.\nИз них сумма процентов: " + (total - Number(sum.value)).toFixed(2) + " руб."
    }
  } else {
    alert("Введите сумму вклада от 10'000 руб до 100'000'000 руб")
  }
}