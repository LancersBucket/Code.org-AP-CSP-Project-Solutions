var likes = 0;

onEvent("downButton", "click", function( ) {
  likes = likes - 1;
  setProperty("likeCounterOutput","text","Likes: " + likes);
  playSound("sound://category_pop/puzzle_game_bonus_bubble_large_01.mp3");
});

onEvent("upButton", "click", function( ) {
  likes = likes + 1;
  setProperty("likeCounterOutput","text","Likes: " + likes);
  playSound("sound://category_pop/puzzle_game_bonus_bubble_large_01.mp3");
});

onEvent("commentButton", "click", function( ) {
  setProperty("allCommentsOutput","text",getText("allCommentsOutput") + "\n" + getText("newCommentInput"));
  setProperty("newCommentInput","text","");
  playSound("sound://category_pop/puzzle_game_bonus_bubble_large_01.mp3");
});
