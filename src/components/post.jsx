<div>
    <button id='like'>Like</button>
    <button id='dislike'>Dislike</button>
</div>
function likeButtonClicked() {
    console.log('Like Button Clicked');
}
function dislikeButtonClicked() {
    console.log('Dislike Button Clicked');
}

document.getElementById('like').onClick = likeButtonClicked;
document.getElementById('dislike').onClick = dislikeButtonClicked;
