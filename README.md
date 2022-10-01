# Next.js * Mantine * Tailwind

- Next.js
- eslint
- prettier
- husky
- jest
- react-testing-library
- scaffdog
- renovate bot
- pathpida
- tailwindcss
- mantine

## tailwind install

https://tailwindcss.com/docs/guides/nextjs

## mantine install

https://mantine.dev/getting-started/

```
yarn add @mantine/hooks @mantine/core @mantine/next
```

## ⭐ remove @tailwind base;

https://zenn.dev/elletech/articles/mantine-tailwindcss

> Tailwind CSSのリセットCSSとMantineが競合してしまう
> (buttonのbackground-colorにtransparentが当たってしまう)

## How to use
Mantineの用途は、主要コンポーネントのimportにとどめる。
細かいスタイリングはtailwindで行う。
- 複雑なコンポーネントをMantineからimportして使う
- tailwindでのスタイリングは余白や、mantineコンポーネントへのスタイル修正など
- 余白のスタイル責務はtailwindに負わせる

`@mantine/core` / `@mantine/hooks` のみが入っているので必要ならば他のMantineライブラリも入れる。

# memo

### "prettier-plugin-tailwindcss" と "eslint-plugin-tailwindcss" はなんか一緒に使うとばぐる
保存と同時に一瞬並び替えられるがまた元に戻される
→eslintのほうだけ残して解決

### jest v28
`jest-environment-jsdom` を別途入れる必要がある

### mantine v5
`@emotion/react @emotion/server` を別途入れる必要がある