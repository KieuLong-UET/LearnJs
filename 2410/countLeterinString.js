function equal_pt(str){ 
    // viết code ở đây.
    var arrOfp = str.split('p');
    var arrOft = str.split('t');
    console.log(arrOfp);
    console.log(arrOft);
    return arrOft.length === arrOfp.length;
   }

var example = equal_pt('what the puc you can tois sqp asjkasf');

console.log(example);