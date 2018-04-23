var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period. "
var dinosaur = "Triceratops"
var NameUppercased = dinosaur.toUpperCase();
console.log(NameUppercased);
var changed = text.replace("Velociraptor" , "Triceraptors");
console.log(changed);
var length = changed.substr(0, 73);
console.log(length);

