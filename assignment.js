function dupSorter(arr) {
  var dups = [];

  for (const item of arr) {
    for (let i = 1; i < item.length; i++) {
      if (item[i - 1] === item[i]) {
        dups.push(item);
        break;
      }
    }
  }

  dups.forEach((item) => {
    console.log(item);
  });
}

var newArr = [
  "green apple",
  "apple",
  "orange",
  "papaya",
  "grapes",
  "watermelon",
  "blackcurrant",
  "raspberry",
  "strawberry",
];

dupSorter(newArr);
