<template>
  <div id="card">
    cardcardcardcardcardcardcard
    <button id="jj">asd</button>
  </div>
</template>

<script>
    export default {
        name: "Card",
      mounted(){
          $('#jj').click(function(){
            console.log('sss');
          })
      }

    }
</script>

<style scoped>

</style>
