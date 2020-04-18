<template>

    <div id="app">

      <Header />

      <div id="content">

        <div id="main">

          <router-view/>

        </div>

        <div id="sidenavi">

          <Sidenavi />

        </div>

      </div>

    </div>

</template>

<script>
import Header from '@/components/molecules/Header'
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
#content {
  display: -webkit-flex;
  display: flex;
}

header {
border:dashed 1px #999;
}

#sidenavi {
   -webkit-flex-direction: row;
  flex-direction: row;
  width: 16vw;
}

#main {
   -webkit-flex-direction: row;
  flex-direction: row;
  flex-grow: 1;
  margin: 0 0.5% 0 0;
}

footer {
clear:both;
border:dashed 1px #999;
}

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
display: block;
}
</style>
