const e=()=>globalThis.env,s="Show help message";var o=async()=>e().commands.map(n=>`  - ${n.name}	${n.description?`(${n.description})`:""}`).join(`
`);export{s as _description_,o as default};
