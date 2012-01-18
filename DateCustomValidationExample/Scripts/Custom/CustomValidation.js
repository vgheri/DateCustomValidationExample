/* File Created: January 16, 2012 */

// Value is the element to be validated, params is the array of name/value pairs of the parameters extracted from the HTML, element is the HTML element that the validator is attached to
$.validator.addMethod("dategreaterthan", function (value, element, params) {
    return Date.parse(value) > Date.parse($(params).val());
});


/* The adapter signature:
adapterName is the name of the adapter, and matches the name of the rule in the HTML element.

params is an array of parameter names that you're expecting in the HTML attributes, and is optional. If it is not provided, 
then it is presumed that the validator has no parameters.

fn is a function which is called to adapt the HTML attribute values into jQuery Validate rules and messages. 

The function will receive a single parameter which is an options object with the following values in it:
element
The HTML element that the validator is attached to

form
The HTML form element

message
The message string extract from the HTML attribute

params
The array of name/value pairs of the parameters extracted from the HTML attributes

rules
The jQuery rules array for this HTML element. The adapter is expected to add item(s) to this rules array for the specific jQuery Validate validators 
that it wants to attach. The name is the name of the jQuery Validate rule, and the value is the parameter values for the jQuery Validate rule.

messages
The jQuery messages array for this HTML element. The adapter is expected to add item(s) to this messages array for the specific jQuery Validate validators that it wants to attach, if it wants a custom error message for this rule. The name is the name of the jQuery Validate rule, and the value is the custom message to be displayed when the rule is violated.
*/
$.validator.unobtrusive.adapters.add("dategreaterthan", ["otherpropertyname"], function (options) {
    options.rules["dategreaterthan"] = "#" + options.params.otherpropertyname;    
    options.messages["dategreaterthan"] = options.message;
});




