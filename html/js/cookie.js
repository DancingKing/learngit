var cookie={set:function(key,value,time){var time1=new Date();time1.setDate(time1.getDate()+time);document.cookie=key+"="+encodeURIComponent(value)+";expires="+time1},get:function(key){var str=document.cookie;str=str.replace(/ /g,"");var arr=str.split(";");var arr2=[];for(var i=0;i<arr.length;i++){arr2=arr[i].split("=");if(arr2[0]==key){return decodeURIComponent(arr2[1])}}},fnDelte:function(){var time1=new Date();time1.setDate(time1.getDate()-1);document.cookie=key+"= ;expires="+time1}};