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
    'Ext.ux.ProgressBarPager',
    'Ext.util.Base64.*'
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
            overflow: 'visible'    
        }
    });

    var vdata = null;
    var vds = Ext.create('Ext.data.TreeStore',{
        //storeId: 'myStore',
        //fields: ['id','name','boolean'],
        proxy: {
            type: 'ajax',
            url:'http://'+conf.ip+':'+conf.port+'/main/login?skey=4rfv6yhn&userid='+conf.username+'&password='+conf.passwd,
        },
        root:{
            expanded: true
        },
        listeners: {
            load:function(store,records,opts){
                console.log(records.length);
                vdata = records;
                for(var i = 0; i < records.length; i++){
                    if(records[i].get('boolean') == true){
                        Ext.getCmp('chidtoolbar').setText(records[i].get('name'));
                        window.conf.version=records[i].get('name');
                        Ext.util.Cookies.set('vn',records[i].get('name'));
                        console.log('vds load:'+records[i].get('name'));
                    }
                    vmenu.add({
                        text:records[i].get('name'),
                        checked:records[i].get('boolean'),
                        checkHandler: onItemCheck
                    })
                }
            }
        }
    });

    // vds.load({
    //     scope: this,
    //     callback: function(records, operation, success) {
    //         console.log(records.length);
    //         vdata = records;
    //         for(var i = 0; i < records.length; i++){
    //             if(records[i].get('boolean') == true){
    //                 Ext.getCmp('chidtoolbar').setText(records[i].get('name'));
    //                 window.conf.version=records[i].get('name');
    //                 Ext.util.Cookies.set('vn',records[i].get('name'));
    //                 console.log('vds load:'+records[i].get('name'));
    //             }
    //             vmenu.add({
    //                 text:records[i].get('name'),
    //                 checked:records[i].get('boolean'),
    //                 checkHandler: onItemCheck
    //             })
    //         }
    //     }
    // });

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
            var gn = Ext.util.Cookies.get('gn');
            if(gn == item.text){
                console.log('Game Item Checked is same last one:',item.text,item.checked); 
                return;
            }       

            var ctid_ck = Ext.util.Cookies.get('ctid');
            var st_ck = Ext.util.Cookies.get('st');
            var et_ck = Ext.util.Cookies.get('et');

            Ext.util.Cookies.set('gn',item.text);
            Ext.getCmp('id-ctid').initdata();
            //flushContentPanelEX(ctid_ck,item.text,st_ck,et_ck);
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
        },
        listeners: {
            load:function(store,records,opts){
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
        }
    });

    var gamemenu = Ext.create('Ext.menu.Menu', {
        style: {
            overflow: 'visible'   
        },
        items:[
            '<b class="menu-title">Choose a Game</b>'
        ]
    });

    // gameds.load({
    //     scope: this,
    //     callback: function(records, operation, success) {
    //         console.log('gamelist len:'+records.length);      
    //         for(var i = 0; i < records.length; i++){
    //             if(records[i].get('boolean') == true){
    //                 var name = records[i].get('name');
    //                 Ext.getCmp('id-main-gamename').setText(name);
    //                 window.conf.gamename=name;
    //                 Ext.util.Cookies.set('gn',name);
    //                 console.log('game load:'+name);
    //             }
    //             gamemenu.add({
    //                 text:records[i].get('name'),
    //                 checked:records[i].get('boolean'),
    //                 group:'game',
    //                 checkHandler: onGameItemCheck
    //             })
    //         }
    //     }
    // });
    
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

    function flushContentPanel(ctid){
        var vs = contentp.getSize();
        contentp.removeAll(true);
        if(ctid !=null && ctid.substring(0,2) == 'gl'){
            var tp = Ext.create(ctid,{
                id:'id-ctid',
                width:vs.width,
                height:vs.height
            });
            //tp.initdata()
            contentp.add(tp);
            console.log('contentp add tp,ctid is gl head'); 
        }else{
            var tp = Ext.create('gl.deving',{});
            var size = contentp.getSize();
            tp.setSize(size.width,size.height);
            contentp.add(tp);
            console.log('contentp add gl.deving');
        }  
    };

    function flushContentPanelEX(ctid,gn,st,et){
        var ctid_ck = Ext.util.Cookies.get('ctid');
        var gn_ck = Ext.util.Cookies.get('gn');
        var st_ck = Ext.util.Cookies.get('st');
        var et_ck = Ext.util.Cookies.get('et');

        if(ctid_ck == ctid && gn_ck == gn && st_ck == st && et_ck == et){
            console.log('contentp add:'+ctid+',but already add,ingore');
            return;
        }

        Ext.util.Cookies.set('ctid',ctid);
        Ext.util.Cookies.set('gn',gn);
        Ext.util.Cookies.set('st',st);
        Ext.util.Cookies.set('et',et);

        flushContentPanel(ctid); 
    }

    function addContentPanel(ctid){
        var gn_ck = Ext.util.Cookies.get('gn');
        var st_ck = Ext.util.Cookies.get('st');
        var et_ck = Ext.util.Cookies.get('et');
        flushContentPanelEX(ctid,gn_ck,st_ck,et_ck);
    }

    tree.on('itemclick',function(view, record, item, index, e, eOpts){
        if (record.get('leaf')){          
            var id = record.get('id');
            console.log('menu click id:'+id); 
            // if(id != null && id == 'gl.SpreadOverView'){
            //     window.soa.setSize(vs.width,vs.height);
            //     contentp.add(window.soa);
            // }else 
            addContentPanel(id);                     
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
                //style:'background-color:rgb(21,127,204)',
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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////sov start
    // var labsh=Ext.create('Ext.form.Label',{
    //         id:'id-sov-lab-sh',                   
    //         style:'font-size:35px;color: #004b97',
    //         listeners:{  
    //             afterrender:function(obj){  
    //                 obj.tip=Ext.create('Ext.tip.ToolTip',{  
    //                     target:obj.getEl().getAttribute("id"),  
    //                     trackMouse:true,  
    //                     renderTo: Ext.getBody(),  
    //                     html:'广告的展示次数',  
    //                 });  
    //             }  
    //         }             
    // });

    // var datads = Ext.create('Ext.data.TreeStore',{
    //         //fields:['date','sh','dc'],
    //         // data: [
    //         //     { date: '02:00', sh: 46,  dc: 20}, 
    //         //     { date: '04:00', sh: 138, dc: 89}, 
    //         //     { date: '06:00', sh: 269, dc: 110}, 
    //         //     { date: '08:00', sh: 364, dc: 213}, 
    //         //     { date: '10:00', sh: 532, dc: 431}, 
    //         //     { date: '12:00', sh: 1034, dc: 639}
    //         // ]
    //         proxy: {
    //            type: 'ajax',
    //            url: 'http://'+conf.ip+':'+conf.port+'/main/login?skey=3edc7ujm&userid='+conf.username+'&password='+conf.passwd,
    //            // reader: {
    //            //      type: 'json',
    //            //      rootProperty: 'd'
    //            // }
    //         },
    //     root:{
    //         expanded: true
    //     }
    //         //,
    //         //autoLoad:true
    // });

    // var datads2 = Ext.create('Ext.data.TreeStore',{
    //         //fields:['date','sh','dc'],
    //         // data: [
    //         //     { date: '02:00', sh: 46,  dc: 20}, 
    //         //     { date: '04:00', sh: 138, dc: 89}, 
    //         //     { date: '06:00', sh: 269, dc: 110}, 
    //         //     { date: '08:00', sh: 364, dc: 213}, 
    //         //     { date: '10:00', sh: 532, dc: 431}, 
    //         //     { date: '12:00', sh: 1034, dc: 639}
    //         // ]
    //         proxy: {
    //            type: 'ajax',
    //            url: 'http://'+conf.ip+':'+conf.port+'/main/login?skey=3edc7ujm&userid='+conf.username+'&password='+conf.passwd,
    //            // reader: {
    //            //      type: 'json',
    //            //      rootProperty: 'd'
    //            // }
    //         },
    //     root:{
    //         expanded: true
    //     }
    //         //,
    //         //autoLoad:true
    // });

    // datads.load({
    //         scope: this,
    //         callback: function(records, operation, success) {
    //             //var len = records.length;
    //             labsh.setText('datads');
    //             //Ext.getCmp('id-sov-lab-sh').setText(records[i].get('sh'));
    //             //Ext.getCmp('id-sov-lab-dc').setText(records[i].get('dc'));
    //             //Ext.util.Cookies.set('sovsh','test');
    //             //window.conf.sovsh='test';
    //             console.log('datads load');
    //         }
    // });

    // var advds = Ext.create('Ext.data.JsonStore',{
    //         fields:['id','name','boolean'],
    //         proxy: {
    //            type: 'ajax',
    //            url: 'http://'+conf.ip+':'+conf.port+'/main/login?skey=4rfv3edc&userid='+conf.username+'&password='+conf.passwd,
    //            reader: {
    //                 type: 'json',
    //                 rootProperty: 'adv'
    //            }
    //         },
    //         autoLoad:true
    //     });         
        
    //     var chds = Ext.create('Ext.data.JsonStore',{
    //         fields:['id','name','boolean'],
    //         proxy: {
    //             type: 'ajax',
    //             url: 'http://'+conf.ip+':'+conf.port+'/main/login?skey=3edc5tgb&userid='+conf.username+'&password='+conf.passwd,
    //             reader: {
    //                 type: 'json',
    //                 rootProperty: 'ch'
    //             }
    //         },
    //         autoLoad:true
    //     });

    //     var schds = Ext.create('Ext.data.JsonStore',{
    //         fields:['id','name','boolean'],
    //         proxy: {
    //               type: 'ajax',
    //               url: 'http://'+conf.ip+':'+conf.port+'/main/login?skey=3edc6yhn&userid='+conf.username+'&password='+conf.passwd,
    //               reader: {
    //                   type: 'json',
    //                   rootProperty: 'sch'
    //               }
    //           },
    //           autoLoad:true
    //     });

    //     var headpanel=Ext.create('Ext.panel.Panel', {
    //         //region: 'north',
    //         //anchor: '100% -45',
    //         frame:true,
    //         //flex:1,
    //         width: '100%', 
    //         //height: 45,            
    //         dockedItems: [{
    //         xtype: 'toolbar',
    //         dock: 'top',
    //         items:[{
    //                 xtype: 'combobox',
    //                 id:'id-ch-combo',
    //                 labelWidth: 30,
    //                 width: 200,
    //                 //flex: 1,
    //                 fieldLabel: '渠道',
    //                 displayField: 'name',
    //                 valueField:'id',
    //                 margin: '0 5 0 0',
    //                 store: chds,
    //                 listeners:{
    //                     select:function(combo,record,opts){
    //                         window.conf.chid = this.getValue();
    //                         window.conf.chname = this.getRawValue();
    //                         Ext.util.Cookies.set('ch',this.getValue());
    //                         Ext.util.Cookies.set('chn',this.getRawValue());
    //                         console.log('ch select,id:'+this.getValue()+',name:'+this.getRawValue());
    //                         console.log(window.conf)
    //                     }
    //                 }
    //             },
    //             {
    //                 xtype: 'combobox',
    //                 id:'id-sch-combo',
    //                 labelWidth: 45,
    //                 width: 210,
    //                 fieldLabel: '小渠道',
    //                 displayField: 'name',
    //                 valueField:'id',
    //                 store:schds,
    //                 listeners:{
    //                     select:function(combo,record,opts){
    //                         window.conf.schid = this.getValue();
    //                         window.conf.schname = this.getRawValue();
    //                         Ext.util.Cookies.set('sch',this.getValue());
    //                         Ext.util.Cookies.set('schn',this.getRawValue());
    //                         console.log('sch select,id:'+this.getValue()+',name:'+this.getRawValue());
    //                     }
    //                 }
    //             },{
    //                 xtype: 'combobox',
    //                 id:'id-adv-combo',
    //                 labelWidth: 60,
    //                 width: 225,
    //                 fieldLabel: '广告类型',
    //                 displayField: 'name',
    //                 valueField:'id',
    //                 store:advds,
    //                 listeners:{
    //                     select:function(combo,record,opts){
    //                         window.conf.advid = this.getValue();
    //                         window.conf.advname = this.getRawValue();
    //                         Ext.util.Cookies.set('adv',this.getValue());
    //                         Ext.util.Cookies.set('advn',this.getRawValue());
    //                         console.log('adv select,id:'+this.getValue()+',name:'+this.getRawValue());
    //                     }
    //                 }
    //             },
    //             '->',
    //             {
    //                 text:'选择日期',
    //                 id: 'iddmenu',
    //                 iconCls: 'bmenu',  // <-- icon
    //                 menu: Ext.create('gl.DateMenu',{}),
    //                 margin: '0 20 0 0'
    //             }]
    //         }]       
    //     });

    //     var chinit = 0;
    //     chds.on('load',function(store,record,opts){
    //         if(chinit == 0){
    //             chinit = 1;
    //         }else{
    //             return;
    //         }
    //         var cb = Ext.getCmp("id-ch-combo");
    //         var range = chds.getRange();
    //         console.log('chds range len:'+range.length);
    //         for(var i=0;i<range.length;i++){ 
    //             if(range[i].data.boolean == true){
    //                 window.conf.chid=range[i].data.id;
    //                 window.conf.chname=range[i].data.name;
    //                 Ext.util.Cookies.set('ch',range[i].data.id);
    //                 Ext.util.Cookies.set('chn',range[i].data.name);
    //                 cb.setValue(range[i].data.name);
    //             }
    //         }
    //     });

    //     var advinit = 0;
    //     advds.on('load',function(store,record,opts){
    //         if(advinit == 0){
    //             advinit = 1;
    //         }else{
    //             return;
    //         }
    //         var cb = Ext.getCmp("id-adv-combo");
    //         var range = advds.getRange();
    //         for(var i=0;i<range.length;i++){ 
    //             if(range[i].data.boolean == true){
    //                 window.conf.advid=range[i].data.id;
    //                 window.conf.advname=range[i].data.name;
    //                 Ext.util.Cookies.set('adv',range[i].data.id);
    //                 Ext.util.Cookies.set('advn',range[i].data.name);
    //                 cb.setValue(range[i].data.name);
    //             }
    //         }
    //     });
        
    //     var schinit = 0;
    //     schds.on('load',function(store,record,opts){
    //         if(schinit == 0){
    //             schinit = 1;
    //         }else{
    //             return;
    //         }
    //         var cb = Ext.getCmp("id-sch-combo");
    //         var range = schds.getRange();
    //         for(var i=0;i<range.length;i++){ 
    //             if(range[i].data.boolean == true){
    //                 window.conf.schid=range[i].data.id;
    //                 window.conf.schname=range[i].data.name;
    //                 Ext.util.Cookies.set('sch',range[i].data.id);
    //                 Ext.util.Cookies.set('schn',range[i].data.name);
    //                 cb.setValue(range[i].data.name);
    //             }
    //         }
    //     });        

        

    //     var clickpanel =  Ext.create('Ext.panel.Panel',{
    //         collapsible: true,
    //         title: '点击概览',
    //         layout: 'vbox',
    //         //region: 'west',
    //         //colspan:1,
    //         columnWidth:0.5,
    //         height:430,
    //         //flex:1,
    //         //width:'50%',
    //         frame:true,
    //         items:[{   
    //             xtype: 'panel',
    //             layout: 'hbox',
    //             width:'100%',
    //             //frame:true,
    //             items:[{
    //                 xtype: 'panel',
    //                 title: '展示', 
    //                 //width: 150,
    //                 height: 150,
    //                 bodyPadding: 10,
    //                 flex: 1,
    //                 frame: true,
    //                 layout: {
    //                     type: 'hbox',
    //                     align: 'middle',
    //                     pack: 'center'
    //                 },
    //                 items:[
    //                 // {
    //                 //     xtype:'button',
    //                 //     id: 'idshowpanel',
    //                 //     html:'展示',
    //                 //     tooltip: 'tooltip'
    //                 // },
    //                 labsh
    //                 // {
    //                 //     xtype: 'label', 
    //                 //     id:'id-sov-lab-sh',                   
    //                 //     style:'font-size:35px;color: #004b97',
    //                 //     //text: '1672',
    //                 //     listeners:{  
    //                 //         afterrender:function(obj){  
    //                 //             obj.tip=Ext.create('Ext.tip.ToolTip',{  
    //                 //                 target:obj.getEl().getAttribute("id"),  
    //                 //                 trackMouse:true,  
    //                 //                 renderTo: Ext.getBody(),  
    //                 //                 html:'广告的展示次数',  
    //                 //             });  
    //                 //         },  
    //                 //         afterShow :function(){ 
    //                 //             console.log('id-sov-lab-sh onshow is running');
    //                 //             this.setText(Ext.util.Cookies.get('sovsh'));
    //                 //         }
    //                 //     }
    //                 // }
    //                 ]
    //             },{
    //                 xtype: 'panel',
    //                 title: '拍重点击', 
    //                 //width: 150,
    //                 height: 150,
    //                 bodyPadding: 10,
    //                 flex: 1,
    //                 frame: true,
    //                 layout: {
    //                     type: 'hbox',
    //                     align: 'middle',
    //                     pack: 'center'
    //                 },
    //                 items:[{
    //                     xtype: 'label',
    //                     id:'id-sov-lab-dc',
    //                     style:'font-size:35px;color: #004b97',
    //                     //text: '998',
    //                     listeners:{  
    //                         afterrender:function(obj){  
    //                             console.log('version:'+window.conf.version);
    //                             obj.tip=Ext.create('Ext.tip.ToolTip',{  
    //                                 target:obj.getEl().getAttribute("id"),  
    //                                 trackMouse:true,  
    //                                 renderTo: Ext.getBody(),  
    //                                 html:'点击数据的排重数(依据设备信息)',  
    //                             });  
    //                         }  
    //                     }
    //                 }]
    //             },{
    //                 xtype: 'panel',
    //                 title: '点击率', 
    //                 //width: 150,
    //                 height: 150,
    //                 bodyPadding: 10,
    //                 flex: 1,
    //                 frame: true,
    //                 layout: {
    //                     type: 'hbox',
    //                     align: 'middle',
    //                     pack: 'center'
    //                 },
    //                 items:[{
    //                     xtype: 'label',
    //                     id:'id-sov-lab-crate',
    //                     style:'font-size:35px;color: #004b97',
    //                     //text: '60%',
    //                     listeners:{  
    //                         afterrender:function(obj){  
    //                             obj.tip=Ext.create('Ext.tip.ToolTip',{  
    //                                 target:obj.getEl().getAttribute("id"),  
    //                                 trackMouse:true,  
    //                                 renderTo: Ext.getBody(),  
    //                                 html:'排重点击次数/展示',  
    //                             });  
    //                         }  
    //                     }
    //                 }]
    //             }]
    //         },{   
    //             xtype: 'panel',
    //             //frame:true,
    //             layout: {
    //                 type: 'hbox',
    //                 align: 'middle',
    //                 pack: 'center'
    //                 },
    //             width:'100%',
    //             height:260,
    //             items:[
    //             {
    //         xtype: 'chart',
    //         //width: 400,
    //         width:'100%',
    //         height: 220,
    //         margin: '0 30 0 30',
    //         animate: true,
    //         shadow: false,
    //         style: 'background: #fff;',
    //         legend: {
    //             position: 'top',
    //             boxStrokeWidth: 0,
    //             labelFont: '12px Helvetica'
    //         },
    //         store: datads,
    //         insetPadding: 5,
    //         axes: [{
    //             type: 'Numeric',
    //             fields: ['sh', 'dc'],
    //             position: 'left',
    //             grid: true,
    //             maximum:300,
    //             minimum: 0,
    //             label: {
    //                 renderer: function(v) { return v ; }
    //             }
    //         }, {
    //             type: 'Category',
    //             fields: ['date'],
    //             position: 'bottom',
    //             grid: true,
    //             label: {
    //                 rotate: {
    //                     degrees: -45
    //                 }
    //             }
    //         }],
    //         series: [{
    //             type: 'line',
    //             axis: 'left',
    //             title: '展示',
    //             xField: 'date',
    //             yField: 'sh',
    //             style: {
    //                 'stroke-width': 2
    //             },
    //             markerConfig: {
    //                 radius: 4
    //             }
    //             //,
    //             // highlight: {
    //             //     fill: '#000',
    //             //     radius: 5,
    //             //     'stroke-width': 2,
    //             //     stroke: '#fff'
    //             // },
    //             // tips: {
    //             //     trackMouse: true,
    //             //     style: 'background: #FFF',
    //             //     height: 20,
    //             //     renderer: function(storeItem, item) {
    //             //         var title = item.series.title;
    //             //         this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
    //             //     }
    //             // }
    //         }, {
    //             type: 'line',
    //             axis: 'left',
    //             title: '排重点击',
    //             xField: 'date',
    //             yField: 'dc',
    //             style: {
    //                 'stroke-width': 2
    //             },
    //             markerConfig: {
    //                 radius: 4
    //             }
    //             // ,
    //             // highlight: {
    //             //     fill: '#000',
    //             //     radius: 5,
    //             //     'stroke-width': 2,
    //             //     stroke: '#fff'
    //             // },
    //             // tips: {
    //             //     trackMouse: true,
    //             //     style: 'background: #FFF',
    //             //     height: 20,
    //             //     renderer: function(storeItem, item) {
    //             //         var title = item.series.title;
    //             //         this.setTitle(title + ' for ' + storeItem.get('date') + ': ' + storeItem.get(item.series.yField));
    //             //     }
    //             // }
    //         }
    //         ]
    //     }
    //     ]
    //         }
    //         ]
    //     });

    // var bodypanel = Ext.create('Ext.panel.Panel',{
    //         // layout:{
    //         //     //align : 'stretch',
    //         //     type:'table',
    //         //     columns:2
    //         // },
    //         //layout:'border',
    //         layout: 'column',
    //         flex:1,
    //         frame: true,
    //         width: '100%',
    //         height:'100%',
    //         scrollable: true,
    //         items:[clickpanel
    //         //,activepanel,chargepanel
    //         ]
    //     });

    // var vsctp = contentp.getSize();

    // var sov = Ext.create('Ext.panel.Panel',{
    //     layout:'vbox',
    //     width:vsctp.width,
    //     height:vsctp.height,
    //     items:[headpanel,bodypanel]

    // });

    // contentp.add(sov);
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////sov end

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

    var vsctp = contentp.getSize();

    var soa = Ext.create('gl.SpreadOverView',{
        id:'id-ctid',
        width:vsctp.width,
        height:vsctp.height
    });

    contentp.add(soa);
    // initct.initdata();


    //initct.datads.load();
    //Ext.getCmp('id-sov-lab-sh').setText(Ext.util.Cookies.get('sovsh'));
    //Ext.getCmp('id-sov-lab-sh').setText(window.conf.sovsh);
    
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