let sentence = 'The quick brown fox jumps over the lazy dog.';

let word = 'java';

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? 'is' : 'is not'
  } in the sentence`,
);