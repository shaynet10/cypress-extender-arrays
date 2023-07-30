<h1> cypress-extender-arrays </h1>

<p>adds pure JS array functions to Cypress</p>
<br />
<br />

<h2> Installation </h2>
<br />
<p>To install the plugin to your project please use:</p>

```javascript
npm install cypress-extender-arrays
```

<br />
<p>or use:</p>


```
yarn add cypress-extender-arrays
```

<br />

<h2>Manual</h2>

Once cypress-extender-arrays is installed use:

``` javascript
import 'cypress-extender-arrays';

```

<br />


Or use: 

``` javascript
        require('cypress-extender-arrays');

```


Or add it to the plugin file.

<br />
<br />

<h2>Usage</h2>
Once you done, you'll be able to enjoy the following Cypress commands:


<br />
<br />

<h3> Map function </h3>

<p> When you get Cypress Chainable elements</p>
<p>you can use the JS map function, </p>
<p>with a callback function to call on each element</p>
<p>of the returned elements from the previous chainable command.</p>


``` javascript
        cy.get('li').map(e => e.text().trim()).then(texts => {
            cy.log('Texts are: ', texts);
        });
```

<br />
<p>Another example (previous element is an array): </p>

``` javascript
        cy.wrap([11,22,33]).map(e => e + 5).then(array => {
            cy.wrap(array[0]).should('eq', 16);
            cy.wrap(array[1]).should('eq', 27);
            cy.wrap(array[2]).should('eq', 38);
        });
```



<br />
<br />


<h2> Reduce function </h2>

<p> When you get Cypress Chainable elements</p>
<p>you can use the JS reduce function, </p>
<p>with a callback function to call on each element</p>
<p>of the returned elements from the previous chainable command.</p>



``` javascript
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
```

<br />
<br />


<h2> Every function </h2>

<p> When you get Cypress Chainable elements</p>
<p>you can use the JS every function, </p>
<p>with a callback function to call on each element</p>
<p>it returns chainable true if the callback returned true for all elements, otherwise it returns false.</p>


Use: 


``` javascript

it('test that every from the prevSubjet is a string', () => {
    cy.get('a').map(e => e.text()).every(v => typeof v === 'string').should('be.true');
});

```

<br />
<br />


<h2> Join function </h2>

<h3> What is join function ?</h3>

<p> When you get Cypress Chainable elements with string values</p>
<p>you can use the join function, </p>
<p>exactly as you do in a normal JS</p>

<p> which returns a joined string from the array of strings</p>
<p><b>NOTICE: </b> when you use chainable which is not a strings array, the joined value will be ''</p>

Use: 


``` javascript
it('test join texts are given', () => {
    cy.get('a').map(e => e.text()).join("HOWAREYOU").should('include', 'HOWAREYOU');
});


```

<br />
<br />


<h2> Reverse function </h2>

<h3> What is reverse function ?</h3>

<p> When you get Cypress Chainable elements with values</p>
<p>you can use the reverse function, </p>
<p>exactly as you do in a normal JS</p>

<p> which returns an array with the values reversed</p>

Use: 


``` javascript

    it('test array reverse', () => {
        cy.get('a').map(e => e.text()).reverse().then(values => {
            cy.get('a').reverse().map(e => e.text()).should('deep.eq', values);
        });
    });


```

