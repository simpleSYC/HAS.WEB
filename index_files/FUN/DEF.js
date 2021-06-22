var ACC_STATUS = document.getElementById("akk_status");
var EL_TBL = {
  TABLATA: document.getElementById("uredi"),
  URED_DASH: document.getElementsByClassName("ured_select"),
  "%_1": document.getElementsByClassName("STS_0"),
  "%_2": document.getElementsByClassName("STS_1"),
  "%_3": document.getElementsByClassName("STS_2"),
  DOT_STATUS: document.getElementsByClassName("STATUS_SIGNAL"),
  URED_IME: document.getElementsByClassName("SELECTED_URED_txt"),

  URED_SECTOR: document.getElementsByClassName("URED_STNGS"),

  SLIDER_CONTEINER_1: document.getElementsByClassName("SLD_STALAZA_S_0"),
  SLIDER_CONTEINER_2: document.getElementsByClassName("SLD_STALAZA_S_1"),
  SLIDER_CONTEINER_3: document.getElementsByClassName("SLD_STALAZA_S_2"),

  SLIDER_1: document.getElementsByClassName("SLIDER_0"),
  SLIDER_2: document.getElementsByClassName("SLIDER_1"),
  SLIDER_3: document.getElementsByClassName("SLIDER_2"),

  Linija_A0: document.getElementsByClassName("A0"),
  Linija_A1: document.getElementsByClassName("A1"),
  Linija_A2: document.getElementsByClassName("A2"),

  Linija_B0: document.getElementsByClassName("B0"),
  Linija_B1: document.getElementsByClassName("B1"),
  Linija_B2: document.getElementsByClassName("B2"),

  Linija_C0: document.getElementsByClassName("C0"),
  Linija_C1: document.getElementsByClassName("C1"),
  Linija_C2: document.getElementsByClassName("C2"),

  SIMBOL_TXT_1: document.getElementsByClassName("S_txt_0"),
  SIMBOL_TXT_2: document.getElementsByClassName("S_txt_1"),
  SIMBOL_TXT_3: document.getElementsByClassName("S_txt_2"),

  SIMBOL_1: document.getElementsByClassName("SIMBOL_0"),
  SIMBOL_2: document.getElementsByClassName("SIMBOL_1"),
  SIMBOL_3: document.getElementsByClassName("SIMBOL_2"),

  STATUS_SELECTOR: document.getElementsByClassName("Status_select"),
  URED_FTO: document.getElementsByClassName("FOTO_URED"),
};
for (i = 0; i < 29; i++) {
  let I = parseInt(i);
  let N_procent = [EL_TBL["%_1"], EL_TBL["%_2"], EL_TBL["%_3"]];
  let SLIDERITE = [EL_TBL["SLIDER_1"], EL_TBL["SLIDER_2"], EL_TBL["SLIDER_3"]];
  for (q = 0; q < 3; q++) {
    let Q = parseInt(q);
    SLIDERITE[Q][I].onchange = function () {
      N_procent[Q][I].innerHTML = SLIDERITE[Q][I].value + "%";
    };
  }
}

var EL_ANALIZA = {};

var EL_DASH = {
  UPDATE: document.getElementById("save_b"),
  LOGOUT: document.getElementById("logout_b"),
  F5: document.getElementById("refresh_b"),
};
EL_DASH["UPDATE"].onclick = function () {
  UPDEJT_ALL();
};
EL_DASH["LOGOUT"].onclick = function () {
  logout();
};
EL_DASH["F5"].onclick = function () {
  location.reload();
};

var TBL_UREDITE = document.getElementById("uredi");

var S_0 = document.getElementsByClassName("STS_0");
var SLD_0 = document.getElementsByClassName("SLIDER_0");

var S_1 = document.getElementsByClassName("STS_1");
var SLD_1 = document.getElementsByClassName("SLIDER_1");

var S_2 = document.getElementsByClassName("STS_2");
var SLD_2 = document.getElementsByClassName("SLIDER_2");

var Ured_EDIT_DIV = document.getElementsByClassName("URED_STNGS");

var Ured_BTN = document.getElementsByClassName("ured_select");

var Ured_S = document.getElementsByClassName("Ured_STATUS"); ////
var Ured_I = document.getElementsByClassName("Ured_ID"); //// ova e netestirano

var STLZA_S_0 = document.getElementsByClassName("SLD_STALAZA_S_0");
var STLZA_S_1 = document.getElementsByClassName("SLD_STALAZA_S_1");
var STLZA_S_2 = document.getElementsByClassName("SLD_STALAZA_S_2");

var Momental_S_TOCKA = document.getElementsByClassName("STATUS_SIGNAL");
var ured_TXT = document.getElementsByClassName("SELECTED_URED_txt");

var FotkaURED = document.getElementsByClassName("FOTO_URED");

var SMB_0 = document.getElementsByClassName("SIMBOL_0");
var SMB_1 = document.getElementsByClassName("SIMBOL_1");
var SMB_2 = document.getElementsByClassName("SIMBOL_2");

var Selected_STATUS = document.getElementsByClassName("Status_select");

var Lupd = document.getElementsByClassName("L_UPD");
var Qupd = document.getElementsByClassName("Q_UPD");

var TBLA = document.getElementsByClassName("TBL"); // u analiza ??

var R_SLIDERS = document.getElementsByClassName("SLIDERS");
var R_UPD = document.getElementsByClassName("UPD");

var m_TZE = document.getElementsByClassName("M_TZE");
var m_MNT = document.getElementsByClassName("M_MNT");

var OZNAKA_txt_0 = document.getElementsByClassName("S_txt_0");
var OZNAKA_txt_1 = document.getElementsByClassName("S_txt_1");
var OZNAKA_txt_2 = document.getElementsByClassName("S_txt_2");

var Linija_A0 = document.getElementsByClassName("A0");
var Linija_A1 = document.getElementsByClassName("A1");
var Linija_A2 = document.getElementsByClassName("A2");

var Linija_B0 = document.getElementsByClassName("B0");
var Linija_B1 = document.getElementsByClassName("B1");
var Linija_B2 = document.getElementsByClassName("B2");

var Linija_C0 = document.getElementsByClassName("C0");
var Linija_C1 = document.getElementsByClassName("C1");
var Linija_C2 = document.getElementsByClassName("C2");
