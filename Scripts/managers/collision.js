var managers;
(function (managers) {
    var collision = /** @class */ (function () {
        function collision() {
        }
        //private instance variables
        //public properties
        //constructor
        //private mehtods
        //public methods
        collision.Check = function (object1, object2) {
            //check if object 1 is colliding with object 2
            if (!object2.IsColliding) {
                if (util.Vector2.Distance(object1.Position, object2.Position) < (object1.HalfHeight + object2.HalfHeight)) {
                    console.log("Colliding with " + object2.name);
                    object2.IsColliding = true;
                    switch (object2.name) {
                        case "island":
                            createjs.Sound.play("yaySound");
                            break;
                        case "cloud":
                            createjs.Sound.play("thunderSound");
                            break;
                    }
                }
            }
        };
        return collision;
    }());
    managers.collision = collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map