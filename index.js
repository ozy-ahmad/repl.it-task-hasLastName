let list = document.getElementById("list-of-names")

//array of names
const name_list = [
  "Giorno Giovanna",
  "Guido Mista",
  "Bruno Bucciarati",
  "Narancia Girga",
  "Panacotta Fugo",
  "Abacchio",
  "Trish Una",
  "Diavolo",
];
const hasLastName = (names) => {
  let newArray = []


// let listName = name_list.split(' ')
// lastOfName = listName[listName.length-1]
// lastName=''

  // Your function here
  for (let i=0;i<names.length;i++) {
    let full = name[i].split(" ")
    let onlyFirstname = full[0]
    let lastName = full[1]
    if (lastName !== undifined) {
    newArray.push(names[i])
  }
  // lastOfName+= listName[i]
  // console.log(lastOfName+= listName[i])
}
return newArray;
}
let newArray = hasLastName(name_list)
console.log(newArray);
