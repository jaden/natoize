const app = Vue.createApp({
  data() {
    return {
      inputString: 'wtf',
      map,
    };
  },

  mounted: function () {
    this.getStringFromUrl();
    new ClipboardJS('#clipboard-button');
  },

  methods: {
    getStringFromUrl: function () {
      const str = document.location.hash.replace(/[#\/]+/, '');

      if (str.length > 0) {
        this.inputString = str;
      }
    },
  },

  computed: {
    convertedString: function () {
      return natoize(this.inputString);
    },
  }
});

app.mount('#app');
