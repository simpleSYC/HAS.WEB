Vue.component("btns_actions", {
  template: `<div>
    <div>
      <button type="button" id="save_b">Save all changes</button> 
      <button type="button" id="logout_b">Log Out</button>
    </div>
      <button type="button" id="refresh_b">Refresch <br> data</button> 
</div>`,
});

var storeqqee = new Vuex.Store({
  state: {
    view: "btns_actions",
  },
});

var signqqee = new Vue({
  el: "#BTNS_ACTIONS",
  store: store,
});
