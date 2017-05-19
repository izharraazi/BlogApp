Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	this.route('home',{
		path: '/',
		template: 'home',
        data: function(){
            var currentProject = this.params._id;
            return Projects.findOne({_id: currentProject});
        }
	});

	this.route('about');   

	this.route('work',{
        path:'/work',
        template: 'work',
        data: function(){
            templateData = {
                projects: Projects.find()
            };
            return templateData;
        }
    });

	this.route('blog',{
		path: '/blog',
		template: 'blog',
        data: function(){
            templateData = {
                posts: Posts.find()
            };
            return templateData;
        }
	});

    this.route('blog_post',{
        path:'/blog/post/:_id',
        template: 'blog_post',
        data: function(){
            var currentPost = this.params._id;
            return Posts.findOne({_id: currentPost});
        }
    });

    this.route('project',{
        path:'/project/:_id',
        template: 'project',
        data: function(){
            var currentProject = this.params._id;
            return Projects.findOne({_id: currentProject});
        }
    });

	this.route('contact');

	this.route('list_posts', {
        path:'/admin/posts',
        template:'list_posts',
        data: function(){
            templateData = {
                posts: Posts.find()
            };
            return templateData;
        },
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }
    });

    this.route('add_post', {
        path:'/admin/posts/add',
        template:'add_post',
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }
    });

    this.route('edit_post', {
        path:'/admin/posts/:_id/edit',
        template:'edit_post',
        data: function(){
            var currentPost = this.params._id;
            return Posts.findOne({_id: currentPost});
        },
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }
    });


    this.route('list_projects', {
        path:'/admin/projects',
        template:'list_projects',
        data: function(){
            templateData = {
              //  zlog_transactions: zlog_transactions.find({"model_id":262})
            };
            return templateData;
        }/*,
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }*/
    });

    this.route('add_project', {
        path:'/admin/projects/add',
        template:'add_project',
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }
    });

    this.route('edit_project', {
        path:'/admin/projects/:_id/edit',
        template:'edit_project',
        data: function(){
            var currentProject = this.params._id;
            return Projects.findOne({_id: currentProject});
        }/*,
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }*/
    });

    this.route('search_zlog', {
        path:'/admin/projects/search',
        template:'list_projects',
        data: function(){
             var l_imei = this.params.query.imei;
             var l_meid = this.params.query.meid;
             var l_itemid = this.params.query.itemid;
             var l_fromDate =this.params.query.fromDate;
             var l_toDate =this.params.query.toDate;
             //var l_fromDate = Date.parse(this.params.query.fromDate);
             console.log(l_fromDate);
             // l_imei = this.params.query.imei;
             var query = {};
             query["$and"]=[];
             if(l_imei !=""){
                query["$and"].push({"erase_imei":l_imei});
             }
             if(l_meid !=""){
                query["$and"].push({"erase_meid":l_meid});
             }
             if(l_itemid !=""){
                query["$and"].push({"model_id":l_itemid});
             }
             if(l_fromDate !="" && l_toDate == ""){
                var selector ={
                    "$gte" : new Date (l_fromDate).toISOString()
                };
                query["$and"].push({"erase_datetime":selector});
             }
             if(l_toDate !="" && l_fromDate ==""){
                var selector ={
                    "$lte" : new Date (l_toDate).toISOString()
                };
                query["$and"].push({"erase_datetime":selector});
             }
             if(l_toDate !="" && l_fromDate !=""){
                var selector ={
                    "$gte" : new Date (l_fromDate).toISOString(),
                    "$lte" : new Date (l_toDate).toISOString()

                };
                query["$and"].push({"erase_datetime":selector});
             }


//query["date_created"]="whatever";

            // query[imei] = this.params.query.imei;
             //query[meid] = this.params.query.meid;

console.log(JSON.stringify(query));
             templateData = {
               // zlog_transactions: zlog_transactions.find({"model_id":262})
                zlog_transactions: zlog_transactions.find(query,{"reactive":true})
            };
            return templateData;
        }/*,
        onBeforeAction: function(){
            if(!Meteor.userId() || Meteor.userId() == null){
                Router.go('/');
            }
            this.next();
        }*/
    });

    this.route('login', {
        path:'/admin',
        template:'login',
    });
    
});