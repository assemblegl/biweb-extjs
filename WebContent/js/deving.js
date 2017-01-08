Ext.define('gl.deving', {
    extend: 'Ext.form.Panel',
    xtype: 'form-login',   
    title: ' ',
    frame:true,
    //width: '100%',
    //height: 400,
    bodyPadding: 10,
    //align:'center',
    layout: {
        type: 'hbox',
        align: 'middle',
        pack: 'center'
    },

    items: [{
        xtype: 'label',                    
        style:'font-size:35px;color: #004b97',
        text: '功能开发中。。。'
    }],
    
    initComponent: function() {
        this.defaults = {
            anchor: '100%',
            labelWidth: 120
        };

        this.callParent();
    }
});