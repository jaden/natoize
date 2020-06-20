new ClipboardJS('#clipboard-button');

new Vue({
  el: '#app',
  data: {
    inputString: 'wtf',
  },

  mounted: function () {
    this.getStringFromUrl();
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
