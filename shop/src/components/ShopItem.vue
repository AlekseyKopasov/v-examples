<template>
  <div class="item">
    <img :src="product.img" :alt="product.title">
    <router-link
        class="link"
        :to="/shop/ + product.id"
        tag="a"
    >
      {{ product.title }}
    </router-link>
  </div>
</template>

<script>
export default {
name: "shopItem",

props: {
  product: {
    type: Object,
    required: true,
  },
},
}
</script>

<style lang="scss">
.item {
  max-width: 48%;
  text-align: center;

  p{
    font-size: 22px;
  }
}
  .item__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

</style>
