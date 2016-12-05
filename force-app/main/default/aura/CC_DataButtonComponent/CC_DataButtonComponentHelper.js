({
    sendData : function(component) {

        var data = component.get('v.data');
        console.log('Sending data: ', data);

        var e = component.getEvent('press');
        e.setParams({ data: data });
        e.fire();
    }
})