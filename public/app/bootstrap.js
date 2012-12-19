Ext.Loader.require([
    'Ext.app.Application',
    'Proto.view.Viewport',
    'Ext.ux.window.Notification'
]);

Ext.onReady(function(){

    var app = Ext.application({
        name: 'ProtoAPP',
        requires: [
            'Proto.view.Viewport',
            'Ext.ux.window.Notification'
        ],
        appFolder: ExtMvcAppFolder, // Overwrite Basedirectory settings
        autoCreateViewport: false,
        models: [
            // Models
        ],    
        stores: [
            // Stores
        ],
        controllers: [
            // Controllers
        ],
        launch: function(){

            Ext.create('widget.uxNotification', {
                position: 't',
                useXAxis: true,
                cls: 'ux-notification-light',
                iconCls: 'ux-notification-icon-information',
                closable: false,
                title: '',
                html: 'Boilerplate launched. <br/> Edit "bootstrap.js" to remove this message.',
                slideInDuration: 800,
                slideBackDuration: 1500,
                autoCloseDelay: 6000,
                slideInAnimation: 'elasticIn',
                slideBackAnimation: 'elasticIn'
            }).show();
        }
    });

})