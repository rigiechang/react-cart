var config = { 
   entry: './main.js', 
   output: { 
      path:'/', 
      filename: 'index.js', 
   }, 
   devServer: { 
      inline: true, 
      port: 6060 
   }, 
   module: { 
      rules: [ 
         { 
            test: /\.jsx?$/, 
            exclude: /node_modules/, 
            loader: 'babel-loader', 
            query: { 
               presets: ['es2015', 'react'] 
            } 
         } 
      ] 
   } 
} 
module.exports = config; 