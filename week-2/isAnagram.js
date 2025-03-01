/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function sortingString(str){
    return str.split('').sort().join('').toLowerCase()
  }
  
  function isAnagram(str1, str2) {
    let sortstrone = sortingString(str1)
    let sortstrSec = sortingString(str2)
    if(sortstrone === sortstrSec){
      return true 
    }else{
      return false
    }
  }
  isAnagram('wasee','seewa')
  module.exports = isAnagram;