/*let valores = [8,1,7,4,2]

for(let pos = 0;pos < valores.length; pos++) {
    console.log(`valores ${valores[pos]} vetores sao ${pos}`)
}
*/

let valores = [8,1,7,4,2]
valores.sort()
for (let pos in valores) {
    console.log(`valores ${valores[pos]} vetores sao ${pos}`)
}
