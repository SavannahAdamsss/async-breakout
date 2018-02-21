function bake(ingredients, eat) {
  // bake the cake
  const result = '🌮';
  // 40 minutes later
  if(eat) {
    setTimeout(function() {
      eat(result);
    }, 5000);
  }
}

bake(['🌯', '🍟', '🥖'], function(result) {
  console.log(result);
});
