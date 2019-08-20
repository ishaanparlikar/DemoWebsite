var approve = require('approvejs');
var rules = {
    required: true,
    email: true
};

var result = approve.value('user@domain.com', rules);