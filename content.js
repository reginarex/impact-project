function onmouseup(e) {
	t = document.getSelection().toString();
	console.log(t);
}
document.onmouseup = onmouseup;
