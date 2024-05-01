import visualizer from 'rollup-plugin-visualizer';

export default {
  input: 'src/main.js',

  output: {
    file: 'bundle.js', 
    format: 'iife'
  },

  plugins: [
    visualizer()
  ]
}