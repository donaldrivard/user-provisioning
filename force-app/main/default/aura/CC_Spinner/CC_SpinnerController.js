({
    toggle : function (component, event, helper) {

        var isVisible = component.get('v.isVisible');

        if (isVisible) {
            helper.hide(component);
        } else {
            helper.show(component);
        }
    },

    show : function (component, event, helper) {
        helper.show(component);
    },

    hide : function (component, event, helper) {
        helper.hide(component);
    }
})