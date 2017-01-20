var gl = gl || {};

// Ext.define('gl.DatePanel', {
//     extend: 'Ext.panel.Panel',
//     alias: 'widget.gldatepanel',
//     layout: 'hbox',
//     region: 'center',
//     padding: '0 0 0 0',
//     //width: '98%',

//     initComponent: function() {
//     	var me = this;

//     	me.items = [{
//         xtype: 'datepicker',
//         id: 'datestart',
//         maxDate: new Date(),
//         handler: function(picker, date) {
//             Ext.getCmp('sbtn').setValue(5);
//         }
//     },{
//         xtype: 'datepicker',
//         id: 'dateend',
//         maxDate: new Date(),
//         handler: function(picker, date) {
//             Ext.getCmp('sbtn').setValue(5);
//         }
//     },{
//         xtype: 'panel',
//         layout: {
//             type: 'vbox',
//             align: 'stretch'
//             },
//         items:[
//             // {
//             //     xtype: 'panel',
//             //     //frame:true,
//             //     height:'100%',
//             //     items:[
//             {
//                 xtype: 'segmentedbutton',
//                 id: 'sbtn',
//                 vertical: true,
//                 items: [{
//                     text: '今日',
//                     pressed: true,
//                     handler:function(){
//                         var today = new Date();
//                         Ext.getCmp('datestart').setValue(today);
//                         Ext.getCmp('dateend').setValue(today);
//                         console.log('click 今日');
//                     }
//                 }, {
//                     text: '昨天',
//                     handler:function(){
//                         var yes = Ext.Date.add(new Date(), Ext.Date.DAY,-1);
//                         Ext.getCmp('datestart').setValue(yes);
//                         Ext.getCmp('dateend').setValue(yes);
//                         console.log('click 昨天');
//                     }
//                 }, {
//                     text: '过去30天',
//                     handler:function(){
//                         var today = new Date();
//                         var starttime = Ext.Date.add(today, Ext.Date.DAY,-30);
//                         Ext.getCmp('datestart').setValue(starttime);
//                         Ext.getCmp('dateend').setValue(today);
//                         console.log('click 过去30天:');
//                     }
//                 }, {
//                     text: '本月',
//                     handler:function(){
//                         var today = new Date();
//                         var starttime =  new Date(today.getFullYear(),today.getMonth(),1);
//                         Ext.getCmp('datestart').setValue(starttime);
//                         Ext.getCmp('dateend').setValue(today);
//                         console.log('click 本月:',starttime);
//                     }
//                 }, {
//                     text: '前一个月',
//                     handler:function(){
//                         //start time
//                         var lastmonthdaystart = Ext.Date.add(new Date(),Ext.Date.MONTH,-1);                    
//                         lastmonthdaystart = new Date(lastmonthdaystart.getFullYear(),lastmonthdaystart.getMonth(),1);
//                         Ext.getCmp('datestart').setValue(lastmonthdaystart);
//                         //end time
//                         var today = new Date();
//                         var lastmonthdayend = new Date(today.getFullYear(),today.getMonth(),1);
//                         lastmonthdayend = Ext.Date.add(lastmonthdayend,Ext.Date.DAY,-1);
//                         Ext.getCmp('dateend').setValue(lastmonthdayend);
//                         console.log('click 前一个月,stattime:',lastmonthdaystart,'endtime:',lastmonthdayend);
//                     }
//                 },{
//                     text: '自定义日期'
//                 }]
//             },{
//                 xtype: 'panel',
//                 //frame:true,
//                 //width: '100%',
//                 padding: '40 0 0 0',
//                 //region: 'center',
//                 layout: {
//                     type: 'vbox',
//                     align: 'stretch',
//                     pack: 'center'
//                 },
//                 items:[{
//                 xtype: 'button',
//                 text: '确定',
//                 handler:function(){
//                     var starttime = Ext.getCmp('datestart').getValue();
//                     var endtime = Ext.getCmp('dateend').getValue();
//                     console.log(starttime,endtime);
//                     me.hide();
//                     }
//                 }]
//             }
//             //]
//         //}    
//         ]
//     }
//     ];
//     	this.callParent();
//     }
   
// });

Ext.define('gl.DateMenu', {
	extend: 'Ext.menu.Menu',
	alias: 'widget.gldatemenu',
    stime: new Date(),
    etime: new Date(),
    // config:{
        
    // },
	style: {
                overflow: 'visible'   
            },
    initComponent: function() {
    	var me = this;

    	var datepanel = Ext.create('Ext.panel.Panel',{
            layout: 'hbox',
            region: 'center',
            padding: '0 0 0 0',
            //width: '98%',
            items:[{
                xtype: 'datepicker',
                id: 'datestart',
                maxDate: new Date(),
                handler: function(picker, date) {
                    Ext.getCmp('sbtn').setValue(5);
                    Ext.util.Cookies.set('st',Ext.util.Format.date(date,'Y-m-d'));
                }
            },{
                xtype: 'datepicker',
                id: 'dateend',
                maxDate: new Date(),
                handler: function(picker, date) {
                    Ext.getCmp('sbtn').setValue(5);
                    Ext.util.Cookies.set('et',Ext.util.Format.date(date,'Y-m-d'));
                }
            },{
                xtype: 'panel',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                    },
                items:[
                    // {
                    //     xtype: 'panel',
                    //     //frame:true,
                    //     height:'100%',
                    //     items:[
                        {
                            xtype: 'segmentedbutton',
                            id: 'sbtn',
                            vertical: true,
                            items: [{
                                text: '今日',
                                pressed: true,
                                handler:function(){
                                    var today = new Date();
                                    Ext.getCmp('datestart').setValue(today);
                                    Ext.getCmp('dateend').setValue(today);
                                    window.conf.stime=today;
                                    window.conf.etime=today;
                                    Ext.util.Cookies.set('st',Ext.util.Format.date(today,'Y-m-d'));
                                    Ext.util.Cookies.set('et',Ext.util.Format.date(today,'Y-m-d'));
                                    me.hide();
                                    Ext.getCmp('id-ctid').initdata();
                                    console.log('click 今日');
                                }
                            }, {
                                text: '昨天',
                                handler:function(){
                                    var yes = Ext.Date.add(new Date(), Ext.Date.DAY,-1);
                                    Ext.getCmp('datestart').setValue(yes);
                                    Ext.getCmp('dateend').setValue(yes);
                                    window.conf.stime=yes;
                                    window.conf.etime=yes;
                                    Ext.util.Cookies.set('st',Ext.util.Format.date(yes,'Y-m-d'));
                                    Ext.util.Cookies.set('et',Ext.util.Format.date(yes,'Y-m-d'));
                                    me.hide();
                                    Ext.getCmp('id-ctid').initdata();
                                    console.log('click 昨天');
                                }
                            }, {
                                text: '过去30天',
                                handler:function(){
                                    var today = new Date();
                                    var starttime = Ext.Date.add(today, Ext.Date.DAY,-30);
                                    Ext.getCmp('datestart').setValue(starttime);
                                    Ext.getCmp('dateend').setValue(today);
                                    window.conf.stime=starttime;
                                    window.conf.etime=today;
                                    Ext.util.Cookies.set('st',Ext.util.Format.date(starttime,'Y-m-d'));
                                    Ext.util.Cookies.set('et',Ext.util.Format.date(today,'Y-m-d'));
                                    me.hide();
                                    Ext.getCmp('id-ctid').initdata();
                                    console.log('click 过去30天:');
                                }
                            }, {
                                text: '本月',
                                handler:function(){
                                    var today = new Date();
                                    var starttime =  new Date(today.getFullYear(),today.getMonth(),1);
                                    Ext.getCmp('datestart').setValue(starttime);
                                    Ext.getCmp('dateend').setValue(today);
                                    window.conf.stime=starttime;
                                    window.conf.etime=today;
                                    Ext.util.Cookies.set('st',Ext.util.Format.date(starttime,'Y-m-d'));
                                    Ext.util.Cookies.set('et',Ext.util.Format.date(today,'Y-m-d'));
                                    me.hide();
                                    Ext.getCmp('id-ctid').initdata();
                                    console.log('click 本月:',starttime);
                                }
                            }, {
                                text: '前一个月',
                                handler:function(){
                                    //start time
                                    var lastmonthdaystart = Ext.Date.add(new Date(),Ext.Date.MONTH,-1);                    
                                    lastmonthdaystart = new Date(lastmonthdaystart.getFullYear(),lastmonthdaystart.getMonth(),1);
                                    Ext.getCmp('datestart').setValue(lastmonthdaystart);

                                    //end time
                                    var today = new Date();
                                    var lastmonthdayend = new Date(today.getFullYear(),today.getMonth(),1);
                                    lastmonthdayend = Ext.Date.add(lastmonthdayend,Ext.Date.DAY,-1);
                                    Ext.getCmp('dateend').setValue(lastmonthdayend);

                                    window.conf.stime=lastmonthdaystart;
                                    window.conf.etime=lastmonthdayend;
                                    Ext.util.Cookies.set('st',Ext.util.Format.date(lastmonthdaystart,'Y-m-d'));
                                    Ext.util.Cookies.set('et',Ext.util.Format.date(lastmonthdayend,'Y-m-d'));
                                    me.hide();
                                    Ext.getCmp('id-ctid').initdata();
                                    console.log('click 前一个月,stattime:',lastmonthdaystart,'endtime:',lastmonthdayend);
                                }
                            },{
                                text: '自定义日期'
                            }]
                        },{
                            xtype: 'panel',
                            //frame:true,
                            //width: '100%',
                            padding: '40 0 0 0',
                            //region: 'center',
                            layout: {
                                type: 'vbox',
                                align: 'stretch',
                                pack: 'center'
                            },
                            items:[{
                            xtype: 'button',
                            text: '确定',
                            handler:function(){
                                var starttime = Ext.getCmp('datestart').getValue();
                                var endtime = Ext.getCmp('dateend').getValue();
                                console.log(starttime,endtime);
                                me.stime = starttime;
                                me.etime = endtime;
                                //me.setText(starttime.getFullYear()+'-'+(starttime.getMonth()+1)+'-'+starttime.getDate());
                                me.hide();
                                Ext.getCmp('id-ctid').initdata();
                                }
                            }]
                        }
                    //]
                //}
                
                ]
            },
            ]
        });
		
		me.items = [datepanel];		
		this.callParent();
    }
    
});
