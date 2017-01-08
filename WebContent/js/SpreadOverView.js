var gl = gl || {};
Ext.define('gl.SpreadOverView', {
    extend: 'Ext.Panel',
    xtype: 'marked-line',
    bodyStyle: 'background: transparent !important',
    // layout:{
    //     //align : 'stretch',
    //     type:'table',
    //     columns:2
    // },
    //layout: 'anchor',
    layout:'vbox',
    //scrollable: true,
    //{
        //type: 'vbox',
        //align : 'stretch',
        //pack  : 'start',
        //pack: 'center'
    //},
    // exampleDescription: [
    //     'Marked lines are multi-series lines displaying trends across multiple categories. Markers are placed at each point to clearly depict their position on the chart. '
    // ],
    // themes: {
    //     classic: {
    //         percentChangeColumn: {
    //             width: 75
    //         }
    //     },
    //     neptune: {
    //         percentChangeColumn: {
    //             width: 100
    //         }
    //     }
    // }, 
    initComponent: function() {
        var me = this;

        this.myDataStore = Ext.create('Ext.data.JsonStore', {
            fields: ['month', 'data1', 'data2', 'data3', 'data4' ],
            data: [
                { month: '02:00', data1: 46, data2: 20, data3: 35, data4: 4 },
                { month: '04:00', data1: 138, data2: 89, data3: 36, data4: 5 },
                { month: '06:00', data1: 269, data2: 110, data3: 37, data4: 4 },
                { month: '08:00', data1: 364, data2: 213, data3: 38, data4: 5 },
                { month: '10:00', data1: 532, data2: 431, data3: 39, data4: 4 },
                { month: '12:00', data1: 1034, data2: 639, data3: 42, data4: 4 },
                { month: '14:00', data1: 1255, data2: 822, data3: 43, data4: 4 },
                { month: '16:00', data1: 1672, data2: 998, data3: 44, data4: 4 },
                //{ month: 'Sep', data1: 16, data2: 32, data3: 44, data4: 4 },
                //{ month: 'Oct', data1: 16, data2: 32, data3: 45, data4: 4 },
                //{ month: 'Nov', data1: 15, data2: 31, data3: 46, data4: 4 },
                //{ month: 'Dec', data1: 15, data2: 31, data3: 47, data4: 4 }
            ]
        });

        // chds = Ext.create('Ext.data.JsonStore', {
        //     fields: ['channel','schannel','adtype'],
        //     data: [
        //         { channel: 'channel1'  ,schannel:'schannel1' ,adtype:'adtype1'  },
        //         { channel: 'channel2'  ,schannel:'schannel2' ,adtype:'adtype2'  },
        //         { channel: 'channel3'  ,schannel:'schannel3' ,adtype:'adtype3'  },
        //         { channel: 'channel4'  ,schannel:'schannel4' ,adtype:'adtype4'  },
        //         { channel: 'channel5'  ,schannel:'schannel5' ,adtype:'adtype5'  },
        //         { channel: 'channel6'  ,schannel:'schannel6' ,adtype:'adtype6'  },
        //         { channel: 'channel7'  ,schannel:'schannel7' ,adtype:'adtype7'  },
        //         { channel: 'channel8'  ,schannel:'schannel8' ,adtype:'adtype8'  },
        //         { channel: 'channel9'  ,schannel:'schannel9' ,adtype:'adtype9'  },
        //         { channel: 'channel10' ,schannel:'schannel10',adtype:'adtype10' },
        //         { channel: 'channel11' ,schannel:'schannel11',adtype:'adtype11' }       
        //     ]
        // });
        
        var advds = Ext.create('Ext.data.JsonStore',{
        	fields:['id','name','boolean'],
        	 proxy: {
        	      type: 'ajax',
        	      url: 'http://'+conf.ip+':'+conf.port+'/main/login?skey=4rfv3edc&userid='+conf.username+'&password='+conf.passwd,
        	      reader: {
        	          type: 'json',
        	          rootProperty: 'adv'
        	      }
        	  },
        	  //autoLoad:true
        });
        advds.load();          
        
        var chds = Ext.create('Ext.data.JsonStore',{
            fields:['id','name','boolean'],
            proxy: {
                type: 'ajax',
                url: 'http://'+conf.ip+':'+conf.port+'/main/login?skey=3edc5tgb&userid='+conf.username+'&password='+conf.passwd,//+'&game='+Ext.util.Cookies.get('gamename'),
                // extraParams:{
                //     'game':Ext.util.Cookies.get('gamename')
                //     //'game':Ext.getCmp('id-main-gamename').getText()
                // },
                reader: {
                    type: 'json',
                    rootProperty: 'ch'
                }
            },
            autoLoad:true
        });

        //chds.load();
        // chds.load({
        //     params:{
        //         game:Ext.getCmp('id-main-gamename').getText()
        //     } 
        // });

        var schds = Ext.create('Ext.data.JsonStore',{
            fields:['id','name','boolean'],
            proxy: {
                  type: 'ajax',
                  url: 'http://'+conf.ip+':'+conf.port+'/main/login?skey=3edc6yhn&userid='+conf.username+'&password='+conf.passwd,//+'&game='+conf.gamename,
                  reader: {
                      type: 'json',
                      rootProperty: 'sch'
                  }
              }
        });
        schds.load();

//        var chds = Ext.create('Ext.data.JsonStore',{
//        	fields:['id','name','boolean'],
//        	 proxy: {
//        	      type: 'ajax',
//        	      url: 'http://'+conf.ip+':'+conf.port+'/main/login?skey=4rfv3edc&userid='+Ext.util.Cookies.get('datau')+'&password='+Ext.util.Cookies.get('datak'),
//        	      reader: {
//        	          type: 'json',
//        	          rootProperty: 'ch'
//        	      }
//        	  },
//        	  autoLoad:true
//        });
//        
//        var schds = Ext.create('Ext.data.JsonStore',{
//        	fields:['id','name','boolean'],
//        	 proxy: {
//        	      type: 'ajax',
//        	      url: 'http://'+conf.ip+':'+conf.port+'/main/login?skey=4rfv3edc&userid='+Ext.util.Cookies.get('datau')+'&password='+Ext.util.Cookies.get('datak'),
//        	      reader: {
//        	          type: 'json',
//        	          rootProperty: 'sch'
//        	      }
//        	  },
//        	  autoLoad:true
//        });

        idxds = Ext.create('Ext.data.JsonStore', {
            fields: ['id','name','boolean','num'],
            data: [
                { id: '1' , name:'点击'       , boolean:true  , num:'18'},
                { id: '2' , name:'排重点击'   , boolean:true  , num:'19'},
                { id: '3' , name:'点击率'     , boolean:true  , num:'18320'},
                { id: '4' , name:'激活推广量' , boolean:true  , num:'213'},
                { id: '5' , name:'激活自然量' , boolean:true  , num:'860'},
                { id: '6' , name:'激活总量'   , boolean:false  , num:'1073'},
                { id: '7' , name:'ROI'        ,boolean:false   , num:'32%'},
                { id: '8' , name:'充值金额'   , boolean:false  , num:'365'},
                { id: '9' , name:'arpu'       , boolean:false , num:'46'},
                { id: '10' , name:'arppu'      , boolean:false , num:'680'},
                { id: '11' , name:'新增付费率' , boolean:false , num:'1733'},
                { id: '12' , name:'DAU总量'    , boolean:false , num:'482'},
                { id: '13', name:'DAU自然量'  , boolean:false , num:'364'},
                { id: '14', name:'DAU推广量'  , boolean:false , num:'20032'},
                { id: '15', name:'总量次日留' , boolean:false , num:'9600'}, 
                { id: '16', name:'总量3日留'  , boolean:false , num:'7500'},
                { id: '17', name:'总量7日留'  , boolean:false , num:'3100'}, 
                { id: '18', name:'总量14日留' , boolean:false , num:'2058'},
                { id: '19', name:'总量30日留' , boolean:false , num:'1260'}     
            ]
        });

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

        var headpanel=Ext.create('Ext.panel.Panel', {
            //region: 'north',
            //anchor: '100% -45',
            frame:true,
            //flex:1,
            width: '100%', 
            //height: 45,            
            dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items:[{
                    xtype: 'combobox',
                    id:'id-ch-combo',
                    labelWidth: 30,
                    width: 200,
                    //flex: 1,
                    fieldLabel: '渠道',
                    displayField: 'name',
                    valueField:'id',
                    margin: '0 5 0 0',
                    store: chds,
                    listeners:{
                        select:function(combo,record,opts){
                            window.conf.chid = this.getValue();
                            window.conf.chname = this.getRawValue();
                            Ext.util.Cookies.set('ch',this.getValue());
                            Ext.util.Cookies.set('chn',this.getRawValue());
                            console.log('ch select,id:'+this.getValue()+',name:'+this.getRawValue());
                            console.log(window.conf)
                        }
                    }
                },
                {
                    xtype: 'combobox',
                    id:'id-sch-combo',
                    labelWidth: 45,
                    width: 210,
                    fieldLabel: '小渠道',
                    displayField: 'name',
                    valueField:'id',
                    store:schds,
                    listeners:{
                        select:function(combo,record,opts){
                            window.conf.schid = this.getValue();
                            window.conf.schname = this.getRawValue();
                            Ext.util.Cookies.set('sch',this.getValue());
                            Ext.util.Cookies.set('schn',this.getRawValue());
                            console.log('sch select,id:'+this.getValue()+',name:'+this.getRawValue());
                        }
                    }
                },{
                    xtype: 'combobox',
                    id:'id-adv-combo',
                    labelWidth: 60,
                    width: 225,
                    fieldLabel: '广告类型',
                    displayField: 'name',
                    valueField:'id',
                    store:advds,
                    listeners:{
                        select:function(combo,record,opts){
                            window.conf.advid = this.getValue();
                            window.conf.advname = this.getRawValue();
                            Ext.util.Cookies.set('adv',this.getValue());
                            Ext.util.Cookies.set('advn',this.getRawValue());
                            console.log('adv select,id:'+this.getValue()+',name:'+this.getRawValue());
                        }
                    }
                },
                '->',
                {
                    text:'选择日期',
                    id: 'iddmenu',
                    iconCls: 'bmenu',  // <-- icon
                    menu: Ext.create('gl.DateMenu',{}),
                    margin: '0 20 0 0'
                }]
            }]       
        });

//    	var range = advds.getRange();
//    	console.log('range:'+range.length);
//    	for(var i=0;i<range.length;i++){ 
//    		if(range[i].data.boolean == true){
//    			Ext.getCmp("id-adv-combo").setValue(range[i].data.name);
//    		}
//    	}
        
        var chinit = 0;
        chds.on('load',function(store,record,opts){
            if(chinit == 0){
                chinit = 1;
            }else{
                return;
            }
            var cb = Ext.getCmp("id-ch-combo");
            var range = chds.getRange();
            console.log('chds range len:'+range.length);
            for(var i=0;i<range.length;i++){ 
                if(range[i].data.boolean == true){
                    window.conf.chid=range[i].data.id;
                    window.conf.chname=range[i].data.name;
                    Ext.util.Cookies.set('ch',range[i].data.id);
                    Ext.util.Cookies.set('chn',range[i].data.name);
                    cb.setValue(range[i].data.name);
                }
            }
        });

        var advinit = 0;
        advds.on('load',function(store,record,opts){
        	if(advinit == 0){
        		advinit = 1;
        	}else{
        		return;
        	}
        	var cb = Ext.getCmp("id-adv-combo");
        	var range = advds.getRange();
        	for(var i=0;i<range.length;i++){ 
        		if(range[i].data.boolean == true){
                    window.conf.advid=range[i].data.id;
                    window.conf.advname=range[i].data.name;
                    Ext.util.Cookies.set('adv',range[i].data.id);
                    Ext.util.Cookies.set('advn',range[i].data.name);
        			cb.setValue(range[i].data.name);
        		}
        	}
        });
        
        var schinit = 0;
        schds.on('load',function(store,record,opts){
            if(schinit == 0){
                schinit = 1;
            }else{
                return;
            }
            var cb = Ext.getCmp("id-sch-combo");
            var range = schds.getRange();
            for(var i=0;i<range.length;i++){ 
                if(range[i].data.boolean == true){
                    window.conf.schid=range[i].data.id;
                    window.conf.schname=range[i].data.name;
                    Ext.util.Cookies.set('sch',range[i].data.id);
                    Ext.util.Cookies.set('schn',range[i].data.name);
                    cb.setValue(range[i].data.name);
                }
            }
        });

        // function idxpanel_additem(panel,item){                                                
        //     panel.add({
        //         xtype: 'panel',
        //         title: item.get('name'), 
        //         width: 200,
        //         height: 200,
        //         bodyPadding: 10,
        //         flex: 1,
        //         frame: true,
        //         layout: {
        //             type: 'hbox',
        //             align: 'middle',
        //             pack: 'center'
        //         },
        //         items:[{
        //             xtype: 'label',
        //             style:'font-size:40px;color: #004b97',
        //             text: item.get('num')
        //         }]
        //     })          
        // }

        // function onItemClick(item){
        //     Ext.example.msg('Menu Click', 'You clicked the "{0}" menu item.', item.text);
        // }

        
        // function onItemCheck(item, checked){
        //     var m=Ext.getCmp('idxmenu');
        //     var itemsArray = new Array();
        //     var clickitemname = item.text;

            // var dmenu=Ext.getCmp('iddmenu');
            // console.log(dmenu.Stime,dmenu.Etime);
            //forbid i >5   
            // if(checked == true){
            //     var i=0;     
            //     m.items.each(function(it,index,length){
            //         itemsArray[index]=it.checked;
            //         if(it.checked && it != item){
            //             i++;        
            //         }else if(it == item){
            //           console.log('Item Checked:',item.text,item.checked);
            //         }
            //     });
            
            //     if(i == 5){
            //         // for (var i = 0; i < itemsArray.length; i++) {  
            //         //     console.log('itemsArray:',i,itemsArray[i]);
            //         // }

            //         Ext.example.msg("checked > 5:"+item.text+",ch:"+item.checked);
            //         console.log("checked > 5:"+item.text+",ch:"+item.checked);
            //         m.removeAll(true);

            //         for (var i = 0; i < idxds.getCount(); i++) {  
            //             var record = idxds.getAt(i);
            //             var checkflag = itemsArray[i];

            //             if(record.get('name') == clickitemname) {
            //                 checkflag = false;
            //             }

            //             m.add({
            //                 text:record.get('name'),
            //                 checked:checkflag,
            //                 checkHandler: onItemCheck
            //             })
                        
            //         }
            //     }
            // }

            //forbid i < 5
            // if(checked == false){
            //     var i=0;     
            //     m.items.each(function(it,index,length){
            //         itemsArray[index]=it.checked;
            //         if( it.checked ){
            //             i++;        
            //         }
            //     });
            
            //     if(i < 5){
            //         Ext.example.msg("checked < 5:"+item.text+",ch:"+item.checked);
            //         console.log("checked < 5:"+item.text+",ch:"+item.checked);
            //         m.removeAll(true);

            //         for (var i = 0; i < idxds.getCount(); i++) {  
            //             var record = idxds.getAt(i);
            //             var checkflag = itemsArray[i];

            //             if(record.get('name') == clickitemname) {
            //                 checkflag = true;
            //             }

            //             m.add({
            //                 text:record.get('name'),
            //                 checked:checkflag,
            //                 checkHandler: onItemCheck
            //             })
                        
            //         }
            //         //i<5 recover menu,others stop
            //         return;
            //     }
            // }

            //forbid i = 0
        //     if(checked == false){
        //         var i=0;     
        //         m.items.each(function(it,index,length){
        //             itemsArray[index]=it.checked;
        //             if( it.checked ){
        //                 i++;        
        //             }
        //         });
            
        //         if(i == 0){               
        //             m.removeAll(true);
        //             for (var i = 0; i < idxds.getCount(); i++) {  
        //                 var record = idxds.getAt(i);
        //                 var checkflag = false;

        //                 if(record.get('name') == clickitemname) {
        //                     checkflag = true;
        //                 }

        //                 m.add({
        //                     text:record.get('name'),
        //                     checked:checkflag,
        //                     checkHandler: onItemCheck
        //                 })                    
        //             }
        //             Ext.example.msg('警告！','至少要选择一个指标');
        //             console.log("checked = 0 rebulid idxmenu:"+item.text+",ch:"+item.checked);
        //             return;
        //         }
        //     }

        //     var ichecked=1; 
        //     idxpanel.removeAll(true); 
        //     idxpanel2.removeAll(true);
        //     idxpanel3.removeAll(true); 
        //     idxpanel4.removeAll(true);   
        //     m.items.each(function(it,index,length){
        //         itemsArray[index]=it.checked;
        //         if(it.checked){
        //             //idxpanel
        //             if( Math.ceil(ichecked/5) == 1 ){                       
        //                 //console.log('in 1',ichecked);
        //                 var record = idxds.getAt(index); 
        //                 idxpanel_additem(idxpanel,record);
        //             }

        //             //idxpanel2
        //             if( Math.ceil(ichecked/5) == 2 ){                       
        //                 //console.log('in 2',ichecked);
        //                 var record = idxds.getAt(index);
        //                 idxpanel_additem(idxpanel2,record);                       
        //             }

        //             //idxpanel3
        //             if( Math.ceil(ichecked/5) == 3 ){                       
        //                 //console.log('in 3',ichecked);
        //                 var record = idxds.getAt(index); 
        //                 idxpanel_additem(idxpanel3,record);
        //             }

        //             //idxpanel4
        //             if( Math.ceil(ichecked/5) == 4 ){                       
        //                 //console.log('in 4',ichecked);
        //                 var record = idxds.getAt(index); 
        //                 idxpanel_additem(idxpanel4,record);
        //             }
        //             ichecked++;        
        //         }

        //         if(it == item){
        //           console.log('Item Checked:',item.text,item.checked);
        //         }
        //     });              
        // }         

        var clickpanel =  Ext.create('Ext.panel.Panel',{
            collapsible: true,
            title: '点击概览',
            layout: 'vbox',
            //region: 'west',
            //colspan:1,
            columnWidth:0.5,
            height:430,
            //flex:1,
            //width:'50%',
            frame:true,
            items:[{   
                xtype: 'panel',
                layout: 'hbox',
                width:'100%',
                //frame:true,
                items:[{
                    xtype: 'panel',
                    title: '展示', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[
                    // {
                    //     xtype:'button',
                    //     id: 'idshowpanel',
                    //     html:'展示',
                    //     tooltip: 'tooltip'
                    // },
                    {
                        xtype: 'label',                    
                        style:'font-size:35px;color: #004b97',
                        text: '1672',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'广告的展示次数',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: '拍重点击', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        style:'font-size:35px;color: #004b97',
                        text: '998',
                        listeners:{  
                            afterrender:function(obj){  
                            	console.log('version:'+window.conf.version);
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'点击数据的排重数(依据设备信息)',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: '点击率', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        style:'font-size:35px;color: #004b97',
                        text: '60%',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'排重点击次数/展示',  
                                });  
                            }  
                        }
                    }]
                }]
            },{   
                xtype: 'panel',
                //frame:true,
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'center'
                    },
                width:'100%',
                height:260,
                items:[{
            xtype: 'chart',
            //width: 400,
            width:'100%',
            height: 220,
            margin: '0 30 0 30',
            animate: true,
            shadow: false,
            style: 'background: #fff;',
            legend: {
                position: 'top',
                boxStrokeWidth: 0,
                labelFont: '12px Helvetica'
            },
            store: this.myDataStore,
            insetPadding: 5,
            // items: [
            // {
            //     type  : 'text',
            //     text  : '历史数据',
            //     font  : '22px Helvetica',
            //     width : 100,
            //     height: 30,
            //     x : 40, //the sprite x position
            //     y : 12  //the sprite y position
            // }
            // ,{
            //     type: 'text',
            //     text: 'Data: Browser Stats 2012',
            //     font: '10px Helvetica',
            //     x: 12,
            //     y: 380
            // }, 
            // {
            //     type: 'text',
            //     text: 'Source: http://www.w3schools.com/',
            //     font: '10px Helvetica',
            //     x: 12,
            //     y: 390
            // }
            //],
            axes: [{
                type: 'Numeric',
                fields: ['data1', 'data2', 'data3', 'data4' ],
                position: 'left',
                grid: true,
                minimum: 0,
                label: {
                    renderer: function(v) { return v ; }
                }
            }, {
                type: 'Category',
                fields: 'month',
                position: 'bottom',
                grid: true,
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series: [{
                type: 'line',
                axis: 'left',
                title: '展示',
                xField: 'month',
                yField: 'data1',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }, {
                type: 'line',
                axis: 'left',
                title: '排重点击',
                xField: 'month',
                yField: 'data2',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }
            ]
        }]
            }
            ]
        });


        var activepanel =  Ext.create('Ext.panel.Panel',{
            collapsible: true,
            title: '激活概览',
            layout: 'vbox',
            //region: 'east',
            //colspan:1,
            height:430,
            columnWidth:0.5,
            //width:'50%',
            frame:true,
            //flex:1,
            items:[{   
                xtype: 'panel',
                layout: 'hbox',
                width:'100%',
                //frame:true,
                items:[{
                    xtype: 'panel',
                    title: '激活推广量', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[
                    {
                        xtype: 'label',                    
                        style:'font-size:35px;color: #004b97',
                        text: '1672',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'通过广告引导，首次安装应用并打开的设备数',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: '激活自然量', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        style:'font-size:35px;color: #004b97',
                        text: '998',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'未通过广告引导，首次安装应用并打开的事件数',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: '激活率', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        style:'font-size:35px;color: #004b97',
                        text: '60%',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'激活推广量/激活总量',  
                                });  
                            }  
                        }
                    }]
                }]
            },{   
                xtype: 'panel',
                //frame:true,
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'center'
                    },
                width:'100%',
                height:260,
                items:[{
            xtype: 'chart',
            width: '100%',
            height: 220,
            margin: '0 30 0 30',
            animate: true,
            shadow: false,
            style: 'background: #fff;',
            legend: {
                position: 'top',
                boxStrokeWidth: 0,
                labelFont: '12px Helvetica'
            },
            store: this.myDataStore,
            insetPadding: 5,
            // items: [
            // {
            //     type  : 'text',
            //     text  : '历史数据',
            //     font  : '22px Helvetica',
            //     width : 100,
            //     height: 30,
            //     x : 40, //the sprite x position
            //     y : 12  //the sprite y position
            // }
            // ,{
            //     type: 'text',
            //     text: 'Data: Browser Stats 2012',
            //     font: '10px Helvetica',
            //     x: 12,
            //     y: 380
            // }, 
            // {
            //     type: 'text',
            //     text: 'Source: http://www.w3schools.com/',
            //     font: '10px Helvetica',
            //     x: 12,
            //     y: 390
            // }
            //],
            axes: [{
                type: 'Numeric',
                fields: ['data1', 'data2', 'data3', 'data4' ],
                position: 'left',
                grid: true,
                minimum: 0,
                label: {
                    renderer: function(v) { return v ; }
                }
            }, {
                type: 'Category',
                fields: 'month',
                position: 'bottom',
                grid: true,
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series: [{
                type: 'line',
                axis: 'left',
                title: '展示',
                xField: 'month',
                yField: 'data1',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }, {
                type: 'line',
                axis: 'left',
                title: '排重点击',
                xField: 'month',
                yField: 'data2',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }
            ]
        }]
            }
            ]
        });

        var chargepanel =  Ext.create('Ext.panel.Panel',{
            //collapsible: true,
            title: '收入概览',
            layout: 'vbox',
            margin: '30 0 0 0',
            //region: 'south',
            //height:430,
            //height:'100%',
            //width:'100%',
            //colspan:2,
            columnWidth:1,
            frame:true,
            items:[{   
                xtype: 'panel',
                layout: 'hbox',
                width:'100%',
                //frame:true,
                items:[{
                    xtype: 'panel',
                    title: 'ROI', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[
                    {
                        xtype: 'label',                    
                        style:'font-size:35px;color: #004b97',
                        text: '1672',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'通过广告引导，首次安装应用并打开的设备数',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: '当日ltv', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        style:'font-size:35px;color: #004b97',
                        text: '998',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'未通过广告引导，首次安装应用并打开的事件数',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: 'arpu', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        style:'font-size:35px;color: #004b97',
                        text: '60%',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'激活推广量/激活总量',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: 'arppu', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        style:'font-size:35px;color: #004b97',
                        text: '60%',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'激活推广量/激活总量',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: '充值总金额', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        style:'font-size:35px;color: #004b97',
                        text: '60%',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'激活推广量/激活总量',  
                                });  
                            }  
                        }
                    }]
                },{
                    xtype: 'panel',
                    title: '新增付费率', 
                    //width: 150,
                    height: 150,
                    bodyPadding: 10,
                    flex: 1,
                    frame: true,
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'center'
                    },
                    items:[{
                        xtype: 'label',
                        style:'font-size:35px;color: #004b97',
                        text: '60%',
                        listeners:{  
                            afterrender:function(obj){  
                                obj.tip=Ext.create('Ext.tip.ToolTip',{  
                                    target:obj.getEl().getAttribute("id"),  
                                    trackMouse:true,  
                                    renderTo: Ext.getBody(),  
                                    html:'激活推广量/激活总量',  
                                });  
                            }  
                        }
                    }]
                }

                ]
            }
            ,{   
                xtype: 'panel',
                //frame:true,
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'center'
                    },
                width:'100%',
                height:260,
                items:[{
            xtype: 'chart',
            width: 400,
            height: 220,
            padding: '0 0 0 0',
            animate: true,
            shadow: false,
            style: 'background: #fff;',
            legend: {
                position: 'top',
                boxStrokeWidth: 0,
                labelFont: '12px Helvetica'
            },
            store: this.myDataStore,
            insetPadding: 5,
            // items: [
            // {
            //     type  : 'text',
            //     text  : '历史数据',
            //     font  : '22px Helvetica',
            //     width : 100,
            //     height: 30,
            //     x : 40, //the sprite x position
            //     y : 12  //the sprite y position
            // }
            // ,{
            //     type: 'text',
            //     text: 'Data: Browser Stats 2012',
            //     font: '10px Helvetica',
            //     x: 12,
            //     y: 380
            // }, 
            // {
            //     type: 'text',
            //     text: 'Source: http://www.w3schools.com/',
            //     font: '10px Helvetica',
            //     x: 12,
            //     y: 390
            // }
            //],
            axes: [{
                type: 'Numeric',
                fields: ['data1', 'data2', 'data3', 'data4' ],
                position: 'left',
                grid: true,
                minimum: 0,
                label: {
                    renderer: function(v) { return v ; }
                }
            }, {
                type: 'Category',
                fields: 'month',
                position: 'bottom',
                grid: true,
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
            }],
            series: [{
                type: 'line',
                axis: 'left',
                title: '展示',
                xField: 'month',
                yField: 'data1',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }, {
                type: 'line',
                axis: 'left',
                title: '排重点击',
                xField: 'month',
                yField: 'data2',
                style: {
                    'stroke-width': 2
                },
                markerConfig: {
                    radius: 4
                },
                highlight: {
                    fill: '#000',
                    radius: 5,
                    'stroke-width': 2,
                    stroke: '#fff'
                },
                tips: {
                    trackMouse: true,
                    style: 'background: #FFF',
                    height: 20,
                    renderer: function(storeItem, item) {
                        var title = item.series.title;
                        this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField));
                    }
                }
            }
            ]
        }]
            }
            ]
        });

        // var idxpanel = Ext.create('Ext.panel.Panel',{
        //     layout: 'hbox',
        //     region: 'center',
        //     padding: '10 0 0 0',
        //     width: '98%'
            // items:[{
            //     xtype: 'panel',
            //     title:'title', 
            //     width: 200,
            //     height: 200,
            //     bodyPadding: 10,
            //     flex: 1,
            //     frame: true,
            //     layout: {
            //         type: 'hbox',
            //         align: 'middle',
            //         pack: 'center'
            //     },
            //     items:[{
            //         xtype: 'label',
            //         style:'font-size:40px;color: #004b97',
            //         text:'17'
            //     }]   
            // },{
            //     xtype: 'panel',
            //     width: 200,
            //     height: 200,
            //     bodyPadding: 10,
            //     flex: 1,
            //     frame: true
            // },{
            //     xtype: 'panel',
            //     width: 200,
            //     height: 200,
            //     bodyPadding: 10,
            //     flex: 1,
            //     frame: true
            // },{
            //     xtype: 'panel',
            //     width: 200,
            //     height: 200,
            //     bodyPadding: 10,
            //     flex: 1,
            //     frame: true
            // },{
            //     xtype: 'panel',
            //     width: 200,
            //     height: 200,
            //     bodyPadding: 10,
            //     flex: 1,
            //     frame: true
            // },{
            //     xtype:'toolbar',
            //     id:'idbar',
            //     items:[{
            //         text:'选择指标',
            //         iconCls: 'bmenu',  // <-- icon
            //         menu: idxmenu
            //     }]
            // }    
            // ]
        //});

        //init idx panel
        // for (var i = 0; i < 5; i++) {  
        //     var record = idxds.getAt(i); 
        //     idxpanel.add({
        //         xtype: 'panel',
        //         title: record.get('name'), 
        //         width: 200,
        //         height: 200,
        //         bodyPadding: 10,
        //         flex: 1,
        //         frame: true,
        //         layout: {
        //             type: 'hbox',
        //             align: 'middle',
        //             pack: 'center'
        //         },
        //         items:[{
        //             xtype: 'label',
        //             style:'font-size:40px;color: #004b97',
        //             text: record.get('num')
        //         }]
        //     })
        // } 

        //init idx panel idxmenu
        // idxpanel.add({
        //         xtype:'toolbar',
        //         id:'idbar',
        //         items:[{
        //             text:'选择指标',
        //             iconCls: 'bmenu',  // <-- icon
        //             menu: idxmenu
        //         }]
        //     });

        // var idxpanel2 = Ext.create('Ext.panel.Panel',{
        //     layout: 'hbox',
        //     region: 'center',
        //     columns: 5,
        //     width: '98%'
        // });

        // var idxpanel3 = Ext.create('Ext.panel.Panel',{
        //     layout: 'hbox',
        //     region: 'center',
        //     columns: 5,
        //     width: '98%'
        // });

        // var idxpanel4 = Ext.create('Ext.panel.Panel',{
        //     layout: 'hbox',
        //     region: 'center',
        //     columns: 5,
        //     width: '98%'
        // });

        // var bodypanel = Ext.create('Ext.panel.Panel',{
        //     // layout: {
        //     //          //type: 'vbox',
        //     layout:'vbox',

            //         },
            //align: 'stretch',
            //region: 'south',
            //flex:1,
            //anchor: '100% 100%',
            //frame: true,
            //height:'100%',
            //autoHeight:true,
            //width: '100%',
            //height: '400',
            //pack: 'center',
            //scrollable: true,
            //items: [clickpanel,idxpanel,idxpanel2,idxpanel3,idxpanel4]
        //     items: [{
        //         xtype:'panel',
        //         layout:'hbox',
        //         //flex:1,
        //         width:'100%',
        //         frame:true,
        //         //scrollable: true,
        //         items:[clickpanel,
        //         activepanel
        //         ]
        //     },{
        //         xtype:'panel',
        //         layout:'hbox',
        //         flex:1,
        //         //height:'100%',
        //         frame:true,
        //         //scrollable: true,
        //         items:[chargepanel
        //         ]
        //     }]
        // });
    
        var bodypanel = Ext.create('Ext.panel.Panel',{
            // layout:{
            //     //align : 'stretch',
            //     type:'table',
            //     columns:2
            // },
            //layout:'border',
            layout: 'column',
            flex:1,
            frame: true,
            width: '100%',
            height:'100%',
            scrollable: true,
            items:[clickpanel,activepanel,chargepanel]
        });

        me.items = [headpanel,bodypanel];
        //me.items = [clickpanel,activepanel,chargepanel];
        // me.items = [headpanel,clickpanel,
        // idxpanel,idxpanel2,idxpanel3,idxpanel4,
        // {
        //     xtype: 'chart',
        //     width: '100%',
        //     height: 410,
        //     padding: '10 0 0 0',
        //     animate: true,
        //     shadow: false,
        //     style: 'background: #fff;',
        //     legend: {
        //         position: 'right',
        //         boxStrokeWidth: 0,
        //         labelFont: '12px Helvetica'
        //     },
        //     store: this.myDataStore,
        //     insetPadding: 40,
        //     // items: [{
        //     //     type  : 'text',
        //     //     text  : '历史数据',
        //     //     font  : '22px Helvetica',
        //     //     width : 100,
        //     //     height: 30,
        //     //     x : 40, //the sprite x position
        //     //     y : 12  //the sprite y position
        //     // }
        //     // ,{
        //     //     type: 'text',
        //     //     text: 'Data: Browser Stats 2012',
        //     //     font: '10px Helvetica',
        //     //     x: 12,
        //     //     y: 380
        //     // }, 
        //     // {
        //     //     type: 'text',
        //     //     text: 'Source: http://www.w3schools.com/',
        //     //     font: '10px Helvetica',
        //     //     x: 12,
        //     //     y: 390
        //     // }
        //     //],
        //     axes: [{
        //         type: 'Numeric',
        //         fields: ['data1', 'data2', 'data3', 'data4' ],
        //         position: 'left',
        //         grid: true,
        //         minimum: 0,
        //         label: {
        //             renderer: function(v) { return v ; }
        //         }
        //     }, {
        //         type: 'Category',
        //         fields: 'month',
        //         position: 'bottom',
        //         grid: true,
        //         label: {
        //             rotate: {
        //                 degrees: -45
        //             }
        //         }
        //     }],
        //     series: [{
        //         type: 'line',
        //         axis: 'left',
        //         title: '点击',
        //         xField: 'month',
        //         yField: 'data1',
        //         style: {
        //             'stroke-width': 4
        //         },
        //         markerConfig: {
        //             radius: 4
        //         },
        //         highlight: {
        //             fill: '#000',
        //             radius: 5,
        //             'stroke-width': 2,
        //             stroke: '#fff'
        //         },
        //         tips: {
        //             trackMouse: true,
        //             style: 'background: #FFF',
        //             height: 20,
        //             renderer: function(storeItem, item) {
        //                 var title = item.series.title;
        //                 this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField));
        //             }
        //         }
        //     }, {
        //         type: 'line',
        //         axis: 'left',
        //         title: '排重点击',
        //         xField: 'month',
        //         yField: 'data2',
        //         style: {
        //             'stroke-width': 4
        //         },
        //         markerConfig: {
        //             radius: 4
        //         },
        //         highlight: {
        //             fill: '#000',
        //             radius: 5,
        //             'stroke-width': 2,
        //             stroke: '#fff'
        //         },
        //         tips: {
        //             trackMouse: true,
        //             style: 'background: #FFF',
        //             height: 20,
        //             renderer: function(storeItem, item) {
        //                 var title = item.series.title;
        //                 this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField));
        //             }
        //         }
        //     }, {
        //         type: 'line',
        //         axis: 'left',
        //         title: '激活',
        //         xField: 'month',
        //         yField: 'data3',
        //         style: {
        //             'stroke-width': 4
        //         },
        //         markerConfig: {
        //             radius: 4
        //         },
        //         highlight: {
        //             fill: '#000',
        //             radius: 5,
        //             'stroke-width': 2,
        //             stroke: '#fff'
        //         },
        //         tips: {
        //             trackMouse: true,
        //             style: 'background: #FFF',
        //             height: 20,
        //             renderer: function(storeItem, item) {
        //                 var title = item.series.title;
        //                 this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField));
        //             }
        //         }
        //     }, {
        //         type: 'line',
        //         axis: 'left',
        //         title: '自然激活',
        //         xField: 'month',
        //         yField: 'data4',
        //         style: {
        //             'stroke-width': 4
        //         },
        //         markerConfig: {
        //             radius: 4
        //         },
        //         highlight: {
        //             fill: '#000',
        //             radius: 5,
        //             'stroke-width': 2,
        //             stroke: '#fff'
        //         },
        //         tips: {
        //             trackMouse: true,
        //             style: 'background: #FFF',
        //             height: 20,
        //             renderer: function(storeItem, item) {
        //                 var title = item.series.title;
        //                 this.setTitle(title + ' for ' + storeItem.get('month') + ': ' + storeItem.get(item.series.yField));
        //             }
        //         }
        //    }]
        // }
        // // , {
        // //     style: 'margin-top: 10px;',
        // //     xtype: 'gridpanel',
        // //     columns : {
        // //         defaults: {
        // //             sortable: false,
        // //             menuDisabled: true,
        // //             renderer: function(v) { return v; }
        // //         },
        // //         items: [
        // //             { text: '日期', dataIndex: 'month', renderer: function(v) { return v; } },
        // //             { text: '点击', dataIndex: 'data1' },
        // //             { text: '排重点击', dataIndex: 'data2' },
        // //             { text: '激活', dataIndex: 'data3' },
        // //             { text: '自然激活', dataIndex: 'data4' }
        // //         ]
        // //     },
        // //     store: this.myDataStore,
        // //     width: '100%'   
        // // }
        // ];

        //Ext.QuickTips.init();

        this.callParent();
    }
});
