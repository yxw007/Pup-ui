import { createApp } from "vue/dist/vue.esm-browser";
// import PButton from "./button";
// import SFCButton from "./SFCButton.vue";
// import JSXButton from "./JSXButton";

// createApp(JSXButton).mount("#app");

import PupUI from './entry'

createApp({
	template: `
	 <div>
         <SButton color="blue" round plain icon="search" ></SButton>
         <SButton color="green" round plain icon="edit" ></SButton>
         <SButton color="gray" round plain icon="check" ></SButton>
         <SButton color="yellow" round plain icon="message" ></SButton>
         <SButton color="red" round plain icon="delete" ></SButton>
     </div>
	`
})
	.use(PupUI)
	.mount("#app");
