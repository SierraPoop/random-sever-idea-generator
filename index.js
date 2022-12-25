var NumberOfWords = 45

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "Among Us"
words[2] = "Anarchy"
words[3] = "Bedwars"
words[4] = "BoxPvP"
words[5] = "Capture the Flag"
words[6] = "Dupe SMP"
words[7] = "Farming"
words[8] = "Fishing"
words[9] = "Generator"
words[10] = "Hide And Seek"
words[11] = "Hunger Games"
words[12] = "Kit PvP"
words[13] = "KnockbackFFA"
words[14] = "Lifesteal Dupe SMP"
words[15] = "Lifesteal SMP"
words[16] = "Lucky Block SMP"
words[17] = "Minigame"
words[18] = "Murder Mystery"
words[19] = "Network"
words[20] = "Normal SMP"
words[21] = "OP Lifesteal Dupe SMP"
words[22] = "OP Lifesteal SMP"
words[23] = "OP Lucky Block SMP"
words[24] = "OP Normal SMP"
words[25] = "OP Dupe SMP"
words[26] = "OneBlock"
words[27] = "PaintBall"
words[28] = "Parkour"
words[29] = "Pokemon"
words[30] = "Prison"
words[31] = "PvP Practice"
words[32] = "Random Kits"
words[33] = "Roleplay"
words[34] = "Shooter"
words[35] = "Skyblock"
words[36] = "Skymining"
words[37] = "Skywars"
words[38] = "Slimefun"
words[39] = "Spleef"
words[40] = "The Bridge"
words[41] = "Theme Park"
words[42] = "Towny"
words[43] = "UHC"
words[44] = "Zombies"
words[45] = "McMMO"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
