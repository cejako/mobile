/**
 * Created by chriscai on 2014/6/14.
 */
(function (){

    window.tools.mobile = {
        isIOS : function (){
	        if (navigator.userAgent.toLowerCase().indexOf('iphone') > 0) {
				return true;
	        }
	        return false;
        },

	    isAndroid : function (){
		    if (navigator.userAgent.toLowerCase().indexOf('android') > 0) {
			    return true;
		    }
		    return false;
	    },

        mobileSysInfo: function(){
            if(this.isAndroid){
                return 'Android_'+this.version();
            }else if(this.isIOS()){
                return 'iOS_'+this.version();
            }else{
                return 'other';
            }
        },


        version : function (){
		    var version = 0;
		    if(window.tools.mobile.isIOS()){
			    version = navigator.userAgent.match(/ os ([\d_]+) /i)[1];
			    version && (version =  version.replace(/_/gi ,'.'));
			     version = version ?  version.replace(/_/gi ,'.') : 0;
		    }else {
			    version = navigator.userAgent.match(/android ([\d\.]+);/i)[1];
			    version && (version =  version.replace(/_/gi ,'.'));
		    }
		    return version;
	    }
    }

}());