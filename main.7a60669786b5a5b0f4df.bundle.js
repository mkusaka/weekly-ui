(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));__webpack_require__(2),__webpack_require__(12),__webpack_require__(58),__webpack_require__(1),__webpack_require__(5);var react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);__webpack_require__(1505);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button=function Button(_ref){var _ref$primary=_ref.primary,primary=void 0!==_ref$primary&&_ref$primary,_ref$backgroundColor=_ref.backgroundColor,backgroundColor=void 0===_ref$backgroundColor?null:_ref$backgroundColor,_ref$size=_ref.size,size=void 0===_ref$size?"medium":_ref$size,label=_ref.label,props=_objectWithoutProperties(_ref,["primary","backgroundColor","size","label"]),mode=primary?"storybook-button--primary":"storybook-button--secondary";return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",_extends({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor?{backgroundColor:backgroundColor}:{}},props),label)};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:!1},description:"",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string | null"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((...args: unknown[]) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"stories/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},1496:function(module,exports,__webpack_require__){"use strict";__webpack_require__(2),__webpack_require__(50),__webpack_require__(44),__webpack_require__(43),__webpack_require__(41),__webpack_require__(1497),__webpack_require__(1498),__webpack_require__(5),__webpack_require__(46);var _clientApi=__webpack_require__(62),_clientLogger=__webpack_require__(39),_configFilename=__webpack_require__(1499);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1499:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1500:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(384).configure)([__webpack_require__(1501),__webpack_require__(1503)],module,!1)}).call(this,__webpack_require__(111)(module))},1501:function(module,exports,__webpack_require__){var map={"./Introduction.stories.mdx":1502};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1501},1502:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(2),__webpack_require__(12),__webpack_require__(1),__webpack_require__(5),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(7),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(222),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(526),_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7__),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(527),_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8__),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(528),_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9__),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(529),_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10__),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(530),_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11__),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(531),_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12__),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(532),_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13__),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(533),_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default=__webpack_require__.n(_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14__);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Meta,{title:"Example/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("inlineCode",{parentName:"p"},"src/storybook-examples")," directory to learn how they work.\nWe recommend building UIs with a ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",_extends({parentName:"p"},{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{class:"subheading"},"Configure"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{class:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://storybook.js.org/docs/react/api/presets",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_plugin_svg__WEBPACK_IMPORTED_MODULE_12___default.a,alt:"plugin"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_stackalt_svg__WEBPACK_IMPORTED_MODULE_14___default.a,alt:"Build"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_colors_svg__WEBPACK_IMPORTED_MODULE_8___default.a,alt:"colors"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_flow_svg__WEBPACK_IMPORTED_MODULE_11___default.a,alt:"flow"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{class:"subheading"},"Learn"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{class:"link-list"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_repo_svg__WEBPACK_IMPORTED_MODULE_13___default.a,alt:"repo"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://www.learnstorybook.com",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_direction_svg__WEBPACK_IMPORTED_MODULE_10___default.a,alt:"direction"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_code_brackets_svg__WEBPACK_IMPORTED_MODULE_7___default.a,alt:"code"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"GitHub project"),"View the source and add issues")),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("a",{class:"link-item",href:"https://discord.gg/UUt2PJb",target:"_blank"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("img",{src:_assets_comments_svg__WEBPACK_IMPORTED_MODULE_9___default.a,alt:"comments"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",null,Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",{class:"tip-wrapper"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("span",{class:"tip"},"Tip"),"Edit the Markdown in ",Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("code",null,"src/storybook-examples/welcome.mdx")))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},1503:function(module,exports,__webpack_require__){var map={"./Button.stories.tsx":1504,"./Header.stories.tsx":223,"./Page.stories.tsx":1515};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1503},1504:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));__webpack_require__(151),__webpack_require__(1);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(122);__webpack_exports__.default={title:"Example/Button",component:_Button__WEBPACK_IMPORTED_MODULE_3__.a,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__.a,args)};Template.displayName="Template";var Primary=Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Template.bind({});Secondary.args={label:"Button"};var Large=Template.bind({});Large.args={size:"large",label:"Button"};var Small=Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters),Large.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Large.parameters),Small.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Small.parameters);try{Primary.displayName="Primary",Primary.__docgenInfo={description:"",displayName:"Primary",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Button.stories.tsx#Primary"]={docgenInfo:Primary.__docgenInfo,name:"Primary",path:"stories/Button.stories.tsx#Primary"})}catch(__react_docgen_typescript_loader_error){}try{Secondary.displayName="Secondary",Secondary.__docgenInfo={description:"",displayName:"Secondary",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Button.stories.tsx#Secondary"]={docgenInfo:Secondary.__docgenInfo,name:"Secondary",path:"stories/Button.stories.tsx#Secondary"})}catch(__react_docgen_typescript_loader_error){}try{Large.displayName="Large",Large.__docgenInfo={description:"",displayName:"Large",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Button.stories.tsx#Large"]={docgenInfo:Large.__docgenInfo,name:"Large",path:"stories/Button.stories.tsx#Large"})}catch(__react_docgen_typescript_loader_error){}try{Small.displayName="Small",Small.__docgenInfo={description:"",displayName:"Small",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Button.stories.tsx#Small"]={docgenInfo:Small.__docgenInfo,name:"Small",path:"stories/Button.stories.tsx#Small"})}catch(__react_docgen_typescript_loader_error){}},1505:function(module,exports,__webpack_require__){var api=__webpack_require__(331),content=__webpack_require__(1506);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1506:function(module,exports,__webpack_require__){(exports=__webpack_require__(332)(!1)).push([module.i,".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",""]),module.exports=exports},1507:function(module,exports,__webpack_require__){var api=__webpack_require__(331),content=__webpack_require__(1508);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1508:function(module,exports,__webpack_require__){(exports=__webpack_require__(332)(!1)).push([module.i,".wrapper {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\nsvg {\n  display: inline-block;\n  vertical-align: top;\n}\n\nh1 {\n  font-weight: 900;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\nbutton + button {\n  margin-left: 10px;\n}\n",""]),module.exports=exports},1509:function(module,exports,__webpack_require__){var api=__webpack_require__(331),content=__webpack_require__(1510);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},1510:function(module,exports,__webpack_require__){(exports=__webpack_require__(332)(!1)).push([module.i,"section {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\nh2 {\n  font-weight: 900;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\np {\n  margin: 1em 0;\n}\n\na {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\nul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\nli {\n  margin-bottom: 8px;\n}\n\n.tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n",""]),module.exports=exports},1515:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));__webpack_require__(151),__webpack_require__(1);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),Header=__webpack_require__(167),Page_Page=(__webpack_require__(1509),function Page(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return react_default.a.createElement("article",null,react_default.a.createElement(Header.a,{user:user,onLogin:onLogin,onLogout:onLogout,onCreateAccount:onCreateAccount}),react_default.a.createElement("section",null,react_default.a.createElement("h2",null,"Pages in Storybook"),react_default.a.createElement("p",null,"We recommend building UIs with a"," ",react_default.a.createElement("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer"},react_default.a.createElement("strong",null,"component-driven"))," ","process starting with atomic components and ending with pages."),react_default.a.createElement("p",null,"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"),react_default.a.createElement("ul",null,react_default.a.createElement("li",null,'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'),react_default.a.createElement("li",null,"Assemble data in the page component from your services. You can mock these services out using Storybook.")),react_default.a.createElement("p",null,"Get a guided tutorial on component-driven development at"," ",react_default.a.createElement("a",{href:"https://www.learnstorybook.com",target:"_blank",rel:"noopener noreferrer"},"Learn Storybook"),". Read more in the"," ",react_default.a.createElement("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer"},"docs"),"."),react_default.a.createElement("div",{className:"tip-wrapper"},react_default.a.createElement("span",{className:"tip"},"Tip")," Adjust the width of the canvas with the"," ",react_default.a.createElement("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},react_default.a.createElement("g",{fill:"none",fillRule:"evenodd"},react_default.a.createElement("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"}))),"Viewports addon in the toolbar")))});Page_Page.displayName="Page";try{Page_Page.displayName="Page",Page_Page.__docgenInfo={description:"",displayName:"Page",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"Record<string, unknown>"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"(...args: unknown[]) => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"(...args: unknown[]) => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"(...args: unknown[]) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Page.tsx#Page"]={docgenInfo:Page_Page.__docgenInfo,name:"Page",path:"stories/Page.tsx#Page"})}catch(__react_docgen_typescript_loader_error){}var Header_stories=__webpack_require__(223),Page_stories_Template=(__webpack_exports__.default={title:"Example/Page",component:Page_Page},function Template(args){return react_default.a.createElement(Page_Page,args)});Page_stories_Template.displayName="Template";var LoggedIn=Page_stories_Template.bind({});LoggedIn.args=Object.assign({},Header_stories.LoggedIn.args);var LoggedOut=Page_stories_Template.bind({});LoggedOut.args=Object.assign({},Header_stories.LoggedOut.args),LoggedIn.parameters=Object.assign({storySource:{source:"(args) => <Page {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:"(args) => <Page {...args} />"}},LoggedOut.parameters);try{LoggedIn.displayName="LoggedIn",LoggedIn.__docgenInfo={description:"",displayName:"LoggedIn",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Page.stories.tsx#LoggedIn"]={docgenInfo:LoggedIn.__docgenInfo,name:"LoggedIn",path:"stories/Page.stories.tsx#LoggedIn"})}catch(__react_docgen_typescript_loader_error){}try{LoggedOut.displayName="LoggedOut",LoggedOut.__docgenInfo={description:"",displayName:"LoggedOut",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Page.stories.tsx#LoggedOut"]={docgenInfo:LoggedOut.__docgenInfo,name:"LoggedOut",path:"stories/Page.stories.tsx#LoggedOut"})}catch(__react_docgen_typescript_loader_error){}},167:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Header}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(122),Header=(__webpack_require__(1507),function Header(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"wrapper"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g",{fill:"none",fillRule:"evenodd"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}))),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Acme")),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,user?react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{size:"small",onClick:onLogout,label:"Log out"}):react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{size:"small",onClick:onLogin,label:"Log in"}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.a,{primary:!0,size:"small",onClick:onCreateAccount,label:"Sign up"})))))});Header.displayName="Header";try{Header.displayName="Header",Header.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"Record<string, unknown>"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"(...args: unknown[]) => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"(...args: unknown[]) => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"(...args: unknown[]) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Header.tsx#Header"]={docgenInfo:Header.__docgenInfo,name:"Header",path:"stories/Header.tsx#Header"})}catch(__react_docgen_typescript_loader_error){}},223:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));__webpack_require__(151),__webpack_require__(1);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_Header__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(167);__webpack_exports__.default={title:"Example/Header",component:_Header__WEBPACK_IMPORTED_MODULE_3__.a};var Template=function Template(args){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_3__.a,args)};Template.displayName="Template";var LoggedIn=Template.bind({});LoggedIn.args={user:{}};var LoggedOut=Template.bind({});LoggedOut.args={},LoggedIn.parameters=Object.assign({storySource:{source:"(args: any) => <Header {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object.assign({storySource:{source:"(args: any) => <Header {...args} />"}},LoggedOut.parameters);try{LoggedIn.displayName="LoggedIn",LoggedIn.__docgenInfo={description:"",displayName:"LoggedIn",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Header.stories.tsx#LoggedIn"]={docgenInfo:LoggedIn.__docgenInfo,name:"LoggedIn",path:"stories/Header.stories.tsx#LoggedIn"})}catch(__react_docgen_typescript_loader_error){}try{LoggedOut.displayName="LoggedOut",LoggedOut.__docgenInfo={description:"",displayName:"LoggedOut",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/Header.stories.tsx#LoggedOut"]={docgenInfo:LoggedOut.__docgenInfo,name:"LoggedOut",path:"stories/Header.stories.tsx#LoggedOut"})}catch(__react_docgen_typescript_loader_error){}},526:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/code-brackets.2784ffca.svg"},527:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/colors.21c626f4.svg"},528:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/comments.b73d45a9.svg"},529:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/direction.5ea0c37d.svg"},530:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/flow.9425921e.svg"},531:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/plugin.50dc5120.svg"},532:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/repo.178a244c.svg"},533:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/stackalt.c9e2c6dd.svg"},534:function(module,exports,__webpack_require__){__webpack_require__(535),__webpack_require__(683),__webpack_require__(684),__webpack_require__(835),__webpack_require__(1443),__webpack_require__(1475),__webpack_require__(1480),__webpack_require__(1492),__webpack_require__(1494),__webpack_require__(1496),module.exports=__webpack_require__(1500)},599:function(module,exports){},684:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(384)}},[[534,1,2]]]);
//# sourceMappingURL=main.7a60669786b5a5b0f4df.bundle.js.map