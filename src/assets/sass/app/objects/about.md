# Objects

The smallest building blocks of a website. They cannot contain other objects or components. They are context independent.


> OOCSS is fantastic in that it teaches us to abstract out the repetitive, shared, and purely structural aspects of a UI into reusable objects. This means that things like layout, wrappers and containers, the Media Object, etc. can all exist as non-cosmetic styles that handle the skeletal aspect of a lot of UI components, without ever actually looking like designed ‘things’.
>
> ...
>
> Because objects don’t belong to any one specific component, and can underpin several vastly different components, it is incredibly risky to ever modify one. This is why we should introduce a namespace, to let other developers know that this class forms an abstraction and that any changes here will be reflected in every object sitewide. The object itself does not necessarily have anything to do with the implementation-specific bit of the UI that you are trying to change.
>
> By adding a leading o- to the classes for our objects, we can tell other developers about their universal nature, and hopefully avoid ever having people binding onto them and breaking things. If you ever see a class that begins with o-, alarm bells should ring and you should know to stay well away from it.


From [More Transparent UI Code with Namespaces](https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)
