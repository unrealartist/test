new Vue({

el:'#vueapp',
data:{
  message:'hi',
  name:'kalpana'
},
methods:{

    greeting : function(t){
    return "Good" + t
  }

}

})
