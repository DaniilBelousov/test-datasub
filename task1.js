var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var AClass = /** @class */ (function () {
    function AClass(n) {
        this.numbers = new Array(n);
        this.fill();
    }
    AClass.prototype.factorial = function () {
        var _this = this;
        var factorials = [];
        this.numbers.map(function (value) { return factorials.push(_this.calcFactorial(value)); });
        return factorials;
    };
    AClass.prototype.calcFactorial = function (n) {
        var factorial = 1;
        for (var i = 1; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    };
    AClass.prototype.fill = function () {
        this.numbers = __spreadArray([], Array(this.numbers.length), true).map(function () { return Math.round((Math.random() + 0.01) * 9); });
    };
    return AClass;
}());
;
var Class1 = /** @class */ (function (_super) {
    __extends(Class1, _super);
    function Class1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Bubble sort
    Class1.prototype.sort = function () {
        var factorials = this.factorial();
        var done = false;
        while (!done) {
            done = true;
            for (var i = 1; i < factorials.length; i++) {
                if (factorials[i - 1] > factorials[i]) {
                    done = false;
                    var tmp = factorials[i - 1];
                    factorials[i - 1] = factorials[i];
                    factorials[i] = tmp;
                }
            }
        }
        return factorials;
    };
    return Class1;
}(AClass));
var Class2 = /** @class */ (function (_super) {
    __extends(Class2, _super);
    function Class2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Quick Sort
    Class2.prototype.sort = function () {
        var factorials = this.factorial();
        this.quicksort(factorials, 0, factorials.length - 1);
        return factorials;
    };
    Class2.prototype.swap = function (arr, i, j) {
        var t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    };
    Class2.prototype.quicksort = function (arr, left, right) {
        if (left < right) {
            var pivot = arr[left + Math.floor((right - left) / 2)], left_new = left, right_new = right;
            do {
                while (arr[left_new] < pivot) {
                    left_new += 1;
                }
                while (pivot < arr[right_new]) {
                    right_new -= 1;
                }
                if (left_new <= right_new) {
                    this.swap(arr, left_new, right_new);
                    left_new += 1;
                    right_new -= 1;
                }
            } while (left_new <= right_new);
            this.quicksort(arr, left, right_new);
            this.quicksort(arr, left_new, right);
        }
    };
    return Class2;
}(AClass));
var class1 = new Class1(15);
console.log("Class 1");
console.log(class1.numbers);
console.log(class1.factorial());
console.log("Bubble sort");
console.log(class1.sort());
var class2 = new Class2(15);
console.log("Class 2");
console.log(class2.numbers);
console.log(class2.factorial());
console.log("Quiq sort");
console.log(class2.sort());
