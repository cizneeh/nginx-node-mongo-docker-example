FROM nginx:1.21

# デフォルトの設定を削除
RUN rm /etc/nginx/conf.d/default.conf

# 作成した設定ファイルをコピー
COPY conf/proxy.conf /etc/nginx/conf.d