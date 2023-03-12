const initialEmojis = ["👨‍💻", "⛷", "🍲"]
let myEmojis = JSON.parse(localStorage.getItem("myEmojis")) || initialEmojis

const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const deletebtn =document.getElementById("delete-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
    localStorage.setItem("myEmojis",JSON.stringify(myEmojis))
}

renderEmojis()

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})

deletebtn.addEventListener("click",function(){
    localStorage.clear();
})


