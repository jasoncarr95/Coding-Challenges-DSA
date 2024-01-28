/*  Day 5 (from Wed 10/5) Completed Thurs 10/6

    rules:
        - no empty spaces at start or end
        - cant contain "dog", "bark", or "bone" (case-insensitive)
        - length of pun(including spaces and punctuation) cant be a multiple of 5 
        - sum of charcodes of 1st and last char must be odd 
        - char directly after middle of string cant be "e"  char to check "center"="t" "weird"="r"
        - must have even num of lowercase letters (dont count punc or spaces)
        - must have 2 capital letters 
        - must not contain capital 'S'

    PARAM: string: comma separated list of submissions
    RETURN: arr? list of strings that made the cut


    PSEUDO: 
        - giant function with sub-functions used to check each rule
        - split input string into arr by CSV
        - return arr of filtered strings (ones that passed all tests)
*/

const catPunSubmissions =
  "The Pawshank Redemption,Caturday Night Live,Only Meworders in the Building,I Love Mewcy, Mewsummer Meowders,The Golden Purrs, Purrlandia ,Meowpardy, Meowstery Science Theater: Purrthousand, Amewican Idol,Dog City,Doctor Mew , The Meowing Fed,Mew Peter,The Vicar of Dogley, Kittens,Meownton Abbey,Pets and the Kitty,Dogis and Bonehead,Pawlty Meowers ,The Meowpet Show,Barkos,The Catbert Purrport,The Pawffice,The Dogford Files, Battlestar Catlactica,Catlumbo,SpongeDog Squarepants,NYPD Mew ,Fluffy the Meowpire Purrer,The Inbemewners,Meowder She Wrote,Paw & Order,30 Dog, Pawvatar: The Last Meowbender,The Pawnight Show,Arrested Dogvelopment,Furiends,Mewie,Curb Your Dogthusiasm,Teenage Mewtant Ninja Turtles,Phineas and Purrb,Paw Trek, Paw Trek: The Next Mewination, Twin Mewks, *C*A*T*S*,DogTales, Game of Bones, House of the Meowgon,The Purrlight Zone,Breaking Bone,The Meowre,The Dogpranos,The Rings of Meower, The KIT Crowd,Strangepaw Things ,Catman: The Animeowted Series,Meowter Call Saul,Mewgerton ,Obark,Mewphoria,La Casa de Pawpel,Rick & Meowty,Amewican Purror Story, Mewcifer,PawndaVision,Dogxter,The Meowndalorian, Dog Lasso,Bark,Meowdern Pawmily , Meowtlander,Bone Mirror,Barks and Recreation,How to Get Away with Meowder,Boneland ,Meowther Ted,Mewtopia,Mewey,The Mewkie Meowse Doghouse,Mewster Rogers' Neighborhood";

const checkCatPunSubmissions = (submissions) => {
  submissions = submissions.split(",");
  console.log(submissions.length);
  // no empty spaces at start/end
  submissions = submissions.filter(
    (submission) => !submission.startsWith(" ") && !submission.endsWith(" "),
  );
  console.log(submissions.length);

  // no dog/bark/bone
  submissions = submissions.filter(
    (submission) =>
      !submission.toLowerCase().includes("dog") &&
      !submission.toLowerCase().includes("bark") &&
      !submission.toLowerCase().includes("bone"),
  );
  console.log(submissions.length);

  // total length != multiple of 5
  submissions = submissions.filter((submission) => submission.length % 5 != 0);
  console.log(submissions.length);

  // sum of charCodes at 1st & last chars is odd
  const checkCharCodes = (submission) => {
    let sumFirstAndLastCharCodes =
      submission.charCodeAt(0) + submission.charCodeAt(submission.length - 1);
    return sumFirstAndLastCharCodes % 2 !== 0;
  };
  submissions = submissions.filter((submission) => checkCharCodes(submission));
  console.log(submissions.length);

  // check char after middle char != "e"
  const afterMiddleCharIsntE = (str) => {
    let middle = Math.round(str.length / 2);
    let charToCheck = str.charAt(middle);
    return charToCheck.toLowerCase() !== "e";
  };
  submissions = submissions.filter((submission) =>
    afterMiddleCharIsntE(submission),
  );
  console.log(submissions.length);

  // must have even number of lowercase letters (dont include punc/spaces)
  const getNumOfLowerCases = (str) => {
    let numLowerCase = str
      .split("")
      .filter(
        (char) => char.toLowerCase() === char && char.toUpperCase() !== char,
      ).length;
    return numLowerCase;
  };
  submissions = submissions.filter(
    (submission) => getNumOfLowerCases(submission) % 2 === 0,
  );
  console.log(submissions.length);

  // must have 2+ capital letters
  const getNumOfUpperCases = (str) => {
    let numUpperCase = str
      .split("")
      .filter(
        (char) => char.toUpperCase() === char && char.toLowerCase() !== char,
      ).length;
    return numUpperCase;
  };
  submissions = submissions.filter(
    (submission) => getNumOfUpperCases(submission) >= 2,
  );
  console.log(submissions.length);

  // no capital "S"
  const containsS = (str) => {
    return str.includes("S");
  };
  submissions = submissions.filter((submission) => !containsS(submission));
  console.log(submissions.length);

  return submissions;
};

console.log(checkCatPunSubmissions(catPunSubmissions));

// checkCatPunSubmissions(catPunSubmissions);
