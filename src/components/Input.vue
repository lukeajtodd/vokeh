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
        <span class="has-errors">{{ errors.first(name) }}</span>
    </div>
</template>

<script>

export default {
  inject: ['$validator'],
  name: 'Input',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    validationRules: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
    isRequired: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    inputChange(e) {
      if (e) {
        this.$emit('changed', { key: this.name, value: e.target.value })
      }
    },
  },
};
</script>

