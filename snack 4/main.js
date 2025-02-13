console.log("say hi")
const number = []
for (let i = 0; i < 2; i++) {
    const usernumb = number.push(prompt("write number"));
    console.log(usernumb)
    if (usernumb % 2 === 0) {
        console.log(usernumb + "odd")
    }
} 