let keyTrainer = {
    
    chars: ['q', 'w', 'e', 'r', 't', 'y',
        'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h',
        'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],

    checkPositiveInteger : function (number) {
        return (number - Math.ceil(number) === 0) && (number > 0);
    },

    setCharCount: function () {
        do {
            let charCount = prompt('Введите количество символовов для ввода!');
            charCount = parseFloat(charCount);
        } while (!checkPositiveInteger(charCount))
        return charCount;
    },

    charCount: this.setCharCount()
};