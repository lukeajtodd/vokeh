export default {
  methods: {
    handleError(error) {
      return error.then((err) => {
        if (err && (err.code || err.message)) {
          this.$toasted.show(err.message ? err.message : 'Unknown Error', {
            type: 'error',
            duration: 4000,
            action: {
              text: 'Close',
              onClick: (e, toastObject) => {
                toastObject.goAway(0);
              },
            },
          });
          return false;
        } else {
          return true;
        }
      });
    },
  },
};
