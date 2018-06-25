function firstNonRepeatChar(str){
  var len = str.length,
      char, 
       charCount = {};
  for(var i =0; i<len; i++){
