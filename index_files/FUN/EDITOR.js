function UPDEJT_ALL() {
  if (GLISTA["i"]) {
    /// da se oprave na rulsoveto za ekstra sekuriti

    let O = GetDATAtoSND(EL_TBL);
    for (i in O) {
      let P = GLISTA["I"] + i + "/STS/";
      let s = parseInt(O[i]["STATUS"]);
      SYC_0000.child(P + "STATUS").set(s);

      for (e in O[i]["Vrednosti"]) {
        let v = parseInt(O[i]["Vrednosti"][e]);
        if (!isNaN(v)) {
          SYC_0000.child(P + "OZNAKI/" + e + "/VALUE").set(v);
        }
      }
    }
  }
  Alert_Splash("UPDEJT");

  // gi zatvara site tajvi
  for (i = 1; i < EL_TBL["URED_SECTOR"].length - 1; i++) {
    EL_TBL["URED_SECTOR"][i].style.display = "none";
    EL_TBL["URED_DASH"][i].setAttribute("shw", "0");
  }
} /// da se stave u rulsoveto updejtsko

function GetDATAtoSND(T) {
  let O = {};
  let Q = T["TABLATA"].children[1].childNodes;
  let n = 0;
  for (q in Q) {
    if (n > 29) {
      break;
    }
    let N = n + 1;
    if (Q[q].style.display != "none") {
      O[N] = {
        STATUS: Q[q].getElementsByClassName("Status_select")[0].value,
        Vrednosti: {
          0: Q[q].getElementsByClassName("SLIDER_0")[0].value,
          1: Q[q].getElementsByClassName("SLIDER_1")[0].value,
          2: Q[q].getElementsByClassName("SLIDER_2")[0].value,
        },
      };
    }
    n = n + 1;
  }
  return O;
}
