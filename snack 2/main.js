const word1 = prompt("insert word")
const word2 = prompt("insert second word")


if (word1.length > word2.length) {
    console.log(word1 + " " + word2 + " " + "first word is longer")
} else if (word2.length > word1.length) {
    console.log(word2 + " " + word1 + " " + "second word is longer")
} else if (word2.length = word1.length) {
    console.log(`names are equal`)
}


