({
    showSpinner : function (component) {
        var spinner = component.find('spinner').show();
    },

    hideSpinner : function (component) {
        var spinner = component.find('spinner').hide();
    },

    /**
     * Batches multiple actions into one helper method to centralize spinner show/hide.
     */
    getCustomerData : function(component) {

        // Local reference to the helper class for nesting callbacks
        var helper = this;

        helper.showSpinner(component);

        //Make consecutive calls to data-retrieving helper methods using callbacks
        helper._getCustomerDetails(component, function() {
            helper._getCustomerBaskets(component, function() {
                helper._getCustomerOrders(component, function() {
                    helper.hideSpinner(component);
                });
            });
        });
    },

    // NOTE: Using '_' denotes a private helper method.
    _getCustomerDetails : function(component, next) {

        var customerId = component.get('v.customerId');

        var action = component.get('c.getCustomerDetails');

        action.setParams({
            customerId : customerId
        });

        action.setCallback(this, function(response) {
            console.log('Response state: ', response.getState());

            if (component.isValid() && response.getState() === 'SUCCESS') {
                var result = response.getReturnValue();
                console.log('Customer details: ', result);

                component.set('v.customer', result);
                component.set('v.addresses', result.addresses ? result.addresses : []);
                component.set('v.paymentInstruments', result.payment_instruments ? result.payment_instruments : []);
            } else {
                console.log('Failed to get customer details: ', response.getError());
            }

            // Callback method
            if (next) { next(); }
        });

        $A.enqueueAction(action);
    },

    // NOTE: Using '_' denotes a private helper method.
    _getCustomerBaskets : function(component, next) {

        var customerId = component.get('v.customerId');

        var action = component.get('c.getCustomerBaskets');

        action.setParams({
            customerId : customerId
        });

        action.setCallback(this, function(response) {
            console.log('Response state: ', response.getState());

            if (component.isValid() && response.getState() === 'SUCCESS') {
                var results = response.getReturnValue();
                console.log('Customer baskets: ', results);

                component.set('v.baskets', results.baskets ? results.baskets : []);
            } else {
                console.log('Failed to get customer baskets: ', response.getError());
            }

            // Callback method
            if (next) { next(); }
        });

        $A.enqueueAction(action);
    },

    // NOTE: Using '_' denotes a private helper method.
    _getCustomerOrders : function(component, next) {

        var customerId = component.get('v.customerId');

        var action = component.get('c.getCustomerOrders');

        action.setParams({
            customerId : customerId
        });

        action.setCallback(this, function(response) {
            console.log('Response state: ', response.getState());

            if (component.isValid() && response.getState() === 'SUCCESS') {
                var results = response.getReturnValue();
                console.log('Customer orders: ', results);

                component.set('v.orders', results.data ? results.data : []);
            } else {
                console.log('Failed to get customer orders: ', response.getError());
            }

            // Callback method
            if (next) { next(); }
        });

        $A.enqueueAction(action);
    },
})