//Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

function solve(note,magazine)
{
    let possible = true;
    let words = {};

    let n = note.split(" ");

    let magazineSplit = magazine.split(" ");
    let m = magazineSplit.map(w =>
    {
        let wSplit = w.split("")
        return wSplit.filter(l => l!="." && l!=",").join("")

    })

    m.forEach(w => words[w] ? words[w]++ : words[w] = 1);


    for(word of n)
    {
        if (words[word] >=1)
        {
            words[word]--;
        }
        else
        {
            possible = false;
        }
               
    }

    return possible

}

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

console.log(solve("sit ad est sint in in in in",magazine))