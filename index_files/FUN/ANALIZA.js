function GT_UPDJTS(D) {
  let UDEJTS = { M_taze: {}, M_minat: {} };

  for (i in D) {
    UDEJTS["M_taze"][i] = D[i]["UPD"][G_taze][M_taze];

    if (M_taze) {
      UDEJTS["M_minat"][i] = D[i]["UPD"][G_taze][M_mnt];
    } else if (D[i]["UPD"][G_taze - 1] != undefined) {
      UDEJTS["M_minat"][i] = D[i]["UPD"][G_taze - 1][M_mnt];
    } else {
      UDEJTS["M_minat"][i] = false;
    }
  }
  PRIKAZ_ypgrejdove(UDEJTS);
  CSSoko();
}

function PRIKAZ_ypgrejdove(UPDEJTS_) {
  let T_0, n_0, T_1, n_1, N_uredi;
  for (e in UPDEJTS_["M_taze"]) {
    N_uredi = e;
  }

  for (n = 0; n < N_uredi; n++) {
    let M_ = {
      TAZE: UPDEJTS_["M_taze"][n + 1],
      MINAT: UPDEJTS_["M_minat"][n + 1],
    };
    if (M_["TAZE"][0]) {
      T_0 = "";
      n_0 = 0;
      for (i in M_["TAZE"]) {
        n_0 = n_0 + 1;
        T_0 = T_0 + n_0 + ").==> " + M_["TAZE"][i] + "<br>";
      }
      m_TZE[n + 1].innerHTML = T_0;
    }

    if (M_["MINAT"][0]) {
      T_1 = "";
      n_1 = 0;
      for (i in M_["MINAT"]) {
        n_1 = n_1 + 1;
        T_1 = T_1 + n_1 + ").==> " + M_["MINAT"][i] + "<br>";
      }
      m_MNT[n + 1].innerHTML = T_1;
    }
  }
}

function CSSoko() {
  for (i = 0; i < EL_TBL["URED_SECTOR"].length; i++) {
    EL_TBL["URED_SECTOR"][i].style.backgroundColor = "aliceblue";
    EL_TBL["URED_SECTOR"][i].style.height = "unset";
  }
}
