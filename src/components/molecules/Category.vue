<template>
  <li>
    <router-link to="">{{ category.name }}</router-link>
  </li>
</template>

<script>
export default {
  name: 'Category',

  props: [ 'category' ]
}
</script>

<style scoped>

.search-box ul li {
  float:left;
  list-style:none;
  margin-right: 1%;
}

.search-box ul li a {
  color: darkgray;
  text-decoration: none;
}

.search-box ul li a:hover {
  color: #58b4ff;
}

</style>
