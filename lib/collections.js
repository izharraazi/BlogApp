Posts = new Mongo.Collection('posts');

Posts.attachSchema(new SimpleSchema({
	title: {
		type: String,
		max: 100
	},
	body:{
		type: String
	},
	userId: {
		type: String,
		autoValue: function(){ return Meteor.userId() }
	},
	updatedAt:{
		type: Date,
		autoValue: function(){ return new Date() }
	}
}));

zlog_transactions = new Mongo.Collection('zlog_transactions');

zlog_transactions.attachSchema(new SimpleSchema({

	erase_id: {
		type: Number,
		
	},
	halong_serial: {
		type: String,
		
	},
	model_id: {
		type: Number,
		
	},
	erase_userid: {
		type: String		
	},

	erase_datetime: {
		type: Date
		
	},
	erase_logfile:{
		type:String
	},

	erase_imei:{
		type: String
	},

	erase_meid:{
		type:String
	},

	erase_status:{
		type:Number,
		max: 1
	},

	erase_verify:{
		type:Number,
		max: 1
	},

	erase_credit:{
		type:Number,
		max:11
	},
	erase_hash:{
		type:String,

	},
	customer_name:{
		type:String
	},
    
    erase_method:{
    	type:String
    },

    result_detail:{
    	type:String
    },

    device_manufacturer:{
    	type:String
    },

    device_carrier:{
    	type:String
    },

    device_baseband:{
    	type:String
    },

    device_firmware:{
    	type:String
    },

    device_capacity:{
    	type:String
    },

    device_wifi_address:{
    	type:String
    },

    device_bluetooth_address:{
    	type:String
    },

    device_model_number:{
    	type:String
    },

    device_color:{
    	type:String
    },

    device_os_type:{
    	type:String
    },

    device_sn:{
    	type:String
    },

    elapsetime:{
    	type:String
    },
    device_os_version:{
    	type:String
    },
    device_fmip:{
    	type:String
    },

    device_bricked:{
    	type:String
    },

    erase_error_code:{
    	type:String
    },

    function_test:{
    	type:String
    },

    process_type:{
    	type:String
    },

    date_received:{
    	type:Date
    },
    pushed_date:{
    	type:Date,
    },
    pushed_result_date:{
    	type:Date,
    },

    pushed_status:{
    	type:Number,
    	max:1
    },

    pushed_result:{
    	type:String
    },

    pushed_data:{
    	type:String
    },

    site_name:{
    	type:String
    },
    site_type:{
    	type:String

    },
    del_if:{
    	type:Number,
    	max:1
    }

}));


Projects = new Mongo.Collection('projects');

Projects.attachSchema(new SimpleSchema({
	name: {
		type: String,
		max: 100
	},
	description:{
		type: String,
		max: 500
	},
	client:{
		type: String,
		max: 100
	},
	type:{
		type: String,
		max: 100
	},
	projectDate:{
		type: String,
		max: 100,
		optional: true
	},
	userId: {
		type: String,
		autoValue: function(){ return Meteor.userId() }
	},
	updatedAt:{
		type: Date,
		autoValue: function(){ return new Date() }
	},
	projectImage:{
		type: String,
		max: 100,
		optional: true
	},
	projectImage2:{
		type: String,
		max: 100,
		optional: true
	},
	projectImage3:{
		type: String,
		max: 100,
		optional: true
	},
	projectImage4:{
		type: String,
		max: 100,
		optional: true
	}
}));


ProjectImages = new FS.Collection('ProjectImages', {
	stores:[new FS.Store.GridFS('ProjectImages')]
});