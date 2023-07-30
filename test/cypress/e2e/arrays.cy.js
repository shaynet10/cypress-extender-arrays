import '../../../src/index';

describe('arrays', () => {
    before(() => {
        cy.visit('https://www.google.com/');
    });
    
    it('test map for element', () => {
        cy.get('a').map(e => e.text()).then(array => {
            cy.wrap(array.every(v => typeof v === 'string')).should('be.true');
        });
    });

    it('test map for array', () => {
        cy.wrap([11,22,33]).map(e => e + 5).then(array => {
            cy.wrap(array[0]).should('eq', 16);
            cy.wrap(array[1]).should('eq', 27);
            cy.wrap(array[2]).should('eq', 38);
        });
    });

    it('test sort', () => {
        cy.wrap([1,5,6,8,5,3,2,6,8]).sort().should('deep.eq', [1,2,3,5,5,6,6,8,8]);
    });

    it('test flat', () => {
        cy.wrap([0,1,2,3,[4,5],[6],[[7]],[8,[9]]]).flat(2).should('deep.eq', [0,1,2,3,4,5,6,7,8,9]);
    });

    it('test indexOf', () => {
        cy.wrap([5,6,7,8,9,7]).indexOf(7).should('deep.eq', 2);
        cy.wrap([5,6,7,8,9,7]).indexOf(7, 2).should('deep.eq', 2);
        cy.wrap([5,6,7,8,9,7]).indexOf(7, 3).should('deep.eq', 5);
        cy.wrap([5,6,7,8,9,7]).indexOf(5).should('deep.eq', 0);
        cy.wrap([5,6,7,8,9,7]).indexOf(2).should('deep.eq', -1);
    });

    it('test last indexOf', () => {
        cy.wrap([5,6,7,8,9,7]).lastIndexOf(7).should('deep.eq', 5);
        cy.wrap([5,6,7,8,9,7]).lastIndexOf(7, 2).should('deep.eq', 2);
        cy.wrap([5,6,7,8,9,7]).lastIndexOf(7, 3).should('deep.eq', 2);
        cy.wrap([5,6,7,8,9,7]).lastIndexOf(5).should('deep.eq', 0);
        cy.wrap([5,6,7,8,9,7]).lastIndexOf(2).should('deep.eq', -1);
    });


    it('test every prevSubjet is array', () => {
        cy.get('a').map(e => e.text()).every(v => typeof v === 'string').should('be.true');
    });

    it('test every prevSubjet is element', () => {
        cy.get('a').every(e => typeof e.text() === 'string').should('be.true');
    });

    it('test join texts are given', () => {
        cy.get('a').map(e => e.text()).join("HOWAREYOU").should('include', 'HOWAREYOU');
    });

    it('test join elements are given', () => {
        cy.get('a').join("HOWAREYOU").should('equal', '');
    });

    it('test array reduce with array', () => {
        cy.get('a').map(e => e.text()).reduce((acc, val) => {
            acc.push(val[0]);
            return acc;
        }, []).should('have.length.gt', 0);
    });

    it('test array reduce with string', () => {
        cy.get('a').map(e => e.text()).reduce((acc, val) => {
            acc += val[0] || '';
            return acc;
        }, '').should('have.length.gt', 0);
    });

    it('test array reduce with number', () => {
        cy.get('a').map(e => e.text()).reduce((acc, val) => acc += val.length, 0)
        .should('be.gt', 0);
    });

    it('test array reverse', () => {
        cy.get('a').map(e => e.text()).reverse().then(values => {
            cy.get('a').reverse().map(e => e.text()).should('deep.eq', values);
        });
    });
});

