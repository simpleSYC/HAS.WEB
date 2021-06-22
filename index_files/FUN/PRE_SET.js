function DELL_ROW(a) {
  for (i = 30; i > 0; i--) {
    if (a[i] != undefined) {
      if (a[i]["STS"]["STATUS"] < 0) {
        EL_TBL["URED_SECTOR"][i].parentElement.parentElement.style.display =
          "none";
      }
    }
    //EL_TBL["URED_SECTOR"][i].remove();
    else {
      EL_TBL["URED_SECTOR"][i].parentElement.parentElement.style.display =
        "none";
    }
  }
}
//EL_TBL["URED_SECTOR"][i].remove();
//EL_TBL["URED_SECTOR"][i].remove();

/// site 30 se staveni uste na startot i se brisat spored licencata

//// MALKU E CUDNA AMA OK E SEA ZA SEA
