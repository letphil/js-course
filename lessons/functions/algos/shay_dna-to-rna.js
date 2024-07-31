// /
//  * Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
//  */

// — — <> — Create a Function Turns Letter "T" to Letter "U" — — //
function DNAtoRNA(dna) {
  findT(dna);
  replaceT(dna);
}

// — — <> — Function to Find Letter "T" — <> — — //
function findT(dna) {
  if (dna.includes("T")) {
    console.log("The Letter T exist in this string:");
  } else {
    console.log("No T, move on");
    return;
  }
}

// — — — <> — TESTING: Function findT(string) //
// findT("GCAU")

// — — <> — Function to Replace "T"
function replaceT(dna) {
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      let changeU = dna.replace("T", "U");
      dna = changeU;
    } else {
      console.log("No Conversion Necessary");
    }
  }
  console.log("Convert DNA to RNA: ", dna);
}

// — — — <> — TESTING: FUnction replaceT(dna)
// replaceT("GCAT");

// — — <> — Create a Function Turns Letter "T" to Letter "U" — — //
DNAtoRNA("GCAT");

// /
//     assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
//     assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
//     assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
//  */
