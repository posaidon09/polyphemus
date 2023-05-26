
global.Mathf = {
	
	chunkify: function(array, size) {
		const chunks = [];
	
		for (let i = 0; i < array.length; i += size) {
			const chunk = array.slice(i, i + size);
			chunks.push(chunk);
		};
		
		return chunks;
	},
	
	random: function(array) {
		return array[Math.floor(Math.random() * array.length)];
	},
	
}

class Extension {

    constructor() {
        this.name = "Mathf";
        this.description = "Math functions";
        this.version = { major: 1, minor: 1, patch: 1 };
    }

    ready() {
        return false
    }

    export() {
        return Mathf;
    }

}

module.exports = Extension;