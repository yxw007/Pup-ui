import { defineComponent, h } from "vue";

export default defineComponent({
	name: "PButton",
	// template:'<button>MyButton</button>'
	render() {
		return h("button", null, "MyButton");
	},
});
