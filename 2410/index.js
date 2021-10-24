function capitalize (str) {
    var splitWord = str.split(' ');
    var newArr = splitWord.map((index) => {
        return index.charAt(0).toUpperCase() + index.slice(1);
    });
    console.log(newArr);
    return newArr.join(' ');
}


capitalize('hi there, how is it going?');

