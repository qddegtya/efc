<template>
  <FormProvider :form="form">
    <Field
      name="select"
      title="选择框"
      :decorator="[FormItem]"
      :component="[
        ${'component'},
        {
          style: {
            width: '240px',
          },
        },
      ]"
      :dataSource="[
        {
          label: '选项1',
          value: 1,
        },
        {
          label: '选项2',
          value: 2,
        },
      ]"
    />
    <Submit @submit="log">提交</Submit>
  </FormProvider>
</template>

<script>
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/vue'
import { FormItem, Submit } from '@formily/element'

import "element-ui/packages/theme-chalk/src/index.scss";
import ${'component'} from '@root/index.ts'

const form = createForm()
export default {
  components: { FormProvider, Field, Submit },
  data() {
    return {
      FormItem,
      ${'component'},
      form,
    }
  },
  methods: {
    log(value) {
      console.log(value)
    },
  },
}
</script>
