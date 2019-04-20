export default {
  methods: {
    updateState({ key, value }) {
      if (this.hasOwnProperty(key)) {
        this[key] = value;
      }
    },
  },
};
