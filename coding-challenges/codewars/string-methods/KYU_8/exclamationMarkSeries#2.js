function remove(str) {
  while (str.endsWith("!")) {
    str = str.slice(0, str.lastIndexOf("!"));
  }
  return str;
}
