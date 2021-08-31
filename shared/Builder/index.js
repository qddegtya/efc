const webpack = require('webpack')
const Configer = require('../Configer')

const Builder = ({
  context,
  abcOption
}) => {
  return webpack(Configer({
    context,
    ...abcOption
  }))
}

module.exports = Builder
