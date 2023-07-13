module.exports = {
  mode: 'development',
  // 어디에서 부터 시작할것인지 -> entry
  // default -> src/index.js
  // 여러개의 entry point도 가능하다.
  entry: './index.js',
  output: {
    // webpack이 적용된 파일의 이름
    filename: 'bundle.js',
    // 저장될 위치 -> full path 필요
    // __dirname -> node에서 제공해주는 기본 기능으로 현재까지의 path를 제공해준다.
    path: __dirname + '/dist',
  },
  // webpack에서 주기적으로 변화를 감지한다.
  watch: true
};