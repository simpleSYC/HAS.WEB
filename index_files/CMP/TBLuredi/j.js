Vue.component("takvite", {
  template: `<table id="uredi">
  
  <div id="Blanko" style="display:none;">
  <tr>
 <td>
    <button onclick="prikaz(this);" class="ured_select">
        <span class="STS_0"></span>
        <span class="STS_1"></span>
        <span class="STS_2"></span>
        <span class="STATUS_SIGNAL">•</span>
        <div class="SELECTED_URED_txt"></div>
    </button>
    <div class="URED_STNGS">
        <div class="SLIDERS">
          <div class="SLD_STALAZA_S_0">
            <input type="range" class="SLIDER_0">
            <span class="SIMBOL_0"></span>
        </div>
        <div class="SLD_STALAZA_S_1">
            <input type="range" class="SLIDER_1">
            <span class="SIMBOL_1"></span>
        </div>
        <div class="SLD_STALAZA_S_2">
            <input type="range" class="SLIDER_2">
            <span class="SIMBOL_2"></span>
        </div>
        <div class="STYL_STATUS" >
            <span class="MomentalSTATUS">momental<br>STATUS<br></span>
            <select onchange="CHANGE_statys(this);" class="Status_select">
            <option value="1">OK</option>
            <option value="2">LEER</option>
            <option value="3">KAPUT</option>
            <option value="4">PAUSA</option>
            <option value="5">CLEANING</option>
            <option value="6">REPAIR</option>
            <option value="7">For Sale</option>
            </select>
            <img class="FOTO_URED">
        </div>
        <div class="TBL_imenca">
            <span class="A0">I</span><span class="A1">I</span><span class="A2">L</span><span class="S_txt_2"></span>
            <br>
            <span class="B0">I</span><span class="B1">L</span><span class="B2">_</span><span class="S_txt_1"></span>
            <br>
            <span class="C0">L</span><span class="C1">_</span><span class="C2">_</span><span class="S_txt_0"></span>
        </div>
       </div>
       <div class="UPD">
           <span class="L_UPD"></span>
           <br>
           <span class="Q_UPD"></span>
       </div>
       <div class="TBL">
           <div class="M_TZE"></div>
           <div class="M_MNT"></div>
       </div>
    </div>
 </td>
</tr>
  
<select id="ova_da_se_daodava_funkcioloski_spored_parametarski">
<option value="1">OK</option>
<option value="2">LEER</option>
<option value="3">KAPUT</option>
<option value="4">PAUSA</option>
<option value="5">CLEANING</option>
<option value="6">REPAIR</option>
<option value="7">For Sale</option>
</select>

  </div>

  <tbody></tbody>

  </table>`,
});

var storeqqee = new Vuex.Store({
  state: {
    view: "takvite",
  },
});

var signqqee = new Vue({
  el: "#TBL_uredi",
  store: store,
});

let O = document.getElementById("uredi").children[1];

for (i = 1; i < 31; i++) {
  cl(O, i);
}

function cl(O, n) {
  var itm = document.getElementById("Blanko").children[0];
  let N = parseInt(n);
  itm.setAttribute("value", N);
  var cln = itm.cloneNode(true);
  O.appendChild(cln);
}
