import { connect, mapProps, h } from '@formily/vue'
import { defineComponent } from '@vue/composition-api'

import type {
  Select as ElSelectProps,
  Option as ElOptionProps,
} from 'element-ui'
import { Select as ElSelect, Option as ElOption } from 'element-ui'

export type SelectProps = ElSelectProps & {
  options?: Array<ElOptionProps | string>
}

const SelectOption = defineComponent<SelectProps>({
  name: 'FSelect',
  props: ['options'],
  setup(customProps, { attrs, slots, listeners }) {
    return () => {
      const options = customProps.options || []
      const children =
        options.length !== 0
          ? {
              default: () =>
                options.map((option) => {
                  if (typeof option === 'string') {
                    return h(
                      ElOption,
                      { props: { label: option, value: option } },
                      {}
                    )
                  } else {
                    return h(ElOption, { props: option }, {})
                  }
                }),
            }
          : slots
      return h(
        ElSelect,
        {
          attrs: {
            ...attrs,
          },
          on: listeners,
        },
        children
      )
    }
  },
})

export const ${'component'} = connect(
  SelectOption,
  mapProps({ dataSource: 'options', loading: true })
)

export default ${'component'}
