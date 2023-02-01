// find if the subsequence is a  valid sequence

sequence = [11, 1, 22, 3, 9, 8, 5, 6];
subSequence = [1, 8, 6];

console.log(isValidSubsequence(sequence, subSequence));

// time complexity O(n) | space complexity O(1)
function isValidSubsequence(seq, subSeq) {
  subSequencePointer = 0;
  sequencePointer = 0;

  while (sequencePointer < seq.length) {
    seq[sequencePointer] !== subSeq[subSequencePointer]
      ? sequencePointer++
      : subSequencePointer++ && sequencePointer++;
    if (subSequencePointer === subSeq.length) return true;
  }
  return false;
}
