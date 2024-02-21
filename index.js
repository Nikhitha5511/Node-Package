const arrayUtils={
    getSum: function(arr) {
        return arr.reduce((acc, curr) => acc + curr, 0);
    },


    clearDuplicates: function(arr) {
        return [...new Set(arr)];
    },

    filterEvenNumbers: function(arr) {
        return arr.filter(num => num % 2 === 0);
    },

    findMax: function(arr) {
        return Math.max(...arr);
    },

    findMin: function(arr) {
        return Math.min(...arr);
    },

    areAllNumbers: function(arr) {
        return arr.every(num => typeof num === 'number');
    },

    reverseArray: function(arr) {
        return arr.reverse();
    },

    shuffleArray: function(arr) {
        return arr.sort(() => Math.random() - 0.5);
    },

    containsElement: function(arr, element) {
        return arr.includes(element);
    },

    getUniqueElements: function(arr) {
        return [...new Set(arr)];
    }
};


module.exports = arrayUtils;
