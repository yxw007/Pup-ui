import { defineComponent, createVNode, openBlock, createElementBlock, createTextVNode } from "vue";
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  icon: {
    type: String,
    default: ""
  }
};
const MyButton = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
      py-2 
      px-4 
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
			bg-${props2.color}-500 
      hover:bg-${props2.color}-700
      border-none 
      cursor-pointer 
      `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const _sfc_main = {
  name: "SFCButton"
};
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", null, "SFC Button");
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSX Button A")]);
  }
});
const entry = {
  install(app) {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  }
};
export {
  JSXButton,
  MyButton,
  SFCButton,
  entry as default
};
