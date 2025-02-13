const word1 = prompt("insert word")
const word2 = prompt("insert second word")


if (word1.length > word2.length) {
    console.log(word1 + "" + word2)
} else if (word2.length > word1.length) {
    console.log(word2 + "" + word1)
}