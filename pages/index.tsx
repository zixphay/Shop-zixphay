// pages/index.tsx
import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <Head>
        <title>Shop Zixphay</title>
        <meta name="description" content="Shop bán ACC Roblox tự động" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-center">
        <h1 className="text-4xl font-bold">Chào mừng đến với Shop Zixphay</h1>
        <p className="mt-4 text-lg">Mua bán tài khoản Roblox nhanh – gọn – lẹ</p>
      </main>
    </div>
  )
}
