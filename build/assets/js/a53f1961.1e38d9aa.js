"use strict";(self.webpackChunksoftware_designs_and_algorithms=self.webpackChunksoftware_designs_and_algorithms||[]).push([[5986],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=a,m=h["".concat(c,".").concat(u)]||h[u]||d[u]||o;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1209:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:2},c="1. Composition",l={unversionedId:"building-blocks-of-oop-part-2/composition",id:"building-blocks-of-oop-part-2/composition",title:"1. Composition",description:"1.1 What is the Composition",source:"@site/docs/3-building-blocks-of-oop-part-2/composition.md",sourceDirName:"3-building-blocks-of-oop-part-2",slug:"/building-blocks-of-oop-part-2/composition",permalink:"/docs/building-blocks-of-oop-part-2/composition",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"7. \ud83d\udcda Home Task",permalink:"/docs/building-blocks-of-oop-part-1/hometask"},next:{title:"2. Duck Typing",permalink:"/docs/building-blocks-of-oop-part-2/duck_typing"}},p={},d=[{value:"1.1 What is the Composition",id:"11-what-is-the-composition",level:2},{value:"1.2 Composition vs Inheritance",id:"12-composition-vs-inheritance",level:2},{value:"1.3 Moving from Inheritance to Composition",id:"13-moving-from-inheritance-to-composition",level:2},{value:"1.3.1 1st Refactoring: Composing a Bicycle of Parts: Creating a Parts Hierarchy",id:"131-1st-refactoring-composing-a-bicycle-of-parts-creating-a-parts-hierarchy",level:3},{value:"1.3.2 2nd Refactoring: Composing a Bicycle of Parts: Creating a Part",id:"132-2nd-refactoring-composing-a-bicycle-of-parts-creating-a-part",level:3},{value:"1.3.3 3rd Refactoring: Composing a Bicycle of Parts: Creating a Part Factory",id:"133-3rd-refactoring-composing-a-bicycle-of-parts-creating-a-part-factory",level:3},{value:"1.4 Composition: Accepting the Consequences of Inheritance",id:"14-composition-accepting-the-consequences-of-inheritance",level:2},{value:"1.4.1 Benefits of Inheritance",id:"141-benefits-of-inheritance",level:3},{value:"1.4.2 Cons of Inheritance",id:"142-cons-of-inheritance",level:3},{value:"1.5 Composition: Accepting the Consequences of Composition",id:"15-composition-accepting-the-consequences-of-composition",level:2},{value:"1.5.1 Benefits of Composition",id:"151-benefits-of-composition",level:3},{value:"1.5.2 Cons of Composition",id:"152-cons-of-composition",level:3}],h={toc:d};function u(e){var t=e.components,s=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1-composition"},"1. Composition"),(0,o.kt)("h2",{id:"11-what-is-the-composition"},"1.1 What is the Composition"),(0,o.kt)("p",null,"Composition is one of the fundamental concepts in object-oriented programming. It describes a class that references one or more objects of other classes in instance variables. This allows you to model a ",(0,o.kt)("em",{parentName:"p"},"HAS-A")," association between objects. You can find such relationships quite regularly in the real world. A car, for example, has an engine and modern coffee machines often have an integrated grinder and a brewing unit. Each part separately may not give us significant value, a musical note, for instance, does not contain a lot of information, while using composition we can create musical composition which can give us much more information than each note separately."),(0,o.kt)("h2",{id:"12-composition-vs-inheritance"},"1.2 Composition vs Inheritance"),(0,o.kt)("p",null,"Comparing composition with inheritance we can say that inheritance models strong ",(0,o.kt)("em",{parentName:"p"},"IS-A")," relation between classes, it means that mountain bike is-a bicycle, while composition models weaker ",(0,o.kt)("em",{parentName:"p"},"HAS-A")," relation \u2013 mountain bike has-a wheel. Let us go back to the example from the previous lecture."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Listing 1.1"',title:'"Listing','1.1"':!0},"abstract class Bicycle {\n  protected readonly defaultChain = '11-speed';\n\n  constructor(opts) {\n    this.style = opts.style;\n    this.chain = opts.chain || this.defaultChain;\n    this.tireSize = opts.tireSize || this.defaultTireSize;\n  }\n\n  spares() {\n    return {\n      chain: this.chain,\n      tireSize: this.tireSize\n    };\n  }\n}\n\nclass RoadBike extends Bicycle {\n  protected readonly defaultTireSize = '28';\n\n  constructor(opts) {\n    super(opts);\n\n    this.tapeColor = opts.tapeColor;\n  }\n\n  spares() {\n    return {\n      ...super.spares(),\n      tapeColor: this.tapeColor\n    };\n  }\n\n  protected get defaultChain() {\n    return '2-speed';\n  }\n}\n\nclass MountainBike extends Bicycle {\n  protected readonly defaultTireSize = '29';\n\n  constructor(opts) {\n    super(opts);\n\n    this.frontShock = opts.frontShock;\n  }\n\n  spares() {\n    return {\n      ...super.spares(),\n      frontShock: this.frontShock\n    };\n  }\n}\n")),(0,o.kt)("p",null,"Currently, we have abstract class Bicycle** and two subclasses \u2013 ",(0,o.kt)("inlineCode",{parentName:"p"},"RoadBike")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MountainBike"),". If you need continuously extend existing functionality, you will notice that spare parts functionality may not change all the time or will require adjustments because of specific implementations of different subclasses. It becomes too difficult to extend spare parts functionality, and we will use composition to solve this problem."),(0,o.kt)("h2",{id:"13-moving-from-inheritance-to-composition"},"1.3 Moving from Inheritance to Composition"),(0,o.kt)("h3",{id:"131-1st-refactoring-composing-a-bicycle-of-parts-creating-a-parts-hierarchy"},"1.3.1 1st Refactoring: Composing a Bicycle of Parts: Creating a Parts Hierarchy"),(0,o.kt)("p",null,"Let us refactor current functionality, we will move spare parts to ",(0,o.kt)("inlineCode",{parentName:"p"},"Parts")," class so inheritance will be replaced with composition. You can use UML diagram from Figure 1.1 to better understand what we will get after refactoring."),(0,o.kt)("p",null,"Figure 1.1 \u2013 Bicycle asks Parts for spares and Bicycle has a Parts"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img.png",src:n(2412).Z,width:"1816",height:"482"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Listing 1.2"',title:'"Listing','1.2"':!0},"abstract class Parts {\n  protected chain: string;\n  protected tireSize: string;\n\n  constructor(opts) {\n    this.chain = opts.chain || this.defaultChain;\n    this.tireSize = opts.tireSize || this.defaultTireSize;\n\n    this.postInitialize(opts);\n  }\n\n  spares() {\n    return {\n      chain: this.chain,\n      tireSize: this.tireSize,\n      ...this.localSpares\n    };\n  }\n\n  protected abstract get localSpares();\n  protected abstract get defaultTireSize();\n  protected get defaultChain() {\n    return '11-speed';\n  }\n  protected postInitialize(opts) {};\n}\n")),(0,o.kt)("p",null,"Now we have separate ",(0,o.kt)("inlineCode",{parentName:"p"},"Parts")," class with all the spares functionality encapsulated inside it. With new approach ",(0,o.kt)("inlineCode",{parentName:"p"},"Bicycle")," type depends on provided parts, when you call spares method inside ",(0,o.kt)("inlineCode",{parentName:"p"},"Bicycle")," it is delegated to ",(0,o.kt)("inlineCode",{parentName:"p"},"Parts")," instance, and it decides which exact parts to return."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Listing 1.3"',title:'"Listing','1.3"':!0},"class RoadBikeParts extends Parts {\n  private tapeColor: string;\n\n  postInitialize(opts) {\n    this.tapeColor = opts.tapeColor;\n  }\n\n  protected get localSpares() {\n    return {\n      tapeColor: this.tapeColor\n    };\n  }\n\n  protected get defaultTireSize() {\n    return '28';\n  }\n}\n\nclass MountainBikeParts extends Parts {\n  private frontShock: string;\n\n  constructor(opts) {\n    super(opts);\n\n    this.frontShock = opts.frontShock;\n  }\n\n  protected get localSpares() {\n    return { frontShock: this.frontShock };\n  }\n\n  protected get defaultTireSize() {\n    return '29';\n  }\n}\n")),(0,o.kt)("p",null,"After refactoring you need to pass bicycle size and ",(0,o.kt)("inlineCode",{parentName:"p"},"Parts")," instance to create a new ",(0,o.kt)("inlineCode",{parentName:"p"},"Bicycle"),", you can see it on example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Listing 1.4"',title:'"Listing','1.4"':!0},"const roadBike = new Bicycle(\n  {size: 'M'},\n  new RoadBikeParts({tapeColor: 'red'})\n);\nconst mountainBike = new Bicycle(\n  {size: 'M'},\n  new MountainBikeParts({frontShock: 'manitou'})\n);\n")),(0,o.kt)("p",null,"Now ",(0,o.kt)("inlineCode",{parentName:"p"},"Bicycle")," class is only responsible for its size and for which parts it can consume."),(0,o.kt)("h3",{id:"132-2nd-refactoring-composing-a-bicycle-of-parts-creating-a-part"},"1.3.2 2nd Refactoring: Composing a Bicycle of Parts: Creating a Part"),(0,o.kt)("p",null,"But it is not a result, let us continue the refactoring and adjust Parts class to make it look like typed collection. After refactoring our classes structure will look like on UML-diagram below:"),(0,o.kt)("p",null,"Figure 1.2 \u2013 Bicycle, Parts and Part relations"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img.png",src:n(5917).Z,width:"1832",height:"514"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Listing 1.5"',title:'"Listing','1.5"':!0},"class Bicycle {\n  constructor(private size: string, private parts: Parts) {}\n\n  spares() {\n    return this.parts.spares();\n  }\n}\n\nclass Parts {\n  constructor(private parts: Part[]) {}\n\n  spares() {\n    return this.parts\n      .filter(({needsSpare}) => needsSpare)\n      .reduce((spares, {name, value}) => ({\n        ...spares,\n        [name]: value\n      }));\n  }\n}\n\nclass Part {\n  constructor(\n    public name: string,\n    public value: string,\n    public needsSpare = true\n  ) {}\n}\n")),(0,o.kt)("p",null,"Now we have three main classes: ",(0,o.kt)("inlineCode",{parentName:"p"},"Bicycle")," class is the same as before the refactoring, ",(0,o.kt)("inlineCode",{parentName:"p"},"Parts")," class composes separate ",(0,o.kt)("inlineCode",{parentName:"p"},"Part"),' instances, on diagram it is showed as "one-to-many" relation between ',(0,o.kt)("inlineCode",{parentName:"p"},"Parts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Part")," classes. With new approach, theoretically, we can just skip Parts class and just put typed collection directly inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"Bicycle")," class, but we have more than just a collection, we have some additional logic which is related to ",(0,o.kt)("inlineCode",{parentName:"p"},"Parts")," functionality. Each Part instance has ",(0,o.kt)("inlineCode",{parentName:"p"},"needsSpare")," property which indicates if we need to take a spare for this instance of ",(0,o.kt)("inlineCode",{parentName:"p"},"Part"),". If we take a closer look on the ",(0,o.kt)("inlineCode",{parentName:"p"},"MountainBike"),", we will see that it may have rear shock, but we do not need a spare for it. This is logic which ",(0,o.kt)("inlineCode",{parentName:"p"},"Parts")," class contains, without this part of functionality, we may choose the option described above. Below you can see an example how to use new approach."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Listing 1.6"',title:'"Listing','1.6"':!0},"const roadBike = new Bicycle(\n  'M',\n  new Parts([\n    new Part('chain', '11-speed'),\n    new Part('tireSize', '28'),\n    new Part('tapeColor', 'red')\n  ])\n);\nconst mountainBike = new Bicycle(\n  'L',\n  new Parts([\n    new Part('chain', '11-speed'),\n    new Part('tireSize', '29'),\n    new Part('readShock', 'fox', false),\n    new Part('frontShock', 'manitou')\n  ])\n);\n")),(0,o.kt)("h3",{id:"133-3rd-refactoring-composing-a-bicycle-of-parts-creating-a-part-factory"},"1.3.3 3rd Refactoring: Composing a Bicycle of Parts: Creating a Part Factory"),(0,o.kt)("p",null,"The next step will help us to further adjust ",(0,o.kt)("inlineCode",{parentName:"p"},"Parts")," creation, as we can use Factory pattern to unify parts creation. On the one hand, this will help us to simplify new ",(0,o.kt)("inlineCode",{parentName:"p"},"Bicycle")," instances creation, but on the other hand, we need to understand that if some functionality will be changed or extended, this may require us to review our abstraction or design pattern. In the current case, Factory can encapsulate all the ",(0,o.kt)("inlineCode",{parentName:"p"},"Parts")," creation inside, so it will look like on example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="Listing 1.7"',title:'"Listing','1.7"':!0},"const roadConfig = new Set([\n  ['chain', '11-speed'],\n  ['tireSize', '28'],\n  ['tapeColor', 'red']\n]);\nconst mountainConfig = new Set([\n  ['chain', '11-speed'],\n  ['tireSize', '29'],\n  ['readShock', 'fox', true],\n  ['frontShock', 'manitou']\n]);\n\nPartsFactory.build(roadConfig);\nPartsFactory.build(mountainConfig);\n")),(0,o.kt)("h2",{id:"14-composition-accepting-the-consequences-of-inheritance"},"1.4 Composition: Accepting the Consequences of Inheritance"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'"Inheritance is specialization." \u2014 Bertrand Meyer, Touch of Class: Learning to Program Well with Objects and Contracts.'),(0,o.kt)("p",{parentName:"div"},'"Inheritance is best suited to adding functionally to existing classes when you will use most of the old code and add relatively small amounts of new code." \u2014 Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides, Design Patterns: Elements of Reusable Object-Oriented Software '))),(0,o.kt)("h3",{id:"141-benefits-of-inheritance"},"1.4.1 Benefits of Inheritance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Use of inheritance results in code that can be described as open-closed; hierarchies are open for extension while remaining closed for modification."),(0,o.kt)("li",{parentName:"ul"},"Correctly written hierarchies are easy to extend. The hierarchy embodies the abstraction and every new subclass plugs in a few concrete differences. The existing pattern is easy to follow and replicating. Hierarchies by their nature provide guidance for writing the code to extend them."),(0,o.kt)("li",{parentName:"ul"},"Use Inheritance for ",(0,o.kt)("em",{parentName:"li"},"IS-A")," Relationships")),(0,o.kt)("h3",{id:"142-cons-of-inheritance"},"1.4.2 Cons of Inheritance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choosing inheritance to solve the wrong kind of problem."),(0,o.kt)("li",{parentName:"ul"},"High cost of making changes near the top of an incorrectly modeled hierarchy. In this case, the leveraging effect works to your disadvantage; small changes break everything."),(0,o.kt)("li",{parentName:"ul"},"Impossibility of adding behavior when new subclasses represent a mixture of types.")),(0,o.kt)("h2",{id:"15-composition-accepting-the-consequences-of-composition"},"1.5 Composition: Accepting the Consequences of Composition"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'"Use composition when the behavior is more than the sum of its parts." \u2014 paraphrase of Grady Booch, Object-Oriented Analysis and Design'))),(0,o.kt)("h3",{id:"151-benefits-of-composition"},"1.5.1 Benefits of Composition"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When using composition, the natural tendency is to create many small objects that contain straightforward responsibilities that are accessible through clearly defined interfaces."),(0,o.kt)("li",{parentName:"ul"},"These small objects have a single responsibility and specify their own behavior. They are transparent; it is easy to understand the code, and it is clear what will happen if it changes."),(0,o.kt)("li",{parentName:"ul"},"Because composed objects deal with their parts via an interface, adding a new kind of part is a simple matter of plugging in a new object that honors the interface."),(0,o.kt)("li",{parentName:"ul"},"Use Composition for has-a Relationships.")),(0,o.kt)("h3",{id:"152-cons-of-composition"},"1.5.2 Cons of Composition"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A composed object relies on its many parts. Even if each part is small and easily understood, the combined operation of the whole may be less than obvious."),(0,o.kt)("li",{parentName:"ul"},"The benefits of structural independence are gained at the cost of automatic message delegation. The composed object must explicitly know which messages to delegate and to whom."),(0,o.kt)("li",{parentName:"ul"},"As these costs and benefits illustrate, composition is excellent at prescribing rules for assembling an object made of parts but does not provide as much help for the problem of arranging code for a collection of parts that are very nearly identical.")))}u.isMDXComponent=!0},2412:function(e,t,n){t.Z=n.p+"assets/images/bicycle_asks_parts_for_spares_and_bicycle_has_a_parts-d035dbfdfee288c271991ad5a00fc96c.png"},5917:function(e,t,n){t.Z=n.p+"assets/images/bicycle_parts_and_part_relations-6ca099f1a6ff8d809237672ed5d19cc7.png"}}]);