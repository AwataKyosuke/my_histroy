<template>
  <div id="wrap">
    <div id="app">

      <Header />

      <div id="sidenavi">
        <Sidenavi />
      </div>

      <div id="contents">
        <router-view/>
      </div>

    </div>
  </div>
</template>

<script>
import Header from '@/components/organsms/Header'
import Sidenavi from '@/components/organsms/Sidenavi'

export default {
  name: 'App',

  components:{
    Header,
    Sidenavi
  }
}
</script>

<style scoped>
#wrap {
width:100%;
margin: auto;
}

header {
border:dashed 1px #999;
}

#sidenavi {
float:right;
width:20%;
}

#contents {
float:left;
width:80%;
}

footer {
clear:both;
border:dashed 1px #999;
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
display: block;
}
</style>
