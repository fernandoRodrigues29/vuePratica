var app = new Vue({
	el:'#app',
	data:{
		books:[],
		teste:"teste agrora",
		MySearch:''
	},
	methods:{

	},
	ready:function(){
		//alert('conteudo');
		/**/
		var self = this;
		self.$http.get('js/dataServer.json').then(function(response){
			console.log(response);
			self.books = response.data;
		});
		/**/
	}
});