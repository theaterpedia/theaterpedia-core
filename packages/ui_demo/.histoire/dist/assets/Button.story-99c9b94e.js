import { as as defineComponent, at as openBlock, au as createElementBlock, av as renderSlot, aw as createTextVNode, ax as resolveComponent, ay as createBlock, az as withCtx, aA as createVNode } from "./vendor-ba178dad.js";
const Button_vue_vue_type_style_index_0_scoped_b534b83e_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    disabled: { type: Boolean, required: false }
  },
  emits: ["submit"],
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["disabled"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: "btn",
    disabled: $props.disabled,
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("submit"))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createTextVNode("Button")
    ], true)
  ], 8, _hoisted_1);
}
_sfc_main$1.__file = "components/Button.vue";
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-b534b83e"], ["__file", "/home/persona/crearis/theaterpedia-core/packages/ui_demo/components/Button.vue"]]);
const _sfc_main = {
  __name: "Button.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { Button };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, null, {
    default: withCtx(() => [
      createVNode($setup["Button"])
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "components/Button.story.vue";
const Button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/persona/crearis/theaterpedia-core/packages/ui_demo/components/Button.story.vue"]]);
export {
  Button_story as default
};
