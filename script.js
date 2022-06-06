
document.getElementById("textbox").addEventListener('input', function(){
     var text = this.value;
     document.getElementById("character").innerHTML = text.length;


let wrd = text.split(" ");                            // convert a sentence into array
text = text.trim();                                  // nulify the gap at first and last in array
let cleanList = wrd.filter(function(elm){            // nulify the gap in the middle of any sentence
     return elm != '';
})
console.log(wrd);
document.getElementById("word").innerHTML = cleanList.length;

});

