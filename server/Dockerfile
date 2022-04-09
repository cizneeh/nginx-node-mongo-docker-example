FROM node:16

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# キャッシュを利用するために、package.jsonとpackage-lock.jsonのみをコピーし、
# 依存関係を先にインストール
COPY package*.json ./
RUN npm install

# アプリケーションコードをコンテナにコピー
COPY . .

EXPOSE 8080
CMD [ "node", "src/app.js" ]