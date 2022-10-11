# pettern

1. browser → API → success
2. getServerSideProps → API → browser → success → browser
3. getStaticProps → API → browser → success → browser
4. getStaticProps(ISR) → API → browser → success → browser
5. browser → API → failure
6. browser → API Routes → API → failure → browser
7. getServerSideProps → API → failure → browser
8. getServerSideProps → API Routes → API → failure → browser
<!-- 9. getStaticProps → API → failure → browser -->
<!-- 10. getStaticProps(ISR) → API → failure → browser -->

# めも

## Vercelを使う場合
Sentry integrationを使うのがいいらしい
https://docs.sentry.io/product/integrations/deployment/vercel/

→https://vercel.com/integrations/sentry ここでsentryと接続に失敗するので諦めた
→おそらく環境変数をvercelに自動で同期してくれるだけなので、手動で全部追加した
## SourceMapがよくわからない
SourceMapとは
https://zenn.dev/genmaru/articles/c36973ee242706#sourcemap%E3%81%A8%E3%81%AF