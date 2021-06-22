Vue.component("start_scrinot", {
  template: `<div>
<h3 id="TiTle" style="text-align:center;position: relative;margin-bottom: -3px;"></h3>
<img id="WELCOM_FOTO">
<p id="WELCOM_TXT" style="text-align: center;margin: 2px;"></p>
<div id="LOG_TOGEL">
<span style="top: 21px;left: 4%;position: absolute;">Login as :</span>

<span>user</span>
<label class="switch" style="top: 13px;"><input type="checkbox" class="akk_status" onchange="Prenasocuvac();"><span class="slider round"></span></label>
<span>admin</span> 

</div>
<br>
<br>
<br>
  <div id="Lin">
    <input type="email" placeholder="Email..." id="email_LogIn" />
    <input type="password" placeholder="Password..." id="password_LogIn" />
   <div>
    <button type="button"  onclick="login();">Login to Account</button> <hr>
    <button type="button"  onclick="SUP(true)">Sing Up</button>
   </div>

   
 <button type="button" id="PASS_RESET">Reset password</button>
 <button type="button" id="Contact_Suport">contact suport <i class="fa fa-comment-o"></i></button>

  </div>
    
  <div id="Sup" style="display:none;">

    <div id="Group_Code">
    <input type="text" id="GROUP_SingUp" placeholder="GROPA:" />
    <input type="text" id="COD_SingUp"   placeholder="COD:"  /></div>
        
    <input type="text"     placeholder="Username..." id="username_SingUp" />
    <input type="email"    placeholder="Email..."    id="email_SingUp"    />
    <input type="password" placeholder="Password..." id="password_SingUp" />
   <div>	
        <button type="button"  onclick="W8_4ERORS(this);" id="SIGNAP_BTN">Sing Up</button> <hr>
        <button type="button"  onclick="SUP(false);">back</button> 
  </div>
 </div>


 <div id="ADMI_pas_resetko" class="modal" style="display:none;"><!-- Modal content -->
 <div class="modal-content" style="margin-bottom: 200px;text-align:center;">
   <span class="close" onclick="this.parentElement.parentElement.style.display='none';">&times;</span>
   
<p>enter your log in <strong>EMAIL</strong> adresse:</p>
<input type="text" id="RESET_EMAIKO"><br>
<p>enter your <strong>GROUP</strong> invite log in code:</p>
<input type="text" id="INvAITKO_CODE"><br><br><br>

   <button type="button"  id="RestniAdminPass">send reset email</button>
   <button type="button"  id="CancelRSTprocedura">cancel</button>

 </div>
</div>

</div>`,
});

var store = "";
var storeqqee = new Vuex.Store({
  state: {
    view: "start_scrinot",
  },
});

var signqqee = new Vue({
  el: "#login_div",
  store: store,
});

function Prenasocuvac() {
  setTimeout(function () {
    window.name = window.location.toString();
    window.open("../ADMIN.HAS-SYC.system/index.html", "_self");
  }, 500);
}

document.getElementById("Contact_Suport").onclick = function () {
  let T =
    "for any question you can do folowwwing things:\n" +
    "pasword/usernam reset --> ask your local admin\n" +
    "chat with ceo --> ceo@email.com\n" +
    "specific adjastment --> cto@email.com \n" +
    "consulting --> info@email.com \n" +
    "Stoerseklerungs --> buro@email.com \n" +
    "Lizenca --> licenca@email.com \n" +
    "Sugestuiion somthing --> devops@email.com \n" +
    "visit https://HAS-SYC.system/FAQ for more info";
  alert(T);
};

const START_SCRN = {
  ubacenMAIL: document.getElementById("RESET_EMAIKO"),
  CHEK_U: document.getElementById("PRE_chek"),
  ERR_L_info: document.getElementById("PRE_info"),
  SND_PAS_RST: document.getElementById("RestniAdminPass"),
  PAS_DIV: document.getElementById("ADMI_pas_resetko"),
  RST_P_BTN: document.getElementById("PASS_RESET"),

  Exit_PAS_RST: document.getElementById("CancelRSTprocedura"),
};

START_SCRN["RST_P_BTN"].onclick = function () {
  START_SCRN["PAS_DIV"].style.display = "block";
};

START_SCRN["Exit_PAS_RST"].onclick = function () {
  START_SCRN["PAS_DIV"].style.display = "none";
};
START_SCRN["SND_PAS_RST"].onclick = function () {
  var auth = firebase.auth();
  let emailAddress = START_SCRN["ubacenMAIL"].value;
  auth
    .sendPasswordResetEmail(emailAddress)
    .then(function () {
      alert(
        "if eimail and/or invaid code are ok,\nwe will send automated paswor reset email to \n" +
          emailAddress +
          "\n\n if still any problem contact devolper \n REF# " +
          REF
      );
      // Email sent.
    })
    .catch(function (error) {
      alert(
        "Cant sent email to \n" +
          emailAddress +
          "\n" +
          "We have ERROR here... \n" +
          "PLSS cheak email and/or invite code for typing errors \n" +
          "Or maybe this acc is alredy deleted by admin/devolper \n\n" +
          "If still any problem, you can contact admin/devolper "
      );
      // An error happened.
    });
  START_SCRN["PAS_DIV"].style.display = "none";
};
