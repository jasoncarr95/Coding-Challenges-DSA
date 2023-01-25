// Suzuki-needs help-lining-up-his-students!-KYU-7
/*
        input: string of names
        output: arr of names sorted by length in desc order
    */
/*  PSEUDO
        - split str into an array of students
        - sort by length 
    */
console.log(
  lineupStudents(
    "Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi"
  )
);
// ['Takehiko','Takayuki','Takahiro','Takeshi', 'Takeshi','Takashi','Tadashi','Takeo','Takao']

function lineupStudents(students) {
  return students
    .split(" ")
    .sort((a, b) => b.length - a.length || b.localeCompare(a));
}
