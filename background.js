chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
});

chrome.storage.sync.set({name: 'annoto'}, () => {
	chrome.storage.sync.get(['name'], (res) => {
		console.log(`Name is ${res.name}`);
	});
});

