var app = new Vue({
	el:'#app',
	data:{
		books:[],
		teste:"teste agrora",
		MySearch:'',
		orderCol:'id',
		orderInverse:1
	},
	methods:{
		filterOrderBy:function(e,col){
			//previne a ação do a href
			e.preventDefault();
			this.orderCol = col;
			this.orderInverse = this.orderInverse*-1
			console.log(this.orderInverse);
		},
		previous:function(e){
			//previne a ação do a href
			e.preventDefault();
			alert('previous');
		},
		next:function(e){
			e.preventDefault();
			alert('next');
		},
		pagePagination:function(e,id){
			e.preventDefault();
			alert('pagepagination '+id);	
		}
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