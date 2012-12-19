Ext.define('Proto.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'fit',
    
    requires: [
    ],
    
    initComponent: function() {

        Ext.apply(this, {
            layout: {
                type: 'border',
                padding: 0
            },
            items: []
        });
        this.callParent(arguments);
    }
});