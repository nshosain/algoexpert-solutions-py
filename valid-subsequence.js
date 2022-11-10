// find if the subsequence isa  valid sequence 

sequence = [11, 1, 22, 3, 9, 8, 5, 6]
subSequence = [1, 8, 9]

p1 = 0
p2 = 0

// time complexity O(n) | space complexity O(1)
function isValidSubsequence(seq, subSeq) {
    while (p2 < seq.length) {
        subSeq[p1] !== seq[p2] ? p2++ : p1++ && p2++
        if (p1 === subSeq.length) return true
    }
    return false
}

console.log(isValidSubsequence(sequence, subSequence))


