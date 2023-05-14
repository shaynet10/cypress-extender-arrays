declare namespace Cypress {
    interface Chainable {
        map(callbackFn): Chainable<any[]>;
        reduce(callbackFn, initialValue?: any): Chainable<any>;
        every(callbackFn): Chainable<boolean>;
        join(delimiter?: string): Chainable<string>;
        reverse(): Chainable<any>;
    }
}

