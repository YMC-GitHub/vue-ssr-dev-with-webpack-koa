<template>
  <div>
    <p>{{ $t("message.hello") }}</p>
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
          {{
          lang
          }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      langs: ['ch', 'en']
    }
  },
  methods: {
    fetchLang(e) {
      // this.$store.commit("fetchMessage", e.target.value);
    },
    changeLang() {}
  },
  title() {
    return 'Koa Vue SSR| Lang'
  }
}
</script>
