({
    init : function(component, event, helper) {
        var customerId = component.get('v.accountId');

        if (customerId && customerId != '') {
            helper.getCustomerData(component);
        }
    },

    updateCustomerId : function(component, event, helper) {
        var customerId = component.get('v.accountId');

        if (customerId && customerId != '') {
            helper.getCustomerData(component);
        }
    }
})