module util{
    export class Vector2 extends createjs.Point{
        //private instance variables

        //public properties

        //constructor
        constructor(x:number = 0, y:number = 0){
            super(x,y);
        }

        //private mehtods

        //public methods
        /**
         * This mehtod returns the Euclidean Distance between vec1 and vec2
         * 
         * @static
         * @param {util.Vector2} vec1
         * @param {util.Vector2} vec2
         *@returns {number}
         */

        public static Distance(vec1:util.Vector2, vec2:util.Vector2){
            return Math.floor(Math.sqrt(Math.pow(vec2.x - vec1.x,2) + Math.pow(vec2.y - vec1.y,2)))
        }

        /**
         * This method adds
         * 
         * @static
         * @param vec1 
         * @param vec2
         * @returns 
         */
        public static Add(vec1:util.Vector2, vec2:util.Vector2):util.Vector2 {
                let result:util.Vector2 = new util.Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
                return result;
        }

        /**
         * This method subtracts
         * 
         * @static
         * @param vec1 
         * @param vec2 
         * @returns
         */
        public static Subtract(vec1:util.Vector2, vec2:util.Vector2):util.Vector2 {
            let result:util.Vector2 = new util.Vector2(vec1.x - vec2.x, vec1.y - vec2.y);
            return result;
    }
        
    }
}