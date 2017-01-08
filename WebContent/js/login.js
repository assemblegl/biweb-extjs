Ext.require([
    'Ext.tab.*',
    'Ext.window.*',
    'Ext.tip.*',
    'Ext.layout.container.Border',
    'Ext.tree.*',
    'Ext.data.TreeStore',
    'Ext.data.JsonStore',
    'Ext.window.MessageBox'
]);

Ext.onReady(function(){
    //7 days from now
    Ext.state.Manager.setProvider(new Ext.state.CookieProvider({ expires: new Date(new Date().getTime()+(10006060247)),}));

    //login form
    var logform = new Ext.create('loginform',{
        renderTo: 'container',
        // buttons: [
        // //{ text:'Register' },
        // { 
        //     text:'登陆',
        //     id:'loginbt',
        //     handler: function(){
        //         console.log('http://'+conf.ip+':'+conf.port+'/main/login');
        //         Ext.Ajax.request({
        //             url: 'http://'+conf.ip+':'+conf.port+'/main/login',
        //             params:{
        //                 skey:'5tgb8ik,',
        //                 userid:Ext.getCmp('userid').getValue(),
        //                 password:Ext.getCmp('passwd').getValue()
        //             },
        //             method : 'GET',                         
        //             success : function(response) {
        //                 var backinfo=response.responseText;
        //                 if(backinfo == '1'){
        //                     Ext.example.msg('错误!', '输入错误的用户名或者密码'); 
        //                 }else{
        //                     var strarray=backinfo.split('@');
        //                     Ext.util.Cookies.set('datau',strarray[0]);
        //                     Ext.util.Cookies.set('datak',strarray[1]);
        //                     window.location.href='main.html';
        //                 }                                
        //             },
        //             failure : function() {                               
        //                 //window.location.href='login.html';                                
        //             } 
        //         })
        //     }  
        // }]
    });

    var cv = Ext.util.Cookies.get("cv");
    if(cv == 1){ //checkbox is true
        Ext.getCmp('log-ck-rember').setValue(true);
        console.log("ck is set true");              
    }else{           
        Ext.getCmp('log-userid').setValue('');
        Ext.getCmp('log-passwd').setValue('');
        console.log('ck is set false ,userid and pass set null'); 
    }    

    // if(!Ext.getCmp('log-ck-rember').getValue()){
    //     Ext.getCmp('log-userid').setValue('');
    //     Ext.getCmp('log-passwd').setValue('');
    // }
    Ext.getCmp('log-userid').focus(false, 100);
    
});