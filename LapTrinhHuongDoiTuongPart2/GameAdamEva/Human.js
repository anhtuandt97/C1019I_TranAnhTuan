let Human = function () {
    // this.apple = function () {
    //     return this.apple;
    // };
    this.setWeight = function (weight) {
        this.weight = weight ;
    };
    this.isMale = function () {
        return this.gender == true ? "male" : "female";
    };

    this.setGender = function (gender) {
        this.gender = gender;
    };

    this.checkApple = function (apple) {
        this.apple = apple;
    };

    this.eat = function () {
        if (this.apple.weightApple>0) {
            this.apple.decrease();
             this.weight ++;
        }
    };

    this.say = function () {
        return "Hello";
    };

    this.setName = function (name) {
        this.name = name;
    };

    this.getName = function () {
        return this.name;
    };

    this.getWeight = function () {
        return this.weight;
    };
}