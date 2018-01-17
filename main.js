let keyTrainer = {

    chars: ['q', 'w', 'e', 'r', 't', 'y',
        'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h',
        'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],

    checkPositiveInteger : function (number) {
        return (number - Math.ceil(number) === 0) && (number > 0);
    },

    charCount : null,

    setCharCount: function() {
        do {
            let charCount = prompt('Введите количество символовов для ввода!');
            this.charCount = parseFloat(charCount);
        } while (!this.checkPositiveInteger(this.charCount));
    },

    task : [],

    createTask : function() {
        charCount = this.charCount;
        let i = 0;
        while (i < charCount) {
            let rand = Math.floor(Math.random()*this.chars.length);
            this.task.push(this.chars[rand]);
            i++;
        }
    },

    startTask : function() {
        let userInput = null;
        do{
            userInput = prompt (`${this.task}. Наберите эти символы 
            (без запятых и пробелов)`);
        } while (userInput === null || userInput == undefined || userInput == "");
        this.userInput = userInput;
        let userErrors = 0;
        userInput = userInput.split('');
        for (let i=0; i < this.task.length; i++) {
            if (userInput[i] != this.task[i]) {
                userErrors++;
            }
        }
        if (userErrors == 0) {
            console.log('Поздравляем! Все символы совпали! Не каждому это под силу!');
        } else if (userErrors > 0) {
            console.log('Количество ошибок: ' + userErrors);
        }
    },

    run : function() {
        this.setCharCount();
        this.createTask();
        this.startTask();
    }
};
keyTrainer.run();