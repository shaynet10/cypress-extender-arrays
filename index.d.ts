declare namespace Cypress {
    interface Chainable {
        map(callbackFn): Chainable<any[]>;
        reduce(callbackFn, initialValue?: any): Chainable<any>;
        every(callbackFn): Chainable<boolean>;
        join(delimiter?: string): Chainable<string>;
        reverse(): Chainable<any>;
        flat(depth?: number): Chainable<any[]>;
        indexOf(value: any, fromIndex?: number): Chainable<number>;
        lastIndexOf(value: any, fromIndex?: number): Chainable<number>;
        sort(compareFn?): Chainable<any>;
    }
}

