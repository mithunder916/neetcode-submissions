class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // validPalindrome(s) {
    //     // two pointers
    //     // track whether we have deleted yet. If not and there's no match:
    //         // try moving either pointer and see if there's a match
        
    //     let left = 0;
    //     let right = s.length - 1;
    //     let deleted = false;

    //     while (left < right) {
    //         if (s[left] !== s[right]) {
    //             console.log('no match', left, right, s[left], s[right])
    //             if (!deleted) {
    //                 // compare to character one ahead, then increment
    //                 if (s[left + 1] === s[right]) {
    //                     left++;
    //                 } else if (s[right - 1] === s[left]) {
    //                     right--;
    //                 }
    //                 // if no match one character ahead, fail 
    //                 else return false;
    //                 // update deleted state
    //                 deleted = true;
    //             }
    //             // already deleted a character 
    //             else return false;
    //         }
    //         left++;
    //         right--;
    //     }

    //     return true;
    // }

     validPalindrome(s) {
        function isPalin(s,l,r) {
      while (l < r) {
          if (s[l] !== s[r]) return false;
          l++;
          r--;
      }
      return true;
  }
      let left = 0;
      let right = s.length - 1;

      while (left < right) {
          if (s[left] !== s[right]) {
              return isPalin(s, left + 1, right) || isPalin(s, left, right - 1);
          }
          left++;
          right--;
      }
      return true;
  }
}
