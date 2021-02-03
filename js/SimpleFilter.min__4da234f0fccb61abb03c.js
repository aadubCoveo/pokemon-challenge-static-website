webpackJsonpCoveo__temporary([33],{283:function(e,t,i){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])};return function(t,i){function o(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0}),i(518);var n=i(0),r=i(34),s=i(11),l=i(3),a=i(5),c=i(9),u=i(6),p=i(15),h=i(1),d=i(16),f=i(12),g=i(10),m=i(7),y=i(8),b=i(2),v=i(39),C=i(64),S=i(672),k=function(e){function t(i,o,n){var l=e.call(this,i,t.ID,n)||this;return l.element=i,l.options=o,l.bindings=n,l.previouslySelected=[],l.groupByRequestValues=[],l.isSticky=!1,l.shouldTriggerQuery=!0,l.options=y.ComponentOptions.initComponentOptions(i,t,o),l.element.title=l.options.title,l.buildContent(),(new p.AccessibleButton).withElement(l.element).withClickAction(function(e){return l.handleClick(e)}).withEnterKeyboardAction(function(e){return l.handleKeyboardSelect(e)}).withBlurAction(function(e){return l.handleBlur(e)}).withLabel(l.options.title).build(),l.bind.onRootElement(r.BreadcrumbEvents.populateBreadcrumb,function(e){return l.handlePopulateBreadcrumb(e)}),l.bind.onRootElement(r.BreadcrumbEvents.clearBreadcrumb,function(){return l.handleClearBreadcrumb()}),l.bind.onRootElement(s.QueryEvents.buildingQuery,function(e){return l.handleBuildingQuery(e)}),l.bind.onRootElement(s.QueryEvents.doneBuildingQuery,function(e){return l.handleDoneBuildingQuery(e)}),l.bind.onRootElement(s.QueryEvents.querySuccess,function(e){return l.handleQuerySuccess(e)}),l}return o(t,e),t.simpleFilterSortCritera=function(){return["score","occurrences","alphaascending","alphadescending","chisquare"]},t.prototype.getValueContainer=function(){return this.valueContainer},t.prototype.getValueCaption=function(e){var t=e;return n.contains(n.keys(this.options.valueCaption),e)?(t=this.options.valueCaption[t]||t,u.l(t)):v.FacetUtils.tryToGetTranslatedCaption(this.options.field.toString(),t)},t.prototype.getSelectedCaptions=function(){var e=this;return n.map(this.getSelectedValues(),function(t){return e.getValueCaption(t)})},t.prototype.toggleContainer=function(){h.$$(this.valueContainer).hasClass("coveo-simplefilter-value-container-expanded")?this.closeContainer():this.openContainer()},t.prototype.selectValue=function(e,t){var i=this;void 0===t&&(t=!0),n.each(this.checkboxes,function(o){var n=i.getValueCaption(o.label);o.label!=e&&n!=e||o.checkbox.select(t)})},t.prototype.deselectValue=function(e){var t=this;n.each(this.checkboxes,function(i){var o=t.getValueCaption(i.label);i.label!=e&&o!=e||i.checkbox.reset()})},t.prototype.toggleValue=function(e){var t=this;n.each(this.checkboxes,function(i){var o=t.getValueCaption(i.label);i.label!=e&&o!=e||i.checkbox.toggle()})},t.prototype.resetSimpleFilter=function(){var e=this;n.each(this.checkboxes,function(t){t.checkbox.isSelected()&&e.deselectValue(t.label)})},t.prototype.openContainer=function(){h.$$(this.element).addClass("coveo-simplefilter-value-container-expanded"),this.valueContainer.addClass("coveo-simplefilter-value-container-expanded"),this.refreshValueContainer(),this.isSticky=!0,this.backdrop.hasClass("coveo-dropdown-background-active")||this.showBackdrop()},t.prototype.closeContainer=function(){h.$$(this.element).removeClass("coveo-simplefilter-value-container-expanded"),this.valueContainer.removeClass("coveo-simplefilter-value-container-expanded"),this.backdrop.hasClass("coveo-dropdown-background-active")&&this.hideBackdrop(),0==this.getSelectedLabeledCheckboxes().length&&(this.isSticky=!1)},t.prototype.getSelectedValues=function(){return n.map(this.getSelectedLabeledCheckboxes(),function(e){return e.label})},t.prototype.handleClick=function(e){e.stopPropagation(),e.target==this.element&&this.toggleContainer()},t.prototype.handleKeyboardSelect=function(e){e.target==this.element?this.toggleContainer():this.toggleValue(h.$$(e.target).text())},t.prototype.handleBlur=function(e){var i=e.relatedTarget;i&&(h.$$(i).parent(m.Component.computeCssClassName(t))||this.closeContainer())},t.prototype.handleValueToggle=function(e){var t=this.getSelectedValues();this.circleElement.text(t.length.toString()),this.circleElement.removeClass("coveo-simplefilter-circle-hidden"),this.options.enableClearButton&&this.clearElement.show(),1==t.length?(this.setDisplayedTitle(this.getValueCaption(t[0])),this.element.title=this.getValueCaption(t[0])):(this.setDisplayedTitle(this.options.title),this.element.title=this.options.title,t.length<1&&(this.circleElement.addClass("coveo-simplefilter-circle-hidden"),this.options.enableClearButton&&this.clearElement.hide())),0==t.length&&(this.isSticky=!1);var i=e.isSelected()?g.analyticsActionCauseList.simpleFilterSelectValue:g.analyticsActionCauseList.simpleFilterDeselectValue;this.shouldTriggerQuery&&(this.usageAnalytics.logSearchEvent(i,{simpleFilterTitle:this.options.title,simpleFilterSelectedValue:e.label,simpleFilterField:this.options.field}),this.queryController.executeQuery())},t.prototype.createCheckbox=function(e){var t=this,i=new C.Checkbox(function(){t.handleValueToggle(i)},this.getValueCaption(e));return i.getElement().title=u.l(e),h.$$(i.getElement()).setAttribute("tabindex","0"),{checkbox:i,label:e}},t.prototype.createCheckboxes=function(){var e=this;this.previouslySelected.length>0?(this.checkboxes=n.map(this.previouslySelected,function(t){return e.createCheckbox(t)}),n.each(this.checkboxes,function(t){e.previouslySelected.indexOf(t.label)>=0&&e.selectValue(t.label,!1)})):void 0!=this.options.values?this.checkboxes=n.map(this.options.values,function(t){return e.createCheckbox(t)}):void 0!=this.groupByRequestValues&&(this.checkboxes=n.map(this.groupByRequestValues,function(t){return e.createCheckbox(t)})),"alphaascending"!==this.options.sortCriteria.toLocaleLowerCase()&&"alphadescending"!==this.options.sortCriteria.toLowerCase()||(this.checkboxes.sort(function(e,t){return e.checkbox.label.localeCompare(t.checkbox.label)}),"alphadescending"===this.options.sortCriteria.toLowerCase()&&this.checkboxes.reverse()),n.each(this.checkboxes,function(t){e.valueContainer.append(t.checkbox.getElement())}),this.checkboxes.length>0&&h.$$(h.$$(this.checkboxes[this.checkboxes.length-1].checkbox.getElement()).find(".coveo-checkbox-button")).on("blur",function(){e.closeContainer()})},t.prototype.createValueContainer=function(){this.valueContainer=h.$$("div",{className:"coveo-simplefilter-value-container"})},t.prototype.buildContent=function(){this.createValueContainer(),this.element.appendChild(this.buildSelect()),this.element.appendChild(this.valueContainer.el),this.findOrCreateWrapper().append(this.element),this.createBackdrop()},t.prototype.buildSelect=function(){var e=h.$$("span",{className:"coveo-simplefilter-select"});return this.selectTitle=h.$$("span",{className:"coveo-simplefilter-selecttext"},this.options.title),e.append(this.selectTitle.el),e.append(this.buildCircleElement()),this.options.enableClearButton&&e.append(this.buildClearElement()),e.append(this.buildSvgToggleUpIcon()),e.el},t.prototype.buildSvgToggleUpIcon=function(){var e=h.$$("span",{className:"coveo-simplefilter-toggle-svg-container"},f.SVGIcons.icons.arrowDown).el;return d.SVGDom.addClassToSVGInContainer(e,"coveo-simplefilter-toggle-down-svg"),e},t.prototype.buildCircleElement=function(){return this.circleElement=h.$$("span",{className:"coveo-simplefilter-circle coveo-simplefilter-circle-hidden"},this.getSelectedLabeledCheckboxes().length.toString()),this.circleElement.el},t.prototype.buildClearElement=function(){var e=this;return this.clearElement=h.$$("button",{title:u.l("DeselectFilterValues",this.options.title),"aria-label":u.l("Clear",this.options.title),className:"coveo-simplefilter-eraser"},f.SVGIcons.icons.mainClear),this.clearElement.hide(),this.clearElement.on("click",function(t){t.stopPropagation(),e.handleClear()}),this.clearElement.el},t.prototype.createBackdrop=function(){var e=this,t=h.$$(this.root).find(".coveo-dropdown-background");null==t?(this.backdrop=h.$$("div",{className:"coveo-dropdown-background"}),this.root.appendChild(this.backdrop.el)):this.backdrop=h.$$(t),this.backdrop.on("click",function(){return e.closeContainer()})},t.prototype.handlePopulateBreadcrumb=function(e){var t=this;if(this.getSelectedLabeledCheckboxes().length>0){var i=h.$$("div",{className:"coveo-simplefilter-breadcrumb"}),o=h.$$("span",{className:"coveo-simplefilter-breadcrumb-title"},this.options.title+":");i.append(o.el);var r=h.$$("span",{className:"coveo-simplefilter-breadcrumb-values"});i.append(r.el),n.each(this.getSelectedLabeledCheckboxes(),function(e){var i=h.$$("span",{className:"coveo-simplefilter-breadcrumb-value"},t.getValueCaption(e.label));r.append(i.el);var o=h.$$("span",{className:"coveo-simplefilter-breadcrumb-clear"},f.SVGIcons.icons.mainClear);i.append(o.el),i.el.title=t.getValueCaption(e.label),h.$$(i).on("click",function(){return t.handleRemoveFromBreadcrumb(e)})}),e.breadcrumbs.push({element:i.el})}},t.prototype.handleRemoveFromBreadcrumb=function(e){e.checkbox.reset(),this.refreshValueContainer()},t.prototype.handleClearBreadcrumb=function(){this.resetWithoutTriggeringQuery()},t.prototype.handleClear=function(){this.usageAnalytics.logSearchEvent(g.analyticsActionCauseList.simpleFilterClearAll,{simpleFilterTitle:this.options.title,simpleFilterField:this.options.field}),this.resetWithoutTriggeringQuery(),this.queryController.executeQuery()},t.prototype.resetWithoutTriggeringQuery=function(){this.shouldTriggerQuery=!1,this.resetSimpleFilter(),this.shouldTriggerQuery=!0},t.prototype.handleQuerySuccess=function(e){e.results.results.length>0?this.findOrCreateWrapper().removeClass("coveo-no-results"):this.findOrCreateWrapper().addClass("coveo-no-results"),void 0==this.options.values&&(this.groupByBuilder.groupBy(e),this.groupByRequestValues=this.groupByBuilder.getValuesFromGroupBy(),this.refreshValueContainer(),h.$$(this.element).hasClass("coveo-simplefilter-value-container-expanded")||(this.isSticky=!1))},t.prototype.handleBuildingQuery=function(e){a.Assert.exists(e),a.Assert.exists(e.queryBuilder);var t=this.getSelectedValues();t.length>0&&e.queryBuilder.advancedExpression.addFieldExpression(this.options.field.toString(),"==",t)},t.prototype.handleDoneBuildingQuery=function(e){void 0==this.options.values&&(a.Assert.exists(e),a.Assert.exists(e.queryBuilder),this.previouslySelected=this.getSelectedValues(),this.groupByBuilder=new S.SimpleFilterValues(this,this.options),this.groupByBuilder.handleDoneBuildingQuery(e))},t.prototype.getSelectedLabeledCheckboxes=function(){return n.filter(this.checkboxes,function(e){return e.checkbox.isSelected()})},t.prototype.setDisplayedTitle=function(e){this.selectTitle.text(this.getValueCaption(e))},t.prototype.showBackdrop=function(){this.backdrop.addClass("coveo-dropdown-background-active")},t.prototype.hideBackdrop=function(){this.backdrop.removeClass("coveo-dropdown-background-active")},t.prototype.findOrCreateWrapper=function(){if(null==h.$$(this.root).find(".coveo-simplefilter-header-wrapper")){var e=h.$$("div",{className:"coveo-simplefilter-header-wrapper"});return e.insertBefore(this.element),e}var e=h.$$(this.root).find(".coveo-simplefilter-header-wrapper");return h.$$(e)},t.prototype.refreshValueContainer=function(){this.isSticky||(this.valueContainer.empty(),this.createCheckboxes()),0!=this.checkboxes.length||this.isSticky?h.$$(this.element).removeClass("coveo-simplefilter-empty"):h.$$(this.element).addClass("coveo-simplefilter-empty"),h.$$(this.circleElement).text(this.getSelectedLabeledCheckboxes().length.toString())},t.ID="SimpleFilter",t.doExport=function(){l.exportGlobally({SimpleFilter:t})},t.options={maximumNumberOfValues:y.ComponentOptions.buildNumberOption({defaultValue:5,min:0}),values:y.ComponentOptions.buildListOption(),field:y.ComponentOptions.buildFieldOption({required:!0}),title:y.ComponentOptions.buildLocalizedStringOption({localizedString:function(){return u.l("NoTitle")}}),valueCaption:y.ComponentOptions.buildJsonOption(),sortCriteria:y.ComponentOptions.buildStringOption({postProcessing:function(e,i){var o=e||"score";return-1!==t.simpleFilterSortCritera().indexOf(o.toLowerCase())?o:(new c.Logger(t).warn("The simpleFilter component doesn't accept "+o+" as the value for the sortCriteria option.","Available option are : "+t.simpleFilterSortCritera().toString()),"score")}}),enableClearButton:y.ComponentOptions.buildBooleanOption({defaultValue:!1})},t}(m.Component);t.SimpleFilter=k,b.Initialization.registerAutoCreateComponent(k)},39:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(20),n=i(23),r=i(113),s=i(32),l=i(4),a=i(1),c=i(0),u=i(6),p=function(){function e(){}return e.getRegexToUseForFacetSearch=function(e,t){return new RegExp(o.StringUtils.stringToRegex(e,t),"i")},e.getDisplayValueFromValueCaption=function(e,t,i){var o=this.tryToGetTranslatedCaption(t,e);return i[e]||o},e.getValuesToUseForSearchInFacet=function(e,t){var i=[e],o=this.getRegexToUseForFacetSearch(e,t.options.facetSearchIgnoreAccents);return t.options.valueCaption?(c.chain(t.options.valueCaption).pairs().filter(function(e){return o.test(e[1])}).each(function(e){i.push(e[0])}),(n.QueryUtils.isStratusAgnosticField(t.options.field,"@objecttype")||n.QueryUtils.isStratusAgnosticField(t.options.field,"@filetype"))&&c.each(r.FileTypes.getFileTypeCaptions(),function(e,n){n in t.options.valueCaption||!o.test(e)||i.push(n)})):n.QueryUtils.isStratusAgnosticField(t.options.field,"@objecttype")||n.QueryUtils.isStratusAgnosticField(t.options.field,"@filetype")?c.each(c.filter(c.pairs(r.FileTypes.getFileTypeCaptions()),function(e){return o.test(e[1])}),function(e){i.push(e[0])}):n.QueryUtils.isStratusAgnosticField(t.options.field,"@month")&&c.each(c.range(1,13),function(e){o.test(s.DateUtils.monthToString(e-1))&&i.push(("0"+e.toString()).substr(-2))}),i},e.buildFacetSearchPattern=function(e){return e=c.map(e,function(e){return l.Utils.escapeRegexCharacter(e)}),e[0]=".*"+e[0]+".*",e.join("|")},e.needAnotherFacetSearch=function(e,t,i,o){return e<t&&e<o&&e>i},e.addNoStateCssClassToFacetValues=function(e,t){if(0!=e.values.getSelected().length){var i=a.$$(t).findAll("li:not(.coveo-selected)");c.each(i,function(e){a.$$(e).addClass("coveo-no-state")})}},e.tryToGetTranslatedCaption=function(t,i){var o;if(n.QueryUtils.isStratusAgnosticField(t.toLowerCase(),"@filetype"))o=r.FileTypes.getFileType(i).caption;else if(n.QueryUtils.isStratusAgnosticField(t.toLowerCase(),"@objecttype"))o=r.FileTypes.getObjectType(i).caption;else if(e.isMonthFieldValue(t,i)){var a=parseInt(i,10);o=s.DateUtils.monthToString(a-1)}else o=u.l(i);return void 0!=o&&l.Utils.isNonEmptyString(o)?o:i},e.isMonthFieldValue=function(e,t){if(!n.QueryUtils.isStratusAgnosticField(e.toLowerCase(),"@month"))return!1;var i=parseInt(t,10);return!isNaN(i)&&!(i<1||i>12)},e}();t.FacetUtils=p},518:function(e,t){},672:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i(518);var o=i(0),n=function(){function e(e,t){this.simpleFilter=e,this.options=t,this.groupByRequestValues=[]}return e.prototype.getValuesFromGroupBy=function(){return this.groupByRequestValues},e.prototype.groupBy=function(e){var t=this;this.groupByRequestValues=[];var i=e.results.groupByResults;i.length>0&&void 0!=this.position&&o.each(i[this.position].values,function(e){t.groupByRequestValues.indexOf(e.lookupValue)<0&&t.groupByRequestValues.push(e.lookupValue)})},e.prototype.handleDoneBuildingQuery=function(e){var t=e.queryBuilder;this.putGroupByIntoQueryBuilder(t)},e.prototype.putGroupByIntoQueryBuilder=function(e){var t=this.createBasicGroupByRequest();e.groupByRequests.push(t),this.position=e.groupByRequests.length-1},e.prototype.createBasicGroupByRequest=function(){return{field:this.options.field,maximumNumberOfValues:this.options.maximumNumberOfValues,injectionDepth:1e3,sortCriteria:this.simpleFilter.options.sortCriteria}},e}();t.SimpleFilterValues=n}});