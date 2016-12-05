({
    searchAccounts : function(component) {

        // Reset page to 1
        this.setPage(component, 1);

        // Validate input
        var searchTerms = component.find('searchBox').get('v.value');
        console.log('Search Terms = ' + searchTerms);
        

        if (searchTerms === '') {
            // Set empty results
            this.setResults(component, [], 0);
        } else {
            // Get customers
            this.getAccounts(component);
        }
    },

    showSpinner : function (component) {
        component.find('spinner').show();
    },

    hideSpinner : function (component) {
        component.find('spinner').hide();
    },

    setPage : function(component, pageNumber) {

        var maxPageNumber = component.get('v.pageCount');

        if (pageNumber && pageNumber > 0 && pageNumber <= maxPageNumber) {
            component.set('v.pageNumber', pageNumber);
        }
    },

    previousPage : function(component) {

        var currentPageNumber = component.get('v.pageNumber');

        if (currentPageNumber > 1) {
            component.set('v.pageNumber', currentPageNumber - 1);
            this.getAccounts(component);
        }
    },

    nextPage : function(component) {

        var currentPageNumber = component.get('v.pageNumber');
        var maxPageNumber = component.get('v.pageCount');

        if (currentPageNumber < maxPageNumber) {
            component.set('v.pageNumber', currentPageNumber + 1);
            this.getAccounts(component);
        }
    },

    getAccounts : function(component) {

        // Search params
    	console.log('1');
        var searchTerms = component.find('searchBox').get('v.value');
        console.log('2 ' + searchTerms);
        // Search method
        var action = component.get('c.lookupAccounts');
console.log('3');
        action.setParams({
            "searchTerms" : searchTerms
        
        });
        console.log('4');
        action.setCallback(this, function(response) {
        		console.log('5');
            if (component.isValid() && response.getState() ==='SUCCESS') {
                var results = response.getReturnValue();
                console.log('results ' + results);
                console.log('Customer search result: ', response.getReturnValue());
                console.log('results length ' + results.length);
                // Set the results returned from Demandware
                this.setResults(component, results,results.length );
            } else {
                console.log('Error: ', response.getError());
            }

            // Hide spinner to reveal data
            this.hideSpinner(component);
        });

        // Show spinner to hide data
        this.showSpinner(component);

        $A.enqueueAction(action);
    },

    setResults : function(component, accounts, resultSize) {

        var pageSize = component.get('v.pageSize');

        // Set the result size
        component.set('v.resultSize', resultSize);
        console.log('Found ' + resultSize + ' results');

        // Set the customers
        component.set('v.accounts', accounts);
        console.log('accounts: ', accounts);

        // Set the number of pages
        component.set('v.pageCount', Math.floor(resultSize / pageSize) + 1);
    }
})