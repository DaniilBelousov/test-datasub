abstract class AClass {
    numbers: number[];

    constructor(n: number) {
        this.numbers = new Array<number>(n);
        this.fill();
    }

    abstract sort(): number[];

    factorial() {
        const factorials: number[] = [];
        this.numbers.map((value) => factorials.push(this.calcFactorial(value)));
        return factorials;
    }

    private calcFactorial(n: number): number {
        let factorial = 1;

        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }

        return factorial;
    }

    private fill() {
        this.numbers = [...Array(this.numbers.length)].map(() => Math.round((Math.random() + 0.01) * 9));
    }
};

class Class1 extends AClass {
    // Bubble sort
    sort() {
        const factorials = this.factorial();
        let done = false;
        while (!done) {
            done = true;
            for (let i = 1; i < factorials.length; i++) {
                if (factorials[i - 1] > factorials[i]) {
                    done = false;
                    let tmp = factorials[i - 1];
                    factorials[i - 1] = factorials[i];
                    factorials[i] = tmp;
                }
            }
        }

        return factorials;
    }
}

class Class2 extends AClass {
    // Quick Sort
    sort() {
        const factorials = this.factorial();

        this.quicksort(factorials, 0, factorials.length - 1);

        return factorials;
    }

    private swap(arr: number[], i: number, j: number) {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }

    private quicksort(arr: number[], left: number, right: number) {
        if (left < right) {
            let pivot = arr[left + Math.floor((right - left) / 2)],
                left_new = left,
                right_new = right;

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
    }
}

const class1 = new Class1(15);


console.log("Class 1");
console.log(class1.numbers);
console.log(class1.factorial());
console.log("Bubble sort");
console.log(class1.sort());

const class2 = new Class2(15);

console.log("Class 2");
console.log(class2.numbers);
console.log(class2.factorial());
console.log("Quiq sort")
console.log(class2.sort());