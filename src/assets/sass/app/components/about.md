# Components

Components are larger building blocks of a website - these are roughly equivalent to the blocks in BEM syntaxing. Components can contain other objects and components. Components are context aware.


> Components are some of the safest types of selectors we will encounter. Components are finite, discrete, implementation-specific parts of our UI that most people (users, designers, developers, the business) would be able to identify: This is a button; This is the date picker; etc.
>
> Usually when we make changes to a Component’s ruleset, we will immediately see those changes happening every- (and only) where we’d expect. Unlike with Objects, changing the padding on the .c-modal__content should not affect anything else in the site other than the content area of our modal. Where Objects are implementation-agnostic, Components are implementation-specific.


From [More Transparent UI Code with Namespaces](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)
