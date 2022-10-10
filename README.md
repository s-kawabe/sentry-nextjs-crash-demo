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