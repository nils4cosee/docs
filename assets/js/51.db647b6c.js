(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{442:function(e,a,t){"use strict";t.r(a);var s=t(3),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"built-in-helpers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#built-in-helpers"}},[e._v("#")]),e._v(" Built-in Helpers")]),e._v(" "),t("h2",{attrs:{id:"the-if-block-helper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-if-block-helper"}},[e._v("#")]),e._v(" The "),t("code",[e._v("if")]),e._v(" block helper")]),e._v(" "),t("p",[e._v("You can use the "),t("code",[e._v("if")]),e._v(" helper to conditionally render a block. If its argument returns "),t("code",[e._v("false")]),e._v(", "),t("code",[e._v("undefined")]),e._v(", "),t("code",[e._v("null")]),e._v(", "),t("code",[e._v('""')]),e._v(",\n"),t("code",[e._v("0")]),e._v(", or "),t("code",[e._v("[]")]),e._v(", Handlebars will not render the block.")]),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-if-block.md",show:"template"}}),e._v(" "),t("p",[e._v("When you pass the following input to the above template")]),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-if-block.md",show:"input"}}),e._v(" "),t("p",[e._v("This will produce the result as below:")]),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-if-block.md",show:"output"}}),e._v(" "),t("p",[e._v("If the input is an empty JSONObject "),t("code",[e._v("{}")]),e._v(", then "),t("code",[e._v("author")]),e._v(" will become "),t("code",[e._v("undefined")]),e._v(" and "),t("code",[e._v("if")]),e._v(" condition fails, resulting in\nthe output as follow:")]),e._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("div")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("class")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("entry"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),t("p",[e._v("When using a block expression, you can specify a template section to run if the expression returns a falsy value. The\nsection, marked by "),t("code",[e._v("else")]),e._v(' is called an "else section".')]),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-ifelse-block.md",show:"template"}}),e._v(" "),t("h2",{attrs:{id:"the-unless-block-helper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-unless-block-helper"}},[e._v("#")]),e._v(" The "),t("code",[e._v("unless")]),e._v(" block helper")]),e._v(" "),t("p",[e._v("You can use the "),t("code",[e._v("unless")]),e._v(" helper as the inverse of the "),t("code",[e._v("if")]),e._v(" helper. Its block will be rendered if the expression returns\na falsy value.")]),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-unless-block.md",show:"template"}}),e._v(" "),t("p",[e._v("If looking up "),t("code",[e._v("license")]),e._v(" under the current context returns a falsy value, Handlebars will render the warning. Otherwise,\nit will render nothing.")]),e._v(" "),t("h2",{attrs:{id:"the-each-block-helper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-each-block-helper"}},[e._v("#")]),e._v(" The "),t("code",[e._v("each")]),e._v(" block helper")]),e._v(" "),t("p",[e._v("You can iterate over a list using the built-in "),t("code",[e._v("each")]),e._v(" helper. Inside the block, you can use "),t("code",[e._v("this")]),e._v(" to reference the\nelement being iterated over.")]),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-each-block.md",show:"template"}}),e._v(" "),t("p",[e._v("when used with this context:")]),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-each-block.md",show:"input"}}),e._v(" "),t("p",[e._v("will result in:")]),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-each-block.md",show:"output"}}),e._v(" "),t("p",[e._v("You can use the "),t("code",[e._v("this")]),e._v(" expression in any context to reference the current context.")]),e._v(" "),t("p",[e._v("You can optionally provide an "),t("code",[e._v("else")]),e._v(" section which will display only when the list is empty.")]),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-eachelse-block.md",show:"template"}}),e._v(" "),t("div",{pre:!0},[t("p",[e._v("When looping through items in "),t("code",[e._v("each")]),e._v(", you can optionally reference the current loop index via "),t("code",[e._v("{{@index}}")]),e._v(".")]),e._v(" "),t("div",{pre:!0,attrs:{class:"language-handlebars extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-handlebars"}},[t("code",[t("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("{{")]),t("span",{pre:!0,attrs:{class:"token block keyword"}},[e._v("#each")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("array")]),t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("}}")])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("{{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("@")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("index")]),t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("}}")])]),e._v(": "),t("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("{{")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("this")]),t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("}}")])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("{{")]),t("span",{pre:!0,attrs:{class:"token block keyword"}},[e._v("/each")]),t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("}}")])]),e._v("\n")])])]),t("p",[e._v("Additionally for object iteration, "),t("code",[e._v("{{@key}}")]),e._v(" references the current key name:")]),e._v(" "),t("div",{pre:!0,attrs:{class:"language-handlebars extra-class"}},[t("pre",{pre:!0,attrs:{"v-pre":"",class:"language-handlebars"}},[t("code",[t("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("{{")]),t("span",{pre:!0,attrs:{class:"token block keyword"}},[e._v("#each")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("object")]),t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("}}")])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("{{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("@")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("key")]),t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("}}")])]),e._v(": "),t("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("{{")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("this")]),t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("}}")])]),e._v(" "),t("span",{pre:!0,attrs:{class:"token handlebars language-handlebars"}},[t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("{{")]),t("span",{pre:!0,attrs:{class:"token block keyword"}},[e._v("/each")]),t("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[e._v("}}")])]),e._v("\n")])])]),t("p",[e._v("The first and last steps of iteration are noted via the "),t("code",[e._v("@first")]),e._v(" and "),t("code",[e._v("@last")]),e._v(" variables when iterating over an array.\nWhen iterating over an object only the "),t("code",[e._v("@first")]),e._v(" is available. Nested each blocks may access the iteration variables via\ndepth based paths. To access the parent index, for example, "),t("code",[e._v("{{@../index}}")]),e._v(" can be used.")])]),t("h2",{attrs:{id:"the-with-helper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-with-helper"}},[e._v("#")]),e._v(" The "),t("code",[e._v("with")]),e._v("-helper")]),e._v(" "),t("p",[e._v("TODO: Add some text here")]),e._v(" "),t("ExamplePart",{attrs:{examplePage:"/examples/builtin-helper-with-block.md",show:"template"}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);