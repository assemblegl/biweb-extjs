Ext.require([
    'Ext.tab.*',
    'Ext.window.*',
    'Ext.tip.*',
    'Ext.layout.container.Border',
    'Ext.tree.*',
    'Ext.data.TreeStore',
    'Ext.data.JsonStore',
    'Ext.grid.*',
    'Ext.chart.*',
    'Ext.form.field.Date',
    'Ext.menu.Menu',
    'Ext.window.MessageBox',
    'Ext.toolbar.Paging',
    'Ext.ux.ProgressBarPager'
]);

Ext.onReady(function(){
    conf.username = Ext.util.Cookies.get("u");
    conf.passwd = Ext.util.Cookies.get("k");
    conf.gsid = Ext.util.Cookies.get("gs");
    conf.gsname = Ext.util.Cookies.get("gsn");

    if (conf.username==null || conf.passwd==null || conf.gsid == null || conf.gsname == null){
               window.location.href='login.html';         
        }
    
    console.log('u:'+conf.username+',k:'+conf.passwd+",gs:"+conf.gsid+",gsn:"+conf.gsname);

    //set language
    url = Ext.util.Format.format("../../packages/ext-locale/build/ext-locale-zh_CN.js", 'zh_CN');
    Ext.Loader.loadScript({
      url: url,
      scope: this
    });
    
    var menustore=Ext.create('Ext.data.TreeStore', {
    proxy: {
        type:'ajax',
        url:'http://'+conf.ip+':'+conf.port+'/main/login?skey=5tgb7ujm&userid='+conf.username+'&password='+conf.passwd
    },
    root:{
       expanded: true
    }
    });

    //create chid menu
    function onItemCheck(item, checked){       
        var clickitemname = item.text;       
        console.log('chid Item Checked:',item.text,item.checked);

        var ichecked = 0;
        var checkedname = '';
        vmenu.items.each(function(it,index,length){
            if(it.checked){    
                if(ichecked != 0){
                    checkedname+='+';
                }
                checkedname+=it.text;
                ichecked++;
            }
        });

        //rebuild menu
        if(ichecked==0){
            vmenu.removeAll(true);
            for (var i = 0; i < vdata.length; i++) {  
                var record = vdata[i]; 
                var checkflag = false;
                if(record.get('name') == clickitemname){
                    checkflag = true;
                }
                vmenu.add({
                    text:record.get('name'),
                    checked:checkflag,
                    checkHandler: onItemCheck
                })  
            }
            Ext.example.msg('警告！','至少要选择一个版本');
            console.log('checked==0 rebuild chid menu:',item.text,item.checked);
            return;
        }else{
            var m=Ext.getCmp('chidtoolbar');
            m.setText(checkedname);
            window.conf.version=checkedname;
            Ext.util.Cookies.set('vn',checkedname);
            console.log('version:'+window.conf.version);
        }
        
    };

    // var chidds = Ext.create('Ext.data.JsonStore', {
    //     fields: ['chid','chname','boolean'],
    //     data: [
    //         { chid: '1' , chname:'ios'    ,boolean:true },
    //         { chid: '2' , chname:'android',boolean:false}
    //     ]
    // });

    var vmenu = Ext.create('Ext.menu.Menu', {
        style: {
            overflow: 'visible'     // For the Combo popup
        }
    });

    var vds = Ext.create('Ext.data.TreeStore',{
        //storeId: 'myStore',
        //fields: ['id','name','boolean'],
        proxy: {
            type: 'ajax',
            url:'http://'+conf.ip+':'+conf.port+'/main/login?skey=4rfv6yhn&userid='+conf.username+'&password='+conf.passwd,
        },
        root:{
            expanded: true
        }
    });

    var vdata = null;

    vds.load({
        scope: this,
        callback: function(records, operation, success) {
            console.log(records.length);
            vdata = records;
            for(var i = 0; i < records.length; i++){
                if(records[i].get('boolean') == true){
                    Ext.getCmp('chidtoolbar').setText(records[i].get('name'));
                    window.conf.version=records[i].get('name');
                    Ext.util.Cookies.set('vn',records[i].get('name'));
                    //console.log(records[i].get('name'));
                }
                vmenu.add({
                    text:records[i].get('name'),
                    checked:records[i].get('boolean'),
                    checkHandler: onItemCheck
                })
            }
        }
    });

    //init menu
    // for (var i = 0; i < chidds.getCount(); i++) {  
    //     var record = chidds.getAt(i); 
    //     vmenu.add({
    //         text:record.get('chname'),
    //         checked:record.get('boolean'),
    //         checkHandler: onItemCheck
    //     })  
    // }


    //create game menu 
    function onGameItemCheck(item, checked){
        if(checked == true){
            Ext.getCmp('id-main-gamename').setText(item.text);  
            window.conf.gamename=item.text; 
            Ext.util.Cookies.set('gn',item.text);  
            console.log('Game Item Checked:',item.text,item.checked);   
        }       
             
    };

//    var gameds = Ext.create('Ext.data.JsonStore', {
//        fields: ['id','name','boolean'],
//        data: [
//            { id: '1' , name:'game1',boolean:true },
//            { id: '2' , name:'game2',boolean:false},
//            { id: '3' , name:'game3',boolean:false}
//        ]
//    });
    
//  var gameds = Ext.create('Ext.data.JsonStore', {
//  fields: ['id','name','boolean'],
//  proxy: {
//      type: 'ajax',
//      url: 'http://'+conf.ip+':'+conf.port+'/main/login?skey=4rfv5tgb&userid='+Ext.util.Cookies.get('datau')+'&password='+Ext.util.Cookies.get('datak'),
//      reader: {
//          type: 'json',
//          rootProperty: 'g'
//      }
//  },
//  autoLoad:true
//});
    
    var gameds = Ext.create('Ext.data.TreeStore',{
        proxy: {
            type: 'ajax',
            url:'http://'+conf.ip+':'+conf.port+'/main/login?skey=4rfv5tgb&userid='+conf.username+'&password='+conf.passwd,
        },
        root:{
            expanded: true
        }
    });

    var gamemenu = Ext.create('Ext.menu.Menu', {
        style: {
            overflow: 'visible'     // For the Combo popup
        },
        items:[
            '<b class="menu-title">Choose a Game</b>'
        ]
    });

    gameds.load({
        scope: this,
        callback: function(records, operation, success) {
            console.log('gamelist len:'+records.length);      
            for(var i = 0; i < records.length; i++){
                if(records[i].get('boolean') == true){
                    var name = records[i].get('name');
                    Ext.getCmp('id-main-gamename').setText(name);
                    window.conf.gamename=name;
                    Ext.util.Cookies.set('gn',name);
                    console.log('game load:'+name);
                }
                gamemenu.add({
                    text:records[i].get('name'),
                    checked:records[i].get('boolean'),
                    group:'game',
                    checkHandler: onGameItemCheck
                })
            }
        }
    });
    
    //init game menu
//    for (var i = 0; i < gameds.length; i++) {  
//        var record = gameds[i]; 
//        gamemenu.add({
//            text:record.get('name'),
//            checked:record.get('boolean'),
//            group:'game',
//            checkHandler: onGameItemCheck
//        })  
//    }
    
//    for (var i = 0; i < gameds.getCount(); i++) {  
//        var record = gameds.getAt(i); 
//        gamemenu.add({
//            text:record.get('name'),
//            checked:record.get('boolean'),
//            group:'game',
//            checkHandler: onGameItemCheck
//        })  
//    }

    // chds = Ext.create('Ext.data.JsonStore', {
    //         fields: ['channel','schannel','adtype'],
    //         data: [
    //             { channel: 'channel1'  ,schannel:'schannel1' ,adtype:'adtype1'  },
    //             { channel: 'channel2'  ,schannel:'schannel2' ,adtype:'adtype2'  },
    //             { channel: 'channel3'  ,schannel:'schannel3' ,adtype:'adtype3'  },
    //             { channel: 'channel4'  ,schannel:'schannel4' ,adtype:'adtype4'  },
    //             { channel: 'channel5'  ,schannel:'schannel5' ,adtype:'adtype5'  },
    //             { channel: 'channel6'  ,schannel:'schannel6' ,adtype:'adtype6'  },
    //             { channel: 'channel7'  ,schannel:'schannel7' ,adtype:'adtype7'  },
    //             { channel: 'channel8'  ,schannel:'schannel8' ,adtype:'adtype8'  },
    //             { channel: 'channel9'  ,schannel:'schannel9' ,adtype:'adtype9'  },
    //             { channel: 'channel10' ,schannel:'schannel10',adtype:'adtype10' },
    //             { channel: 'channel11' ,schannel:'schannel11',adtype:'adtype11' }       
    //         ]
    //     });

        // idxds = Ext.create('Ext.data.JsonStore', {
        //     fields: ['id','name','boolean','num'],
        //     data: [
        //         { id: '1' , name:'点击'       , boolean:true  , num:'18'},
        //         { id: '2' , name:'排重点击'   , boolean:true  , num:'19'},
        //         { id: '3' , name:'点击率'     , boolean:true  , num:'18320'},
        //         { id: '4' , name:'激活推广量' , boolean:true  , num:'213'},
        //         { id: '5' , name:'激活自然量' , boolean:true  , num:'860'},
        //         { id: '6' , name:'激活总量'   , boolean:false  , num:'1073'},
        //         { id: '7' , name:'ROI'        ,boolean:false   , num:'32%'},
        //         { id: '8' , name:'充值金额'   , boolean:false  , num:'365'},
        //         { id: '9' , name:'arpu'       , boolean:false , num:'46'},
        //         { id: '10' , name:'arppu'      , boolean:false , num:'680'},
        //         { id: '11' , name:'新增付费率' , boolean:false , num:'1733'},
        //         { id: '12' , name:'DAU总量'    , boolean:false , num:'482'},
        //         { id: '13', name:'DAU自然量'  , boolean:false , num:'364'},
        //         { id: '14', name:'DAU推广量'  , boolean:false , num:'20032'},
        //         { id: '15', name:'总量次日留' , boolean:false , num:'9600'}, 
        //         { id: '16', name:'总量3日留'  , boolean:false , num:'7500'},
        //         { id: '17', name:'总量7日留'  , boolean:false , num:'3100'}, 
        //         { id: '18', name:'总量14日留' , boolean:false , num:'2058'},
        //         { id: '19', name:'总量30日留' , boolean:false , num:'1260'}     
        //     ]
        // });

        // var idxmenu = Ext.create('Ext.menu.Menu', {
        //     id: 'idxmenu',
        //     style: {
        //         overflow: 'visible'     // For the Combo popup
        //     }  
        // });

        // //init menu
        // for (var i = 0; i < idxds.getCount(); i++) {  
        //     var record = idxds.getAt(i); 
        //     idxmenu.add({
        //         text:record.get('name'),
        //         checked:record.get('boolean'),
        //         checkHandler: onItemCheck
        //     })  
        // } 

    // var headpanel=Ext.create('Ext.panel.Panel', {
    //         region: 'center',
    //         //anchor: '100% -45',
    //         frame:true,
    //         //width: '100%', 
    //         //height: 45,            
    //         dockedItems: [{
    //         xtype: 'toolbar',
    //         dock: 'top',
    //         items:[{
    //                 xtype: 'combobox',
    //                 labelWidth: 30,
    //                 width: 200,
    //                 //flex: 1,
    //                 fieldLabel: '渠道',
    //                 displayField: 'channel',
    //                 margin: '0 5 0 0',
    //                 //store: chds
    //             },
    //             {
    //                 xtype: 'combobox',
    //                 labelWidth: 45,
    //                 width: 210,
    //                 fieldLabel: '小渠道',
    //                 displayField: 'schannel',
    //                 //store:chds
    //             },{
    //                 xtype: 'combobox',
    //                 labelWidth: 60,
    //                 width: 225,
    //                 fieldLabel: '广告类型',
    //                 displayField: 'adtype',
    //                 //store:chds
    //             },
    //             '->',
    //             {
    //                 text:'选择日期',
    //                 id: 'iddmenu',
    //                 iconCls: 'bmenu',  // <-- icon
    //                 menu: Ext.create('gl.DateMenu',{})
    //             },{
    //                 text:'选择指标',
    //                 iconCls: 'bmenu',  // <-- icon
    //                 menu: idxmenu
    //             },{
    //                 //hold datefield pos
    //                 xtype: 'label',
    //                 label:'',
    //                 width: 25        
    //             }]
    //         }]       
    //     });

    // var centerpanel = Ext.create('Ext.panel.Panel',{
    //     region: 'center',
    //     frame: true,
    //     items:[
    //         headpanel,
    //         contentp
    //         ]
    // });

    //create content panel
    var contentp = Ext.create('Ext.panel.Panel',{
        region: 'center',
        frame: true
    });

    // var vsctp = contentp.getSize();

    // var initct = Ext.create('gl.SpreadOverView',{
    //     width:vsctp.width,
    //     height:vsctp.height
    // }); 


    // contentp.add(initct);



    // var st=Ext.create('Ext.data.TreeStore', {      
    //     proxy: {
    //         type:'ajax',
    //         url:'resource/navigation.json'
    //     },
    //     root:{
    //         expanded: true
    //     }
    // });


    // var newtree = Ext.create('Ext.panel.Panel', {
    //     layout: 'accordion', //手风琴布局
    //     layoutConfig: {
    //         titleCollapse: false,
    //         animate: true,
    //         activeOnTop: true
    //     },
    //     items:[
    //     st]
    //     // items: [tree
    //     // , {
    //     //     title: '第二个应用程序',
    //     //     html: '<h1>面板2</h1>'
    //     // }, {
    //     //     title: '第三个应用程序',
    //     //     html: '<h1>面板3</h1>'
    //     // }]
    // });

    var tree = Ext.create('Ext.tree.Panel',{
        //title: "Menu",
        rootVisible: false,
        hideHeaders: true,
        lines: false,
        useArrows: true,
        //collapsible: true,
        //split: true,
        store:menustore,
        //containerScroll: true,
        scrollable: true,
        //bodyStyle: 'background:rgb(21,127,204)',
        // root: {
        //     expanded: true,
        //     children: [{
        //         "text"      : "推广概览",
        //         "id"    : "SpreadOverView",
        //         "leaf"  : true
        //     },{
        //         "text"      : "推广活动",
        //         "id"    : "SpreadEvents",
        //         "leaf"  : true
        //     }
            // {
            //     "text"      : "活动",
            //     "expanded"  : true,
            //     "children"  : [
            //         {
            //             "id"    : "SpreadEvents",
            //             "text"  : "推广活动",
            //             "leaf"  : true
            //         }]
            // }
        //     ]
        // }
    });

    tree.on('itemclick',function(view, record, item, index, e, eOpts){
        if (record.get('leaf')){
            var vs = contentp.getSize();
            contentp.removeAll(true);
            var id = record.get('id');
            console.log('id:'+id); 
            if(id !=null && id.substring(0,2) == 'gl'){
                var tp = Ext.create(id,{
                    width:vs.width,
                    height:vs.height
                });
                contentp.add(tp);
                console.log('contentp add tp,id is gl head'); 
            }else{
                var tp = Ext.create('gl.deving',{});
                var size = contentp.getSize();
                tp.setSize(size.width,size.height);
                contentp.add(tp);
                console.log('contentp add gl.deving');
            }                     
        }        
    });

    var win,
         button = Ext.get('show-btn');

    var vs = Ext.getBody().getViewSize();
    //         win.setSize(vs.width, vs.height);

    win = Ext.create('widget.window', {
        //renderTo: 'container',
        title: 'BI System',
        header: {
            titlePosition: 2,
            titleAlign: 'center'
        },
        closable: true,
        closeAction: 'hide',
        maximizable: true,
        scrollable: false,
        animateTarget: Ext.getBody(),
        //width: 800,
        width: vs.width,
        height: vs.height,
        //minWidth: 350,
        //height: 550,
        tools: [{type: 'pin'}],
        layout: {
            type: 'border',
            padding: 5
        },
        items: [{
            xtype: 'panel',
            region: 'north',
            //bodyStyle: 'background:#CCC',
            items:[
            {
                xtype: 'toolbar',
                width:'100%',
                style:'background-color:rgb(21,127,204)',
                items:['->',
                    {
                        text:'app列表',
                        id:'gametoolbar',
                        width:180,
                        iconCls: 'bmenu',  
                        menu: gamemenu
                    }
                    ,{
                        text:'帮助中心',
                        width:180,
                        iconCls: 'bmenu',
                        disabled:true  
                        //menu: gamemenu
                    },{
                        text:'选择语言',
                        width:180,
                        iconCls: 'bmenu', 
                        disabled:true 
                        //menu: gamemenu
                    },{
                        text:'账户信息',
                        width:180,
                        iconCls: 'bmenu',
                        disabled:true  
                        //menu: gamemenu
                    }
                ]
            }
            ]
        },{
            region: 'west',
            //title: '导航栏',
            region: 'west',
            width: 200,
            frame: true,
            //split: true,
            //collapsible: true,
            floatable: false,
            //bodyStyle: 'background:rgb(21,127,204)',
            items:[
            {
                xtype: 'toolbar',
                width:'100%',
                //style:'background-color:rgb(21,127,204)',
                items:[
                    {
                    text:'appname',
                    id:'id-main-gamename',
                    width:'100%',
                    iconCls: 'bmenu'
                }]
            },
            {
                xtype: 'toolbar',
                width:'100%',
                //style:'background-color:rgb(21,127,204)',
                items:[
                {
                    text:'ios',
                    id:'chidtoolbar',
                    width:'100%',
                    iconCls: 'bmenu',  
                    menu: vmenu
                }]
            },
            tree
            ]
        },contentp
        ]
    });

    win.show();

    var vsctp = contentp.getSize();

    var initct = Ext.create('gl.SpreadOverView',{
        width:vsctp.width,
        height:vsctp.height
    });

    contentp.add(initct);

    //win.setSize(vs.width, vs.height);
    

    // button.on('click', function(){
    //     if (!win) {
    //         win = Ext.create('widget.window', {
    //             title: 'Layout Window with title <em>after</em> tools',
    //             header: {
    //                 titlePosition: 2,
    //                 titleAlign: 'center'
    //             },
    //             closable: true,
    //             closeAction: 'hide',
    //             maximizable: true,
    //             scrollable: false,
    //             animateTarget: Ext.getBody(),
    //             width: 800,
    //             minWidth: 350,
    //             height: 550,
    //             tools: [{type: 'pin'}],
    //             layout: {
    //                 type: 'border',
    //                 padding: 5
    //             },
    //             items: [{
    //                 region: 'west',
    //                 title: 'Navigation',
    //                 width: 200,
    //                 split: true,
    //                 collapsible: true,
    //                 floatable: false,
    //                 items:[
                        
    //                     tree
    //                 ]
    //             },contentp
    //             ]
    //         });
    //     }
    //     button.dom.disabled = true;
    //     if (win.isVisible()) {
    //         win.hide(this, function() {
    //             button.dom.disabled = false;
    //         });
    //     } else {
    //         var vs = Ext.getBody().getViewSize();
    //         win.setSize(vs.width, vs.height);
    //         win.show(this, function() {
    //             button.dom.disabled = false;
    //         });
    //     }
    // });


    //login form
    // var logform = new Ext.create('loginform',{
    //     renderTo: 'container',
    //     buttons: [
    //     //{ text:'Register' },
    //     { 
    //         text:'Login',
    //         id:'login-button',
    //         handler: function(){
    //            button.fireEvent('click'); 
    //         }  
    //     }]
    // });

    // Ext.getCmp('login-uid-txtf').focus(false, 100);
    
});