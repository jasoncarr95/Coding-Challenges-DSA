function aliasGen(first, last) {
    first = first.toUpperCase()[0];
    last = last.toUpperCase()[0];

    if (firstName[first] && surname[last]) {
        return `${firstName[first]} ${surname[last]}`;
    } else return "Your name must start with a letter from A - Z.";
}
