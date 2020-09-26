<template>
  <div>
    <router-view />
  </div>
</template>
<script>
import AddRest from "../components/AddRest";

export default {
  name: "full",
  components: {
    AddRest,
  },
};
</script>
