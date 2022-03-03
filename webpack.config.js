// tomamos el directorio actual (root path) de nuestro proyecto
const path = require("path");
var HtmlWebpackPlugIn = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Archivo de configuracion de webpack
module.exports = {
  mode: "development", // development  (nomin), prod(min)
  entry: {
      index: "./src/index.js",
      abierto: "./src/abiertoB.js",
      comienzo: "./src/comienzoB.js",
      ahogar: "./src/ahogarB.js",
      alrededor: "./src/alrededorB.js",
      atacar: "./src/atacarA.js",
      buscar: "./src/buscarA.js",
      celda: "./src/celdaB.js",
      comentario: "./src/comentarioB.js",
      derecha: "./src/derechaA.js",
      distraer: "./src/distraerB.js",
      epilogo1: "./src/epilogo1A.js",
      epilogo2: "./src/epilogo2B.js",
      epilogo3: "./src/epilogo3B.js",
      este: "./src/esteA.js",
      fuerza: "./src/fuerzaB.js",
      hada: "./src/hadaA.js",
      hablar: "./src/hablarA.js",
      ignorar: "./src/ignorarA.js",
      izquierda: "./src/izquierdaA.js",   
      muerte: "./src/muerteA.js",
      nadar: "./src/nadarB.js",
      norte: "./src/norteB.js",
      oeste: "./src/oesteA.js"
  },
  output: {
    filename: "[name].bundle.js", // nombre del archivo que deseamos generar para nuestro bundle
    path: path.resolve(__dirname, "bundle"), //almacenamos nuestro output en un nuevo directorio dentro de nuestro root path
  },
  module:{
    rules:[
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(svg|png|jpeg|jpg|gif|wav|mp3)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "./Assets"
          }
        }
      }

    ]
  },
  plugins: 
  [new HtmlWebpackPlugIn({
    template: "index.html",
    chunks: ["index"]
  }), 
  new HtmlWebpackPlugIn({
    template: "./src/abierto.html",
    filename: 'abierto.html',
    chunks: ["abierto"]
  }), 
  new HtmlWebpackPlugIn({
    template: "./src/ahogar.html",
    filename: 'ahogar.html',
    chunks: ["ahogar"]
  }), new HtmlWebpackPlugIn({
    template: "./src/buscar.html",
    filename: 'buscar.html',
    chunks: ["buscar"]
  }), new HtmlWebpackPlugIn({
    template: "./src/alrededor.html",
    filename: 'alrededor.html',
    chunks: ["alrededor"]
  }), new HtmlWebpackPlugIn({
    template: "./src/atacar.html",
    filename: 'atacar.html',
    chunks: ["atacar"]
  }), 
  new HtmlWebpackPlugIn({
    template: "./src/celda.html",
    filename: 'celda.html',
    chunks: ["celda"]
  }), 
  new HtmlWebpackPlugIn({
    template: "./src/comentario.html",
    filename: 'comentario.html',
    chunks: ["comentario"]
  }), 
  new HtmlWebpackPlugIn({
    template: "./src/comienzo.html",
    filename: 'comienzo.html',
    chunks: ["comienzo"]
  }), new HtmlWebpackPlugIn({
    template: "./src/derecha.html",
    filename: 'derecha.html',
    chunks: ["derecha"]
  }), new HtmlWebpackPlugIn({
    template: "./src/distraer.html",
    filename: 'distraer.html',
    chunks: ["distraer"]
  }), new HtmlWebpackPlugIn({
    template: "./src/epilogo1.html",
    filename: 'epilogo1.html',
    chunks: ["epilogo1"]
  }), new HtmlWebpackPlugIn({
    template: "./src/epilogo2.html",
    filename: 'epilogo2.html',
    chunks: ["epilogo2"]
  }), new HtmlWebpackPlugIn({
    template: "./src/epilogo3.html",
    filename: 'epilogo3.html',
    chunks: ["epilogo3"]
  }), new HtmlWebpackPlugIn({
    template: "./src/este.html",
    filename: 'este.html',
    chunks: ["este"]
  }), new HtmlWebpackPlugIn({
    template: "./src/fuerza.html",
    filename: 'fuerza.html',
    chunks: ["fuerza"]
  }), new HtmlWebpackPlugIn({
    template: "./src/hablar.html",
    filename: 'hablar.html',
    chunks: ["hablar"]
  }), new HtmlWebpackPlugIn({
    template: "./src/hada.html",
    filename: 'hada.html',
    chunks: ["hada"]
  }), new HtmlWebpackPlugIn({
    template: "./src/ignorar.html",
    filename: 'ignorar.html',
    chunks: ["ignorar"]
  }), new HtmlWebpackPlugIn({
    template: "./src/izquierda.html",
    filename: 'izquierda.html',
    chunks: ["izquierda"]
  }), new HtmlWebpackPlugIn({
    template: "./src/muerte.html",
    filename: 'muerte.html',
    chunks: ["muerte"]
  }), new HtmlWebpackPlugIn({
    template: "./src/nadar.html",
    filename: 'nadar.html',
    chunks: ["nadar"]
  }), new HtmlWebpackPlugIn({
    template: "./src/norte.html",
    filename: 'norte.html',
    chunks: ["norte"]
  }), new HtmlWebpackPlugIn({
    template: "./src/oeste.html",
    filename: 'oeste.html',
    chunks: ["oeste"]
  }),
  new MiniCssExtractPlugin({ 
    filename: "[name].css" 
  })]
};