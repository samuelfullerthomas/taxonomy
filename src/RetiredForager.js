var RetiredForagerBee = function() {
	ForagerBee.call(this)
	this.age = 40
	this.color = 'grey'
	this.food = 'jelly'
	this.job = 'gamble'
	this.canFly = false
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype)
RetiredForagerBee.prototype.constructor = RetiredForagerBee
RetiredForagerBee.prototype.forage = function() {
	// body...
	return "I am too old, let me play cards instead"
};
RetiredForagerBee.prototype.gamble = function() {
	// body...
	this.treasureChest.push('1 beed dollar')
};