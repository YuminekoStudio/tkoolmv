(function() {

	var createUpper = Spriteset_Map.prototype.createUpperLayer;
	Spriteset_Map.prototype.createUpperLayer = function() {
		createUpper.call(this);
		
		var sprite = new Sprite();
		sprite.bitmap = ImageManager.loadEnemy('Succubus');
		sprite.x = 10;
		sprite.y = 10;
		sprite.visible = true;
		this.addChild(sprite);
	}

})();