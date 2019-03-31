import { Vue, Component } from 'vue-property-decorator';

interface Error {
  code: string;
  message: string;
}

@Component
export default class HandleError extends Vue {
  public handleError(error: Promise<Error>): Promise<boolean> {
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
  }
}
