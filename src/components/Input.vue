<template>
    <div class="input">
        <input
          :id="id"
          :name="name"
          :type="type"
          :placeholder="placeholder"
          v-validate="validationRules"
          @keyup="inputChange"
          @change="inputChange"
          :required="isRequired"
        />
        <span>{{ errors.first(name) }}</span>
    </div>
</template>

<script lang="ts">
import { Prop, Vue, Component, Emit } from 'vue-property-decorator';

@Component({
  inject: ['$validator'],
})
export default class Input extends Vue {
  @Prop(String) private readonly id!: string;
  @Prop(String) private readonly name!: string;
  @Prop(String) private readonly type!: string;
  @Prop(String) private readonly validationRules!: string;
  @Prop({ default: '', type: String }) private readonly placeholder!: string;
  @Prop({ default: false, type: Boolean })
  private readonly isRequired!: boolean;

  @Emit('changed')
  private inputChange(e: Event) {
    if (e) {
      return { key: this.name, value: (e.target as HTMLInputElement).value };
    }
  }
}
</script>

