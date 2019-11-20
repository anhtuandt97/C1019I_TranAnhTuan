let Apple = function (weightApple) {
    this.weightApple = weightApple;
    this.getWeightApple = function () {
        return this.weightApple;
    };
    this.decrease = function () {
        if (this.weightApple >0 ) {
            this.weightApple--;
        }
    };
    // this.isEmpty = function () {
    //     if (this.weightApple==0) {
    //         return this.empty = true;
    //     }
    // };
};