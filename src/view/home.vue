<template>
<div>
	<h3>所有的vue-awesome集合</h3>
	<p class="use">使用方法:</p>
	<div class='codebox'>
		<p><span class="red">import</span>&nbsp;&nbsp;Vue&nbsp;&nbsp;<span class="red">from</span>&nbsp;&nbsp;<span class="yellow">'vue'</span></p>
		<p><span class="red">import</span>&nbsp;&nbsp;Icon&nbsp;&nbsp;<span class="red">from</span>&nbsp;&nbsp;<span class="yellow">'vue-awesome'</span></p>
		<p>Vue.<span class="blue">component</span> ( <span class="yellow">'icon'</span> ,&nbsp;&nbsp;Icon)</p>
	</div>
	<div class="search bar7">
	<form action="">
	  <input type="text" placeholder="请输入您要搜索的内容..." v-model='msg'> 
	</form>
	 </div>
	<ul>
		<li v-for='(item,index) in arr' key='index' v-show='obj[item]'>
			<icon :name='item' class='icon' width='25' height='25' :color='color(item)'></icon>	
			<p>{{item}}</p>
		</li>
	</ul>
	<icon name="refresh" spin color='#fff' width='60' height='60' class='loading' v-show='loading'></icon>
	</div>
</template>

<script>
// import { mapMutations } from 'vuex'
import Vue from 'vue'
import Icon from 'vue-awesome'
console.log(Icon)
export default {
	name: 'home',
	data(){
		return {
			arr: ['500px'],
			msg:'',
			obj:{},
			loading:false

		}
	},
	watch:{
		msg:function(){
			for(var k in this.obj){
				if(k.includes(this.msg)){
					this.obj[k] = true;
				}else {
					this.obj[k] = false;
				}
			}
		},
	},
	methods: {
		color(){
			const arr = '0123456789abcdef';
			var str = '#';
			for(var i = 0;i<6;i++){
				var rand = Math.floor(Math.random()*16);
				str += arr[rand]
			}
			return str
		},
		addList(){
			this.list.push()
		},
	 	getList (arr,index) {
	 		return arr.slice(36*index,36*(index+1))
	  	}	
	},
	created(){
		var allicon = Icon.icons;
		var arr = [];
		var obj = {};
		for(var k in allicon){
			arr.push(k);
			obj[k] = true;
		}
		this.$store.commit('setList',arr);
		this.arr = arr.slice(0,36);
		this.obj = obj;
	},
	 mounted () {
	 	const List = this.$store.getters.currentList;
	 	var index = 1;
		const h = screen.availHeight;
		window.onscroll = ()=> {
			var winY = window.scrollY;
			var height = window.document.body.scrollHeight;
			var cha = height - h;
			if(winY >= cha){
				index ++
				this.loading = true;
				setTimeout(()=>{
					this.loading = false
				},1000)
				var x =this.getList(List,index);
				if(x.length===0){
					this.loading = false;
					window.onscroll = null;
					return 
				}
				console.log(1)
				this.arr.push(...x);
			}
		}
 	}
}
</script>

<style>
	body,html,h1,div,ul,li {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	ul,.use,.codebox,.search {
		max-width: 1000px;
		margin:0 auto;
	}
	ul {
		margin: 0 auto;
		overflow:hidden;
		max-width: 1000px;
		display: flex;
		justify-content: space-around;
	  	flex-wrap:wrap;
	  	list-style: none;
	}
	li {
		float: left;
		width: 100px;
		text-align: center;
		margin: 3px;
		padding: 8px 0;
		color: #fff;
	}
	h3 {
		color:#000;
		text-align: center;
		margin-top: 14px;
		font-size: 18px;
	}
	.red {
		color: #F92659
	}
	.yellow {
		color: #E6DB74;
	}
	.white {
		color: #272822
	}
	.blue {
		color: #5CD9EF;
	}
	.use {
		padding: 5px 10px;
		font:normal bold 16px '微软雅黑';
	}
	.codebox {
		background-color: #272822;
		padding: 10px;
		margin: 6px auto;
	}
	.codebox p {
		color: #F8F8F2
	}
	.bar7 {background: #7BA7AB;} 
	.bar7 form { height: 42px; }
	 .bar7 input { width: 250px; border-radius: 42px; border: 2px solid #324B4E; background: #F9F0DA; transition: .3s linear; float: right; } .bar7 input:focus { width: 300px; } .bar7 button { background: none; top: -2px; right: 0; } .bar7 button:before{ content: "\f002"; font-family: FontAwesome; color: #324b4e; }
body { margin: 0; padding: 0; background: #494A5F; font-weight: 500; font-family: "Microsoft YaHei","宋体","Segoe UI", "Lucida Grande", Helvetica, Arial,sans-serif, FreeSans, Arimo; } #container { width: 500px; height: 820px; margin: 0 auto; } div.search {padding: 30px 0;} form { position: relative; width: 300px; margin: 0 auto; } input, button { border: none; outline: none; } input { width: 100%; height: 42px; padding-left: 13px; } button { height: 42px; width: 42px; cursor: pointer; position: absolute; }
.loading {
	position: fixed;
	bottom:200px;
	left: 50%;
	transform: translate(-50%,0);
}
</style>	