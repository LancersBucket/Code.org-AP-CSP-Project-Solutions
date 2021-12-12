// Creates likes variable
var likes = 0;

// Decrements likes and puts it in likeCounterOutput
onEvent("downButton", "click", function( ) {
  likes = likes - 1;
  setProperty("likeCounterOutput","text","Likes: " + likes);
  playSound("sound://category_pop/puzzle_game_bonus_bubble_large_01.mp3");
});

// Increments likes and puts it in likeCounterOutput
onEvent("upButton", "click", function( ) {
  likes = likes + 1;
  setProperty("likeCounterOutput","text","Likes: " + likes);
  playSound("sound://category_pop/puzzle_game_bonus_bubble_large_01.mp3");
});

// Takes current text in allCommentsOutput and adds it to the value in newCommentInput
// Also resets newCommnetInput to be empty
onEvent("commentButton", "click", function( ) {
  setProperty("allCommentsOutput","text",getText("allCommentsOutput") + "\n" + getText("newCommentInput"));
  setProperty("newCommentInput","text","");
  playSound("sound://category_pop/puzzle_game_bonus_bubble_large_01.mp3");
});