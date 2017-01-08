function funclogin(){
    console.log('http://'+conf.ip+':'+conf.port+'/main/login');
    Ext.Ajax.request({
        url: 'http://'+conf.ip+':'+conf.port+'/main/login',
        params:{
            skey:'5tgb8ik,',
            userid:Ext.getCmp('log-userid').getValue(),
            password:Ext.getCmp('log-passwd').getValue()
        },
        method : 'POST',                         
        success : function(response) {
            var backinfo=response.responseText;
            if(backinfo == '1'){
                Ext.example.msg('错误!', '输入错误的用户名或者密码'); 
            }else{
                var strarray=backinfo.split('@$');
                Ext.util.Cookies.set('u',strarray[0]);
                Ext.util.Cookies.set('k',strarray[1]);
                Ext.util.Cookies.set('gs',strarray[2]);
                Ext.util.Cookies.set('gsn',strarray[3]);
                window.location.href='main.html?theme=neptune';
                console.log('login info backstr:'+backinfo);
            }                                
        },
        failure : function() {    
            console.log('login false')                           
            //window.location.href='login.html';                                
        } 
    })
}

Ext.define('loginform', {
    extend: 'Ext.form.Panel',
    xtype: 'form-login',   
    title: 'BI System',
    frame:true,
    width: 320,
    bodyPadding: 10,
    align:'center',

    //defaultType: 'textfield',   
    items: [{
        xtype:'textfield',
        id:'log-userid',
        //allowBlank: false,
        fieldLabel: '用户名',
        name: 'user',
        stateful: true,
        //emptyText: 'user id'
        listeners : {
            specialkey : function(field, e) {
                if(e.getKey()==13){
                    console.log('userid textfield enter');
                    funclogin();
                }     
            }
        }
    }, {
        xtype:'textfield',
        id:'log-passwd',
        //allowBlank: false,
        fieldLabel: '密码',
        name: 'pass',
        enableKeyEvents: true,
        //emptyText: 'password',
        inputType: 'password',
        stateful: true,
        listeners : {
            specialkey : function(field, e) {
                if(e.getKey()==13){
                    console.log('userid textfield enter');
                    funclogin();
                }
            }
        }
    }, {
        xtype:'checkbox',
        id: 'log-ck-rember',
        fieldLabel: '记住密码',
        name: 'remember',
        //stateful: true,
        handler:
            function(item, checked){
                console.log('checkbox click');
                if(checked){
                    Ext.util.Cookies.set('cv',1);
                }else{
                    Ext.util.Cookies.clear('cv');    
                }
            }       
    }],
    buttons: [
        //{ text:'Register' },
        { 
            text:'登陆',
            id:'loginbt',
            handler: function(){
                funclogin();
                // Ext.Ajax.request({
                //     url: 'http://'+conf.ip+':'+conf.port+'/main/login',
                //     params:{
                //         skey:'5tgb8ik,',
                //         userid:Ext.getCmp('log-userid').getValue(),
                //         password:Ext.getCmp('log-passwd').getValue()
                //     },
                //     method : 'GET',                         
                //     success : function(response) {
                //         var backinfo=response.responseText;
                //         if(backinfo == '1'){
                //             Ext.example.msg('错误!', '输入错误的用户名或者密码'); 
                //         }else{
                //             var strarray=backinfo.split('@');
                //             Ext.util.Cookies.set('datau',strarray[0]);
                //             Ext.util.Cookies.set('datak',strarray[1]);
                //             window.location.href='main.html';
                //         }                                
                //     },
                //     failure : function() {    
                //         console.log('login false')                           
                //         //window.location.href='login.html';                                
                //     } 
                // })
            }  
        }
    ],
    // buttons: [
    //     //{ text:'Register' },
    //     { text:'Login',
    //       handler: function(){
            
    //       }  
    //     }
    // ],
    
    initComponent: function() {
        this.defaults = {
            anchor: '100%',
            labelWidth: 120
        };

        this.callParent();
    }
});