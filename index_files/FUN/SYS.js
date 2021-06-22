const ROLE = ["ADMIN", "EDITOR", "SPECTATOR", "ANALIZA"];
const DefalkaFoto = "../SRC.HAS-SYC.system/MEDIA/HAS1000.png";
const MASINA_STATUS = {
  /// U SHER LOKACIJA i da se razmisle za kostumize
  1: { TexT: "OK", Boi: "green" },
  2: { TexT: "LEER", Boi: "gray" },
  3: { TexT: "KAPUT", Boi: "red" },
  4: { TexT: "PAUSA", Boi: "darkgoldenrod" },
  5: { TexT: "CLEANING", Boi: "blue" },
  6: { TexT: "REPAIR", Boi: "purple" },
  7: { TexT: "ok & 4 Sale", Boi: "lime" },
};

function Mestene_JAKI_STATUSI() {
  // ne e dodadeno ama lesno se dodava !!
  let S = EL_TBL["STATUS_SELECTOR"];
  for (i = 1; i < S.length; i++) {}
}

function CR8_taj_OBJ_zaSTATUSOT() {
  // ne e dodadeno ama lesno se dodava !!
}

////<<== da mozat da bidat kostomajzni za kundinja po zelba bi bilo ok ana ne e bas potrebno sega za sega kako interesnen bonus e ama ne e tolku jak ROI
/// da se ture u share lokaciono kako modularno
function MestiURED_status_CLR(a, n) {
  let A = parseInt(Math.abs(a));
  EL_TBL["DOT_STATUS"][n].style.color = MASINA_STATUS[A]["Boi"];
}
function MestiURED_status_SLK(a, n) {
  EL_TBL["STATUS_SELECTOR"][n].value = a;
}
function CHANGE_statys(a) {
  let v = parseInt(a.value);
  for (i = 0; i < EL_TBL["STATUS_SELECTOR"].length; i++) {
    if (EL_TBL["STATUS_SELECTOR"][i] == a) {
      EL_TBL["DOT_STATUS"][i].style.color = MASINA_STATUS[v]["Boi"];
      break;
    }
  }
}
// vremenski funkcij
function Get_TAZE_M() {
  let J = new Date().getMonth() + 1;
  return parseInt(J);
}
function Get_TAZE_G() {
  let J = new Date().getUTCFullYear();
  return parseInt(J);
}

var M_taze = Get_TAZE_M();
var G_taze = Get_TAZE_G();

var M_mnt = M_taze - 1;
if (!M_mnt) {
  M_mnt = 12;
}

// otvaranje/zatvaranje na prikazanata masinka
function prikaz(a) {
  let I = parseInt(a.parentElement.parentElement.getAttribute("value"));
  let A = parseInt(a.getAttribute("shw"));
  for (i = 0; i < EL_TBL["URED_SECTOR"].length; i++) {
    EL_TBL["URED_SECTOR"][i].style.display = "none";
    EL_TBL["URED_DASH"][i].setAttribute("shw", "0");
  }
  let S = "none";
  let SRCL = 0;
  if (!A) {
    SRCL = a.offsetParent.offsetTop + 17;
    a.setAttribute("shw", "1");
    S = "block";
  }
  EL_TBL["URED_SECTOR"][I].style.display = S;
  window.scrollTo(0, SRCL);
}

/// A to so takvite nesta
function PolnejeDATA_UREDI(a, R) {
  EL_TBL["TABLATA"].style.display = "table";

  for (i in a) {
    let I = parseInt(i);
    if (a[I]["STS"]["OZNAKI"][0]["SIMBOL"]) {
      EL_TBL["%_1"][I].innerHTML = a[I]["STS"]["OZNAKI"][0]["VALUE"] + "%";
      EL_TBL["SLIDER_1"][I].value = a[I]["STS"]["OZNAKI"][0]["VALUE"];
      EL_TBL["SIMBOL_1"][I].innerHTML =
        Simbol_TBLA[a[I]["STS"]["OZNAKI"][0]["SIMBOL"]];
      EL_TBL["SIMBOL_TXT_1"][I].innerHTML = a[I]["STS"]["OZNAKI"][0]["TxT"];
    } else {
      CssLINIJA(0, I);
    }

    if (a[I]["STS"]["OZNAKI"][1]["SIMBOL"]) {
      EL_TBL["%_2"][I].innerHTML = a[I]["STS"]["OZNAKI"][1]["VALUE"] + "%";
      EL_TBL["SLIDER_2"][I].value = a[I]["STS"]["OZNAKI"][1]["VALUE"];
      EL_TBL["SIMBOL_2"][I].innerHTML =
        Simbol_TBLA[a[I]["STS"]["OZNAKI"][1]["SIMBOL"]];
      EL_TBL["SIMBOL_TXT_2"][I].innerHTML = a[I]["STS"]["OZNAKI"][1]["TxT"];
    } else {
      CssLINIJA(1, I);
    }

    if (a[I]["STS"]["OZNAKI"][2]["SIMBOL"]) {
      EL_TBL["%_3"][I].innerHTML = a[I]["STS"]["OZNAKI"][2]["VALUE"] + "%";
      EL_TBL["SLIDER_3"][I].value = a[I]["STS"]["OZNAKI"][2]["VALUE"];
      EL_TBL["SIMBOL_3"][I].innerHTML =
        Simbol_TBLA[a[I]["STS"]["OZNAKI"][2]["SIMBOL"]];
      EL_TBL["SIMBOL_TXT_3"][I].innerHTML = a[I]["STS"]["OZNAKI"][2]["TxT"];
    } else {
      CssLINIJA(2, I);
    }

    MestiURED_status_CLR(a[I]["STS"]["STATUS"], I);
    MestiURED_status_SLK(a[I]["STS"]["STATUS"], I);

    EL_TBL["URED_IME"][I].innerHTML = a[I]["STS"]["IME"];
    let F = DefalkaFoto;
    if (a[I]["FTO"]["F_IME"]) {
      F = a[I]["FTO"]["F_SRC"];
    }
    EL_TBL["URED_FTO"][I].src = F;
  }

  DELL_ROW(a);
  if (R == 3) {
    Deletacija(R_SLIDERS);
    Deletacija(R_UPD);
    EL_DASH["UPDATE"].remove();
  }
  if (R == 2) {
    Deletacija(TBLA);
    EL_DASH["UPDATE"].style.display = "block";
  }
}

function Deletacija(a) {
  for (i = a.length - 1; i > -1; i--) {
    a[i].remove();
  }
}
function Akk_blok_status(a) {
  ACC_STATUS.innerHTML =
    "ovaj akk ( " + a + " ) e deaktiviran od adminot na grupata";
}

function UPD_Slider_TEXT(D) {
  /// ova e za analizataa !!!
  for (i in D) {
    Lupd[i].innerHTML = LastUPD(D[i]["UPD"][G_taze][M_taze]);
    Qupd[i].innerHTML = Qti_UPD(D[i]["UPD"][G_taze][M_taze]);
  }
}

function CssLINIJA(a, I) {
  let STLZ = [
    EL_TBL["SLIDER_CONTEINER_1"][I],
    EL_TBL["SLIDER_CONTEINER_2"][I],
    EL_TBL["SLIDER_CONTEINER_3"][I],
  ];
  STLZ[a].style.display = "none";
  if (a == 0) {
    EL_TBL["%_1"][I].innerText = "xxxi";
    EL_TBL["%_1"][I].style.opacity = 0;
    EL_TBL["Linija_A0"][I].style.opacity = 0;
    EL_TBL["Linija_B0"][I].style.opacity = 0;
    EL_TBL["Linija_C0"][I].style.opacity = 0;
    EL_TBL["Linija_C1"][I].style.opacity = 0;
    EL_TBL["Linija_C2"][I].style.opacity = 0;
  } else if (a == 1) {
    EL_TBL["%_2"][I].innerText = "xxxi";
    EL_TBL["%_2"][I].style.opacity = 0;
    EL_TBL["Linija_A1"][I].style.opacity = 0;
    EL_TBL["Linija_B1"][I].style.opacity = 0;
    EL_TBL["Linija_B2"][I].style.opacity = 0;
  } else if (a == 2) {
    EL_TBL["%_3"][I].innerText = "xxxi";
    EL_TBL["%_3"][I].style.opacity = 0;
    EL_TBL["Linija_A2"][I].style.opacity = 0;
  }
}

function LastUPD(a) {
  let TxT = "Laste Upgrade : ";
  let infoTIME = "";
  if (a[0] != false) {
    for (i in a) {
      infoTIME = a[i];
    }
  } else {
    TxT = "";
  }
  TxT = TxT + infoTIME;
  return TxT;
}

function Qti_UPD(a) {
  let N = 0;
  if (a[0] != false) {
    for (i in a) {
      N = i;
    }
    N = parseInt(N) + 1;
  }
  return "Upgrades per monat : " + N;
}
