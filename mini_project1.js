// Create a JavaScript program that takes a paragraph of text as input and counts the occurrences of each word in the paragraph. The program should display the word count in descending order, showing the most frequent words first.


let paragraph = prompt("Entrer a paragraph : ");
let words = paragraph.split(' ')

let wordCount = {};

for(const word of words)
{
    if(wordCount[word])
    {
        wordCount[word]++;
    }
    else
    {
        wordCount[word] = 1;
    }
}

let wordCountArray = [];
for(let word in wordCount){
    wordCountArray.push({word:word,count:wordCount[word]});
}

wordCountArray.sort((a,b)=> b.count-a.count);

console.log("Word list with count: ");
for(let item of wordCountArray)
{
    console.log(`${item.word} : ${item.count}`);
}
