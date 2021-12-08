import{g as e}from"./getEnv.28f61c54.js";const o="Show help message";var t=async()=>e().commands.map(n=>`  - ${n.name}	${n.description?`(${n.description})`:""}`).join(`
`);export{o as _description_,t as default};
