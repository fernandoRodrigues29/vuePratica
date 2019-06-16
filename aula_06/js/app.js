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
		elements:[],
		objectA:{
			'font-size': '30px'
		},
		objectB:{
			color:"red"
		},
		myListForm:[],
		myForm:{
			name:'',
			email:''
		}
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
		},
		addForm:function(){
			this.myListForm.push({
				name:this.myForm.name,
				email:this.myForm.email
			});
			//limpar o formulario
			this.myForm.name = '';
			this.myForm.email = '';
		}
	}
});