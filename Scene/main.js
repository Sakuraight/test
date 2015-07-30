enchant();

window.onload = function (){
	var game = new Game(320, 320);
	game.fps = 30;
	game.preload('logo.png');
	game.onload = function (){
		var logo = new Scene();

		var sprite = new Sprite(32, 32);
		sprite.image = game.assets['logo.png'];
		logo.addChild(sprite);

		game.addEventListener('enterframe', function (){
			sprite.x += 1;
		});
		game.pushScene(logo);

		sprite.addEventListener("touchend", function (){
			sprite.y += 1;
		});

	};
	game.start();
};