var hello = new Vue({
	el:'#hello',
	data:{
		msg:" Hello Vue!, databind power! ",
		peoples:[
			{name:"Maria"},
			{name:"José"},
			{name:"Thiago"},
			{name:"Pedro"}
		],
		newElement:'',
		elements:[]
	},
	methods:{
		/*
		addElement: function(e){
			console.log(e);
			e.preventDefault();
		}
		*/
		addElement: function(){
			var title = this.newElement.trim();
			if(title){
				this.elements.push({title:title});
				this.newElement = "";
			}
		},
		removeElement: function(e,index){
			e.preventDefault();
			this.elements.splice(index,1);
			
		},
		myClick:function(){
			alert("Click");
		},
		myKeyUp:function(){
			alert('enviando Key Up');
		}
	}
});