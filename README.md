# Angular2 todo list

A live version of this project is runnin on 

http://carlos-algms.github.io/work/angular2-todo-list/

## Technologies 

 * [Angular2][1]
 * [TypeScript][2]
 * [locaStorage][10]
 * [Observable][3]
 * [Materialize][4]
 * [Gulp][5]


### Angular 2
Angular 2 still in beta, but is good enought to try it.

His new structure is based on performance and the API was completely rewritten.


### TypeScript 

TypeScript is currently the prefered language for angular, it is compiled before use, 
so, many bugs and problems are found during the development cycle.

It implements interfaces, Classes, Generics`<T>` and an optional strongly typed structure.

You can call it like a JavaScript version of C# or Java :laughing:

> TypeScript is a free and open source programming language developed and maintained by Microsoft. 
> It is a strict superset of JavaScript, and adds optional static typing and class-based object-oriented programming to the language. 
> Anders Hejlsberg, lead architect of C# and creator of Delphi and Turbo Pascal, has worked on the development of TypeScript.
> TypeScript may be used to develop JavaScript applications for client-side or server-side (Node.js) execution.

Source: [Wikipedia][6] 


### LocalStorage
It is an API to store data into visitors browser. Used to store the visitor list.


### Observable

[Observable][7] Represents a data source that can be observed, 
meaning that a lot of interested process can subscribe to receive any data changes / updates like a stream of data.
It is a highter implementation of [Promisses][8].


### Materialize

A modern and responsive frontend framework based on Material Design. 
This is the choice because the current version of [Angular Material][9] does not suport Angular2 yet.


### Gulp

[Gulp][5] is a toolkit that helps to automate recurrent tasks into development workflow.
Tasks like build, serve, minify and test.

--------------------------

[1]: https://angular.io/
[2]: http://www.typescriptlang.org/
[3]: https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/create.md
[4]: http://materializecss.com/
[5]: https://github.com/gulpjs/gulp
[6]: https://en.wikipedia.org/wiki/TypeScript
[7]: https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/exploring.md#observable--observer
[8]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[9]: https://material.angularjs.org/1.0.5/
[10]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
