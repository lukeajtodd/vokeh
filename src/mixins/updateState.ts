import { Vue, Component } from 'vue-property-decorator';

@Component
export default class UpdateState extends Vue {
  private updateState({ key, value }: { key: string; value: string }): void {
    if (this.hasOwnProperty(key)) {
      (this as any)[key] = value;
    }
  }
}
