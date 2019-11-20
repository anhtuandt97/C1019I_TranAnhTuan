let apple = new Apple(10);
let adam = new Human();
let adamWeight = document.getElementById("adam");
adam.checkApple(apple);
adam.setWeight(50);
adam.setName("Adam");
adam.setGender(true);

function adamEat() {
    adam.eat();
    adamWeight.innerText = "Tên:" + " " + adam.getName() + "\n"
        + "Cân nặng:" + " " + adam.getWeight() + "\n"
        + "Giới tính" + " " + adam.isMale() + "\n"
        + "Cân nặng của quả táo =" + " " + apple.getWeightApple() + "\n" +
        "Nói gì đó đi bạn:" + " " + adam.say();
};

let eva = new Human();
let evaWeight = document.getElementById("eva");
eva.checkApple(apple);
eva.setWeight(50);
eva.setName("Eva");
eva.setGender(false);

function evaEat() {
    eva.eat();
    evaWeight.innerText = "Tên" + " " + eva.getName() + "\n"
        + "Cân nặng" + " " + eva.getWeight() + "\n"
        + "Giới tính" + " " + eva.isMale() + "\n"
        + "Cân nặng của quả táo =" + " " + apple.getWeightApple() + "\n"
        + "Nói gì đó đi bạn:" + " " + eva.say();
};