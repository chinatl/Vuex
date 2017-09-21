<template>
     <div>
         <router-view></router-view>
         <a class='go' href="#">
            <p>返回</p>
            <p>顶部</p>
        </a> 
   </div>     
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
.go {
    position:fixed;
    right:0;
    bottom:50px;
    width: 50px;
    height: 50px;
    background-color: rgba(0,0,0,.3); 
    text-align: center;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: space-around;
    text-decoration: none;
}
.go p {
    padding: 0;
    margin: 0;
    color: #fff;
}
</style>
