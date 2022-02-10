"use strict";
var words;
getWords();
async function getWords() {
    words = await fetch('words.json').then(response => { return response.json(); });
}
function generateLevel() {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmV0Y2guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9iaW4vZmV0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksS0FBSyxDQUFDO0FBQ1YsUUFBUSxFQUFFLENBQUE7QUFFVixLQUFLLFVBQVUsUUFBUTtJQUNuQixLQUFLLEdBQUcsTUFBTSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUUsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQTtBQUNoRixDQUFDO0FBRUQsU0FBUyxhQUFhO0FBRXRCLENBQUMifQ==